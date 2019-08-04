/* eslint-disable*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from "../components/dataDisplay/Card";
import BreadCrumbNav from "../components/menu/BreadCrumbNav/BreadCrumbNav";
import CartWrapper from '../components/cart/CartWrapper';
import { data } from '../services/data';
const useStyles = makeStyles(() => ({
  cover: {
    display: 'block',
    position: 'relative',
    boxShadow: 'none',
  },
  coverPhotoWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  coverPhoto: {
    width: '20vw',
    height: 'auto',
    margin: 'auto',
  },
  coverTxt: {
    left: '35vw',
    bottom: '-1vh',
    position: 'absolute',
    background: 'white',
    padding: '0 5vw',
  },
}));
export default function Products() {
  const classes = useStyles();
   
  const SaveCart = (item) => {
    console.log('hellooo cart...', item);
    return(
      <CartWrapper data={item}/>
    );
   }

  return (
    <div>
      <Paper className={classes.cover}>
        <div className={classes.coverPhotoWrapper}>
          <img src='https://i.ibb.co/chT1Fjk/Guitar-PNG-Image-500x556.png' alt="Cover " className={classes.coverPhoto}/>
        </div>
        <hr/>
        <div className={classes.coverTxt}>
        Test
        </div>
      </Paper>
      <BreadCrumbNav />
      {data.map((item, index) => (
        <Card key={index} data={item} OnChange={() => SaveCart(item)}/>
      ))}
    </div>
  );
}
