export const fintechProblems = [
  "Wallets are disconnected from real workflows",
  "Payments are collected but not properly reconciled",
  "Providers wait without settlement visibility",
  "Employers cannot see real time fund utilization",
  "Payroll is separate from employee financial wellbeing",
  "Corporate expenses are difficult to govern",
  "Insurance payments remain fragmented",
  "Credit workflows are not linked to eligibility",
  "Finance teams manually match too much data",
  "Commission and MDR logic is hard to track",
  "Embedded partners need APIs",
  "Exposure is not visible in real time"
];

export const fintechRails = [
  { name: "Wallet Rail", items: ["Mentor Wallet", "Employee wallets", "Corporate wallets", "Provider wallets", "Employer funded wallets", "Insurance wallets", "Reimbursement wallets", "Expense wallets", "Restricted wallets", "Category based spending controls", "Wallet limits", "Wallet transaction history"] },
  { name: "Card Rail", items: ["Mentor Card", "Physical cards", "Virtual cards", "Employee expense cards", "Health benefit cards", "Corporate spending cards", "Provider payment cards", "Card spending limits", "Merchant category controls", "Card freeze and unfreeze", "Card transaction alerts", "Card settlement reporting"] },
  { name: "Payment Rail", items: ["QR payments", "POS payments", "SoftPOS flows", "Payment links", "Payment buttons", "Bank transfers", "Wallet payments", "Card payments", "Split payments", "Refunds", "Failed payment handling", "Payment status tracking"] },
  { name: "Ledger Rail", items: ["User ledger", "Corporate ledger", "Provider ledger", "Insurer ledger", "Broker ledger", "Claims ledger", "Payroll ledger", "Expense ledger", "Wallet ledger", "Commission ledger", "Transaction journal", "Audit trail"] },
  { name: "Settlement Rail", items: ["Provider settlements", "Corporate settlements", "Partner settlements", "Broker settlements", "Agent settlements", "Payroll disbursements", "Claim disbursements", "Vendor settlements", "Employee reimbursements", "Multi party settlement logic", "Settlement schedule", "Settlement status"] },
  { name: "Reconciliation Rail", items: ["Bank statement matching", "Invoice versus payment matching", "Claim payout reconciliation", "Payroll reconciliation", "Expense reconciliation", "Provider payable reconciliation", "Corporate receivable reconciliation", "Wallet balance reconciliation", "Settlement mismatch detection", "Duplicate transaction checks", "Exception queue", "Finance approval workflow"] },
  { name: "Credit and Lending Rail", items: ["Health credit", "Salary linked credit", "Employee loans", "Earned wage access", "Provider financing", "Invoice financing", "Credit eligibility workflow", "Lender integration", "Repayment schedules", "Exposure limits", "Approval workflows", "Shariah compliant financing rules where required"] },
  { name: "Provider Receivable Rail", items: ["Provider invoices", "Provider payables", "Receivable dashboard", "Settlement status", "Deductions", "Tax logic", "Claim linked receivables", "Discount linked receivables", "Financing eligibility", "Aging reports", "Exception queue", "Payment history"] },
  { name: "Insurance Payment Rail", items: ["Premium collection", "Agent payment links", "Broker collections", "Claim disbursement", "Refund processing", "Policy linked payments", "Commission payouts", "Reinsurance recovery tracking", "Takaful fund tracking where applicable", "Insurance wallet", "Payment matching", "Policy update triggers"] },
  { name: "Corporate Expense Rail", items: ["Employee spending limits", "Department budgets", "Approval workflows", "Expense categories", "Expense cards", "Expense wallets", "Merchant category controls", "Receipt upload", "Expense reimbursement", "Policy violation alerts", "Expense reporting", "Audit trail"] },
  { name: "Payroll Rail", items: ["Salary disbursement", "Payroll file upload", "Payroll approval workflow", "Earned wage access", "Salary advances", "Deductions", "Reimbursements", "Employee wallet payout", "Bank payout", "Payroll reconciliation", "Payroll reports", "Employer dashboard"] },
  { name: "Embedded Finance Rail", items: ["Wallet API", "Payment API", "Card API", "Credit API", "Payroll API", "Expense API", "Settlement API", "Reconciliation API", "Claim payout API", "Premium collection API", "Commission API", "Webhooks"] },
  { name: "DEXA Intelligence Rail", items: ["Wallet explanation", "Payment issue diagnosis", "Credit eligibility explanation", "Settlement delay explanation", "Reconciliation exception summary", "Provider payable support", "Corporate expense policy guidance", "Payroll disbursement support", "Insurance payment tracking", "Claim payout explanation", "Exposure risk alerts", "Finance reporting"] }
];

