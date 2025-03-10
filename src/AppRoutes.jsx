import { Routes, Route } from 'react-router-dom';
import TypingAnimation from './components/utils/animations/typing/TypingAnimation';
import Projects from './components/projects/Projects';
import About from './components/about/About';

// Individual Project Pages
import SwiftCounter from './components/projects/pages/swiftcounter/SwiftCounter';
import Simdev from './components/projects/pages/simdev/Simdev';
import SCPrivacyPolicy from './components/projects/pages/swiftcounter/SCPrivacyPolicy';

function AppRoutes() {
  return (
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
  );
}

export default AppRoutes;
