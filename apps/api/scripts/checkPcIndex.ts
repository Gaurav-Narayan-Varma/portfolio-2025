import { index } from "../src/utils/pinecone.ts";

const stats = await index.describeIndexStats();

console.log(stats);
