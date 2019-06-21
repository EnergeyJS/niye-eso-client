import React from 'react';
import Navbar from '../components/NavBar';
import Card from '../components/Card';
export default function home () {
  return (
    <div>
      <Navbar />
      <div className="margin">
      <div class="row">
        <div class="col s12 m6 6"><Card/></div>
        <div class="col s12 m6 l2"><Card/></div>
        <div class="col s12 m6 l8"><Card/></div>
        <div class="col s12 m6 28"><Card/></div>
      </div>
      <br/>
      <div class="row">
      <div class="col s12 m4 6"><Card/></div>
        <div class="col s12 m4 l2"><Card/></div>
        <div class="col s12 m4 l8"><Card/></div>
        <div class="col s12 m4 24"><Card/></div>
      </div>

      </div>
    </div>
  );
}
