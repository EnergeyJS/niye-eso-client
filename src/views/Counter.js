import React, { useCallback } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
    const counter = useSelector(state => state.count)
    const dispatch = useDispatch()
    const inc = useCallback(() => dispatch({ type: 'inc' }), [dispatch]);
    const dsc = useCallback(() => dispatch({ type: 'dsc' }), [dispatch]);
    return (
      <div>
      <Link to="counter2">Counter2</Link>
        <div>This is redux doc style : {counter}</div>
        <button onClick={inc}>+1</button>
        <button onClick={dsc}>+1</button>
      </div>
    );
  };

  export default React.memo(Counter);