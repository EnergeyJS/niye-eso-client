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
    'z-index': '1223',
    top: '0',
    bottom:'0',
    display: 'flex !important',
justifyContent: 'center !important',
alignItems: 'center !important'
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
  },
  close: {
    top: "-60px",
    width:'200px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    right: "40%",
    position: "absolute",
    fontSize: "40px",
    fontWeight: "900",
    display: "block",
    borderRadius: "60px 60px 0 0",
    borderColor: "#ff0000b8",
    textAlign: "center",
    "&:hover": {
      //  boxShadow: '-1px 1px 7px 1px #007bff',
      pointer: "mouse",
      backgroundColor: theme.palette.secondary.main
    },
    "&:after": {
      content: "'X'"
    }
  },
  item:{
    position:'relative'
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
          {! open && 
          <Paper className={classes.paper} onClick={openModal} style={{cursor: 'pointer'}}> <ShoppingCartIcon color={"primary"} className={classes.cartIcon}/>
          </Paper>
          }
      <Grid container>
        <Grid item xs style={{boxShadow: ''}} className={classes.item}>
          {open &&<button className={classes.close} onClick={closeModal} />}
          <CartList open={open} closeModal={closeModal}/>
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
    </div>
  );
}
