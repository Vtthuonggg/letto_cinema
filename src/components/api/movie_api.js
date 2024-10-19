import axios from "axios";
import { API_BASE_URL, API_KEY } from "../../../BASE_URL.js";

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
    console.error("Có lỗi xảy ra");
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
