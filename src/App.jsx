import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import DynamicFooter from './components/footer/DynamicFooter';
import AppRoutes from './AppRoutes'; // Extracted Routes
import ScrollToTop from './components/utils/hooks/scrollToTop';

function App() {
  return (
    <Router>
      {/* Fixed Background */}
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
