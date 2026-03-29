import React, { useReducer, useState } from 'react';

export default function Reducer() {
  const initialState = { count: 0, name: 'jimmy' };

  function reducer({ count }, { type }) {
    switch (type) {
      case 'reset':
        return initialState;
      case 'increment':
        return { count: count + 1, name: 'kim' };
      case 'decrement':
        return { count: count - 1, name: 'park' };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count : {state.count} Name : {state.name}
      <br />
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}
