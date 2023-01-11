import React from 'react';
import Home from './pages/Home.jsx'; // jsx olarak yazmassak çalışmıyor.
import Auth from './pages/Auth.jsx'; // jsx olarak yazmassak çalışmıyor.
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
