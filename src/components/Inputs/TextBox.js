import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TextBox = () => {
  const text = useSelector(state => state.text);
  const dispatch = useDispatch();
  const setText = useCallback(event => dispatch({
    type: 'setText',
    text: event.target.value,
  }), [dispatch]);
  return (
      <div>
        <div>Text: {text}</div>
        <input value={text} onChange={setText} />
      </div>
  );
};

export default TextBox;
