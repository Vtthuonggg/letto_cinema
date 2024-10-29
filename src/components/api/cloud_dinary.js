import { CLOUDINARY_URL, UPLOAD_PRESET } from "../../../BASE_URL.js";
import axios from "axios";


export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    try {
        const response = await axios.post(CLOUDINARY_URL, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data.secure_url;
    } catch (error) {
        console.error(
            "Error uploading image:",
            error.response ? error.response.data : error.message
        );
        throw error;
    }
};