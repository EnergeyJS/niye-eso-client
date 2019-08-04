import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import OrderImage1 from '../../assests/images/order.jpg';
import OrderImage2 from '../../assests/images/order_1.jpg';
import OrderImage3 from '../../assests/images/order_2.jpg';
import OrderImage4 from '../../assests/images/order_3.jpg';

const useStyles = makeStyles(() => ({
  sliderContainer: {
    width: '100%',
    height: 100,
    position: '' /* add this code for position fixed */,
    top: '0px' /* set top and left 0 */,
    left: '0px',
  },
  carouselStyle: {
    borderRadius: 10,
  },
  img: {
    height: 350,
    borderRadius: 10,
    width: '100%',
  },
}));

function CarouselEffect() {
  const classes = useStyles();
  //   const theme = useTheme();

  return (
  // <div className={classes.sliderContainer}>

    <Carousel
      className={classes.carouselStyle}
      showThumbs={false}
      autoPlay
      showArrows
    >
      <div>
        <img src={OrderImage1} className={classes.img} />
      </div>
      <div>
        <img src={OrderImage2} className={classes.img} />
      </div>
      <div>
        <img src={OrderImage3} className={classes.img} />
      </div>
      <div>
        <img src={OrderImage4} className={classes.img} />
      </div>
    </Carousel>
    // </div>
  );
}

export default CarouselEffect;
