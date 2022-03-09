import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Greeting from './components/Greeting';
import store from './redux/configureStore';
import { getMessage } from './redux/greetings/greetings';

store.dispatch(getMessage());

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" component={<Greeting />} />
      <Route path="/greeting" component={<Greeting />} />
    </Routes>
  </BrowserRouter>
);

export default App;
