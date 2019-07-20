import { combineReducers } from 'redux';
import dummyReducer from './dummyReucer';

export default combineReducers({
  dummyData: dummyReducer,
});
