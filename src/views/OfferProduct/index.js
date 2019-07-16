import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Increase from '@material-ui/icons/KeyboardArrowUp';
import OfferProduct from './OfferProduct';

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

export default function Offers() {
  const classes = useStyles();

  return (
        <div className={classes.root}>
            <div style={{ marginBottom: '20px' }}>
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Filtered By Category</span>
                <span style={{
                  border: '1px solid', borderRadius: '100%', borderColor: 'black', marginLeft: '10px',
                }}
                >
                    <Increase style={{
                      color: 'black', pointer: 'cursor',
                    }}
                    />

                </span>
            </div>

            <div>
                <Grid container fixed spacing={2}>

                    <Grid item xs={10} container direction="colum" spacing={2}>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                                <div>
                                    <span>Flash Sales</span>
                                    <span>(5)</span>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                                <div>
                                    <span>Baby care</span>
                                    <span>(3)</span>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                                <div>
                                    <span>Food</span>
                                    <span>(5)</span>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                                <div>
                                    <span>Vegetable</span>
                                    <span>(5)</span>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                                <div>
                                    <span>Flash Sales</span>
                                    <span>(5)</span>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <hr></hr>

            <div>

                <OfferProduct />


            </div>

        </div>
  );
}
