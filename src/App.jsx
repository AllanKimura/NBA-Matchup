import React from 'react';
import './App.css';
import { GlobalStorage } from './GlobalContext.jsx';
import Jogador from './componentes/Jogador.jsx';
import Selecao from './componentes/Selecao.jsx';
import Button from './componentes/Button.jsx';
import Stats from './componentes/Stats.jsx';

function App() {
  const [opcao, setOpcao] = React.useState(null);
  const [jogador1, setJogador1] = React.useState([]);
  const [jogador2, setJogador2] = React.useState([]);
  const [duelo, setDuelo] = React.useState(false);
  
  return (
    <GlobalStorage>
      <h1 className="titulo">NBA Matchup!</h1>
      <form>
        <div>
          <Jogador />
          <Stats />
          <Selecao id="1"/>
        </div>
        <div>
          <Jogador />
          <Stats />
          <Selecao id="2"/>
        </div>
        <label htmlFor="opcao">Selecione o tipo de duelo:</label>
        <select name="opcao" id="opcao">
          <option value="ataque">Estatísticas de ataque</option>
          <option value="defesa">Estatísticas de defesa</option>
          <option value="ia">Análise da IA</option>
        </select>
        <Button j1={jogador1} setJ1={setJogador1} j2={jogador2} setJ2={setJogador2} setDuelo={setDuelo}>Enviar</Button>
      </form>
    </GlobalStorage>
  )
}

export default App
