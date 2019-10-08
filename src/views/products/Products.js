
import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/dataDisplay/Card';
import { getProductData } from '../../store/actions/productAction';
import useStyles from './style';

import {
  CART_DATA,
} from '../../store/actions/types';

export default function Products() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const productData = useSelector(state => state.productData.list.data);

  useEffect(() => {
    // Update the document title using the browser API
    (getProductData(dispatch));
  }, [dispatch]);


  const addingToCart = (cartData) => {
    dispatch({
      type: CART_DATA,
      payload: cartData,
    });
  };

  return (
    <div>
      <Paper className={classes.cover}>
        {/* <div className={classes.coverPhotoWrapper}>
          <img src='https://i.ibb.co/chT1Fjk/Guitar-PNG-Image-500x556.png' alt="Cover " className={classes.coverPhoto}/>
        </div>
        <hr/> */}
      </Paper>
      {
        (productData && productData.length > 0)
          ? productData.map((item, index) => (
            <Card key={index} data={item} OnChange={() => addingToCart(item)}/>
          )) : null


      }

    </div>
  );
}
