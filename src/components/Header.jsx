import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const closeProductsDropdown = () => {
    setIsProductsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav-dropdown')) {
        setIsProductsDropdownOpen(false);
      }
    };

    if (isProductsDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isProductsDropdownOpen]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  // Scroll to top when clicking CTA if already on Contact page
  const handleCtaClick = (e) => {
    if (location.pathname === '/contact') {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  // Mobile CTA: same as above, plus close the menu
  const handleMobileCtaClick = (e) => {
    if (location.pathname === '/contact') {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo" onClick={handleLogoClick}>
            <span className="logo-text">Accelo</span>
            <span className="logo-accent">Edge</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            
            {/* Products Dropdown */}
            <div className="nav-dropdown" onMouseLeave={closeProductsDropdown}>
              <div className="dropdown-trigger-wrapper">
                <Link 
                  to="/products" 
                  className={`nav-link dropdown-main-link ${isActive('/products') || isActive('/ai-chatbot') || isActive('/ai-scheduler') ? 'active' : ''}`}
                >
                  Products
                </Link>
                <button 
                  className="dropdown-arrow-btn"
                  onMouseEnter={toggleProductsDropdown}
                  onClick={toggleProductsDropdown}
                  aria-label="Toggle products menu"
                >
                  <svg className={`dropdown-arrow ${isProductsDropdownOpen ? 'open' : ''}`} width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className={`dropdown-menu ${isProductsDropdownOpen ? 'open' : ''}`}>
                <Link to="/ai-chatbot" className="dropdown-item" onClick={closeProductsDropdown}>
                  dAIlogue
                </Link>
                <Link to="/ai-scheduler" className="dropdown-item" onClick={closeProductsDropdown}>
                  AI Scheduler
                </Link>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA Button */}
          <Link to="/contact" className="btn btn-primary header-cta" onClick={handleCtaClick}>
            Free Consultation
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`nav-mobile ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link-mobile ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          
          {/* Mobile Products Section */}
          <div className="mobile-dropdown">
            <Link 
              to="/products" 
              className={`nav-link-mobile dropdown-header ${isActive('/products') || isActive('/ai-chatbot') || isActive('/ai-scheduler') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/ai-chatbot" 
              className="nav-link-mobile dropdown-item-mobile"
              onClick={() => setIsMenuOpen(false)}
            >
              dAIlogue
            </Link>
            <Link 
              to="/ai-scheduler" 
              className="nav-link-mobile dropdown-item-mobile"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Scheduler
            </Link>
          </div>
          
          <Link 
            to="/about" 
            className={`nav-link-mobile ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link-mobile ${isActive('/contact') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Link 
            to="/contact" 
            className="btn btn-primary mobile-cta"
            onClick={handleMobileCtaClick}
          >
            Free Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

