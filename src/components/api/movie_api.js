import axios from "axios";
import { API_BASE_URL, API_KEY } from "../../../BASE_URL.js";

const movieApi = axios.create({
  baseURL: API_BASE_URL,
  params: {
    api_key: API_KEY,
    language: "vi",
  },
});

export const getNowShowingMovies = async () => {
  try {
    const response = await movieApi.get("/movie/now_playing");
    return response.data.results;
  } catch (error) {
    console.error("Có lỗi xảy ra");
    throw error;
  }
};

export const getUpcomingMovies = async () => {
  try {
    const response = await movieApi.get("/movie/upcoming");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    throw error;
  }
};
export const getDetailMovie = async (id) => {
  try {
    const response = await movieApi.get(`/movie/${id}`);
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    throw error;
  }
};
