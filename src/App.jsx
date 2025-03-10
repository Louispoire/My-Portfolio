import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import TypingAnimation from './components/utils/animations/typing/TypingAnimation';

// Import individual project pages
import SwiftCounter from './components/projects/pages/swiftcounter/SwiftCounter';
import Simdev from './components/projects/pages/simdev/Simdev';

// Privacy policy
import SCPrivacyPolicy from './components/projects/pages/swiftcounter/SCPrivacyPolicy';

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

      {/* Scrollable Content */}
      <div className="content">
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <div className='section'>
                  <TypingAnimation />
                </div>
                <div id="projects">
                  <Projects />
                </div>
                <div className="separator" />
                <div className="slanted-bg">
                  <div id="about">
                    <About />
                  </div>
                  <div id="contact"></div>
                </div>
              </>
            }
          />
          {/* Individual Project Pages */}
          <Route path="/simdev" element={<Simdev />} />
          <Route path="/swift-counter" element={<SwiftCounter />} />
          <Route path="/swift-counter/privacy-policy" element={<SCPrivacyPolicy />} />
        </Routes>

        {/* Dynamic Footer */}
        <DynamicFooter />
      </div>
    </Router>
  );
}

// Function to determine footer color based on route
function DynamicFooter() {
  const location = useLocation();
  console.log("Current Path:", location.pathname); // Debugging Output

  // Adjust condition if needed
  const isHome = location.pathname === '/' || location.pathname === '' || location.pathname === '/index';

  return (
    <div className={`footer ${isHome ? 'bg-alt' : ''}`}>
      <Footer />
    </div>
  );
}

export default App;