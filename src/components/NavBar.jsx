import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../stylesheet/navbar.css';

const NavBar = ({ currentPage }) => {
  return (
    <nav className="navbar navbar-expand-lg background">
      <div className="container-fluid">
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className={currentPage === '/' ? 'nav-link active-self' : 'nav-link'} href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className={currentPage === '/projects' ? 'nav-link active-self' : 'nav-link'} href="/projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className={currentPage === '/aboutme' ? 'nav-link active-self' : 'nav-link'} href="/aboutme">About Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    
  );

  
};



export default NavBar;