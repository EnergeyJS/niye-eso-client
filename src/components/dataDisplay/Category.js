import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    border: '1px solid #d4d4d4',
    margin: '.5%',
    padding: '15px 10px 15px 15px',
    cursor: 'pointer',
  },
}));

export default function Offers({ data }) {
  const classes = useStyles();

  return (
      <div className={classes.root}>
          <div style={{ width: '80%', textAlign: 'center' }}>
              <span style={{ fontSize: '15px', fontWeight: '400' }}>{data.name}</span></div>
          <div style={{ width: '20%', textAlign: 'center' }}>
              <span style={{ marginLeft: '0px' }} >{data.reviews}</span></div>
      </div>
  );
}
