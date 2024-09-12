import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"; 
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
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
<Link to="/Excercise" className="Excercise-link">
  <span>Excercise</span>
  <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
</Link>
<Link to="/Certificates" className="Certificates-link">
  <span>Certificates</span>
  <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
</Link>
<Link to="/services" className="service-link">
  <span>Services</span>
  <FontAwesomeIcon icon={faCaretDown} className="dropdown-icon" />
</Link>

<input type="text" placeholder="Search..." className="search-input" /> 

        </div>
      </header>
    </div>
  );
};

export default HomePage;
