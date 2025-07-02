import React from 'react'
import { GlobalContext } from '../hooks/GlobalContext.jsx';

const Selecao = ({id}) => {
  const [inputValor, setInputValor] = React.useState('');
  const [jogadores, setJogadores] = React.useState([]);
  const global = React.useContext(GlobalContext);
  

  function autoComplete(event){
    setInputValor(event.target.value);
    let nomeDigitado = event.target.value.toLowerCase().trim();
    let nomeLista = '';
    let listaFiltrada = [];
    let listaGeral = [];

    if(!nomeDigitado){
      setJogadores([]);
      return;
    }

    for(let i in global.infoNBA){
      nomeLista = global.infoNBA[i].Name.toLowerCase().trim();

      if(nomeLista.startsWith(nomeDigitado)){
        listaFiltrada.push(global.infoNBA[i].Name);
      } else if(nomeLista.includes(nomeDigitado)){
        listaGeral.push(global.infoNBA[i].Name);
      }

    }
    let resultado = [...listaFiltrada, ...listaGeral].slice(0,5);
    setJogadores(resultado);
  }
  function clickJogador(event) {
    setInputValor(event.target.innerText);
    setJogadores([]);
  }

  return (
    <div>
      <input 
      id={id}
      type="text"
      placeholder="Digite o nome do jogador:"
      value={inputValor}
      autoComplete="off"
      onChange={autoComplete}
      />

      <ul className="listComplete">
        {jogadores && jogadores.map((j) => {
          return <li key={j} onClick={clickJogador}>{j}</li>
        })}
      </ul>

    </div>
  )
}

export default Selecao