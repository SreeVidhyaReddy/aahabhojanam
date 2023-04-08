import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


import 'mdbootstrap/css/bootstrap.css';
import 'mdbootstrap/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);


