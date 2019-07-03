import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';
import Counter from './views/Counter';
import Home from './views/Home';
import MTStyle from './modules/index';

import AppBar from './components/menu/appBar';
import { messaging } from "./init-fcm";

const App = () => {
  messaging.requestPermission()
    .then(async function() {
      const token = await messaging.getToken();
      console.log(token);
    })
    .catch(function(err) {
      console.log("Unable to get permission to notify.", err);
    });
  navigator.serviceWorker.addEventListener("message", (message) => console.log(message));
  const classes = MTStyle ();
  return (
    <Provider store={store}>
      <Router>
        <div className={classes.root}>
          <AppBar />
          <main className={classes.content}>
            <Route path="/" exact component={Home} />
            <Route path="/counter" exact component={Counter} />
          </main>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
