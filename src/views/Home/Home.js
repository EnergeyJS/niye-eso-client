
import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import imgUrl from '../../assests/images/Background_home.jpg';
import SaveMoney from '../../assests/images/save_money.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    flexGrow: 1,
    backgroundImage: `url(${imgUrl})`,
    height: '50vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

  },
  search: {
    position: 'absolute',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: theme.shape.borderRadius,
    zIndex: 1,
    width: '50%',
  },
  searchIcon: {
    width: theme.spacing(5),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),

    [theme.breakpoints.up('md')]: {
      width: 600,
    },
  },
}));

export default function CartWrapper() {
  const classes = useStyles();


  return (
<div className={classes.root}>
    <Grid container spacing={2}>
      <Grid container justify="center" className={classes.header} item xs={12} sm={12}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ marginBottom: '100px' }}>Product Delivery in 1Hour</h1>

            <div className={classes.search}>
               <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search for Products..(Foods, Baby products...)"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'Search' }}
              />
            </div>

        </div>
      </Grid> 
     
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          item xs={12} sm spacing={2}>
          <Grid item xs={12} sm={6}>
            <img src={SaveMoney} style={{ width: '100%', cursor: 'pointer' }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={SaveMoney} style={{ width: '100%', cursor: 'pointer' }} />
          </Grid>
        </Grid>
        

    </Grid>
  </div>

  );
}
