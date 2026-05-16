export const insuranceProblems = [
  "Product launch is slow",
  "Quote intake is scattered",
  "Underwriting lacks clean data",
  "Brokers work across too many tools",
  "Policy servicing is repetitive",
  "Claims are document heavy",
  "Reinsurance workflows remain complex",
  "Embedded insurance needs APIs",
  "Commissions and settlements are hard to reconcile",
  "Customers cannot track requests easily"
];

export const insuranceRails = [
  { name: "Product Rail", items: ["Product builder", "Line of business setup", "Coverage rules", "Benefit limits", "Exclusions", "Riders", "Add ons", "Pricing rules", "Commission rules", "Policy wording templates", "Takaful and conventional workflow options", "Version control"] },
  { name: "Quote and Distribution Rail", items: ["Quote intake", "Dynamic forms", "Risk questionnaires", "Product recommendation", "Multi carrier quotation", "Proposal builder", "Quote comparison", "Quote validity timer", "Client acceptance workflow", "Payment initiation", "Partner distribution", "Embedded quote API"] },
  { name: "Underwriting Rail", items: ["Underwriting workbench", "Risk scoring support", "Document collection", "Referral rules", "Manual review gates", "Medical and non medical requirements", "Business risk assessment", "Underwriter notes", "Approval matrix", "DEXA underwriting summary", "Decision history", "Audit trail"] },
  { name: "Policy Administration Rail", items: ["Policy issuance", "Policyholder profile", "Certificates", "Endorsements", "Renewals", "Cancellations", "Member additions", "Member deletions", "Policy documents", "Billing integration", "Customer portal", "Partner portal"] },
  { name: "Claims Rail", items: ["First notice of loss", "Claim registration", "Claim checklist", "Document upload", "Coverage validation", "Claim review", "Missing document alerts", "Approval workflow", "Rejection workflow", "Settlement status", "Fraud and anomaly flags", "Claims communication"] },
  { name: "Reinsurance Rail", items: ["Treaty setup", "Facultative placement", "Cession tracking", "Risk bordereaux", "Premium bordereaux", "Claims bordereaux", "Reinsurer participation", "Retention and limit tracking", "Layer and attachment point setup", "Recovery tracking", "Reinsurance accounting", "Settlement and reconciliation"] },
  { name: "Broker Operating Rail", items: ["Broker CRM", "Client intake", "Risk discovery", "Carrier submission tracking", "Proposal comparison", "Renewal pipeline", "Certificate requests", "ID card requests", "Policy changes", "Claims support", "Commission tracking", "Producer performance dashboard"] },
  { name: "Digital Service Center Rail", items: ["Report a claim", "Pay bill", "Request ID card", "Request certificate", "Request policy review", "Request policy change", "Upload documents", "Track request", "Talk to advisor", "Renewal support", "Coverage question", "SLA monitoring"] },
  { name: "Embedded Insurance Rail", items: ["Quote API", "Bind API", "Policy API", "Payment API", "Claims initiation API", "Webhooks", "Embedded widgets", "Partner dashboard", "White label frontends", "Checkout insurance flows", "Subscription add ons", "Affinity program flows"] },
  { name: "Intelligence Rail", items: ["DEXA", "Product setup support", "Quote intake guidance", "Broker assistant", "Risk discovery support", "Underwriting summaries", "Claims guidance", "Missing document detection", "Renewal prompts", "Coverage gap analysis", "Service center routing", "Reinsurance query support", "Human escalation"] }
];

export const insuranceCompanyTypes = [
  { name: "Insurance Companies", items: ["Product creation", "Quote distribution", "Underwriting workflows", "Policy administration", "Claims handling", "Renewals", "Broker and agent distribution", "Embedded channels", "Commission tracking", "Customer service"] },
  { name: "Reinsurance Companies", items: ["Treaty program management", "Facultative risk review", "Cession tracking", "Exposure visibility", "Claims recovery tracking", "Bordereaux ingestion", "Accounting and settlement", "Cedent and broker communication", "Reinsurer participation tracking", "Portfolio reporting"] },
  { name: "Reinsurance Brokers and Intermediaries", items: ["Placement workflow", "Submission packaging", "Reinsurer comparison", "Quote tracking", "Treaty negotiation support", "Facultative placement support", "Communication history", "Document exchange", "Placement status dashboards", "DEXA assisted risk summaries"] }
];

