import React from 'react';
import { motion } from 'framer-motion';
import './SwiftCounter.css';
import screenshot1 from '../../../../assets/screenshot-swiftcounter-1.png';
import screenshot2 from '../../../../assets/screenshot-swiftcounter-2.png';
import appStoreBadgeBlack from '../../../../assets/download-button/ios/ios-download-black.svg';
import googlePlayBadge from '../../../../assets/download-button/android/google-play-badge.png';

function SwiftCounter() {

  const features = [
    {
      title: "Increment/Decrement:",
      description: "Change values by a set step, within optional min/max limits. Auto-saves, haptic/sound feedback, and logging (if enabled) ensure a responsive and customizable experience."
    },
    {
      title: "Double-Tap:",
      description: "Set a custom value instantly via prompt. Respects limits and disables negatives if needed. Saves and logs changes automatically."
    },
    {
      title: "Random Number Generator:",
      description: "Generates a random number within a defined or default range (1–9,999,999). Honors limits, includes negatives if allowed, with optional confirmation and logging."
    },
    {
      title: "Dice Roller:",
      description: "Roll various dice types for games or decisions. Respects limits, with optional logging, animation, and sound."
    },
    {
      title: "Saved Counters:",
      description: "Save, load, and manage multiple counters."
    },
    {
      title: "Logs & History:",
      description: "Track all changes with an interactive history log."
    }
  ];

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
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Swift Counter
      </motion.h1>

      <motion.hr
        className='divider'
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />

      <motion.p
        className="sc-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
      >
        Simple and elegant app that allows users to create, save, and manage multiple counters effortlessly.
        Track progress, monitor logs, and customize counters easily.
      </motion.p>

      <motion.hr
        className='divider'
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />

      {/* App Mockup Images */}
      <motion.div
        className="sc-mockups"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
      >
        <motion.div whileHover={{ scale: 1.05 }}>
          <img className="phone-frame" src={screenshot1} alt="iPhone frame" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>Why Swift Counter?</h2>
          <p>I made Swift Counter because I was looking for an app that would allow me to count my deaths in a Dark Souls playthrough, and none really had the features I am looking for. Most importantly, I also wanted to sharpen my skills in mobile app development. Swift Counter is made entirely using Flutter (.dart) for both iOS and Android. The data is managed using Flutter Provider, which makes it easy to update the data across the widget tree.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>Key Features</h2>
        </motion.div>
        <ul>
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3><strong>{feature.title}</strong></h3>
              <p>{feature.description}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Privacy Policy & Download Links */}
      <motion.div
        className="sc-links"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
      >

        <a href="/swift-counter/privacy-policy" className="sc-link">Privacy Policy</a>
        <a href="/swift-counter/terms-and-conditions" className="sc-link">Terms and Conditions</a>
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
