import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import { Typography } from '@material-ui/core';
import './index.css';
import App from './App';
import theme from './components/styles/theme';
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';

ReactDOM.render(
<MuiThemeProvider theme={theme}>
        <App/>
</MuiThemeProvider>, document.getElementById('root'));

