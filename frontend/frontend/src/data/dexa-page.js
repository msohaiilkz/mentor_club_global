export const dexaProblems = [
  "Users do not know which workflow to use",
  "Data sits across portals, documents, dashboards, and spreadsheets",
  "Rules are known by people, not embedded into systems",
  "Claims, payments, policies, tasks, approvals, and exceptions require too much manual coordination",
  "AI answers are risky when not grounded in approved knowledge",
  "Agents become unsafe when they act without governance",
  "Finance, HR, operations, claims, and sales teams lose time explaining the same things repeatedly",
  "Leaders receive summaries late",
  "Users need guidance inside the workflow, not after the workflow fails",
  "Enterprises need audit logs, confidence scores, approvals, and governance",
];

export const dexaWhatIs = [
  {
    title: "Context Understanding",
    desc: "DEXA identifies user role, intent, workflow state, system context, conversation history, and permissions before processing any request.",
  },
  {
    title: "Knowledge Retrieval",
    desc: "DEXA retrieves answers from approved knowledge bases, SOPs, policies, benefit rules, insurance rules, finance rules, and version-controlled documents.",
  },
  {
    title: "Rules Based Reasoning",
    desc: "DEXA applies deterministic business rules including eligibility, approval, escalation, payment, underwriting, and compliance logic.",
  },
  {
    title: "Workflow Orchestration",
    desc: "DEXA routes tasks to the right workflow including claims, quotes, payments, reconciliation, payroll, and service requests.",
  },
  {
    title: "Agent Coordination",
    desc: "DEXA delegates complex multi-step tasks to specialist AI agents and supervises their execution with validation and retry logic.",
  },
  {
    title: "Operational Monitoring",
    desc: "DEXA tracks agent health, workflow status, confidence scores, failure rates, escalation rates, and user feedback in real time.",
  },
  {
    title: "Governance and Audit",
    desc: "DEXA enforces role-based access, logs every action, records every response, checks permissions, and maintains complete audit trails.",
  },
  {
    title: "Action Execution",
    desc: "DEXA turns approved decisions into tasks, alerts, approvals, dashboard updates, provider instructions, claim status changes, and auditable next steps.",
  },
];

export const dexaWhatIsNot = [
  {
    title: "Not just a chatbot",
    desc: "DEXA processes information across systems, APIs, workflows, and agents. A chatbot only answers questions in a conversation window.",
  },
  {
    title: "Not only AI agents",
    desc: "DEXA orchestrates agents as one capability. It also retrieves knowledge, applies rules, monitors workflows, and enforces governance.",
  },
  {
    title: "Not only healthcare",
    desc: "DEXA powers intelligence across healthcare, insurance, fintech, AI infrastructure, and company operating systems.",
  },
  {
    title: "Not a diagnosis engine",
    desc: "DEXA does not diagnose medical conditions. It guides users through workflows, benefits, claims, and administrative processes.",
  },
  {
    title: "Not uncontrolled automation",
    desc: "DEXA operates inside approved rules, permissions, knowledge, and human approval gates. It does not act without governance.",
  },
  {
    title: "Not one product feature",
    desc: "DEXA is the intelligence processing engine behind the entire Mentor Global ecosystem, not a feature inside one product.",
  },
];

export const dexaThinkingChain = [
  "User asks",
  "DEXA identifies role",
  "DEXA checks permissions",
  "DEXA understands context",
  "DEXA retrieves approved knowledge",
  "DEXA applies rules",
  "DEXA checks system state",
  "DEXA selects workflow",
  "DEXA coordinates agent or tool",
  "DEXA recommends next action",
  "Human approves where needed",
  "DEXA logs everything",
  "DEXA monitors outcome",
];

export const dexaOperatingStages = [
  {
    stage: "Understand",
    desc: "DEXA identifies who is asking, what they need, what system state exists, what permissions they have, and what context surrounds the request.",
  },
  {
    stage: "Reason",
    desc: "DEXA retrieves approved knowledge, applies business rules, checks eligibility, evaluates confidence, and determines the best course of action.",
  },
  {
    stage: "Act",
    desc: "DEXA triggers the appropriate workflow, coordinates agents, calls tools and APIs, updates systems, and delivers the response or action to the user.",
  },
  {
    stage: "Govern",
    desc: "DEXA logs every step, enforces approval gates, checks confidence scores, routes sensitive decisions to humans, and feeds outcomes back for improvement.",
  },
];

