import './Card.css';
import { useNavigate } from 'react-router-dom';
import { ProjectType } from '../../data/constant';
import PropTypes from 'prop-types';

function Card({ title, description, bg, timestamp, image, type, link }) {
  const navigate = useNavigate();

  const navigateToLink = () => {
    if (type === ProjectType.Website) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      navigate(link);
    }
  };

  return (
    <div className="project-card back" style={{backgroundColor: bg}}>
      <img className="project-card-image" src={image} alt={title} />
      <div className="project-card-content">
        <h2 className="project-card-title">{title}</h2>
        <h3 className="project-card-subtitle">{timestamp}</h3>
        <p className="project-card-description">{description}</p>

        {type === ProjectType.Website && (
          <button className="learn-more-button" onClick={navigateToLink}>
            View website
          </button>
        )}

        {type === ProjectType.App && (
          <button className="learn-more-button" onClick={navigateToLink}>
            Learn more
          </button>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bg: PropTypes.string,
  type: PropTypes.oneOf([
    ProjectType.Website,
    ProjectType.App,
  ]).isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;