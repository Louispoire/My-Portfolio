import React from 'react';
import './SCPrivacyPolicy.css';

const SCPrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-updated">Last Updated: March 6, 2025</p>

      <div>
        <h2 className='privacy-section-title'>Definitions</h2>
        <div>
          <h2>Personal Data</h2>
          <p>‘Personal data’ efers to any information that relates to an identified or identifiable natural person (the “data subject”). An identifiable person is someone who can be recognized, directly or indirectly, through details such as a name, identification number, location data, online identifier, or by factors specific to their physical, physiological, genetic, mental, economic, cultural, or social identity.</p>
          <p><i>Note: This definition is based on the General Data Protection Regulation (GDPR).</i></p>
        </div>
      </div>

      <div>
        <h2 className='privacy-section-title'>Information Collection And Use</h2>
        <p>
          Swift Counter does not collect any Personal Data. 
        </p>
      </div>
    </div>
  );
};

export default SCPrivacyPolicy;
