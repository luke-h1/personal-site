import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FiDroplet } from 'react-icons/fi';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import './Navbar.css';
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);
  return (
    <Fragment>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link
              to="/"
              className="navbar-logo"
              onClick={closeMobileMenu}
              onBlur={closeMobileMenu}
            >
              <FiDroplet className="navbar-icon" />
              <p className="lead">Luke Howsam</p>
            </Link>
            <div
              className="menu-icon"
              onClick={handleClick}
              onBlur={handleClick}
            >
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  onBlur={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="projects"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  onBlur={closeMobileMenu}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  onBlur={closeMobileMenu}
                >
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </Fragment>
  );
}
export default Navbar;