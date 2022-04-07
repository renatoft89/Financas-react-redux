import React, { useContext } from 'react';
import finaceContext from '../Context/FinanceContext';
import '../styles/Header.css'

function Header() {
  const { totalPurchase } = useContext(finaceContext);
  // console.log(totalPurchase);
  return (
    <div className="header">
      <h1>Controle Financeiro</h1>
    <p>{ `Total Despesas = ${ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format( totalPurchase ) }` }</p>
  </div>
  );
}

export default Header;
