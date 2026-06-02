// Vantaire Systems — Business Data Layer
// Update this file as products launch, domains change, or financials update.

export const COMPANY = {
  name: "Vantaire Systems",
  tagline: "Software That Works",
  founded: "2026-05-01",
  status: "active",
}

// ── QUICK LAUNCH LINKS ──
// These appear in the sidebar for one-click access to everything.
export const QUICK_LINKS = [
  { label: "Vantaire.com",       url: "https://vantairesystems.com",          icon: "🏠", desc: "Company landing page" },
  { label: "VantaDash",          url: "https://vantadash.vantairesystems.com", icon: "📊", desc: "Business intelligence platform" },
  { label: "ReplyRadar",         url: "https://replyradar.vantairesystems.com", icon: "🔍", desc: "Social media monitoring" },
  { label: "Specter",            url: "https://specter.vantairesystems.com",  icon: "📡", desc: "Market intelligence" },
  { label: "GreenTrellis (Canopy)", url: "https://canopy.vantairesystems.com", icon: "🌿", desc: "Cannabis POS platform" },
  { label: "GitHub Org",         url: "https://github.com/vantairesystems",   icon: "💻", desc: "All source code" },
  { label: "Porkbun DNS",        url: "https://porkbun.com/account/domains", icon: "🌐", desc: "Domain & DNS management" },
  { label: "Hercules Dashboard", url: "https://hercules.app",                 icon: "⚙️", desc: "Backend / database / auth" },
]

// ── PRODUCTS ──
export const PRODUCTS = [
  {
    id: "vantadash",
    name: "VantaDash",
    icon: "📊",
    color: "#0a72ef",
    tag: "SaaS Platform",
    url: "https://vantadash.vantairesystems.com",
    domain: "vantadash.vantairesystems.com",
    status: "development",
    stage: "In Development",
    description: "Business intelligence and data integration platform — your central view of everything Vantaire.",
    metrics: { mrr: 0, subscribers: 0, freeUsers: 0, paidUsers: 0 },
    features: {
      implemented: ["Data integrations", "Dashboard builder", "API connectors"],
      planned: ["AI insights", "Automated reporting", "White-label", "Mobile app"],
    },
    stack: ["React", "Supabase", "Stripe", "GitHub Pages"],
    actionsNeeded: ["Develop core features", "Design UI/UX", "Set up pricing tiers"],
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
  },
  {
    id: "greentrellis",
    name: "GreenTrellis",
    icon: "🌿",
    color: "#22c55e",
    tag: "Cannabis Tech",
    url: "https://canopy.vantairesystems.com",
    domain: "canopy.vantairesystems.com",
    status: "demo",
    stage: "Pre-Launch — Demo Ready",
    description: "Point-of-sale and compliance platform for Oklahoma cannabis dispensaries. Built to OMMA standards.",
    metrics: { mrr: 0, subscribers: 0, freeUsers: 0, paidUsers: 0 },
    features: {
      implemented: ["POS demo", "OMMA compliance framework", "Metrc API integration"],
      planned: ["Full POS", "Inventory management", "Customer management", "Reporting"],
    },
    stack: ["React", "Supabase", "GitHub Pages"],
    actionsNeeded: ["Complete POS build", "OMMA certification", "Beta testing"],
  },
]

// ── ROBLOX GAMES ──
export const ROBLOX_GAMES = [
  { id: "spore-valley",     name: "Spore Valley",     icon: "🍄", genre: "Cozy Sim",        scripts: 10, lines: 2426, tier: "Quick Build" },
  { id: "dress-code",       name: "Dress Code",        icon: "👗", genre: "Fashion/Social",   scripts: 2,  lines: 883,  tier: "Quick Build" },
  { id: "critter-cove",     name: "Critter Cove",      icon: "🏝️", genre: "Life Sim",         scripts: 4,  lines: 1361, tier: "Quick Build" },
  { id: "cozy-depths",      name: "Cozy Depths",       icon: "🐠", genre: "Underwater Sim",   scripts: 3,  lines: 659,  tier: "Mid-Tier" },
  { id: "seasoned",         name: "Seasoned",           icon: "🍳", genre: "Cooking Co-op",    scripts: 3,  lines: 657,  tier: "Mid-Tier" },
  { id: "bone-hollow",      name: "Bone Hollow",        icon: "🔦", genre: "Exploration",      scripts: 3,  lines: 526,  tier: "Mid-Tier" },
  { id: "crossroads-diner",  name: "Crossroads Diner",  icon: "🍔", genre: "Restaurant Co-op", scripts: 3,  lines: 645,  tier: "Mid-Tier" },
  { id: "tower-lords",      name: "Tower Lords",        icon: "🏰", genre: "Tower Defense",    scripts: 5,  lines: 942,  tier: "Mid-Tier" },
]

