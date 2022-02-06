import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setPurchaseValue } from '../redux/actions/action'
import '../styles/Info.css'

class Info extends React.Component {
  constructor() {
    super();

    this.state = {
      date: '',
      local: '',
      descricao: '',
      valor: '',
      infos: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onSubmitForm() {
    const { dispatchSetValue } = this.props;
    const{ date, local, descricao, valor } = this.state
    const { infos } = this.state;
    infos.push({ date, local, descricao, valor  })
    // Disparamos a nossa action através da função importada
    // de actions.js, que apelidamos de dispatchSetValue
    dispatchSetValue(this.state);
    // history.push('/professionalform');
  }

  render() {
    const { date, local, descricao, valor } = this.state;
    return (
      <div className="info">
        <form action="subtmit" method="get"></form>
        <label htmlFor="date">
          Data: 
          <input
            type="date"
            id="date"
            onChange={ this.handleChange }
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
            onChange={ this.handleChange }
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
            onChange={ this.handleChange }
            value={ descricao }
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
            onChange={ this.handleChange }
            // value={` {'R$' ${ valor }`}
            value={ valor }
            name="valor"
            required           
          />
        </label>
        <button
          type="button"
          onClick={ this.onSubmitForm }
        >
          Adicionar
        </button>
      </div>
    )
  }
}
Info.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  // dispatchSetValue é um "apelido" para executarmos a nossa action creator
  // Nossa action creator é a função importada do arquivo actions
  // ou seja, setPersonalValue,
  // que vai receber um parâmetro
  // esse parâmetro é o estado do nosso componente
  // aqui estamos apenas avisando que vai existir um parâmetro
  // mas o estado do componente é passado no momento da execução
  // nesse caso, dentro da função onSubmitForm
  dispatchSetValue: (valueAndName) => dispatch(setPurchaseValue(valueAndName)),
}
);

const mapStateToProps = (state) => ({ personalInputs: state.reducer.personalInputs });

export default connect(mapStateToProps, mapDispatchToProps)(Info);
// a função connect conversa com o Provider, um avisa o outro quando há alterações.
