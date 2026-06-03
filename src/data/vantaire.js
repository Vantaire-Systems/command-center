// Vantaire Systems — Business Data Layer
// Update this file as products launch, domains change, or financials update.

export const COMPANY = {
  name: "Vantaire Systems",
  tagline: "Software That Works",
  founded: "2026-05-01",
  status: "active",
}

// ── QUICK LAUNCH LINKS ──
export const QUICK_LINKS = [
  { label: "Canopy / GreenTrellis", url: "https://canopy.vantairesystems.com", icon: "🌿", desc: "Cannabis POS — #1 PRIORITY" },
  { label: "Vantaire.com",          url: "https://vantairesystems.com",             icon: "🏠", desc: "Company landing page" },
  { label: "VantaDash",             url: "https://vantadash.vantairesystems.com",  icon: "📊", desc: "Business intelligence platform" },
  { label: "ReplyRadar",            url: "https://replyradar.vantairesystems.com", icon: "🔍", desc: "Social media monitoring" },
  { label: "Specter",               url: "https://specter.vantairesystems.com",    icon: "📡", desc: "Market intelligence" },
  { label: "GitHub Org",            url: "https://github.com/Vantaire-Systems",    icon: "💻", desc: "All source code" },
  { label: "Porkbun DNS",           url: "https://porkbun.com/account/domains",   icon: "🌐", desc: "Domain & DNS management" },
  { label: "Hercules Dashboard",    url: "https://hercules.app",                   icon: "⚙️", desc: "Backend / database / auth" },
]

// ── PRODUCTS ──
// NOTE: Canopy/GreenTrellis is the #1 priority. Order matters.
export const PRODUCTS = [
  {
    id: "greentrellis",
    name: "Canopy / GreenTrellis",
    icon: "🌿",
    color: "#22c55e",
    tag: "FLAGSHIP",
    url: "https://canopy.vantairesystems.com",
    domain: "canopy.vantairesystems.com",
    status: "development",
    stage: "2-Week Sprint — BUILD",
    description: "Point-of-sale and compliance platform for Oklahoma cannabis dispensaries. Built on OpenTHC POS. This is the #1 priority — 2-week sprint in progress.",
    metrics: { mrr: 0, subscribers: 0, freeUsers: 0, paidUsers: 0 },
    features: {
      implemented: ["POS demo page", "OMMA compliance framework", "Metrc API integration"],
      planned: ["Full POS transactions", "Inventory management", "Customer CRM", "Reporting dashboard", "Mobile responsive"],
    },
    stack: ["PHP/Slim", "MySQL", "Docker", "Metrc API", "Hercules.app"],
    actionsNeeded: ["Complete 2-week build sprint (Day 1-14)", "Demo-ready by June 16", "First customer: Grove/Grand Lake dispensary"],
    isPriority: true,
  },
  {
    id: "vantadash",
    name: "VantaDash",
    icon: "📊",
    color: "#0a72ef",
    tag: "SaaS Platform",
    url: "https://vantadash.vantairesystems.com",
    domain: "vantadash.vantairesystems.com",
    status: "development",
    stage: "In Development — Post-Sprint",
    description: "Business intelligence and data integration platform — central view of everything Vantaire.",
    metrics: { mrr: 0, subscribers: 0, freeUsers: 0, paidUsers: 0 },
    features: {
      implemented: ["Data integrations", "Dashboard builder", "API connectors"],
      planned: ["AI insights", "Automated reporting", "White-label", "Mobile app"],
    },
    stack: ["React", "Supabase", "Stripe", "GitHub Pages"],
    actionsNeeded: ["Develop core features", "Design UI/UX", "Set up pricing tiers"],
    isPriority: false,
  },
  {
    id: "replyradar",
    name: "ReplyRadar",
    icon: "🔍",
    color: "#de1d8d",
    tag: "AI Analytics",
    url: "https://replyradar.vantairesystems.com",
    domain: "replyradar.vantairesystems.com",
    status: "live",
    stage: "Live — Growth",
    description: "AI-powered social media monitoring and sentiment analysis. Tracks brand mentions and online conversations.",
    metrics: { mrr: 0, subscribers: 0, freeUsers: 0, paidUsers: 0 },
    features: {
      implemented: ["Social monitoring", "Sentiment analysis", "Real-time alerts", "Brand tracking"],
      planned: ["Competitor analysis", "Influencer tracking", "Multi-platform"],
    },
    stack: ["React", "Supabase", "GitHub Pages"],
    actionsNeeded: ["User acquisition", "Content marketing", "Feature expansion"],
    isPriority: false,
  },
  {
    id: "specter",
    name: "Specter",
    icon: "📡",
    color: "#ff5b4f",
    tag: "Market Intel",
    url: "https://specter.vantairesystems.com",
    domain: "specter.vantairesystems.com",
    status: "live",
    stage: "Live — Growth",
    description: "Market intelligence and competitive analysis. Tracks competitors and predicts market trends.",
    metrics: { mrr: 0, subscribers: 0, freeUsers: 0, paidUsers: 0 },
    features: {
      implemented: ["Market analysis", "Competitive tracking", "Predictive analytics"],
      planned: ["Sector reports", "Investment signals", "API access"],
    },
    stack: ["React", "Supabase", "GitHub Pages"],
    actionsNeeded: ["User acquisition", "Partnerships", "Data partnerships"],
    isPriority: false,
  },
]

