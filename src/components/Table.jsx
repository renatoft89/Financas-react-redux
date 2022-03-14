import React, { useContext } from "react";
import '../styles/Table.css';
import finaceContext from "../Context/FinanceContext";

function Table() {
  const purchase = useContext(finaceContext);
  console.log(purchase); 
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
      {purchase.purchase.map((info) => (
        <tr key={info.local} >
          <td>{ info.date }</td>
          <td>{ info.local }</td>
          <td>{ info.description }</td>
          <td>{ info.price }</td>
        </tr>
      ))
      }
      </tbody>
    </table>
    </div>
    )}

export default Table;
