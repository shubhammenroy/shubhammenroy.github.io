import React, { useEffect, useState, useCallback } from "react";
import Header from "../components/layout/Header";
import Terminal from "../components/layout/Terminal";
import DigitalPet from "../components/common/DigitalPet";
import { useCommandHistory } from "../hooks/useCommandHistory";
import { useWelcomeMessage } from "../hooks/useWelcomeMessage";
import { parseCommandString } from "../services/commandService";
import { APP_CONFIG } from "../config/appConfig";
import "../styles/App.css";

/**
 * Tab definitions — each tab auto-runs a command when clicked.
 */
const TABS = [
  { id: "home",        label: "home",        command: null },
  { id: "about",       label: "about",       command: "about" },
  { id: "experience",  label: "experience",  command: "experience" },
  { id: "projects",    label: "projects",    command: "project" },
  { id: "skills",      label: "skills",      command: "skill" },
  { id: "contact",     label: "contact",     command: "contact" },
  { id: "resume",      label: "resume",      command: "resume" },
  { id: "clear",       label: "clear",       command: null, action: "clear" },
];

const Home = () => {
  const { promptsArray, addPrompt, clearPrompts } = useCommandHistory();
  const { shouldShowWelcome } = useWelcomeMessage();
  const [activeTab, setActiveTab] = useState("home");

  // Show welcome message on first visit
  useEffect(() => {
    if (promptsArray.length === 0 && shouldShowWelcome()) {
      const welcomeCommand = parseCommandString("welcome");
      addPrompt({
        inputValue: "welcome",
        answer: welcomeCommand.answer,
        action: welcomeCommand.action,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTabClick = useCallback(
    (tab) => {
      setActiveTab(tab.id);

      // Special clear action
      if (tab.action === "clear") {
        clearPrompts();
        setActiveTab("home");
        return;
      }

      if (tab.command) {
        const res = parseCommandString(tab.command);
        if (res.action === "CLEAR") {
          clearPrompts();
        } else {
          addPrompt({
            inputValue: tab.command,
            answer: res.answer,
            action: res.action,
          });
        }
      }
    },
    [addPrompt, clearPrompts]
  );

  return (
    <>
      {/* ── macOS-style window frame ── */}
      <div className="window-frame">
        {/* Title bar */}
        <div className="title-bar">
          <div className="traffic-lights">
            <span className="light red" />
            <span className="light yellow" />
            <span className="light green" />
          </div>
          <div className="title-bar-text">
            terminal &mdash; {APP_CONFIG.username}@{APP_CONFIG.hostname}
          </div>
        </div>

        {/* Tab bar */}
        <div className="tab-bar">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`tab-item${activeTab === tab.id ? " active" : ""}${tab.action === "clear" ? " tab-clear" : ""}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Terminal body */}
        <div className="App">
          <Header />
          <Terminal
            prompts={promptsArray}
            onAddPrompt={addPrompt}
            onClearHistory={clearPrompts}
          />
        </div>
      </div>

      <DigitalPet />
    </>
  );
};

export default Home;
