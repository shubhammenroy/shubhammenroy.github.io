import React from "react";
import { APP_CONFIG } from "../../config/appConfig";
import "../../styles/terminal.css";

/**
 * UserLog component - displays the terminal prompt prefix
 * Optimized with React.memo for performance
 */
const UserLog = React.memo(() => {
  return (
    <div className="prompt-form" style={{ display: 'flex', whiteSpace: 'pre', alignItems: 'center' }}>
      <p style={{ color: APP_CONFIG.theme.primary, fontWeight: 'bold' }}>┌──(</p>
      <p style={{ color: APP_CONFIG.theme.secondary, fontWeight: 'bold' }}>{APP_CONFIG.username}㉿{APP_CONFIG.hostname}</p>
      <p style={{ color: APP_CONFIG.theme.primary, fontWeight: 'bold' }}>)-[</p>
      <p style={{ color: '#e7eae5', fontWeight: 'bold' }}>~</p>
      <p style={{ color: APP_CONFIG.theme.primary, fontWeight: 'bold' }}>]</p>
      <p style={{ color: '#e7eae5', marginLeft: '6px', marginRight: '8px', fontWeight: 'bold' }}>$</p>
    </div>
  );
});

UserLog.displayName = 'UserLog';

export default UserLog;
