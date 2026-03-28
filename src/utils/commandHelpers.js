import { COMMANDS } from '../constants/commands';

/**
 * Get all available command names
 * @returns {Array<string>} Array of command names
 */
export const getAllCommands = () => {
  return Object.keys(COMMANDS).filter(cmd => cmd !== "");
};

/**
 * Find commands that match the given input (fuzzy matching)
 * @param {string} input - User input
 * @returns {Array<string>} Array of matching commands
 */
export const findMatchingCommands = (input) => {
  if (!input || input.trim() === "") return [];
  
  const lowerInput = input.toLowerCase().trim();
  const allCommands = getAllCommands();
  
  // Exact matches first
  const exactMatches = allCommands.filter(cmd => 
    cmd.toLowerCase() === lowerInput
  );
  
  // Starts with matches
  const startsWith = allCommands.filter(cmd => 
    cmd.toLowerCase().startsWith(lowerInput) && 
    !exactMatches.includes(cmd)
  );
  
  // Contains matches (fuzzy)
  const contains = allCommands.filter(cmd => 
    cmd.toLowerCase().includes(lowerInput) && 
    !exactMatches.includes(cmd) && 
    !startsWith.includes(cmd)
  );
  
  return [...exactMatches, ...startsWith, ...contains];
};

/**
 * Get the best autocomplete suggestion for input
 * @param {string} input - User input
 * @returns {string|null} Autocomplete suggestion or null
 */
export const getAutocompleteSuggestion = (input) => {
  if (!input || input.trim() === "") return null;
  
  const matches = findMatchingCommands(input);
  return matches.length > 0 ? matches[0] : null;
};

/**
 * Autocomplete the input to the best matching command
 * @param {string} input - Current input
 * @returns {string} Completed command or original input
 */
export const autocompleteCommand = (input) => {
  const trimmedInput = input.trim();
  if (!trimmedInput) return input;
  
  const suggestion = getAutocompleteSuggestion(trimmedInput);
  return suggestion || input;
};

/**
 * Check if a command exists (with fuzzy matching)
 * @param {string} input - Command to check
 * @returns {boolean} True if command exists
 */
export const commandExists = (input) => {
  const matches = findMatchingCommands(input);
  return matches.length > 0;
};

/**
 * Get the actual command name from fuzzy input
 * @param {string} input - User input (potentially fuzzy)
 * @returns {string} Actual command name or original input
 */
export const resolveCommand = (input) => {
  const trimmed = input.trim().toLowerCase();
  const matches = findMatchingCommands(trimmed);
  return matches.length > 0 ? matches[0] : input;
};
