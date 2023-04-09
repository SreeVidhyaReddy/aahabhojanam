import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Route, Router, Routes } from 'react-router-dom';

import './App.css';
import './index.css';
// import './login.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";

import React from 'react';

import MainIndex from "./components/MainIndex.js";
import Home from "./components/Home.js";
import MenuList from "./components/MenuList.js";
import Login from './components/Login';
import MenuItems from './components/MenuItems';
import Order from './components/Order';
import Table from './components/Table';


function App() {
  return (
   <React.Fragment>
     <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/mainindex' element={<MainIndex/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/table' element={<Table/>}/>
          <Route path='/menulist' element={<MenuList/>}/>          
        </Routes>
  
   {/* <Table/> */}
   </React.Fragment>
  );
}

export default App;