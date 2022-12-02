import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { Header, ProductList, SingleProduct } from './components';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/product/:productId' element={<SingleProduct />} />
        {/* <Route path='*' element={<>404 Not Found!</>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
