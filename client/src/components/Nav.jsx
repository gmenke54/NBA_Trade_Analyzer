import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navBar">
      <Link to="/" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Copperplate, Papyrus, fantasy' }}>Home</Link>
      <Link to="/about" style={{ textDecoration: 'none', color: 'white', fontFamily: 'Copperplate, Papyrus, fantasy' }}>About</Link>
    </nav>
  );
}

export default Nav;