import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard'
import { GlobalStyle } from './styles/global'
import { Header } from "./components/Header"
// import { Details } from "./pages/Details"

export function App() {

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <Dashboard/>
      {/* <Details/> */}
      
    </BrowserRouter>
  )
}