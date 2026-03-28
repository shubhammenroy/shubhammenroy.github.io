import { COMMANDS } from '../constants/commands';
import { resolveCommand } from '../utils/commandHelpers';
import { getRandomQuote, getRandomJoke, getRandomTip, formatQuote, formatJoke, formatTip } from '../utils/funContent';

/**
 * Parse a command string into structured command object
 * Supports fuzzy matching for commands
 * @param {string} inputValue - The command input string
 * @returns {object} Parsed command with options and args
 */
export function parseCommandString(inputValue, executeSideEffects = true) {
  const command = inputValue.split(" ").filter((el) => el !== "");
  let parsingError = undefined;
  
  if (command.length === 0) {
    return {
      inputValue,
      answer: "",
      action: "IGNORE",
    };
  }

  // Resolve fuzzy command (e.g., "he" -> "help")
  const resolvedCommand = resolveCommand(command[0]);
  
  const parsedCommand = {
    options: [],
    command: resolvedCommand.toLowerCase(),
    args: [],
  };

  for (let i = 1; i < command.length; ++i) {
    const elm = command[i];
    if (elm === "" || elm === " ") continue;
    
    if (elm === "--") {
      for (let j = i + 1; j < command.length; ++j) {
        parsedCommand.args.push(command[j]);
      }
      break;
    } else if (elm.slice(0, 2) === "--") {
      const com = elm.slice(2);
      if (com.length < 2) {
        parsingError = "error at " + command[i];
        break;
      }
      if (i + 1 === command.length) {
        parsingError = "error at " + command[i];
        break;
      }
      if (command[i + 1].startsWith("-")) {
        parsingError = "error at " + command[i + 1];
        break;
      }
      parsedCommand.options.push({
        command: com,
        arg: command[++i],
      });
      continue;
    } else if (elm.slice(0, 1) === "-") {
      const com = elm.slice(1);
      if (com.length !== 1) {
        parsingError = "error at " + command[i];
        break;
      }
      if (i + 1 === command.length) {
        parsingError = "error at " + command[i];
        break;
      }
      if (command[i + 1].startsWith("-")) {
        parsingError = "error at " + command[i + 1];
        break;
      }
      parsedCommand.options.push({
        command: com,
        arg: command[++i],
      });
    } else {
      parsedCommand.args.push(command[i]);
    }
  }

  if (parsingError) {
    return {
      inputValue,
      answer: parsingError,
      action: null,
    };
  }

  const { res, action } = getResponse(parsedCommand, executeSideEffects);
  return {
    inputValue,
    answer: res,
    action,
  };
}

/**
 * Get response for a parsed command - SECURE VERSION (no eval())
 * @param {object} parsedCommand - Parsed command object
 * @returns {object} Response with res and action
 */
