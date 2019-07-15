/* eslint-disable*/
import React,{useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';
import Home from './views/Home';
import Products from './views/Products';
import signin from './views/auth/signin'
import MTStyle from './modules/index';


import AppBar from "./components/menu/AppBar";
import Cart from "./components/cart/CartWrapper";

const App = () => {
  const [widthClass, setWidthClass] = useState(null);
  const classes = MTStyle();

  function setClass() {
    setWidthClass("adjustWidht");
  }

  function unSetClass() {
    setWidthClass(null);
  }

  return (
    <Provider store={store}>
      <Router>
        <div className={classes.root}>
          <AppBar />
          <Cart setClass={setClass} unSetClass={unSetClass} />
          <main className={classes.content}>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Products} />
            <Route path="/signin" exact component={signin} />
          </main>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
