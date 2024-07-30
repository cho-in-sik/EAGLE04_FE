import { useState } from 'react';
import { styled } from 'styled-components';
import submit from '../../public/svgs/submit.svg';
import { api } from '../api/customAxios';
import submitFull from '../../public/svgs/submitFull.svg';
import { useNavigate } from 'react-router-dom';

export default function SelfLogin() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (name && password === '') return;
    try {
      const res = await api.post('/login', {
        name,
        password,
      });
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem('token', res.data.response.accessToken);
        navigate('/user/categorypick', {
          state: { name: res.data.response.name },
        });
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <FlexWrapper>
        <Title>시작하기</Title>
        <Nickname
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="닉네임"
        />
        <Nickname
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />

        <SubmitButton onClick={handleSubmit}>
          {name && password !== '' ? (
            <img src={submitFull} />
          ) : (
            <img src={submit} />
          )}
        </SubmitButton>
      </FlexWrapper>
    </Wrapper>
  );
}

const SubmitButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
`;

const Wrapper = styled.div`
  padding-top: 70px;
  width: 100%;
  height: 100%;
  background-color: #242767;
  border-radius: 79px 10px 0px 0px;
  padding-bottom: 190px;
`;

const FlexWrapper = styled.div`
  padding: 0 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Nickname = styled.input`
  margin-bottom: 20px;
  padding: 20px 10px;
  font-size: 16px;
  font-weight: 800;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: linear-gradient(0deg, #f4f4f4 0%, #f4f4f4 100%), #f4f4f4;
`;
