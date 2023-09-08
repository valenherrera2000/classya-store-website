// App.jsx
import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import StoreDetails from './components/StoreDetails';
import Categories from './components/Categories';
import BottomDetails from './components/BottomDetails';
import Footer from './components/Footer';
import { ShoppingCartProvider } from './components/ShoppingContext';

import './css/App.css';

function App() {
  return (
    <ShoppingCartProvider>
      <header>
        <Header />
        <StoreDetails />
        <NavBar />
      </header>
      <main>
        <Categories />
        <BottomDetails />
      </main>
      <footer>
        <Footer />
      </footer>
    </ShoppingCartProvider>
  );
}

export default App;
