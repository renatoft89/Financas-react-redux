import React from "react";
import '../styles/Tabela.css'

class Resultado extends React.Component {
   render() {
    return (
      <div>
      <table id="customers">
      <tr>
        <th>Data</th>
        <th>Localização da Compra</th>
        <th>Descrição</th>
        <th>Valor</th>
      </tr>

      {/* {dataInfo.map(function(item)
                  {
                     return (
                         <tr>
                             <td>{item.data}</td>
                             <td>{item.CpfCnpj}</td>
                         </tr>
                     )
                  }
               } */}
      {/* <tr>
        <td>05 de Fevereito</td>
        <td>Posto Ipiranga</td>
        <td>Abastecimento</td>
        <td>R$ 100,00</td>
      </tr>
      <tr>
        <td>03 de Fevereito</td>
        <td>Posto Shel</td>
        <td>Abastecimento</td>
        <td>R$ 100,00</td>
      </tr> */}
    </table>
    </div>
    )}
}

export default Resultado;