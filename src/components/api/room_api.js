import axios from "axios";
import { API_BASE_URL } from "../../../BASE_URL.js";

export const detailRoom = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/room/${id}`, {
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
export const listRoom = async (branchId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/room/list`, {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
            params: {
                id: branchId,
            },
        });
        console.log('phòngggggg', response.data);
        return response.data;
    } catch (error) {
        console.error("Có lỗi xảy ra");
        throw error;
    }
};
export const createRoom = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/room/add`, data
        );
        return response.data;
    } catch (error) {
        console.error("Có lỗi xảy ra");
        throw error;
    }
};
export const deleteRoom = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/room/${id}`
        );
        return response.data;
    } catch (error) {
        console.error("Có lỗi xảy ra");
        throw error;
    }
};