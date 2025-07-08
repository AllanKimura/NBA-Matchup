import React from 'react';
import './App.css';
import { GlobalStorage } from './hooks/GlobalContext.jsx';
import Jogador from './componentes/Jogador.jsx';
import Selecao from './componentes/Selecao.jsx';
import Button from './componentes/Button.jsx';
import Stats from './componentes/Stats.jsx';

function App() {
  const [jogador1, setJogador1] = React.useState([]);
  const [jogador2, setJogador2] = React.useState([]);
  const [duelo, setDuelo] = React.useState(false);

  return (
    <GlobalStorage>
      <h1 className="titulo">NBA Matchup!</h1>
      <form>
        <div>
          <Jogador />
          {duelo === true && <Stats j={jogador1} />}
          <Selecao id="1"/>
        </div>
        <div>
          <Jogador />
          {duelo === true && <Stats j={jogador2} />}
          <Selecao id="2"/>
        </div>
        <label htmlFor="opcao">Selecione o tipo de duelo:</label>
        <select name="opcao" id="opcao">
          <option value="op1">Ataque</option>
          <option value="op2">Defesa</option>
          <option value="op3">Geral</option>
          <option value="op4">Análise da IA</option>

        </select>
        <Button j1={jogador1} setJ1={setJogador1} j2={jogador2} setJ2={setJogador2} duelo={duelo} setDuelo={setDuelo}>Enviar</Button>
      </form>
    </GlobalStorage>
  )
}

export default App
