import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import bookmark from '../../public/svgs/bookmark.svg';
import filledBookmark from '../../public/svgs/filledBookmark.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-cards';
import './styles.css';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { naverApi } from '../api/naverCloudAPI';
import axios from 'axios';

export default function Home() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    // 페이지 로드 시 스크롤 막기
    document.body.style.overflow = 'hidden';
    return () => {
      // 컴포넌트 언마운트 시 스크롤 복원
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleOpen = () => {
    setOpen((v) => !v);
  };

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleVoice = async () => {
    try {
      // const res = await axios.post(
      //   'https://naveropenapi.apigw.ntruss.com/tts-premium/v1/tts',
      // );
      const res = await naverApi.post('/tts-premium/v1/tts');
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
        <SwiperSlide onClick={handleOpen}>
          <ImgWrapper
            onClick={handleBookmarkClick}
            className={open ? 'open' : ''}
          >
            <img
              src={isBookmarked ? filledBookmark : bookmark}
              alt="bookmark"
            />
          </ImgWrapper>
          Slide 1
        </SwiperSlide>
        <SwiperSlide>
          <button onClick={handleVoice}>일단 보내봐</button>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f3ed;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ImgWrapper = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
`;
