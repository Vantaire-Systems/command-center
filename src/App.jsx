import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import {
  COMPANY, QUICK_LINKS, PRODUCTS, ROBLOX_GAMES, SPRINT,
  DOMAINS, FINANCIALS, INFRASTRUCTURE, AGENTS, CRON_JOBS, RECENT_ACTIVITY
} from './data/vantaire.js'
import './App.css'

function StatusDot({ status }) {
  const colors = { active: '#22c55e', live: '#22c55e', operational: '#22c55e', development: '#f59e0b', demo: '#8b5cf6', parked: '#666', provisioning: '#f59e0b', complete: '#22c55e', pending: '#555' }
  return <span className="status-dot" style={{ background: colors[status] || '#666' }} />
}

function StatusBadge({ status }) {
  const labels = { active: 'Active', live: 'Live', operational: 'Operational', development: 'Development', demo: 'Demo', parked: 'Parked', provisioning: 'Provisioning', complete: 'Complete', pending: 'Pending' }
  const colors = { active: '#22c55e', live: '#22c55e', operational: '#22c55e', development: '#f59e0b', demo: '#8b5cf6', parked: '#666', provisioning: '#f59e0b', complete: '#22c55e', pending: '#555' }
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
  return <div className={'panel ' + className}>{children}</div>
}

function ExternalLink({ href, children, icon }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="ext-link">{icon && <span className="link-icon">{icon}</span>}{children} <span className="ext-arrow">-{'>'}</span></a>
}

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
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className={'quick-link-card ' + (i === 0 ? 'priority-link' : '')}>
              <span className="ql-icon">{link.icon}</span>
              <div className="ql-info">
                <span className="ql-label">{link.label}</span>
                <span className="ql-desc">{link.desc}</span>
              </div>
              <span className="ql-arrow">-{'>'}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

