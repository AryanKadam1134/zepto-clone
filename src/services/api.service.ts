import axios, { type AxiosResponse, type AxiosError } from "axios";

const BASE_URL = "https://fakestoreapi.com";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// Response interceptor: Type responses as ApiResponse
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError | unknown) => {
    if (error instanceof axios.AxiosError) {
      return Promise.reject(error.response?.data || error);
    }

    return Promise.reject(error);
  },
);

export default api;
