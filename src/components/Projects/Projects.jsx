import { useState, useEffect } from 'react';
import './Projects.css';
import counterIcon from '../../assets/swift_counter_icon.png';
import simdevWebsiteLight from '../../assets/SIMDEV_logo_light.png';
import simdevWebsiteDark from '../../assets/SIMDEV_logo_dark.png';
import Card from '../projects/Card';

function Projects() {
  const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme') || 'light');

  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(document.documentElement.getAttribute('data-theme') || 'light');
    };

    // Create an observer to detect theme changes
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Projects Array (image updates dynamically)
  const projects = [
    { 
      id: 1,
      title: "SIMDEV's Website", 
      description: "Made in Typescript, ReactJs, and NodeJs", 
      bgColor: "#ff7c7c", 
      image: theme === 'light' ? simdevWebsiteLight : simdevWebsiteDark,
      timestamp: '2023-2024'
    },
    { 
      id: 2,
      title: "Swift Counter", 
      description: "Another great one.", 
      bgColor: "#6c5ce7", 
      image: counterIcon, 
      timestamp: '2024-2025'
    }
  ];

  return (
    <div className='projects-container'>
      <div>
        <h1>My projects</h1>
      </div>
      <div className="card-grid">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            yearBuilt={project.timestamp}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;