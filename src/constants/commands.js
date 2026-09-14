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
        
        <p class="hire-intro">I design backends that scale and migrate systems that save <span style="color: #3fb950">$250K/pa</span>.</p>
        
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
          <a href="mailto:menroy.shubham@gmail.com?subject=Let's%20work%20together&body=Hey%20Shubham%2C%20I%20found%20your%20portfolio%20and%20wanted%20to%20reach%20out%20about..." class="hire-btn" style="color:#58a6ff; border-color:rgba(88,166,255,0.35);">✉ Email Me</a>
          <a href="https://www.linkedin.com/in/shubham-menroy-a26468238/" target="_blank" rel="noopener noreferrer" class="hire-btn">in LinkedIn</a>
          <a href="https://github.com/shubhammenroy" target="_blank" rel="noopener noreferrer" class="hire-btn">gh GitHub</a>
          <a href="${process.env.PUBLIC_URL || ''}/Shubhammenroy26.pdf" target="_blank" download class="hire-btn">↓ resume.pdf</a>
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
          Senior Software Engineer | Java • Python • Go • Cloud (AWS/GCP/Azure)
        </span>
      </p>
      <p>
        Software Engineer with 4.6 years of experience building distributed systems and microservices
        in Java and Python across AWS, GCP, and Azure. Delivered a <span class="highlights">5x</span> infrastructure
        cost reduction through database consolidation and cloud migration, and led a production go-live
        with <span class="highlights">99.999%</span> system availability. Experienced with Spring Boot, Quarkus,
        Kubernetes, Docker, SQL, and NoSQL databases.
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
      <dt><b>Senior Software Engineer — Blue Yonder</b></dt>
      <dd>May 2025 — Present. (Bengaluru)</dd>
      <ul>
        <li>Cut Elasticsearch load by <span class="highlights">30%</span> and costs by <span class="highlights">40%</span> with a Go Fiber log-export service supporting files up to 10GB+, using HATEOAS part links and chunked streaming via goroutines at 50 RPS.</li>
        <li>Built REST APIs (~60 RPS, async fire-and-forget provisioning) for Cloud/Kubernetes provisioning, cutting deployment time by <span class="highlights">70%</span> and recovery time by <span class="highlights">90%</span>, with Keycloak OAuth 2.0 and Postgres-based spec storage.</li>
        <li>Reduced manual setup effort by <span class="highlights">80%</span> with Python CLI tools (Poetry) that generate required files and resources for different runtimes in a single command.</li>
        <li>Standardized releases with a versioned CI pipeline for Helm packaging and image builds.</li>
        <li>Cut manual deployment work by <span class="highlights">80%</span> with GitOps pipelines (ArgoCD) and Kubebuilder CRD operators in Go for core, observability, and Azure resources.</li>
        <li>Resolved production incidents within a 4-hour SLA as L4 support, debugging APIs, Kubernetes resources, and Elasticsearch using logs, Kibana dashboards, and alerts.</li>
        <li>Built a third-party integration service to collect OpenTelemetry with configurable sampling rates.</li>
        <li>Implemented monitoring for 13+ Azure resource types, 100+ subscriptions, and MongoDB resources using Kubernetes, Helm, and Elastic Agent.</li>
        <li>Cut system backpressure by <span class="highlights">80%</span> with a distributed telemetry pipeline (Logstash/OTel collectors) across Kubernetes clusters, integrated with Kafka at 80K events/sec.</li>
        <li>Achieved <span class="highlights">95%</span> test coverage across Python CLI, FastAPI, and Go Fiber services using Pytest and Behave.</li>
        <li>Maintained documentation, FAQs, and troubleshooting runbooks used by 1,000+ developers.</li>
        <li>Collaborated with cross-functional platform teams to standardize observability and deployment practices.</li>
      </ul>

      <dt><b>Software Developer — Quantiphi</b></dt>
      <dd>July 2022 — April 2025. (Bengaluru)</dd>
      <ul>
        <li>Developed a B2B application using a hybrid microservices architecture (Quarkus/Spring Boot) to replace a SaaS cloud banking platform, saving clients <span class="highlights">~$250K/pa</span>.</li>
        <li>Designed disbursement, loan, and customer-management services from scratch (~200 RPS at the API layer), reducing processing time by <span class="highlights">50%</span> and increasing loan disbursement by <span class="highlights">60%</span>.</li>
        <li>Implemented event-driven disbursement (GCP Pub/Sub), idempotency via a loan-ID keyed table, JWT auth, RBAC, scheduled jobs, cache management, and audit logging — cutting duplicate transactions by <span class="highlights">40%</span> and response time by <span class="highlights">20%</span>.</li>
        <li>Achieved <span class="highlights">85%</span> test coverage across Quarkus/Spring Boot microservices using JUnit, Mockito, and Testcontainers.</li>
        <li>Led the end-to-end production go-live, with <span class="highlights">99.999%</span> availability and no business disruption.</li>
        <li>Built GitHub CI/CD pipelines that reduced manual effort by <span class="highlights">70%</span> and deployment cycles by <span class="highlights">60%</span>.</li>
        <li>Migrated 20+ microservices from <span class="highlights">AWS to GCP</span> and consolidated 3 SQL/NoSQL databases into SingleStore, reducing costs by <span class="highlights">5x</span> and improving scalability with Cloud Run.</li>
        <li>Designed a FastAPI e-learning platform integrating Google Classroom, with notification, user, and assignment services on Kubernetes/Helm, Redis (1-hour TTL), GCP Pub/Sub, and BigQuery.</li>
        <li>Led client discussions, collaborated with junior developers, conducted code reviews, and managed Jira tickets in an Agile process.</li>
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
        <tr><td>Languages:</td><td>Java, Python, Golang, SQL</td></tr>
        <tr><td>Frameworks:</td><td>Spring Boot, Quarkus, FastAPI, Fiber (Golang), Hibernate, JUnit, Mockito, Pytest, Poetry</td></tr>
        <tr><td>Cloud Platforms:</td><td>AWS, GCP, Azure</td></tr>
        <tr><td>Databases:</td><td>MySQL, SingleStore, Redis, BigQuery, Elasticsearch, NoSQL</td></tr>
        <tr><td>DevOps &amp; Infrastructure:</td><td>Docker, Kubernetes, Helm, GitOps, IaC, ArgoCD, CI/CD</td></tr>
        <tr><td>Observability &amp; Monitoring:</td><td>OpenTelemetry, Logstash, Kibana, Prometheus</td></tr>
        <tr><td>Tools/IDEs:</td><td>Postman, Jira, VS Code, IntelliJ IDEA, Cursor, K9s</td></tr>
        <tr><td>Message Brokers:</td><td>Kafka, Google Pub/Sub, Event Hub, Event Grid</td></tr>
        <tr><td>Core Competencies:</td><td>System Design, Distributed Systems, Multithreading, Design Patterns, Shell Scripting</td></tr>
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
      <dt><b>Billing and Inventory Management System</b></dt>
      <dd>Warehouse Management System</dd>
      <ul>
        <li><span class="highlights">Tech:</span> Spring Boot, MySQL, AWS S3, EC2</li>
        <li>Built a Warehouse Management System to manage inventory, orders, and shipments.</li>
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
        <li>Built a CRM to manage leads, properties, notifications, and third-party listing integrations.</li>
      </ul>

      <dt><b>Knowledge Management System</b> <span style="color: #3fb950; font-size: 11px; border: 1px solid rgba(63,185,80,0.3); border-radius: 4px; padding: 1px 4px; margin-left: 6px; vertical-align: top;">personal</span></dt>
      <dd>Intranet app for sharing technical knowledge</dd>
      <ul>
        <li><span class="highlights">Tech:</span> Spring Boot, SQL, React</li>
        <li>Developed an intranet app for sharing technical knowledge across organisation members.</li>
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
        <li><b>QuestDB:</b> Added Go integration tests against QuestDB via the PGWire protocol. (PR: <a href="https://github.com/questdb/questdb/pull/6298" target="_blank" style="color: #58a6ff;">#6298</a>)</li>
        <li><b>Google Cloud Learning Platform:</b> Core contributor to an official Google open-source e-learning platform. Designed the notification system and contributed to classroom, student, and assignment services. Deployed under the GoogleCloudPlatform GitHub organisation. (Repo: <a href="https://github.com/GoogleCloudPlatform/cloud-learning-platform" target="_blank" style="color: #58a6ff;">GoogleCloudPlatform/cloud-learning-platform</a>). Same LMS built at Quantiphi; now open-source under Google's organisation.</li>
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
          <td><a target="_blank" rel="noopener noreferrer" href="mailto:menroy.shubham@gmail.com" style="text-decoration: none; color:yellow;">menroy.shubham@gmail.com</a></td>
        </tr>
        <tr>
          <td>Phone:</td>
          <td><a target="_blank" rel="noopener noreferrer" href="tel:+919672180700" style="text-decoration: none; color:yellow;">+91-9672180700</a></td>
        </tr>
        <tr>
          <td>GitHub:</td>
          <td><a target="_blank" rel="noopener noreferrer" href="https://github.com/shubhammenroy" style="text-decoration: none; color:yellow;">github.com/shubhammenroy</a></td>
        </tr>
        <tr>
          <td>LinkedIn:</td>
          <td><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shubham-menroy-a26468238/" style="text-decoration: none; color:yellow;">linkedin.com/in/shubham-menroy-a26468238</a></td>
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
          <td><a target="_blank" rel="noopener noreferrer" href="mailto:menroy.shubham@gmail.com" style="text-decoration: none; color:yellow;">menroy.shubham@gmail.com</a></td>
        </tr>
        <tr>
          <td>WhatsApp:</td>
          <td><a target="_blank" rel="noopener noreferrer" href="tel:+919672180700" style="text-decoration: none; color:yellow;">+91-9672180700</a></td>
        </tr>
        <tr>
          <td>LinkedIn:</td>
          <td><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shubham-menroy-a26468238/" style="text-decoration: none; color:yellow;">linkedin.com/in/shubham-menroy-a26468238</a></td>
        </tr>
        <tr>
          <td>GitHub:</td>
          <td><a target="_blank" rel="noopener noreferrer" href="https://github.com/shubhammenroy" style="text-decoration: none; color:yellow;">github.com/shubhammenroy</a></td>
        </tr>
      </table>
    `
  },

  resume: {
    cue: "Download my resume 📄",
    response: `
      <p style='color: #3fb950; font-weight: 500;'>📄 Downloading resume...</p>
      <p style='margin-top: 8px;'>If the download didn't start automatically,
        <a target="_blank" rel="noopener noreferrer" href="${process.env.PUBLIC_URL || ''}/Shubhammenroy26.pdf"
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

      <p style='margin-top: 12px; color: #888;'>Scanning skills... Java ✓  Python ✓  Spring Boot ✓  Go ✓</p>

      <p style='margin-top: 12px;'>Yes. Muscle memory still adds Java semicolons:</p>

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
        😅 Apologies... forgot Go doesn't need semicolons. 4.6 years of Java will do that to you.
      </p>

      <p style='margin-top: 8px; color: #888; font-style: italic;'>
        My fingers literally auto-type <span style='color:#ff9900'>;</span> at the end of every line. It's a reflex. Send help. 🙏
      </p>

      <p style='margin-top: 12px; color: #4ee32c;'>
        ✅ Skills confirmed: Java, Python, Spring Boot, Go (Fiber, Kubebuilder) — still unlearning the semicolon reflex. 😂
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
        4.6 years of <span style='color:#d29922'>Spring Boot</span>, <span style='color:#d29922'>Quarkus</span>, and <span style='color:#d29922'>Hibernate</span>.
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
        Built APIs with <span style='color:#d29922'>FastAPI</span> — because Flask was too slow and Django was too opinionated. 🏎️
      </p>

      <p style='margin-top: 8px; color: #8b949e; font-style: italic;'>
        <span style='color:#d29922'>import antigravity</span> — Yes, that's a real Python module. Try it. 🚀
      </p>

      <p style='margin-top: 12px; color: #3fb950;'>
        ✅ Skills confirmed: Python, FastAPI, and CLI tooling. Life is short, use Python! 🐍
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
