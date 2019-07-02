import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';

import MoDal from '../components/Modal';

const useStyles = makeStyles (theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create ('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  discount: {
    backgroundColor: red[500],
    position: 'absolute',
    right: '0',
  },
  card:{
      position:'fixed',
      right:0,
      top:"45%",
      width:"80px",
      height:'40px'
  }
}));

export default function CartWrapper({data}) {
  const classes = useStyles ();
  const [expanded, setExpanded] = useState (false);
  const [open, setOpen] = useState (false);
  const [modalData, setModalData] = useState (data);


  function closeModal () {
    console.log ('Here clicked');
    setOpen (false);
  }


  return (
    <Card className={classes.card}>
      <div className="discount"><span>{data.discount}</span></div>
      <CardHeader
        avatar={
         <IconButton>ShoppingCartIcon</IconButton>
        }
        title={data.name}
        subheader={data.date}
      />      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        </Typography>
        <MoDal open={open} closeModal={closeModal} data={modalData} />
      </CardContent>
    </Card>
  );
}
