import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-raleway';
import { createMuiTheme } from '@material-ui/core/styles'
import Ventures from './MentorView/Ventures';
//import MentorFillOutProfile from './MentorView/MentorFillOutProfile'
//import MentorProfile from './MentorView/MentorProfile'
//import MentorLanding from './MentorView/MentorLanding';
//import ManagerLanding from './ManagerView/ManagerLanding'
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'react-bootstrap';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Raleway',
      'sans-serif',
    ].join(','),
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Ventures/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
