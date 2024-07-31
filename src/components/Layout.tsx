import { Outlet } from 'react-router-dom';

import { styled } from 'styled-components';
import logo from '../../public/svgs/logo.svg';

export default function Layout() {
  return (
    <Wrapper>
      <UpperComponent>
        <img src={logo} />
      </UpperComponent>
      <Outlet />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f5f3ed;

  height: 100svh;
`;

const UpperComponent = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
