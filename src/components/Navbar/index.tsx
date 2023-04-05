import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyNavBarComponent = () => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={
            activeMenu
              ? 'collapse navbar-collapse show'
              : 'collapse navbar-collapse'
          }
          id="navbarColor01"
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                House
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Address
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                href="https://github.com/ArthurPdaSilva"
                rel="noreferrer"
              >
                About me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavBarComponent;