// ── SPRINT DATA ──
export const SPRINT = {
  name: "Canopy / GreenTrellis Build Sprint",
  startDate: "2026-06-02",
  endDate: "2026-06-16",
  currentDay: 1,
  totalDays: 14,
  goal: "Demo-ready POS system for Oklahoma cannabis dispensaries",
  firstCustomer: "Grove/Grand Lake dispensary",
  phases: [
    { day: 1,  title: "Docker + OpenTHC POS Foundation", status: "active",    tasks: ["Install Docker + Compose", "Clone OpenTHC POS + submodules", "Set up MySQL via Docker", "Configure .env", "Verify POS loads in browser"] },
    { day: 2,  title: "OpenTHC Configuration",             status: "pending",  tasks: ["Configure for OK OMMA", "Set up admin account", "Configure dispensary info", "Set tax rates", "Test session open/close"] },
    { day: 3,  title: "Metrc Integration",                  status: "pending",  tasks: ["Set up Metrc API service", "Configure sandbox credentials", "Test facility auth", "Create sync service", "Document integration"] },
    { day: 4,  title: "OMMA Compliance Module",             status: "pending",  tasks: ["Patient age verification (18+)", "Purchase limit tracking", "Audit logging", "Compliance report generator", "Receipt disclosure"] },
    { day: 5,  title: "Inventory Management",               status: "pending",  tasks: ["Inventory list view + search", "Add/edit product forms", "Categories (flower, concentrate, edible)", "Batch/lot tracking", "Low-stock alerts", "Metrc sync"] },
    { day: 6,  title: "Product Catalog",                    status: "pending",  tasks: ["Public catalog page", "Product cards (THC/CBD/price)", "Category filtering + search", "Terpene profiles", "OMMA-compliant descriptions"] },
    { day: 7,  title: "Customer Management",                status: "pending",  tasks: ["Customer list view", "Add/edit patient forms", "Patient profile + purchase history", "Medical card expiration tracking", "Customer notes/flags"] },
    { day: 8,  title: "Reporting Dashboard",                status: "pending",  tasks: ["Daily/weekly/monthly sales reports", "Inventory velocity report", "Top products report", "Customer retention metrics", "OMMA compliance report", "Tax liability report", "Export CSV/PDF"] },
    { day: 9,  title: "UI/UX Polish",                       status: "pending",  tasks: ["Vantaire design system", "Loading states + skeletons", "Confirmation dialogs", "Toast notifications", "Form validation", "Keyboard shortcuts"] },
    { day: 10, title: "Mobile Responsive",                   status: "pending",  tasks: ["Tablet viewport support", "Touch-friendly POS", "Larger tap targets", "Navigation gestures", "Print-friendly receipts"] },
    { day: 11, title: "Testing Round 1",                     status: "pending",  tasks: ["End-to-end transaction test", "Metrc sync test", "Purchase limit test", "Compliance audit", "Performance test (100+ products)", "Cross-browser test"] },
    { day: 12, title: "Testing Round 2",                     status: "pending",  tasks: ["Fix Day 11 bugs", "Edge case testing", "Concurrent user testing", "Backup/restore test", "Security review", "Update docs"] },
    { day: 13, title: "Deploy Staging",                      status: "pending",  tasks: ["Set up staging server", "Deploy to staging", "Configure production DB", "SSL certificate", "Smoke test"] },
    { day: 14, title: "Demo Ready",                          status: "pending",  tasks: ["Seed demo data", "Create demo script", "Record demo video", "Prepare leave-behinds", "Final bug sweep", "Deploy production", "SPRINT COMPLETE"] },
  ],
}

