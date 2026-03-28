/**
 * ========================================
 * PORTFOLIO COMMAND DEFINITIONS
 * ========================================
 * 
 * This file contains all the content for your portfolio commands.
 * Edit the sections below to update your information.
 * 
 * HOW TO EDIT:
 * 1. Find the section you want to update
 * 2. Edit the content between the backticks (`...`)
 * 3. Save the file
 * 4. Run: npm run build
 * 5. Your changes will be live!
 * 
 * HTML TIPS:
 * - <span class="highlights">text</span> = Yellow highlight
 * - <b>text</b> = Bold
 * - Use <dt>, <dd>, <ul>, <li> for lists
 * - Use <table>, <tr>, <td> for tables
 */

// ========================================
// MAIN PORTFOLIO COMMANDS
// ========================================

export const COMMANDS = {

  // -------------------------------------
  // HIRE ME COMMAND
  // -------------------------------------
  hireme: {
    cue: "Hire me / open to work",
    response: `
      <div class="hire-container">
        <div class="hire-header">
          <span class="hire-title">⚡ HIRE_ME</span>
          <span class="open-to-work-badge"><span class="pulse-dot"></span> OPEN TO WORK</span>
        </div>
        
        <p class="hire-intro">I architect backends that scale, migrate systems that save <span style="color: #3fb950">$250K/pa</span>, and write the kind of code your future self won't hate.</p>
        
        <div class="hire-scans">
          <div class="scan-line" style="animation-delay: 0ms"><span class="scan-label">checking availability ............</span> <span style="color: #3fb950">✓ available now</span></div>
          <div class="scan-line" style="animation-delay: 320ms"><span class="scan-label">loading tech stack ...............</span> <span style="color: #3fb950">✓ Spring Boot · Quarkus · FastAPI · Go · Python</span></div>
          <div class="scan-line" style="animation-delay: 640ms"><span class="scan-label">fetching timezone ................</span> <span style="color: #d29922">⚑ IST (UTC+5:30) · async-friendly</span></div>
          <div class="scan-line" style="animation-delay: 960ms"><span class="scan-label">verifying response time ..........</span> <span style="color: #3fb950">✓ replies within 24h</span></div>
        </div>

        <table class="hire-table scan-line" style="animation-delay: 1280ms">
          <tr><td>role</td><td>: <span style="color: #a5d6ff">Backend</span> · Cloud-native · Full-stack</td></tr>
          <tr><td>type</td><td>: <span style="color: #3fb950">Full-time</span> · Open to contract</td></tr>
          <tr><td>location</td><td>: Bengaluru, IN · Remote preferred</td></tr>
          <tr><td>notice_period</td><td>: <span style="color: #d29922">30 days</span></td></tr>
          <tr><td>side_quests</td><td>: open source · fintech · dev-tools · B2B SaaS</td></tr>
        </table>

        <div class="hire-links scan-line" style="animation-delay: 1600ms">
          <a href="mailto:shubhammenroy9672@gmail.com?subject=Let's%20work%20together&body=Hey%20Shubham%2C%20I%20found%20your%20portfolio%20and%20wanted%20to%20reach%20out%20about..." class="hire-btn" style="color:#58a6ff; border-color:rgba(88,166,255,0.35);">✉ Email Me</a>
          <a href="https://www.linkedin.com/in/shubham-menroy-a26468238/" target="_blank" rel="noopener noreferrer" class="hire-btn">in LinkedIn</a>
          <a href="https://github.com/shubham9672" target="_blank" rel="noopener noreferrer" class="hire-btn">gh GitHub</a>
          <a href="/Portfolio/Shubhammenroy26.pdf" target="_blank" download class="hire-btn">↓ resume.pdf</a>
        </div>
      </div>
    `
  },

  // -------------------------------------
  // ABOUT ME
  // Format: <span class="highlights">tagline</span> and <p>paragraph</p>
  // -------------------------------------
  about: {
    cue: "About Me",
    response: `
      <p>
        <span class="highlights">
          Software Developer | Java • Python • SpringBoot • Cloud (AWS/GCP)
        </span>
      </p>
      <p>
        Software Developer with 4 years of experience in building scalable, high-performance software.
        Expertise in Backend development and Cloud (AWS/GCP), with a proven record of optimizing
        system performance and designing robust architectures. Looking for new challenges and career growth opportunities.
      </p>
    `
  },

  // -------------------------------------
  // WORK EXPERIENCE
  // Format: <dt><b>Title - Company</b></dt>
  //         <dd>Date range. (Location)</dd>
  //         <ul><li>Achievement or responsibility</li></ul>
  // -------------------------------------
  experience: {
    cue: "My experience",
    response: `
      <dt><b>Software Developer 2 — Blue Yonder</b></dt>
      <dd>May 2025 — Present. (Bengaluru)</dd>
      <ul>
        <li>Developed CRD using <span class="highlights">kubebuilder</span> for managing observability resources, reducing manual configuration effort by <span class="highlights">40%</span>.</li>
        <li>Built and enhanced RESTful APIs using <span class="highlights">FastAPI</span> to manage Azure, core platform, and observability resources.</li>
        <li>Implemented Git-based CI/CD for deployment, resource creation &amp; env comparisons, significantly improving release reliability.</li>
        <li>Collaborated with cross-functional platform teams to standardize observability and deployment practices.</li>
      </ul>

      <dt><b>Software Developer — Quantiphi Analytics</b></dt>
      <dd>July 2022 — May 2025. (Bengaluru)</dd>
      <ul>
        <li>Developed a B2B application using hybrid microservices to replace a SaaS cloud banking platform, saving clients <span class="highlights">~$250K/pa</span>.</li>
        <li>Architected core services for disbursement, loan and customer management — reduced processing time by <span class="highlights">50%</span>, increased loan disbursement by <span class="highlights">30%</span>.</li>
        <li>Implemented Event-driven architecture, JWT auth, RBAC, idempotency checks, cache management — reduced response time by <span class="highlights">20%</span> and duplicate transactions by <span class="highlights">40%</span>.</li>
        <li>Migrated 20+ microservices from <span class="highlights">AWS to GCP</span>, consolidating 3 databases into one, reducing costs by <span class="highlights">5x</span>.</li>
        <li>Built GitHub CI/CD pipelines that reduced manual effort by <span class="highlights">70%</span> and deployment cycles by <span class="highlights">60%</span>.</li>
        <li>Spearheaded client interactions, documented requirements, conducted code reviews and managed JIRA tickets using Agile.</li>
      </ul>
    `
  },

  // -------------------------------------
  // TECHNICAL SKILLS
  // Format: <table><tr><td>Category:</td><td>Skills</td></tr></table>
  // -------------------------------------
  skill: {
    cue: "My skills",
    response: `
      <table>
        <tr><td>Languages:</td><td>Java, Python, SQL</td></tr>
        <tr><td>Frameworks:</td><td>SpringBoot, Quarkus, FastAPI, Hibernate</td></tr>
        <tr><td>Databases:</td><td>MySQL, SingleStore, Redis, BigQuery, NoSQL</td></tr>
        <tr><td>Version Control:</td><td>GitHub, Bitbucket, GCSR</td></tr>
        <tr><td>Tools &amp; Cloud:</td><td>Docker, Kubernetes, AWS, GCP, Postman, Jira, Git</td></tr>
        <tr><td>Message Brokers:</td><td>PubSub (Kafka), AWS EventBridge</td></tr>
        <tr><td>Core Competencies:</td><td>Data Structures &amp; Algorithms, OOPs, Solid Principles, Design Patterns</td></tr>
        <tr><td>Soft Skills:</td><td>Problem-solving, Communication, Leadership, Agile, Team Collaboration</td></tr>
      </table>
    `
  },

  // -------------------------------------
  // PROJECTS
  // Format: <dt><b>Project name</b></dt>
  //         <dd>Date range</dd>
  //         <ul><li>Detail</li></ul>
  // -------------------------------------
  project: {
    cue: "My projects",
    response: `
      <dt><b>B2B Banking Microservices Platform</b></dt>
      <dd>Quantiphi Analytics | July 2022 – May 2025</dd>
      <ul>
        <li><span class="highlights">Tech:</span> Java, SpringBoot, Quarkus, Kubernetes, Redis, MySQL, AWS, GCP, Apigee</li>
        <li>Built hybrid microservices to replace a SaaS banking platform — saved clients <span class="highlights">~$250K/pa</span>.</li>
        <li>Migrated 20+ services from AWS to GCP, consolidated 3 databases, reduced costs by <span class="highlights">5x</span>.</li>
        <li>Deployed on Cloud Run + Apigee Gateway for load efficiency and scalability.</li>
      </ul>

      <dt><b>Generic e-Learning Infrastructure (Google Classroom)</b></dt>
      <dd>Quantiphi Analytics</dd>
      <ul>
        <li><span class="highlights">Tech:</span> Google Classroom API, Pub/Sub (Kafka), Kubernetes, Docker, BigQuery, Redis</li>
        <li>Designed a generic infrastructure for any e-learning ecosystem using Google Classroom and hybrid microservices.</li>
        <li>Built notification, student, classroom, and assignment management services from scratch.</li>
      </ul>

      <dt><b>Kubernetes Observability CRD (kubebuilder)</b></dt>
      <dd>Blue Yonder | May 2025 – Present</dd>
      <ul>
        <li><span class="highlights">Tech:</span> Kubebuilder, FastAPI, Azure, Kubernetes</li>
        <li>Developed CRD for managing observability resources — reduced manual config by <span class="highlights">40%</span>.</li>
        <li>Built RESTful APIs using FastAPI for Azure and platform resource orchestration.</li>
      </ul>

      <dt><b>QuestDB — Golang PGWire Test Suite</b> <span style="color: #58a6ff; font-size: 11px; border: 1px solid rgba(88,166,255,0.3); border-radius: 4px; padding: 1px 4px; margin-left: 6px; vertical-align: top;">open-source</span></dt>
      <dd>QuestDB</dd>
      <ul>
        <li><span class="highlights">Tech:</span> Go, PGWire, QuestDB, Integration Testing</li>
        <li>Contributed to QuestDB, a high-performance time-series SQL database with 14k+ GitHub stars.</li>
        <li>Wrote Golang integration tests using the PGWire protocol to validate database behaviour and improve test coverage for the core engine.</li>
        <li><span class="highlights">PR:</span> <a href="https://github.com/questdb/questdb/pull/6298" target="_blank" style="color: #58a6ff;">github.com/questdb/questdb/pull/6298</a></li>
      </ul>

      <dt><b>Property CRM App</b> <span style="color: #3fb950; font-size: 11px; border: 1px solid rgba(63,185,80,0.3); border-radius: 4px; padding: 1px 4px; margin-left: 6px; vertical-align: top;">personal</span></dt>
      <dd>CRM to manage leads, properties, and notifications</dd>
      <ul>
        <li><span class="highlights">Tech:</span> Spring Boot, MySQL, AWS S3, EC2</li>
        <li>Built CRM to manage leads, properties, notifications + 3rd party listing integrations.</li>
      </ul>

      <dt><b>Knowledge Management System</b> <span style="color: #3fb950; font-size: 11px; border: 1px solid rgba(63,185,80,0.3); border-radius: 4px; padding: 1px 4px; margin-left: 6px; vertical-align: top;">personal</span></dt>
      <dd>Intranet app for sharing technical knowledge</dd>
      <ul>
        <li><span class="highlights">Tech:</span> Spring Boot, SQL, React</li>
        <li>Developed intranet app for sharing technical knowledge across org members.</li>
      </ul>

    `
  },

  // -------------------------------------
  // OPEN SOURCE
  // -------------------------------------
  opensource: {
    cue: "My open source contributions",
    response: `
      <p style='color: #ffff00; font-weight: 500;'>🌐 Open Source Contributions:</p>
      <ul>
        <li><b>QuestDB:</b> Added Golang integration tests against QuestDB via PGWire protocol. (PR: <a href="https://github.com/questdb/questdb/pull/6298" target="_blank" style="color: #58a6ff;">#6298</a>)</li>
        <li><b>Google Cloud Learning Platform:</b> Core contributor to an official Google open-source e-learning platform. Architected the notification system and contributed across classroom, student, and assignment services. Deployed under GoogleCloudPlatform GitHub org. (Repo: <a href="https://github.com/GoogleCloudPlatform/cloud-learning-platform" target="_blank" style="color: #58a6ff;">GoogleCloudPlatform/cloud-learning-platform</a>). Same LMS built at Quantiphi — now open-source under Google's org.</li>
        <li><b>Hacktoberfest Contributor:</b> 2020, 2021 &amp; 2022 (Digital Ocean).</li>
      </ul>
    `
  },

  // -------------------------------------
  // CERTIFICATIONS
  // Format: <ul><li>Certificate name.</li></ul>
  // -------------------------------------
  /*
  certificate: {
    cue: "Achievements &amp; Recognition",
    response: `
      <ul>
        <li>Successfully contributed to <span class="highlights">Hacktoberfest 20, 21 &amp; 22</span> organized by Digital Ocean and got awarded for the contribution.</li>
        <li>Awarded twice as <span class="highlights">Star Performer</span> and recently as <span class="highlights">Super Ninja</span> at previous organization.</li>
      </ul>
    `
  },
  */

  // -------------------------------------
  // EDUCATION
  // Format: <dt><b>Degree - University</b></dt>
  //         <dd>Date range</dd>
  //         <ul><li>Major or other details</li></ul>
  // -------------------------------------
  education: {
    cue: "My education",
    response: `
      <dt><b>BTech in Computer Science and Engineering — SKIT, Jaipur</b></dt>
      <dd>August 2018 — July 2022</dd>
      <ul>
        <li><span class="highlights">CGPA:</span> 8.0</li>
      </ul>
    `
  },

  // -------------------------------------
  // CONTACT INFORMATION
  // Format: <table><tr><td>Label:</td><td><a target="_blank" rel="noopener noreferrer" href="">value</a></td></tr></table>
  // -------------------------------------
  contact: {
    cue: "How to contact me",
    response: `
      <table>
        <tr>
          <td>Email:</td>
          <td><a target="_blank" rel="noopener noreferrer" href="mailto:shubhammenroy9672@gmail.com" style="text-decoration: none; color:yellow;">shubhammenroy9672@gmail.com</a></td>
        </tr>
        <tr>
          <td>Phone:</td>
          <td><a target="_blank" rel="noopener noreferrer" href="tel:+916375405506" style="text-decoration: none; color:yellow;">+91 6375405506</a></td>
        </tr>
        <tr>
          <td>LinkedIn:</td>
          <td><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shubham-menroy/" style="text-decoration: none; color:yellow;">linkedin.com/in/shubham-menroy</a></td>
        </tr>
      </table>
    `
  },

  // -------------------------------------
  // SOCIAL MEDIA LINKS
  // Format: <table><tr><td>Label:</td><td><a target="_blank" rel="noopener noreferrer" href="">value</a></td></tr></table>
  // -------------------------------------
  social: {
    cue: "My social handles",
    response: `
      <table>
        <tr>
          <td>Email:</td>
          <td><a target="_blank" rel="noopener noreferrer" href="mailto:shubhammenroy9672@gmail.com" style="text-decoration: none; color:yellow;">shubhammenroy9672@gmail.com</a></td>
        </tr>
        <tr>
          <td>Whatsapp:</td>
          <td><a target="_blank" rel="noopener noreferrer" href="tel:+916375405506" style="text-decoration: none; color:yellow;">+91 6375405506</a></td>
        </tr>
        <tr>
          <td>LinkedIn:</td>
          <td><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shubham-menroy-a26468238/" style="text-decoration: none; color:yellow;">linkedin.com/in/shubham-menroy</a></td>
        </tr>
        <tr>
          <td>Github:</td>
          <td><a target="_blank" rel="noopener noreferrer" href="https://github.com/shubham9672" style="text-decoration: none; color:yellow;">github.com/shubham9672</a></td>
        </tr>
      </table>
    `
  },

  resume: {
    cue: "Download my resume 📄",
    response: `
      <p style='color: #3fb950; font-weight: 500;'>📄 Downloading resume...</p>
      <p style='margin-top: 8px;'>If the download didn't start automatically,
        <a target="_blank" rel="noopener noreferrer" href="/Portfolio/Shubhammenroy26.pdf"
           style="text-decoration: none; color: #58a6ff; border-bottom: 1px dotted #58a6ff;">click here</a>.
      </p>
    `
  },

  // ========================================
  // UTILITY COMMANDS
  // (System commands - generally don't need to edit)
  // ========================================

  "": {
    cue: "",
    response: ""
  },

  clear: null,
  help: null,
  man: null,
  projects: null,  // alias for project, supports --filter

  // -------------------------------------
  // KEYBOARD SHORTCUTS INFO
  // -------------------------------------
  shortcuts: {
    cue: "Keyboard shortcuts",
    response: `
      <table>
        <tr>
          <td>Tab</td>
          <td>Autocomplete command</td>
        </tr>
        <tr>
          <td>↑ / ↓</td>
          <td>Navigate command history</td>
        </tr>
        <tr>
          <td>Ctrl+C</td>
          <td>Clear current input</td>
        </tr>
        <tr>
          <td>Ctrl+L</td>
          <td>Clear screen</td>
        </tr>
        <tr>
          <td>Enter</td>
          <td>Execute command</td>
        </tr>
      </table>
      <p style='margin-top: 8px; margin-bottom: 0; color: #888;'>
        💡 Tip: Type partial commands (e.g., 'he' for 'help') and press Tab to autocomplete!
      </p>
    `
  },

  // ========================================
  // FUN & EASTER EGG COMMANDS
  // (These are for entertainment - edit as you like!)
  // ========================================

  // -------------------------------------
  // WELCOME MESSAGE
  // -------------------------------------
  welcome: {
    cue: "Welcome message",
    response: `
      <p style='color: #268bd2; font-weight: 500;'>
        👋 Welcome to Menroy's Terminal Portfolio!
      </p>
      <p style='margin-top: 8px;'>
        This is an interactive terminal-style portfolio. Here are some tips to get started:
      </p>
      <ul style='margin-top: 8px;'>
        <li>Type <span class='highlights'>help</span> to see all available commands</li>
        <li>Use <span class='highlights'>Tab</span> key to autocomplete commands</li>
        <li>Press <span class='highlights'>↑/↓</span> arrows to navigate command history</li>
        <li>Try <span class='highlights'>about</span> to learn more about me</li>
        <li>Type <span class='highlights'>fun</span> to see hidden easter eggs! 🎉</li>
      </ul>
      <p style='margin-top: 8px; color: #888;'>
        Pro tip: This terminal supports fuzzy matching - just type 'ab' instead of 'about'!
      </p>
    `
  },

  // -------------------------------------
  // WHO AM I
  // -------------------------------------
  whoami: {
    cue: "Current user info",
    response: `
      <p style='color: #268bd2;'>menroy@menroy</p>
      <p style='margin-top: 4px;'>
        You are browsing as: <span class='highlights'>Guest User</span>
      </p>
      <p style='margin-top: 4px;'>
        Terminal: <span class='highlights'>Menroy's Portfolio v2.0</span>
      </p>
      <p style='margin-top: 4px;'>
        Shell: <span class='highlights'>bash-style terminal</span>
      </p>
      <p style='margin-top: 4px;'>
        Permissions: <span class='highlights'>read-only</span> (safe mode)
      </p>
    `
  },

  // -------------------------------------
  // DATE (Dynamic - handled in code)
  // -------------------------------------
  date: {
    cue: "Display current date and time",
    response: "" // Dynamically generated in commandService.js
  },

  // -------------------------------------
  // QUOTE (Dynamic - random quotes)
  // -------------------------------------
  quote: {
    cue: "Random inspirational quote",
    response: "" // Dynamically generated from funContent.js
  },

  // -------------------------------------
  // JOKE (Dynamic - random jokes)
  // -------------------------------------
  joke: {
    cue: "Random tech joke",
    response: "" // Dynamically generated from funContent.js
  },

  // -------------------------------------
  // MATRIX EASTER EGG
  // -------------------------------------
  matrix: {
    cue: "Enter the matrix",
    response: `
      <p style='color: #268bd2; font-weight: 500;'>Wake up, Neo...</p>
      <p style='margin-top: 4px; color: #268bd2;'>The Matrix has you...</p>
      <p style='margin-top: 4px;'>Follow the white rabbit. 🐰</p>
      <p style='margin-top: 8px; font-style: italic; color: #888;'>
        Knock, knock, Neo.
      </p>
    `
  },

  // -------------------------------------
  // FUN COMMANDS LIST
  // -------------------------------------
  fun: {
    cue: "List of fun commands",
    response: `
      <p style='color: #268bd2; font-weight: 500;'>
        🎉 Easter Eggs & Fun Commands:
      </p>
      <table style='margin-top: 8px;'>
        <tr><td>whoami</td><td>Who are you?</td></tr>
        <tr><td>date</td><td>Current date and time</td></tr>
        <tr><td>quote</td><td>Random inspirational quote</td></tr>
        <tr><td>joke</td><td>Random tech joke</td></tr>
        <tr><td>matrix</td><td>Enter the Matrix</td></tr>
        <tr><td>banner</td><td>Show ASCII art banner</td></tr>
        <tr><td>tip</td><td>Random productivity tip</td></tr>
        <tr><td>sudo</td><td>Try it and see! 😉</td></tr>
        <tr><td>go</td><td>Do you know Go? 🤔</td></tr>
        <tr><td>java</td><td>Do you know Java? ☕</td></tr>
        <tr><td>python</td><td>Do you know Python? 🐍</td></tr>
      </table>
      <p style='margin-top: 8px; color: #888;'>
        Psst... There might be more hidden commands! Keep exploring!
      </p>
    `
  },

  // -------------------------------------
  // TIP (Dynamic - random tips)
  // -------------------------------------
  tip: {
    cue: "Random productivity tip",
    response: "" // Dynamically generated from funContent.js
  },

  // -------------------------------------
  // SUDO EASTER EGG
  // -------------------------------------
  sudo: {
    cue: "Attempt superuser access",
    response: `
      <p style='color: #ff5555;'>⚠️ Permission denied!</p>
      <p style='margin-top: 4px;'>
        Nice try! But you don't have sudo privileges here. 😄
      </p>
      <p style='margin-top: 4px; color: #888;'>
        This is a safe, read-only environment.
      </p>
      <p style='margin-top: 8px; font-style: italic; color: #888;'>
        "With great power comes great responsibility" - Uncle Ben
      </p>
    `
  },

  // -------------------------------------
  // GO LANGUAGE EASTER EGG
  // -------------------------------------
  go: {
    cue: "Do you know Go? 🤔",
    response: `
      <p style='color: #4ee32c; font-weight: 500;'>🤔 Do I know Go? Let me check...</p>

      <p style='margin-top: 12px; color: #888;'>Scanning skills... Java ✓  Python ✓  SpringBoot ✓  Go...</p>

      <p style='margin-top: 12px;'>Hmm, I've heard of it! Let me try:</p>

      <pre style='margin-top: 8px; background: rgba(255,255,255,0.04); padding: 10px; border-radius: 4px; border-left: 3px solid #4ee32c;'>
<span style='color:#888'>// hello.go</span>
<span style='color:#4edce2'>package</span> main

<span style='color:#4edce2'>import</span> <span style='color:#ffff00'>"fmt"</span>

<span style='color:#4edce2'>func</span> <span style='color:#ff9900'>main</span>() {
    fmt.<span style='color:#ff9900'>Println</span>(<span style='color:#ffff00'>"Hello, World!"</span>)<span style='color:#ff5555'>;</span>
}</pre>

      <p style='margin-top: 10px; color: #ff5555;'>
        ❌ ./hello.go:6:38: syntax error: unexpected semicolon, expecting newline or }
      </p>

      <p style='margin-top: 10px; color: #888; font-style: italic;'>
        😅 Apologies... forgot Go doesn't need semicolons. 4 years of Java will do that to you.
      </p>

      <p style='margin-top: 8px; color: #888; font-style: italic;'>
        My fingers literally auto-type <span style='color:#ff9900'>;</span> at the end of every line. It's a reflex. Send help. 🙏
      </p>

      <p style='margin-top: 12px; color: #4ee32c;'>
        ✅ Skills confirmed: Java, Python, SpringBoot — Go is on the roadmap... right after I unlearn semicolons. 😂
      </p>
    `
  },

  // -------------------------------------
  // JAVA EASTER EGG
  // -------------------------------------
  java: {
    cue: "Do you know Java? ☕",
    response: `
      <p style='color: #3fb950; font-weight: 500;'>☕ Java? That's my mother tongue!</p>

      <p style='margin-top: 12px; color: #8b949e;'>Loading JVM... Please wait 47 seconds... ☕☕☕</p>

      <pre style='margin-top: 8px; background: rgba(255,255,255,0.04); padding: 10px; border-radius: 4px; border-left: 3px solid #d29922;'>
<span style='color:#8b949e'>// HelloWorld.java</span>
<span style='color:#ff7b72'>public</span> <span style='color:#ff7b72'>class</span> <span style='color:#d2a8ff'>HelloWorld</span> {
    <span style='color:#ff7b72'>public static void</span> <span style='color:#d2a8ff'>main</span>(<span style='color:#79c0ff'>String</span>[] args) {
        <span style='color:#79c0ff'>System</span>.out.<span style='color:#d2a8ff'>println</span>(<span style='color:#a5d6ff'>"Hello, World!"</span>);
    }
}</pre>

      <p style='margin-top: 10px; color: #3fb950;'>✅ BUILD SUCCESSFUL in 0.003s</p>

      <p style='margin-top: 10px; color: #8b949e; font-style: italic;'>
        4 years of <span style='color:#d29922'>SpringBoot</span>, <span style='color:#d29922'>Quarkus</span>, and <span style='color:#d29922'>Hibernate</span>.
        I dream in AbstractSingletonProxyFactoryBean. 😴
      </p>

      <p style='margin-top: 8px; color: #8b949e; font-style: italic;'>
        My code has more annotations than logic. @Autowired @Service @Repository @Component @Bean @Configuration... 📚
      </p>

      <p style='margin-top: 12px; color: #3fb950;'>
        ✅ Skills confirmed: Java is not just a language, it's a lifestyle. ☕
      </p>
    `
  },

  // -------------------------------------
  // PYTHON EASTER EGG
  // -------------------------------------
  python: {
    cue: "Do you know Python? 🐍",
    response: `
      <p style='color: #3fb950; font-weight: 500;'>🐍 Python? Say less!</p>

      <p style='margin-top: 12px; color: #8b949e;'>Activating virtual env... <span style='color:#3fb950'>(venv)</span> ready!</p>

      <pre style='margin-top: 8px; background: rgba(255,255,255,0.04); padding: 10px; border-radius: 4px; border-left: 3px solid #3572A5;'>
<span style='color:#8b949e'># hello.py</span>
<span style='color:#ff7b72'>def</span> <span style='color:#d2a8ff'>greet</span>():
    <span style='color:#ff7b72'>print</span>(<span style='color:#a5d6ff'>"Hello, World!"</span>)
    <span style='color:#ff7b72'>print</span>(<span style='color:#a5d6ff'>"Also, tabs vs spaces? I use tabs."</span>)  <span style='color:#f85149'># fight me</span>

greet()</pre>

      <p style='margin-top: 10px; color: #f85149;'>
        ⚠️ PEP 8 Warning: Use 4 spaces per indentation level, not tabs.
      </p>

      <p style='margin-top: 10px; color: #8b949e; font-style: italic;'>
        Built high-performance APIs with <span style='color:#d29922'>FastAPI</span> — because Flask was too slow and Django was too opinionated. 🏎️
      </p>

      <p style='margin-top: 8px; color: #8b949e; font-style: italic;'>
        <span style='color:#d29922'>import antigravity</span> — Yes, that's a real Python module. Try it. 🚀
      </p>

      <p style='margin-top: 12px; color: #3fb950;'>
        ✅ Skills confirmed: Python + FastAPI + scripting ninja. Life is short, use Python! 🐍
      </p>
    `
  },

  // -------------------------------------
  // BANNER - ASCII ART
  // -------------------------------------
  banner: {
    cue: "Display ASCII art banner",
    response: `
      <pre style='color: #268bd2;'>
 ███╗   ███╗███████╗███╗   ██╗██████╗  ██████╗ ██╗   ██╗
 ████╗ ████║██╔════╝████╗  ██║██╔══██╗██╔═══██╗╚██╗ ██╔╝
 ██╔████╔██║█████╗  ██╔██╗ ██║██████╔╝██║   ██║ ╚████╔╝ 
 ██║╚██╔╝██║██╔══╝  ██║╚██╗██║██╔══██╗██║   ██║  ╚██╔╝  
 ██║ ╚═╝ ██║███████╗██║ ╚████║██║  ██║╚██████╔╝   ██║   
 ╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝    ╚═╝   </pre>
      <p style='margin-top: 8px; color: #888;'>
        ASCII art banner - Making terminals beautiful since 1963! 🎨
      </p>
    `
  },

  // -------------------------------------
  // PET INTERACTION COMMANDS
  // -------------------------------------
  play: {
    cue: "Play with the terminal pet 🎾",
    response: `<p style='color: #4ee32c;'>🎾 You threw a ball! Watch the pet fetch it...</p>`
  },

  feed: {
    cue: "Feed the terminal pet 🍖",
    response: `<p style='color: #4ee32c;'>🍖 You fed the pet! It's happily munching away~</p>`
  },

  // -------------------------------------
  // ALIASES
  // -------------------------------------
  oss: null,
  man: null
};

