import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

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
  Error,
  ContentCard,
  ContentGenre} from './styled';

import noImage from '../../assets/noImage.png';
import { apiPage } from '../../services/api';
import { SearchBar } from '../SeachBar';
import { genres } from '../../utils/genres';

interface IMovieProps {
  id: string;
  poster_path: string;
  title: string;
  name: string;
  release_date: Date;
  overview: string;
  genre_ids: [];
  vote_average: string;
}

export function Cards(){
  const [movieCard, setMovieCard] = useState('');
  const [resultError, setResultError] = useState('');
  const [, setInputError] = useState('');
  const poster = 'http://image.tmdb.org/t/p/w342/';

  const [repositories, setRepositories] = useState(() => {
    const storageRepositories = sessionStorage.getItem('@movie:repositories');

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }
    return[];
  })

  useEffect(() => {
    localStorage.setItem('@movie:repositories', JSON.stringify(repositories));
  }, [repositories]);

  async function handleSearch(e:any) {
    e.preventDefault();

    if(!movieCard) {
      setInputError('Digite o nome de um filme ou de um gênero');
      return;
    }

    setResultError('');
    setInputError('');

    const replaceMovie = movieCard.replace('', '+');

    const { data } = await apiPage.get(`&page=1&query=${replaceMovie}`);

    if (!data.results[0]) {
      setResultError('O nome do filme digitado esta errado ou nao existe');
    }

    setMovieCard('');
    setRepositories(data);
    console.log(data.results);
  }

  function searchGenre(value: any) {
    let search = genres.map(g => {
      return value === g.id ? g.name : null;
    });
    return search;
  }

  return (
    <Container>
      <form onSubmit={handleSearch}>
        <SearchBar
          value={movieCard}
          onChange={(e: { target: { value : React.SetStateAction<string> } }) =>
          setMovieCard(e.target.value)
        }
        onClick={() => setMovieCard('')}
        />
      </form>

      {
        resultError && (
          <>
            <Error>{resultError}</Error>
          </>
        )
      }

      {
        repositories?.results && (
          <>
            {
              repositories.results.map((repositorie: IMovieProps) => (
                <Content key={repositorie.id}>
                  <Link 
                    className='link' 
                    to={`/movie/${repositorie.id}`}
                  >
                    {`${poster}${repositorie.poster_path}` === `${poster}${null}` ? 
                    (<Brand src={noImage} alt='Poster' />) : (
                      <Brand src={`${poster}${repositorie.poster_path}`} alt='Poster'/>
                    )}
      
                    
                    <ContentCard>
                      <ContentTitle>
                        <Title>{repositorie.title || repositorie.name}</Title>
                      </ContentTitle>
                      <ContentPunctuation>
                        <TextPonctuation>{repositorie.vote_average}</TextPonctuation>
                      </ContentPunctuation>
                      <MovieDate>
                        {moment(repositorie.release_date).format('DD/MM/YYYY')}
                      </MovieDate>
                      <TextContent>
                        <Text>
                          {repositorie.overview === '' ? (
                            <p>Sem sinopse...</p>) : (
                              <>{repositorie.overview}</>
                            )
                          }
                        </Text>
                      </TextContent>
                      <ContentGenre> {repositorie.genre_ids.map((e: any, index: any) => (
                        <Genre key={index}>
                            {searchGenre(e)}
                        </Genre>
                      ))}
                      </ContentGenre>
                    </ContentCard>
                      
                  </Link>
                </Content>
              ))
            }
          </>
        )

      }
    </Container>
  );
};