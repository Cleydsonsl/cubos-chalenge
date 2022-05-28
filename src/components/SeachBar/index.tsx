import { Container, Input } from './styled';

interface InputProps {
  value?: string;
  onChange?: any;
  onClick?: any;
}

export function SearchBar({value, onChange, onClick, ...rest}: InputProps) {
  return (
    <Container {...rest}>
      <Input 
        placeholder="Busque um filme por nome, ano ou gênero..."
        value={value}
        onChange={onChange}
      />
      
    </Container>
  )
}