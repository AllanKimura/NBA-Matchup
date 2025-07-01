import React from 'react'
import { GlobalContext } from '../GlobalContext.jsx';

const Button = ({j1, setJ1, j2, setJ2, duelo, setDuelo, children}) => {

    const global = React.useContext(GlobalContext);
    function envia(event){

        event.preventDefault();
        let nomeLista = '';
        const inputOpcao = document.getElementById('opcao');
        const opcao = inputOpcao.value;
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

    return (
        <>
            <button onClick={envia}>{children}</button>
            {global.erro && <p>Erro: {global.erro}</p>}
        </>
    )
}

export default Button