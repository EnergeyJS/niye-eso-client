/* eslint-disable*/
import React,{useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, compose } from 'redux';
import Home from './views/Home/Home';
import Products from './views/products/Products';
import signin from './views/auth/signin/signin';
import signup from './views/auth/signUp/signup';
import MTStyle from './modules/index';
import Offers from './views/OfferProduct/index';


import AppBar from './components/menu/AppBar';
import Cart from './components/cart/CartWrapper';

import rootReducer from '../src/store/reducers'

const store = createStore(
  rootReducer,
  compose(
    // eslint-disable-next-line no-undef
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  ),
  );

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
          <Cart setClass={setClass} unSetClass={unSetClass}/>
          <main className={classes.content}>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Products} />
            <Route path="/signin" exact component={signin} />
            <Route path="/signup" exact component={signup} />
            <Route path="/offers" exact component={Offers} />
          </main>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
