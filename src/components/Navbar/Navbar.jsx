import './Navbar.css';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useDetectView from '../Utils/Hook/useDetectView';
import { View } from '../../data/constant';
import { FaMoon, FaSun, FaHeart } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [svgSize, setSvgSize] = useState({ width: 50, height: 50 }); // 
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentView = useDetectView();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Update SVG size based on view
  useEffect(() => {
    if (currentView === View.Mobile) {
      setSvgSize({ width: 37.5, height: 37.5 });
    } else {
      setSvgSize({ width: 50, height: 50 });
    }
  }, [currentView]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Framer Motion animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const menuVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
    exit: (i) => ({
      x: '-100%',
      opacity: 0,
      transition: { delay: (2 - i) * 0.2, duration: 0.5, ease: 'easeIn' },
    }),
  };


  // Smooth Scrolling to Sections
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Ensure it scrolls properly
      });
      setIsOpen(false); // Close menu on mobile
    }
  };

  // Scroll to Top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>

        {/* Theme Toggle + Title */}
        <div className="nav-section">
          {/* Dark Mode Toggle (Hidden on Mobile) */}
          {currentView !== View.Mobile && (
            <div className="nav-theme-mode" onClick={toggleTheme}>
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </div>
          )}

          {/* Website Title */}
          <div className="nav-title">Louis-Philippe.</div>
        </div>

        {/* Hamburger Menu */}
        <div className={`hamburger-menu ${isOpen ? 'open fixed' : 'static'}`} onClick={toggleMenu}>
          <svg width={svgSize.width} height={svgSize.height} viewBox="0 0 100 100">
            <path className="line top" d="M 20,30 H 80" />
            <path className="line middle" d="M 20,50 H 80" />
            <path className="line bottom" d="M 20,70 H 80" />
          </svg>
        </div>
      </nav>

      {/* Fullscreen Menu with Dark Mode Toggle */}
      <AnimatePresence>
        {isOpen && currentView === View.Mobile && (
          <motion.div
            className="fullscreen-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={backdropVariants}
          >

            <ul className="fullscreen-links">
              {['About', 'Projects', 'Contact'].map((item, i) => (
                <motion.li
                  key={item}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={menuVariants}
                >
                  <a onClick={() => scrollToSection(item.toLowerCase())}>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div>
              {/* Dark Mode Button inside Menu (Mobile only) */}
              <button className="nav-theme-mode" onClick={toggleTheme}>
                {theme === 'light' ? <FaMoon /> : <FaSun />}
              </button>
            </div>
            <div className='mobile-message'>
              <p>Made with</p>
              <FaHeart className='heart-icon'/>
              <p>by LP</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;