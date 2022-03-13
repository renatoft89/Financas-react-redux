import React from "react";
import '../styles/Table.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

class Table extends React.Component {
   render() {
    const { infoInputs } = this.props;
    console.log(infoInputs.infos);
    // const { date, local, descricao, valor } = infoInputs;
    // console.log(infoInputs);
    return (
      <div>
      <table id="customers">
      <tbody>
      <tr>
        <th>Data</th>
        <th>Localização da Compra</th>
        <th>Descrição</th>
        <th>Valor</th>
        <th>Total</th>
      </tr>
      {infoInputs.infos.map((info) => (
        <tr key={info.local} >
          <td>{ info.date }</td>
          <td>{ info.local }</td>
          <td>{ info.descricao }</td>
          <td>{ info.valor }</td>
          <td>{ info.totalComras }</td>
        </tr>
      ))
      }
      </tbody>
    </table>
    </div>
    )}
}

Table.propTypes = {
  infoInputs: PropTypes.objectOf(PropTypes.array).isRequired,
}

const mapStateToProps = (state) => ({
  infoInputs: state.reducer.infoInputs
});

export default connect(mapStateToProps)(Table);