import React from 'react'

const Selecao = ({id, lista }) => {
  const [inputValor, setInputValor] = React.useState(null);
  
  return (
    <div>
      <input 
      list={lista}
      type="text"
      placeholder="Digite o nome do jogador:"
      value={inputValor}
      onChange={event => setInputValor(event.target.value)}
      />
      <datalist id={lista}>
        
      </datalist>
    </div>
  )
}

export default Selecao