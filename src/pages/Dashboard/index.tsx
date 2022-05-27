import { Cards } from '../../components/Cards';
import { Header } from '../../components/Header';
import { SearchBar } from '../../components/SeachBar';
import { Container } from './styled';

export function Dashboard(){
  return (
    <>
      <Container>
        <Header/>
        <SearchBar/>
        <Cards/>
      </Container>
    </>
  );
};