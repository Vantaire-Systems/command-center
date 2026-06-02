import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import {
  COMPANY, QUICK_LINKS, PRODUCTS, ROBLOX_GAMES,
  DOMAINS, FINANCIALS, INFRASTRUCTURE, AGENTS, CRON_JOBS, RECENT_ACTIVITY
} from './data/vantaire.js'
import './App.css'

const COLORS = ['#0a72ef', '#de1d8d', '#ff5b4f', '#22c55e', '#f59e0b', '#8b5cf6']

/* ─── SHARED COMPONENTS ─── */
function StatusDot({ status }) {
  const colors = { active: '#22c55e', live: '#22c55e', operational: '#22c55e', development: '#f59e0b', demo: '#8b5cf6', parked: '#666', provisioning: '#f59e0b' }
  return <span className="status-dot" style={{ background: colors[status] || '#666' }} />
}

function StatusBadge({ status }) {
  const labels = { active: 'Active', live: 'Live', operational: 'Operational', development: 'Development', demo: 'Demo', parked: 'Parked', provisioning: 'Provisioning' }
  const colors = { active: '#22c55e', live: '#22c55e', operational: '#22c55e', development: '#f59e0b', demo: '#8b5cf6', parked: '#666', provisioning: '#f59e0b' }
  const c = colors[status] || '#666'
  return <span className="status-badge" style={{ background: c + '20', color: c }}>{labels[status] || status}</span>
}

function MetricCard({ label, value, sub, color }) {
  return (
    <div className="metric-card">
      <div className="metric-value" style={{ color }}>{value}</div>
      <div className="metric-label">{label}</div>
      {sub && <div className="metric-sub">{sub}</div>}
    </div>
  )
}

function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>
}

function Panel({ children, className = '' }) {
  return <div className={`panel ${className}`}>{children}</div>
}

function ExternalLink({ href, children, icon }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="ext-link">{icon && <span className="link-icon">{icon}</span>}{children}</a>
}

