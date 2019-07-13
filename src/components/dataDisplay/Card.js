import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import ShoppingBag from '@material-ui/icons/ShoppingBasket';
import Button from '@material-ui/core/Button';
import MoDal from './Modal';

const useStyles = makeStyles (theme => ({
  card:{
    height:'42vh',
    width:'230px',
    margin:'1.8vw 2vw',
    textAlign:"center",
    '&:hover>.CardContentOverly':{
        display:'flex'
    }

  },
  media: {
    height: 0,
    width:'auto',
    paddingTop: '56.25%', // 16:9
  },
  discount: {
    backgroundColor: red[500],
    position: 'absolute',
    right: '0',
  },
  icon:{    
    background:theme.palette.primary.main,
    transform: 'rotate(0deg)',    
    margin: '0 5px',
    float:'left',
    background: 'linear-gradient(to left,'+ theme.palette.primary.main+' 50%, '+ theme.palette.secondary.light+' 50%)',
    backgroundSize: '200% 100%',
    backgroundPosition: 'right bottom',
    transition: 'all 1s ease',
    '&:hover': {
      backgroundPosition: 'left bottom',
    }
  },
  description:{
    height:'3vh',
    overflow:'hidden'
  },
  amount:{
    height:'2vh',
    margin:'2px 0',
    textAlign:'center'
  },
  price:{
    height:'2vh',
    margin:'2px 0',
    textAlign:'center'
  },
  CardActions:{
    display:'inline-block',
  },
  CardContentOverly:{
    position:'absolute',
    top:'0',
    left:'0',
    display:'none',
    background:theme.palette.primary.overlay,
    height:'inherit',
    width:'inherit'
  },
  CardContentOverlyText:{
    margin:'auto',
    lineHeight:'3',
    '&>button':{
      color:theme.palette.primary.contrastText,
      boxShadow: '1px 4px 6px black'
    }
  },
  buttonIcon:{
    margin: '0 5px 0 0',
    padding: '0 5px 0 0',
    display: 'block',
    borderRight: '1px dotted',
  }
}));

export default function RecipeReviewCard({ data }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(data);


  const closeModal= ()=> {
    console.log ('Here clicked');
    setOpen (false);
  }

  const openModal =(modalData)=> {
    console.log ('Open modal');
    setOpen (true);
    setModalData (modalData);
  }

  return (
    <Card className={classes.card}>
      <div className="discount"><span>{data.discount}</span></div>      
      <CardMedia
        className={classes.media}
        image="https://i.ibb.co/chT1Fjk/Guitar-PNG-Image-500x556.png"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
          {data.description}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.amount}>
          20ml
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.price}>
          200/-
        </Typography>
        <MoDal open={open} closeModal={closeModal} data={modalData} />
      </CardContent>
        <CardContent className={classes.CardContentOverly+' CardContentOverly'}>
        <Typography variant="body2" className={classes.CardContentOverlyText}>
        <IconButton aria-label="Details" className={classes.icon} 
        onClick={() => openModal (data)}>
          Details
        </IconButton>
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        {/* 
        <IconButton aria-label="Share" className={classes.icon}>
          <Comparisson />
        </IconButton> */}
        <Button          
          className={classes.icon}>
          <span className={classes.buttonIcon}><ShoppingBag /></span>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
