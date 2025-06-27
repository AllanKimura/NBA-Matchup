import React from 'react';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [infoNBA, setInfoNBA] = React.useState(null);
  const [erro, setErro] = React.useState(null);
  const [nomeJogadores, setNomeJogadores] = React.useState([]);
  const [idJogadores, setIdJogadores] = React.useState([]);

  //Puxa as informações da API ao carregar a página, puxa do localStorage se a página já foi acessada anteriormente
  React.useEffect(() =>{
    const existeInfo = localStorage.getItem('infoNBA');
    if(existeInfo){
      setInfoNBA(JSON.parse(existeInfo));
      return;
    }
    else{
      fetch("https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStats/2025?key=35e4efa393bb4e2db62143d04dd90ac2")
      .then((r) => {
        if(r.ok){
          return r.json();
        }
        throw new Error("Erro ao conectar à API");
      })
      .then((json) => {
        setErro(false)
        localStorage.setItem('infoNBA', JSON.stringify(json))
        salvaInfo();
      })
      .catch((error) => {
        setErro(error);
        console.log("Um erro ocorreu:", error);
      });
    }
  }, []);

  return (
    <>
      <h1>NBA Matchup!</h1>

      <Selecao></Selecao>
    </>
  )
}

export default App