function DashboardTab() {
  const totalScripts = ROBLOX_GAMES.reduce((s, g) => s + g.scripts, 0)
  const totalLines = ROBLOX_GAMES.reduce((s, g) => s + g.lines, 0)
  const liveProducts = PRODUCTS.filter(p => p.status === 'live').length
  const sslActive = INFRASTRUCTURE.ssl.active
  const sslTotal = INFRASTRUCTURE.ssl.total
  const domainCount = DOMAINS.filter(d => d.status !== 'parked').length
  const sprintProgress = Math.round((SPRINT.currentDay / SPRINT.totalDays) * 100)
  const sprintWidth = sprintProgress + '%'
  const activePhaseTitle = SPRINT.phases.find(p => p.status === 'active')?.title || 'Pre-sprint setup'
  const heroTagline = COMPANY.tagline + ' \u2014 Founded ' + COMPANY.founded
  const mrrSub = 'Pre-revenue \u2014 Sprint target: $99-299/mo'

  return (
    <div className="tab-content">
      <QuickLinksBar />

      <div className="sprint-banner">
        <div className="sprint-banner-left">
          <span className="sprint-icon">&#x1F33F;</span>
          <div className="sprint-info">
            <span className="sprint-title">ACTIVE SPRINT: Canopy / GreenTrellis &#x2014; Day {SPRINT.currentDay} of {SPRINT.totalDays}</span>
            <span className="sprint-sub">{activePhaseTitle} &#x2022; Target: Demo-ready by {SPRINT.endDate}</span>
          </div>
        </div>
        <div className="sprint-banner-right">
          <div className="sprint-progress">
            <div className="sprint-progress-bar">
              <div className="sprint-progress-fill" style={{ width: sprintWidth }} />
            </div>
            <span className="sprint-pct">{sprintProgress}%</span>
          </div>
        </div>
      </div>

      <div className="hero-bar">
        <div className="hero-left">
          <h1>{COMPANY.name}</h1>
          <p>{heroTagline}</p>
        </div>
        <div className="hero-right">
          <div className="hero-status"><StatusDot status="active" /> All Systems Operational</div>
        </div>
      </div>

      <div className="metrics-row">
        <MetricCard label="Live Products" value={liveProducts} sub={'of ' + PRODUCTS.length + ' total'} color="#22c55e" />
        <MetricCard label="Sprint Day" value={SPRINT.currentDay} sub={'of ' + SPRINT.totalDays + ' \u2014 ' + SPRINT.goal} color="#22c55e" />
        <MetricCard label="Roblox Games" value={ROBLOX_GAMES.length} sub={totalScripts + ' scripts written'} color="#8b5cf6" />
        <MetricCard label="Codebase" value={(totalLines / 1000).toFixed(1) + 'K'} sub="lines of Lua" color="#f59e0b" />
        <MetricCard label="Domains" value={domainCount} sub={sslActive + '/' + sslTotal + ' SSL active'} color="#0a72ef" />
        <MetricCard label="MRR" value="$0" sub={mrrSub} color="#de1d8d" />
      </div>

      <div className="grid-2">
        <Panel className="priority-panel">
          <SectionTitle>&#x1F33F; #1 Priority: Canopy / GreenTrellis Sprint</SectionTitle>
          <p className="tab-description" style={{ marginTop: '-8px', marginBottom: '16px' }}>2-week build sprint. Updates daily. <strong>Non-negotiable delivery: June 16, 2026.</strong></p>
          <div className="sprint-timeline">
            {SPRINT.phases.slice(0, 7).map((phase) => (
              <div key={phase.day} className={'sprint-phase ' + phase.status}>
                <div className="phase-day">Day {phase.day}</div>
                <div className="phase-info">
                  <span className="phase-title">{phase.title}</span>
                  <span className="phase-tasks">{phase.tasks.length} tasks</span>
                </div>
                <StatusBadge status={phase.status} />
              </div>
            ))}
          </div>
          <div className="sprint-see-all">
            <span>See full 14-day plan -{'>'} Switch to "Sprint" tab above</span>
          </div>
        </Panel>

        <Panel>
          <SectionTitle>&#x1F4E6; Product Pipeline</SectionTitle>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={PRODUCTS.map(p => ({ name: p.name.split('/')[0].trim(), implemented: p.features.implemented.length, planned: p.features.planned.length }))}>
              <XAxis dataKey="name" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 11 }} allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="implemented" fill="#22c55e" name="Built" radius={[2, 2, 0, 0]} />
              <Bar dataKey="planned" fill="#0a72ef" name="Planned" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Panel>
      </div>

      <Panel>
        <SectionTitle>&#x1F4CB; CEO Overview &#x2014; What Is Vantaire Systems?</SectionTitle>
        <div className="info-grid">
          <div className="info-block">
            <h4>&#x1F3AF; The Mission</h4>
            <p>Vantaire Systems is a software company building real products that generate real revenue. The #1 priority is <strong>Canopy / GreenTrellis</strong> &#x2014; a cannabis POS and compliance platform for Oklahoma dispensaries. This is a real business, not a side project.</p>
          </div>
          <div className="info-block">
            <h4>&#x1F3D7;&#xFE0F; How We Build</h4>
            <p>AI agents (Lynnix swarm) doing the building. James steers. All hosting on free tiers until revenue starts. GitHub Pages for static sites, Hercules.app for backend, Supabase for databases, Porkbun for domains.</p>
          </div>
          <div className="info-block">
            <h4>&#x1F4B0; Revenue Path</h4>
            <p><strong>Canopy / GreenTrellis:</strong> $99-299/mo per dispensary (Seed/Grove/Canopy tiers). First target: Grove/Grand Lake dispensary. VantaDash: SaaS subscriptions post-sprint. ReplyRadar + Specter: Growth and monetization.</p>
          </div>
          <div className="info-block">
            <h4>&#x1F3AE; Roblox Side</h4>
            <p>8 games built, 0 bugs, 33 scripts, 8.1K lines of Lua. Complete. Future revenue through in-game purchases. Not the priority right now.</p>
          </div>
        </div>
      </Panel>
    </div>
  )
}

