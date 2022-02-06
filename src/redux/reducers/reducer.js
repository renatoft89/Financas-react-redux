import { SET_PURCHASE_VALUE } from '../actions/action';

const INITIAL_STATE  = {
  infoInputs: {
    infos: [{
      date: '00-00-000',
      local: '-',
      descricao: '-',
      valor: '0',
    }],
  },
};

const reducer = (state = INITIAL_STATE , action) => {
  switch (action.type) {
  // Caso o tipo da action seja SET_PERSONAL_VALUE,
  // retorne o que já existe no estado e atualize
  // o personalInputs com a informação trazida pela action case.
  case SET_PURCHASE_VALUE:
    return { ...state, infoInputs: action.payload };
  default:
    return state;
  }
};

export default reducer;