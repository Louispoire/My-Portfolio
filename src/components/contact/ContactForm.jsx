import React from 'react';
import './ContactForm.css';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

function ContactForm() {
    return (
        <motion.div
            className="contact-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <motion.form
                action="https://api.web3forms.com/submit"
                method='POST'
                className="contact-form"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <input type="hidden" name="access_key" value="427b8367-f8f7-4229-84f4-078660f3b0ba" />
                <div className="contact-left-title">
                    <h2>Get in touch<span className="title-dot">.</span></h2>
                    <hr />
                </div>

                {/* Input Fields */}
                <div className="input-group">
                    <input type="text" name="name" placeholder='Name'required />
                </div>

                <div className="input-group">
                    <input type="email" name="email" placeholder="Email" required />
                </div>

                <div className="input-group">
                    <textarea name="message" placeholder="Message" required></textarea>
                    {/*<label>Message</label>*/}

                </div>

                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }}></input>

                <div className="submit-btn-container">
                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="submit-btn"
                    >
                        Send Message <FaPaperPlane />
                    </motion.button>
                </div>
                <div className="privacy-policy">
                    <div>Powered by Web3Forms.</div> 
                    <a className="pp-w3f-link" href="https://web3forms.com/privacy">Privacy Policy</a>
                </div>
            </motion.form>
        </motion.div>
    );
}

export default ContactForm;