import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';

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
  icon:{
    background:'#2196f3',
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    
  }
}));

export default function RecipeReviewCard({data}) {
  const classes = useStyles ();
  const [expanded, setExpanded] = useState (false);
  const [open, setOpen] = useState (false);
  const [modalData, setModalData] = useState (data);

  function handleExpandClick () {
    setExpanded (!expanded);
  }

  function closeModal () {
    console.log ('Here clicked');
    setOpen (false);
  }

  function openModal (modalData) {
    console.log ('Open modal');
    setOpen (true);
    setModalData (modalData);
  }

  return (
    <Card className={classes.card}>
      <div className="discount"><span>{data.discount}</span></div>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={data.name}
        subheader={data.date}
      />
      <CardMedia
        className={classes.media}
        image="https://i.ibb.co/chT1Fjk/Guitar-PNG-Image-500x556.png"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.description}
        </Typography>
        <hr />
        <MoDal open={open} closeModal={closeModal} data={modalData} />
      </CardContent>
      <Typography align="center">
        <Button
          onClick={() => openModal (data)}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Show Details
        </Button>
      </Typography>

      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites" className={classes.icon}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share" className={classes.icon}>
          <ShareIcon />
        </IconButton>
        <IconButton
         className={classes.icon}>
          <ShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}
