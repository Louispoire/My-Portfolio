import './SCPrivacyPolicy.css';

const SCPrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-updated">Last Updated: March 6, 2025</p>

      <div>
        <h2 className='privacy-section-title'>Definitions</h2>
        <div className='privacy-elements-container'>
          <h2>Personal Data</h2>
          <p>‘Personal Information’ means any recorded information about an identifiable individual. This includes details such as name, contact information, race, religion, age, education, medical or employment history, personal views or opinions, and identifying numbers.</p>
          <p><i>Note: This definition is based on the <a href='https://laws-lois.justice.gc.ca/eng/acts/P-21/page-1.html#h-397260'>Privacy Act of Canada.</a></i></p>
        </div>
      </div>

      <div className='.privacy-elements-container'>
        <h2 className='privacy-section-title'>Information Collection And Use</h2>
        <p>
          Swift Counter does not collect any Personal Information. 
        </p>
      </div>
    </div>
  );
};

export default SCPrivacyPolicy;
