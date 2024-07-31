import styled from 'styled-components';
import { api } from '../api/customAxios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthToken } from '../utils/token';
import navbar from '../../public/svgs/navbar.svg';
import logo from '../../public/svgs/logo.svg';

export default function CategoryHome() {
  const token = getAuthToken();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const navigate = useNavigate();
  const handleCategory = async () => {
    const res = await api.get('/category', { headers });
    console.log(res);
  };

  const handleClick = async (id: any) => {
    navigate(`/home/${id}`);
  };
  useEffect(() => {
    handleCategory();
  }, []);
  return (
    <Wrapper>
      <CarouselWrapper>
        {' '}
        <img src={logo} style={{ marginTop: '-20px' }} />
      </CarouselWrapper>
      <CategoryWrapper>
        <Category
          style={{ marginTop: '10px', backgroundColor: '#32FFFF' }}
          id="2"
          onClick={(e) => handleClick(e.currentTarget.id)}
        >
          <h5>케이팝</h5>
          <h6>K-POP</h6>
        </Category>
        <Category
          style={{ backgroundColor: '#FFAF60' }}
          id="1"
          onClick={(e) => handleClick(e.currentTarget.id)}
        >
          <h5>생활양식</h5>
          <h6>Game</h6>
        </Category>
        <Category
          style={{ backgroundColor: '#17FF0C' }}
          id="4"
          onClick={(e) => handleClick(e.currentTarget.id)}
        >
          <h5>음식</h5>
          <h6>Food</h6>
        </Category>
        <Category
          style={{ backgroundColor: '#FFFF09' }}
          id="5"
          onClick={(e) => handleClick(e.currentTarget.id)}
        >
          <h5>전통문화</h5>
          <h6>Culture</h6>
        </Category>
        <Category
          style={{ backgroundColor: '#F6F' }}
          id="3"
          onClick={(e) => handleClick(e.currentTarget.id)}
        >
          <h5>트렌드&밈</h5>
          <h6>Trend</h6>
        </Category>
      </CategoryWrapper>
      <NavbarWrapper>
        <img src={navbar} />
        <ButtonWrapper>
          <div onClick={() => navigate('/quiz')}>
            <Nav>퀴즈</Nav>
          </div>
          <Nav style={{ background: '#4D5FC9', color: 'white' }}>홈</Nav>
          <Nav>MY</Nav>
        </ButtonWrapper>
      </NavbarWrapper>
    </Wrapper>
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

const Wrapper = styled.div`
  background-color: #f5f4f1;
  /* height: 100svb; */
  padding-top: 90px;
`;

const CarouselWrapper = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryWrapper = styled.div`
  padding: 0 33px;
  margin-top: 15px;
`;

const Category = styled.div`
  margin-top: -10px;
  height: 108px;
  width: 100%;
  border-radius: 61px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px -1px 4px 1px rgba(0, 0, 0, 0.25);

  font-style: normal;
  font-weight: 400;
  line-height: normal;
  h5 {
    font-size: 40px;
    margin-left: 45px;
    margin-right: 10px;
    color: #232323;
  }
  h6 {
    font-size: 24px;
    color: #694646;
    padding-right: 20px;
  }
`;
