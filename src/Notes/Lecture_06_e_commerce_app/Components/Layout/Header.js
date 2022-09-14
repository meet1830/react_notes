import React from "react";
import Alert from "../UI/Alert";
import './Header.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Alert alert={`Free shipping above ₹499 | Shop Now`} />

      {/* NAVIGATION BAR */}
      <div className="navigation-bar">
        <Router>
          <div className="navigation-container">
            <div className="navigation-brand">
              <Link to="/">HOME</Link>
            </div>
            <div className="navigation-list">
              <Link to="/plants">PLANTS</Link>
              <Link to="/seeds">SEEDS</Link>
              <Link to="/gifting">GIFTING</Link>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default Header;
