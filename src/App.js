import React from 'react';
import {increment, decrement, declassify, classify } from './actions/';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="tc">
      <h1>Hello World!</h1>
      <h1>Counter {counter } </h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <p></p>
      <button onClick={() => dispatch(declassify())}>Declassify</button>
      <button onClick={() => dispatch(classify())}>Classify</button>
      { isLogged ? <h3>Top Secret!</h3> : <h3>Nothing to see here</h3>}

    </div>
  );
}

export default App;