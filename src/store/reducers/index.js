import { combineReducers } from 'redux';
import dummyReducer from './dummyReducer';
import productReducer from './productReducer';

export default combineReducers({
  dummyData: dummyReducer,
  productReducer,
});
