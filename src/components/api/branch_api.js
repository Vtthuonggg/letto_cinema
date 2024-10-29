import axios from "axios";
import {API_BASE_URL} from "../../../BASE_URL.js";

export const getListBranch = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/branch`, {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        });
        return response.data.results;
    } catch (error) {
        console.error("Có lỗi xảy ra");
        throw error;
    }
};
export const detailBranch = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/branch/${id}`, {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        });
        return response.data.results;
    } catch (error) {
        console.error("Có lỗi xảy ra");
        throw error;
    }
};
export const deleteBranch = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/branch/${id}`, {});
        return response.data.results;
    } catch (error) {
        console.error("Có lỗi xảy ra");
        throw error;
    }
};
export const createBranch = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/branch/add`, {
            data: data
        });
        return response.data.results;
    } catch (error) {
        console.error("Có lỗi xảy ra");
        throw error;
    }
};

