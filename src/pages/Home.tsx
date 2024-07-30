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
// import { naverApi } from '../api/naverCloudAPI';
import navbar from '../../public/svgs/navbar.svg';
import kimchi from '../../public/svgs/kimchi.svg';

export default function Home() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleBookmarkClick = (event) => {
    event.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  // const handleVoice = async () => {
  //   try {
  //     const res = await naverApi.post('/tts-premium/v1/tts');
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
          <SwiperSlideStyled className={open ? 'open' : 'close'}>
            <Card onClick={handleOpen}>
              <Front>
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
                  <h1 style={{ fontSize: '42px' }}>김치</h1>
                  <span style={{ fontSize: '20px', marginBottom: '50px' }}>
                    Kimchi
                  </span>
                  <div>
                    <img src={kimchi} alt="" />
                  </div>
                </div>
              </Front>
              <Back>Flipped</Back>
            </Card>
          </SwiperSlideStyled>

          <SwiperSlide>slide2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
        <NavbarWrapper>
          <img src={navbar} />
          <ButtonWrapper>
            <Nav>퀴즈</Nav>
            <Nav style={{ background: '#4D5FC9', color: 'white' }}>홈</Nav>
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
  /* background-color: #f5f3ed; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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

const SwiperSlideStyled = styled(SwiperSlide)`
  perspective: 1000px;
  &.open ${Card} {
    animation: ${flipToBack} 0.6s forwards;
  }
  &.close ${Card} {
    animation: ${flipToFront} 0.6s forwards;
  }
`;

const Front = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  /* background: linear-gradient(180deg, #fff 0%, #7289fb 100%); */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
`;

const Back = styled(Front)`
  transform: rotateY(180deg);
  background-color: white;
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
