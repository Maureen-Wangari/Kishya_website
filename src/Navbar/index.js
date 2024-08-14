import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState('Home');
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleNavigationClick = (navItem) => {
    setActiveNavItem(navItem);
    setIsMenuVisible(false);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/imgNavbarLoom/ChicasLogo.png" alt="" />
      </div>
      {!isMobileScreen && (
        <nav>
          <div className="navigations">
            <Link
              to="/home"
              className={`nav-item ${activeNavItem === 'Home' ? 'active' : ''} pointer`}
              onClick={() => handleNavigationClick('Home')}
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className={`nav-item ${activeNavItem === 'Portfolio' ? 'active' : ''} pointer`}
              onClick={() => handleNavigationClick('Portfolio')}
            >
              Portfolio
            </Link>
            <Link
              to="/loom"
              className={`nav-item ${activeNavItem === 'Loom' ? 'active' : ''} pointer`}
              onClick={() => handleNavigationClick('Loom')}
            >
              Loom
            </Link>
            <Link
              to="/podcast"
              className={`nav-item ${activeNavItem === 'Podcast' ? 'active' : ''} pointer`}
              onClick={() => handleNavigationClick('Podcast')}
            >
              Podcast
            </Link>
            <Link
              to="/blogs"
              className={`nav-item ${activeNavItem === 'Blogs' ? 'active' : ''} pointer`}
              onClick={() => handleNavigationClick('Blogs')}
            >
              Blogs
            </Link>
          </div>
        </nav>
      )}
      {isMobileScreen && (
        <div className="hamburger-icon" onClick={toggleMenu}>
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
      {isMobileScreen && isMenuVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={toggleMenu}>
              &times;
            </span>
            <ul>
              <li>
                <Link
                  to="/"
                  className={`nav-item ${activeNavItem === 'Home' ? 'active' : ''} pointer`}
                  onClick={() => handleNavigationClick('Home')}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className={`nav-item ${activeNavItem === 'Portfolio' ? 'active' : ''} pointer`}
                  onClick={() => handleNavigationClick('Portfolio')}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/loom"
                  className={`nav-item ${activeNavItem === 'Loom' ? 'active' : ''} pointer`}
                  onClick={() => handleNavigationClick('Loom')}
                >
                  Loom
                </Link>
              </li>
              <li>
                <Link
                  to="/podcast"
                  className={`nav-item ${activeNavItem === 'Podcast' ? 'active' : ''} pointer`}
                  onClick={() => handleNavigationClick('Podcast')}
                >
                  Podcast
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className={`nav-item ${activeNavItem === 'Blogs' ? 'active' : ''} pointer`}
                  onClick={() => handleNavigationClick('Blogs')}
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;