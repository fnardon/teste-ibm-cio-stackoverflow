import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

import Login from './pages/login';

import Routes from './Routes';

import './App.css';

function App() {

  const [user, setUser] = useState(
    {
    id: 1,
     name: 'Fabio',
      avatar: ''
    });

  if (user === null) {
    return (
      <Login />
    );

  }

  return (
    <BrowserRouter>
      <Header />

      <Routes />

      <Footer />
    </BrowserRouter>
  )

}

export default App;
