import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Increase from '@material-ui/icons/KeyboardArrowUp';
import Decrease from '@material-ui/icons/KeyboardArrowDown';
import { Link } from 'react-router-dom';

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
    position: 'absolute',
    top: '0px',
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
    color: '#fff',
    height: '60px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 0 0 20px',
  },
  cartCoupun: {
    position: 'fixed',
    bottom: '70px',
    backgroundColor: '#e4e0e1',
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid #EDEDED',
    cursor: 'pointer',
  },
  GoButton: {
    width: '3%',
    height: '27px',
    borderRadius: '4px',
    marginLeft: '1%',
    marginRight: '10px',
    background: '#ff8182',
    fontSize: '17px',
    color: 'white',
    textAlign: 'center',
  },
}));

export default function SimpleModal({ closeModal }) {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);

  function hideDiv() {
    setVisible(!visible);
  }

  return (
    <div className={classes.root}>
      <div style={{ height: '19%' }}>
        <div className={classes.cartHeader}>
          <div style={{ float: 'left', paddingTop: '10px' }}>
            <img
              src="https://user-images.githubusercontent.com/18731391/60767134-f7a7f000-a0d4-11e9-907d-8e02f9c3ed59.png"
              alt=""
            />
            <span style={{ marginLeft: '5px', color: '#695d5d' }}>
              0 Items
            </span>
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

        <div className={classes.cartProgress}>
          <div>
            <span>
              <span
                style={{
                  color: '#fff',
                  fontSize: '14px',
                  paddingLeft: '5px',
                }}
              >
                Shop ৳300 more and save ৳19 fee
              </span>
              <span
                style={{
                  color: '#fff',
                  fontSize: '14px',
                  marginRight: '10px',
                  float: 'right',
                }}
              >
                ৳39
              </span>
            </span>
          </div>
        </div>

        <div
          style={{
            height: '60px',
            width: '100%',
            backgroundColor: '#e4e0e1',
            boxSizing: 'border-box',
            border: '1px',
          }}
        >
          <p style={{ textAlign: 'center' }}>Express Delivery</p>
        </div>
      </div>

      <div style={{ height: '48%', overflowY: 'scroll' }}>
        <div>
          <Grid container>
            <Grid item xs={1} container direction="colum">
              <Grid>
                <Increase style={{ color: '#AAA', pointer: 'cursor' }} />
              </Grid>
              <Grid>
                <span style={{ marginLeft: '8px' }}>1</span>
              </Grid>
              <Grid>
                <Decrease style={{ color: '#AAA', pointer: 'cursor' }} />
              </Grid>
            </Grid>

            <Grid
              item
              xs={2}
              style={{ marginLeft: '10px', marginTop: '15px' }}
            >
              {' '}
              <img
                src="https://i.ibb.co/chT1Fjk/Guitar-PNG-Image-500x556.png"
                style={{ width: '50px', height: '30%' }}
                alt=""
              />
            </Grid>

            <Grid
              item
              xs={6}
              container
              direction="colum"
              style={{ marginTop: '15px', marginLeft: '10px' }}
            >
              <Grid>
                <span style={{ color: '#615e58', fontSize: '14px' }}>
                  Meril Baby Shampoo
                </span>
              </Grid>
              <Grid>
                <span style={{ color: '#9A9999', fontSize: '11px' }}>
                  {' '}
                  ৳ 100 / 110 m
                </span>
              </Grid>
            </Grid>

            <Grid item xs={2} style={{ marginTop: '30px' }}>
              <span
                style={{
                  color: '#AAA',
                  fontSize: '14px',
                }}
              >
                ৳39
              </span>
              <span
               // eslint-disable-next-line no-console
               onClick={() => console.log('heloo')}
                style={{
                  color: '#AAA',
                  fontSize: '14px',
                  marginLeft: '16px',
                  pointer: 'cursor',
                }}
              >
                X
              </span>
            </Grid>
          </Grid>
        </div>
        <hr />

        <div>
          <Grid container>
            <Grid item xs={1} container direction="colum">
              <Grid>
                <Increase style={{ color: '#AAA', pointer: 'cursor' }} />
              </Grid>
              <Grid>
                <span style={{ marginLeft: '8px' }}>1</span>
              </Grid>
              <Grid>
                <Decrease style={{ color: '#AAA', pointer: 'cursor' }} />
              </Grid>
            </Grid>

            <Grid
              item
              xs={2}
              style={{ marginLeft: '10px', marginTop: '15px' }}
            >
              {' '}
              <img
                src="https://i.ibb.co/chT1Fjk/Guitar-PNG-Image-500x556.png"
                style={{ width: '50px', height: '30%' }}
                alt=""
              />
            </Grid>

            <Grid
              item
              xs={6}
              container
              direction="colum"
              style={{ marginTop: '15px', marginLeft: '10px' }}
            >
              <Grid>
                <span style={{ color: '#615e58', fontSize: '14px' }}>
                  Meril Baby Shampoo
                </span>
              </Grid>
              <Grid>
                <span style={{ color: '#9A9999', fontSize: '11px' }}>
                  {' '}
                  ৳ 100 / 110 m
                </span>
              </Grid>
            </Grid>

            <Grid item xs={2} style={{ marginTop: '30px' }}>
              <span
                style={{
                  color: '#AAA',
                  fontSize: '14px',
                }}
              >
                ৳39
              </span>
              <span
              // eslint-disable-next-line no-console
              onClick={() => console.log('heloo')}
                style={{
                  color: '#AAA',
                  fontSize: '14px',
                  marginLeft: '16px',
                  pointer: 'cursor',
                }}
              >
                X
              </span>
            </Grid>
          </Grid>
        </div>
        <hr />
      </div>

      <div style={{ height: '22%' }}>
        {/* <div className={classes.cartCoupun}> */}
        <Grid
          item
          xs={12}
          sm={12}
          container
          direction="colum"
          justify="center"
          alignItems="center"
          className={classes.cartCoupun}
        >
          <Grid item xs={12} sm={12} justify="center" alignItems="center">
            <span style={{ marginLeft: '6%' }} onClick={hideDiv}>
              <span
                style={{
                  border: '1px solid',
                  borderRadius: '50%',
                  borderColor: '#AAA',
                }}
              >
                {visible ? (
                  <Decrease

                    style={{
                      color: '#AAA',
                      pointer: 'cursor',
                    }}
                  />
                ) : (
                  <Increase
                    onClick={hideDiv}
                    style={{
                      color: '#AAA',
                      pointer: 'cursor',
                    }}
                  />
                )}
              </span>
              <span style={{ marginLeft: '10px' }}>Have a special Code?</span>
            </span>
          </Grid>
          {visible ? (
            <Grid item xs={12} sm={12}>
              <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                <div style={{ width: '12%' }}>
                  <input type="text"
                  name="name"
                  placeholder="Special Code"
                  style={{ width: '90%', textAlign: 'center', marginLeft: '10%' }} />
                  </div>

                 <div className={classes.GoButton}>
                  <span
                  // eslint-disable-next-line no-console
                  onClick={() => console.log('helooo')}
                  style={{
                    fontSize: '17px', color: 'white',
                  }}>GO</span>
                  </div>
                  {/* <Button
                style={{
                  height: '30px',
                  marginLeft: '10%',
                  background: '#ff8182',
                  fontSize: '17px',
                }}
              >   <span style={{ marginBottom: '10px' }}>
              Go
            </span></Button> */}
                <p onClick={() => setVisible(false)}>Close</p>
              </div>
            </Grid>
          ) : null}
        </Grid>

        {/* <Grid
          item
          xs={12}
          sm={12}
          container
          direction="row"
          className={classes.cartFooter}
        > */}
                          <div className={classes.cartFooter}>

             <Link to="/signin" className={classes.link}>
              <Button
                style={{
                  width: '170%',
                  height: '40px',
                  background: '#ff8182',
                  color: '#fff',
                  fontSize: '17px',
                }}
              >
                <span style={{ width: '60%', textAlign: 'center' }}>
                  Place Order
                </span>
                <span style={{ textAlign: 'center', width: '40%' }}>৳50</span>
              </Button>
            </Link>
            </div>


          {/* <Grid item xs={12} sm={6}>
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
          </Grid> */}
        {/* </Grid> */}
      </div>
    </div>
    // </div>
  );
}
