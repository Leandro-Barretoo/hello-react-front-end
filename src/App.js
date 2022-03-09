import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Greeting />} exact />
      <Route path="/greeting" element={<Greeting />} />
    </Routes>
  </BrowserRouter>
);

export default App;
