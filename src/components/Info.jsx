import React from "react";
import '../styles/Info.css'

class Info extends React.Component {
  constructor() {
    super();

    this.state = {
      date: '',
      local: '',
      descricao: '',
      valor: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onSubmitForm() {
    console.log('enviar');
    // const { history, dispatchSetValue } = this.props;
    // Disparamos a nossa action através da função importada
    // de actions.js, que apelidamos de dispatchSetValue
    // dispatchSetValue(this.state);
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

export default Info;