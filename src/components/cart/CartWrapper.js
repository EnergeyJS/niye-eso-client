import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartTwoTone';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import CartList from './CartList';

const useStyles = makeStyles (theme => ({
  root: {
    right: '-13px',
    position: 'fixed',
    top: '64px',
    bottom: 0,
    backgroundColor: 'blue'
  },
  paper: {
    // padding: theme.spacing (2),
    textAlign: 'center',
    backgroundColor: 'transparent',
    border: 0,
    boxShadow: 'none',
  },
  cartIcon: {
    color: theme.palette.primary.main,
    fontSize: '100px',
  },
  item:{
    position:'relative'
  }
}));

export default function CartWrapper () {
  const classes = useStyles ();
  const [open, setOpen] = useState (false);

  function closeModal () {
    setOpen (false);
  }

  function openModal () {
    setOpen (true);
  }

  return (
    <div className={classes.root}>
          {! open && 
          <Paper className={classes.paper} onClick={openModal} style={{cursor: 'pointer'}}> <ShoppingCartIcon color={"primary"} className={classes.cartIcon}/>
          </Paper>
          }
      <div>
          <CartList open={open} closeModal={closeModal}/>
      </div>
    </div>
  );
}
