import pc from "../src/utils/pinecone.ts";

const indexName = "portfolio-index";

const index = pc.index(indexName).namespace("ns1");

const stats = await index.describeIndexStats();

console.log(stats);