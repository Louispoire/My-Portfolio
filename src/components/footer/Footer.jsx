import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();


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
    <footer className="footer">
      <div className='footer-links'>
        <a onClick={() => scrollToSection('projects')}>Projects</a>
        <a onClick={() => scrollToSection('about')}>About</a>
        <a onClick={() => scrollToSection('contact')}>Contact</a>
      </div>
      <div className="social-media-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <p className="copyright">
        &copy; {currentYear} Louis-Philippe
      </p>
    </footer>
  );
}

export default Footer;