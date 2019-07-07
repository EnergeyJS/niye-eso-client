import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartTwoTone";
import Paper from "@material-ui/core/Paper";
import CartList from "./CartList";

const useStyles = makeStyles(theme => ({
  root: {
    right: "-13px",
    position: "fixed",
    top: "64px",
    bottom: 0
  },
  paper: {
    textAlign: "center",
    backgroundColor: "transparent",
    border: 0,
    boxShadow: "none",
    position: "fixed",
    right: "0",
    top: "50%",
    transform: "translateY(-50%)"
  },
  cartIcon: {
    color: theme.palette.primary.main,
    fontSize: "100px"
  },
  cartContainer: {
    height: "100%",
    transition: "all 300ms",
    position: "fixed",
    right: "0",
    "z-index": 4
  }
}));

export default function CartWrapper({ setClass, unSetClass }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
    unSetClass();
  }

  function openModal() {
    setOpen(true);
    setClass();
  }

  return (
    <div className={classes.root}>
      {!open && (
        <Paper
          className={classes.paper}
          onClick={openModal}
          style={{ cursor: "pointer" }}
        >
          {" "}
          <ShoppingCartIcon color={"primary"} className={classes.cartIcon} />
        </Paper>
      )}
      {open && (
        <div className={classes.cartContainer}>
          <button onClick={closeModal}>Close</button>
          <CartList />
        </div>
      )}
    </div>
  );
}
