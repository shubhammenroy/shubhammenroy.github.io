import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// M3NR0Y Signature
console.log(
  "%c Built by M3NR0Y %c https://github.com/shubham9672 ",
  "color: white; background: #000; padding: 5px; font-size: 14px; font-weight: bold; border-left: 4px solid #4ee32c;",
  "color: #4ee32c; background: #1a1a1a; padding: 5px; font-size: 14px;"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL || ""}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
