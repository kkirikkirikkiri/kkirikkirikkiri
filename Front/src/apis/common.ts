import axios from "axios";
import Cookies from "js-cookie";
const config = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },
};

export const axiosInstance = axios.create(config);

export const authInstance = axios.create(config);

axiosInstance.interceptors.request.use(async (config) => {
  try {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
  } catch (error) {
    return Promise.reject(error);
  }
  return config;
});
