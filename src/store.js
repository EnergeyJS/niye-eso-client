import { createStore, compose } from 'redux';

const initialState = {
  count: 0,
  text: 'edit me'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'inc':
      return { ...state, count: state.count + 1 };
    case 'dsc':
        return { ...state, count: state.count - 1 };
    case 'setText':
      return { ...state, text: action.text };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );

export default store;