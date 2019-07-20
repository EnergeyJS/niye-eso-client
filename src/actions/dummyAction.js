/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { data } from '../services/data';

import {
  GET_DUMMY_DATA,
} from './types';

// eslint-disable-next-line import/prefer-default-export
export const getDummyData = () => {
  const dispatch = useDispatch();

  useCallback(() => dispatch({
    type: GET_DUMMY_DATA,
    payload: data,
  }), [dispatch]);
};
