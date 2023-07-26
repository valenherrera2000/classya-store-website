import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import StoreDetails from './components/StoreDetails';
import Categories from './components/Categories';
import BottomDetails from './components/BottomDetails';
import Footer from './components/Footer';
import './App.css'




function App() {
  const customGreeting = "Hello there! Welcome to Classya Store.";
  return (
    <>
      <header>
        <Header />
        <ItemListContainer greetingMessage={customGreeting} />
        <StoreDetails />
        <NavBar />
      </header>
      <main >
        <Categories />
        <BottomDetails />
      </main >
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App
