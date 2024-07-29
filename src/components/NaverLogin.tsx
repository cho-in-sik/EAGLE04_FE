import { Button } from '@mui/material';
import naverLogo from '../assets/images/naver.png';
import styled from 'styled-components';

export default function NaverLogin() {
  return (
    <NaverLoginButton
      startIcon={<img width="48px" height="48px" src={naverLogo} />}
      disableElevation={true}
      variant="contained"
      sx={{
        textTransform: 'none',
        color: '#fff',
        fontSize: '24',
        background: '#03c75a',
        borderRadius: '10px',
        '&:hover': { background: '#03c75a' },
      }}
    >
      네이버로 로그인
    </NaverLoginButton>
  );
}

const NaverLoginButton = styled(Button)`
  width: 100%;
`;
