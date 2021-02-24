import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-raleway';
import { createMuiTheme } from '@material-ui/core/styles'
//import Signin from './Shared/Signin'
//import Signup from './Shared/Signup'
//import Mentors from './ManagerView/Mentors'
//import Ventures from "./ManagerView/Ventures";
//import Ventures from './MentorView/Ventures';
//import MentorFillOutProfile from './MentorView/MentorFillOutProfile'
//import MentorProfile from './MentorView/MentorProfile'
//import MentorLanding from './MentorView/MentorLanding';
//import ManagerLanding from './ManagerView/ManagerLanding';
//import EcosystemProfile from './ManagerView/EcosystemProfile';
//import ManagerFillOutProfile from './ManagerView/ManagerFillOutProfile';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'react-bootstrap';
import ManagerLanding from './ManagerView/ManagerLanding';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Raleway',
      'sans-serif',
    ].join(','),
  },
});

theme.typography.h2={
  fontSize:'2rem',
  fontWeight: '300',
  fontStyle: 'italic',
  justifyContent: 'center',
  [theme.breakpoints.down('xs')]:{
      fontSize:'1.3rem'
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ManagerLanding/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
