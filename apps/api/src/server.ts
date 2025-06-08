import "dotenv/config";

import express from "express";
import { createServer } from "http";
import { db } from "./db.js";
import { trpcExpressRouter } from "./routes/trpc/trpcRouter.js";

async function main() {
  const port = Number(process.env.API_PORT);

  const app = express();
  const httpServer = createServer(app);

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
