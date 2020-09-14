import React, { Fragment, useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    text: '',
    amount: 0,
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction(formData);
    setFormData({
      text: '',
      amount: 0,
    });
  };

  return (
    <Fragment>
      <h3>Add new transaction</h3>
      <form id='form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            id='text'
            name='text'
            placeholder='Enter text...'
            onChange={onChange}
            value={formData.text}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            id='amount'
            name='amount'
            placeholder='Enter amount...'
            onChange={onChange}
            value={formData.amount}
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </Fragment>
  );
};

export default AddTransaction;
