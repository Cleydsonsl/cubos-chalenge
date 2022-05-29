import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';

import { 
  Container, 
  Content, 
  Header, 
  Title, 
  MovieDate, 
  MovieDetails, 
  SubTitle, 
  Line, 
  Text, 
  Brand, 
  Information, 
  TitleInformation, 
  ContentInformation, 
  BoxInformation, 
  Category, 
  CardCategory, 
  TextCategory, 
  Punctuation, 
  BoxPunctuation } from './styled';

import { apiMovieDetail, key } from '../../services/api';
import noImage from '../../assets/noImage.png';

interface IGenreProps {
  id: string;
  name: string;
}

export function CardDetails() {
  const params = useParams();
  const [repository, setRepository] = useState<any>(null);
  const poster = 'http://image.tmdb.org/t/p/w342/';

  useEffect(() => {
    apiMovieDetail.get(`${params.id}?api_key=${key}&language=pt-BR&append_to_response=videos`,
    ).then(response => setRepository(response.data));
  }, [params.id]);

  console.log(repository);

  function handleHours(minutes: number) {
    const hour = minutes / 60;
    let p = hour.toString().replace('.', 'h');
    let newHour = p.substr(0, 4);
    console.log(newHour);

    return newHour;
  }

  return (
    <Container>
      {
        repository && (
          <>
            <Header>
              <Title>{repository.title || repository.name}</Title>
              <MovieDate>{moment(repository.release_date).format('DD/MM/YYYY')}</MovieDate>
            </Header>
            <Content>
              <MovieDetails>
                <SubTitle>Sinopse</SubTitle>
                <Line/>
                {
                  repository.overview === '' ? (
                    <Text>Sem sinopse adicionada...</Text>
                  ) : (
                    <Text>{repository.overview}</Text>
                  )
                }
                <SubTitle>Informações</SubTitle>
                <Line/>
                <Information>
                  <BoxInformation>
                    <TitleInformation>Situação</TitleInformation>
                    {repository.status === 'Released' ? (
                      <ContentInformation>Lançado</ContentInformation>) : (
                      <ContentInformation>Em Desenvolvimento</ContentInformation>)
                    }
                  </BoxInformation>
                  <BoxInformation>
                    <TitleInformation>Idioma</TitleInformation>
                    {repository.original_language === 'en' ? (
                      <ContentInformation>Inglês</ContentInformation>
                      ) : 'pt-BR ' ? (
                      <ContentInformation>Português</ContentInformation>
                      ) : 'ru' ? (
                        <ContentInformation>Russo</ContentInformation>
                      ) : 'ita' ? (
                        <ContentInformation>Italiano</ContentInformation>
                      ) : null}
                  </BoxInformation>
                  <BoxInformation>
                    <TitleInformation>Duração</TitleInformation>
                    <ContentInformation>{handleHours(repository.runtime)}m</ContentInformation>
                  </BoxInformation>
                  <BoxInformation>
                    <TitleInformation>Orçamento</TitleInformation>
                    <ContentInformation>${repository.budget.toLocaleString()},00</ContentInformation>
                  </BoxInformation>
                  <BoxInformation>
                    <TitleInformation>Receita</TitleInformation>
                    <ContentInformation>${repository.revenue.toLocaleString()},00</ContentInformation>
                  </BoxInformation>
                  <BoxInformation>
                    <TitleInformation>Lucro</TitleInformation>
                    <ContentInformation>
                      ${(repository.revenue - repository.budget).toLocaleString()}
                      ,00
                    </ContentInformation>
                  </BoxInformation>
                </Information>
                <Category>
                  {
                    repository.genres.map((g: IGenreProps) => (
                      <CardCategory>
                        <TextCategory key={g.id}>{g.name}</TextCategory>
                      </CardCategory>
                    ))
                  }
                </Category>
                <BoxPunctuation>
                  <Punctuation>{repository.vote_average}</Punctuation>
                </BoxPunctuation>
              </MovieDetails>
              {`${poster}${repository.poster_path}` === `${poster}${null}` ? 
                (<Brand src={noImage} alt='Poster' />) : (
                  <Brand src={`${poster}${repository.poster_path}`} alt='Poster'/>
                )}
            </Content>
          </>
        )
      }
    </Container>
  )
}