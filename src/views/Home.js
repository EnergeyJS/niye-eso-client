/* eslint-disable*/
import React from "react";
import { useSelector } from 'react-redux';
import Card from "../components/dataDisplay/Card";
import _ from 'lodash'
export default function home() {
  const { list } = useSelector(state => state.dummyData);
  return (
    <div>
        <div>This is above the card</div>
        {list.map((item, index)=> <Card key={index} data={item}/>)}
    </div>
  );
}
