import { useState, useCallback } from 'react';

/**
 * Custom hook to manage command history navigation
 * @param {Array} commandHistory - Array of previous commands
 * @returns {object} Navigation state and methods
 */
export const useCommandNavigation = (commandHistory = []) => {
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [tempInput, setTempInput] = useState("");

  /**
   * Navigate to previous command (up arrow)
   * @param {string} currentInput - Current input value
   * @returns {string} Previous command or current input
   */
  const navigateToPrevious = useCallback((currentInput) => {
    if (commandHistory.length === 0) return currentInput;
    
    // Save current input if at the bottom
    if (historyIndex === -1) {
      setTempInput(currentInput);
    }
    
    const newIndex = historyIndex === -1 
      ? commandHistory.length - 1 
      : Math.max(0, historyIndex - 1);
    
    setHistoryIndex(newIndex);
    return commandHistory[newIndex]?.inputValue || currentInput;
  }, [commandHistory, historyIndex]);

  /**
   * Navigate to next command (down arrow)
   * @param {string} currentInput - Current input value
   * @returns {string} Next command or temp input
   */
  const navigateToNext = useCallback((currentInput) => {
    if (commandHistory.length === 0 || historyIndex === -1) {
      return currentInput;
    }
    
    const newIndex = historyIndex + 1;
    
    if (newIndex >= commandHistory.length) {
      setHistoryIndex(-1);
      return tempInput;
    }
    
    setHistoryIndex(newIndex);
    return commandHistory[newIndex]?.inputValue || currentInput;
  }, [commandHistory, historyIndex, tempInput]);

  /**
   * Reset navigation state (called after command submission)
   */
  const resetNavigation = useCallback(() => {
    setHistoryIndex(-1);
    setTempInput("");
  }, []);

  return {
    navigateToPrevious,
    navigateToNext,
    resetNavigation,
    historyIndex
  };
};
