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

import { useEffect, useState } from 'react';
import { apiMovieDetail, key } from '../../services/api';
import { useParams } from 'react-router-dom';

interface IGenreProps {
  id: string;
  name: string;
}

export function Details() {
  const params = useParams();
  const [repository, setRepository] = useState<any>(null);

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
      
    </Container>
  )
}