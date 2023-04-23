import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

const MyNavBarComponent = () => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const [activeMenuHouse, setActiveMenuHouse] = useState<boolean>(false);
  const [activeMenuAddress, setActiveMenuAddress] = useState<boolean>(false);

  const handleMenuHouse = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      setActiveMenuHouse(!activeMenuHouse);
    },
    [activeMenuHouse, setActiveMenuHouse],
  );

  const handleMenuAddress = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      setActiveMenuAddress(!activeMenuAddress);
    },
    [activeMenuAddress, setActiveMenuAddress],
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid" style={{ fontSize: '1.2rem' }}>
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
              <Link className="nav-link active" to="/add-house">
                House App
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                to="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={handleMenuHouse}
              >
                House
              </Link>
              <div
                className={
                  activeMenuHouse ? 'dropdown-menu show' : 'dropdown-menu'
                }
              >
                <a className="dropdown-item" href="/add-house">
                  Create house
                </a>
                <a className="dropdown-item" href="/list-houses">
                  See registered houses
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                to="*"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={handleMenuAddress}
              >
                Address
              </Link>
              <div
                className={
                  activeMenuAddress ? 'dropdown-menu show' : 'dropdown-menu'
                }
              >
                <a className="dropdown-item" href="/add-address">
                  Create address
                </a>
                <a className="dropdown-item" href="/list-address">
                  See registered addresses
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
