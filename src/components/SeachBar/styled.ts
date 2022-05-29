import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.div`
  width: 100%;
  
  @media (max-width: 1980px) {
    width: 1300px;
  }

  @media (max-width: 1280px) {
    width: 920px;
  }

  @media (max-width: 768px) {
    width: 550px;
  }
`;

export const Input = styled.input`
  background-color: ${mixins.colors.backgroundComponent};
  
  width: 100%;
  padding: 18px 41px;
  border: none;
  border-radius: 40px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  color: ${mixins.colors.text_light};
  font-family: Abel, sans-serif;
  font-size: 2.4rem;
  margin-bottom: 45px;

  :focus {
    outline: 0;
  }

  &::placeholder {
    color: ${mixins.colors.placeholder};
    font-family: Abel, sans-serif;;
    font-size: 2.4rem;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
    
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    
    font-size: 1.8rem;
  }

  
`;