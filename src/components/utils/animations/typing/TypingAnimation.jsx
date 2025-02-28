import './TypingAnimation.css';
import React, { useState, useEffect } from 'react';

const phrases = [
  "Build",
  "I am a developer.",
  "Let's build something amazing together!"
];

function TypingAnimation() {
  const [text, setText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let typingSpeed = isDeleting ? 50 : 100; // Typing speed when adding/removing characters

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentPhraseIndex]);

  return (
    <div className='content-wrapper'>
      <h1 className="animated-text">
        {text}
        <span className="blinking-cursor">|</span>
      </h1>
    </div>
  );
}

export default TypingAnimation;