import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ProductDetails from './views/ProductDetails';
import Home from './views/Home';
import Products from './views/Products';
import Offers from './views/Offers';
import MTStyle from './modules/index';

import AppBar from './components/menu/AppBar';
import Cart from './components/cart/CartWrapper';

const App = () => {
  const [widthClass, setWidthClass] = useState(null);
  const classes = MTStyle();

  function setClass() {
    setWidthClass('adjustWidht');
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
            <div className={widthClass}>
              <Route path="/" exact component={Home} />
              <Route path="/detail" exact component={ProductDetails} />
              <Route path="/Products" exact component={Products} />
              <Route path="/Offers" exact component={Offers} />
            </div>
          </main>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