export const fintechStakeholders = [
  { name: "Employers", pain: "Cannot see real-time fund utilization across health wallets, payroll, and expenses.", infra: "Corporate wallet, expense management, payroll infrastructure, fund dashboards.", outcome: "Real-time visibility into all employee financial flows with controlled spending." },
  { name: "Employees", pain: "Disconnected wallets, unclear benefits, and no visibility into payroll or credit.", infra: "Mentor Wallet, Mentor Card, payroll payout, earned wage access, DEXA guidance.", outcome: "One financial app for benefits, payments, expenses, payroll, and credit." },
  { name: "Healthcare Providers", pain: "Delayed payments, no settlement visibility, manual invoice tracking.", infra: "Provider receivables, settlement engine, reconciliation, payment tracking.", outcome: "Faster settlement cycles with real-time visibility into all receivables." },
  { name: "Insurance Companies", pain: "Fragmented premium collection, claim payouts, and commission settlements.", infra: "Insurance payment rail, premium collection, claim disbursement, commission engine.", outcome: "Connected insurance money flows from premium to payout to settlement." },
  { name: "TPAs", pain: "Complex claim disbursements, provider settlements, and fund reconciliation.", infra: "Claim payout engine, provider settlement, reconciliation, financial reporting.", outcome: "Automated claim disbursement with reconciled provider settlements." },
  { name: "Fintech Companies", pain: "Building financial infrastructure from scratch is expensive and complex.", infra: "Embedded finance APIs, wallet engine, payment rails, ledger, settlement.", outcome: "Ready-to-deploy financial infrastructure via APIs without building from scratch." },
  { name: "Banks and Lenders", pain: "Limited reach into healthcare and insurance lending workflows.", infra: "Credit engine, lender integration, repayment workflows, exposure dashboards.", outcome: "Embedded lending into healthcare and insurance ecosystems." },
  { name: "Brokers and Agents", pain: "Manual commission tracking and delayed payment visibility.", infra: "Commission engine, payment tracking, settlement dashboard, DEXA support.", outcome: "Real-time commission visibility with automated settlement." },
  { name: "Marketplaces and Platforms", pain: "Need embedded financial flows without building payment infrastructure.", infra: "Embedded finance APIs, wallet API, payment API, settlement API, webhooks.", outcome: "Full financial lifecycle embedded within platform experiences." },
  { name: "Governments and Public Programs", pain: "Disbursement visibility, fund utilization tracking, and reconciliation at scale.", infra: "Wallet infrastructure, disbursement engine, reconciliation, audit trails.", outcome: "Transparent fund disbursement with complete audit trails." }
];

