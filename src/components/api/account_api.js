import axios from "axios";
import { API_BASE_URL } from "../../../BASE_URL.js";
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/login`, {
      email: `${username}@gmail.com`,
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
