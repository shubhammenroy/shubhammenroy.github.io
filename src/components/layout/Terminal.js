import React from "react";
import CommandHistory from "../common/CommandHistory";
import CommandInput from "../common/CommandInput";
import "../../styles/terminal.css";

/**
 * Terminal component - main terminal container
 * Combines history and input components
 */
const Terminal = React.memo(({ prompts, onAddPrompt, onClearHistory }) => {
  return (
    <>
      <div 
        style={{
          position: 'fixed',
          bottom: '10px',
          right: '15px',
          fontSize: '11px',
          color: 'rgba(255,255,255,0.04)',
          fontFamily: "'Fira Code', monospace",
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 99999
        }}
        aria-hidden="true"
      >
        M3NR0Y
      </div>
      <div className="prompt">
        <CommandHistory prompts={prompts} />
      </div>
      <div className="prompt">
        <CommandInput
          onAddPrompt={onAddPrompt}
          promptHistory={prompts}
          onClearHistory={onClearHistory}
        />
      </div>
    </>
  );
});

Terminal.displayName = 'Terminal';

export default Terminal;
