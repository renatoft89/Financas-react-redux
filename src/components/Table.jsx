import React, { useContext } from "react";
import '../styles/Table.css';
import finaceContext from "../Context/FinanceContext";

function Table() {
  const { purchase, setTotalPurchase } = useContext(finaceContext);

  let sum = purchase.reduce((accum, obj) => {
    return parseInt(accum) + parseInt(obj.price)
 }); setTotalPurchase(sum);
 console.log(purchase[0].price);
  // const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
  // let data = new Date(date);
  // date = ((data.getDate() + " " + meses[(data.getMonth())] + " " + data.getFullYear()));
  
  // let valorFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format( info.price );
  // price = valorFormatado
  // sconsole.log(valorFormatado);
 
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
      {purchase.map((info) => (
        <tr key={ info.lenght } >
          <td>{ info.date }</td>
          <td>{ info.local }</td>
          <td>{ info.description }</td>
          <td>{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format( info.price ) }</td>
        </tr>
      ))
      }
      </tbody>
    </table>
    </div>
    )}

export default Table;
