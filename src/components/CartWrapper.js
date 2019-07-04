import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartTwoTone';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import CartModal from '../components/menu/CartModal';

const useStyles = makeStyles (theme => ({
  root: {
    right: '0',
    position: 'fixed',
    'z-index': '1223',
    top: '48vh',
  },
  paper: {
    padding: theme.spacing (2),
    textAlign: 'center',
    backgroundColor: 'blue',
  }
}));

export default function CartWrapper () {
  const classes = useStyles ();
  const [expanded, setExpanded] = useState (false);
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
      <Grid container>
        <Grid item xs style={{boxShadow: ''}}>
          <CartModal open={open} closeModal={closeModal}/>
        </Grid>
        <Grid item>
          {! open && <Paper className={classes.paper} onClick={openModal} style={{cursor: 'pointer'}}> <ShoppingCartIcon/></Paper>}
        </Grid>
      </Grid>
    </div>
  );
}