function SprintTab() {
  const sprintProgress = Math.round((SPRINT.currentDay / SPRINT.totalDays) * 100)
  const activePhase = SPRINT.phases.find(p => p.status === 'active')
  const completedDays = SPRINT.phases.filter(p => p.status === 'complete').length
  const sprintSubtitle = SPRINT.startDate + ' to ' + SPRINT.endDate + ' | ' + SPRINT.totalDays + '-day | ' + SPRINT.goal
  const sprintWidth = sprintProgress + '%'
  const remainingDays = SPRINT.totalDays - SPRINT.currentDay
  const activeDayStr = activePhase ? 'Day ' + activePhase.day : '\u2014'
  const activeTitleStr = activePhase?.title || '\u2014'

  return (
    <div className="tab-content">
      <div className="sprint-header">
        <div className="sprint-header-top">
          <div className="sprint-header-left">
            <span className="sprint-big-icon">&#x1F33F;</span>
            <div>
              <h1 className="sprint-h1">{SPRINT.name}</h1>
              <p className="sprint-subtitle">{sprintSubtitle}</p>
            </div>
          </div>
          <div className="sprint-header-right">
            <div className="sprint-day-badge">DAY {SPRINT.currentDay}</div>
            <div className="sprint-of">of {SPRINT.totalDays}</div>
          </div>
        </div>
        <div className="sprint-progress-large">
          <div className="sprint-progress-bar-large">
            <div className="sprint-progress-fill-large" style={{ width: sprintWidth }} />
          </div>
          <span className="sprint-pct-large">{sprintProgress}% complete</span>
        </div>
      </div>

      <div className="metrics-row">
        <MetricCard label="Current Phase" value={activeDayStr} sub={activeTitleStr} color="#22c55e" />
        <MetricCard label="Completed Days" value={completedDays} sub={'of ' + SPRINT.totalDays} color="#22c55e" />
        <MetricCard label="Remaining Days" value={remainingDays} sub="days left" color="#f59e0b" />
        <MetricCard label="First Customer" value="Grove" sub="Grand Lake dispensary" color="#8b5cf6" />
        <MetricCard label="Revenue Target" value="$99+" sub="per month per customer" color="#de1d8d" />
        <MetricCard label="Blockers" value="0" sub="currently blocked" color="#22c55e" />
      </div>

      {activePhase && (
        <Panel className="active-phase-panel">
          <SectionTitle>&#x1F525; Active Phase &#x2014; Day {activePhase.day}: {activePhase.title}</SectionTitle>
          <div className="phase-task-list">
            {activePhase.tasks.map((task, i) => (
              <div key={i} className="phase-task-item">
                <span className="task-checkbox">&#x2610;</span>
                <span className="task-text">{task}</span>
              </div>
            ))}
          </div>
        </Panel>
      )}

      <Panel>
        <SectionTitle>&#x1F4C5; Full Sprint Timeline</SectionTitle>
        <p className="tab-description" style={{ marginTop: '-8px', marginBottom: '20px' }}>Linear build flow. Each day must be completed before moving to the next. No skipping ahead.</p>
        <div className="sprint-full-timeline">
          {SPRINT.phases.map((phase) => (
            <div key={phase.day} className={'timeline-phase ' + phase.status}>
              <div className="timeline-left">
                <div className={'timeline-dot ' + phase.status} />
                {phase.day < SPRINT.totalDays && <div className="timeline-line" />}
              </div>
              <div className="timeline-right">
                <div className="timeline-header">
                  <span className="timeline-day">Day {phase.day}</span>
                  <span className="timeline-title">{phase.title}</span>
                  <StatusBadge status={phase.status} />
                </div>
                <div className="timeline-tasks">
                  {phase.tasks.map((task, i) => (
                    <span key={i} className="timeline-task-tag">{task}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  )
}

function AppsTab() {
  return (
    <div className="tab-content">
      <SectionTitle>&#x1F680; Product Portfolio</SectionTitle>
      <p className="tab-description">All Vantaire products. <strong>Canopy / GreenTrellis is the #1 priority.</strong> Click any card to visit the live site.</p>

      <div className="apps-grid">
        {PRODUCTS.map((product) => (
          <div key={product.id} className={'app-card ' + (product.isPriority ? 'priority-card' : '')} style={{ borderLeftColor: product.color }}>
            {product.isPriority && <div className="priority-ribbon">#1 PRIORITY</div>}
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
              <ExternalLink href={product.url} icon="&#x1F310;">Visit {product.domain}</ExternalLink>
            </div>

            <div className="app-status-bar">
              <span className="app-stage">{product.stage}</span>
              <span className="app-mrr">${product.metrics.mrr}/mo</span>
            </div>

            <div className="app-features">
              <div className="feature-col">
                <div className="feature-label">&#x2705; Built</div>
                {product.features.implemented.map((f, i) => <div key={i} className="feature-item done">{f}</div>)}
              </div>
              <div className="feature-col">
                <div className="feature-label">&#x1F4CB; Planned</div>
                {product.features.planned.map((f, i) => <div key={i} className="feature-item planned">{f}</div>)}
              </div>
            </div>

            {product.actionsNeeded.length > 0 && (
              <div className="app-actions">
                <div className="feature-label">&#x26A1; Next Steps</div>
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

function RobloxTab() {
  const totalScripts = ROBLOX_GAMES.reduce((s, g) => s + g.scripts, 0)
  const totalLines = ROBLOX_GAMES.reduce((s, g) => s + g.lines, 0)

  return (
    <div className="tab-content">
      <SectionTitle>&#x1F3AE; Roblox Games Studio</SectionTitle>
      <p className="tab-description">{ROBLOX_GAMES.length} games built &#x2014; {totalScripts} scripts, {totalLines.toLocaleString()} lines of Lua. All scripts completed. 0 bugs. <em>Parked during Canopy sprint.</em></p>

      <div className="games-grid">
        {ROBLOX_GAMES.map(game => (
          <div key={game.id} className="game-card">
            <div className="game-header">
              <span className="game-icon">{game.icon}</span>
              <div>
                <h3>{game.name}</h3>
                <span className="game-genre">{game.genre}</span>
              </div>
              <StatusBadge status="complete" />
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

function InfrastructureTab() {
  return (
    <div className="tab-content">
      <SectionTitle>&#x1F310; Infrastructure & Domains</SectionTitle>
      <p className="tab-description">Where everything runs. All on free tiers until revenue starts.</p>

      <div className="infra-section">
        <Panel>
          <SectionTitle>&#x1F3D7;&#xFE0F; Hosting Providers</SectionTitle>
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
                <ExternalLink href={h.url} icon="&#x1F517;">Open Dashboard</ExternalLink>
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
        <SectionTitle>&#x1F30D; DNS Records</SectionTitle>
        <p className="tab-description" style={{ marginTop: '-8px', marginBottom: '16px' }}>Managed at Porkbun. Active domains in green.</p>
        <table className="dns-table">
          <thead><tr><th>Domain</th><th>Type</th><th>Points To</th><th>Purpose</th><th>Status</th></tr></thead>
          <tbody>
            {DOMAINS.map((d, i) => (
              <tr key={i} className={d.status === 'active' ? 'dns-active-row' : ''}>
                <td>{d.status !== 'parked'
                  ? <ExternalLink href={'https://' + d.domain}>{d.domain}</ExternalLink>
                  : <span className="domain-name">{d.domain}</span>
                }</td>
                <td><span className={'dns-type dns-type-' + d.type.toLowerCase().replace('/', '')}>{d.type}</span></td>
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

function TreasuryTab() {
  const totalCost = FINANCIALS.costBreakdown.reduce((s, c) => s + c.amount, 0)
  const burnDisplay = totalCost > 0 ? '$' + totalCost + '/mo' : '~$6/mo (domains)'

  return (
    <div className="tab-content">
      <SectionTitle>&#x1F4B0; Treasury & Financials</SectionTitle>
      <p className="tab-description">Pre-revenue. Goal: First paying customer via Canopy/GreenTrellis sprint by June 16.</p>

      <div className="metrics-row">
        <MetricCard label="MRR" value="$0" sub="Pre-revenue" color="#22c55e" />
        <MetricCard label="ARR" value="$0" sub="Annual recurring" color="#0a72ef" />
        <MetricCard label="Monthly Burn" value="$6" sub={burnDisplay} color="#ff5b4f" />
        <MetricCard label="Runway" value={'\u221E'} sub="All free tiers" color="#06b6d4" />
      </div>

      <div className="grid-2">
        <Panel>
          <SectionTitle>&#x1F4B8; Monthly Costs</SectionTitle>
          <div className="cost-list">
            {FINANCIALS.costBreakdown.map((c, i) => (
              <div key={i} className="cost-row">
                <div className="cost-info">
                  <span className="cost-name">{c.name}</span>
                  <span className="cost-desc">{c.desc}</span>
                </div>
                <span className="cost-amount">${c.amount > 0 ? c.amount : 0}/mo</span>
              </div>
            ))}
          </div>
          <div className="cost-total">
            <span>Total Monthly</span>
            <span className="cost-total-amount">${totalCost}/mo</span>
          </div>
        </Panel>

        <Panel>
          <SectionTitle>&#x1F33F; Canopy Pricing Tiers</SectionTitle>
          <p className="tab-description" style={{ marginTop: '-8px', marginBottom: '16px' }}>Revenue model for #1 priority product.</p>
          {FINANCIALS.pricing.greentrellis.map((tier, i) => (
            <div key={i} className="pricing-tier">
              <div className="tier-info">
                <span className="tier-name">{tier.tier}</span>
                <span className="tier-desc">{tier.desc}</span>
              </div>
              <span className="tier-price">${tier.price}/mo</span>
            </div>
          ))}
          <div className="pricing-note">
            First customer target: Grove/Grand Lake dispensary. Even one Grove tier = $199/mo.
          </div>
        </Panel>
      </div>
    </div>
  )
}

function OperationsTab() {
  return (
    <div className="tab-content">
      <SectionTitle>&#x1F41D; Operations & Agents</SectionTitle>
      <p className="tab-description">The AI agent team and automated systems keeping Vantaire running. All hands on deck for Canopy sprint.</p>

      <div className="ops-columns">
        <Panel>
          <SectionTitle>&#x1F916; Agent Team</SectionTitle>
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
          <SectionTitle>&#x23F0; Automated Jobs</SectionTitle>
          {CRON_JOBS.map((job, i) => (
            <div key={i} className="cron-row">
              <StatusDot status={job.status} />
              <div className="cron-info">
                <span className="cron-name">{job.name}</span>
                <span className="cron-schedule">Runs {job.schedule} &#x2022; Last: {job.lastRun}</span>
                <span className="cron-desc">{job.desc}</span>
              </div>
            </div>
          ))}
        </Panel>
      </div>

      <div className="ops-columns">
        <Panel>
          <SectionTitle>&#x1F4BB; GitHub</SectionTitle>
          <div className="github-stats">
            <div><span className="gh-stat">{INFRASTRUCTURE.github.repos}</span> repos</div>
            <div><span className="gh-stat">{INFRASTRUCTURE.github.totalStars}</span> stars</div>
            <div><span className="gh-stat">{INFRASTRUCTURE.github.totalForks}</span> forks</div>
          </div>
          <ExternalLink href={INFRASTRUCTURE.github.url} icon="&#x1F517;">Open GitHub Org</ExternalLink>
        </Panel>

        <Panel>
          <SectionTitle>&#x1F4F0; Recent Activity</SectionTitle>
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

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const tabs = [
    { id: 'dashboard',      label: 'Dashboard',      icon: '\u{1F4CA}' },
    { id: 'sprint',         label: 'Sprint \u{1F33F}', icon: '\u{1F3C3}' },
    { id: 'apps',           label: 'Apps',           icon: '\u{1F680}' },
    { id: 'roblox',         label: 'Roblox',         icon: '\u{1F3AE}' },
    { id: 'infrastructure', label: 'Infrastructure',  icon: '\u{1F310}' },
    { id: 'treasury',       label: 'Treasury',       icon: '\u{1F4B0}' },
    { id: 'operations',     label: 'Operations',     icon: '\u{1F41D}' },
  ]

  return (
    <div className="app">
      <nav className="sidebar">
        <div className="sidebar-logo">
          <span className="logo-icon">&#x26A1;</span>
          <span className="logo-text">Vantaire</span>
        </div>
        <div className="sidebar-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={'sidebar-tab ' + (activeTab === tab.id ? 'active' : '') + (tab.id === 'sprint' ? ' sprint-tab' : '')}
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
        {activeTab === 'sprint' && <SprintTab />}
        {activeTab === 'apps' && <AppsTab />}
        {activeTab === 'roblox' && <RobloxTab />}
        {activeTab === 'infrastructure' && <InfrastructureTab />}
        {activeTab === 'treasury' && <TreasuryTab />}
        {activeTab === 'operations' && <OperationsTab />}
      </main>
    </div>
  )
}
