import React from 'react'
import { GlobalContext } from '../hooks/GlobalContext.jsx';

const Button = ({j1, j2, setJ1, setJ2, duelo, setDuelo, children}) => {

    const global = React.useContext(GlobalContext);
    const [result, setResult] = React.useState([]); //Array com o vencedor de cada estatística
    const [stats, setStats] = React.useState([]); //Array com descrição de cada estatística
    const [j1Stats, setJ1Stats] = React.useState([]);
    const [j2Stats, setJ2Stats] = React.useState([]);
    const [opcao, setOpcao] = React.useState([]); //Opção escolhida no input

    //Validar nomes e puxar informações do jogador ao apertar botão
    function envia(event){

        event.preventDefault();
        let nomeLista = '';
        const inputOpcao = document.getElementById('opcao').value;
        setOpcao(inputOpcao);
        let nomeJ1 = document.getElementById('1').value.toLowerCase().trim();
        let nomeJ2 = document.getElementById('2').value.toLowerCase().trim();

        if(nomeJ1 == nomeJ2){
            global.setErro("Os jogadores não podem ser iguais");
            return;
        }
        
        for(let i in global.infoNBA){
            nomeLista = global.infoNBA[i].Name.toLowerCase().trim();
            if(nomeJ1 == nomeLista){
                nomeJ1 = null;
                setJ1(global.infoNBA[i]);
            } else if(nomeJ2 == nomeLista){
                nomeJ2 = null;
                setJ2(global.infoNBA[i]);
            }
        }
        
        if(nomeJ1 != null || nomeJ2 != null){
            global.setErro("Jogador não encontrado");
            return;
        } else{
            setDuelo(true);
        }
    }

    //Se a validação tiver sucesso compara as estatísticas
    //op1 stats ofensivas, op2 stats defensivas, op3 análise da ia
    React.useEffect(() => {
        let stats1 = [];
        let stats2 = [];

        if(duelo === false) return;
        
        switch (opcao) {
            case 'op1':
                setJ1Stats(stats1.push(j1.Assists, j1.ThreePointersPercentage, j1.FreeThrowsPercentage, j1.FieldGoalsPercentage, j1.Points)); 
                setJ2Stats(stats2.push(j2.Assists, j2.ThreePointersPercentage, j2.FreeThrowsPercentage, j2.FieldGoalsPercentage, j2.Points)); 
                console.log(stats1);
                console.log(stats2);
                break;
            case 'op2':
                
                break;
            case 'op3':
                
                break;
        
            default:
                global.setErro("Erro ao selecionar opção");
                break;
        }
    }, [duelo])

    return (
        <>
            <button onClick={envia}>{children}</button>
            {global.erro && <p>Erro: {global.erro}</p>}
        </>
    )
}

export default Button