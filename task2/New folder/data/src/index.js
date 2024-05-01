import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Edit from './Edit';
import 'bootstrap/dist/css/bootstrap.css';
// import Api from './Api';
import Effect1 from './Effect1';
import FetchData from './FetchData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  //mounting

  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Effect1/>}/>
      <Route path="/Link" element={<FetchData/>}/>
     </Routes>
    </BrowserRouter>
  </React.StrictMode>

  // <React.StrictMode>
  //   <Effect1 />
  // </React.StrictMode>

);

//dummydata

//   <BrowserRouter>
//     <Routes>
//       {/* <Route path="/home" element={<Home/>} /> */}
//       <Route path="/" element={<App/>} />
//       {/* <Route path="/about" element={<About/>} /> */}
//       <Route path="/edit" element={<Edit/>} />
//       {/* <Route path="/view" element={<View/>} /> */}
    
//     </Routes>
//   </BrowserRouter>

//   // <App1/>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
