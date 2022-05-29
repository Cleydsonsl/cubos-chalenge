import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.div`
  background-color: ${mixins.colors.background};
  width: 100%;

  padding: 45px 105px;

  @media (max-width: 1920px) {
    padding: 45px 300px;
  }
`;