export const dexaPillarPanels = [
  {
    name: "Healthcare Infrastructure",
    items: [
      "Benefit explanation",
      "OPD and IPD eligibility",
      "Claim status explanation",
      "Missing document detection",
      "Provider navigation",
      "Wallet and pool explanation",
      "Health credit guidance",
      "HR and employee support",
      "Internal claims summaries",
      "Escalation routing",
    ],
    example: {
      question:
        "Can I use Aga Khan Hospital for OPD without paying at the counter?",
      context:
        "DEXA checks benefit rules, wallet limit, provider eligibility, authorization rules, and user profile before guiding the employee.",
    },
  },
  {
    name: "Insurance Infrastructure",
    items: [
      "Quote intake",
      "Product recommendation",
      "Broker guidance",
      "Risk discovery",
      "Underwriting summary",
      "Policy explanation",
      "Claims guidance",
      "Renewal prompts",
      "Reinsurance summaries",
      "Service center routing",
    ],
    example: {
      question: "Why is this business insurance case flagged?",
      context:
        "DEXA checks questionnaire, claim history, documents, risk category, underwriting rules, and approval pathway.",
    },
  },
  {
    name: "Fintech Infrastructure",
    items: [
      "Wallet explanation",
      "Mentor Card support",
      "Payment failure diagnosis",
      "Settlement delay explanation",
      "Reconciliation summary",
      "Payroll exception guidance",
      "Corporate expense support",
      "Credit eligibility explanation",
      "Provider payable support",
      "Finance reporting",
    ],
    example: {
      question: "Why is today's settlement mismatch 42,000?",
      context:
        "DEXA checks ledger entries, invoices, settlement file, claim approval status, and payment records.",
    },
  },
  {
    name: "AI Infrastructure",
    items: [
      "Agent orchestration",
      "RAG knowledge retrieval",
      "Rules engine coordination",
      "Workflow routing",
      "Human approval gates",
      "Confidence scoring",
      "Tool and API calling",
      "Monitoring",
      "Audit logging",
      "Feedback loops",
    ],
    example: {
      question: "Which AI workflows are failing most this week?",
      context:
        "DEXA checks workflow logs, agent performance, escalation rates, confidence scores, and unresolved cases.",
    },
  },
  {
    name: "Company Operating Infrastructure",
    items: [
      "CEO questions",
      "CRM intelligence",
      "Team performance analysis",
      "Work Intelligence",
      "Growth OS coaching",
      "Project risk detection",
      "Training recommendations",
      "HR support",
      "Finance summaries",
      "Operational exception routing",
    ],
    example: {
      question: "Why is the insurance team behind target?",
      context:
        "DEXA checks pipeline, meetings, proposal follow ups, conversion, margin target, and task discipline.",
    },
  },
];

export const dexaChannels = [
  "Website DEXA",
  "Corporate Portal DEXA",
  "Employee App DEXA",
  "Provider Portal DEXA",
  "Insurance Portal DEXA",
  "Finance Portal DEXA",
  "Operating System DEXA",
  "Admin Console DEXA",
];

export const dexaInterfaceTypes = [
  "Chat panel",
  "Guided wizard",
  "Recommendation engine",
  "Insight cards",
  "Action buttons",
  "Report generator",
  "Document assistant",
  "Dashboard side panel",
  "Approval queue",
  "Workflow navigator",
  "Admin console",
  "API assistant",
  "Voice ready assistant where applicable",
  "Video guided assistant where applicable",
];

export const dexaIntelligenceLayers = [
  {
    name: "Identity and Permission Layer",
    desc: "Authenticates users, validates roles, checks tenant access, and enforces permission boundaries before any intelligence processing begins.",
  },
  {
    name: "Context Layer",
    desc: "Captures user intent, workflow state, conversation history, system signals, entity recognition, business context, and channel information.",
  },
  {
    name: "Knowledge Layer",
    desc: "Retrieves answers from approved knowledge bases, SOPs, policies, product documentation, regulatory references, and client-specific content using RAG.",
  },
  {
    name: "Rules Engine",
    desc: "Applies deterministic business logic including benefit rules, claim rules, payment rules, underwriting rules, approval rules, and compliance boundaries.",
  },
  {
    name: "Reasoning Layer",
    desc: "Combines context, knowledge, and rules to produce intelligent responses with confidence scoring and source grounding.",
  },
  {
    name: "Agent Orchestration Layer",
    desc: "Routes complex multi-step tasks to specialist AI agents, manages agent collaboration, validates outputs, and handles failures.",
  },
  {
    name: "Workflow and API Layer",
    desc: "Triggers approved actions including system updates, document processing, ticket creation, payment checks, and portal updates via internal and external APIs.",
  },
  {
    name: "Monitoring and Governance Layer",
    desc: "Tracks agent health, response quality, confidence scores, audit logs, human approvals, escalation rates, and feeds improvements back into the system.",
  },
];

