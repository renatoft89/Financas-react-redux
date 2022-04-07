import React, { useContext  } from "react";
import '../styles/Table.css';
import finaceContext from "../Context/FinanceContext";

function Table() {
  const { purchase, setTotalPurchase } = useContext(finaceContext);

  let sum = purchase.reduce((accum, obj) => parseFloat(accum) + parseFloat(obj.price), 0);
  setTotalPurchase(sum);
  
  return (
    <div>
      <table id="customers">
      <tbody>
      <tr>
        <th>Data</th>
        <th>Localização da Compra</th>
        <th>Descrição</th>
        <th>Valor</th>
      </tr>
      {purchase.length <= 1 && (
        <p>No Results Found</p>
      )}
     {purchase.length > 1 && (
      purchase.map((info) => (
        <tr key={ info.idKey } >
          <td>{ info.date }</td>
          <td>{ info.local }</td>
          <td>{ info.description }</td>
          <td>{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format( info.price ) }</td>
        </tr>
      )))
      }
      </tbody>
    </table>
    </div>
    )}

export default Table;
