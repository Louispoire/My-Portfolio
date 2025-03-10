import { useLocation } from 'react-router-dom';
import Footer from './Footer';

function DynamicFooter() {
  const location = useLocation();

  // Detect if it's the homepage
  const isHome = location.pathname === '/' || location.pathname === '' || location.pathname === '/index';

  return (
    <div className={`footer ${isHome ? 'bg-alt' : ''}`}>
      <Footer />
    </div>
  );
}

export default DynamicFooter;
