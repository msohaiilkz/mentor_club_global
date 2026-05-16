export const healthcareProblems = [
  "Employees do not understand their benefits",
  "HR teams become healthcare helpdesks",
  "Claims move through manual documents",
  "Providers are disconnected from payers",
  "TPAs handle complex workflows manually",
  "Finance lacks real time exposure visibility",
  "Insurers lack live operational intelligence",
  "Patients still face pay first, claim later friction"
];

export const rails = [
  {
    name: "Access Rail",
    items: ["Provider discovery", "OPD access", "IPD access", "Teleconsultation", "Lab booking", "Pharmacy access", "Home healthcare", "Appointment workflows", "Care navigation", "Cashless access guidance"]
  },
  {
    name: "Benefit Rail",
    items: ["Benefit plan setup", "Employee eligibility", "Dependent coverage", "OPD limits", "IPD limits", "Maternity rules", "Room rent limits", "Category limits", "Approval rules", "Benefit utilization dashboards"]
  },
  {
    name: "Claims Rail",
    items: ["Claim intake", "Document upload", "OCR support", "Duplicate detection", "Missing document alerts", "Medical review", "Approval workflow", "Rejection workflow", "Partial approval workflow", "Reimbursement tracking"]
  },
  {
    name: "Provider Rail",
    items: ["Provider onboarding", "Agreement management", "Tariff and discount setup", "Provider categories", "Credentialing", "Network status", "Prior authorization handling", "Service confirmation", "Provider payables", "Provider performance dashboards"]
  },
  {
    name: "Financial Rail",
    items: ["Wallets", "Corporate health pools", "Individual limits", "Health credit", "Provider payments", "Corporate receivables", "Reimbursement liabilities", "Settlement tracking", "POS payments", "Reconciliation"]
  },
  {
    name: "Intelligence Rail",
    items: ["DEXA", "Benefit guidance", "Provider navigation", "Claim document support", "Wallet explanation", "Missing document detection", "Policy and benefit rule interpretation", "HR query reduction", "Internal operations support", "Escalation routing", "Audit ready answers"]
  }
];

export const stakeholders = [
  { name: "Employers", pain: "Managing healthcare benefits across departments while controlling costs and ensuring employee satisfaction.", infra: "Corporate portal, benefit plan configuration, utilization dashboards, cost analytics, DEXA summary reports.", outcome: "Real-time visibility into healthcare spend, automated benefit administration, and reduced HR workload." },
  { name: "Employees and Dependents", pain: "Navigating benefits, finding providers, understanding coverage limits, and tracking claims.", infra: "Employee app, provider finder, wallet access, claim submission, benefit tracker, DEXA guidance.", outcome: "Clear benefit visibility, cashless access, real-time claim tracking, and intelligent next-step guidance." },
  { name: "TPAs", pain: "Processing high volumes of claims manually, managing provider networks, and ensuring compliance.", infra: "Claims engine, provider network management, approval workflows, reporting, settlement tracking.", outcome: "Automated claim processing, cleaner documentation, faster turnaround, and scalable operations." },
  { name: "Insurers", pain: "Lack of real-time operational intelligence, delayed claims visibility, and fragmented data.", infra: "Policy administration, claims visibility, utilization analytics, provider performance, financial reporting.", outcome: "Live operational intelligence, faster claim resolution, better risk management, and data-driven decisions." },
  { name: "Providers", pain: "Disconnected from payers, delayed payments, manual eligibility verification, and paperwork.", infra: "Provider portal, eligibility verification, service confirmation, payment tracking, document management.", outcome: "Faster payment cycles, automated eligibility checks, and streamlined administrative processes." },
  { name: "Governments and Public Programs", pain: "Administering health programs at scale with transparency, accountability, and efficiency.", infra: "Program administration, beneficiary management, provider networks, claims processing, reporting.", outcome: "Scalable program delivery, transparent fund utilization, and data-driven policy decisions." }
];

export const journeys = [
  { role: "Employee Journey", steps: ["Check eligibility", "Find provider", "Confirm cashless access", "Use wallet or benefit limit", "Submit claim or authorization request", "Track reimbursement or approval", "Ask DEXA for next step"] },
  { role: "HR Journey", steps: ["Configure employee benefits", "Upload employee census", "Monitor onboarding", "Track claims and utilization", "Review cost drivers", "Approve or escalate cases", "Ask DEXA for summary reports"] },
  { role: "Provider Journey", steps: ["Complete onboarding", "Upload documents", "Define service category", "Confirm tariff and discount terms", "Verify patient eligibility", "Submit or confirm service", "Track payment"] },
  { role: "TPA or Insurer Journey", steps: ["Configure policy or corporate plan", "Review claims", "Validate documents", "Check benefit rules", "Approve, reject, or request more information", "Monitor utilization", "Generate reports"] },
  { role: "Finance Journey", steps: ["Track corporate pool", "Monitor wallet usage", "Review reimbursement liability", "Track provider payables", "Match payments", "Review settlement exceptions", "Generate financial summary"] }
];

