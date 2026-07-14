const BASE_URL = "https://dummyjson.com/quotes";

// First way
// const getRandomQuote = () => {
//   return fetch(`${BASE_URL}/random`).then((response) => response.json());
// };

// Simple one liner way
const getRandomQuote = () => fetch(`${BASE_URL}/random`).then((response) => response.json());

export { getRandomQuote };
