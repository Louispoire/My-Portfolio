import React from 'react';
import './SCTerms.css';

const SCTerms = () => {
    return (
        <div className="terms-container">
            <h1 className="terms-title">Terms and Conditions</h1>
            <p className="terms-updated">Last Updated: March 6, 2025</p>

            <div>
                <h2 className='terms-section-title'>1. Acceptance of Terms</h2>
                <p>
                    By accessing or using Swift Counter, you agree to be bound by these Terms. If you do not agree with any part of these Terms, do not use the app.
                </p>
            </div>

            <div>
                <h2 className='terms-section-title'>2. Use of the App</h2>
                <ul>
                    <li>You agree to use the app only for its intended purposes.</li>
                    <li>You will not attempt to hack, modify, or interfere with the app’s functionality.</li>
                    <li>You will comply with all applicable laws when using the app.</li>
                </ul>
            </div>

            <div>
                <h2 className='terms-section-title'>3. Privacy Policy</h2>
                <p>
                    Your privacy is important to us. Please review our <a href="/swift-counter/privacy-policy" className="sc-link">Privacy Policy</a> to understand how we collect and use your data.
                </p>
            </div>

            <div>
                <h2 className='terms-section-title'>4. In-App Purchases and Payments</h2>
                <ul>
                    <li>The app may offer in-app purchases, subscriptions, or paid features.</li>
                    <li>Payments are processed through third-party services such as Google Play or Apple App Store.</li>
                    <li>All purchases are final and non-refundable unless required by law.</li>
                </ul>
            </div>

            <div>
                <h2 className='terms-section-title'>5. Intellectual Property</h2>
                <p>
                    All content, including text, images, and logos, is owned by us or licensed to us. You may not copy, modify, or distribute any part of the app without permission.
                </p>
            </div>

            <div>
                <h2 className='terms-section-title'>6. Termination</h2>
                <p>
                    We reserve the right to suspend or terminate your access to the app at any time if you violate these Terms.
                </p>
            </div>

            <div>
                <h2 className='terms-section-title'>7. Limitation of Liability</h2>
                <p>
                    Swift Counter is provided on an "as is" basis. We are not liable for any damages or losses resulting from the use of the app.
                </p>
            </div>

            <div>
                <h2 className='terms-section-title'>8. Changes to Terms</h2>
                <p>
                    We may update these Terms from time to time. You will be notified of any significant changes.
                </p>
            </div>

            <div>
                <h2 className='terms-section-title'>9. Trademarks</h2>
                <p>iPhone, iPad, iPod Touch, Apple TV, iTunes, iOS, tvOS, and macOS are trademarks of Apple Inc., registered in the U.S. and other countries.</p>

                <p>Android, Google Play, and the Google Play logo are trademarks of Google LLC.</p>

                <p>All other trademarks, product names and company names or logos in this site are the property of their respective owners.</p>
            </div>

            <div>
                <h2 className='terms-section-title'>10. Contact Us</h2>
                <p>
                    If you have any questions, please contact us at <a className="pp-mail-link" href="mailto:louisphilippe.dev@gmail.com">louisphilippe.dev@gmail.com</a>.
                </p>
            </div>
        </div>
    );
};

export default SCTerms;
