import './Footer.css';
import { FaGithub } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBluesky } from 'react-icons/fa6';
import { links } from '../../data/constant';

function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();


    // Smooth Scrolling to Sections
    const scrollToSection = (id) => {
      const executeScroll = () => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };
  
      if (location.pathname !== "/") {
        navigate("/"); // Navigate back to home first
        setTimeout(() => executeScroll(), 500); // Small delay to ensure page loads
      } else {
        executeScroll(); // Already on home, just scroll
      }
  
      setIsOpen(false); // Close menu after navigation
    };
  
    // Scroll to Top function
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    
  

  return (
    <footer className="footer">
      <div className='footer-links'>
        <a className="footer-link" onClick={() => scrollToSection('projects')}>Projects</a>
        <a className="footer-link" onClick={() => scrollToSection('about')}>About</a>
        <a className="footer-link" onClick={() => scrollToSection('contact')}>Contact</a>
      </div>
      <div className="social-media-icons">
        <a href={links.github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={links.bluesky} target="_blank" rel="noopener noreferrer">
          <FaBluesky />
        </a>
      </div>
      <p className="copyright">
        &copy; {currentYear} Louis-Philippe
      </p>
    </footer>
  );
}

export default Footer;