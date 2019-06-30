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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
}));

export default function RecipeReviewCard ({data}) {
  const classes = useStyles ();
  const [expanded, setExpanded] = useState (false);
  const [open, setOpen] = useState (false);
  const [modalData, setModalData] = useState (data);

  function handleExpandClick () {
    setExpanded (!expanded);
  }

  function closeModal () {
    setOpen (!open);
  }

  function openModal(modalData) {
    setOpen (!open)
    setModalData(modalData)
  }

  return (
    <Card className={classes.card} onClick={() => openModal(data)}>
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

      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx (classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
