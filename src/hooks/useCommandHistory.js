import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { parseCommandString } from '../services/commandService';

/**
 * Custom hook to manage command history with URL synchronization
 * @returns {object} Command history state and methods
 */
export const useCommandHistory = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // Initialize prompts from URL
  const initializeFromURL = () => {
    const prompts = searchParams.get('prompts') || '';
    return prompts
      .split(',')
      .filter(cmd => cmd.trim() !== '')
      .map(cmd => parseCommandString(cmd, false))
      .filter((el) => el.action !== 'IGNORE');
  };

  const [promptsArray, setPromptsArray] = useState(initializeFromURL);

  // Sync with URL on mount and when URL changes
  useEffect(() => {
    setPromptsArray(initializeFromURL());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  /**
   * Add a new prompt to history
   * @param {object} newPrompt - The new prompt to add
   */
  const addPrompt = (newPrompt) => {
    // Empty input (user pressed Enter with no command): add new line to display only, do not update URL
    if (newPrompt.inputValue === '') {
      setPromptsArray((prevPrompts) => [...prevPrompts, newPrompt]);
      return;
    }
    const currentPrompts = searchParams.get('prompts') || '';
    const separator = currentPrompts.length === 0 ? '' : ',';
    const newPromptsParam = currentPrompts + separator + newPrompt.inputValue;
    navigate(`/?prompts=${newPromptsParam}`);
    setPromptsArray((prevPrompts) => [...prevPrompts, newPrompt]);
  };

  /**
   * Clear all prompts
   */
  const clearPrompts = () => {
    navigate('/');
    setPromptsArray([]);
  };

  return {
    promptsArray,
    addPrompt,
    clearPrompts,
    setPromptsArray
  };
};

