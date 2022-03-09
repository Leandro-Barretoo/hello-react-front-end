import React from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" component={<Greeting />} />
      <Route path="/greeting" component={<Greeting />} />
    </Routes>
  </BrowserRouter>
);

export default App;
