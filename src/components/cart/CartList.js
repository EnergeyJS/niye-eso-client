import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Increase from "@material-ui/icons/KeyboardArrowUp";
import Decrease from "@material-ui/icons/KeyboardArrowDown";
import { IconButton } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    right: "14px",
    position: "relative",
    maxWidth: "500px",
  },
  gridRoot: {
    flexGrow: 1,
    boxShadow:'none'
  },
  item: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow:'none'
  },
  itemDescription: {
    padding: theme.spacing(1),
    textAlign: "left",
    boxShadow:'none',
  },
  close: {
    top: "0",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    right: "3px",
    position: "absolute",
    fontSize: "10px",
    fontWeight: "900",
    display: "block",
    borderRadius: "50%",
    borderColor: "#ff0000b8",
    textAlign: "center",
    "&:hover": {
      //  boxShadow: '-1px 1px 7px 1px #007bff',
      pointer: "mouse",
      backgroundColor: theme.palette.secondary.main
    },
    "&:after": {
      content: "'X'"
    },
    icon:{
      backgroundColor:theme.palette.primary.main
    }
  }
}));

export default function SimpleModal({ open = false, closeModal }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} >
      {open && (
        <CardContent >
          <button className={classes.close} onClick={closeModal} />
          <div className={classes.gridRoot}>
            <Grid container >
              <Grid item xs={1} style={{boxShadow:'none'}}>
                <Paper className={classes.item}>
                
          <Increase color='primary'/>
                 1
          <Decrease color='primary'/>
                 </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.item}>
                  <img
                    src="https://i.ibb.co/chT1Fjk/Guitar-PNG-Image-500x556.png"
                    style={{ width: "70px" }}
                  />
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.itemDescription}>Lorem Ipsum is simply dummy text</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.item}>3</Paper>
              </Grid>
              <Grid item xs={1}>
                <Paper className={classes.item}>
                  x
                </Paper>
              </Grid>
            </Grid>            
            <Grid container >
              <Grid item xs={1} style={{boxShadow:'none'}}>
                <Paper className={classes.item}>
                
          <Increase color='primary'/>
                 1
          <Decrease color='primary'/>
                 </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.item}>
                  <img
                    src="https://i.ibb.co/chT1Fjk/Guitar-PNG-Image-500x556.png"
                    style={{ width: "70px" }}
                  />
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.itemDescription}>Lorem Ipsum is simply dummy text</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.item}>3</Paper>
              </Grid>
              <Grid item xs={1}>
                <Paper className={classes.item}>
                  x
                </Paper>
              </Grid>
            </Grid>            
          </div>
        </CardContent>
      )}
    </Card>
  );
}
