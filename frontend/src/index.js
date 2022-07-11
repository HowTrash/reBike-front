import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Register from "./Page/Register";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Register />
  </React.StrictMode>
);