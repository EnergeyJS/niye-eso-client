import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    right: "14px",
    position: "relative",
    width: "300px",
    backgroundColor: "#eceff3",
    height: "100%"
  }
}));

export default function SimpleModal({ open = false, closeModal }) {
  const classes = useStyles();
  return <div className={classes.root}>Here</div>;
}
