import React from "react";
import '../styles/Tabela.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

class Resultado extends React.Component {
   render() {
    const { infoInputs } = this.props;
    const { date, local, descricao, valor } = infoInputs;
    console.log(infoInputs);
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
      <tr>
        <td>{ date }</td>
        <td>{ local }</td>
        <td>{ descricao }</td>
        <td>{ valor }</td>
      </tr>
      </tbody>
    </table>
    </div>
    )}
}

Resultado.propTypes = {
  infoInputs: PropTypes.objectOf(PropTypes.string).isRequired,
}

const mapStateToProps = (state) => ({
  infoInputs: state.reducer.infoInputs
});

export default connect(mapStateToProps)(Resultado);