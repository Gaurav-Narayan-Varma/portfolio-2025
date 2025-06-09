import { z } from "zod";
import { openai } from "../../../utils/llm.js";
import { publicProcedure } from "../trpcBase.js";

export const sendMessage = publicProcedure
  // .input(
  //   z.object({
  //     message: z.string(),
  //   })
  // )
  .subscription(async function* ({ input }) {
    const stream = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: "Tell me a joke",
        },
      ],
      stream: true,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content;
      if (content) {
        yield { message: content };
      }
    }
  });
