import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Page/Login';
import Header from './component/Header';
import Register from './Page/Register';
import reportWebVitals from './reportWebVitals';
import RegisterSuccess from './Page/RegisterSuccess';
import RegisS from './Page/RegisS';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RegisS/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
