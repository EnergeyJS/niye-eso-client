
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import CartList from './CartList';

const useStyles = makeStyles(theme => ({
  root: {
    right: '-3vh',
    position: 'fixed',
    top: '64px',
    bottom: 0,
    zIndex: 1,
  },
  paper: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    border: 0,
    position: 'fixed',
    right: '0',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  cartIcon: {
    color: theme.palette.primary.main,
    fontSize: '100px',
  },
  cartContainer: {
    height: '100%',
    transition: 'all 3000ms',
    position: 'fixed',
    right: '0',
    'z-index': 4,
  },
}));

<<<<<<< HEAD
export default function CartWrapper({
  setClass, unSetClass, data, props,
}) {
  console.log('propssss.....', props);
  console.log('CartWrapper.....', data);
=======
export default function CartWrapper({ setClass, unSetClass, data }) {
>>>>>>> 1bc265bc6a811bdcdee58c2166929bcc1ec66792
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const { cart } = useSelector(state => state.dummyData);


  function closeModal() {
    setOpen(false);
    unSetClass();
  }

  function openModal() {
    setOpen(true);
    setClass();
  }

  return (
    <div className={classes.root}>
      {!open && (
        <Paper
          className={classes.paper}
          onClick={openModal}
          style={{ cursor: 'pointer', height: '80px', width: '80px' }}
        >
          {' '}
          <div style={{ backgroundColor: '#55584D', height: '65%' }}>
            <img
              src="https://user-images.githubusercontent.com/18731391/60767134-f7a7f000-a0d4-11e9-907d-8e02f9c3ed59.png"
              alt=""
            />
            <br />
            <span style={{ color: '#fbd66f' }}>{cart.length} Items</span>
          </div>
          <div style={{ height: '35%', backgroundColor: '#f5fceb' }}>৳ 135</div>
        </Paper>
      )}
      {data || open || cart.length > 0 ? (
        <div className={classes.cartContainer}>
          <CartList closeModal={closeModal} />
        </div>
      ) : null}
    </div>
  );
}
