import axios from "axios";
import { API_BASE_URL } from "../../../BASE_URL.js";

export const addTicket = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/login`, {
      data,
    });
    return response.data;
  } catch (error) {
    console.error("addTicket:", error);
    throw error;
  }
};
