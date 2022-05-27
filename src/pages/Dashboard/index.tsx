import { Cards } from '../../components/Cards';
import { Header } from '../../components/Header';
import { Container } from './styled';

export function Dashboard(){
  return (
    <>
      <Container>
        <Header/>
        <Cards />
      </Container>
    </>
  );
};