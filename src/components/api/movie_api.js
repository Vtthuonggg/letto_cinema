import axios from "axios";

const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY = process.env.API_KEY;
const movieApi = axios.create({
  baseURL: API_BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getNowShowingMovies = async () => {
  try {
    const response = await movieApi.get("/now_playing");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching now showing movies:", error);
    throw error;
  }
};

export const getUpcomingMovies = async () => {
  try {
    const response = await movieApi.get("/upcoming");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    throw error;
  }
};
