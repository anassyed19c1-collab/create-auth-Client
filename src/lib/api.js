import axios from "axios";

// Base URL from environment variable
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // send Cookies for cross-origin requests
});

export default api;