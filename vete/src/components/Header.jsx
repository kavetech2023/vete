import React from 'react';
import { FaWallet, FaBell, FaUser } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="header-content container">
        <div className="logo">
          <h1>Stake</h1>
        </div>
        <nav className="nav-links">
          <button className="btn btn-outline">
            <FaWallet /> $0.00
          </button>
          <button className="btn btn-outline">
            <FaBell />
          </button>
          <button className="btn btn-primary">
            <FaUser /> Sign In
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;