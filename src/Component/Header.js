import React from "react";
import Logo from "../images/logo.png";
function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={Logo} className="nav-logo"></img>
        <ul className="nav-text">Weather Forecast</ul>
      </nav>
    </header>
  );
}

export default Header;