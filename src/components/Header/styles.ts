import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.div`
  background-color: ${mixins.colors.primary};

  width: 100%;
  padding: 30px 555px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: ${mixins.colors.secondary};

  font-family: ${mixins.fonts.abel};
  font-size: 3.5rem;
  text-align: center;
`;