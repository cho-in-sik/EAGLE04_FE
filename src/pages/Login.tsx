import styled from 'styled-components';
import mail from '../../public/svgs/mail.svg';
import NaverLogin from '../components/NaverLogin';

export default function Login() {
  return (
    <Wrapper>
      <FlexWrapper>
        <H>글담길</H>
        <H>welcome</H>
        <LastH>message</LastH>
        <SingupBtn>
          <img src={mail} alt="mail" style={{ marginRight: '40px' }} />
          회원가입
        </SingupBtn>
        <NaverLogin></NaverLogin>
      </FlexWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 70px;
  width: 100%;
  height: 100%;
  background-color: #4a4a4a;
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
const H = styled.div`
  color: white;
  font-size: 32px;
`;

const LastH = styled(H)`
  margin-bottom: 60px;
`;

const SingupBtn = styled.div`
  margin-bottom: 20px;
  padding: 20px 0;
  font-size: 16px;
  font-weight: 800;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: linear-gradient(0deg, #f4f4f4 0%, #f4f4f4 100%), #f4f4f4;
`;
