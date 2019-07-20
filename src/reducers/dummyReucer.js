
import {
  GET_DUMMY_DATA,
} from '../actions/types';

const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'inc':
      return { ...state, count: state.count + 1 };
    case 'dsc':
      return { ...state, count: state.count - 1 };
    case 'setText':
      return { ...state, text: action.text };
    case GET_DUMMY_DATA:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
