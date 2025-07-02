import React from 'react'

const useComparar = (j1, j2, opcao, setErro) => {
    const [result, setResult] = React.useState([]);
    let jStats1 = [];
    let jStats2 = [];

    React.useEffect(() => {
        switch (opcao) {
            case 'op1':
                jStats1.push(j1.Assists, j1.FieldGoalsPercentage) 
                
                break;
            case 'op2':
                
                break;
            case 'op3':
                
                break;
        
            default:
                setErro("Erro ao selecionar opção");
                break;
        }
    }, [j1, j2])
}

export default useComparar