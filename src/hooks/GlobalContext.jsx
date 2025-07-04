import React from 'react'

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
    const [infoNBA, setInfoNBA] = React.useState(null);
    const [erro, setErro] = React.useState(null);

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
                setInfoNBA(json);
                localStorage.setItem('infoNBA', JSON.stringify(json))
            })
            .catch((error) => {
                setErro(error);
                console.log("Um erro ocorreu:", error);
            });
        }
    }, []);
    
    return (
        <GlobalContext.Provider value={{infoNBA, setInfoNBA, erro, setErro}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext