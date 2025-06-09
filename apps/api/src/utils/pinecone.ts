import "dotenv/config";

import { Pinecone } from "@pinecone-database/pinecone";

export const pc = new Pinecone({
  apiKey: process.env.API_PINECONE_API_KEY!,
});

export const index = pc
  .index(process.env.API_PINECONE_INDEX_NAME!)
  .namespace("ns1");
