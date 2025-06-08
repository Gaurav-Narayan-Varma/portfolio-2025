import "dotenv/config";

import { Pinecone } from "@pinecone-database/pinecone";

const pc = new Pinecone({
  apiKey: process.env.API_PINECONE_API_KEY!,
});

export default pc;
