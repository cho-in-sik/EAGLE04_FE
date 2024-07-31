import styled from 'styled-components';
import x from '../../public/svgs/x.svg';
import LinearProgress from '@mui/material/LinearProgress';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import nextArrow from '../../public/svgs/next.svg';
import nextArrow0 from '../../public/svgs/next0.svg';
import { kpop, trendsAndMemes, lifestyle } from '../data';

interface FingerprintProps {
  selected: boolean;
}

export default function QuizSolve() {
  const { categoryId } = useParams();

  const navigate = useNavigate();
  const [num, setNum] = useState(0);
  const [selectedValue, setSelectedValue] = useState<string[]>(
    Array(10).fill(''),
  );
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (categoryId === '2') {
      setData(kpop);
    } else if (categoryId === '1') {
      setData(lifestyle);
    } else if (categoryId === '3') {
      setData(trendsAndMemes);
    }
  }, [categoryId]);

  console.log(selectedValue);

  const handleFingerprintClick = (index: number, value: string) => {
    const newSelectedValue = [...selectedValue];
    newSelectedValue[index] = value;
    setSelectedValue(newSelectedValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSelectedValue = [...selectedValue];
    newSelectedValue[num] = e.target.value;
    setSelectedValue(newSelectedValue);
  };

  const handleNext = () => {
    if (num >= data.length - 1) {
      navigate(`/quiz-complete/${categoryId}`, { state: selectedValue });
    } // num이 10 이상이면 넘어가지 않도록
    setNum((v) => ++v);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <div style={{ marginTop: '80px', marginBottom: '120px' }}>
        <TopWrapper>
          <div
            style={{
              backgroundColor: 'white',
              paddingLeft: '12px',
              marginTop: '-10px',
            }}
            onClick={() => navigate('/quiz')}
          >
            <img src={x} alt="close" />
          </div>
          <div
            style={{
              fontSize: '24px',
              fontWeight: 500,
              margin: '0 auto',
            }}
          >
            <div style={{ marginBottom: '10px', marginLeft: '-30px' }}>
              {`${num + 1}/${data.length}`}
            </div>
          </div>
        </TopWrapper>
        <LinearProgress
          variant="determinate"
          value={(num + 1) * 10}
          color="inherit"
        />
      </div>

      <QuizBox>
        <FingerprintWrapper>
          {data[num]?.type === 'multiple' ? (
            <div>
              <QuizNum>{`문제 ${data[num]?.id}.`}</QuizNum>
              <QuizTitle>{data[num]?.description}</QuizTitle>
              {data[num]?.fingerprint.map((item) => (
                <Fingerprint
                  key={item}
                  onClick={() => handleFingerprintClick(num, item)}
                  selected={selectedValue[num] === item}
                >
                  {item}
                </Fingerprint>
              ))}
            </div>
          ) : data[num]?.type === 'ox' ? (
            <div>
              <QuizNum>{`문제 ${data[num]?.id}.`}</QuizNum>
              <QuizTitle>{data[num]?.description}</QuizTitle>
              <OxWrapper>
                <Ox
                  style={{ borderRight: '1px solid black' }}
                  selected={selectedValue[num] === 'O'}
                  onClick={() => handleFingerprintClick(num, 'O')}
                >
                  O
                </Ox>
                <Ox
                  selected={selectedValue[num] === 'X'}
                  onClick={() => handleFingerprintClick(num, 'X')}
                >
                  X
                </Ox>
              </OxWrapper>
            </div>
          ) : (
            <div>
              <QuizNum>{`문제 ${data[num]?.id}.`}</QuizNum>
              <QuizTitle>{data[num]?.description}</QuizTitle>
              {data[num].dd ? <DD>{data[num].dd}</DD> : null}
              <SubDiv
                placeholder="답을 작성해주세요."
                value={selectedValue[num]}
                onChange={handleInputChange}
              />
            </div>
          )}
        </FingerprintWrapper>
      </QuizBox>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <NextButton onClick={handleNext}>
          <img src={selectedValue[num] ? nextArrow : nextArrow0} alt="next" />
        </NextButton>
      </div>
    </Wrapper>
  );
}

const OxWrapper = styled.div`
  width: 240px;
  height: 140px;
  border: 1px solid #000;
  margin-top: 50px;
  display: flex;
  margin: 0 auto;
`;

const Ox = styled.div<FingerprintProps>`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  background: ${(props) => (props.selected ? '#4D5FC9' : '#fff')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
`;

const Wrapper = styled.div`
  background-color: #f5f3ed;
  height: 100vh;
  width: 100%;
`;

const TopWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NextButton = styled.div``;

const QuizBox = styled.div`
  border: 2px solid #000;
  margin: 0 auto;
  background-color: white;
  width: 90%;
  height: 460px;
  margin-bottom: 40px;
  padding-top: 25px;
`;

const QuizNum = styled.div`
  font-family: DOSGothic;
  padding-left: 26px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 30px;
`;

const QuizTitle = styled.div`
  padding-left: 26px;
  padding-right: 26px;
  font-size: 20px;
  margin-bottom: 50px;
  max-height: 70px;
`;

const DD = styled.div`
  padding-left: 26px;
  padding-right: 26px;
  font-size: 20px;
  margin-top: -20px;
  background-color: #efeeee;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 30px;
`;

const SubDiv = styled.input`
  width: 92%;
  padding-bottom: 150px;
  border: 3px solid #4d5fc9;
  padding-left: 15px;
  padding-top: 15px;
`;

const FingerprintWrapper = styled.div`
  padding-left: 26px;
  padding-right: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Fingerprint = styled.div<FingerprintProps>`
  width: 100%;
  height: 52px;
  border-radius: 53px;
  border: 3px solid #4d5fc9;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.selected ? '#4D5FC9' : '#fff')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  margin-bottom: 10px;
  cursor: pointer;
`;
