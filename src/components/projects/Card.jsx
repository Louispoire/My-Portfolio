import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';
import { ProjectType } from '../../data/constant';

function Card({ title, description, timestamp, image, type, link }) {
  const navigate = useNavigate();


  const navigateToLink = () => {
    if (type == ProjectType.Website) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
    else {
      navigate(link);
    }
  };

  return (
    <div className="project-card">
      <img className="project-card-image" src={image} alt={title} />
      <div className="project-card-content">
        <h2 className="project-card-title">{title}</h2>
        <h3>{timestamp}</h3>
        <p className="project-card-description">{description}</p>
        {type === ProjectType.Website && (
          <button className="learn-more-button" onClick={navigateToLink}>View website</button>
        )}
        {type === ProjectType.App && (
          <button className="learn-more-button" onClick={navigateToLink}>Learn more</button>
        )}
      </div>
    </div>
  );
}

export default Card;