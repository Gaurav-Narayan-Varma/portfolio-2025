import "dotenv/config";

import { pc } from "../src/utils/pinecone.ts";

await pc.createIndexForModel({
  name: process.env.API_PINECONE_INDEX_NAME!,
  cloud: "aws",
  region: "us-east-1",
  embed: {
    model: "llama-text-embed-v2",
    fieldMap: { text: "chunk_text" },
  },
  waitUntilReady: true,
});
