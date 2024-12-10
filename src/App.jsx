import React, { useEffect, useState } from 'react';
import './App.css'; // Importing the CSS for styles
import Navbar from './components/Navbar';
import Button from './components/Button';
import MemeContainer from './components/MemeContainer';
import { ToastContainer } from 'react-toastify';
import MainScreen from './components/MainScreen';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';

function App() {

  
  return (
    <>
    <MainScreen/>
    <ToastContainer/>
    <Footer/>
    </>

  );
}

export default App;