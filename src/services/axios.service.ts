import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
export const axiosService = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});