// ========================================
// COMMAND ACTIONS
// (For future dynamic functionality)
// ========================================
export const COMMAND_ACTIONS = {
  // Reserved for future use
  // Example: openLink: (url) => window.open(url, '_blank')
};

/**
 * ========================================
 * EDITING GUIDE
 * ========================================
 * 
 * QUICK REFERENCE:
 * 
 * To add highlights (yellow text):
 *   <span class="highlights">your text</span>
 * 
 * To make text bold:
 *   <b>your text</b>
 * 
 * Experience / Projects / Education (list per item):
 *   <dt><b>Title or name</b></dt>
 *   <dd>Date or date range. (Optional: location)</dd>
 *   <ul>
 *     <li>Point 1</li>
 *     <li>Point 2</li>
 *   </ul>
 * 
 * To create a table (for skills/contact):
 *   <table>
 *     <tr>
 *       <td>Label:</td>
 *       <td>Value</td>
 *     </tr>
 *   </table>
 * 
 * To add a link:
 *   <a target="_blank" rel="noopener noreferrer" href="url" style="text-decoration: none; color:yellow;">
 *     Link Text
 *   </a>
 * 
 * AFTER EDITING:
 * 1. Save this file
 * 2. Run: npm run build
 * 3. Your changes will appear in the terminal!
 * 
 * ========================================
 */
