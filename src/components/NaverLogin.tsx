import naver from '../../public/svgs/naver.svg';
import styled from 'styled-components';

export default function NaverLogin() {
  return (
    <NaverLoginButton>
      <img src={naver} alt="naverLogo" />
      네이버로 로그인
    </NaverLoginButton>
  );
}

const NaverLoginButton = styled.div`
  width: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: linear-gradient(0deg, #03c75a 0%, #03c75a 100%), #f4f4f4;
  color: white;
`;
