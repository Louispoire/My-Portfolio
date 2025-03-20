import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import DynamicFooter from './components/footer/DynamicFooter';
import AppRoutes from './AppRoutes'; // Extracted Routes
import ScrollToTop from './components/utils/hooks/scrollToTop';

function AnimatedBackground() {
  const location = useLocation(); // Get the current route
  const isHomePage = location.pathname === '/'; // Check if on home page

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
