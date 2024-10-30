import axios from "axios";
import Cookies from "js-cookie";

import {API_BASE_URL} from "../../../BASE_URL.js";

export const addTicket = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/ticket/add`, data);
        return response.data;
    } catch (error) {
        console.error("addTicket:", error);
        throw error;
    }
};
export const listTicket = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/ticket`, {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
        });
        return response.data;
    } catch (error) {
        console.error("addTicket:", error);
        throw error;
    }
};
export const detailTicket = async (idTicket) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/ticket/get`, {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
            params: {'id': idTicket}
        });
        return response.data;
    } catch (error) {
        console.error("addTicket:", error);
        throw error;
    }
};
export const deleteTicket = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/ticket/${id}`);
        return response.data;
    } catch (error) {
        console.error("addTicket:", error);
        throw error;
    }
};
export const historyTicket = async () => {
    const userId = Cookies.get("accountId");
    try {
        const response = await axios.get(`${API_BASE_URL}/ticket/history`, {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
            params: {'id': userId}
        });
        return response.data;
    } catch (error) {
        console.error("addTicket:", error);
        throw error;
    }
};