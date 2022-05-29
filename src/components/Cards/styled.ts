import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  background: ${mixins.colors.backgroundComponent};
  margin-bottom: 20px;
  

  .link {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    text-decoration: none;
  }
`;

export const Brand = styled.img`
  width: 263px;
`;


export const ContentTitle = styled.div`
  background-color: ${mixins.colors.primary};
  width: 100%;
  height: 82px;
  
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${mixins.colors.secondary};
  font-family: Abel, sans-serif;
  font-weight: 400;
  font-size: 5rem;

  margin-left: 132px;
`;

export const ContentCard = styled.div`
  width: 100%;
  background: ${mixins.colors.backgroundComponent};
  display: flex;
  flex-direction: column;
`;

export const ContentPunctuation = styled.div`
  width: 100px;
  height: 100px;

  background: ${mixins.colors.secondary};
  border: 5px solid ${mixins.colors.primary};
  border-radius: 100px;

  margin-top: -50px;
  margin-left: 19px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextPonctuation = styled.p`
  color: ${mixins.colors.secondary};
  font-family: Abel, sans-serif;
  font-weight: 400;
  font-size: 3.2rem;

  background: ${mixins.colors.primary};
  border-radius: 50%;
  width: 80px;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MovieDate = styled.h3`
  color: ${mixins.colors.text_light};
  font-family: Lato, sans-serif;
  font-weight: 300;
  font-size: 2.4rem;

  margin-left: 131px;
  margin-top: -45px;
`;

export const TextContent = styled.div`
  padding: 34px;
`;

export const Text = styled.p`
  font-family: Lato, sans-serif;
  font-weight: 400;
  font-size: 1.8rem;

  color: ${mixins.colors.text};
`;

export const GenreContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Genre = styled.p`
  font-family: Abel, sans-serif;
  font-weight: 400;
  font-size: 1.8rem;

  color: ${mixins.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 18px;
  border: 1px solid ${mixins.colors.primary};
  border-radius: 20px;
  margin-left: 32px;

`;

export const Error = styled.div`
`;

export const ContentGenre = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;


