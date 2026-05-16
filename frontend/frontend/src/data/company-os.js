export const osProblems = [
  "Sales lives in CRM, but execution lives elsewhere",
  "Teams work through memory",
  "Leaders receive opinions instead of operating truth",
  "Follow ups are missed",
  "Projects move without accountability",
  "Managers cannot see true productivity",
  "HR evaluates people without enough data",
  "Finance sees results late",
  "Training is disconnected from performance",
  "Employees do not know how to earn more",
  "Multi entity groups become harder to control",
  "AI is not connected to business execution"
];

export const osRails = [
  { name: "Strategy Rail", items: ["Company goals", "Department goals", "Margin targets", "Sales targets", "KPI targets", "Quarterly priorities", "Strategic initiatives", "Leadership dashboards", "Performance thresholds", "Review cycles"] },
  { name: "Revenue Rail", items: ["Lead Bank", "Lead source tracking", "CRM pipeline", "Lead qualification", "Meeting logs", "Proposal management", "Negotiation tracking", "Deal closure", "Weighted pipeline", "Revenue forecasting"] },
  { name: "Network Rail", items: ["PRM", "Provider onboarding", "Partner onboarding", "Agreement management", "Network status", "Provider lifecycle", "Contract expiry", "Financial terms", "Activation tracking", "Network performance"] },
  { name: "Execution Rail", items: ["Task planning", "Task assignment", "Daily activity tracking", "Calling plans", "Field plans", "Meeting logs", "Follow up control", "SLA alerts", "Escalation rules", "Completion validation"] },
  { name: "Team App Rail", items: ["Daily task view", "Schedule view", "Call logging", "Meeting logging", "Field visit logging", "Attendance", "HR requests", "Training access", "Notifications", "Performance updates"] },
  { name: "Work Intelligence Rail", items: ["Productivity score", "Activity quality", "Time benchmarking", "Target progress", "Missed follow ups", "Underperformance alerts", "Team comparison", "Output versus effort", "AI daily guidance", "Leadership insights"] },
  { name: "Project Rail", items: ["Project builder", "Epic management", "Milestones", "Dependencies", "Critical path", "Stakeholder assignment", "Progress tracking", "Delays", "Risk alerts", "AI work breakdown"] },
  { name: "Learning Rail", items: ["Training content", "AI Academy", "Role based learning", "AI tutor", "Quizzes", "Scenario assessment", "Skill score", "Learning gaps", "Readiness dashboard", "Training analytics"] },
  { name: "HR Rail", items: ["Hiring request", "Employee onboarding", "Attendance", "Leave", "Work status", "Policies", "Employee facilitation", "Performance evaluation", "Incentive linked salary", "Engagement tracking"] },
  { name: "Finance Rail", items: ["Billing", "Collections", "Payables", "Receivables", "TPA pools", "MDR", "Commission management", "Reconciliation", "Cash flow", "Financial reports"] },
  { name: "Growth OS Rail", items: ["Personal goals", "Financial goals", "Salary goals", "Learning goals", "Margin conversion", "Sales conversion", "Monthly plan", "Weekly plan", "Daily plan", "Reward tracking"] },
  { name: "Leadership Rail", items: ["CEO dashboard", "COO dashboard", "Head dashboard", "Department dashboards", "Cross functional visibility", "Bottleneck detection", "Decision support", "AI insights", "Performance summaries", "Board ready reporting"] },
  { name: "Integration Rail", items: ["Mentor Health platform integration", "CRM integrations", "Finance integrations", "HRMS integrations", "Communication tools", "APIs", "Webhooks", "Data sync", "Exception logs", "Source system validation"] },
  { name: "DEXA Intelligence Rail", items: ["CEO questions", "Employee guidance", "Manager coaching", "Sales analysis", "Finance summaries", "HR support", "Training recommendations", "Project risk insights", "Growth OS coaching", "Operational escalation"] },
  { name: "Governance Rail", items: ["Role based access", "Dynamic configuration", "Workflow rules", "KPI rules", "Incentive rules", "Approval rules", "Audit logs", "Data visibility", "Tenant controls", "Admin settings"] }
];

