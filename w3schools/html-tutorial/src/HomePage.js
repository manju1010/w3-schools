import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faMagicWandSparkles } from "@fortawesome/free-solid-svg-icons";
import { faCode, faCartShopping } from "@fortawesome/free-solid-svg-icons"; 
import "./HomePage.css";

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={`home-page ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <header className="home-header">
        <div className="header-left">
          <Link to="/">
            <div className="w3-school-logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/W3Schools_logo.svg"
                alt="W3Schools Logo"
              />
            </div>
          </Link>

          <Link to="/tutorial" className="tutorial-link">
            <span>Tutorial</span>
            <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
          </Link>
          <Link to="/exercise" className="exercise-link">
            <span>Exercise</span>
            <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
          </Link>
          <Link to="/certificates" className="certificates-link">
            <span>Certificates</span>
            <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
          </Link>
          <Link to="/services" className="service-link">
            <span>Services</span>
            <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
          </Link>

          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              aria-label="Search"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          </div>

          <div className="toggle-dark-light" onClick={toggleDarkMode}>
            <FontAwesomeIcon icon={faCircleHalfStroke} />
          </div>
        </div>

        <div className="header-right">
          <Link to="/plus" className="plus-link btn"> 
            <div className="plus">
              <FontAwesomeIcon icon={faMagicWandSparkles} />
              Plus
            </div>
          </Link>

          <Link to="/code" className="code-link btn"> 
            <div className="code">
              <FontAwesomeIcon icon={faCode} />
              Code
            </div>
          </Link>

          <Link to="/cart" className="cart-link btn"> 
            <div className="cart">
              <FontAwesomeIcon icon={faCartShopping} />
              Cart
            </div>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
