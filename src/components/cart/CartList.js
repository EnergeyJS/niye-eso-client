/* eslint-disable react/jsx-key */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
  Grid,
} from '@material-ui/core';
import Increase from '@material-ui/icons/KeyboardArrowUp';
import Decrease from '@material-ui/icons/KeyboardArrowDown';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    right: '0',
    width: '320px',
    height: '100%',
    zIndex: 4,
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    boxShadow: '-2px 0 12px 0 rgba(143,143,143,.38)',
    transition: 'all 1s ease',

    position: 'fixed',
    top: '55px',
  },
  cartHeader: {
    fontSize: '15px',
    color: '#fff',
    backgroundColor: '#e4e0e1',
    height: '60px',
    boxSizing: 'border-box',
    padding: '10px 0 0 20px',
  },
  cartProgress: {
    backgroundColor: '#7a7879',
    height: '25px',
    width: '100%',
    float: 'left',
    position: 'relative',
    boxSizing: 'border-box',

  },
  button: {
    margin: theme.spacing(1),

  },
  cartFooter: {
    position: 'fixed',
    bottom: '10px',
    fontSize: '15px',
    color: '#fff',
    height: '60px',
    width: '30%',
    boxSizing: 'border-box',
    padding: '10px 0 0 20px',
  },
  cartCoupun: {
    position: 'fixed',
    bottom: '70px',
    backgroundColor: '#e4e0e1',
    width: '30%',
    boxSizing: 'border-box',
    border: '1px',
  },
}));

// eslint-disable-next-line react/prop-types
export default function SimpleModal({ closeModal }) {
  const classes = useStyles();
  const { cart } = useSelector(state => state.dummyData);

  return (
    <div className={classes.root}>
      <div className={classes.cartHeader}>
        <div style={{ float: 'left', paddingTop: '10px' }}>
          <img
            src="https://user-images.githubusercontent.com/18731391/60767134-f7a7f000-a0d4-11e9-907d-8e02f9c3ed59.png"
            alt=""
          />
          <span style={{ marginLeft: '5px', color: '#695d5d' }}>0 Items</span>
        </div>
        <Button
          variant="contained"
          className={classes.button}
          onClick={closeModal}
          style={{ float: 'right' }}
        >
          Close
        </Button>
      </div>
      <div>
        <div className={classes.cartProgress}>
          <div>
            <span>
              <span style={{ color: '#fff', fontSize: '14px', paddingLeft: '5px' }}>
                Shop ৳300 more and save ৳19 fee

              </span>
              <span style={{
                color: '#fff', fontSize: '14px', marginRight: '10px', float: 'right',
              }}
              >
৳39

              </span>
            </span>
          </div>

        </div>
        <div style={{
          height: '60px', width: '100%', backgroundColor: '#e4e0e1', boxSizing: 'border-box', border: '1px',
        }}
        >
          <p style={{ textAlign: 'center' }}>Express Delivery</p>
        </div>

        <div style={{ height: '350px', overflowY: 'scroll' }}>

{ cart.map(cartData => <div>
  <Grid container>

    <Grid item xs={1} container direction="colum">
      <Grid>
        <Increase style={{ color: '#AAA', pointer: 'cursor' }} />
      </Grid>
      <Grid><span style={{ marginLeft: '8px' }}>1</span></Grid>
      <Grid><Decrease style={{ color: '#AAA', pointer: 'cursor' }} /></Grid>

    </Grid>


    <Grid item xs={2} style={{ marginLeft: '10px', marginTop: '15px' }}>
      {' '}
      <img
        src="https://i.ibb.co/chT1Fjk/Guitar-PNG-Image-500x556.png"
        style={{ width: '50px', height: '30%' }}
        alt=""
      />

    </Grid>

    <Grid item xs={6} container direction="colum" style={{ marginTop: '15px', marginLeft: '10px' }}>
      <Grid>
        <span style={{ color: '#615e58', fontSize: '14px' }}>{cartData.name}</span>
      </Grid>
      <Grid>
        <span style={{ color: '#9A9999', fontSize: '11px' }}> ৳ 100 / 110 m</span>
      </Grid>
    </Grid>

    <Grid item xs={2} style={{ marginTop: '30px' }}>
      <span style={{
        color: '#AAA', fontSize: '14px',
      }}
      >
৳39

      </span>
      <span style={{
        color: '#AAA', fontSize: '14px', marginLeft: '16px', pointer: 'cursor',
      }}
      >
X

      </span>
    </Grid>


  </Grid>

</div>)}
          <hr />

        </div>


        <div className={classes.cartCoupun}>

          <Button style={{
            width: '80%', color: 'black', fontSize: '11px', pointer: 'cursor',
          }}
          >
            <span style={{
              border: '1px solid', borderRadius: '50%', borderColor: '#AAA',
            }}
            >
              <Increase style={{
                color: '#AAA', pointer: 'cursor',
              }}
              />

            </span>
            <span style={{ marginLeft: '10px' }}>Have a special Code?</span>


          </Button>

        </div>

        <div className={classes.cartFooter}>
          <Button
            style={{
              width: '40%',
              height: '40px',
              background: '#ff8182',
              color: '#fff',
              fontSize: '17px',
              float: 'left',
            }}
          >
            {' '}
Place Order
            {' '}

          </Button>

          <Button
            style={{
              width: '20%',
              height: '40px',
              background: '#e04f54',
              color: '#fff',
              fontSize: '17px',
              marginLeft: '45px',
            }}
          >
            <span style={{}}>
              <span>৳</span>
              <span>56</span>
            </span>
          </Button>

        </div>
      </div>
    </div>

  );
}