// ── ROBLOX GAMES ──
export const ROBLOX_GAMES = [
  { id: "spore-valley",     name: "Spore Valley",      icon: "🍄", genre: "Cozy Sim",        scripts: 10, lines: 2426, tier: "Quick Build" },
  { id: "dress-code",       name: "Dress Code",         icon: "👗", genre: "Fashion/Social",   scripts: 2,  lines: 883,  tier: "Quick Build" },
  { id: "critter-cove",     name: "Critter Cove",       icon: "🏝️", genre: "Life Sim",         scripts: 4,  lines: 1361, tier: "Quick Build" },
  { id: "cozy-depths",      name: "Cozy Depths",        icon: "🐠", genre: "Underwater Sim",   scripts: 3,  lines: 659,  tier: "Mid-Tier" },
  { id: "seasoned",         name: "Seasoned",            icon: "🍳", genre: "Cooking Co-op",    scripts: 3,  lines: 657,  tier: "Mid-Tier" },
  { id: "bone-hollow",      name: "Bone Hollow",         icon: "🔦", genre: "Exploration",      scripts: 3,  lines: 526,  tier: "Mid-Tier" },
  { id: "crossroads-diner",  name: "Crossroads Diner",   icon: "🍔", genre: "Restaurant Co-op", scripts: 3,  lines: 645,  tier: "Mid-Tier" },
  { id: "tower-lords",      name: "Tower Lords",         icon: "🏰", genre: "Tower Defense",    scripts: 5,  lines: 942,  tier: "Mid-Tier" },
]

// ── DOMAINS ──
export const DOMAINS = [
  { domain: "vantairesystems.com",              type: "A/AAAA", target: "GitHub Pages",               status: "active",  desc: "Main company landing page" },
  { domain: "www.vantairesystems.com",           type: "CNAME",  target: "vantaire-systems.github.io", status: "active",  desc: "www redirect" },
  { domain: "canopy.vantairesystems.com",       type: "CNAME",  target: "chippa88.github.io",         status: "active",  desc: "Canopy / GreenTrellis — #1 PRIORITY" },
  { domain: "vantadash.vantairesystems.com",     type: "ALIAS",  target: "vantaire-systems.github.io", status: "active",  desc: "VantaDash SaaS app" },
  { domain: "replyradar.vantairesystems.com",   type: "CNAME",  target: "chippa88.github.io",         status: "active",  desc: "ReplyRadar product" },
  { domain: "specter.vantairesystems.com",      type: "CNAME",  target: "chippa88.github.io",         status: "active",  desc: "Specter product" },
  { domain: "command.vantairesystems.com",      type: "CNAME",  target: "vantaire-systems.github.io", status: "active",  desc: "This Command Center" },
  { domain: "vantairegoods.com",                type: "parked", target: "—",                          status: "parked", desc: "Parked — no site yet" },
]

