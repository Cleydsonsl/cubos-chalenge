import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.div`
  background-color: ${mixins.colors.background};
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 2560px) {
    padding: 45px 310px;
  }

  @media (max-width: 1920px) {
    padding: 45px 200px;
  }

  @media (max-width: 1280px) {
    padding: 45px 120px;
  }

  @media (max-width: 768px) {
    padding: 45px 60px;
  }

  @media (max-width: 480px) {
    padding: 20px 35px;
  } 
  
  @media (max-width: 480px) {
    padding: 20px 35px;
  }
`;