export const modules = [
  { name: "Corporate Portal", desc: "A full-featured web portal for HR teams and corporate administrators to configure benefits, monitor utilization, approve cases, view analytics, and manage their healthcare program with real-time dashboards and DEXA intelligence." },
  { name: "Employee App", desc: "A mobile-first application for employees and dependents to check benefits, find providers, submit claims, track reimbursements, use their health wallet, and get guided support from DEXA at every step." },
  { name: "Claims Engine", desc: "An automated claims processing system that handles intake, document validation, OCR, duplicate detection, medical review routing, approval workflows, and reimbursement tracking with full audit trails." },
  { name: "Prior Authorization Engine", desc: "A rules-based authorization system that validates benefit coverage, applies approval logic, routes requests to reviewers, and provides real-time status updates to all stakeholders." },
  { name: "Provider Network Engine", desc: "Infrastructure for provider onboarding, credentialing, agreement management, tariff configuration, network categorization, performance tracking, and payment management across the entire provider ecosystem." },
  { name: "Wallet and Pool Management", desc: "Financial infrastructure for corporate health pools, individual wallets, dependent allocations, real-time balance tracking, usage limits, and transparent fund utilization reporting." },
  { name: "Health Credit and Financing", desc: "Lending and credit infrastructure that enables health credit facilities, installment plans, provider receivable financing, and embedded health financing workflows within the healthcare ecosystem." },
  { name: "POS and Payment Infrastructure", desc: "Point-of-sale and payment rails for cashless transactions at provider locations, real-time eligibility verification, wallet deductions, and seamless payment experiences." },
  { name: "Wellness and Preventive Care", desc: "Infrastructure for wellness programs, preventive health campaigns, health risk assessments, wellness rewards, and proactive care management integrated into the employee benefit experience." },
  { name: "Analytics and Reporting", desc: "Comprehensive reporting infrastructure with utilization analytics, cost drivers, department-level insights, provider performance, claims trends, and executive dashboards for data-driven decisions." },
  { name: "API and Integration Layer", desc: "A comprehensive API layer enabling integration with HRMS, insurance systems, hospital systems, lab systems, pharmacy systems, banks, payment gateways, and government health platforms." },
  { name: "DEXA Intelligence Layer", desc: "The AI-powered intelligence layer that provides benefit guidance, claims support, provider navigation, HR query reduction, operational insights, escalation routing, and audit-ready answers across all stakeholders." }
];

export const dexaCapabilities = [
  { role: "Employees", items: ["Benefit guidance", "Provider navigation", "Claim status explanation", "Wallet usage support", "Next step recommendations", "Document requirement alerts"] },
  { role: "HR", items: ["Summary reports", "Cost driver analysis", "Query reduction", "Utilization insights", "Case escalation support", "Policy interpretation"] },
  { role: "Claims teams", items: ["Document validation support", "Missing document detection", "Claim routing intelligence", "Anomaly flagging", "Approval workflow support", "Audit-ready documentation"] },
  { role: "Providers", items: ["Eligibility verification guidance", "Authorization status updates", "Payment tracking support", "Document requirement clarity", "Service confirmation support"] },
  { role: "Finance", items: ["Pool utilization summaries", "Settlement exception alerts", "Reconciliation support", "Exposure visibility", "Financial reporting intelligence", "Provider payable insights"] }
];

export const dexaScenarios = [
  {
    domain: "OPD Access",
    userRole: "Employee",
    question: "I want to book OPD at Aga Khan Hospital. Do I need prior authorization?",
    context: "DEXA checks employee benefit plan, provider category, OPD rules, and current wallet balance.",
    answer: "Your OPD is covered in your benefit plan. **You do not need prior authorization** for covered OPD services at Aga Khan Hospital. You can use cashless access by authorizing the transaction through your health wallet.",
    actions: ["Book Appointment", "View Wallet", "Check Coverage Details"],
    checks: ["Benefit Plan Validation", "Provider Network Check", "Wallet Balance Verification", "Eligibility Status Confirm"],
    approval: { role: "Provider System", action: "Verify eligibility and lock service fee" }
  },
  {
    domain: "Claim Support",
    userRole: "User",
    question: "Why is my claim on hold?",
    context: "DEXA checks claim status, uploaded documents, medical review notes, and missing document list.",
    answer: "Your claim is currently on hold because the **prescription document is missing**. Please upload the prescription so our claims team can complete the medical review and authorize payment.",
    actions: ["Upload Prescription", "View Claim History", "Talk to Case Manager"],
    checks: ["Document Audit", "Claim ID Verification", "Medical Review Signal", "SOP Compliance Check"],
    approval: { role: "Claims Officer", action: "Authorize claim for final settlement" }
  },
  {
    domain: "HR Spend Analysis",
    userRole: "HR Manager",
    question: "Why did our healthcare spend increase this month?",
    context: "DEXA checks utilization data, department-level claims, pharmacy spend, and IPD/OPD split.",
    answer: "Healthcare spend increased due to a **15% rise in pharmacy utilization** and two high-value IPD cases. Reimbursment submissions from the Sales department also spiked. Recommended action: review pharmacy benefit rules and guide employees toward panel providers.",
    actions: ["Download Spend Report", "View Department Analytics", "Review Benefit Rules"],
    checks: ["Data Aggregation Audit", "Anomaly Detection", "Trend Analysis Verification", "Access Level Validation"],
    approval: { role: "Finance Director", action: "Approve monthly utilization report" }
  }
];

