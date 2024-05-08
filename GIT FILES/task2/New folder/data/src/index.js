import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Edit from './Edit';
import 'bootstrap/dist/css/bootstrap.css';
// import Api from './Api';
// import Effect1 from './Effect1';
import FetchData from './FetchData';
// import Movies from './Movies';
// import Detail from './Detail';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { store } from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  //mounting

  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Effect1/>}/> */}
      <Route path="/fetchdata" element={<FetchData/>}/>
      {/* <Route path='/movies' element={<Movies/>}></Route>
    <Route path='/detail/:id' element={<Detail/>}></Route> */}
    <Route path='/counter' element={<Counter/>}></Route>
    
     </Routes> 
   </BrowserRouter>
   </Provider>
   </React.StrictMode>
 

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

 // <React.StrictMode>
  //   <Effect1 />
  // </React.StrictMode>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
