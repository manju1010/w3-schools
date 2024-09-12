import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Learn to code</h1>
        <p>with the world's largest web developer site</p>
        <input type="search" placeholder="Search our tutorials, e.g., HTML" />
      </header>
      <nav>
        <ul>
          <li><Link to="/html">HTML</Link></li>
          <li><Link to="/css">CSS</Link></li>
          <li><Link to="/javascript">JavaScript</Link></li>
          <li><Link to="/python">Python</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
