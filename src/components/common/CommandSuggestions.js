import React from 'react';
import "../../styles/terminal.css";

/**
 * CommandSuggestions component - displays command suggestions
 * Shows inline autocomplete suggestion and available commands
 */
const CommandSuggestions = React.memo(({ inputValue, suggestion, matches }) => {
  if (!inputValue || inputValue.trim() === "") return null;

  return (
    <div className="command-suggestions">
      {suggestion && inputValue !== suggestion && (
        <div className="suggestion-hint">
          <span className="suggestion-text">
            Press <kbd>Tab</kbd> to autocomplete: <span className="highlight">{suggestion}</span>
          </span>
        </div>
      )}
      {matches && matches.length > 1 && (
        <div className="matches-list">
          <span className="matches-label">Available commands: </span>
          {matches.map((match, index) => (
            <span key={match} className="match-item">
              {match}
              {index < matches.length - 1 && ", "}
            </span>
          ))}
        </div>
      )}
    </div>
  );
});

CommandSuggestions.displayName = 'CommandSuggestions';

export default CommandSuggestions;
