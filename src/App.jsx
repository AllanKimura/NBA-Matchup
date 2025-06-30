import React from 'react';
import './App.css'
import { GlobalStorage, GlobalContext } from './GlobalContext.jsx';
import Jogador from './componentes/Jogador.jsx'
import Selecao from './componentes/Selecao.jsx'

function App() {
  const global = React.useContext(GlobalContext);
  const [jogador1, setJogador1] = React.useState([]);
  const [jogador2, setJogador2] = React.useState([]);
  
  return (
    <GlobalStorage>
      <h1 className="titulo">NBA Matchup!</h1>
      <div>
        <Jogador />
        <Selecao id="1" selecionaJogador={setJogador1} />
        <Jogador />
        <Selecao id="2" selecionaJogador={setJogador2} />
        <button id="enviar" onClick={envia}></button>
      </div>
    </GlobalStorage>
  )
}

export default App
