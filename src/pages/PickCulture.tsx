import styled from 'styled-components';

export default function PickCulture() {
  return (
    <Wrapper>
      <div style={{ marginBottom: '-20px' }}>
        <h1 style={{ fontSize: '19px', fontWeight: 800 }}>글담길님,</h1>
        <div style={{ fontSize: '19px', marginBottom: '5px' }}>
          가장 관심있는 한국 문화는 무엇인가요?
        </div>
        <div style={{ fontSize: '13px', color: '#595959' }}>
          What kind of Korean culture interests you the most?
        </div>
      </div>
      <CategoryWrapper>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <Category style={{ backgroundColor: '#FBB522', marginTop: '150px' }}>
            의상
          </Category>
          <Category style={{ backgroundColor: 'black' }}>의상</Category>
          <Category style={{ backgroundColor: '#8D8584', marginTop: '150px' }}>
            의상
          </Category>
        </div>
        <BottomCategory>
          <Category style={{ backgroundColor: '#B91E24' }}>의상</Category>
          <Category style={{ backgroundColor: '#384B8F' }}>의상</Category>
        </BottomCategory>
      </CategoryWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 35px;
`;

const CategoryWrapper = styled.div``;

const Category = styled.div`
  width: 110px;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 50%;
  color: white;
`;
const BottomCategory = styled.div`
  padding: 0 35px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
