import { index } from "../src/utils/pinecone.js";

const query = "What did Gaurav work on at Feast?";

const response = await index.searchRecords({
  query: {
    topK: 5,
    inputs: { text: query },
  },
});

console.log(response);

response.result.hits.forEach((hit) => {
  console.log("hit", hit);
});