export const fintechJourneys = [
  { role: "Employee Wallet Journey", steps: ["Opens Mentor Wallet", "Checks health benefit balance", "Uses QR code or Mentor Card", "Authorizes OPD payment", "Tracks transaction", "Submits reimbursement if needed", "Asks DEXA why a payment failed"] },
  { role: "Corporate Expense Journey", steps: ["Company sets expense policy", "Assigns employee card or wallet limit", "Employee spends within category rules", "Receipt is uploaded", "Manager approves or rejects", "Finance reconciles expense", "DEXA explains exceptions"] },
  { role: "Payroll Journey", steps: ["Employer uploads payroll file", "Maker checker approval is completed", "Salaries are disbursed", "Employees receive wallet or bank payout", "Advances and deductions are posted", "Payroll is reconciled", "Finance dashboard updates"] },
  { role: "Provider Settlement Journey", steps: ["Provider confirms service", "Invoice is submitted", "Payable is created", "Claim or wallet funding is matched", "Settlement is scheduled", "Reconciliation checks mismatch", "Provider receives payout"] },
  { role: "Insurance Payment Journey", steps: ["Customer pays premium", "Payment is linked to policy", "Payment status updates", "Commission is calculated", "Claim payout is triggered when approved", "Refund or adjustment is processed", "Reconciliation is completed"] },
  { role: "Health Credit Journey", steps: ["Employee checks eligibility", "Credit application is submitted", "Employer or lender rules are applied", "Approval workflow runs", "Funds are disbursed to provider or wallet", "Repayment schedule starts", "Exposure dashboard updates"] },
  { role: "Embedded Partner Journey", steps: ["Partner calls API", "Wallet, payment, card, or credit flow opens", "User completes transaction", "Ledger entry is posted", "Webhook event is sent", "Settlement is scheduled", "Partner dashboard updates"] }
];

export const fintechModules = [
  { name: "Mentor Wallet Engine", desc: "Multi-purpose wallet infrastructure supporting health benefits, expenses, payroll, provider payments, and insurance wallets with category controls and spending limits." },
  { name: "Mentor Card Infrastructure", desc: "Physical and virtual card issuance with merchant controls, spending limits, category restrictions, freeze capabilities, and real-time transaction alerts." },
  { name: "QR Payment Infrastructure", desc: "QR code generation and scanning for point-of-service payments at providers, pharmacies, labs, and retail locations with real-time authorization." },
  { name: "POS and SoftPOS Infrastructure", desc: "Point-of-sale payment acceptance infrastructure for providers and merchants with real-time eligibility verification and wallet deductions." },
  { name: "Payment Collection Engine", desc: "Multi-channel payment collection including bank transfers, card payments, wallet payments, payment links, and recurring payment workflows." },
  { name: "Payout and Disbursement Engine", desc: "Automated disbursement for salaries, claims, reimbursements, provider settlements, commissions, and refunds across bank and wallet channels." },
  { name: "Ledger Engine", desc: "Multi-entity double-entry ledger system tracking all financial flows across users, corporates, providers, insurers, and partners with full audit trails." },
  { name: "Settlement Engine", desc: "Multi-party settlement infrastructure with configurable schedules, matching logic, approval workflows, and status tracking across all stakeholders." },
  { name: "Reconciliation Engine", desc: "Automated reconciliation across bank statements, invoices, claims, payroll, expenses, and settlements with exception detection and approval workflows." },
  { name: "Corporate Fund and Pool Management", desc: "Corporate health pools, department budgets, employee allocations, fund utilization dashboards, and real-time balance tracking with spending controls." },
  { name: "Corporate Expense Management", desc: "End-to-end expense infrastructure with cards, wallets, category controls, approval workflows, receipt management, and policy enforcement." },
  { name: "Payroll Infrastructure", desc: "Payroll processing with file upload, maker-checker approval, multi-channel disbursement, deductions, advances, and reconciliation." },
  { name: "Earned Wage Access", desc: "Infrastructure enabling employees to access earned wages before payday with employer controls, limits, and automated payroll deductions." },
  { name: "Health Credit Engine", desc: "Credit infrastructure for health financing with eligibility workflows, employer or lender rules, disbursement, and repayment schedules." },
  { name: "Lending Workflow", desc: "Configurable lending workflows for salary-linked credit, provider financing, and invoice financing with lender integration and exposure controls." },
  { name: "Provider Receivables", desc: "Provider invoice management, payable tracking, settlement scheduling, aging reports, and financing eligibility assessment." },
  { name: "Invoice Financing", desc: "Infrastructure enabling providers to finance outstanding receivables with configurable eligibility rules and lender integration." },
  { name: "Insurance Payment Infrastructure", desc: "Premium collection, claim disbursement, commission payouts, refund processing, and reinsurance recovery tracking for insurance operations." },
  { name: "MDR and Commission Logic", desc: "Configurable MDR calculations, commission splits, partner revenue shares, and automated payout workflows with reconciliation." },
  { name: "Transaction Monitoring", desc: "Real-time transaction monitoring for anomalies, duplicates, exposure breaches, and policy violations with alerting and escalation." },
  { name: "Financial Reporting", desc: "Comprehensive financial reporting across all rails including transaction summaries, settlement reports, reconciliation status, and exposure dashboards." },
  { name: "DEXA Financial Intelligence", desc: "AI-powered financial intelligence providing payment diagnosis, settlement explanation, reconciliation summaries, credit guidance, and governed escalation." }
];

