import styled from 'styled-components';
import { api } from '../api/customAxios';
import { useEffect, useState } from 'react';
import { useNavigate, useSubmit } from 'react-router-dom';
import { getAuthToken } from '../utils/token';
import navbar from '../../public/svgs/navbar.svg';
import logo from '../../public/svgs/logo.svg';
import settings from '../../public/svgs/settings.svg';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import useLanguage from '../hook/useLanguage';

export default function CategoryHome() {
  const lang = [
    { id: 1, value: '한국어', type: 'ko' },
    { id: 2, value: 'English', type: 'en' },
    { id: 3, value: '日本語', type: 'ja' },
    { id: 4, value: '简体中文', type: 'zh-CN' },
    { id: 5, value: '繁體中文', type: 'zh-TW' },
    { id: 6, value: 'Tiếng Việt', type: 'vi' },
    { id: 7, value: 'ไทย', type: 'th' },
    { id: 8, value: 'Bahasa Indonesia', type: 'id' },
    { id: 9, value: 'Français', type: 'fr' },
    { id: 10, value: 'Español', type: 'es' },
    { id: 11, value: 'Русский', type: 'ru' },
    { id: 12, value: 'Deutsch', type: 'de' },
    { id: 13, value: 'Italiano', type: 'it' },
  ];
  const { addLanguage, language } = useLanguage();
  console.log(language);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
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
  const handleChose = async (lang) => {
    console.log(lang);
    addLanguage(lang);
  };
  useEffect(() => {
    handleCategory();
  }, []);
  return (
    <Wrapper>
      <TranslateWrapper onClick={handleMenu}>
        <img src={settings} />
      </TranslateWrapper>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ maxHeight: '300px' }}
      >
        {lang.map((lang) => (
          <MenuItem onClick={() => handleChose(lang)}>{lang.value}</MenuItem>
        ))}
      </Menu>
      <CarouselWrapper>
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
          <Nav onClick={() => navigate('/self-login')}>MY</Nav>
        </ButtonWrapper>
      </NavbarWrapper>
    </Wrapper>
  );
}

const TranslateWrapper = styled.div`
  position: absolute;
  /* margin-top: -80px; */
  right: 30px;
  top: 50px;
`;

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
