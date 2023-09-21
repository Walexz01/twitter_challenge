import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: 'https://backend.getlinked.ai',
    headers:{
        "Content-Type":"application/json"
    }
});