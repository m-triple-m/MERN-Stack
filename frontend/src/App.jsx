import React from 'react';
import './App.css';
import MyRoutes from './routes';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <MyRoutes />
      </Router>
    </div >
  )
}

export default App;

// camelCase
// snake_case
// kebab-case
// PascalCase