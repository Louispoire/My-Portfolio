import React from 'react';
import { motion } from 'framer-motion';
import './SwiftCounter.css';
import screenshot1 from '../../../../assets/screenshot-swiftcounter-1.png';
import screenshot2 from '../../../../assets/screenshot-swiftcounter-2.png';
import appStoreBadgeBlack from '../../../../assets/download-button/ios/ios-download-black.svg';
import googlePlayBadge from '../../../../assets/download-button/android/google-play-badge.png';

function SwiftCounter() {
  return (
    <motion.div
      className="sc-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h1
        className="sc-title"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Swift Counter
      </motion.h1>

      <motion.hr
        className='divider'
        initial={{ width: 0 }}
        animate={{ width: "600px" }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />

      <motion.p
        className="sc-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
      >
        Simple and elegant app that allows users to create, save, and manage multiple counters effortlessly.
        Track progress, monitor logs, and customize counters easily.
      </motion.p>

      <motion.hr
        className='divider'
        initial={{ width: 0 }}
        animate={{ width: "600px" }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />

      {/* App Mockup Images */}
      <motion.div
        className="sc-mockups"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
      >
        <motion.div className="device-frame" whileHover={{ scale: 1.05 }}>
          <img className="phone-frame" src={screenshot1} alt="iPhone frame" />
        </motion.div>
        <motion.div className="device-frame" whileHover={{ scale: 1.05 }}>
          <img className="phone-frame" src={screenshot2} alt="Android frame" />
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="sc-features"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
      >
        <h2>Key Features</h2>
        <ul>
          <li>
            <h3><strong>Increment/Decrement:</strong></h3>
            <p>The increment and decrement functions let users modify counter values within predefined limits. Incrementing increases the counter by a set step, stopping at a max limit if defined; otherwise, it grows indefinitely. Decrementing lowers the value, respecting a min limit or stopping at zero if negatives are disabled. Both functions auto-save changes, provide haptic and sound feedback, and log updates if enabled. These features ensure a customizable and responsive counting experience.</p>
          </li>
          <li>
            <h3><strong>Double-Tap:</strong></h3>
            <p>The double-tap feature lets users quickly set a counter to a specific value. A prompt appears for manual input, respecting min/max limits and preventing negatives if disabled. Changes are instantly saved and logged if enabled. This tool offers a fast, precise alternative to repeated increments or decrements.</p>
          </li>
          <li>
            <h3><strong>Random Number Generator:</strong></h3>
            <p>Users can generate a random value within a set range, ensuring it stays within min/max limits. If unspecified, the default range is 1 to 9,999,999, including negatives if allowed. A confirmation prompt can prevent accidental overwrites. Generated values are instantly saved and logged if enabled.</p>
          </li>
          <li>
            <h3><strong>Dice Roller:</strong></h3>
            <p>The Dice Roll feature provides a quick way to generate random dice results for gaming or decisions. Users can select different dice types, with rolls respecting min/max limits. If enabled, rolls are logged. A rolling animation and sound effect enhance the experience.</p>
          </li>
          <li>
            <h3><strong>Saved Counters:</strong></h3>
            <p>Save, load, and manage multiple counters.</p>
          </li>
          <li>
            <h3><strong>Logs & History:</strong></h3>
            <p>Track all changes with an interactive history log.</p>
          </li>
        </ul>
      </motion.div>

      {/* Privacy Policy & Download Links */}
      <motion.div
        className="sc-links"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
      >
        <a href="/swift-counter/privacy-policy" className="sc-link">Help and FAQ</a>
        <a href="/swift-counter/privacy-policy" className="sc-link">Privacy Policy</a>
        <div className="download-links">
          <a href="https://apps.apple.com/app/idYOUR_APP_ID" className="ios-link">
            <div className="app-store-badge-container">
              <motion.img src={appStoreBadgeBlack} alt="Download on App Store" className="app-store-badge" whileHover={{ scale: 1.05 }} />
            </div>
          </a>
          <div className="google-play-badge-container">
            <a href="https://play.google.com/store/apps/details?id=YOUR_APP_PACKAGE" className="android-link">
              <motion.img src={googlePlayBadge} alt="Get it on Google Play" className="google-play-badge" whileHover={{ scale: 1.05 }} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SwiftCounter;