export const osStakeholders = [
  { name: "Growth Companies", pain: "Execution depends on individuals, not systems. Scaling becomes unpredictable.", infra: "Full Mentor OS stack: CRM, execution, Work Intelligence, Growth OS, finance.", outcome: "System-driven growth with visible execution and measurable performance." },
  { name: "Healthcare Organizations", pain: "Provider networks, claims, and operations need structured execution alongside revenue.", infra: "CRM, PRM, task execution, finance, Mentor Health integration.", outcome: "Connected healthcare operations from sales to provider to finance." },
  { name: "Insurance and TPA Companies", pain: "Sales, underwriting, claims, and finance operate in different tools.", infra: "CRM, task execution, finance ERP, Work Intelligence, leadership dashboards.", outcome: "One operating layer connecting insurance sales to operations to finance." },
  { name: "Fintech Companies", pain: "Fast growth without execution visibility leads to missed targets and cash flow gaps.", infra: "Revenue engine, execution, finance, Growth OS, Work Intelligence.", outcome: "Visible execution with real-time revenue and finance tracking." },
  { name: "Provider Networks", pain: "Onboarding providers, managing agreements, and tracking network health manually.", infra: "PRM, agreement management, activation tracking, network performance.", outcome: "Structured provider network growth with automated lifecycle management." },
  { name: "Multi Entity Groups", pain: "Multiple companies need unified visibility without losing entity independence.", infra: "Multi-tenant OS, cross-entity dashboards, governance, leadership visibility.", outcome: "Group-level visibility with entity-level operational independence." },
  { name: "Sales Led Organizations", pain: "Pipeline visibility exists but execution discipline and follow-up control are weak.", infra: "CRM, Lead Bank, task execution, Work Intelligence, Growth OS.", outcome: "Pipeline discipline with measurable daily execution and conversion tracking." },
  { name: "Field Teams", pain: "Field activity is invisible. Managers rely on verbal updates and memory.", infra: "Team App, field visit logging, GPS check-in, activity tracking, SLA alerts.", outcome: "Complete field visibility with real-time activity logging and performance scoring." },
  { name: "HR and Training Teams", pain: "Performance evaluation lacks objective data. Training is disconnected from outcomes.", infra: "HR engine, training platform, Work Intelligence, performance evaluation.", outcome: "Data-driven HR with training connected to role readiness and productivity." },
  { name: "Leadership Teams", pain: "Decisions rely on manual reports. Operating truth is delayed or filtered.", infra: "Leadership dashboards, DEXA AI window, cross-functional visibility, board reporting.", outcome: "Real-time operating truth with AI-powered decision support." }
];

export const osJourneys = [
  { role: "CEO Journey", steps: ["Opens leadership dashboard", "Reviews revenue, execution, finance, and productivity", "Asks DEXA a leadership question", "Identifies bottleneck", "Assigns corrective action", "Tracks improvement", "Reviews outcome"] },
  { role: "Sales Journey", steps: ["Receives assigned lead", "Structures lead profile", "Logs first contact", "Qualifies opportunity", "Moves pipeline stage", "Sends proposal", "Tracks follow up", "Closes deal", "Triggers onboarding"] },
  { role: "Manager Journey", steps: ["Views team dashboard", "Assigns tasks", "Reviews daily activity", "Checks productivity score", "Handles overdue follow ups", "Coaches underperformers", "Approves corrective actions", "Reports to leadership"] },
  { role: "Employee Journey", steps: ["Opens Mentor Team App", "Views daily tasks", "Logs calls, meetings, visits", "Completes assigned training", "Tracks Growth OS goal", "Receives DEXA guidance", "Updates progress"] },
  { role: "Finance Journey", steps: ["Receives closed deal data", "Generates invoice", "Tracks collections", "Monitors payables", "Calculates commissions", "Reconciles payments", "Reports cash flow"] },
  { role: "HR and Training Journey", steps: ["Onboards employee", "Assigns role based learning", "Tracks attendance", "Runs assessments", "Reviews performance", "Links training gaps to productivity", "Supports growth plan"] },
  { role: "Project Owner Journey", steps: ["Creates project", "Defines milestones", "Assigns stakeholders", "Tracks dependencies", "Reviews risk alerts", "Uses AI breakdown", "Closes project with lessons learned"] }
];

