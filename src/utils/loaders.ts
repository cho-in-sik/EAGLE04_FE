import { api } from '../api/customAxios';
import { getAuthToken } from './token';

export default async function checkTokenCategory() {
  const token = getAuthToken();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const res = await api.get('/favorite/check', { headers });
  if (res.data.response === false) {
    return null;
  } else {
    window.location.href = '/home';
  }
}
