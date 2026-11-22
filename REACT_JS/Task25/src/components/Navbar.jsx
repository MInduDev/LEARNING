import React from "react";
function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="logo" aria-label="Shoe store home">
        <span className="logo-mark">♞</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#categories">Categories</a>
        <a href="#about">About Us</a>
      </div>
    </nav>
  );
}

export default Navbar;
