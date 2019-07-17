/* eslint-disable*/
import React from "react";
import OfferCard from "../../components/dataDisplay/OfferCard";
 
export default function home() {
 
  const body = [
    {
      name: "Onion",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "5kg",
      discount: "5%",
      stock: "300kg",
      reviews: "4.5",
      date: '17 June 2019'
    },
    {
      name: "Onion",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "5kg",
      discount: "5%",
      stock: "300kg",
      reviews: "4.5",
      date: '17 June 2019'
    },
    {
      name: "Onion",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      quantity: "5kg",
      discount: "5%",
      stock: "300kg",
      reviews: "4.5",
      date: '17 June 2019'
    }
  ];

  return (

    <div>
    {body.map((item, index) => <OfferCard key={index} data={item} />)}
  </div>
  );
}
