import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';

import CartModal from '../components/menu/CartModal';

const useStyles = makeStyles (theme => ({
  avatar: {
    backgroundColor: red[500],
  },
  discount: {
    backgroundColor: red[500],
    position: 'absolute',
    right: '0',
  },
  cart:{
      position:'fixed',
      right:'-30px',
      top:"45%",
      width:"auto",
      height:'auto',
      'z-index': '999'
  }
}));

export default function CartWrapper() {
  const classes = useStyles ();
  const [expanded, setExpanded] = useState (false);
  const [open, setOpen] = useState (false);


  function closeModal () {
    console.log ('Here clicked');
    setOpen (false);
  }

  function openModal(){
    setOpen(true);
  }


  return (
    <Card className={classes.cart} >
      <div className="discount"><span></span></div>
      <CardHeader
        avatar={
         <IconButton onClick={() => openModal ()}>ShoppingCartIcon</IconButton>
        }        
      />      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        </Typography>
      </CardContent>
      <CartModal open={open} closeModal={closeModal}/>
    </Card>
  );
}
