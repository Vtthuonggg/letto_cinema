import axios from "axios";
import { API_BASE_URL } from "../../../BASE_URL.js";

export const detailPlace = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/place/${id}`, {
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
export const listPlaceRoom = async (roomId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/place/list`, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
      params: {
        id: roomId,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Có lỗi xảy ra");
    throw error;
  }
};
export const addPlaceRoom = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/place/add`, data);
    return response.data;
  } catch (error) {
    console.error("Có lỗi xảy ra");
    throw error;
  }
};
export const updatePlace = async (data, id) => {
  console.log(data);
  console.log(id);
  try {
    const response = await axios.put(
      `${API_BASE_URL}/place/update/${id}`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Có lỗi xảy ra");
    throw error;
  }
};
export const deletePlace = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/place/${id}`);
    return response.data;
  } catch (error) {
    console.error("Có lỗi xảy ra");
    throw error;
  }
};
