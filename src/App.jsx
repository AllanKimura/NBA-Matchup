import React from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import Selecao from './componentes/Selecao.jsx';
export const GlobalContext = React.createContext();

function App() {

  return (
    <>
      <h1>NBA Matchup!</h1>
      <div>

        <Selecao id="1" lista="listaJogadores1"></Selecao>
      </div>
    </>
  )
}

export default App
