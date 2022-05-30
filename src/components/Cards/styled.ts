import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1280px) {
    width: 920px;
  }

  @media (max-width: 768px) {
    width: 550px;
  }

  @media (max-width: 480px) {
    width: 380px;
  }
`;

export const Content = styled.div`
  background: ${mixins.colors.backgroundComponent};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }

  .link {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    text-decoration: none;

    @media (max-width: 480px) {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Brand = styled.img`
  width: 263px;

  @media (max-width: 768px) {
    width: 220px;
  }

  @media (max-width: 480px) {
    width: 100%;

    padding: 20px 28px;
  }
`;

export const ContentTitle = styled.div`
  background-color: ${mixins.colors.primary};
  width: 100%;
  height: auto;
  
  display: flex;
  align-items: center;

  @media (max-width: 1280px) {
    width: 657px;
    height: auto;
    padding: 10px 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 10px 0px;
  }
`;

export const Title = styled.h1`
  color: ${mixins.colors.secondary};
  font-family: Abel, sans-serif;
  font-weight: 400;
  font-size: 5rem;

  margin-left: 132px;

  @media (max-width: 768px) {
    font-size: 4rem;

    margin-left: 110px;
  }
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

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;

    border: 6px solid ${mixins.colors.primary};
    border-radius: 80px;
  }
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

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;

    font-size: 3rem;
  }
`;

export const MovieDate = styled.h3`
  color: ${mixins.colors.text_light};
  font-family: Lato, sans-serif;
  font-weight: 300;
  font-size: 2.4rem;

  margin-left: 131px;
  margin-top: -45px;

  @media (max-width: 768px) {
    font-size: 2rem;
    
    margin-left: 110px;
    margin-top: -15px;
  }
`;

export const TextContent = styled.div`
  width: 1050px;
  padding: 34px;

  @media (max-width: 1280px)  {
    width: 589px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px 28px;
}
`;

export const Text = styled.p`
  font-family: Lato, sans-serif;
  font-weight: 400;
  font-size: 1.8rem;

  color: ${mixins.colors.text};

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
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

  background: ${mixins.colors.shape};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 16px;
  border: 2px solid ${mixins.colors.primary};
  border-radius: 20px;
  margin-left: 32px;

  @media (max-width: 1280px) {
    font-size: 1.6rem;
    padding: 2px 6px;
    margin-bottom: 12px;
    margin-left: 32px;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding: 2px 6px;
    margin-left: 12px;
  }

  @media (max-width: 480px) {
    margin-left: 32px;
  }
`;

export const Error = styled.div`
`;

export const ContentGenre = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;



