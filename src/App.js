import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login, logout } from './actions'

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="tc">
      <h1>Counter </h1>
      <p>{counter}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h1>Login to reveal Top secret</h1>
      <button onClick={()=> dispatch(login())}>Login</button>
      <button onClick={()=> dispatch(logout())}>Logout</button>
      <h2>{isLogged ? 'You are fat' : 'Nothing to see here'}</h2>
    </div>
  );
}

export default App;