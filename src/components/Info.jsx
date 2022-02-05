import React from "react";
import '../styles/Info.css'

class Info extends React.Component {
  render() {
    return (
      <div className="info">
        <label htmlFor="date">
          Data: 
          <input
            type="date"
            id="date"
            name="date"
          />
        </label>
        <label htmlFor="local">
          Localização
          <input
            type="text"
            placeholder="local da Compra"
            name="local"           
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            type="text"
            placeholder="Descrição"
            name="descricao"           
          />
        </label>
        <label htmlFor="name">
          Valor
          <input
            type="number"
            step="0.01" 
            min="0"
            placeholder="Valor"
            name="local"           
          />
        </label>
        <button
          type="button"
          onClick=""
        >
          Adicionar
        </button>
      </div>
    )
  }
}

export default Info;