export const walletCapabilities = [
  "Health benefit wallet", "Corporate funded wallet", "Employee expense wallet", "Payroll wallet",
  "Provider wallet", "Insurance wallet", "Reimbursement wallet", "Credit wallet", "Loyalty wallet",
  "Restricted category wallet", "QR payment support", "Wallet to bank payout", "Wallet to provider payment",
  "Wallet transaction history", "DEXA wallet guidance"
];

export const cardCapabilities = [
  "Physical card", "Virtual card", "Health benefit card", "Expense card", "Payroll linked card",
  "Provider payment card", "Merchant controls", "Category controls", "Spending limits",
  "Freeze and unfreeze", "Transaction alerts", "Approval rules", "Usage analytics",
  "Reconciliation", "DEXA card support"
];

export const healthcareUseCases = [
  { name: "Corporate health wallet", who: "Employers", pain: "No real-time benefit fund control", rail: "Wallet Rail", dexa: "Wallet usage guidance" },
  { name: "Employee benefit wallet", who: "Employees", pain: "Unclear benefit balance", rail: "Wallet Rail", dexa: "Balance explanation" },
  { name: "Cashless OPD payment", who: "Employees", pain: "Pay first, claim later", rail: "Payment Rail + Wallet Rail", dexa: "Payment authorization guidance" },
  { name: "IPD limit authorization", who: "Employees", pain: "Unclear coverage", rail: "Wallet Rail + Credit Rail", dexa: "Limit explanation" },
  { name: "Provider settlement", who: "Providers", pain: "Delayed payments", rail: "Settlement Rail", dexa: "Settlement status updates" },
  { name: "Reimbursement payout", who: "Employees", pain: "Slow reimbursement", rail: "Settlement Rail", dexa: "Payout tracking support" },
  { name: "Health credit", who: "Employees", pain: "Upfront payment barriers", rail: "Credit Rail", dexa: "Eligibility explanation" },
  { name: "Provider receivable financing", who: "Providers", pain: "Cash flow gaps", rail: "Provider Receivable Rail", dexa: "Financing eligibility support" },
  { name: "Healthcare POS payment", who: "Providers", pain: "Manual collections", rail: "Payment Rail", dexa: "Payment confirmation" },
  { name: "Pharmacy and lab QR payments", who: "Employees", pain: "No cashless option", rail: "Payment Rail", dexa: "QR payment guidance" },
  { name: "Wallet based self funded health plan", who: "Employers", pain: "Inflexible insurance", rail: "Wallet Rail + Fund Management", dexa: "Fund utilization insights" },
  { name: "Employee medical expense card", who: "Employees", pain: "No controlled benefit card", rail: "Card Rail", dexa: "Card usage guidance" }
];

