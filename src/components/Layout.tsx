import { Outlet } from 'react-router-dom';

import { styled } from 'styled-components';

export default function Layout() {
  return (
    <Wrapper>
      <UpperComponent></UpperComponent>
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
`;
