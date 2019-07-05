import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartTwoTone';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import CartModal from './CartModal';

const useStyles = makeStyles (theme => ({
  root: {
    right: '-13px',
    position: 'fixed',
    'z-index': '1223',
    top: '48vh',
  },
  paper: {
    // padding: theme.spacing (2),
    textAlign: 'center',
    backgroundColor: 'transparent',
    border:0,
    boxShadow:'none'
  },
  cartIcon:{
    color:theme.palette.primary.main,
    fontSize:'100px'
  }
}));

export default function CartWrapper () {
  const classes = useStyles ();
  const [open, setOpen] = useState (false);

  function closeModal () {
    console.log ('Here clicked');
    setOpen (false);
  }

  function openModal () {
    setOpen (true);
  }

  return (
    <div className={classes.root}>
          {! open && <Paper className={classes.paper} onClick={openModal} style={{cursor: 'pointer'}}> <ShoppingCartIcon color={"primary"} className={classes.cartIcon}/></Paper>}
      <Grid container>
        <Grid item xs style={{boxShadow: ''}}>
          <CartModal open={open} closeModal={closeModal}/>
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
    </div>
  );
}
