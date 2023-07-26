import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { Categories } from './components/Categories';
import { Footer } from './components/Footer';
import './App.css'



function App() {
  const customGreeting = "Hello there! Welcome to Classya Store.";
  return (
    <>
      <Header />
      <NavBar />
      <ItemListContainer greetingMessage={customGreeting} />
      <Categories />
      <Footer />
    </>
  );
};

export default App
