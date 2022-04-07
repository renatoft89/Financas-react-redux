import React, { useContext } from "react";
import FinanceContext from "../Context/FinanceContext";

import '../styles/Info.css'

function Info() {
  let {
    date,
    setDate,
    local,
    setLocal,
    description,
    setDescription,
    price,
    setPrice,
    purchase,
    setPurchase, 
  } = useContext(FinanceContext)

  const onSubmitForm = () => {
    let idKey = 1 ;
    idKey +=1;  
    // console.log(idKey);      
    purchase.push({ idKey, date, local, description, price  })    
    setPurchase([...purchase]);
  }

  return (
    <div className="info">
        <form action="subtmit" method="get"></form>
        <label htmlFor="date">
          Data: 
          <input
            type="date"
            id="date"
            onChange={ ({ target }) => setDate(target.value) }
            value={ date }
            name="date"
          />
        </label>
        <label htmlFor="local">
          Localização
          <input
            type="text"
            placeholder="local da Compra"
            onChange={ ({ target }) => setLocal(target.value) }
            value={ local }
            name="local"
            required           
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            type="text"
            placeholder="Descrição"
            onChange={ ({ target }) => setDescription(target.value) }
            value={ description }
            name="descricao"
            required           
          />
        </label>
        <label htmlFor="name">
          Valor
          <input
            type="number"
            step="0.01" 
            min="0"
            placeholder="Valor"
            onChange={ ({ target }) => setPrice(parseFloat(target.value)) }
            value={ price }
            name="valor"
            required           
          />
        </label>
        <button
          className="btn-add"
          type="button"
          onClick={ onSubmitForm }
        >
          Adicionar
        </button>
      </div>    
  );
}

export default Info;
