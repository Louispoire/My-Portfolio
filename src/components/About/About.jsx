import './About.css';
import { motion } from 'framer-motion';
import profilePic from '../../assets/profile.JPG'; // Make sure the image exists in your assets folder

function About() {
  return (
    <section className="about">
      <div className="about-container">
        {/* Text Section */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi! I'm Louis-Philippe, a passionate developer who loves creating interactive experiences. 
            I specialize in front-end development, UI/UX, and making smooth animations. 
            When I'm not coding, you can find me exploring new technologies and working on creative projects.
          </p>
        </div>

        {/* Animated Profile Picture */}
        <motion.div
          className="profile-container"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </motion.div>
      </div>
    </section>
  );
}

export default About;