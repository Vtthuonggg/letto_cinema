import axios from "axios";
import { API_BASE_URL } from "../../../BASE_URL.js";

export const detailRoom = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/screen/${id}`, {
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
export const listScreen = async (idMovie) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/screen/list`, {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
            params: {
                id: idMovie,
            },
        });
        console.log('Đây là screen', response.data);
        return response.data;
    } catch (error) {
        console.error("Có lỗi xảy ra");
        throw error;
    }
};
export const createScreen = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/screen/add`, data);
        return response.data;
    } catch (error) {
        console.error("Có lỗi xảy ra");
        throw error;
    }
};
export const updateScreen = async (id, data) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/screen/update/${id}`, data);
        return response.data;
    } catch (error) {
        console.error("Có lỗi xảy ra");
        throw error;
    }
};
export const deleteScreen = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/screen/${id}`);
        return response.data;
    } catch (error) {
        console.error("Có lỗi xảy ra");
        throw error;
    }
};