export const dexaAgentGroups = [
  {
    group: "Product Creation Agents",
    agents: [
      {
        name: "Intro Agent",
        desc: "Captures founder or client intent, understands the problem space, and gathers initial context for product creation.",
      },
      {
        name: "Recommendation Model",
        desc: "Analyzes the idea against existing modules, market patterns, and technology capabilities to suggest optimal product direction.",
      },
      {
        name: "Technical Discovery Agent",
        desc: "Collects detailed technical requirements, maps user roles, defines workflows, and structures the complete product scope.",
      },
    ],
  },
  {
    group: "Execution Agents",
    agents: [
      {
        name: "Full Stack Development Agent",
        desc: "Coordinates frontend, backend, API, database, and workflow development tasks based on approved scope.",
      },
      {
        name: "Tester Deployer Agent",
        desc: "Executes testing workflows, identifies bugs, validates functionality, and manages deployment with human approval gates.",
      },
      {
        name: "Integration & Infrastructure Agent",
        desc: "Connects APIs, configures environments, provisions infrastructure, and ensures secure, reliable interoperability across systems before go-live.",
      },
    ],
  },
  {
    group: "Business Enablement Agents",
    agents: [
      {
        name: "KYC Lawyer Agent",
        desc: "Supports compliance documentation, business registration preparation, legal document drafting, and regulatory requirements.",
      },
      {
        name: "Digital Marketer Agent",
        desc: "Creates marketing content, social media plans, launch strategies, and customer acquisition frameworks.",
      },
      {
        name: "Design Engine AI",
        desc: "Generates UI/UX designs, brand assets, visual systems, and interface layouts aligned with brand guidelines.",
      },
    ],
  },
];

export const governanceCards = [
  "Role based access",
  "Tenant separation",
  "Approved knowledge retrieval",
  "Source grounded answers",
  "Deterministic rules engine",
  "Human approval gates",
  "Confidence scoring",
  "Audit logs",
  "Tool action logs",
  "API call logs",
  "Data masking",
  "Escalation routing",
  "Safe fallback",
  "Admin controls",
  "Monitoring dashboard",
  "Feedback loop",
];

export const approvalQueues = [
  "Claim escalation",
  "Underwriting review",
  "Payment approval",
  "Reconciliation exception",
  "Payroll approval",
  "Expense approval",
  "HR action",
  "Legal review",
  "Compliance review",
  "Client communication",
  "Software deployment",
  "Provider exception",
  "Reinsurance recovery review",
  "Executive decision",
];

export const dexaFullScenarios = [
  {
    domain: "Healthcare Infrastructure",
    userRole: "Employee",
    question: "Why is my claim on hold?",
    checks:
      "DEXA checks claim status, uploaded documents, benefit rules, missing document list, workflow stage.",
    answer:
      "Your claim is on hold because the prescription document is missing. Please upload the prescription so the claims team can continue review.",
    actions: ["Upload Document", "View Claim", "Escalate to Claims Team"],
    approval:
      "No approval needed for document upload. Human review required for claim decision.",
  },
  {
    domain: "Insurance Infrastructure",
    userRole: "Underwriter",
    question: "Why is this business insurance case flagged?",
    checks:
      "DEXA checks risk questionnaire, claim history, business category, missing documents, underwriting rules.",
    answer:
      "This case is flagged because the client declared high annual revenue, multiple locations, previous fire related claim history, and missing property valuation documents. Manual review is recommended before quote approval.",
    actions: ["View Risk Data", "Request Documents", "Send to Manual Review"],
    approval: "Manual underwriting approval required.",
  },
  {
    domain: "Fintech Infrastructure",
    userRole: "Finance",
    question: "Why is today's settlement mismatch 42,000?",
    checks:
      "DEXA checks settlement file, ledger entries, claim approval records, invoice numbers, payment status.",
    answer:
      "The mismatch is linked to three transactions. Two have duplicate invoice numbers and one has a partial claim approval. Recommended action: review exception queue and approve revised settlement.",
    actions: ["View Exceptions", "Export Report", "Assign to Finance"],
    approval: "Finance approval required before settlement correction.",
  },
  {
    domain: "AI Infrastructure",
    userRole: "Admin",
    question: "Which DEXA workflows are failing most this week?",
    checks:
      "DEXA checks agent logs, workflow failures, API errors, low confidence responses, and escalation rates.",
    answer:
      "Most failures are coming from payment status checks and underwriting document extraction. Payment status checks failed due to API timeout. Underwriting extraction failed due to incomplete uploaded documents. Recommended action: review API health and update document upload guidance.",
    actions: ["View Agent Logs", "Review API Health", "Update Guidance"],
    approval: "Admin approval required for workflow rule changes.",
  },
  {
    domain: "Company Operating Infrastructure",
    userRole: "CEO",
    question: "Why is the insurance team behind target?",
    checks:
      "DEXA checks CRM pipeline, meetings completed, proposal volume, follow up completion, conversion rate, and margin target.",
    answer:
      "Insurance distribution is behind target because qualified meetings dropped this week, proposal follow up completion is below threshold, and two high value opportunities are stuck in negotiation. Recommended actions: assign senior support to high value leads, increase daily presentations, and review pending proposals.",
    actions: ["View Pipeline", "Assign Senior Support", "Generate Action Plan"],
    approval:
      "Leadership approval required for target reset or incentive changes.",
  },
];

