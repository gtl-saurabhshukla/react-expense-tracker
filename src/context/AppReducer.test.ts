import reducer from './AppReducer';
import { ADD_TRANSACTION, DELETE_TRANSACTION } from './AppActions';

describe('App reducer', (): any => {
  const transactions: any = [
    {
      id: 1,
      text: 'Salary',
      amount: +8000,
    },
    {
      id: 2,
      text: 'Food',
      amount: -5000,
    },
  ];

  it('should handle ADD_TRANSACTION', (): any => {
    const state: any = {
      transactions: [],
    };
    const action = {
      type: ADD_TRANSACTION,
      payload: transactions,
    };
    expect(reducer(state, action)).toEqual({
      ...state,
      transactions: [action.payload, ...state.transactions],
    });
  });

  it('should handle DELETE_TRANSACTION', (): any => {
    const state: any = {
      transactions: [],
    };
    reducer(state, {
      type: ADD_TRANSACTION,
      payload: transactions[0],
    });
    reducer(state, {
      type: ADD_TRANSACTION,
      payload: transactions[1],
    });
    const action = {
      type: DELETE_TRANSACTION,
      payload: 1,
    };
    expect(reducer(state, action)).toEqual({
      ...state,
      transactions: state.transactions.filter(
        (transaction: any): boolean => transaction.id !== action.payload,
      ),
    });
  });
});
