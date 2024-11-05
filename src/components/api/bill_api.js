import axios from "axios";
import { API_BASE_URL } from "../../../BASE_URL.js";

export const getBillInfo = async (idBill) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/bill`, {

            headers: {
                "ngrok-skip-browser-warning": "true",
            },

            params: {
                id: idBill,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Có lỗi xảy ra");
        throw error;
    }
};
export const createBill = async () => {
    try {
        const response = await axios.post(`${API_BASE_URL}/bill/add`);
        return response.data;
    } catch (error) {
        console.error("Có lỗi xảy ra");
        throw error;
    }
};
export const updateBill = async (id, isPaid) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/bill/update/${id}`, { 'isPaid': isPaid });
        return response.data;
    } catch (error) {
        console.error("Có lỗi xảy ra");
        throw error;
    }
};
export const addBillService = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/bill_service`, data);
        return response.data;
    } catch (error) {
        console.error("Có lỗi xảy ra");
        throw error;
    }
};
export const addBillTicket = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/bill_ticket/add`, data);
        return response.data;
    } catch (error) {
        console.error("Có lỗi xảy ra");
        throw error;
    }
};