export const insuranceUseCases = [
  { name: "Premium collection", who: "Insurers", pain: "Fragmented collections", rail: "Insurance Payment Rail", dexa: "Payment matching support" },
  { name: "Broker payment collection", who: "Brokers", pain: "Manual tracking", rail: "Insurance Payment Rail", dexa: "Collection status" },
  { name: "Agent payment links", who: "Agents", pain: "No digital collection", rail: "Payment Rail", dexa: "Link generation support" },
  { name: "Claim disbursement", who: "TPAs", pain: "Slow payouts", rail: "Settlement Rail", dexa: "Disbursement tracking" },
  { name: "Refund processing", who: "Insurers", pain: "Manual refunds", rail: "Payment Rail", dexa: "Refund status explanation" },
  { name: "Policy linked payment matching", who: "Insurers", pain: "Unmatched payments", rail: "Reconciliation Rail", dexa: "Matching support" },
  { name: "Commission payout", who: "Brokers", pain: "Delayed commissions", rail: "Settlement Rail", dexa: "Commission calculation" },
  { name: "Reinsurance recovery tracking", who: "Insurers", pain: "Manual recovery", rail: "Insurance Payment Rail", dexa: "Recovery status alerts" },
  { name: "Takaful fund tracking", who: "Takaful Operators", pain: "Fund separation", rail: "Ledger Rail", dexa: "Fund compliance" },
  { name: "Insurance wallet", who: "Customers", pain: "No payment wallet", rail: "Wallet Rail", dexa: "Wallet guidance" },
  { name: "Embedded insurance checkout", who: "Partners", pain: "No embedded payments", rail: "Embedded Finance Rail", dexa: "Checkout support" },
  { name: "Customer payment dashboard", who: "Customers", pain: "No payment visibility", rail: "Payment Rail", dexa: "Payment explanation" }
];

export const dexaFinanceCapabilities = [
  { role: "Employees", items: ["Wallet balance explanation", "Payment failure diagnosis", "Credit eligibility guidance", "Expense policy clarification", "Reimbursement status updates", "Card usage support"] },
  { role: "Employers", items: ["Fund utilization summaries", "Expense exception alerts", "Payroll disbursement support", "Budget tracking insights", "Policy violation notifications", "Financial reporting intelligence"] },
  { role: "Providers", items: ["Settlement status updates", "Receivable aging alerts", "Invoice matching support", "Payment confirmation", "Financing eligibility guidance", "Reconciliation exception explanation"] },
  { role: "Insurers", items: ["Premium collection tracking", "Claim disbursement support", "Commission calculation explanation", "Recovery status alerts", "Payment matching guidance", "Financial reporting intelligence"] },
  { role: "Finance Teams", items: ["Reconciliation exception summaries", "Settlement mismatch diagnosis", "Exposure risk alerts", "Audit support", "Transaction anomaly flagging", "Financial reporting automation"] }
];

export const dexaFinanceScenarios = [
  {
    domain: "Wallet Management",
    userRole: "Employee",
    question: "Why was my OPD payment declined?",
    context: "Transaction amount: 12,000 | Available balance: 8,000",
    answer: "Your OPD wallet has 8,000 available, but the transaction amount was 12,000. You can pay the difference, request exception approval if your plan allows it, or use another eligible benefit category.",
    actions: ["Pay Difference", "Request Approval", "View Wallet Rules"],
    checks: ["Wallet Balance Check", "Policy Limit Verification", "Category Eligibility", "Exception Rules Check"],
    approval: { role: "Finance Admin", action: "Authorize Excess" }
  },
  {
    domain: "Settlement Operations",
    userRole: "Healthcare Provider",
    question: "When will my payment be settled?",
    context: "Payable amount: 350,000 | Invoices: 2 matched, 1 pending eligibility",
    answer: "Your payable of 350,000 is scheduled for settlement on Friday. Two invoices are matched. One invoice is pending reconciliation because patient eligibility confirmation is missing.",
    actions: ["View Payables", "Upload Missing Data", "Contact Finance"],
    checks: ["Invoice Matching", "Eligibility Verification", "Settlement Schedule Check", "Reconciliation Audit"],
    approval: { role: "Settlement Officer", action: "Finalize Disbursement" }
  },
  {
    domain: "Corporate Governance",
    userRole: "Finance Controller",
    question: "Why was this employee expense flagged?",
    context: "Meal expense exceeded limit by 4,500 | Missing receipt",
    answer: "This expense was flagged because it exceeded the department meal limit by 4,500 and the receipt is missing. Recommended action: request receipt and manager approval before reimbursement.",
    actions: ["Request Receipt", "Send to Manager", "Reject Expense"],
    checks: ["Limit Enforcement", "Receipt Presence Check", "Department Budget Audit", "Policy Violation Flag"],
    approval: { role: "Department Manager", action: "Approve Exception" }
  },
  {
    domain: "Payroll Infrastructure",
    userRole: "HR Administrator",
    question: "Why is payroll batch still pending?",
    context: "Bank record failures: 12 | Advances needing confirmation: 3",
    answer: "Payroll batch is pending because 12 employee bank account records failed validation and 3 earned wage advances need deduction confirmation before final disbursement.",
    actions: ["View Failed Records", "Confirm Deductions", "Approve Batch"],
    checks: ["Bank Account Validation", "Advance Deduction Matching", "Funding Availability Check", "Compliance Audit"],
    approval: { role: "Payroll Manager", action: "Release Batch" }
  },
  {
    domain: "Insurance Payments",
    userRole: "Policyholder",
    question: "Did my premium payment update my policy?",
    context: "Unmatched payment reference | Pending policy update",
    answer: "Your payment was received, but policy status is pending update because the payment reference has not matched with your policy record. I have created a matching request for the finance team.",
    actions: ["View Payment", "Upload Receipt", "Talk to Support"],
    checks: ["Payment Gateway Sync", "Reference ID Matching", "Policy Status Check", "Ledger Entry Audit"],
    approval: { role: "Operations Lead", action: "Manual Match Reference" }
  },
  {
    domain: "Finance Reconciliation",
    userRole: "Finance Manager",
    question: "Why is today's settlement mismatch 42,000?",
    context: "Duplicates detected | Partial claim approval mismatch",
    answer: "The mismatch is linked to three transactions. Two have duplicate invoice numbers and one has a partial claim approval. Recommended action: review exception queue and approve revised settlement.",
    actions: ["View Exceptions", "Export Report", "Assign to Finance"],
    checks: ["Duplicate Detection", "Claim vs Settlement Matching", "Exception Logic Run", "Ledger Integrity Check"],
    approval: { role: "CFO / Finance Lead", action: "Override Exception" }
  }
];

