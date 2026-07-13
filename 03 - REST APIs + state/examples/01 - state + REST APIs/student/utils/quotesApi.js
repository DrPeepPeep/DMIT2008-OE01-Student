const BASE_URL = "https://dummyjson.com/quotes";

const getRandomQuote = () => {
  fetch(`${BASE_URL}/random`).then((response) => {
    return response.json();
  });
};

export { getRandomQuote };
