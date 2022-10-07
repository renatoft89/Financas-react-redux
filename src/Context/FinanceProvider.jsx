import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import FinanceContext from './FinanceContext';

// date: '00/00/0000',
// local: '-',
// descricao: '-',
// valor: 'R$ 0,00',
// totalComras: 'RS 0,00',

function FinanceProvider({ children }) {
  const [date, setDate] = useState('00-00-00');
  const [local, setLocal] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(parseFloat(0));
  const [purchase, setPurchase] = useState([]);
  const[totalPurchase, setTotalPurchase] = useState(0);
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
