import { Container, Content, Header, Title, Date, MovieDetails, SubTitle, Line, Text, Brand, Information, TitleInformation, ContentInformation, BoxInformation, Category, CardCategory, TextCategory, Punctuation, BoxPunctuation } from './styled';

import image from '../../assets/capa.png'

export function Details() {
  return (
    <Container>
      <Header>
        <Title>
          Thor: Ragnarok
        </Title>
        <Date>
          25/10/2017
        </Date>
      </Header>
      <Content>
        <MovieDetails>
            <SubTitle>
              Sinopse
            </SubTitle>
            <Line/>
            <Text>
              Thor esta aprisionado do outo lado do universo, sem seu martelo, e se vê em uma corrida para voltar até Asgard e impedir o Ragnarok, a destruição de seu lar e o fim da civilização asgardiana que está nas mãos de uma nova e poderosa ameaça, a terrível Hela. Mas primeiro ele precisa sobreviver a uma batalha de gladiadores que o coloca contra seu ex-aliado e vingador, o Incrível Hulk.
            </Text>
            <SubTitle>
              Informações
            </SubTitle>
            <Line/>
            <Information>
              <BoxInformation>
                <TitleInformation> Situação </TitleInformation>
                <ContentInformation>Lançado</ContentInformation>
              </BoxInformation>
              <BoxInformation>
                <TitleInformation> Idioma </TitleInformation>
                <ContentInformation>Inglês</ContentInformation>
              </BoxInformation>
              <BoxInformation>
                <TitleInformation> Duração </TitleInformation>
                <ContentInformation>2h 10min</ContentInformation>
              </BoxInformation>
              <BoxInformation>
                <TitleInformation> Orçamento </TitleInformation>
                <ContentInformation>$180.000.000,00</ContentInformation>
              </BoxInformation>
              <BoxInformation>
                <TitleInformation> Receita </TitleInformation>
                <ContentInformation>$853.977.000,00</ContentInformation>
              </BoxInformation>
              <BoxInformation>
                <TitleInformation> Lucro </TitleInformation>
                <ContentInformation>$853.977.000,00</ContentInformation>
              </BoxInformation>
            </Information>
            <Category>
              <CardCategory>
                <TextCategory>
                    Ação
                </TextCategory>
              </CardCategory>
              <CardCategory>
                <TextCategory>
                    Aventura
                </TextCategory>
              </CardCategory>
              <CardCategory>
                <TextCategory>
                    Fantasia
                </TextCategory>
              </CardCategory>
            </Category>
            <BoxPunctuation>
              <Punctuation>
                75%
              </Punctuation>
            </BoxPunctuation>
        </MovieDetails>
        <Brand src={ image }/>
      </Content>
    </Container>
  )
}