import React from 'react';
import { Link } from 'react-router-dom';
import SearchSuggestions from './SearchSuggestions';

function Nav(props) {
  return (
    <nav className="navBar">
      <Link to="/" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Copperplate, Papyrus, fantasy' }}>Home</Link>
      <Link to="/about" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Copperplate, Papyrus, fantasy' }}>About</Link>
      <SearchSuggestions {...props} />
    </nav>
  );
}

export default Nav;