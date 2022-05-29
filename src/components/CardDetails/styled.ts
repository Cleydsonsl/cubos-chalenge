import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.div`

  width: 100%;
  margin-top: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: ${mixins.colors.backgroundComponent};

  width: 100%;
  display: flex;
`

export const Header = styled.div`
  background: ${mixins.colors.barComponent};
  padding: 8px 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: ${mixins.colors.primary};
  font-family: Abel, sans-serif;
  font-size: 3.2rem;
  font-weight: 500;
`;

export const MovieDate = styled.p`
  color: ${mixins.colors.text_light};
  font-family: Lato, sans-serif;
  font-size: 2rem;
  font-weight: 500;
`;

export const MovieDetails = styled.div`
  padding: 10px 30px 10px 60px;
`;

export const SubTitle = styled.h2`
  color: ${mixins.colors.primary};
  font-family: Abel, sans-serif;
  font-size: 3rem;
  font-weight: 400  ;
`

export const Line = styled.div`
  background: ${mixins.colors.secondary};

  width: 100%;
  height: 2px;
  margin-top: 5px;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  color: ${mixins.colors.text_light};
  font-family: Lato, sans-serif;
  font-size: 2.1rem;
  font-weight: 400;

  margin-bottom: 28px;
`;

export const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoxInformation = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

export const TitleInformation = styled.p`
  color: ${mixins.colors.primary};
  font-family: Abel, sans-serif;
  font-size: 2.8rem;
  font-weight: 400;
`
export const ContentInformation = styled.p`
  color: ${mixins.colors.text_light};
  font-family: Lato, sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
`;

export const Category = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;

`;

export const CardCategory = styled.div`
  background: ${mixins.colors.shape};
  border: ${mixins.colors.primary} 2px solid;
  border-radius: 20px;
  padding: 3px 16px;

  margin-right: 10px;
`;

export const TextCategory = styled.p`
  color: ${mixins.colors.primary};
  font-family: Abel, sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  text-align: center;
`;

export const ContentAction = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  margin-top: 50px;
`;

export const ContentPunctuation = styled.div`
  width: 105px;
  height: 105px;

  background: ${mixins.colors.secondary};
  border: 5px solid ${mixins.colors.primary};
  border-radius: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Punctuation = styled.p`
  color: ${mixins.colors.secondary};
  font-family: Abel, sans-serif;
  font-size: 3.6rem;
  font-weight: 400;
  text-align: center;

  background: ${mixins.colors.primary};
  width: 96px;
  height: 96px;
  padding: 40px;
  border: ${mixins.colors.secondary} 6px solid;
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Brand = styled.img`
  width: 450px;
  height: 100%;
`;

export const NoTrailer = styled.p`
  margin-top: 30px;
  text-align: center;
  color: ${mixins.colors.error};
  font-size: 26px;
  font-weight: 400;
`;

export const Trailer = styled.div`
  margin: 20px 0 20px 0;
  flex: 1;
  width: 100%;
  height: 480px;
  overflow: hidden;
`;