import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';
import Counter from './views/Counter';
import {TextBox} from './components/TextBox';
import Counter2 from './views/Counter2';
import Card from './components/Card';
import Home from './views/Home';
import MTStyle from './modules/index';

import AppBar from './components/menu/appBar';

const App = () => {
  const classes = MTStyle ();
  return (
    <Provider store={store}>
      <Router>
        <div className={classes.root}>
          <AppBar />
          <main className={classes.content}>
            <Route path="/" exact component={Home} />
            <Route path="/counter" exact component={Counter} />
            <Route path="/counter2" exact component={Counter2} />
            <Route path="/text/" component={TextBox} />
            <Route path="/card" component={Card} />
          </main>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
