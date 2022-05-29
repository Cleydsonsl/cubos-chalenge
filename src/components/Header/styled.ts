import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.div`
  background-color: ${mixins.colors.primary};

  width: 100%;
  padding: 14px 555px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 14px 0px;
    
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.a`
  color: ${mixins.colors.secondary};
  font-family: Abel, sans-serif;
  font-size: 6.5rem;
  font-weight: 400;
  text-align: center;

  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;