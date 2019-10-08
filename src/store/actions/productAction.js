/* eslint-disable react-hooks/rules-of-hooks */
// import { useCallback } from 'react';
// import { useDispatch } from 'react-redux';
import axios from 'axios';
import { data } from '../../services/data';


import {
  GET_PRODUCT_DATA,
  FILTER_DUMMY_DATA,
} from './types';

// eslint-disable-next-line import/prefer-default-export
export const getProductData = (dispatch) => {
  axios('http://localhost:9100/api/products').then((result) => {
    console.log('Result-----------------');
    console.log(result);
    dispatch({
      type: GET_PRODUCT_DATA,
      payload: {
        data: result.data,
      },
    });
  });
};

export const getFilterDummyData = (dispatch, serachValue) => {
  dispatch({
    type: FILTER_DUMMY_DATA,
    payload: data.filter(itm => itm.name === serachValue),
  });
};
