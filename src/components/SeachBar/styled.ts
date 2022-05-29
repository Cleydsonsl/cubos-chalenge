import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.div`
  width: 100%;

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
    
  }

  

  
`;