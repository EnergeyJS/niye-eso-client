import {
  GET_DUMMY_DATA,
  FILTER_DUMMY_DATA,
  CART_DATA,
} from '../actions/types';

const initialState = {
  list: [],
  cart: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'inc':
      return { ...state, count: state.count + 1 };
    case CART_DATA:
      return { ...state, cart: [...state.cart, action.payload] };
    case FILTER_DUMMY_DATA:
      return { ...state, list: action.payload };
    case GET_DUMMY_DATA:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
