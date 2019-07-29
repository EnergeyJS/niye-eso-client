import React, { } from 'react';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import SaveMoney from '../../assests/images/save_money.jpg';
import Category from '../../components/dataDisplay/Category';
import CarouselEffect from '../../components/dataDisplay/Carousel ';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Footer from '../../components/Footer';
import DeliveryMen from '../../assests/images/DeliveryMan.jpg';
import freshVegetables from '../../assests/images/freshVegetables.jpg';
import GroceryStore from '../../assests/images/GroceryStore.jpg';

import Styles from './style';

const category = [
  {
    name: 'Fruits and Vegetables',
    reviews: '4.5',
  },
  {
    name: 'Meat and Fish',
    reviews: '4.5',
  },
  {
    name: 'Cooking',
    reviews: '4.5',
  },
  {
    name: 'Bevarages',
    reviews: '4.5',
  },
  {
    name: 'Home and Cleaning',
    reviews: '4.5',
  },
  {
    name: 'Beauty Products',
    reviews: '4.5',
  },
  {
    name: 'Pest COntrol',
    reviews: '4.5',
  },
  {
    name: 'Fruits and Vegetables',
    reviews: '4.5',
  },
  {
    name: 'Fruits and Vegetables',
    reviews: '4.5',
  },
];

export default function CartWrapper() {
  const classes = Styles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid
          container
          justify="center"
          className={classes.header}
          item
          xs={12}
          sm={12}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <h1 style={{ marginBottom: '100px' }}>Product Delivery in 1Hour</h1>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon
                  style={{ fontSize: 30, fontWeight: 600, color: 'grey' }}
                />
              </div>
              <InputBase
                placeholder="Search for Products..(Foods, Baby products...)"
                style={{ fontSize: '17px', fontWeight: '500' }}
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
          item
          xs={12}
          sm={12}
          spacing={2}
        >
          <Grid item xs={12} sm={6}>
            <img src={SaveMoney} style={{ width: '100%', cursor: 'pointer' }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={SaveMoney} style={{ width: '100%', cursor: 'pointer' }} />
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          item
          xs={12}
          sm={12}
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <div>
              <p
                style={{
                  textAlign: 'center',
                  marginTop: '30px',
                  color: 'rgba(0,0,0,.95)',
                  fontSize: '30px',
                  fontWeight: '300',
                }}
              >
                Our Product Category
              </p>
            </div>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          item
          xs={12}
          sm={12}
          spacing={2}
        >
          {category.map((item, index) => (
            <Grid key={index} item xs={8} sm={4}>
              <Category key={index} data={item} />
            </Grid>
          ))}
        </Grid>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          item
          xs={12}
          sm={12}
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <div>
              <p
                style={{
                  textAlign: 'center',
                  marginTop: '30px',
                  color: 'rgba(0,0,0,.95)',
                  fontSize: '30px',
                  fontWeight: '300',
                }}
              >
                How to order from Niye Eso?
              </p>
            </div>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          item
          xs={12}
          sm={12}
        >
          <Grid item xs={8} sm={8}>
            <CarouselEffect />
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          item
          xs={12}
          sm={12}
          spacing={2}
        >
          <Grid item xs={12} sm={12}>
            <div>
              <p
                style={{
                  textAlign: 'center',
                  marginTop: '30px',
                  color: 'rgba(0,0,0,.95)',
                  fontSize: '30px',
                  fontWeight: '300',
                }}
              >
                Why People Love Niye Eso?
              </p>
            </div>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          item
          xs={12}
          sm={12}
        >
          <Grid item xs={12} sm={4}>
            <div style={{ position: 'relative' }}>
              <img src={DeliveryMen} className={classes.img} />

              <div
                className={classes.loveTitleHeader}
              >
                <h3
                  className={classes.LoveHeading}
                >
                  Convenient & Quick
                </h3>
                <p
                  style={{
                    color: 'black',
                    fontSize: '16px',
                    fontWeight: 400,
                    align: 'center',
                  }}
                >
                  No waiting in traffic, no haggling, no worries carrying
                  groceries, they&aposre delivered right at your door.
                </p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={4}>
            <div style={{ position: 'relative' }}>
              <img src={freshVegetables} className={classes.img} />
              <div
                className={classes.loveTitleHeader}
              >
                <h3
                  className={classes.LoveHeading}
                >
                  Freshly Picked
                </h3>
                <p
                  style={{
                    color: 'black',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  Our fresh produce is sourced every morning, you get the best
                  from us.
                </p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={4}>
            <div style={{ position: 'relative' }}>
              <img src={GroceryStore} className={classes.img} />
              <div
                className={classes.loveTitleHeader}
              >
                <h3
                  className={classes.LoveHeading}
                >
                  A wide range of Products
                </h3>
                <p
                  style={{
                    color: 'black',
                    fontSize: '16px',
                    fontWeight: 400,
                  }}
                >
                  With 4000+ Products to choose from, forget scouring those
                  aisles for hours.
                </p>
              </div>
            </div>
          </Grid>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            item
            xs={12}
            sm={12}
            style={{ marginTop: '20px' }}
          >
            <Footer/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
