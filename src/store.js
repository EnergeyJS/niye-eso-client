import { createStore, compose } from 'redux';
import { data } from './services/data';

const initialState = data;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'inc':
      return { ...state, count: state.count + 1 };
    case 'dsc':
      return { ...state, count: state.count - 1 };
    case 'setText':
      return { ...state, text: action.text };
    case 'setData':
      return action.data;
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  compose(
    // eslint-disable-next-line no-undef
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  ),
);

export default store;
