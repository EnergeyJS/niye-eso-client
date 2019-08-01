import { createStore, compose } from 'redux';
import rootReducer from './reducers/idex';

const store = createStore(
  rootReducer,
  compose(
    // eslint-disable-next-line no-undef
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  ),
);

export default store;
