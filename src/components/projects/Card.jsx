import React from 'react';
import './Card.css';

function Card({ title, description, timestamp, image, type, link, androidLink, iOSLink }) {

  const navigateToLink = () => {
      window.open(link, '_blank', 'noopener,noreferrer');

    /* CODE TO OPEN APP
    else if (type === 'app') {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if (/android/i.test(userAgent) && androidLink) {
        console.log("Opening Android App:", androidLink);
        window.open(androidLink, '_blank', 'noopener,noreferrer');
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream && iOSLink) {
        console.log("Opening iOS App:", iOSLink);
        window.open(iOSLink, '_blank', 'noopener,noreferrer');
      } else {
        alert("This app is available only on mobile devices.");
      }
    } else {
      console.log("No valid link found.");
    }
      */
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
