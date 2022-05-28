import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.div`
  
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

  color: ${mixins.colors.text};
  font-family: ${mixins.fonts.light};
  font-size: 1.4rem;
  margin-bottom: 45px;

  &::placeholder {
    color: ${mixins.colors.placeholder};
    font-family: ${mixins.fonts.light};
    font-size: 1.4rem;
    
  }

  

  
`;