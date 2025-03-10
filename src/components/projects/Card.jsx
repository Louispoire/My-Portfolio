import React from 'react';
import './Card.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Card({ title, description, timestamp, image, type, link, androidLink, iOSLink }) {
  const navigate = useNavigate();


  const navigateToLink = () => {
    navigate(link);
  };

  return (
    <div className="project-card">
      <img className="project-card-image" src={image} alt={title} />
      <div className="project-card-content">
        <h2 className="project-card-title">{title}</h2>
        <h3>{timestamp}</h3>
        <p className="project-card-description">{description}</p>
        {/* Show button for websites and apps */}
        <button className="learn-more-button" onClick={navigateToLink}>
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Card;
