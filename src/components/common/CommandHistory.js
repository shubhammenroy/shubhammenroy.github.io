import React from "react";
import UserLog from "./UserLog";
import PromptAnswer from "./PromptAnswer";
import "../../styles/terminal.css";

/**
 * CommandHistory component - displays the history of executed commands
 * Optimized with React.memo for performance
 */
const CommandHistory = React.memo(({ prompts }) => {
  if (!prompts || prompts.length === 0) return null;

  return (
    <div className="command-history">
      {prompts.map((prompt, index) => (
        <div
          key={`${index}-${prompt.inputValue}`}
          className="command-history-item"
        >
          <div className="prompt-form">
            <UserLog />
            <p className="prompt-form">{prompt.inputValue}</p>
          </div>
          <PromptAnswer answer={prompt.answer} />
        </div>
      ))}
    </div>
  );
});

CommandHistory.displayName = 'CommandHistory';

export default CommandHistory;
