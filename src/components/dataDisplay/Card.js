import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
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
import Details from '@material-ui/icons/Details';
import ShareIcon from '@material-ui/icons/Share';
import Comparisson from '@material-ui/icons/CompassCalibration';
import Button from '@material-ui/core/Button';

import MoDal from './Modal';

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
    background:theme.palette.primary.main,
    //transform: 'rotate(0deg)',
    margin: '0 5px',
    float:'left',
    background: 'linear-gradient(to left,'+ theme.palette.primary.main+' 50%, #2196f3 50%)',
    backgroundSize: '200% 100%',
    backgroundPosition:'right bottom',
    transition:'all 1s ease',
    '&:hover':{
      backgroundPosition:'left bottom',
    }
  }
}));

export default function RecipeReviewCard({data}) {
  const classes = useStyles ();
  const [open, setOpen] = useState (false);
  const [modalData, setModalData] = useState (data);


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
      </Typography>

      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites" className={classes.icon}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share" className={classes.icon}>
          <Comparisson />
        </IconButton>
        <IconButton
          onClick={() => openModal (data)}
          className={classes.icon} style={{
          marginLeft: 'auto'}}>
          <Details />
        </IconButton>
      </CardActions>
    </Card>
  );
}
