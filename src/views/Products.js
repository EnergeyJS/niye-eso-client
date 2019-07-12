import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from "../components/dataDisplay/Card";
import BreadCrumbNav from "../components/menu/BreadCrumbNav/BreadCrumbNav";
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles (() => ({
  cover:{
    display:'block',
    position:'relative',
    boxShadow:'none',
  },
  coverPhotoWrapper:{
    display:'flex',
    alignItems:'center'
  },
  coverPhoto:{
    width:'20vw',
    height:'auto',
    margin:'auto'
  },
  coverTxt:{
    left: '35vw',
    bottom: '-1vh',
    position: 'absolute',
    background: 'white',
    padding: '0 5vw',
  }
}));
export default function Products() {
  const classes = useStyles();
  const body = [
    {
      name: "Onion",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "5kg",
      discount: "5%",
      stock: "300kg",
      reviews: "4.5",
      date: "17 June 2019"
    },
    {
      name: "Oil",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "1kg",
      discount: "30%",
      stock: "200kg",
      reviews: "4.9",
      date: "17 June 2019"
    },
    {
      name: "Sugar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "2kg",
      discount: "20%",
      stock: "500kg",
      reviews: "4.8",
      date: "17 June 2019"
    },
    {
      name: "Sugar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "2kg",
      discount: "20%",
      stock: "500kg",
      reviews: "4.8",
      date: "17 June 2019"
    },
    {
      name: "Sugar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "2kg",
      discount: "20%",
      stock: "500kg",
      reviews: "4.8",
      date: "17 June 2019"
    },
    {
      name: "Sugar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "2kg",
      discount: "20%",
      stock: "500kg",
      reviews: "4.8",
      date: "17 June 2019"
    },
    {
      name: "Sugar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "2kg",
      discount: "20%",
      stock: "500kg",
      reviews: "4.8",
      date: "17 June 2019"
    },
    {
      name: "Sugar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "2kg",
      discount: "20%",
      stock: "500kg",
      reviews: "4.8",
      date: "17 June 2019"
    },
    {
      name: "Sugar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "2kg",
      discount: "20%",
      stock: "500kg",
      reviews: "4.8",
      date: "17 June 2019"
    },
    {
      name: "Sugar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "2kg",
      discount: "20%",
      stock: "500kg",
      reviews: "4.8",
      date: "17 June 2019"
    },
    {
      name: "Sugar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "2kg",
      discount: "20%",
      stock: "500kg",
      reviews: "4.8",
      date: "17 June 2019"
    },
    {
      name: "Sugar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "2kg",
      discount: "20%",
      stock: "500kg",
      reviews: "4.8",
      date: "17 June 2019"
    },
    {
      name: "Sugar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "2kg",
      discount: "20%",
      stock: "500kg",
      reviews: "4.8",
      date: "17 June 2019"
    },
    {
      name: "Sugar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "2kg",
      discount: "20%",
      stock: "500kg",
      reviews: "4.8",
      date: "17 June 2019"
    },
    {
      name: "Sugar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "2kg",
      discount: "20%",
      stock: "500kg",
      reviews: "4.8",
      date: "17 June 2019"
    },
    {
      name: "Sugar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "2kg",
      discount: "20%",
      stock: "500kg",
      reviews: "4.8",
      date: "17 June 2019"
    },
    {
      name: "Sugar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "2kg",
      discount: "20%",
      stock: "500kg",
      reviews: "4.8",
      date: "17 June 2019"
    },
    {
      name: "Sugar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "2kg",
      discount: "20%",
      stock: "500kg",
      reviews: "4.8",
      date: "17 June 2019"
    },
    {
      name: "Sugar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "2kg",
      discount: "20%",
      stock: "500kg",
      reviews: "4.8",
      date: "17 June 2019"
    },
    {
      name: "Sugar",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "2kg",
      discount: "20%",
      stock: "500kg",
      reviews: "4.8",
      date: "17 June 2019"
    }
  ];

  return (
    <div>
      <Paper className={classes.cover}>
        <div className={classes.coverPhotoWrapper}>
          <img src='https://i.ibb.co/chT1Fjk/Guitar-PNG-Image-500x556.png' alt="Cover " className={classes.coverPhoto}/>
        </div>
        <hr/>
        <div className={classes.coverTxt}>          
        Test 
        </div>  
      </Paper>
      <BreadCrumbNav />
      {body.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
}