export function getResponse(parsedCommand, executeSideEffects = true) {
  const command = parsedCommand.command;
  let res = undefined;
  let action = undefined;

  if (COMMANDS[command] === undefined) {
    res = "Command not found. Use <span class=\"highlights\"><i>help</i></span> command to list all valid commands.";
  } else if (COMMANDS[command] === null && command === "clear") {
    res = null;
    action = "CLEAR";
  } else if (COMMANDS[command] === null && command === "oss") {
    res = COMMANDS["opensource"].response;
  } else if (command === "") {
    res = "";
  } else if (COMMANDS[command] === null && (command === "help" || command === "man")) {
    // Categorized help system
    res = "<p style='color: #4ee32c; font-weight: 500;'>📚 Available Commands</p>";
    
    // Main Commands
    res += "<p style='color: #ffff00; margin-top: 12px; font-weight: 500;'>Main Commands:</p>";
    res += "<table>";
    const mainCommands = ['hireme', 'about', 'experience', 'education', 'skill', 'project', 'opensource', 'contact', 'social', 'resume'];
    for (let cmd of mainCommands) {
      if (COMMANDS[cmd]) {
        res += "<tr><td>" + cmd + "</td><td>" + COMMANDS[cmd].cue + "</td></tr>";
      }
    }
    res += "</table>";
    
    // Utility Commands
    res += "<p style='color: #ffff00; margin-top: 12px; font-weight: 500;'>Utility:</p>";
    res += "<table>";
    const utilCommands = ['help', 'shortcuts', 'clear', 'welcome'];
    for (let cmd of utilCommands) {
      const cue = cmd === 'help' || cmd === 'man' ? 'Show this help' : 
                  cmd === 'clear' ? 'Clear terminal screen' : 
                  COMMANDS[cmd] ? COMMANDS[cmd].cue : '';
      if (cue) {
        res += "<tr><td>" + cmd + "</td><td>" + cue + "</td></tr>";
      }
    }
    res += "</table>";
    
    // Fun Commands
    res += "<p style='color: #ffff00; margin-top: 12px; font-weight: 500;'>Fun Commands:</p>";
    res += "<table>";
    const funCommands = ['fun', 'whoami', 'date', 'banner', 'quote', 'joke', 'matrix', 'tip', 'sudo', 'go', 'java', 'python'];
    for (let cmd of funCommands) {
      if (COMMANDS[cmd]) {
        res += "<tr><td>" + cmd + "</td><td>" + COMMANDS[cmd].cue + "</td></tr>";
      }
    }
    res += "</table>";

    // Pet Commands
    res += "<p style='color: #ffff00; margin-top: 12px; font-weight: 500;'>🐱 Pet Commands:</p>";
    res += "<table>";
    res += "<tr><td>play</td><td>" + COMMANDS['play'].cue + "</td></tr>";
    res += "<tr><td>feed</td><td>" + COMMANDS['feed'].cue + "</td></tr>";
    res += "</table>";

    res += "<p style='margin-top: 16px; color: #888;'>💡 Tip: Type 'shortcuts' for keyboard shortcuts, or 'fun' for easter eggs!</p>";
    res += "<p style='margin-top: 4px; color: #888;'>🔍 Try: <span class='highlights'>projects --filter java</span> to filter projects by skill/tech</p>";
  } else {
    // Handle dynamic commands
    if (command === 'quote') {
      const quote = getRandomQuote();
      res = formatQuote(quote);
    } else if (command === 'joke') {
      const joke = getRandomJoke();
      res = formatJoke(joke);
    } else if (command === 'tip') {
      const tip = getRandomTip();
      res = formatTip(tip);
    } else if (command === 'date') {
      // Dynamic date command
      res = `<p style='color: #4ee32c;'>${new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p><p style='margin-top: 4px; color: #888;'>Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}</p>`;
    } else if (command === 'play') {
      // Notify the digital pet to start fetch animation
      if (executeSideEffects) setTimeout(() => document.dispatchEvent(new CustomEvent('pet-action', { detail: 'play' })), 100);
      res = COMMANDS['play'].response;
    } else if (command === 'feed') {
      // Notify the digital pet to start eating animation
      if (executeSideEffects) setTimeout(() => document.dispatchEvent(new CustomEvent('pet-action', { detail: 'feed' })), 100);
      res = COMMANDS['feed'].response;
    } else if (command === 'resume') {
      // Auto-download resume
      res = COMMANDS['resume'].response;
      if (executeSideEffects) {
        setTimeout(() => {
          const a = document.createElement('a');
          a.href = process.env.PUBLIC_URL + '/Shubhammenroy26.pdf';
          a.download = 'Shubham_Menroy_Resume.pdf';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }, 300);
      }
    } else if (command === 'projects' || command === 'project') {
      // Handle projects --filter <skill>
      const filterOpt = parsedCommand.options.find(o => o.command === 'filter');
      if (filterOpt) {
        const filterTerm = filterOpt.arg.toLowerCase();
        // Project data for filtering
        const projects = [
          {
            name: 'B2B Banking Microservices Platform',
            company: 'Quantiphi Analytics | July 2022 – May 2025',
            tech: ['java', 'springboot', 'quarkus', 'kubernetes', 'redis', 'mysql', 'aws', 'gcp', 'apigee'],
            bullets: [
              'Built hybrid microservices to replace a SaaS banking platform — saved clients <span class="highlights">~$250K/pa</span>.',
              'Migrated 20+ services from AWS to GCP, consolidated 3 databases, reduced costs by <span class="highlights">5x</span>.',
              'Deployed on Cloud Run + Apigee Gateway for load efficiency and scalability.',
            ]
          },
          {
            name: 'Generic e-Learning Infrastructure (Google Classroom)',
            company: 'Quantiphi Analytics',
            tech: ['google classroom api', 'pub/sub', 'kafka', 'kubernetes', 'docker', 'bigquery', 'redis', 'python'],
            bullets: [
              'Designed a generic infrastructure for any e-learning ecosystem using Google Classroom and hybrid microservices.',
              'Built notification, student, classroom, and assignment management services from scratch.',
            ]
          },
          {
            name: 'Kubernetes Observability CRD (kubebuilder)',
            company: 'Blue Yonder | May 2025 – Present',
            tech: ['kubebuilder', 'fastapi', 'azure', 'kubernetes', 'python'],
            bullets: [
              'Developed CRD for managing observability resources — reduced manual config by <span class="highlights">40%</span>.',
              'Built RESTful APIs using FastAPI for Azure and platform resource orchestration.',
            ]
          },
          {
            name: 'QuestDB — Golang PGWire Test Suite',
            company: 'QuestDB (Open Source)',
            tech: ['go', 'pgwire', 'questdb', 'integration testing', 'open-source'],
            bullets: [
              'Contributed to QuestDB, a high-performance time-series SQL database with 14k+ GitHub stars.',
              'Wrote Golang integration tests using the PGWire protocol to validate database behaviour and improve test coverage for the core engine.',
              '<span class="highlights">PR:</span> <a href="https://github.com/questdb/questdb/pull/6298" target="_blank" style="color: #58a6ff;">github.com/questdb/questdb/pull/6298</a>'
            ]
          },
          {
            name: 'Property CRM App',
            company: 'Personal Project',
            tech: ['spring boot', 'mysql', 'aws s3', 'ec2', 'java'],
            bullets: [
              'Built CRM to manage leads, properties, notifications + 3rd party listing integrations.'
            ]
          },
          {
            name: 'Knowledge Management System',
            company: 'Personal Project',
            tech: ['spring boot', 'sql', 'react', 'java', 'javascript'],
            bullets: [
              'Developed intranet app for sharing technical knowledge across org members.'
            ]
          }
        ];

        const matched = projects.filter(p =>
          p.tech.some(t => t.includes(filterTerm)) || p.name.toLowerCase().includes(filterTerm)
        );

        if (matched.length === 0) {
          res = `<p style='color: #8b949e;'>Filtering ${projects.length} results for "<span class="highlights">${filterOpt.arg}</span>"...</p>
                 <p style='margin-top: 8px; color: #f85149;'>No projects found matching "${filterOpt.arg}". Try: java, python, kubernetes, aws, gcp, redis, fastapi</p>`;
        } else {
          res = `<p style='color: #8b949e;'>Filtering ${projects.length} results for "<span class="highlights">${filterOpt.arg}</span>"...</p>`;
          for (const p of matched) {
            const techBadges = p.tech
              .filter(t => t.includes(filterTerm))
              .map(t => `<span style="display:inline-block; padding:2px 8px; margin:2px 4px 2px 0; border-radius:4px; font-size:12px; background:rgba(88,166,255,.12); border:1px solid rgba(88,166,255,.25); color:#58a6ff;">${t}</span>`)
              .join('');
            const otherBadges = p.tech
              .filter(t => !t.includes(filterTerm))
              .map(t => `<span style="display:inline-block; padding:2px 8px; margin:2px 4px 2px 0; border-radius:4px; font-size:12px; background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.1); color:#8b949e;">${t}</span>`)
              .join('');
            res += `<div style="margin-top:12px; padding:12px 16px; border:1px solid rgba(255,255,255,.08); border-left:3px solid #3fb950; border-radius:8px; background:rgba(255,255,255,.02);">
              <p style="font-weight:500; font-size:15px;">▸ <b>${p.name}</b></p>
              <p style="color:#8b949e; margin-top:2px;">${p.company}</p>
              <p style="margin-top:6px;">${techBadges}${otherBadges}</p>
              <ul style="margin-top:6px;">${p.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
            </div>`;
          }
        }
      } else {
        res = COMMANDS[command === 'projects' ? 'project' : command]?.response || COMMANDS['project'].response;
      }
    } else {
      // Static response from COMMANDS
      res = COMMANDS[command].response;
    }
  }

  return {
    res,
    action,
  };
}
