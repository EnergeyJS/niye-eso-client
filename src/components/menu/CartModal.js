import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


function getModalStyle () {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles (theme => ({
  cartContainer:{
    position:'relative'
  },
  cart:{
    position:'absolute',
    width:'400px',
    top:'45vh',
    right:'0'
  }
}));

export default function SimpleModal({open = false, closeModal, data = {}}) {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState (getModalStyle);

  const [values, setValues] = useState ({
    age: '',
    name: 'hai',
  });

  function handleChange (event) {
    setValues (oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  const classes = useStyles ();
  let classModal = classes.paper;
  return (
    <div>
      <div >
        <h1>HERe</h1>
      </div>
    </div>
  );
}