// ── DOMAINS ──
export const DOMAINS = [
  { domain: "vantairesystems.com",             type: "A/AAAA", target: "GitHub Pages",            status: "active",       desc: "Main company landing page" },
  { domain: "www.vantairesystems.com",          type: "CNAME",  target: "vantaire-systems.github.io", status: "active",  desc: "www redirect" },
  { domain: "vantadash.vantairesystems.com",    type: "ALIAS",  target: "vantaire-systems.github.io", status: "active",  desc: "VantaDash SaaS app" },
  { domain: "replyradar.vantairesystems.com",  type: "CNAME",  target: "chippa88.github.io",      status: "active",       desc: "ReplyRadar product" },
  { domain: "specter.vantairesystems.com",     type: "CNAME",  target: "chippa88.github.io",      status: "active",       desc: "Specter product" },
  { domain: "canopy.vantairesystems.com",      type: "CNAME",  target: "chippa88.github.io",      status: "active",       desc: "GreenTrellis product" },
  { domain: "command.vantairesystems.com",     type: "CNAME",  target: "vantaire-systems.github.io", status: "active",  desc: "This Command Center" },
  { domain: "vantairegoods.com",               type: "parked", target: "—",                       status: "parked",       desc: "Parked — no site yet" },
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
    { name: "GitHub",       amount: 0,   desc: "Repos & Pages (Free tier)" },
    { name: "Porkbun DNS",  amount: 70,  desc: "Domain renewals (~$70/yr)" },
    { name: "Hercules.app", amount: 0,   desc: "Backend (Free tier)" },
    { name: "Supabase",     amount: 0,   desc: "Database/APIs (Free tier)" },
    { name: "OpenRouter",   amount: 0,   desc: "AI model API calls" },
  ],
}

// ── INFRASTRUCTURE ──
export const INFRASTRUCTURE = {
  github: {
    org: "vantairesystems",
    url: "https://github.com/vantairesystems",
    repos: 2,
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
  { id: "lynnix",       name: "Lynnix",       role: "Primary Agent — Handles most tasks, strategy, and building",     status: "active" },
  { id: "orchestrator",  name: "Orchestrator",  role: "Mission Dispatch — Plans and delegates multi-step projects",      status: "active" },
  { id: "builder",       name: "Builder",       role: "Implementation — Writes code, builds features",                   status: "active" },
  { id: "reviewer",      name: "Reviewer",      role: "Code Review — Checks code quality and security",                 status: "active" },
  { id: "qa",            name: "QA",            role: "Quality Assurance — Tests and finds bugs",                       status: "active" },
  { id: "researcher",    name: "Researcher",    role: "Research — Finds info, checks markets, analyzes",               status: "active" },
]

export const CRON_JOBS = [
  { name: "Canopy POS Health Check",    schedule: "Daily",     status: "active", lastRun: "2026-06-01", desc: "Checks GreenTrellis backend is running" },
  { name: "ReplyRadar Monitoring",      schedule: "Every 2h",  status: "active", lastRun: "2026-06-02", desc: "Social media data collection run" },
  { name: "Specter Content Update",     schedule: "Daily",     status: "active", lastRun: "2026-06-01", desc: "Updates market intel data" },
]

export const RECENT_ACTIVITY = [
  { date: "2026-06-02", action: "Command Center v1 deployed",              icon: "🚀" },
  { date: "2026-06-02", action: "8 Roblox games — 2-pass bug check: 0 issues", icon: "✅" },
  { date: "2026-06-02", action: "Vantaire landing page live at vantairesystems.com", icon: "🌐" },
  { date: "2026-06-01", action: "Lynnix persona activated",                 icon: "🤖" },
  { date: "2026-06-01", action: "ReplyRadar moved to Vantaire subdomain",   icon: "🔍" },
  { date: "2026-05-31", action: "Roblox game sprint — 8 games in 2 sessions", icon: "🎮" },
]
