import React, { useContext } from "react";
import FinaceContext from "../Context/FinanceContext";
// import PropTypes from 'prop-types';

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
  } = useContext(FinaceContext)
  console.log(date);

  const onSubmitForm = () => {
    console.log('oi');
    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
    let data = new Date(date);
    date = ((data.getDate() + " " + meses[(data.getMonth())] + " " + data.getFullYear()));
    
    let valorFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format( price );
    price = valorFormatado
    console.log(valorFormatado);
    
    purchase.push({ date, local, description, price  })
    // Disparamos a nossa action através da função importada
    // de actions.js, que apelidamos de dispatchSetValue
    setPurchase([...purchase]);
    // history.push('/professionalform');
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
            required
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
            onChange={ ({ target }) => setPrice(target.value) }
            value={ price }
            name="valor"
            required           
          />
        </label>
        <button
          type="button"
          onClick={ onSubmitForm }
        >
          Adicionar
        </button>
      </div>    
  );
}

export default Info;
