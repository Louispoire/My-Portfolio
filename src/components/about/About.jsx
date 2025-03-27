import './About.css';
import { motion } from 'framer-motion';
import profilePic from '../../assets/profile.jpg'; // Make sure the image exists in your assets folder
import { FaEnvelope } from 'react-icons/fa';

function About() {
  return (
    <section className="about">
      <div className="about-container">
        {/* Text Section */}
        <motion.div
          className='about-text'
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >

          <div className="underline-wrapper">
            <h2>About Me</h2>
            <motion.hr
              className="underline-title"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 1.5 }}
            />
          </div>
          <p>
            Hi! I'm Louis-Philippe, a passionate developer who loves creating interactive experiences.
            I love creating simple and modern app, as well as making feature packed websites.
            When I'm not coding, you can find me exploring new technologies and working on creative projects.
          </p>
        </motion.div>

        {/* Animated Profile Picture */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="profile-container"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <img src={profilePic} alt="Profile" className="profile-pic" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;