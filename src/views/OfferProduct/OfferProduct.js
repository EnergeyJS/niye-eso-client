/* eslint-disable*/
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from "../../components/dataDisplay/Card";
import OfferImage from '../../assests/images/offers.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '30px',
  },
  paper: {
    padding: theme.spacing(2),

    color: theme.palette.text.secondary,
  },
}));

export default function home() {
  const classes = useStyles();
  const body = [
    {
      name: "Onion",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "5kg",
      discount: "5%",
      stock: "300kg",
      reviews: "4.5",
      date: '17 June 2019'
    }
  ];

  return (
    <div className={classes.root}>
      <Grid container fixed s>
        <Grid item xs={6}>

          <Paper className={classes.paper}>
            {/* <div>
              <img src="https://i.ibb.co/chT1Fjk/Guitar-PNG-Image-500x556.png" height="100" width="200" />
            </div>

            <div>
              {body.map((item, index) => <Card key={index} data={item} />)}
            </div> */}

            <Grid item container direction="colum">
              <Grid item xs={6}>
                <div>
                  <img src={OfferImage} height="300" width="400"/>
                </div>
              </Grid>
              <Grid item xs={3} style={{marginLeft: '50px'}} >
                <div>
                  {body.map((item, index) => <Card key={index} data={item} />)}
                </div>
              </Grid>
            </Grid>
          </Paper>

        </Grid>
      </Grid>


    </div>
  );
}
