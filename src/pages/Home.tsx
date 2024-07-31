import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import bookmark from '../../public/svgs/bookmark.svg';
import filledBookmark from '../../public/svgs/filledBookmark.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-cards';
import './styles.css';
import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import navbar from '../../public/svgs/navbar.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../api/customAxios';
import { getAuthToken } from '../utils/token';
import { useQuery } from '@tanstack/react-query';

import translate from '../../public/svgs/translate.svg';

interface SwiperSlideStyledProps {
  className: string;
  key: number;
}

interface BackgroundProps {
  backgroundColor?: string;
}

const colors = [
  'linear-gradient(180deg, #FFF 0%, #7289FB 100%)',
  'linear-gradient(180deg, #FFF 0%, #FF9E9E 100%)',
  'linear-gradient(180deg, #FFF 0%, #BC88FF 100%)',
  'linear-gradient(180deg, #FFF 0%, #FFAF60 100%)',
  'linear-gradient(180deg, #FFF 0%, #46FF40 100%)',
  'linear-gradient(180deg, #FFF 0%, #4AFFFF 100%)',
];

const getRandomColorIndex = () => {
  return Math.floor(Math.random() * colors.length);
};

export default function Home() {
  const token = getAuthToken();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const { categoryId } = useParams<{ categoryId: string }>();

  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [open, setOpen] = useState(false);
  const [colorIndexes, setColorIndexes] = useState<number[]>([]);

  const [translations, setTranslations] = useState<any>({});

  const handleCall = async () => {
    const res = await api.get(`/category/${categoryId}/items`, { headers });
    return res;
  };

  const { data } = useQuery({
    queryKey: ['card', categoryId],
    queryFn: () => handleCall(),
  });

  useEffect(() => {
    if (data?.data.response.items) {
      const indexes = data.data.response.items.map(() => getRandomColorIndex());
      setColorIndexes(indexes);
    }
  }, [data]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleBookmarkClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const handleTranslate = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    itemId: number,
    description: string,
    modifiedDescription: string,
  ) => {
    event.stopPropagation();
    const res = await api.post(
      '/translate',
      { text: description, target: 'en' },
      { headers },
    );
    const res2 = await api.post(
      '/translate',
      { text: modifiedDescription, target: 'en' },
      { headers },
    );
    setTranslations((prevTranslations) => ({
      ...prevTranslations,
      [itemId]: {
        translate0: res.data.response,
        translate1: res2.data.response,
      },
    }));
  };

  const parseItemName = (name: string) => {
    const match = name.match(/^(.*?)\s*\((.*?)\)$/);
    return match
      ? { main: match[1], translation: match[2] }
      : { main: name, translation: '' };
  };

  const replaceDescription = (description: string, translation: string) => {
    return description.replace(/이것/g, translation);
  };

  return (
    <>
      <Wrapper>
        <Swiper
          direction="vertical"
          effect="cards"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {data?.data.response.items.map((item: any, index: number) => {
            const { main, translation } = parseItemName(item.name);

            const imageUrl = `http://223.130.147.109:8080/${item.imageUrl}`;
            const backgroundColor = colors[colorIndexes[index]];
            const modifiedDescription = replaceDescription(
              item.additionalDescription,
              translation,
            );

            return (
              <SwiperSlideStyled
                className={open ? 'open' : 'close'}
                key={item.id}
              >
                <Card onClick={handleOpen}>
                  <Front backgroundColor={backgroundColor}>
                    <ImgWrapper onClick={handleBookmarkClick}>
                      <img
                        src={isBookmarked ? filledBookmark : bookmark}
                        alt="bookmark"
                      />
                    </ImgWrapper>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <h1 style={{ fontSize: '42px', maxWidth: '80%' }}>
                        {main}
                      </h1>
                      <span style={{ fontSize: '20px', marginBottom: '50px' }}>
                        {translation}
                      </span>
                      <div>
                        <img
                          style={{ borderRadius: '20px' }}
                          src={imageUrl}
                          alt={main}
                          width={250}
                          height={258}
                        />
                      </div>
                    </div>
                  </Front>
                  <Back>
                    <div
                      style={{ padding: '20px', marginTop: '100px' }}
                      onClick={(event) =>
                        handleTranslate(
                          event,
                          item.id,
                          item.description,
                          modifiedDescription,
                        )
                      }
                    >
                      <img src={translate} alt="translate icon" />
                    </div>
                    <div
                      style={{
                        width: '80%',
                        marginBottom: '25px',
                      }}
                    >
                      {item.description}
                    </div>
                    {translations[item.id]?.translate0 && (
                      <div
                        style={{
                          width: '80%',
                          marginBottom: '25px',
                        }}
                      >
                        {translations[item.id].translate0}
                      </div>
                    )}
                    <div
                      style={{
                        width: '80%',
                        marginBottom: '25px',
                      }}
                    >
                      {modifiedDescription}
                    </div>
                    {translations[item.id]?.translate1 && (
                      <div
                        style={{
                          width: '80%',
                          marginBottom: '25px',
                        }}
                      >
                        {translations[item.id].translate1}
                      </div>
                    )}
                  </Back>
                </Card>
              </SwiperSlideStyled>
            );
          })}
        </Swiper>
        <NavbarWrapper>
          <img src={navbar} alt="navbar" />
          <ButtonWrapper>
            <div onClick={() => navigate('/quiz')}>
              <Nav>퀴즈</Nav>
            </div>
            <Nav
              style={{ background: '#4D5FC9', color: 'white' }}
              onClick={() => navigate('/category-home')}
            >
              홈
            </Nav>
            <Nav>MY</Nav>
          </ButtonWrapper>
        </NavbarWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #f5f4f1;
`;

const ImgWrapper = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
  z-index: 20;
`;

const flipToBack = keyframes`
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(180deg);
  }
`;

const flipToFront = keyframes`
  from {
    transform: rotateY(180deg);
  }
  to {
    transform: rotateY(0);
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
`;

const SwiperSlideStyled = styled(SwiperSlide)<SwiperSlideStyledProps>`
  perspective: 1000px;
  &.open ${Card} {
    animation: ${flipToBack} 0.6s forwards;
  }
  &.close ${Card} {
    animation: ${flipToFront} 0.6s forwards;
  }
`;

const Front = styled.div<BackgroundProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  background: ${(props) => props.backgroundColor};
`;

const Back = styled(Front)`
  border: 14px solid #7f94fc;
  justify-content: flex-start;
  overflow: auto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  flex-direction: column;
  transform: rotateY(180deg);
  position: relative;
  background-color: white;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

  img {
    position: absolute;
    top: 30px;
    left: 30px;
  }
`;

const NavbarWrapper = styled.div`
  margin-bottom: -130px;
  margin-top: 70px;
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
