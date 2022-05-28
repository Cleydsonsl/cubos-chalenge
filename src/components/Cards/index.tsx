import { 
  Container, 
  Brand, 
  Content, 
  ContentTitle, 
  Title, 
  ContentPunctuation, 
  TextPonctuation,
  MovieDate,
  TextContent,
  Text, 
  Genre,
  GenreContent} from './styled';

import capa from '../../assets/capa_thor2.png';

export function Cards(){
  return (
    <Container>
      <Brand src={capa}>

      </Brand>
      <Content>
        <ContentTitle>
          <Title>Thor: Ragnarok</Title>
        </ContentTitle>
        <ContentPunctuation>
          <TextPonctuation>75%</TextPonctuation>
        </ContentPunctuation>
        <MovieDate>10/01/2020</MovieDate>

        <TextContent>
          <Text>
            Thor esta aprisionado do outo lado do universo, sem seu martelo, e sse vê em uma corrida para voltar até Asgard e impedir o Ragnarok, a destruição de seu lar e o fim da civilização asgardiana que está nas mãos de uma nova e poderosa ameaça, a terrível Hela. Mas primeiro ele precisa sobreviver a uma batalha de gladiadores que o coloca contra seu ex-aliado e vingador, o Incrível Hulk.
          </Text>
        </TextContent>
        <GenreContent>
          <Genre>
            Ação
          </Genre>
          <Genre>
            Ação
          </Genre>
        </GenreContent>
      </Content>
    </Container>
  );
};