// 리다이렉트 화면
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// import { api } from '../api/customAxios';
import axios from 'axios';

const RedirectURI = () => {
  const location = useLocation();
  const getNaverToken = async () => {
    if (!location.hash) return;
    const code = location.hash.split('=')[1].split('&')[0];
    console.log(code);
    const userData = await axios.get('https://openapi.naver.com/v1/nid/me', {
      headers: {
        Authorization: `Bearer ${code}`,
      },
    });
    console.log(userData);
    // await api
    //   .post(
    //     `/login/naver`,
    //     {
    //       code,
    //       state: null,
    //     },
    //     {
    //       withCredentials: true,
    //     },
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     window.location.replace('/');
    //   });
  };

  useEffect(() => {
    getNaverToken();
  }, []);

  return (
    <Box
      sx={{
        position: 'absolute',
        zIndex: 999,
        top: '45%',
        left: '45%',
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default RedirectURI;
