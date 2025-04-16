import React, { JSX } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './pages/Product/Product';
import Dashboard from './pages/Dashboard/Dashboard';

function App(): JSX.Element {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/Product/:id" element={<Product books={[]}/>} />
      </Routes>
    </Router>


  )
}

export default App;
