import React from 'react';
import { Link } from 'react-router-dom';
import SearchSuggestions from './SearchSuggestions';
import logo from '../bball.png'
import '../css/Nav.css'

function Nav(props) {
  return (
    <nav className="navBar">
      <a href="http://localhost:3000/">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <div className='linksBar'>
        <div>
          <SearchSuggestions {...props} />
        </div>
        <div className='link trade-link'>
          <Link to="/trade" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.87)', fontFamily: 'Teko, sans-serif', fontSize: '33px' }}>Trade</Link>
        </div>
        <div className='link'>
          <Link to="/about" style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.87)', fontFamily: 'Teko, sans-serif', fontSize: '33px' }}>About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;