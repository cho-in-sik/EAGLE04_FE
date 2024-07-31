import { api } from '../api/customAxios';
import { getAuthToken } from './token';
import { redirect } from 'react-router-dom';

export async function checkTokenCategory() {
  const token = getAuthToken();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const res = await api.get('/favorite/check', { headers });
  if (res.data.response === false) {
    return null;
  } else {
    window.location.href = '/category-home';
  }
}

export async function checkToken() {
  const token = getAuthToken();
  console.log(token);
  if (token) {
    return null;
  } else {
    window.location.href = '/self-login';
    return;
  }
}

export function logoutAction() {
  localStorage.removeItem('token');
  localStorage.removeItem('expiration');
  return redirect('/');
}
