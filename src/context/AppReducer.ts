import {
  DELETE_TRANSACTION,
  ADD_TRANSACTION,
  SET_ERROR,
  RESET_ERROR,
} from './AppActions';

export default (state: any, action: any): any => {
  switch (action.type) {
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction: any): boolean => transaction.id !== action.payload,
        ),
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case RESET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