export const dexaArchitectureLayers = [
  {
    name: "User Interface Layer",
    items: [
      "Website panel",
      "Portal side panel",
      "App screen",
      "Admin console",
      "Dashboard widget",
      "API endpoint",
    ],
  },
  {
    name: "Identity and Permission Layer",
    items: [
      "Authentication",
      "Role check",
      "Tenant validation",
      "Permission boundaries",
      "Session context",
    ],
  },
  {
    name: "Context Layer",
    items: [
      "User role",
      "Intent",
      "Workflow state",
      "System state",
      "History",
      "Channel",
      "Permissions",
    ],
  },
  {
    name: "RAG Knowledge Layer",
    items: [
      "Knowledge bases",
      "SOPs",
      "Policies",
      "Product rules",
      "Benefit rules",
      "Insurance rules",
      "Finance rules",
      "Client docs",
    ],
  },
  {
    name: "Rules Engine",
    items: [
      "Eligibility",
      "Approval",
      "Claim",
      "Payment",
      "Underwriting",
      "Payroll",
      "Expense",
      "Escalation",
    ],
  },
  {
    name: "LLM Reasoning Layer",
    items: [
      "Understanding",
      "Classification",
      "Generation",
      "Confidence scoring",
      "Source grounding",
      "Safe fallback",
    ],
  },
  {
    name: "Agent Orchestration Layer",
    items: [
      "Agent registry",
      "Task routing",
      "Multi-agent",
      "Supervisor",
      "Validation",
      "Retry",
      "Memory",
    ],
  },
  {
    name: "Workflow Engine",
    items: [
      "Claims",
      "Quotes",
      "Payments",
      "Reconciliation",
      "Payroll",
      "Tasks",
      "Projects",
      "Deployment",
    ],
  },
  {
    name: "Tool and API Layer",
    items: [
      "Internal APIs",
      "External APIs",
      "System updates",
      "Notifications",
      "Documents",
      "Reports",
      "Status checks",
    ],
  },
  {
    name: "Human Approval Layer",
    items: [
      "Approval queue",
      "Risk scoring",
      "Confidence threshold",
      "Escalation",
      "Handoff",
      "Override",
    ],
  },
  {
    name: "Monitoring and Audit Layer",
    items: [
      "Agent health",
      "Response quality",
      "Confidence",
      "Errors",
      "Escalations",
      "Costs",
      "Alerts",
    ],
  },
  {
    name: "Admin and Continuous Learning",
    items: [
      "Knowledge management",
      "Rule updates",
      "Feedback loop",
      "Model evaluation",
      "Analytics",
      "Configuration",
    ],
  },
];

export const dexaDeploymentModels = [
  "Website DEXA",
  "Portal DEXA",
  "Employee App DEXA",
  "Finance DEXA",
  "Insurance DEXA",
  "Healthcare DEXA",
  "Operating System DEXA",
  "AI Governance DEXA",
  "White Label DEXA",
  "API Connected DEXA",
];

