import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction: { amount, text, _id } }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = amount < 0 ? '-' : '+';
  return (
    <li className={amount < 0 ? 'minus' : 'plus'}>
      {text}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button className='delete-btn' onClick={() => deleteTransaction(_id)}>
        x
      </button>
    </li>
  );
};

export default Transaction;