export const osModules = [
  { name: "Revenue Engine, CRM", desc: "Full pipeline infrastructure from Lead Bank through qualification, proposal, negotiation, and closure with weighted forecasting, incentive linkage, and management dashboards." },
  { name: "Lead Bank", desc: "Centralized lead capture from all sources with deduplication, assignment engine, source tracking, aging alerts, SLA monitoring, and conversion analytics." },
  { name: "Network Engine, PRM", desc: "Provider and partner relationship management with onboarding workflows, agreement management, credentialing, financial terms, activation tracking, and network performance dashboards." },
  { name: "Task and Activity Management", desc: "Structured task planning, assignment, activity logging, follow-up control, SLA alerts, escalation rules, and completion validation for daily execution discipline." },
  { name: "Mentor Team App", desc: "Mobile employee execution layer with daily tasks, call/meeting/visit logging, attendance, HR requests, training access, Growth OS progress, and DEXA daily guidance." },
  { name: "Work Intelligence", desc: "Productivity scoring, activity quality analysis, time benchmarking, target tracking, underperformance alerts, team comparison, and AI-powered daily guidance for managers and leaders." },
  { name: "Project and Epic Management", desc: "Strategic initiative execution with project building, epic management, milestones, dependencies, critical path analysis, risk alerts, and AI-powered work breakdown." },
  { name: "Training and AI Learning", desc: "Role-based learning infrastructure with AI content processing, AI tutor, quizzes, scenario assessments, skill scoring, knowledge gap detection, and readiness dashboards." },
  { name: "HR Engine", desc: "People management infrastructure covering hiring, onboarding, attendance, leave, work status, policies, performance evaluation, incentive-linked salary, and engagement tracking." },
  { name: "Finance ERP", desc: "Financial operations infrastructure for billing, collections, payables, receivables, commissions, TPA pools, MDR, reconciliation, cash flow, and financial reporting." },
  { name: "Growth OS", desc: "Personal ambition-to-execution engine converting employee goals into financial targets, margin requirements, sales targets, daily activity plans, AI coaching, and reward tracking." },
  { name: "Leadership Window", desc: "AI-powered leadership dashboards providing CEO, COO, and department head visibility with cross-functional insights, bottleneck detection, decision support, and board-ready reporting." },
  { name: "Integration Layer", desc: "Enterprise integration infrastructure connecting Mentor Health platform, CRM, finance, HRMS, communication tools, APIs, webhooks, data sync, and source system validation." },
  { name: "Governance and Configuration", desc: "Dynamic configuration infrastructure for role-based access, workflow rules, KPI rules, incentive rules, approval rules, audit logs, tenant controls, and admin settings." }
];

export const growthOSFlow = [
  "Employee enters personal goal", "System converts goal into financial output",
  "Financial output converts into required margin", "Margin converts into required sales",
  "Sales converts into monthly, weekly, and daily activity", "AI coach guides execution",
  "Work Intelligence monitors effort", "Leadership sees progress",
  "Reward is calculated", "Growth becomes measurable"
];

export const dexaOSCapabilities = [
  { role: "CEOs", items: ["Revenue pipeline insights", "Execution bottleneck detection", "Cross-department visibility", "Decision support summaries", "Board-ready performance data", "Corrective action recommendations"] },
  { role: "Managers", items: ["Team productivity scoring", "Underperformer identification", "Coaching recommendations", "Follow-up discipline alerts", "Training gap detection", "Performance comparison"] },
  { role: "Employees", items: ["Daily task guidance", "Growth OS coaching", "Training recommendations", "Performance insights", "Goal progress tracking", "Next action suggestions"] },
  { role: "Finance", items: ["Collection alerts", "Receivable aging insights", "Commission calculations", "Cash flow summaries", "Reconciliation exception alerts", "Financial reporting intelligence"] },
  { role: "HR", items: ["Readiness assessment support", "Training gap identification", "Performance data summaries", "Engagement insights", "Onboarding status tracking", "Incentive calculation support"] }
];

