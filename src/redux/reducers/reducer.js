import { SET_PURCHASE_VALUE } from '../actions/action';

const INITIAL_STATE  = {
  infoInputs: {
    infos: [{
      date: '00/00/0000',
      local: '-',
      descricao: '-',
      valor: 'R$ 0,00',
      totalComras: 'RS 0,00',
    }],
  },
};

const reducer = (state = INITIAL_STATE , action) => {
  switch (action.type) {
  case SET_PURCHASE_VALUE:
    return { ...state, infoInputs: action.payload };
  default:
    return state;
  }
};

export default reducer;