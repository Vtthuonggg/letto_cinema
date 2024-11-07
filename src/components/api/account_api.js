import axios from "axios";
import { API_BASE_URL } from "../../../BASE_URL.js";
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/login`, {
      email: username,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const register = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/register`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const listUser = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user`, {
      // headers: {
      //   "ngrok-skip-browser-warning": "true",
      // },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}; export const detailUser = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${id}`, {
      // headers: {
      //   "ngrok-skip-browser-warning": "true",
      // },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};