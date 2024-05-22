import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search Problems" />
      </div>
      <div className="user-actions">
        <button>Account</button>
        <button>Menu</button>
      </div>
    </header>
  );
};

export default Header;