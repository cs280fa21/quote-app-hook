import axios from "axios";

const BASE_URL = "https://zenquotes.io/api";
const API_KEY = process.env.REACT_APP_API_KEY;

export async function getTodayQuote() {
  const response = await axios.get(`${BASE_URL}/today/${API_KEY}`);
  return {
    quote: response.data[0].q,
    author: response.data[0].a,
  };
}

export async function getRandomQuote() {
  const response = await axios.get(`${BASE_URL}/random/${API_KEY}`);
  return {
    quote: response.data[0].q,
    author: response.data[0].a,
  };
}
