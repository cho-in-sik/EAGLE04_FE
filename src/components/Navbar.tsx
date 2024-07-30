import styled from 'styled-components';
import navbar from '../../public/svgs/navbar.svg';

export default function Navbar() {
  return (
    <NavbarWrapper>
      <img src={navbar} />
      <ButtonWrapper>
        <Nav>퀴즈</Nav>
        <Nav style={{ background: '#4D5FC9', color: 'white' }}>홈</Nav>
        <Nav>MY</Nav>
      </ButtonWrapper>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  margin-top: 30px;
  position: relative;
`;

const Nav = styled.div`
  width: 50px;
  height: 50px;
  stroke-width: 2px;
  stroke: #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d5d5d5;
  border: 1px solid black;
  font-size: 17px;
  color: #001171;
`;

const ButtonWrapper = styled.div`
  z-index: 10;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  top: -20px;
`;
