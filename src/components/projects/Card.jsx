import React from 'react';
import './Card.css';

function Card({ title, description, yearBuilt, location, image }) {
  return (
    <div className="project-card">
      <img className="project-card-image" src={image} alt={title} />
      <div className="project-card-content">
        <h2 className="project-card-title">{title}</h2>
        <h3>{yearBuilt}</h3>
        <p className="project-card-subtitle">{location}</p>
        <p className="project-card-description">{description}</p>
        <button className="learn-more-button">Learn More</button>
      </div>
    </div>
  );
}

export default Card;
