import axios from "axios";
import { API_BASE_URL } from "../../../BASE_URL.js";

export const getNowShowingMovies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movie/now_playing`, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Có lỗi xảy ra");
    throw error;
  }
};

export const getUpcomingMovies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movie/upcoming`, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    throw error;
  }
};
export const getDetailMovie = async (id) => {
  try {
    const response = await axios.get(`/movie/${id}`, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    throw error;
  }
};
export const getTrailerMovie = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movie/${id}/videos`, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    throw error;
  }
};
export const getUpcomingMoviesSearch = async (search) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movie/fint_upcoming`, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
      params: {
        title: search
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    throw error;
  }
};
export const getNowShowingMoviesSearch = async (search) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movie/find_nowplaying`, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
      params: {
        title: search
      }
    });
    return response.data;
  } catch (error) {
    console.error("Có lỗi xảy ra");
    throw error;
  }
};