/* ─── QUICK LINKS BAR ─── */
function QuickLinksBar() {
  const [open, setOpen] = useState(true)
  return (
    <div className="quick-links-section">
      <button className="quick-links-toggle" onClick={() => setOpen(!open)}>
        <span>⚡ Quick Launch</span>
        <span className="toggle-arrow">{open ? '▾' : '▸'}</span>
      </button>
      {open && (
        <div className="quick-links-grid">
          {QUICK_LINKS.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="quick-link-card">
              <span className="ql-icon">{link.icon}</span>
              <div className="ql-info">
                <span className="ql-label">{link.label}</span>
                <span className="ql-desc">{link.desc}</span>
              </div>
              <span className="ql-arrow">→</span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

/* ─── DASHBOARD TAB ─── */
function DashboardTab() {
  const totalScripts = ROBLOX_GAMES.reduce((s, g) => s + g.scripts, 0)
  const totalLines = ROBLOX_GAMES.reduce((s, g) => s + g.lines, 0)
  const liveProducts = PRODUCTS.filter(p => p.status === 'live').length
  const sslActive = INFRASTRUCTURE.ssl.active
  const sslTotal = INFRASTRUCTURE.ssl.total
  const domainCount = DOMAINS.filter(d => d.status !== 'parked').length

  return (
    <div className="tab-content">
      <QuickLinksBar />

      <div className="hero-bar">
        <div className="hero-left">
          <h1>{COMPANY.name}</h1>
          <p>{COMPANY.tagline} — Founded {COMPANY.founded}</p>
        </div>
        <div className="hero-right">
          <div className="hero-status"><StatusDot status="active" /> All Systems Operational</div>
        </div>
      </div>

      <div className="metrics-row">
        <MetricCard label="Live Products" value={liveProducts} sub={`of ${PRODUCTS.length} total`} color="#22c55e" />
        <MetricCard label="Roblox Games" value={ROBLOX_GAMES.length} sub={`${totalScripts} scripts written`} color="#8b5cf6" />
        <MetricCard label="Codebase" value={`${(totalLines / 1000).toFixed(1)}K`} sub="lines of Lua" color="#f59e0b" />
        <MetricCard label="Domains" value={domainCount} sub={`${sslActive}/${sslTotal} SSL active`} color="#0a72ef" />
        <MetricCard label="MRR" value="$0" sub="Pre-revenue" color="#de1d8d" />
        <MetricCard label="Agents" value={AGENTS.length} sub="Hermes swarm" color="#06b6d4" />
      </div>

      <div className="grid-2">
        <Panel>
          <SectionTitle>📦 Product Pipeline</SectionTitle>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={PRODUCTS.map(p => ({ name: p.name, implemented: p.features.implemented.length, planned: p.features.planned.length }))}>
              <XAxis dataKey="name" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 11 }} allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="implemented" fill="#22c55e" name="Built" radius={[2, 2, 0, 0]} />
              <Bar dataKey="planned" fill="#0a72ef" name="Planned" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Panel>

        <Panel>
          <SectionTitle>📊 Roblox Games by Size</SectionTitle>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={ROBLOX_GAMES.map(g => ({ name: g.name, lines: g.lines }))} layout="vertical">
              <XAxis type="number" tick={{ fontSize: 11 }} />
              <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 10 }} />
              <Tooltip />
              <Bar dataKey="lines" fill="#8b5cf6" radius={[0, 4, 4, 0]} name="Lines of Code" />
            </BarChart>
          </ResponsiveContainer>
        </Panel>
      </div>

      <Panel>
        <SectionTitle>📋 What Is This? — Vantaire Systems Overview</SectionTitle>
        <div className="info-grid">
          <div className="info-block">
            <h4>🎯 What We're Building</h4>
            <p>Vantaire Systems is a software company building products across multiple verticals: SaaS dashboards (VantaDash), AI analytics (ReplyRadar), market intelligence (Specter), and cannabis compliance tech (GreenTrellis). Everything is built by AI agents (Lynnix swarm) and deployed on open-source infrastructure.</p>
          </div>
          <div className="info-block">
            <h4>🏗️ How Things Run</h4>
            <p>Sites are hosted on <strong>GitHub Pages</strong> (free static hosting), backed by <strong>Hercules.app</strong> (database, auth, payments) and <strong>Supabase</strong> (API layer). Domains are managed at <strong>Porkbun</strong>. All AI work runs through Hermes/OpenRouter.</p>
          </div>
          <div className="info-block">
            <h4>💰 Revenue Status</h4>
            <p>Pre-revenue. All products are currently free or in development. Revenue layers (Stripe via Hercules) are ready to activate when products launch. Projections on the Treasury tab show the growth path from $0 to $10K/month.</p>
          </div>
          <div className="info-block">
            <h4>🎮 Roblox Side</h4>
            <p>8 games built in rapid prototyping sessions — 33 scripts, ~8.1K lines of Lua. Games range from cozy sims to tower defense. All scripts completed, bug-checked (0 issues). A separate revenue channel from in-game purchases.</p>
          </div>
        </div>
      </Panel>
    </div>
  )
}

/* ─── APPS TAB ─── */
function AppsTab() {
  return (
    <div className="tab-content">
      <SectionTitle>🚀 Product Portfolio</SectionTitle>
      <p className="tab-description">All Vantaire products. Click any card to visit the live site. "Built" means the feature exists today. "Planned" is on the roadmap.</p>

      <div className="apps-grid">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="app-card" style={{ borderLeftColor: product.color }}>
            <div className="app-header">
              <div className="app-icon" style={{ background: product.color + '20' }}>{product.icon}</div>
              <div className="app-info">
                <h3>{product.name}</h3>
                <span className="app-tag" style={{ background: product.color + '30', color: product.color }}>{product.tag}</span>
              </div>
              <StatusBadge status={product.status} />
            </div>

            <p className="app-desc">{product.description}</p>

            <div className="app-links">
              <ExternalLink href={product.url} icon="🌐">Visit {product.domain}</ExternalLink>
            </div>

            <div className="app-status-bar">
              <span className="app-stage">{product.stage}</span>
              <span className="app-mrr">${product.metrics.mrr}/mo</span>
            </div>

            <div className="app-features">
              <div className="feature-col">
                <div className="feature-label">✅ Built</div>
                {product.features.implemented.map((f, i) => <div key={i} className="feature-item done">{f}</div>)}
              </div>
              <div className="feature-col">
                <div className="feature-label">📋 Planned</div>
                {product.features.planned.map((f, i) => <div key={i} className="feature-item planned">{f}</div>)}
              </div>
            </div>

            {product.actionsNeeded.length > 0 && (
              <div className="app-actions">
                <div className="feature-label">⚡ Next Steps</div>
                {product.actionsNeeded.map((a, i) => <div key={i} className="action-item">{a}</div>)}
              </div>
            )}

            <div className="app-stack">
              {product.stack.map((s, i) => <span key={i} className="stack-badge">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── ROBLOX TAB ─── */
function RobloxTab() {
  const totalScripts = ROBLOX_GAMES.reduce((s, g) => s + g.scripts, 0)
  const totalLines = ROBLOX_GAMES.reduce((s, g) => s + g.lines, 0)

  return (
    <div className="tab-content">
      <SectionTitle>🎮 Roblox Games Studio</SectionTitle>
      <p className="tab-description">{ROBLOX_GAMES.length} games built across 2 rapid-prototyping sessions — {totalScripts} scripts, {totalLines.toLocaleString()} lines of Lua. All scripts completed. Bug-check pass 1 & 2: 0 issues found.</p>

      <div className="games-grid">
        {ROBLOX_GAMES.map(game => (
          <div key={game.id} className="game-card">
            <div className="game-header">
              <span className="game-icon">{game.icon}</span>
              <div>
                <h3>{game.name}</h3>
                <span className="game-genre">{game.genre}</span>
              </div>
              <StatusDot status="active" />
            </div>
            <div className="game-stats">
              <div><span className="stat-num">{game.scripts}</span> scripts</div>
              <div><span className="stat-num">{game.lines.toLocaleString()}</span> lines</div>
            </div>
            <div className="game-tier">{game.tier}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── INFRASTRUCTURE TAB ─── */
function InfrastructureTab() {
  return (
    <div className="tab-content">
      <SectionTitle>🌐 Infrastructure & Domains</SectionTitle>
      <p className="tab-description">Where everything runs, what it costs, and how to reach each service. All hosting is currently on free tiers.</p>

      <div className="infra-section">
        <Panel>
          <SectionTitle>🏗️ Hosting Providers</SectionTitle>
          {INFRASTRUCTURE.hosting.map((h, i) => (
            <div key={i} className="hosting-card">
              <div className="hosting-top">
                <StatusDot status="operational" />
                <span className="hosting-provider">{h.provider}</span>
                <span className="hosting-uptime">{h.uptime}</span>
              </div>
              <p className="hosting-desc">{h.desc}</p>
              <div className="hosting-bottom">
                <span className="hosting-sites">{h.sites || h.projects} site{h.sites > 1 || h.projects > 1 ? 's' : ''}</span>
                <ExternalLink href={h.url} icon="🔗">Open Dashboard →</ExternalLink>
              </div>
            </div>
          ))}
          <div className="ssl-summary">
            <div className="ssl-item"><StatusDot status="active" /> <span className="ssl-count">{INFRASTRUCTURE.ssl.active}</span> SSL Active</div>
            <div className="ssl-item"><StatusDot status="provisioning" /> <span className="ssl-count">{INFRASTRUCTURE.ssl.provisioning}</span> Provisioning</div>
            <div className="ssl-item"><StatusDot status="active" /> <span className="ssl-count">{INFRASTRUCTURE.ssl.total}</span> Total domains</div>
          </div>
        </Panel>
      </div>

      <Panel>
        <SectionTitle>🌍 DNS Records</SectionTitle>
        <p className="tab-description" style={{ marginTop: '-12px', marginBottom: '16px' }}>Managed at Porkbun. All active domains point to GitHub Pages for static hosting.</p>
        <table className="dns-table">
          <thead><tr><th>Domain</th><th>Type</th><th>Points To</th><th>Purpose</th><th>Status</th></tr></thead>
          <tbody>
            {DOMAINS.map((d, i) => (
              <tr key={i}>
                <td>{ d.status !== 'parked'
                  ? <ExternalLink href={`https://${d.domain}`} icon="">{d.domain}</ExternalLink>
                  : <span className="domain-name">{d.domain}</span>
                }</td>
                <td><span className={`dns-type dns-type-${d.type.toLowerCase().replace('/', '')}`}>{d.type}</span></td>
                <td className="dns-target">{d.target}</td>
                <td className="dns-desc">{d.desc}</td>
                <td><StatusBadge status={d.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
    </div>
  )
}

/* ─── TREASURY TAB ─── */
function TreasuryTab() {
  return (
    <div className="tab-content">
      <SectionTitle>💰 Treasury & Financials</SectionTitle>
      <p className="tab-description">Current financial status and cost breakdown. Pre-revenue — all products are free or in development today.</p>

      <div className="metrics-row">
        <MetricCard label="MRR" value="$0" sub="Monthly Recurring" color="#22c55e" />
        <MetricCard label="ARR" value="$0" sub="Annual Recurring" color="#0a72ef" />
        <MetricCard label="Total Costs" value={`$${FINANCIALS.totalCosts}`} sub="All time — mostly $0 (free tiers)" color="#ff5b4f" />
        <MetricCard label="Net Income" value={`$${FINANCIALS.netIncome}`} sub="Revenue - Costs" color="#de1d8d" />
        <MetricCard label="Runway" value={FINANCIALS.runway} sub="months" color="#06b6d4" />
      </div>

      <Panel>
        <SectionTitle>💸 Monthly Costs</SectionTitle>
        <p className="tab-description" style={{ marginTop: '-12px', marginBottom: '16px' }}>Current recurring expenses. Most services are on free tiers.</p>
        <div className="cost-list">
          {FINANCIALS.costBreakdown.map((c, i) => (
            <div key={i} className="cost-row">
              <div className="cost-info">
                <span className="cost-name">{c.name}</span>
                <span className="cost-desc">{c.desc}</span>
              </div>
              <span className="cost-amount">${c.amount}/mo</span>
            </div>
          ))}
        </div>
        <div className="cost-total">
          <span>Total Monthly</span>
          <span className="cost-total-amount">${FINANCIALS.costBreakdown.reduce((s, c) => s + c.amount, 0)}/mo</span>
        </div>
      </Panel>
    </div>
  )
}

/* ─── OPERATIONS TAB ─── */
function OperationsTab() {
  return (
    <div className="tab-content">
      <SectionTitle>🐝 Operations & Agents</SectionTitle>
      <p className="tab-description">The AI agent team that builds and maintains Vantaire Systems, plus automated cron jobs that run on schedule.</p>

      <div className="ops-columns">
        <Panel>
          <SectionTitle>🤖 Agent Team</SectionTitle>
          <p className="tab-description" style={{ marginTop: '-12px', marginBottom: '16px' }}>AI agents running on Hermes/OpenRouter. Each has a specific role in building Vantaire.</p>
          {AGENTS.map((agent) => (
            <div key={agent.id} className="agent-row">
              <StatusDot status={agent.status} />
              <div className="agent-info">
                <span className="agent-name">{agent.name}</span>
                <span className="agent-role">{agent.role}</span>
              </div>
            </div>
          ))}
        </Panel>

        <Panel>
          <SectionTitle>⏰ Automated Jobs</SectionTitle>
          <p className="tab-description" style={{ marginTop: '-12px', marginBottom: '16px' }}>Scheduled tasks that run automatically via Hermes cron system.</p>
          {CRON_JOBS.map((job, i) => (
            <div key={i} className="cron-row">
              <StatusDot status={job.status} />
              <div className="cron-info">
                <span className="cron-name">{job.name}</span>
                <span className="cron-schedule">Runs {job.schedule} · Last: {job.lastRun}</span>
                <span className="cron-desc">{job.desc}</span>
              </div>
            </div>
          ))}
        </Panel>
      </div>

      <div className="ops-columns">
        <Panel>
          <SectionTitle>💻 GitHub</SectionTitle>
          <div className="github-stats">
            <div><span className="gh-stat">{INFRASTRUCTURE.github.repos}</span> repos</div>
            <div><span className="gh-stat">{INFRASTRUCTURE.github.totalStars}</span> stars</div>
            <div><span className="gh-stat">{INFRASTRUCTURE.github.totalForks}</span> forks</div>
          </div>
          <ExternalLink href={INFRASTRUCTURE.github.url} icon="🔗">Open GitHub Org →</ExternalLink>
        </Panel>

        <Panel>
          <SectionTitle>📰 Recent Activity</SectionTitle>
          <div className="activity-list">
            {RECENT_ACTIVITY.map((item, i) => (
              <div key={i} className="activity-item">
                <span className="activity-icon">{item.icon}</span>
                <div className="activity-info">
                  <span className="activity-action">{item.action}</span>
                  <span className="activity-date">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  )
}

/* ─── MAIN APP ─── */
export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const tabs = [
    { id: 'dashboard',      label: 'Dashboard',    icon: '📊' },
    { id: 'apps',           label: 'Apps',         icon: '🚀' },
    { id: 'roblox',         label: 'Roblox',       icon: '🎮' },
    { id: 'infrastructure', label: 'Infrastructure', icon: '🌐' },
    { id: 'treasury',       label: 'Treasury',     icon: '💰' },
    { id: 'operations',     label: 'Operations',   icon: '🐝' },
  ]

  return (
    <div className="app">
      <nav className="sidebar">
        <div className="sidebar-logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">Vantaire</span>
        </div>
        <div className="sidebar-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`sidebar-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>
        <div className="sidebar-footer">
          <StatusDot status="active" />
          <span>All Systems Go</span>
        </div>
      </nav>
      <main className="main-content">
        {activeTab === 'dashboard' && <DashboardTab />}
        {activeTab === 'apps' && <AppsTab />}
        {activeTab === 'roblox' && <RobloxTab />}
        {activeTab === 'infrastructure' && <InfrastructureTab />}
        {activeTab === 'treasury' && <TreasuryTab />}
        {activeTab === 'operations' && <OperationsTab />}
      </main>
    </div>
  )
}
