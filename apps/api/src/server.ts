import "dotenv/config";

import cors from "cors";
import express from "express";
import { createServer } from "http";
import { db } from "./db.js";
import { trpcExpressRouter } from "./routes/trpc/trpcRouter.js";
import { openai } from "./utils/llm.js";
import { index } from "./utils/pinecone.js";

async function main() {
  const port = Number(process.env.API_PORT);

  const app = express();
  const httpServer = createServer(app);

  app.use(
    cors({
      origin: process.env.API_PORTFOLIO_WEB_URL,
      methods: ["POST"],
      credentials: true,
    })
  );

  /**
   * Log when request finishes
   */
  app.use((req, res, next) => {
    const start = Date.now();

    res.on("finish", () => {
      const duration = Date.now() - start;
      // Skip logging for OPTIONS requests (CORS)
      if (req.method !== "OPTIONS") {
        console.log(
          `${req.method} ${req.path} ${res.statusCode} ${duration}ms`
        );
      }
    });

    next();
  });

  /**
   * tRPC does not support streaming, so we need to use a custom endpoint
   */
  app.post("/api/chat", express.json(), async (req, res) => {
    try {
      const { messages } = req.body;

      if (!messages) {
        res.status(400).json({ error: "Message is required" });
        return;
      }

      const response = await index.searchRecords({
        query: {
          topK: 5,
          inputs: { text: messages[messages.length - 1].content[0].text },
        },
      });

      const contextMessage = {
        role: "system",
        content: `Relevant context:\n${response.result.hits.map((hit) => (hit.fields as { chunk_text: string }).chunk_text).join("\n\n")}`,
      };

      const stream = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          contextMessage,
          ...messages.map((msg: any) => ({
            role: msg.role,
            content: msg.content[0].text,
          })),
        ],
        stream: true,
      });

      // Set appropriate headers for streaming
      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");

      // Stream the response
      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content;
        if (content) {
          res.write(`data: ${JSON.stringify({ message: content })}\n\n`);
        }
      }

      res.end();
    } catch (error) {
      console.error("Chat completion error:", error);
      // If headers haven't been sent yet, send error response
      if (!res.headersSent) {
        res.status(500).json({ error: "Internal server error" });
      } else {
        // If streaming has started, end the stream
        res.end();
      }
    }
  });

  app.use("/trpc", trpcExpressRouter);

  app.on("close", async () => {
    await db.$disconnect().catch(async (e) => {
      console.error(e);
      await db.$disconnect();
      process.exit(1);
    });
  });

  httpServer.listen(port);

  console.info(`🐌 Server running on port ${port}`);
}

main();
