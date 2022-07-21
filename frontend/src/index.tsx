// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const root = ReactDOM.createRoot<HTMLElement>(document.getElementById("root"));
// root.render(<App />);
// console.log('Hello Typescript!!')

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
