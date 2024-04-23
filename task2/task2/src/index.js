import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Login from './Login';
// import Signup from './Signup';

import reportWebVitals from './reportWebVitals';
// import Netdemo from './Netdemo';
// import Netflix from './Netflix';
// import App1 from './App1';
import Nflip from './Nflip';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nflip />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
