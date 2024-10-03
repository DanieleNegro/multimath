import React from 'react';
import './Navbar.css'

const Navabar: React.FC = () => {
  return (
    <nav className="bg-orange navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-header">
          <span className="navbar-brand">MultiMath</span>
        </div>
      </div>
    </nav>
  );
}

export default Navabar;