export const fintechArchitectureLayers = [
  { name: "Experience Layer", items: ["Mentor Wallet app", "Mentor Card interface", "Corporate portal", "Provider portal", "Insurer portal", "Finance dashboard", "Payroll dashboard", "Expense dashboard", "Admin dashboard", "DEXA panels"] },
  { name: "Money Movement Layer", items: ["Payments", "Wallets", "Cards", "QR payments", "POS payments", "Credit disbursement", "Payroll disbursement", "Claim payouts", "Refunds", "Settlements"] },
  { name: "Ledger Layer", items: ["User ledger", "Provider ledger", "Corporate ledger", "Insurer ledger", "Payroll ledger", "Expense ledger", "Claims ledger", "Wallet ledger", "Commission ledger", "Settlement ledger"] },
  { name: "Workflow Layer", items: ["Payment approval", "Credit approval", "Payroll approval", "Expense approval", "Reimbursement workflow", "Settlement workflow", "Reconciliation workflow", "Invoice financing workflow", "Claim disbursement workflow", "Commission payout workflow"] },
  { name: "Integration Layer", items: ["Banks", "Payment gateways", "Wallet partners", "Card processors", "Lenders", "Insurers", "Providers", "POS systems", "ERP", "HRMS", "Payroll systems", "Accounting systems"] },
  { name: "Intelligence Layer", items: ["DEXA", "Rules engine", "Anomaly flags", "Exception summaries", "Finance insights", "Payroll insights", "Expense insights", "Approval routing", "Human escalation", "Audit ready answers"] },
  { name: "Governance Layer", items: ["Role based access", "Maker checker", "Approval workflows", "Transaction logs", "Audit trails", "Limits", "Exposure controls", "Data masking", "Consent", "Compliance reporting"] }
];

