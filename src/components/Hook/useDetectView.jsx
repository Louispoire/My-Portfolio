import { useState, useEffect } from 'react';
import { View } from '../../data/constant';

const BREAKPOINTS = {
  MOBILE: 768,
  TABLET_MD: 1024,
  TABLET_LG: 1280,
};

/*
  This script detects the current screen size and returns a custom View
*/
const useDetectView = () => {
  const [view, setView] = useState(View.Desktop); // default to Desktop

  function getScreenSize() {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width <= BREAKPOINTS.MOBILE) return View.Mobile;
      if (width <= BREAKPOINTS.TABLET_MD) return View.Tablet;
      if (width <= BREAKPOINTS.TABLET_LG) return View.LargeTablet;
    }
    return View.Desktop; // Return Desktop as a fallback
  }

  useEffect(() => {
    // Set the initial view
    setView(getScreenSize());

    // Update view on window resize
    function handleResize() {
      setView(getScreenSize());
    }

    // Listen to the window resize event
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run only once

  return view;
};

export default useDetectView;