import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ExpandCartTable from '../dataDisplay/Table'
const useStyles = makeStyles (theme => ({
  root:{
    right:'14px',
    position:'relative'
  },
  close:{
    top: '0',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText ,
    right: '3px',
    position: 'absolute',
    fontSize: '10px',
    fontWeight: '900',
    display: 'block',
    borderRadius: '50%',
    borderColor:'#ff0000b8',
    textAlign: 'center',
    '&:hover':{
      //  boxShadow: '-1px 1px 7px 1px #007bff',
       'pointer':'mouse',
       backgroundColor: theme.palette.secondary.main,
    },
    '&:after':{
      content:'\'X\'',
    }
  }
}));

export default function SimpleModal({open = false, closeModal}) {
  const classes = useStyles ();
  return (
        <Card className={classes.root}>
          { open && <CardContent>
            <button className={classes.close} onClick={closeModal}></button>
            <ExpandCartTable/>
          </CardContent>
          }
        </Card>
  );
}
