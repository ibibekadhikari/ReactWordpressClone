import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "../Header/Header";
import Showcase from "../Showcase/Showcase";
import Middle from "../Middle/Middle";
import Features from "../Features/Features";
import Lower from "../Lower/Lower";
import Footer from "../Footer/Footer";

function App() {
  return (
  <>
  <Header />
  <Showcase />
  <Middle />
  <Features />
  <Lower />
  <Footer />
  </>
  );
}

export default App;
