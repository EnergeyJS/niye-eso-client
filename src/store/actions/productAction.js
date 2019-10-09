/* eslint-disable react-hooks/rules-of-hooks */
// import { useCallback } from 'react';
// import { useDispatch } from 'react-redux';
import axios from 'axios';
import { data } from '../../services/data';

import {
  GET_PRODUCT_DATA,
  FILTER_DUMMY_DATA,
  CART_DATA,
} from './types';

// eslint-disable-next-line import/prefer-default-export
export const getProductData = (dispatch) => {
  axios('http://localhost:9100/api/products').then((result) => {
    dispatch({
      type: GET_PRODUCT_DATA,
      payload: {
        data: result.data,
      },
    });
  });
};

export const addingToCart = cartData => ({

  type: CART_DATA,
  payload: cartData,

});

export const getFilterDummyData = (dispatch, serachValue) => {
  dispatch({
    type: FILTER_DUMMY_DATA,
    payload: data.filter(itm => itm.name === serachValue),
  });
};
