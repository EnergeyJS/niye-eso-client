import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
const useStyles = makeStyles (theme => ({
  cartContainer: {
    position: 'relative',
  },
  cart: {
    position: 'absolute',
    width: '400px',
    top: '45vh',
    right: '0',
  },
}));

export default function SimpleModal({open = false, closeModal, data = {}}) {
  const classes = useStyles ();
  return (
        <Card>
          { open && <CardContent>
            <button onClick={closeModal}>Close</button>
            Hi there
          </CardContent>
          }
        </Card>
  );
}