export const dexaUseCases = [
  {
    name: "Healthcare benefit guidance",
    who: "Employees",
    problem: "Unclear benefit rules",
    data: "Benefit plan, eligibility, limits",
    action: "Explains coverage and next steps",
    approval: "HR escalation for exceptions",
  },
  {
    name: "Claim status explanation",
    who: "Employees",
    problem: "Claim on hold confusion",
    data: "Claim status, documents, rules",
    action: "Explains hold reason with upload action",
    approval: "Human review for claim decisions",
  },
  {
    name: "Provider navigation",
    who: "Employees",
    problem: "Finding the right provider",
    data: "Provider network, location, category",
    action: "Recommends providers with eligibility",
    approval: "No approval needed",
  },
  {
    name: "Health credit guidance",
    who: "Employees",
    problem: "Credit eligibility confusion",
    data: "Credit rules, salary, limits",
    action: "Explains eligibility and application",
    approval: "Lender approval for credit",
  },
  {
    name: "Insurance quote intake",
    who: "Customers",
    problem: "Complex quote requirements",
    data: "Product rules, risk questions",
    action: "Guides through quote form",
    approval: "Underwriter for high-risk",
  },
  {
    name: "Underwriting summary",
    who: "Underwriters",
    problem: "Manual risk assessment",
    data: "Risk data, history, documents",
    action: "Generates risk summary",
    approval: "Underwriter final decision",
  },
  {
    name: "Broker workflow support",
    who: "Brokers",
    problem: "Managing multiple workflows",
    data: "Pipeline, renewals, submissions",
    action: "Prioritizes tasks and alerts",
    approval: "Broker confirms actions",
  },
  {
    name: "Reinsurance summary",
    who: "Reinsurance teams",
    problem: "Complex exposure analysis",
    data: "Treaties, cessions, bordereaux",
    action: "Summarizes exposure and recoveries",
    approval: "Senior review for decisions",
  },
  {
    name: "Wallet explanation",
    who: "Employees",
    problem: "Wallet balance confusion",
    data: "Wallet balance, rules, transactions",
    action: "Explains balance and usage",
    approval: "No approval needed",
  },
  {
    name: "Payment failure diagnosis",
    who: "Users",
    problem: "Failed payment confusion",
    data: "Transaction logs, rules, limits",
    action: "Diagnoses failure and suggests fix",
    approval: "Finance for exceptions",
  },
  {
    name: "Settlement exception summary",
    who: "Finance",
    problem: "Settlement mismatches",
    data: "Ledger, invoices, payments",
    action: "Identifies exceptions and recommends",
    approval: "Finance approval required",
  },
  {
    name: "Payroll exception guidance",
    who: "HR/Finance",
    problem: "Payroll validation failures",
    data: "Employee records, bank details",
    action: "Identifies failed records",
    approval: "Maker-checker for payroll",
  },
  {
    name: "Corporate expense policy support",
    who: "Employees",
    problem: "Policy confusion",
    data: "Expense rules, limits, categories",
    action: "Explains policy and guides submission",
    approval: "Manager for exceptions",
  },
  {
    name: "CRM pipeline intelligence",
    who: "Sales teams",
    problem: "Pipeline visibility gaps",
    data: "Pipeline, activities, conversion",
    action: "Highlights risks and opportunities",
    approval: "Manager validates actions",
  },
  {
    name: "Growth OS coaching",
    who: "Employees",
    problem: "Goal to action gap",
    data: "Goals, targets, activity performance",
    action: "Creates daily execution plan",
    approval: "Self-directed",
  },
  {
    name: "CEO leadership questions",
    who: "Leaders",
    problem: "Delayed operating truth",
    data: "Cross-functional dashboards",
    action: "Provides real-time summaries",
    approval: "Leadership for changes",
  },
  {
    name: "Work Intelligence insights",
    who: "Managers",
    problem: "Invisible productivity",
    data: "Activity logs, scores, benchmarks",
    action: "Identifies coaching needs",
    approval: "Manager validates",
  },
  {
    name: "AI workflow monitoring",
    who: "Admins",
    problem: "AI performance gaps",
    data: "Agent logs, errors, escalations",
    action: "Flags issues and recommends fixes",
    approval: "Admin for rule changes",
  },
  {
    name: "Human approval queue",
    who: "Approvers",
    problem: "Scattered approval requests",
    data: "Request context, risk, confidence",
    action: "Presents structured approval view",
    approval: "Human decision required",
  },
  {
    name: "White labelled client assistant",
    who: "Client users",
    problem: "No intelligent guidance",
    data: "Client-specific knowledge and rules",
    action: "Provides branded guidance",
    approval: "Client-specific rules",
  },
];

export const dexaOutcomes = [
  "Better user guidance",
  "Faster workflow routing",
  "Cleaner requirement discovery",
  "Lower repetitive support load",
  "Better decision support",
  "Stronger governance",
  "Better auditability",
  "Better cross system visibility",
  "More consistent execution",
  "Faster issue detection",
  "Better human escalation",
  "More reliable knowledge access",
  "Better operational summaries",
  "Stronger enterprise trust",
  "More intelligent infrastructure",
  "Better action discipline",
];
