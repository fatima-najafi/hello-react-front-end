// src/App.js
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Greeting from './components/greeting';
import Home from './components/home';

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/greeting">Greeting</Link>
            </li>
          </ul>
        </nav>
        <hr />

        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/greeting" element={<Greeting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
