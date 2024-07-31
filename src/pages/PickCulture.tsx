import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { api } from '../api/customAxios';
import { getAuthToken } from '../utils/token';

// Category 타입 정의
interface Category {
  id: number;
  label: string;
  color: string;
  marginTop: string;
}

export default function PickCulture() {
  const token = getAuthToken();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const { state } = useLocation();
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const categories: Category[] = [
    { id: 1, label: '케이팝', color: '#FBB522', marginTop: '150px' },
    { id: 2, label: '생활양식', color: 'black', marginTop: '0' },
    { id: 3, label: '음식', color: '#8D8584', marginTop: '150px' },
    { id: 4, label: '전통문화', color: '#B91E24', marginTop: '0' },
    { id: 5, label: '트렌드&밈', color: '#384B8F', marginTop: '0' },
  ];

  const toggleCategory = (id: number) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(
        selectedCategories.filter((categoryId) => categoryId !== id),
      );
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  const handleSubmit = async () => {
    const res = await api.post(
      '/favorite/add',
      {
        categoryIds: selectedCategories,
      },
      { headers },
    );
    console.log(res);
    navigate('/category-home');
  };

  console.log(selectedCategories);

  return (
    <Wrapper>
      <div style={{ marginBottom: '-20px' }}>
        <h1
          style={{ fontSize: '19px', fontWeight: 800 }}
        >{`${state.name}님,`}</h1>
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
          {categories.slice(0, 3).map((category) => (
            <StyledCategory
              key={category.id}
              backgroundColor={category.color}
              marginTop={category.marginTop}
              selected={selectedCategories.includes(category.id)}
              onClick={() => toggleCategory(category.id)}
            >
              <span>{category.label}</span>
              <span style={{ fontSize: '16px' }}>{category.label}</span>
              {selectedCategories.includes(category.id) && (
                <CheckMark>✔</CheckMark>
              )}
            </StyledCategory>
          ))}
        </div>
        <BottomCategory>
          {categories.slice(3).map((category) => (
            <StyledCategory
              key={category.id}
              backgroundColor={category.color}
              marginTop={category.marginTop}
              selected={selectedCategories.includes(category.id)}
              onClick={() => toggleCategory(category.id)}
            >
              <span>{category.label}</span>
              {selectedCategories.includes(category.id) && (
                <CheckMark>✔</CheckMark>
              )}
            </StyledCategory>
          ))}
        </BottomCategory>
        <GoGulelDam onClick={handleSubmit}>글담길 즐기러 가기</GoGulelDam>
      </CategoryWrapper>
    </Wrapper>
  );
}

// Styled-component에서 props 타입 정의
interface StyledCategoryProps {
  selected: boolean;
  backgroundColor: string;
  marginTop: string;
}

const Wrapper = styled.div`
  padding: 0 35px;
`;

const CategoryWrapper = styled.div``;

const StyledCategory = styled.div<StyledCategoryProps>`
  width: 110px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: white;
  font-size: 24px;
  background-color: ${(props) =>
    props.selected ? '#d3d3d3' : props.backgroundColor};
  cursor: pointer;
  position: relative;
  margin-top: ${(props) => props.marginTop};
`;

const CheckMark = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  color: white;
`;

const BottomCategory = styled.div`
  padding: 0 35px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;
`;

const GoGulelDam = styled.div`
  padding: 15px 60px;
  background-color: #dfdfdf;
  text-align: center;
  border-radius: 10px;
`;
