import './SCTerms.css';

const SCTerms = () => {
    return (
        <div className="terms-container">
            <h1 className="terms-title">Terms and Conditions</h1>
            <p className="terms-updated">Last Updated: March 6, 2025</p>

            <div className='terms-elements-container'>
                <h2 className='terms-section-title'>1. Use of Swift Counter</h2>
                <p>
                    By using Swift Counter, you agree to use it responsibly and not attempt to disrupt its functionality or violate applicable laws.
                </p>
            </div>

            <div className='terms-elements-container'>
                <h2 className='terms-section-title'>2. Privacy</h2>
                <p>
                    Swift Counter does not collect personal information. For details, please see our <a href="/swift-counter/privacy-policy">Privacy Policy</a>.
                </p>
            </div>

            <div className='terms-elements-container'>
                <h2 className='terms-section-title'>3. Purchases</h2>
                <p>
                    Some features may require payment via Google Play or the Apple App Store. All sales are final unless required otherwise by law.
                </p>
            </div>

            <div className='terms-elements-container'>
                <h2 className='terms-section-title'>4. Ownership</h2>
                <p>
                    All content is owned by or licensed to the developer. Do not reuse or redistribute without permission.
                </p>
            </div>

            <div className='terms-elements-container'>
                <h2 className='terms-section-title'>5. No Liability</h2>
                <p>
                    Swift Counter is provided &quot;as is.&quot; The developer is not liable for any issues arising from its use.
                </p>
            </div>

            <div className='terms-elements-container'>
                <h2 className='terms-section-title'>6. Trademarks</h2>
                <p>
                    iOS and related marks are trademarks of Apple Inc. Android and Google Play are trademarks of Google LLC. All other trademarks belong to their respective owners.
                </p>
            </div>

            <div className='terms-elements-container'>
                <h2 className='terms-section-title'>7. Contact</h2>
                <p>
                    Questions? Email me at <a className="pp-mail-link" href="mailto:louisphilippe.dev@gmail.com">louisphilippe.dev@gmail.com</a>.
                </p>
            </div>
        </div>
    );
};

export default SCTerms;
