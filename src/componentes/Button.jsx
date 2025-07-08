import React from 'react'
import { GlobalContext } from '../hooks/GlobalContext.jsx';

const Button = ({j1, j2, setJ1, setJ2, duelo, setDuelo, children}) => {

    const global = React.useContext(GlobalContext);
    const [result, setResult] = React.useState([]); //Array com o vencedor de cada estatística
    const [descStats, setDescStats] = React.useState([]); //Array com descrição de cada estatística
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

    //Comparar estatísticas
    function compara(stats1, stats2, vencedores){
        for(let i in stats1){
            if(stats1[i] > stats2[i]){
                vencedores.push('j1');
            } else if(stats2[i] > stats1[i]){
                vencedores.push('j2');
            } else{
                vencedores.push('empate');
            }
        }
        setResult(vencedores);
    }

    //Se a validação tiver sucesso compara as estatísticas
    //op1 stats ofensivas, op2 stats defensivas, op3 análise da ia
    React.useEffect(() => {
        let stats1 = [];
        let stats2 = [];
        let vencedores = [];

        if(duelo === false) return;
        
        switch (opcao) {

            case 'op1':
                setDescStats(['Assistências', 'Rebotes Ofensivos', 'Duplos Duplos', 'Triplos Duplos', '% de 2 Pontos', '% de 3 Pontos', '% de Lances Livres', '% de Arremessos Acertados', 'Total de Pontos']);
                stats1.push(j1.Assists, j1.OffensiveRebounds, j1.DoublesDoubles, j1.TripleDoubles, j1.TwoPointersPercentage, j1.ThreePointersPercentage, j1.FreeThrowsPercentage, j1.FieldGoalsPercentage, j1.Points);
                stats1.push(j2.Assists, j2.OffensiveRebounds, j2.DoublesDoubles, j2.TripleDoubles, j2.TwoPointersPercentage, j2.ThreePointersPercentage, j2.FreeThrowsPercentage, j2.FieldGoalsPercentage, j2.Points);
                setJ1Stats(stats1); 
                setJ2Stats(stats2); 
                compara(stats1, stats2, vencedores);
                break;

            case 'op2':
                setDescStats(['Bloqueios', 'Rebotes defensivos', 'Bolas roubadas', '% de Arremessos', 'Total de Pontos']);
                stats1.push(j1.BlockedShots, j1.DefensiveRebounds, j1.Steals);
                stats2.push(j2.Assists, j2.ThreePointersPercentage, j2.FreeThrowsPercentage, j2.FieldGoalsPercentage, j2.Points);
                setJ1Stats(stats1); 
                setJ2Stats(stats2); 
                compara(stats1, stats2, vencedores);
                break;

            case 'op3':
                
                break;
        
            default:
                global.setErro("Erro ao selecionar opção");
                break;
        }
    }, [duelo, j1, j2]);

    return (
        <>
            <button onClick={envia}>{children}</button>
            {global.erro && <p>Erro: {global.erro}</p>}
        </>
    )
}

export default Button