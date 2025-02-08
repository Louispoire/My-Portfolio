import './Navbar.css';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useDetectView from '../Utils/Hook/useDetectView';
import { View } from '../../data/constant';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [svgSize, setSvgSize] = useState({ width: 50, height: 50 }); // Default desktop size
  const currentView = useDetectView();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Update SVG size based on view
  useEffect(() => {
    if (currentView === View.Mobile) {
      setSvgSize({ width: 25, height: 25 });
    } else {
      setSvgSize({ width: 50, height: 50 });
    }
  }, [currentView]);

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

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Title on the right */}
        <div className="nav-title">Louis-Philippe.</div>
      </nav>

      {/* Hamburger menu */}
      <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <svg width={svgSize.width} height={svgSize.height} viewBox="0 0 100 100">
          <path className="line top" d="M 20,30 H 80" />
          <path className="line middle" d="M 20,50 H 80" />
          <path className="line bottom" d="M 20,70 H 80" />
        </svg>
      </div>

      {/* Fullscreen menu with animations */}
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
                  <a href={`#${item.toLowerCase()}`} onClick={toggleMenu}>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div>
              <p>Made with love by LP</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;