export const insuranceLines = [
  { group: "Personal lines", items: ["Health Insurance", "Travel Insurance", "Life Insurance", "Personal Accident", "Motor Insurance"] },
  { group: "Commercial lines", items: ["Business Insurance", "Property Insurance", "General Insurance", "Cyber and Specialty Insurance"] },
  { group: "Health and employee benefit lines", items: ["Group Health", "Employee Benefits", "Wellness Programs"] },
  { group: "Specialty lines", items: ["Cyber Insurance", "Marine Insurance", "Aviation Insurance", "Specialty Risk"] },
  { group: "Reinsurance lines", items: ["Treaty Reinsurance", "Facultative Reinsurance", "Retrocession"] }
];

export const insuranceStakeholders = [
  { name: "Insurance Carriers", pain: "Fragmented policy, claims, and distribution systems across multiple lines.", infra: "Product builder, policy admin, claims engine, underwriting, distribution management, reinsurance.", outcome: "Unified insurance operations with real-time visibility across all lines of business." },
  { name: "Reinsurance Companies", pain: "Complex treaty management, bordereaux processing, and recovery tracking.", infra: "Treaty management, cession tracking, bordereaux ingestion, recovery workflow, settlement.", outcome: "Structured reinsurance operations with automated bordereaux and recovery tracking." },
  { name: "Insurance Brokers", pain: "Managing relationships, submissions, and renewals across too many disconnected tools.", infra: "Broker CRM, risk discovery, carrier submission, quote comparison, renewal pipeline, commissions.", outcome: "One operating system for all broker workflows from lead to renewal." },
  { name: "Reinsurance Brokers", pain: "Manual placement workflows, document exchange, and reinsurer communication.", infra: "Placement workflow, submission packaging, reinsurer comparison, DEXA risk summaries.", outcome: "Streamlined placement with structured data and automated communication." },
  { name: "MGAs", pain: "Need carrier-grade infrastructure without building from scratch.", infra: "Full policy admin, underwriting, claims, distribution, and reporting infrastructure.", outcome: "Carrier-grade operations on MGA economics with white-labelled infrastructure." },
  { name: "TPAs", pain: "Processing claims and managing networks at scale with compliance requirements.", infra: "Claims engine, provider networks, approval workflows, settlement, compliance reporting.", outcome: "Scalable claims administration with automated workflows and audit trails." },
  { name: "Agents and Producers", pain: "Limited tools for client management, quoting, and commission tracking.", infra: "Agent portal, quote access, client management, commission dashboard, renewal alerts.", outcome: "Professional agent operations with real-time commission and portfolio visibility." },
  { name: "Bancassurance and Affinity Partners", pain: "Need embedded insurance within existing customer journeys.", infra: "Embedded APIs, checkout flows, subscription add-ons, partner dashboards, revenue share.", outcome: "Insurance distribution embedded within existing platforms and customer journeys." },
  { name: "Embedded Insurance Platforms", pain: "Need API-first insurance infrastructure for digital distribution.", infra: "Quote API, bind API, policy API, claims API, webhooks, white-label frontends.", outcome: "Full insurance lifecycle accessible via APIs for any digital platform." },
  { name: "Customers and Policyholders", pain: "Cannot easily track policies, submit claims, or get service answers.", infra: "Customer portal, service center, claims tracking, document upload, DEXA guidance.", outcome: "Self-service access to policies, claims, documents, and intelligent support." }
];

export const insuranceJourneys = [
  { role: "Insurance Carrier Journey", steps: ["Create product", "Configure coverage and pricing", "Launch distribution channel", "Review underwriting", "Issue policy", "Manage claims", "Track reinsurance", "Monitor portfolio"] },
  { role: "Reinsurance Company Journey", steps: ["Receive treaty or facultative submission", "Review exposure and documents", "Assess participation", "Quote or accept risk", "Track cessions", "Review bordereaux", "Monitor claims recoveries", "Settle accounts"] },
  { role: "Broker Journey", steps: ["Capture lead", "Run risk discovery", "Submit to carriers", "Compare quotes", "Send proposal", "Place policy", "Manage service requests", "Track renewal and commission"] },
  { role: "Customer Journey", steps: ["Submit quote request", "Upload documents", "Review proposal", "Accept and pay", "Access policy", "Request change", "Report claim", "Track claim status"] },
  { role: "Claims Journey", steps: ["Report claim", "Upload documents", "Validate coverage", "Assign reviewer", "Request missing documents", "Approve, reject, or settle", "Track payment", "Close claim"] },
  { role: "Embedded Partner Journey", steps: ["Call quote API", "Show insurance offer", "Bind policy in partner journey", "Trigger payment", "Generate documents", "Receive webhook event", "Track commission", "Start claim from partner platform"] }
];

