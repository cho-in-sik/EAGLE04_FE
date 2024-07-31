import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import x from '../../public/svgs/realX.svg';
import medal1 from '../../public/svgs/medal1.svg';
import medal2 from '../../public/svgs/medal2.svg';
import medal3 from '../../public/svgs/medal3.svg';
import medal4 from '../../public/svgs/medal4.svg';

import navbar from '../../public/svgs/navbar.svg';
import { useEffect, useState } from 'react';

import { kpopAnswer, trendsAndMemesAnswer, lifestyleAnswer } from '../data';

import share from '../../public/svgs/share.svg';

export default function QuizComplete() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [answer, setAnswer] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [medalImage, setMedalImage] = useState(medal4);
  const [medalText, setMedalText] = useState('참여상');

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '글담길',
        text: '글담길에 초대합니다!',
        url: 'https://eagle-04-fe.vercel.app/quiz-complete/3',
      });
    } else {
      alert('공유지원안됨');
    }
  };

  useEffect(() => {
    if (categoryId === '2') {
      setAnswer(kpopAnswer);
    } else if (categoryId === '1') {
      setAnswer(lifestyleAnswer);
    } else if (categoryId === '3') {
      setAnswer(trendsAndMemesAnswer);
    }
  }, [categoryId]);

  useEffect(() => {
    if (answer.length > 0 && state) {
      const count = state.filter((val, idx) => val === answer[idx]).length;
      setCorrectCount(count);

      if (count === answer.length) {
        setMedalImage(medal1);
        setMedalText('최우수상');
      } else if (count >= 6) {
        setMedalImage(medal2);
        setMedalText('금상');
      } else if (count >= 3) {
        setMedalImage(medal3);
        setMedalText('노력상');
      } else {
        setMedalImage(medal4);
        setMedalText('참여상');
      }
    }
  }, [answer, state]);

  return (
    <Wrapper>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingTop: '70px',
          marginBottom: '20px',
        }}
        onClick={() => navigate('/quiz')}
      >
        <img src={x} />
      </div>

      <RewardWrapper>
        <Category>트렌드 & 밈</Category>
        <Share onClick={handleShare}>
          <img src={share} alt="share" />
        </Share>
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '80px', fontWeight: 700 }}>
            {correctCount}
          </span>
          <span style={{ fontSize: '20px', fontWeight: 700 }}> / </span>
          <span style={{ fontSize: '20px', fontWeight: 700 }}>
            {answer.length}
          </span>
        </div>
        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
          <span
            style={{ fontSize: '20px', fontWeight: 300 }}
          >{`당신은 ${medalText}입니다.`}</span>
        </div>
        <ImageWrapper>
          <img src={medalImage} alt="medal" />
        </ImageWrapper>
        <WordWrapper>
          {correctCount === answer.length ? (
            <>
              <span style={{ color: '#FF9E9E', marginTop: '30px' }}>
                축하드려요!
              </span>
              <span style={{ marginBottom: '10px', color: '#FF9E9E' }}>
                Congratulations!
              </span>
            </>
          ) : (
            <>
              <span>조금만 더 하면,</span>
              <span style={{ marginBottom: '10px' }}>
                <span style={{ color: '#86D244' }}>새로운 뱃지</span>를 얻을 수
                있어요.
              </span>
              <span>If you study a bit more,</span>
              <span>
                you can earn a{' '}
                <span style={{ color: '#86D244' }}>new badge!</span>
              </span>
            </>
          )}
        </WordWrapper>
      </RewardWrapper>
      <NavbarWrapper>
        <img src={navbar} />
        <ButtonWrapper>
          <div onClick={() => navigate('/quiz')}>
            <Nav style={{ background: '#4D5FC9', color: 'white' }}>퀴즈</Nav>
          </div>
          <Nav onClick={() => navigate('/category-home')}>홈</Nav>
          <Nav>MY</Nav>
        </ButtonWrapper>
      </NavbarWrapper>
    </Wrapper>
  );
}

const Share = styled.div`
  position: absolute;
  right: 12%;
  top: 20%;
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

const NavbarWrapper = styled.div`
  margin-top: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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

const Wrapper = styled.div`
  background: #f5f4f1;
  height: 100dvh;
  padding-left: 23px;
  padding-right: 23px;
`;

const RewardWrapper = styled.div`
  width: 100%;
  height: 550px;
  background-color: white;
  border: 2px solid #000;
  padding-top: 31px;
`;

const Category = styled.div`
  width: 100px;
  height: 37px;
  border-radius: 58.5px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const WordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  span {
    font-size: 20px;
    font-weight: 400;
  }
`;