export const architectureLayers = [
  { name: "Experience Layer", items: ["Employee app", "Corporate portal", "Provider portal", "TPA portal", "Insurer portal", "Admin dashboard", "DEXA panels"] },
  { name: "Workflow Layer", items: ["Eligibility", "OPD access", "IPD access", "Claims", "Reimbursement", "Prior authorization", "Provider onboarding", "Settlement", "Wellness", "Health credit"] },
  { name: "Financial Layer", items: ["Wallets", "Corporate pools", "Employee limits", "Provider payables", "Corporate receivables", "Health loan balances", "Settlements", "Reconciliation"] },
  { name: "Data Layer", items: ["Members", "Dependents", "Providers", "Claims", "Benefits", "Policies", "Wallets", "Transactions", "Documents", "Utilization"] },
  { name: "Integration Layer", items: ["Insurer systems", "HRMS", "Hospitals", "Labs", "Pharmacies", "Banks", "Payment gateways", "EHR systems", "Wellness partners", "Government systems"] },
  { name: "Intelligence Layer", items: ["DEXA", "RAG", "Rules engine", "Workflow orchestration", "Document intelligence", "Anomaly flags", "Human escalation", "Audit logs"] },
  { name: "Governance Layer", items: ["Role based access", "Consent", "Audit trails", "Approval workflows", "Data masking", "Security controls", "Compliance reporting", "Admin configuration"] }
];

export const deploymentModels = [
  { name: "Mentor managed deployment", desc: "Fully managed healthcare infrastructure operated by Mentor Global with SLA-backed service delivery." },
  { name: "White labelled platform", desc: "Deploy Mentor healthcare infrastructure under your own brand with custom configuration and workflows." },
  { name: "Dedicated tenant", desc: "A dedicated instance with isolated data, custom rules, and organization-specific configurations." },
  { name: "API first integration", desc: "Integrate specific healthcare rails via APIs into your existing ecosystem without full platform deployment." },
  { name: "Custom workflow deployment", desc: "Customize workflows, approval chains, benefit rules, and user journeys to match organizational needs." },
  { name: "Full code enabled solution where agreed", desc: "Full source code access for organizations requiring complete control over their infrastructure." }
];

export const useCases = [
  { name: "Corporate health benefit platform", who: "Employers", pain: "Fragmented benefit administration", rail: "Benefit Rail + Access Rail", dexa: "Employee benefit guidance and HR query reduction" },
  { name: "TPA claims administration", who: "TPAs", pain: "Manual claims processing at scale", rail: "Claims Rail + Provider Rail", dexa: "Document validation and claim routing intelligence" },
  { name: "Cashless OPD and IPD access", who: "Employees", pain: "Pay first, claim later friction", rail: "Access Rail + Financial Rail", dexa: "Cashless access guidance and wallet support" },
  { name: "Provider network management", who: "TPAs and Insurers", pain: "Disconnected provider ecosystem", rail: "Provider Rail", dexa: "Provider performance insights and network intelligence" },
  { name: "Wallet based self funded health plans", who: "Employers", pain: "Inflexible insurance-only models", rail: "Financial Rail + Benefit Rail", dexa: "Wallet usage guidance and limit explanation" },
  { name: "Reimbursement automation", who: "Employees and TPAs", pain: "Slow manual reimbursement", rail: "Claims Rail + Financial Rail", dexa: "Missing document detection and status updates" },
  { name: "Health credit and financing", who: "Employees and Providers", pain: "Upfront payment barriers", rail: "Financial Rail", dexa: "Credit eligibility support and payment guidance" },
  { name: "Government health program administration", who: "Governments", pain: "Program scale and transparency", rail: "All Rails", dexa: "Operational intelligence and compliance reporting" },
  { name: "Insurance claims and utilization visibility", who: "Insurers", pain: "Delayed operational intelligence", rail: "Claims Rail + Intelligence Rail", dexa: "Real-time utilization insights and anomaly flags" },
  { name: "White labelled employee health platform", who: "Partners", pain: "Building health platforms from scratch", rail: "All Rails", dexa: "Full DEXA intelligence across white-labelled deployment" }
];

export const outcomes = [
  "Faster benefit navigation",
  "Lower manual HR workload",
  "Cleaner claim documentation",
  "Real time employer visibility",
  "Stronger provider network control",
  "Faster reimbursement tracking",
  "Better provider payment visibility",
  "Reduced claim leakage",
  "Better employee experience",
  "Scalable TPA operations",
  "Stronger data governance",
  "More transparent healthcare financing"
];
