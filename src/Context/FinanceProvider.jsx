import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import FinanceContext from './FinanceContext';


function FinanceProvider({ children }) {
  const [date, setDate] = useState(['00/00/00']);
  const [local, setLocal] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('R$ 0,00');
  const [purchase, setPurchase] = useState([]);
  const[totalPurchase, setTotalPurchase] = useState('RS 0,00');
  // const com os states usados.
  const data = {
    date,
    setDate,
    local,
    setLocal,
    description,
    setDescription,
    price,
    setPrice,
    totalPurchase,
    setTotalPurchase,
    purchase,
    setPurchase,    
  };

  return (
    <FinanceContext.Provider value={ data }>
      { children }
    </FinanceContext.Provider>
  );
}

// FinanceProvider.propTypes = {
//   // validar children => https://stackoverflow.com/questions/45318841/unable-to-get-props-children-while-using-provider-in-react
//   children: PropTypes.element.isRequired,
// };

export default FinanceProvider;
