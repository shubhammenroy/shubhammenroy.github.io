import React from "react";
import { BANNER } from "../../config/appConfig";
import "../../styles/terminal.css";

/**
 * Header component - displays the ASCII art banner
 * Optimized with React.memo for performance
 */
const Header = React.memo(() => {
  return (
    <div style={{ marginLeft: "0.8vw" }}>
      <pre>{BANNER}</pre>
    </div>
  );
});

Header.displayName = 'Header';

export default Header;
