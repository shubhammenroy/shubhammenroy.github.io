import React, { useState, useCallback, useEffect } from "react";
import UserLog from "./UserLog";
import CommandSuggestions from "./CommandSuggestions";
import { resolveCommand, autocompleteCommand, findMatchingCommands, getAutocompleteSuggestion } from "../../utils/commandHelpers";
import { parseCommandString } from "../../services/commandService";
import { useAutoScroll } from "../../hooks/useAutoScroll";
import { useCommandNavigation } from "../../hooks/useCommandNavigation";
import { APP_CONFIG } from "../../config/appConfig";
import "../../styles/terminal.css";

/**
 * CommandInput component - Enhanced Linux-style terminal input
 * Features:
 * - Tab autocomplete
 * - Arrow key navigation (up/down for history)
 * - Fuzzy command matching
 * - Command suggestions
 * - Ctrl+C to clear input
 * - Ctrl+L to clear screen
 */
const CommandInput = React.memo(({ onAddPrompt, promptHistory, onClearHistory }) => {
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  
  // Auto-scroll when new prompt added or when user types and suggestions appear
  const inputRef = useAutoScroll([promptHistory, inputValue, showSuggestions]);
  
  const { navigateToPrevious, navigateToNext, resetNavigation } = useCommandNavigation(promptHistory);

  // Get autocomplete suggestions
  const suggestion = getAutocompleteSuggestion(inputValue);
  const matches = findMatchingCommands(inputValue);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    
    if (inputValue.trim() === "") {
      onAddPrompt({
        inputValue: "",
        answer: "",
        action: "",
      });
      resetNavigation();
      return;
    }

    // Resolve fuzzy commands (e.g., "he" -> "help")
    const resolvedCommand = resolveCommand(inputValue);
    const res = parseCommandString(resolvedCommand);
    
    setInputValue("");
    setShowSuggestions(true);
    resetNavigation();

    // Handle special commands
    if (res.action === "CLEAR") {
      onClearHistory();
    } else if (res.action === "IGNORE") {
      // Do nothing for ignored commands
    } else {
      onAddPrompt({
        inputValue: resolvedCommand,
        answer: res.answer,
        action: res.action,
      });
    }
  }, [inputValue, onAddPrompt, onClearHistory, resetNavigation]);

  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
    setShowSuggestions(true);
  }, []);

  const handleKeyDown = useCallback((e) => {
    switch(e.key) {
      case 'Tab':
        // Tab autocomplete
        e.preventDefault();
        if (inputValue.trim()) {
          const completed = autocompleteCommand(inputValue);
          setInputValue(completed);
          setShowSuggestions(false);
        }
        break;

      case 'ArrowUp':
        // Navigate to previous command
        e.preventDefault();
        const prevCommand = navigateToPrevious(inputValue);
        setInputValue(prevCommand);
        break;

      case 'ArrowDown':
        // Navigate to next command
        e.preventDefault();
        const nextCommand = navigateToNext(inputValue);
        setInputValue(nextCommand);
        break;

      case 'c':
        // Ctrl+C to clear input
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          setInputValue("");
          resetNavigation();
        }
        break;

      case 'l':
        // Ctrl+L to clear screen (like Linux terminal)
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          onClearHistory();
          setInputValue("");
          resetNavigation();
        }
        break;

      default:
        break;
    }
  }, [inputValue, navigateToPrevious, navigateToNext, resetNavigation, onClearHistory]);

  // Focus input on mount and when clicking anywhere on the page
  useEffect(() => {
    const handleClick = () => {
      inputRef.current?.focus();
    };
    
    document.addEventListener('click', handleClick);
    inputRef.current?.focus();
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [inputRef]);

  return (
    <div className="input-container">
      <form className="prompt-form" onSubmit={handleSubmit}>
        <UserLog />
        <input
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          autoFocus
          autoComplete="off"
          spellCheck="false"
          placeholder={APP_CONFIG.placeholder}
          className="terminal-input"
        />
      </form>
      {showSuggestions && inputValue && matches.length > 0 && (
        <CommandSuggestions
          inputValue={inputValue}
          suggestion={suggestion}
          matches={matches}
        />
      )}
    </div>
  );
});

CommandInput.displayName = 'CommandInput';

export default CommandInput;
