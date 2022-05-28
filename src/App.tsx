import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard'
import { GlobalStyle } from './styles/global'
import { Header } from "./components/Header"

export function App() {

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <Dashboard/>
    </BrowserRouter>
  )
}