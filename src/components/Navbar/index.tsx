import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

const MyNavBarComponent = () => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const [activeMenuHouse, setActiveMenuHouse] = useState<boolean>(false);
  const [activeMenuAddress, setActiveMenuAddress] = useState<boolean>(false);

  const handleMenuHouse = useCallback(() => {
    setActiveMenuHouse(!activeMenuHouse);
  }, [activeMenuHouse, setActiveMenuHouse]);

  const handleMenuAddress = useCallback(() => {
    setActiveMenuAddress(!activeMenuAddress);
  }, [activeMenuAddress, setActiveMenuAddress]);

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
                House App
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                onMouseEnter={handleMenuHouse}
                onMouseOut={handleMenuHouse}
              >
                House
              </a>
              <div
                className={
                  activeMenuHouse ? 'dropdown-menu show' : 'dropdown-menu'
                }
              >
                <a className="dropdown-item" href="#">
                  See registered houses
                </a>
                <a className="dropdown-item" href="#">
                  Delete my house
                </a>
                <a className="dropdown-item" href="#">
                  Edit my house
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                onMouseEnter={handleMenuAddress}
                onMouseOut={handleMenuAddress}
              >
                Address
              </a>
              <div
                className={
                  activeMenuAddress ? 'dropdown-menu show' : 'dropdown-menu'
                }
              >
                <a className="dropdown-item" href="#">
                  See registered addresses
                </a>
                <a className="dropdown-item" href="#">
                  Delete my address
                </a>
                <a className="dropdown-item" href="#">
                  Edit my address
                </a>
              </div>
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