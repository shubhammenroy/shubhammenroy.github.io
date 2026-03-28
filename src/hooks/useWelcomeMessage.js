import { useEffect, useState } from 'react';

/**
 * Custom hook to manage welcome message display
 * Shows welcome message on first visit only
 * @returns {object} Welcome state and methods
 */
export const useWelcomeMessage = () => {
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  const WELCOME_KEY = 'shubham-portfolio-welcome-shown';

  useEffect(() => {
    // Check if welcome has been shown before
    const welcomeShown = localStorage.getItem(WELCOME_KEY);

    if (!welcomeShown) {
      setHasShownWelcome(false);
      // Mark as shown
      localStorage.setItem(WELCOME_KEY, 'true');
    } else {
      setHasShownWelcome(true);
    }
  }, []);

  const shouldShowWelcome = () => {
    return !hasShownWelcome;
  };

  const resetWelcome = () => {
    localStorage.removeItem(WELCOME_KEY);
    setHasShownWelcome(false);
  };

  return {
    shouldShowWelcome,
    resetWelcome,
    hasShownWelcome
  };
};