export const insuranceModules = [
  { name: "Product Builder", desc: "A flexible product configuration engine for creating insurance products across all lines, with coverage rules, pricing, exclusions, riders, commission structures, and policy wording templates." },
  { name: "Quote Engine", desc: "Multi-carrier quote intake and comparison infrastructure supporting dynamic forms, risk questionnaires, product recommendations, and embedded distribution across channels." },
  { name: "Risk Discovery Forms", desc: "Structured risk collection workflows for personal and commercial lines, capturing risk data, documents, and declarations needed for accurate underwriting." },
  { name: "Underwriting Workbench", desc: "A complete underwriting environment with risk scoring, document collection, referral rules, manual review gates, approval matrices, and DEXA-powered underwriting summaries." },
  { name: "Policy Administration", desc: "Full policy lifecycle management including issuance, endorsements, renewals, cancellations, member management, certificates, billing integration, and document generation." },
  { name: "Claims Management", desc: "End-to-end claims infrastructure from first notice of loss through settlement, with document management, coverage validation, fraud detection, and communication workflows." },
  { name: "Reinsurance Management", desc: "Treaty and facultative reinsurance infrastructure for cession tracking, bordereaux management, recovery workflows, accounting, settlement, and portfolio analytics." },
  { name: "Broker CRM", desc: "A purpose-built CRM for insurance brokers covering client management, risk discovery, carrier submissions, quote tracking, renewals, commissions, and producer performance." },
  { name: "Agent and Producer Portal", desc: "A dedicated portal for agents and producers to manage their book of business, access quotes, track commissions, and serve clients with professional tools." },
  { name: "Customer Portal", desc: "Self-service portal for policyholders to view policies, download documents, request changes, report claims, track requests, and get DEXA-guided support." },
  { name: "Digital Service Center", desc: "A structured service request system for claims reporting, policy changes, certificate requests, document uploads, advisor routing, and SLA-monitored service delivery." },
  { name: "Carrier Management", desc: "Infrastructure for managing carrier relationships, appointments, product access, submission workflows, commission agreements, and performance tracking." },
  { name: "Reinsurer Management", desc: "Tools for managing reinsurer relationships, participation tracking, treaty details, facultative submissions, recovery status, and settlement reconciliation." },
  { name: "Partner Portal", desc: "A white-labelled portal for distribution partners to manage their insurance programs, track performance, access reports, and coordinate with carriers." },
  { name: "Embedded Insurance APIs", desc: "A complete API layer enabling quote, bind, policy, payment, and claims workflows to be embedded within any digital platform or partner journey." },
  { name: "Commission Management", desc: "Commission calculation, tracking, and reconciliation across brokers, agents, partners, and carriers with configurable rules, splits, and payment workflows." },
  { name: "Compliance and Reporting", desc: "Regulatory reporting, compliance dashboards, audit trails, document retention, and governance tools for insurance operations across jurisdictions." },
  { name: "DEXA Insurance Intelligence", desc: "The AI-powered intelligence layer providing quote guidance, underwriting summaries, claims support, broker assistance, renewal prompts, coverage analysis, and governed escalation." }
];

export const brokerModules = [
  "Lead and prospect management", "Client intake", "Personal risk discovery", "Commercial risk discovery",
  "Quote submission tracking", "Carrier comparison", "Proposal builder", "Policy placement workflow",
  "Renewal pipeline", "Service center", "Certificate requests", "ID card requests",
  "Policy review requests", "Policy change requests", "Claims support", "Commission tracking",
  "Producer performance dashboard", "Branch and office management", "Client portal", "DEXA broker assistant"
];

