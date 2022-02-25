import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addCurrency,payCurrency} from '../actions';

export default function Currency() {
  const currency = useSelector(state=>state.currencyReducer)
  const dispatch = useDispatch();
  console.log(currency,addCurrency)
  return (
    <div>
      <span>Currency {currency}</span>
      <button onClick={()=>dispatch(addCurrency())}>add</button>
      <button onClick={()=>dispatch(payCurrency())}>pay</button>
      </div>
  )
}
