/* eslint-disable*/
import React from "react";
import { useSelector } from 'react-redux';
import Card from "../components/dataDisplay/Card";
import { data } from "../services/data";

export default function home() {
  const data = useSelector(state => state);
  const body = data;
  return (
    <div>
        <div>This is above the card</div>
        {body.map((item, index)=> <Card key={index} data={item}/>)}
    </div>
  );
}