export const reinsuranceRails = [
  { name: "Treaty Management", items: ["Treaty setup", "Coverage period", "Lines of business", "Cedent and reinsurer details", "Proportional structure", "Non proportional structure", "Retention", "Limits", "Attachment points", "Renewal tracking"] },
  { name: "Facultative Placement", items: ["Individual risk submission", "Risk summary", "Document package", "Reinsurer market selection", "Quote comparison", "Acceptance workflow", "Bind workflow", "Placement history"] },
  { name: "Cession Tracking", items: ["Policy cession", "Risk participation", "Retained share", "Ceded share", "Premium cession", "Loss cession", "Recovery status", "Portfolio exposure"] },
  { name: "Bordereaux Management", items: ["Premium bordereaux", "Claims bordereaux", "Risk bordereaux", "Data validation", "Upload workflow", "Reconciliation", "Exception handling", "Export formats"] },
  { name: "Reinsurance Claims Recovery", items: ["Claim linked to ceded risk", "Reinsurer notification", "Recovery calculation", "Document package", "Recovery status", "Settlement tracking", "Outstanding recoveries", "Audit trail"] },
  { name: "Reinsurance Accounting and Settlement", items: ["Ceded premium", "Reinsurer payable", "Recovery receivable", "Commission", "Profit commission where applicable", "Settlement statement", "Reconciliation", "Closing balance"] },
  { name: "Reinsurance Analytics", items: ["Treaty utilization", "Retention exposure", "Ceded exposure", "Reinsurer participation", "Claims recoveries", "Loss ratio by treaty", "Capacity usage", "Portfolio risk summary"] }
];

export const serviceCenterItems = [
  "Report a Claim", "Pay Bill", "Request Auto ID Card", "Request Certificate",
  "Request Policy Review", "Request Policy Change", "Submit Quote Request",
  "Upload Documents", "Track Request", "Talk to Advisor", "Renewal Support",
  "Ask Coverage Question", "Reinsurance Query for cedents", "Broker Service Request"
];

export const dexaInsuranceCapabilities = [
  { role: "Customers", items: ["Quote guidance", "Coverage explanation", "Claims filing support", "Document requirement alerts", "Policy status updates", "Renewal reminders"] },
  { role: "Brokers", items: ["Risk discovery support", "Carrier recommendation", "Renewal pipeline alerts", "Client communication drafts", "Commission visibility", "Coverage gap identification"] },
  { role: "Underwriters", items: ["Risk summary generation", "Document completeness checks", "Referral rule alerts", "Decision support summaries", "Audit-ready documentation", "Anomaly flagging"] },
  { role: "Claims Teams", items: ["Document validation", "Missing document detection", "Coverage verification support", "Fraud indicator alerts", "Settlement workflow guidance", "Communication templates"] },
  { role: "Reinsurers and Cedents", items: ["Exposure summaries", "Bordereaux validation", "Recovery tracking support", "Treaty utilization insights", "Settlement reconciliation", "Portfolio risk summaries"] },
  { role: "Finance Teams", items: ["Commission reconciliation", "Premium collection tracking", "Settlement exception alerts", "Revenue share calculations", "Financial reporting intelligence", "Audit support"] }
];

