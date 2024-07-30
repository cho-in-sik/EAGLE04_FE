import axios, { AxiosInstance } from 'axios';

const naverApi: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_NAVERCLOUD_KEY,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-NCP-APIGW-API-KEY': 'ufidSOZb4RSYamN6sITiSCAtjOxxkwH79Qe0APdj',
    'X-NCP-APIGW-API-KEY-ID': 'jgsin43ptq',
  },
});

export { naverApi };
