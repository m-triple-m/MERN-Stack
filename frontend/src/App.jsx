import React from 'react';
import './App.css';
import MyRoutes from './routes';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <div className='flex gap-4'>
          <Link className='text-sky-700 underline' to="/">Home</Link>
          <Link className='text-sky-700 underline' to="/signup">Signup</Link>
          <Link className='text-sky-700 underline' to="/login">Login</Link>
        </div>
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