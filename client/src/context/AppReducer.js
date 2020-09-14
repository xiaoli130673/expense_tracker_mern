export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_TRANSACTIONS':
      return {
        ...state,
        transactions: payload,
        loading: false,
      };

    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, payload],
        loading: false,
      };

    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== payload
        ),
        loading: false,
      };

    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
// export default (state, action) => {
//   switch (action.type) {
//     case 'GET_TRANSACTIONS':
//       return {
//         ...state,
//         loading: false,
//         transactions: action.payload,
//       };
//     case 'DELETE_TRANSACTION':
//       return {
//         ...state,
//         transactions: state.transactions.filter(
//           (transaction) => transaction._id !== action.payload
//         ),
//       };
//     case 'ADD_TRANSACTION':
//       return {
//         ...state,
//         transactions: [...state.transactions, action.payload],
//       };
//     case 'TRANSACTION_ERROR':
//       return {
//         ...state,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };
