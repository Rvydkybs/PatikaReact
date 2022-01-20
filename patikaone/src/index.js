import React from 'react';
import ReactDOM from 'react-dom';
import myFonk from './homeWork';
 import './index.css';
 import App from './App';
 import reportWebVitals from './reportWebVitals';
 import myModules from './myModule';
 ReactDOM.render(
   <React.StrictMode>
     <App />
     <myModules/>
   </React.StrictMode>,
   document.getElementById('root')
 );

 reportWebVitals();
