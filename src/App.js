import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';
import Counter from './views/Counter';
import { TextBox }from './components/TextBox';
import Counter2 from './views/Counter2';


const App = () => (
  <Provider store={store}>
    <Router>
        <div>
          <Route path="/" exact component={Counter} />
          <Route path="/counter2" exact component={Counter2} />
          <Route path="/text/" component={TextBox} />
        </div>
      </Router>
  </Provider>
);





export default App;