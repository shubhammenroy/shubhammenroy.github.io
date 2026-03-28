/**
 * Fun content utilities for easter egg commands
 * Provides random quotes, jokes, and tips
 */

// Inspirational quotes - Networking & Development focused
export const QUOTES = [
  { text: "The network is the computer.", author: "John Gage, Sun Microsystems" },
  { text: "In a world of distributed computing, the network is the heart of the system.", author: "Eric Schmidt" },
  { text: "Network automation is not about replacing people, it's about making them more productive.", author: "Network Engineering Wisdom" },
  { text: "The goal is to turn data into information, and information into insight.", author: "Carly Fiorina" },
  { text: "Software is eating the world, but the network is the plate.", author: "Modern IT Philosophy" },
  { text: "In data centers, redundancy isn't paranoia—it's the minimum requirement.", author: "Data Center Best Practices" },
  { text: "Automation is not about replacing engineers; it's about freeing them to solve harder problems.", author: "DevOps Philosophy" },
  { text: "The network should be invisible, just like electricity. You flip a switch and it works.", author: "Networking Ideals" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Good network design is like good plumbing—nobody notices it until something breaks.", author: "Network Architecture Wisdom" },
  { text: "In networking, complexity is the enemy of reliability.", author: "KISS Principle" },
  { text: "The cloud is just someone else's data center.", author: "Tech Industry Reality" },
  { text: "Latency is the enemy. Bandwidth is negotiable. Packet loss is unacceptable.", author: "Network Performance Rules" },
  { text: "A network that works 99% of the time is down 3.65 days per year. Plan accordingly.", author: "SLA Mathematics" },
  { text: "The best network is the one you don't have to think about.", author: "Network Engineering Goal" }
];

// Networking & Data Center jokes
export const JOKES = [
  { setup: "Why did the network engineer go broke?", punchline: "Because he lost his cache and couldn't find his gateway! 💸" },
  { setup: "What's a network engineer's favorite type of music?", punchline: "Heavy routing! 🎸" },
  { setup: "Why do network packets go to therapy?", punchline: "Because they have too many hops and need to find their destination! 📦" },
  { setup: "How do you comfort a sad network switch?", punchline: "You tell it not to worry, it's just a switching phase! 🔄" },
  { setup: "Why don't network engineers like beaches?", punchline: "Too much packet loss in the air! 🏖️" },
  { setup: "What did the router say to the doctor?", punchline: "It hurts when IP! 🏥" },
  { setup: "Why did the data center technician get cold?", punchline: "Because of all the server fans blowing! ❄️" },
  { setup: "How does a network engineer break up with their partner?", punchline: "Sorry, but our connection has timed out! 💔" },
  { setup: "Why was the firewall invited to every party?", punchline: "Because it knew how to block the unwanted guests! 🎉" },
  { setup: "What's a network engineer's favorite exercise?", punchline: "Subnet-ting! 🏋️" },
  { setup: "Why did the BGP route fail its exam?", punchline: "It couldn't find the best path! 📚" },
  { setup: "How do data centers stay cool?", punchline: "They have plenty of fans in the server room! 😎" },
  { setup: "Why don't routers ever get lost?", punchline: "They always know the route! 🗺️" },
  { setup: "What do you call a network that's always working?", punchline: "An impossible dream! 😄" },
  { setup: "Why did the network cable go to school?", punchline: "To improve its bandwidth! 🎓" },
  { setup: "What's a VLAN's favorite game?", punchline: "Tag! You're isolated! 🏃" },
  { setup: "Why was the network engineer always tired?", punchline: "Too many late-night routing updates! 😴" },
  { setup: "How do switches communicate?", punchline: "Through their MAC addresses! 📬" }
];

// Productivity tips
export const TIPS = [
  "Use Tab completion to speed up your workflow! Just type the first few letters and press Tab.",
  "Press Ctrl+L to quickly clear the terminal screen instead of typing 'clear'.",
  "Use arrow keys (↑/↓) to navigate through your command history.",
  "Try fuzzy matching! Type 'sk' instead of 'skill' - the terminal understands!",
  "Bookmark commands in your browser by copying the URL - it saves your command history!",
  "Type 'help' anytime to see all available commands organized by category.",
  "Use Ctrl+C to quickly clear your current input without submitting.",
  "Explore the 'fun' commands for hidden easter eggs and entertaining content!",
  "Check out the 'shortcuts' command to learn all keyboard shortcuts.",
  "The terminal saves your progress locally - your last session will be remembered!"
];

/**
 * Get a random quote
 * @returns {object} Quote object with text and author
 */
export const getRandomQuote = () => {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
};

/**
 * Get a random joke
 * @returns {object} Joke object with setup and punchline
 */
export const getRandomJoke = () => {
  return JOKES[Math.floor(Math.random() * JOKES.length)];
};

/**
 * Get a random tip
 * @returns {string} Productivity tip
 */
export const getRandomTip = () => {
  return TIPS[Math.floor(Math.random() * TIPS.length)];
};

/**
 * Format quote for terminal display
 * @param {object} quote - Quote object
 * @returns {string} HTML formatted quote
 */
export const formatQuote = (quote) => {
  return `<p style='color: #ffff00; font-style: italic;'>"${quote.text}" - ${quote.author}</p><p style='margin-top: 8px; color: #888;'>💡 Type 'quote' again for another quote!</p>`;
};

/**
 * Format joke for terminal display
 * @param {object} joke - Joke object
 * @returns {string} HTML formatted joke
 */
export const formatJoke = (joke) => {
  return `<p style='color: #ffff00;'>${joke.setup}</p><p style='margin-top: 4px; color: #4ee32c;'>${joke.punchline}</p><p style='margin-top: 8px; color: #888;'>😄 Type 'joke' again for more laughs!</p>`;
};

/**
 * Format tip for terminal display
 * @param {string} tip - Tip text
 * @returns {string} HTML formatted tip
 */
export const formatTip = (tip) => {
  return `<p style='color: #3b78ff;'>💡 <span style='font-weight: 500;'>Pro Tip:</span></p><p style='margin-top: 4px;'>${tip}</p><p style='margin-top: 8px; color: #888;'>Type 'tip' again for more productivity tips!</p>`;
};
