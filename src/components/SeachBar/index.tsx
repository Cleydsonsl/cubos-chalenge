import { Container, Input } from './styled';

export function SearchBar() {
  return (
    <Container>
      <Input placeholder="Busque um filme por nome, ano ou gênero..."/>
    </Container>
  )
}