import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import './index.css';
// import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import React from 'react';

import MainIndex from "./components/MainIndex.js";
import Home from "./components/Home.js";
import MenuList from "./components/MenuList.js";
import Login from './components/Login';


function App() {
  return (
   <React.Fragment>
     <Home/>
   
   </React.Fragment>
  );
}

export default App;