export const dexaInsuranceScenarios = [
  {
    domain: "Distribution",
    userRole: "Customer",
    question: "I need travel insurance for a Schengen trip. What information do you need?",
    context: "Schengen trip request | Requirements gathering",
    answer: "To start your travel insurance quote, I need your travel dates, destination countries, traveler age, passport country, trip purpose, and whether you need medical coverage, baggage coverage, or cancellation coverage. I will guide you through the quote form and show available options based on product rules.",
    actions: ["Start Quote", "Upload Travel Details", "Talk to Advisor"],
    checks: ["Product Eligibility Check", "Schengen Requirements Audit", "Pricing Rule Application", "Coverage Option Matching"],
    approval: { role: "Underwriting System", action: "Verify auto-bind eligibility" }
  },
  {
    domain: "Policy Servicing",
    userRole: "Insurance Broker",
    question: "Which clients have renewals due in the next 30 days?",
    context: "18 renewals found | High priority: 5 (open claims) | Missing info: 3",
    answer: "You have 18 renewals due in the next 30 days. Five are high priority because they have open claims, three are missing updated risk information, and two require carrier re-quote. Recommended next actions: request updated client details, prepare renewal proposals, and follow up with carriers.",
    actions: ["View Renewals", "Create Follow Up Tasks", "Generate Client Emails"],
    checks: ["Renewal Date Verification", "Claims History Audit", "Risk Data Completeness", "Carrier Quote Status"],
    approval: { role: "Brokerage Manager", action: "Approve renewal list" }
  },
  {
    domain: "Underwriting",
    userRole: "Underwriter",
    question: "Why is this business insurance case flagged for review?",
    context: "High revenue | Multiple locations | Fire claim history | Missing valuation",
    answer: "This case is flagged because the client declared high annual revenue, multiple business locations, previous fire-related claim history, and missing property valuation documents. The system recommends manual review before quote approval.",
    actions: ["View Risk Data", "Request Documents", "Approve for Manual Review"],
    checks: ["Revenue Limit Audit", "Claims History Verification", "Document Presence Check", "Risk Scoring Run"],
    approval: { role: "Senior Underwriter", action: "Grant manual quote authority" }
  },
  {
    domain: "Claims Management",
    userRole: "Customer",
    question: "My motor claim is on hold. Why?",
    context: "Missing repair estimate | Missing police report",
    answer: "Your claim is on hold because the repair estimate and police report are missing. Please upload both documents so the claims team can continue review.",
    actions: ["Upload Documents", "View Claim", "Talk to Claims Team"],
    checks: ["SOP Document Check", "Policy Validity Audit", "Claim ID Verification", "Medical Review Signal"],
    approval: { role: "Claims Manager", action: "Authorize repair start" }
  },
  {
    domain: "Reinsurance",
    userRole: "Analyst",
    question: "Which recoveries are pending from reinsurers this month?",
    context: "7 pending items | Treaty: 3 | Facultative: 2 | Bordereaux mismatch: 2",
    answer: "There are seven pending recovery items this month. Three relate to treaty claims, two relate to facultative property risks, and two require missing bordereaux reconciliation. Recommended next actions: review missing bordereaux records and send recovery follow-up to participating reinsurers.",
    actions: ["View Recoveries", "Export Bordereaux Exceptions", "Create Follow Up"],
    checks: ["Bordereaux Ingestion Audit", "Recovery Calculation Run", "Reinsurer Participation Match", "Ledger Integrity Check"],
    approval: { role: "Reinsurance Lead", action: "Sign off recovery bordereaux" }
  }
];

export const insuranceArchitectureLayers = [
  { name: "Experience Layer", items: ["Customer portal", "Broker portal", "Agent portal", "Carrier portal", "Reinsurer portal", "MGA portal", "TPA portal", "Partner widget", "Admin dashboard", "DEXA panels"] },
  { name: "Product Layer", items: ["Product builder", "Coverage rules", "Exclusions", "Riders", "Pricing rules", "Commission rules", "Document templates", "Product versioning"] },
  { name: "Workflow Layer", items: ["Quote", "Underwriting", "Policy issuance", "Endorsement", "Renewal", "Claims", "Service requests", "Reinsurance placement", "Bordereaux", "Settlement"] },
  { name: "Distribution Layer", items: ["Broker", "Agent", "Bancassurance", "Affinity", "Embedded", "Marketplace", "Direct digital", "Corporate distributor"] },
  { name: "Financial Layer", items: ["Premium collection", "Refunds", "Broker commission", "Agent incentive", "Partner revenue share", "Carrier payable", "Reinsurance recoveries", "Tax and fee logic", "Settlement", "Reconciliation"] },
  { name: "Data Layer", items: ["Customers", "Policies", "Quotes", "Claims", "Risks", "Documents", "Carriers", "Reinsurers", "Commissions", "Service requests", "Bordereaux", "Recoveries"] },
  { name: "Integration Layer", items: ["Carrier APIs", "Reinsurer APIs", "Broker systems", "Payment gateways", "CRM", "Document signing", "KYC", "Banking", "Embedded partner APIs", "Data standards"] },
  { name: "Intelligence Layer", items: ["DEXA", "RAG", "Rules engine", "Workflow orchestration", "Document intelligence", "Underwriting support", "Claims anomaly alerts", "Reinsurance exposure summaries", "Human escalation", "Audit logs"] },
  { name: "Governance Layer", items: ["Role based access", "Audit trails", "Approval workflows", "Compliance reports", "Consent", "Data masking", "Security controls", "Version history", "SLA monitoring", "Admin configuration"] }
];

