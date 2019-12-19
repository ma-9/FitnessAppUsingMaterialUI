import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange.A400,
      light: orange[300],
      dark: orange[900]
    },
    secondary: {
      main: '#323648' // Dodge Blue
    },
    type: 'dark'
  }
});

const rootElement = document.getElementById('root');
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  rootElement
);