export const dexaOSScenarios = [
  { 
    domain: "CEO Leadership", 
    userRole: "CEO", 
    question: "Why is the insurance team behind target?", 
    context: "DEXA checks CRM pipeline, meetings completed, proposal volume, follow up completion, conversion rate, margin target.", 
    answer: "Insurance distribution is behind target because qualified meetings dropped this week, proposal follow up completion is below threshold, and two high value opportunities are stuck in negotiation. Recommended actions: assign senior support to high value leads, increase daily presentations, and review pending proposals.", 
    actions: ["View Pipeline", "Assign Senior Support", "Generate Action Plan"],
    checks: ["Revenue Target Audit", "Pipeline Integrity Check", "Activity Threshold Verification", "Leadership Permission Validation"],
    approval: { role: "COO", action: "Approve sales corrective strategy" }
  },
  { 
    domain: "Growth OS", 
    userRole: "Employee", 
    question: "How can I earn an extra 100,000 this quarter?", 
    context: "DEXA checks personal goal, incentive percentage, margin ratio, current sales pipeline, activity performance, target gap.", 
    answer: "To earn extra 100,000, you need approximately 1,000,000 in additional margin, depending on your incentive rules. Based on your current conversion rate, you need 50 meetings and 200 calls this quarter. Your daily target should be 10 calls, 3 follow ups, and 1 qualified meeting attempt.", 
    actions: ["Create Growth Plan", "View Daily Tasks", "Ask Manager for Support"],
    checks: ["Incentive Rule Verification", "Personal Goal Alignment", "Performance History Audit", "Margin Threshold Check"],
    approval: { role: "Manager", action: "Validate and lock quarterly growth plan" }
  },
  { 
    domain: "Management Coaching", 
    userRole: "Manager", 
    question: "Who needs coaching this week?", 
    context: "DEXA checks productivity score, missed follow ups, proposal activity, meeting completion, training score, target gap.", 
    answer: "Three team members need coaching. One has low proposal volume, one has repeated missed follow ups, and one has weak meeting conversion. Recommended action: assign proposal training, review follow up discipline, and schedule one on one coaching.", 
    actions: ["View Team Risk", "Assign Training", "Schedule Coaching"],
    checks: ["Productivity Benchmark Check", "SLA Breach Audit", "Training Readiness Review", "Managerial Access Validation"],
    approval: { role: "Department Head", action: "Authorize team coaching interventions" }
  },
  { 
    domain: "Finance Control", 
    userRole: "Finance", 
    question: "Why are receivables increasing?", 
    context: "DEXA checks closed deals, invoices, collections, overdue accounts, follow up tasks, payment status.", 
    answer: "Receivables increased because five invoices crossed the due date and three collection follow ups were missed. Two clients are awaiting revised invoices. Recommended action: assign collection tasks and resolve invoice corrections.", 
    actions: ["View Receivables", "Assign Collection Tasks", "Export Report"],
    checks: ["Aging Report Verification", "Invoice Status Audit", "Task Assignment Integrity", "Finance Protocol Check"],
    approval: { role: "Finance Director", action: "Approve overdue collection escalation" }
  },
  { 
    domain: "HR Readiness", 
    userRole: "HR", 
    question: "Which new employees are not ready for field work?", 
    context: "DEXA checks training completion, assessment score, attendance, task completion, manager feedback, role readiness.", 
    answer: "Four employees are not ready for field work. Two have incomplete onboarding modules, one failed the product assessment, and one has not completed field SOP training. Recommended action: assign refresher learning and delay independent field assignment until reassessment.", 
    actions: ["View Readiness", "Assign Training", "Notify Manager"],
    checks: ["Training Compliance Audit", "Assessment Integrity Check", "HR Policy Verification", "Role Readiness Validation"],
    approval: { role: "HR Manager", action: "Block field assignment pending retraining" }
  }
];

export const osArchitectureLayers = [
  { name: "Experience Layer", items: ["CEO dashboard", "Manager dashboard", "Employee Team App", "Sales portal", "PRM portal", "HR dashboard", "Finance dashboard", "Training dashboard", "Project dashboard", "DEXA panels"] },
  { name: "Revenue Layer", items: ["Lead Bank", "CRM stages", "Opportunity pipeline", "Proposal management", "Negotiation", "Closure", "Forecasting", "Incentives"] },
  { name: "Network Layer", items: ["Provider onboarding", "Partner onboarding", "Agreements", "Financial terms", "Activation", "Network status", "Renewal tracking", "Provider dashboard"] },
  { name: "Execution Layer", items: ["Tasks", "Activities", "Calls", "Meetings", "Field visits", "Follow ups", "SLAs", "Escalations"] },
  { name: "People Layer", items: ["HR", "Attendance", "Leave", "Employee records", "Performance", "Training", "Learning paths", "Incentive linked salary"] },
  { name: "Finance Layer", items: ["Billing", "Collections", "Receivables", "Payables", "Payroll inputs", "Commissions", "TPA pools", "Reconciliation", "Cash flow", "Reports"] },
  { name: "Growth Layer", items: ["Personal goals", "Financial conversion", "Required margin", "Required sales", "Daily execution plan", "AI coach", "Reward tracking", "Leadership visibility"] },
  { name: "Intelligence Layer", items: ["DEXA", "Work Intelligence", "Productivity scoring", "AI summaries", "Gap detection", "Leadership questions", "Daily guidance", "Risk alerts"] },
  { name: "Integration Layer", items: ["Mentor Health platform", "CRM data", "Provider data", "Claims data", "Pool balances", "Finance systems", "HRMS", "Communication tools", "APIs", "Webhooks"] },
  { name: "Governance Layer", items: ["Role based access", "Audit logs", "Workflow rules", "Approval rules", "KPI configuration", "Incentive configuration", "Tenant configuration", "Data visibility", "Admin settings", "Exception logs"] }
];