export const fintechDeploymentModels = [
  { name: "Mentor managed fintech infrastructure", desc: "Fully managed financial infrastructure operated by Mentor Global with SLA-backed service delivery." },
  { name: "White labelled wallet platform", desc: "Deploy Mentor Wallet under your own brand with custom configuration and spending controls." },
  { name: "Mentor Card infrastructure", desc: "Physical and virtual card issuance infrastructure with merchant controls and spending governance." },
  { name: "Dedicated tenant", desc: "Isolated financial infrastructure instance with dedicated data and organization-specific configurations." },
  { name: "API first fintech layer", desc: "Integrate specific financial rails via APIs into existing ecosystems without full platform deployment." },
  { name: "Healthcare embedded finance deployment", desc: "Financial infrastructure embedded within healthcare ecosystems for wallets, credit, and settlements." },
  { name: "Insurance embedded finance deployment", desc: "Financial infrastructure for insurance collections, disbursements, commissions, and settlements." },
  { name: "Corporate finance deployment", desc: "Expense management, payroll, and corporate fund infrastructure for enterprise organizations." },
  { name: "Custom workflow deployment", desc: "Customized financial workflows, approval chains, and settlement rules to match operational needs." },
  { name: "Full code enabled solution where agreed", desc: "Full source code access for organizations requiring complete financial infrastructure control." }
];

export const fintechUseCases = [
  { name: "Corporate health wallet", who: "Employers", pain: "No controlled health fund", rail: "Wallet Rail", dexa: "Fund utilization insights" },
  { name: "Mentor Wallet for employees", who: "Employees", pain: "No unified financial app", rail: "Wallet Rail", dexa: "Wallet guidance" },
  { name: "Mentor Card for benefits and expenses", who: "Employees", pain: "No controlled benefit card", rail: "Card Rail", dexa: "Card usage support" },
  { name: "QR payment at healthcare providers", who: "Employees", pain: "No cashless option", rail: "Payment Rail", dexa: "Payment guidance" },
  { name: "Provider settlement system", who: "Providers", pain: "Delayed settlements", rail: "Settlement Rail", dexa: "Settlement tracking" },
  { name: "Insurance premium collection", who: "Insurers", pain: "Fragmented collections", rail: "Insurance Payment Rail", dexa: "Collection support" },
  { name: "Claim disbursement", who: "TPAs", pain: "Slow claim payouts", rail: "Settlement Rail", dexa: "Disbursement tracking" },
  { name: "Embedded wallet for marketplaces", who: "Platforms", pain: "No embedded wallet", rail: "Embedded Finance Rail", dexa: "API guidance" },
  { name: "Health credit program", who: "Employees", pain: "Upfront payment barriers", rail: "Credit Rail", dexa: "Eligibility support" },
  { name: "Invoice financing", who: "Providers", pain: "Cash flow gaps", rail: "Credit Rail", dexa: "Financing guidance" },
  { name: "Employer funded wallet", who: "Employers", pain: "No fund control", rail: "Wallet Rail", dexa: "Utilization insights" },
  { name: "Broker commission payouts", who: "Brokers", pain: "Delayed commissions", rail: "Settlement Rail", dexa: "Commission tracking" },
  { name: "Payroll disbursement", who: "Employers", pain: "Complex payroll", rail: "Payroll Rail", dexa: "Payroll support" },
  { name: "Earned wage access", who: "Employees", pain: "No early access", rail: "Payroll Rail", dexa: "EWA guidance" },
  { name: "Corporate expense management", who: "Employers", pain: "Uncontrolled spending", rail: "Corporate Expense Rail", dexa: "Expense policy guidance" },
  { name: "Reimbursement automation", who: "Employees", pain: "Slow reimbursement", rail: "Settlement Rail", dexa: "Status updates" },
  { name: "Reconciliation control center", who: "Finance", pain: "Manual matching", rail: "Reconciliation Rail", dexa: "Exception summaries" },
  { name: "Embedded lending for health services", who: "Lenders", pain: "No health lending channel", rail: "Credit Rail + Embedded Finance Rail", dexa: "Credit guidance" }
];

export const fintechOutcomes = [
  "Better money movement visibility", "Faster settlement tracking", "Cleaner reconciliation",
  "Stronger wallet control", "Better provider payment experience", "More transparent fund utilization",
  "Better payroll visibility", "Better expense governance", "Improved premium and claim payment visibility",
  "Better credit workflow control", "Stronger finance governance", "Better embedded finance readiness",
  "More scalable health fintech operations", "Better customer financial experience"
];