// ── FINANCIALS ──
export const FINANCIALS = {
  mrr: 0,
  arr: 0,
  totalRevenue: 0,
  totalCosts: 0,
  netIncome: 0,
  runway: "∞",
  costBreakdown: [
    { name: "GitHub",       amount: 0,  desc: "Repos & Pages (Free tier)" },
    { name: "Porkbun DNS",  amount: 70, desc: "Domain renewals (~$70/yr)" },
    { name: "Hercules.app", amount: 0,  desc: "Backend (Free tier)" },
    { name: "Supabase",     amount: 0,  desc: "Database/APIs (Free tier)" },
    { name: "OpenRouter",   amount: 0,  desc: "AI model API calls" },
  ],
  pricing: {
    greentrellis: [
      { tier: "Seed",    price: 99,  desc: "Single location, basic POS" },
      { tier: "Grove",   price: 199, desc: "Multi-location + advanced reporting" },
      { tier: "Canopy",  price: 299, desc: "Enterprise + API access + priority support" },
    ],
  },
}

// ── INFRASTRUCTURE ──
export const INFRASTRUCTURE = {
  github: {
    org: "Vantaire-Systems",
    url: "https://github.com/Vantaire-Systems",
    repos: 3,
    totalStars: 0,
    totalForks: 0,
  },
  hosting: [
    { provider: "GitHub Pages",   url: "https://pages.github.com",         sites: 4, desc: "Static sites for landing + products",      uptime: "99.9%" },
    { provider: "Hercules.app",   url: "https://hercules.app",             sites: 1, desc: "Backend API, database, auth, payments",    uptime: "99.9%" },
    { provider: "Supabase",       url: "https://supabase.com/dashboard",   sites: 1, desc: "Database and API layer for all products",  uptime: "99.99%" },
  ],
  ssl: {
    total: 7,
    active: 4,
    provisioning: 2,
    expired: 0,
  },
}

// ── OPERATIONS ──
export const AGENTS = [
  { id: "lynnix",       name: "Lynnix",       role: "Primary Agent — Strategy, building, and coordination. Reports to James.",              status: "active" },
  { id: "builder",       name: "Builder",       role: "Implementation — Writes code, builds features. On deck for Canopy sprint.",         status: "active" },
  { id: "reviewer",      name: "Reviewer",      role: "Code Review — Checks code quality and security. On deck for Day 11-12.",           status: "active" },
  { id: "qa",            name: "QA",            role: "Quality Assurance — Tests and finds bugs. On deck for Day 11-12.",                  status: "active" },
  { id: "orchestrator",  name: "Orchestrator",  role: "Mission Dispatch — Plans and delegates multi-step projects.",                       status: "active" },
  { id: "researcher",    name: "Researcher",    role: "Research — OMMA rules, market data, competitor analysis.",                          status: "active" },
]

export const CRON_JOBS = [
  { name: "Canopy Sprint Check",        schedule: "Daily",    status: "active", lastRun: "2026-06-02", desc: "Verify sprint progress, update Command Center" },
  { name: "OMMA Rule Monitor",          schedule: "Weekly",   status: "active", lastRun: "2026-06-01", desc: "Check for OMMA regulation changes" },
  { name: "OK Dispensary Market Scan",  schedule: "Weekly",   status: "active", lastRun: "2026-06-02", desc: "Monitor OK dispensary openings, closures, competitor moves" },
]

export const RECENT_ACTIVITY = [
  { date: "2026-06-02", action: "Command Center v2 deployed — added project tracking + CEO dashboard", icon: "🚀" },
  { date: "2026-06-02", action: "Canopy/GreenTrellis 2-week sprint — DAY 1 started", icon: "🌿" },
  { date: "2026-06-02", action: "Vantaire OS directory structure created (00-08)", icon: "📁" },
  { date: "2026-06-02", action: "Command Center v1 deployed with Quick Launch bar", icon: "✅" },
  { date: "2026-06-02", action: "8 Roblox games — 2-pass bug check: 0 issues", icon: "🎮" },
  { date: "2026-06-02", action: "Vantaire landing page live at vantairesystems.com", icon: "🌐" },
]
