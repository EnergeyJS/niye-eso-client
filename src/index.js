/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';
import App from './App';
import theme from './components/styles/theme';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>, document.getElementById('root'),
);