export const osDeploymentModels = [
  { name: "Mentor managed OS", desc: "Fully managed operating infrastructure operated by Mentor Global with SLA-backed delivery." },
  { name: "White labelled company operating system", desc: "Deploy Mentor OS under your own brand with custom configuration and workflows." },
  { name: "Dedicated tenant", desc: "Isolated instance with dedicated data, custom rules, and organization-specific configurations." },
  { name: "Multi entity group deployment", desc: "Group-level visibility with entity-level independence across multiple companies." },
  { name: "Healthcare operating deployment", desc: "Mentor OS configured for healthcare organizations with Mentor Health integration." },
  { name: "Insurance and TPA operating deployment", desc: "Mentor OS configured for insurance and TPA operations with claims and policy workflows." },
  { name: "Fintech operating deployment", desc: "Mentor OS configured for fintech companies with financial execution workflows." },
  { name: "Sales and execution deployment", desc: "CRM, Lead Bank, task execution, and Work Intelligence for sales-led organizations." },
  { name: "API connected deployment", desc: "Mentor OS modules accessible via APIs for integration into existing ecosystems." },
  { name: "Custom workflow deployment", desc: "Customized workflows, KPIs, incentives, and approval rules to match organizational needs." },
  { name: "Full code enabled solution where agreed", desc: "Full source code access for organizations requiring complete control." }
];

export const osUseCases = [
  { name: "Sales operating system", who: "Sales teams", pain: "Pipeline without execution discipline", rail: "Revenue + Execution Rail", dexa: "Sales analysis and follow-up alerts" },
  { name: "Provider network operating system", who: "Network teams", pain: "Manual provider management", rail: "Network Rail", dexa: "Provider onboarding intelligence" },
  { name: "Healthcare company command center", who: "Healthcare orgs", pain: "Fragmented healthcare operations", rail: "All Rails + Mentor Health", dexa: "Cross-functional visibility" },
  { name: "Insurance and TPA execution system", who: "Insurance companies", pain: "Disconnected sales and operations", rail: "Revenue + Execution + Finance Rail", dexa: "Operational intelligence" },
  { name: "Fintech company operating system", who: "Fintech companies", pain: "Fast growth without execution control", rail: "All Rails", dexa: "Growth and execution insights" },
  { name: "Multi entity group operating layer", who: "Group companies", pain: "No unified group visibility", rail: "All Rails + Governance", dexa: "Group-level intelligence" },
  { name: "CRM to finance execution loop", who: "Revenue teams", pain: "Sales closes but finance is disconnected", rail: "Revenue + Finance Rail", dexa: "Revenue-to-cash insights" },
  { name: "Field team productivity system", who: "Field teams", pain: "Invisible field activity", rail: "Team App + Execution + Work Intelligence", dexa: "Activity guidance and scoring" },
  { name: "Training and readiness platform", who: "HR teams", pain: "Training not connected to performance", rail: "Learning + HR Rail", dexa: "Training gap detection" },
  { name: "HR performance and incentive system", who: "HR teams", pain: "Subjective performance evaluation", rail: "HR + Work Intelligence + Growth OS", dexa: "Performance data summaries" },
  { name: "Finance control and reconciliation layer", who: "Finance teams", pain: "Late financial visibility", rail: "Finance Rail", dexa: "Financial reporting intelligence" },
  { name: "Project execution control system", who: "Project teams", pain: "Projects without accountability", rail: "Project Rail", dexa: "Risk detection and work breakdown" },
  { name: "Growth OS for employee performance", who: "All employees", pain: "Employees don't know how to earn more", rail: "Growth OS Rail", dexa: "Goal coaching and daily planning" },
  { name: "Leadership AI command window", who: "CEOs and leaders", pain: "Decisions based on opinions not data", rail: "Leadership + Intelligence Rail", dexa: "Decision support and insights" },
  { name: "White labelled operating system", who: "Partners", pain: "Building operating systems from scratch", rail: "All Rails", dexa: "Full DEXA intelligence" },
  { name: "Mentor Health operational integration layer", who: "Healthcare companies", pain: "Healthcare platform separate from operations", rail: "Integration Rail", dexa: "Cross-platform intelligence" }
];

export const osOutcomes = [
  "Better leadership visibility", "Stronger execution discipline", "Cleaner revenue pipeline",
  "Better follow up control", "Better task accountability", "Better team productivity tracking",
  "Stronger finance visibility", "Better training alignment", "Better employee growth clarity",
  "Lower dependency on manual reporting", "More system driven performance", "Stronger governance",
  "Better cross department coordination", "Better operational truth",
  "Better sales to finance visibility", "Better decision support"
];
