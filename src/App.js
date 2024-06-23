import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Detail from './pages/Detail';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/detail/:id" element={<Detail />} />
  </Routes>
);

export default App;
