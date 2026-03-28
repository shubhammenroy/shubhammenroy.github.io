import React from 'react';
import "../../styles/terminal.css";

/**
 * PromptAnswer component - displays the response to a command
 * Optimized with React.memo for performance
 */
const PromptAnswer = React.memo(({ answer }) => {
  if (!answer) return null;
  
  return (
    <div 
      className='prompt-answer' 
      dangerouslySetInnerHTML={{ __html: answer }} 
    />
  );
});

PromptAnswer.displayName = 'PromptAnswer';

export default PromptAnswer;
