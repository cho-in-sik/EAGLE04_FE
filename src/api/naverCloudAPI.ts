import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

const naverApi: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_NAVERCLOUD_KEY,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

naverApi.interceptors.request.use(
  async (
    config: InternalAxiosRequestConfig,
  ): Promise<InternalAxiosRequestConfig> => {
    return config;
  },
  (error) => {
    console.log(error);
    alert(error.response?.data.message);
    throw error;
  },
);

export { naverApi };
