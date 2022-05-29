import { 
  Container, 
  Content, 
  Header, 
  Title, 
  Date, 
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

import image from '../../assets/capa.png';
import { useEffect, useState } from 'react';
import { apiMovieDetail, key } from '../../services/api';
import { useMatch } from 'react-router-dom';

interface IRepoProps {
  id: string;
}

interface IGenreProps {
  id: string;
  name: string;
}

export function Details() {
  const params  = useMatch('');
  const [repository, setRepository] = useState<any>(null);

  useEffect(() => {
    apiMovieDetail.get(`${params}?api_key=${key}&language=pt-BR&append_to_response=videos`,
    ).then(response => setRepository(response.data));
  }, [params]);

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
      
    </Container>
  )
}