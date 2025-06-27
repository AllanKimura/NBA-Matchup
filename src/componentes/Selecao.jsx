import React from 'react'

const Selecao = () => {
  const [inputValor, setInputValor] = React.useState(null);
  
  return (
    <div>
      <input 
      type="text"
      placeholder="Digite o nome do jogador:"
      value={inputValor}
      onChange={event => setInputValor(event.target.value)}
      />
      <ul>
        
      </ul>
    </div>
  )
}

export default Selecao