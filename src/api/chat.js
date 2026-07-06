import axios from "axios";

const API =  "https://bitecount-backend.onrender.com";

export const sendMessage = async (message) => {

    const response = await axios.post(
        `${API}/ai/chat`,
        {
            message,
        }
    );

    return response.data.response;
};