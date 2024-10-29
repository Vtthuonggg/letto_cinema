import axios from "axios";
import {API_BASE_URL} from "../../../BASE_URL.js";


export const listService = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/service`, {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        });
        return response.data.results;
    } catch (error) {
        console.error("Có lỗi xảy ra");
        throw error;
    }
};export const detailService = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/service/${id}`, {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        });
        return response.data.results;
    } catch (error) {
        console.error("Có lỗi xảy ra");
        throw error;
    }
};export const createService = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/service/add`, data);
        return response.data.results;
    } catch (error) {
        console.error("Có lỗi xảy ra");
        throw error;
    }
};export const updateService = async (id, data) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/service/update/${id}`, data);
        return response.data.results;
    } catch (error) {
        console.error("Có lỗi xảy ra");
        throw error;
    }
};export const deleteService = async (id) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/service/${id}`);
        return response.data.results;
    } catch (error) {
        console.error("Có lỗi xảy ra");
        throw error;
    }
};