import { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import DynamicFooter from './components/footer/DynamicFooter';
import AppRoutes from './AppRoutes'; // Extracted Routes
import ScrollToTop from './components/utils/hooks/scrollToTop';
import Lenis from 'lenis';

function AnimatedBackground() {
  const location = useLocation(); // Get the current route
  const isHomePage = location.pathname === '/'; // Check if on home page

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    })
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
  
    return () => {
      lenis.destroy()
    }
  }, [])

  return isHomePage ? (
    <div className="area">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  ) : null; // Render nothing on other pages
}

function App() {
  return (
    <Router>
      {/* Conditional Animated Background */}
      <AnimatedBackground />

      {/* Scroll to Top on Route Change */}
      <ScrollToTop />

      {/* Scrollable Content */}
      <div className="content">
        <Navbar />
        <AppRoutes />
        <DynamicFooter />
      </div>
    </Router>
  );
}

export default App;