export const insuranceDeploymentModels = [
  { name: "Mentor managed deployment", desc: "Fully managed insurance infrastructure operated by Mentor Global with SLA-backed service delivery." },
  { name: "White labelled insurance platform", desc: "Deploy Mentor insurance infrastructure under your own brand with custom configuration." },
  { name: "Insurance company infrastructure", desc: "Full carrier-grade infrastructure for product, policy, claims, and distribution operations." },
  { name: "Reinsurance company infrastructure", desc: "Treaty, facultative, bordereaux, and recovery infrastructure for reinsurance operations." },
  { name: "Broker operating system", desc: "Complete broker infrastructure for CRM, submissions, placements, renewals, and commissions." },
  { name: "Embedded insurance API layer", desc: "API-first insurance infrastructure for digital platforms and embedded distribution." },
  { name: "Dedicated tenant", desc: "Isolated instance with dedicated data, custom rules, and organization-specific configurations." },
  { name: "Custom workflow deployment", desc: "Customized workflows, approval chains, and user journeys to match operational needs." },
  { name: "Full code enabled solution where agreed", desc: "Full source code access for organizations requiring complete infrastructure control." }
];

export const insuranceUseCases = [
  { name: "Digital insurance product launch", who: "Insurance Carriers", pain: "Slow product configuration and launch", rail: "Product Rail + Distribution Rail", dexa: "Product setup support and recommendation" },
  { name: "Insurance company policy administration", who: "Insurance Carriers", pain: "Fragmented policy lifecycle management", rail: "Policy Administration Rail", dexa: "Policy servicing guidance and renewal prompts" },
  { name: "Reinsurance treaty management", who: "Reinsurance Companies", pain: "Complex treaty tracking and accounting", rail: "Reinsurance Rail", dexa: "Treaty utilization insights and exposure summaries" },
  { name: "Facultative reinsurance placement", who: "Reinsurance Brokers", pain: "Manual placement and document exchange", rail: "Reinsurance Rail", dexa: "Risk summaries and placement support" },
  { name: "Broker operating system", who: "Insurance Brokers", pain: "Disconnected tools across the broker workflow", rail: "Broker Operating Rail", dexa: "Broker assistant and renewal pipeline alerts" },
  { name: "Embedded insurance checkout", who: "Embedded Partners", pain: "Building insurance into digital journeys", rail: "Embedded Insurance Rail", dexa: "Quote guidance and automated fulfillment" },
  { name: "Insurance digital service center", who: "All Stakeholders", pain: "Manual service request handling", rail: "Digital Service Center Rail", dexa: "Service routing and SLA monitoring" },
  { name: "Claims workflow automation", who: "TPAs and Carriers", pain: "Document-heavy manual claims processing", rail: "Claims Rail", dexa: "Document validation and anomaly detection" },
  { name: "Underwriting workbench", who: "Underwriters", pain: "Scattered risk data and manual assessment", rail: "Underwriting Rail", dexa: "Underwriting summaries and decision support" },
  { name: "Renewal management", who: "Brokers and Carriers", pain: "Missed renewals and manual follow-ups", rail: "Policy Administration Rail", dexa: "Renewal prompts and client communication" },
  { name: "Carrier, broker, and reinsurer portals", who: "All Stakeholders", pain: "No unified portal access per role", rail: "All Rails", dexa: "Role-based intelligence and guidance" },
  { name: "Bancassurance platform", who: "Banks and Affinity Partners", pain: "Integrating insurance into banking journeys", rail: "Embedded Insurance Rail + Distribution Rail", dexa: "Product recommendation and checkout guidance" },
  { name: "Takaful and conventional insurance workflows", who: "Takaful Operators", pain: "Need Shariah-compliant product workflows", rail: "Product Rail + Policy Administration Rail", dexa: "Takaful product rules and compliance guidance" },
  { name: "SME business insurance platform", who: "SME Brokers and Carriers", pain: "Complex commercial risk assessment for SMEs", rail: "Quote Rail + Underwriting Rail", dexa: "Commercial risk discovery and carrier matching" }
];

export const insuranceOutcomes = [
  "Faster product launch", "Cleaner quote intake", "More structured underwriting",
  "Better broker productivity", "Stronger customer service", "Better claim visibility",
  "More controlled renewals", "Improved reinsurance tracking", "Cleaner bordereaux workflows",
  "Better commission tracking", "Stronger embedded distribution", "More scalable operations",
  "Better compliance visibility", "Improved policyholder experience"
];
