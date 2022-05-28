import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { Routers } from './Routers';
import { Header } from './components/Header';

export function App() {

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <Routers/>
    </BrowserRouter>
  )
}