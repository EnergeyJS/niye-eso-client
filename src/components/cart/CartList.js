import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Grid, ButtonGroup } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    right: "14px",
    position: "relative",
    width: "300px",
    height: "100%",
    zIndex: 4
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function SimpleModal({ open = false, closeModal }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <div style={{ float: "left", paddingTop: "10px" }}>
          <img
            src="https://user-images.githubusercontent.com/18731391/60767134-f7a7f000-a0d4-11e9-907d-8e02f9c3ed59.png"
            alt=""
          />
          <span style={{ marginLeft: "5px", color: "#695d5d" }}>0 Items</span>
        </div>
        <Button
          variant="contained"
          className={classes.button}
          onClick={closeModal}
          style={{ float: "right" }}
        >
          Close
        </Button>
      </div>
      <div />
      <div />
      <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          marginBottom: "5px"
        }}
      >
        <Button variant="contained" size="large" color="primary">Place Order</Button>
        <span style={{marginLeft: '28px'}}>$ 56</span>
      </div>
    </div>
  );
}
