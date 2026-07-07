import axios from "axios";

const API =  import.meta.env.VITE_API_URL;

export const sendMessage = async (message) => {

    const response = await axios.post(
        `${API}/ai/chat`,
        {
            message,
        }
    );

    return response.data.response;
};