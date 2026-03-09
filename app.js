const navigation = [
  {
    group: "Dashboard",
    items: [
      { id: "command-center", label: "Command Center", hint: "Executive overview", badge: "Live" },
      { id: "system-health", label: "System Health", hint: "Runtime and uptime" },
    ],
  },
  {
    group: "Users",
    items: [
      { id: "user-analytics", label: "User Analytics", hint: "Growth intelligence" },
      { id: "downloads-location", label: "Downloads by Location", hint: "Country adoption" },
    ],
  },
  {
    group: "Digital Humans",
    items: [
      { id: "jack", label: "Jack", hint: "CEO avatar" },
      { id: "julia", label: "Julia", hint: "CFO avatar" },
      { id: "avatar-settings", label: "Avatar Settings", hint: "Voice and persona" },
    ],
  },
  {
    group: "Agents",
    items: [
      { id: "workforce-agents", label: "Workforce Agents", hint: "All AI workers" },
      { id: "task-automation", label: "Task Automation", hint: "Execution monitoring" },
      { id: "marketplace-agents", label: "Marketplace Agents", hint: "Buying and selling" },
    ],
  },
  {
    group: "Operations",
    items: [
      { id: "customer-interactions", label: "Customer Interactions", hint: "Voice and video" },
      { id: "booking-systems", label: "Booking Systems", hint: "Reservations and travel" },
    ],
  },
  {
    group: "Analytics",
    items: [
      { id: "performance-benchmarks", label: "Performance Benchmarks", hint: "Jack vs Julia" },
      { id: "marketing-intelligence", label: "Marketing Intelligence", hint: "Campaign analytics" },
      { id: "knowledge-brain", label: "Knowledge Brain Center", hint: "Graph and learning" },
    ],
  },
  {
    group: "Finance",
    items: [{ id: "revenue-dashboard", label: "Revenue Dashboard", hint: "Business intelligence" }],
  },
  {
    group: "Infrastructure",
    items: [
      { id: "app-monitoring", label: "App Monitoring", hint: "Web and mobile" },
      { id: "server-monitoring", label: "Server Monitoring", hint: "CPU, GPU, network" },
    ],
  },
  {
    group: "Management",
    items: [
      { id: "team-access", label: "Team Access", hint: "Roles and ownership" },
      { id: "permissions", label: "Permissions", hint: "Policy controls" },
    ],
  },
  {
    group: "Settings",
    items: [
      { id: "agi-system-settings", label: "AGI System Settings", hint: "Master controls" },
      { id: "integrations", label: "Integrations", hint: "APIs and connectors" },
    ],
  },
];

const state = {
  view: "command-center",
  systemStatus: "Operational",
  systemColor: "green",
  liveUsers: 12842,
  realtimeSessions: 324,
  tasksToday: 41228,
  revenueToday: 428912,
  notifications: [
    { title: "Jack response latency down 14%", detail: "Realtime optimization rolled out to US-East." },
    { title: "Julia finance accuracy at 99.42%", detail: "Benchmark sweep completed 4 minutes ago." },
    { title: "Singularity agent swarm scaling", detail: "Provisioned 120 new execution workers for Europe." },
    { title: "Aegis blocked 17 high-risk prompts", detail: "No customer-facing regressions detected." },
  ],
};

const analytics = {
  topCountries: [
    ["United States", 28112, "24.7%"],
    ["United Kingdom", 12664, "11.1%"],
    ["India", 10902, "9.6%"],
    ["Canada", 8890, "7.8%"],
    ["Germany", 6640, "5.8%"],
    ["Brazil", 5933, "5.2%"],
    ["Japan", 5142, "4.5%"],
    ["France", 5036, "4.4%"],
    ["Australia", 4420, "3.9%"],
    ["UAE", 3812, "3.3%"],
  ],
  agents: [
    ["Sales Agent", "ACTIVE", 914, "98.1%", "A", "99.4%"],
    ["Customer Service Agent", "ACTIVE", 1463, "96.9%", "A", "98.7%"],
    ["Research Agent", "ACTIVE", 728, "97.3%", "A", "97.9%"],
    ["Booking Agent", "MONITOR", 488, "95.7%", "B+", "96.1%"],
    ["Marketing Agent", "ACTIVE", 615, "96.4%", "A-", "97.2%"],
    ["Finance Agent", "ACTIVE", 402, "99.1%", "A+", "99.6%"],
  ],
  avatars: [
    {
      name: "Jack",
      role: "CEO Digital Human",
      status: "Online",
      tasks: 732,
      conversations: 189,
      csat: "97.8%",
      rating: "A+",
      accuracy: "99.2%",
      latency: "178ms",
    },
    {
      name: "Julia",
      role: "CFO Digital Human",
      status: "Online",
      tasks: 689,
      conversations: 204,
      csat: "98.6%",
      rating: "A+",
      accuracy: "99.5%",
      latency: "166ms",
    },
  ],
};

const realtimeSeries = {
  usage: [42, 48, 44, 56, 61, 58, 67, 72, 69, 74, 79, 76],
  gpu: [38, 44, 47, 53, 58, 62, 65, 71, 73, 75, 78, 82],
  latency: [122, 118, 126, 132, 128, 119, 112, 109, 105, 98, 103, 96],
  revenue: [96, 128, 164, 172, 188, 202, 214, 248, 261, 294, 318, 336],
  funnel: [
    { stage: "Site Visitors", value: "482k", width: 100 },
    { stage: "Qualified Signups", value: "84k", width: 72 },
    { stage: "Activated Users", value: "39k", width: 51 },
    { stage: "Paid Subscribers", value: "12.8k", width: 28 },
  ],
};

const sections = {
  "command-center": {
    title: "Command Center",
    breadcrumb: "Dashboard / Command Center",
    render: renderCommandCenter,
  },
  "system-health": {
    title: "System Health",
    breadcrumb: "Dashboard / System Health",
    render: renderSystemHealth,
  },
  "user-analytics": {
    title: "User Analytics & Growth Intelligence",
    breadcrumb: "Users / User Analytics",
    render: renderUserAnalytics,
  },
  "downloads-location": {
    title: "Downloads by Location",
    breadcrumb: "Users / Downloads by Location",
    render: renderDownloadsLocation,
  },
  jack: {
    title: "Digital Human Management / Jack",
    breadcrumb: "Digital Humans / Jack",
    render: () => renderAvatarManagement("Jack"),
  },
  julia: {
    title: "Digital Human Management / Julia",
    breadcrumb: "Digital Humans / Julia",
    render: () => renderAvatarManagement("Julia"),
  },
  "avatar-settings": {
    title: "Avatar Settings",
    breadcrumb: "Digital Humans / Avatar Settings",
    render: renderAvatarSettings,
  },
  "workforce-agents": {
    title: "AGI Workforce Agent Manager",
    breadcrumb: "Agents / Workforce Agents",
    render: renderWorkforceAgents,
  },
  "task-automation": {
    title: "Task Automation Monitoring",
    breadcrumb: "Agents / Task Automation",
    render: renderTaskAutomation,
  },
  "marketplace-agents": {
    title: "Marketplace Automation",
    breadcrumb: "Agents / Marketplace Agents",
    render: renderMarketplaceAgents,
  },
  "customer-interactions": {
    title: "Customer Interaction Monitor",
    breadcrumb: "Operations / Customer Interactions",
    render: renderCustomerInteractions,
  },
  "booking-systems": {
    title: "Booking & Reservation Automation",
    breadcrumb: "Operations / Booking Systems",
    render: renderBookingSystems,
  },
  "performance-benchmarks": {
    title: "AGI Performance Benchmark Center",
    breadcrumb: "Analytics / Performance Benchmarks",
    render: renderPerformanceBenchmarks,
  },
  "marketing-intelligence": {
    title: "Digital Marketing Intelligence",
    breadcrumb: "Analytics / Marketing Intelligence",
    render: renderMarketingIntelligence,
  },
  "knowledge-brain": {
    title: "AGI Knowledge Brain Center",
    breadcrumb: "Analytics / Knowledge Brain Center",
    render: renderKnowledgeBrain,
  },
  "revenue-dashboard": {
    title: "Revenue & Business Intelligence",
    breadcrumb: "Finance / Revenue Dashboard",
    render: renderRevenueDashboard,
  },
  "app-monitoring": {
    title: "App & Website Performance Monitoring",
    breadcrumb: "Infrastructure / App Monitoring",
    render: renderAppMonitoring,
  },
  "server-monitoring": {
    title: "Server Monitoring",
    breadcrumb: "Infrastructure / Server Monitoring",
    render: renderServerMonitoring,
  },
  "team-access": {
    title: "Admin Team Management",
    breadcrumb: "Management / Team Access",
    render: renderTeamAccess,
  },
  permissions: {
    title: "Permissions",
    breadcrumb: "Management / Permissions",
    render: renderPermissions,
  },
  "agi-system-settings": {
    title: "AGI System Control & Settings",
    breadcrumb: "Settings / AGI System Settings",
    render: renderSystemSettings,
  },
  integrations: {
    title: "Integrations",
    breadcrumb: "Settings / Integrations",
    render: renderIntegrations,
  },
};

const sidebarNav = document.querySelector("#sidebar-nav");
const viewTitle = document.querySelector("#view-title");
const viewBreadcrumb = document.querySelector("#view-breadcrumb");
const viewContent = document.querySelector("#view-content");
const navSearch = document.querySelector("#nav-search");
const topUsers = document.querySelector("#live-users-top");
const heroSessions = document.querySelector("#hero-realtime-sessions");
const heroTasks = document.querySelector("#hero-tasks");
const heroRevenue = document.querySelector("#hero-revenue");
const systemIndicator = document.querySelector("#system-indicator");
const systemLabel = document.querySelector("#system-label");

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function statusPill(label, tone = "success") {
  return `<span class="status-pill ${tone}">${label}</span>`;
}

function metricCard({ label, value, trend, caption }) {
  return `
    <article class="metric-card panel">
      <div class="metric-header">
        <span class="metric-label">${label}</span>
        <span class="metric-trend">${trend}</span>
      </div>
      <strong class="metric-value">${value}</strong>
      <p class="metric-caption muted">${caption}</p>
    </article>
  `;
}

function pointsToPolyline(points, height = 180, width = 640) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  return points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * width;
      const y = height - ((point - min) / Math.max(1, max - min)) * (height - 24) - 12;
      return `${x},${y}`;
    })
    .join(" ");
}

function lineChart(title, series, { primary = "#72f5ff", secondary = "#ff8d3f", unit = "" } = {}) {
  const labels = ["00", "02", "04", "06", "08", "10", "12", "14", "16", "18", "20", "22"];
  return `
    <article class="chart-card panel">
      <div class="card-header">
        <div>
          <p class="eyebrow">Live chart</p>
          <h3 class="section-title">${title}</h3>
        </div>
        <div class="chart-legend">
          <span class="legend-chip" style="color:${primary}">Primary</span>
          ${
            series.secondary
              ? `<span class="legend-chip" style="color:${secondary}">Secondary</span>`
              : ""
          }
        </div>
      </div>
      <svg viewBox="0 0 640 220" class="chart-svg" role="img" aria-label="${title}">
        <defs>
          <linearGradient id="fill-${title.replace(/\s+/g, "-")}" x1="0%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stop-color="${primary}" stop-opacity="0.28"></stop>
            <stop offset="100%" stop-color="${primary}" stop-opacity="0.02"></stop>
          </linearGradient>
        </defs>
        ${labels
          .map(
            (_, index) =>
              `<line x1="${(index / 11) * 640}" y1="0" x2="${(index / 11) * 640}" y2="220" stroke="rgba(255,255,255,0.04)" />`
          )
          .join("")}
        <polyline points="${pointsToPolyline(series.primary)}" fill="none" stroke="${primary}" stroke-width="4" />
        ${
          series.secondary
            ? `<polyline points="${pointsToPolyline(series.secondary)}" fill="none" stroke="${secondary}" stroke-width="3" stroke-dasharray="10 8" />`
            : ""
        }
        <g>
          ${labels
            .map(
              (label, index) =>
                `<text x="${(index / 11) * 640}" y="214" class="axis-text">${label}${unit}</text>`
            )
            .join("")}
        </g>
      </svg>
    </article>
  `;
}

function barsChart(title, entries, color = "#72f5ff") {
  const max = Math.max(...entries.map((entry) => entry.value));
  return `
    <article class="chart-card panel">
      <div class="card-header">
        <div>
          <p class="eyebrow">Breakdown</p>
          <h3 class="section-title">${title}</h3>
        </div>
      </div>
      <div class="stack">
        ${entries
          .map(
            (entry) => `
              <div>
                <div class="card-header">
                  <strong>${entry.label}</strong>
                  <span class="muted">${entry.display}</span>
                </div>
                <div style="height:10px;border-radius:999px;background:rgba(255,255,255,0.06);overflow:hidden;">
                  <div style="width:${(entry.value / max) * 100}%;height:100%;border-radius:999px;background:linear-gradient(90deg, ${color}, #ff8d3f);"></div>
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    </article>
  `;
}

function tableCard(title, headers, rows) {
  return `
    <article class="table-card panel">
      <div class="table-card-header">
        <div>
          <p class="eyebrow">Operational table</p>
          <h3 class="section-title">${title}</h3>
        </div>
      </div>
      <div class="table-shell">
        <table>
          <thead>
            <tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${rows
              .map(
                (row) => `
                  <tr>
                    ${row.map((cell) => `<td>${cell}</td>`).join("")}
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </article>
  `;
}

function notificationFeed() {
  return `
    <article class="feed-card panel">
      <div class="card-header">
        <div>
          <p class="eyebrow">Live feed</p>
          <h3 class="section-title">Notifications</h3>
        </div>
        ${statusPill("4 alerts", "warning")}
      </div>
      <ul class="notification-feed">
        ${state.notifications
          .map(
            (item) => `
              <li class="notification-item">
                <strong>${item.title}</strong>
                <span class="muted">${item.detail}</span>
              </li>
            `
          )
          .join("")}
      </ul>
    </article>
  `;
}

function aiRecommendationsCard() {
  return `
    <article class="recommendation-card panel">
      <div class="card-header">
        <div>
          <p class="eyebrow">AI recommendations</p>
          <h3 class="section-title">Next best actions</h3>
        </div>
      </div>
      <ul class="recommendation-list">
        <li><strong>Shift 12% more GPU budget to Julia</strong><span class="muted">Finance traffic in London is surging and Julia outperforms Jack by 6.2% on economic reasoning.</span></li>
        <li><strong>Spin up 24 booking agents in APAC</strong><span class="muted">Reservation queue depth crossed the 80th percentile in Singapore, Tokyo, and Sydney.</span></li>
        <li><strong>Promote healthcare outfit preset</strong><span class="muted">Medical conversations have the highest retention uplift when doctor-context presentation is auto-applied.</span></li>
      </ul>
    </article>
  `;
}

function worldMapCard() {
  return `
    <article class="world-map-card panel">
      <div class="card-header">
        <div>
          <p class="eyebrow">Global presence</p>
          <h3 class="section-title">Live users by region</h3>
        </div>
        <span class="muted">${formatNumber(state.liveUsers)} concurrent users</span>
      </div>
      <div class="world-map">
        <span class="world-region region-us"></span>
        <span class="world-region region-eu"></span>
        <span class="world-region region-af"></span>
        <span class="world-region region-apac"></span>
        <span class="world-region region-sa"></span>
        <span class="pulse" style="top:31%;left:21%;"></span>
        <span class="pulse" style="top:27%;left:46%;"></span>
        <span class="pulse" style="top:43%;left:50%;"></span>
        <span class="pulse" style="top:35%;left:72%;"></span>
        <span class="pulse" style="top:63%;left:31%;"></span>
      </div>
    </article>
  `;
}

function avatarActivityCard() {
  return `
    <article class="avatar-card panel">
      <div class="card-header">
        <div>
          <p class="eyebrow">Digital human activity</p>
          <h3 class="section-title">Jack and Julia online</h3>
        </div>
      </div>
      <div class="avatar-grid">
        ${analytics.avatars
          .map(
            (avatar) => `
              <div class="avatar-tile">
                <div class="avatar-profile">
                  <div class="avatar-face">${avatar.name.charAt(0)}</div>
                  <div>
                    <strong>${avatar.name}</strong>
                    <p class="muted">${avatar.role}</p>
                    ${statusPill(avatar.status, "success")}
                  </div>
                </div>
                <div class="avatar-stats">
                  <div><span class="muted">Conversations</span><strong>${avatar.conversations}</strong></div>
                  <div><span class="muted">Latency</span><strong>${avatar.latency}</strong></div>
                  <div><span class="muted">Accuracy</span><strong>${avatar.accuracy}</strong></div>
                  <div><span class="muted">CSAT</span><strong>${avatar.csat}</strong></div>
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    </article>
  `;
}

function heatmapCard(title) {
  const cells = Array.from({ length: 50 }, (_, index) => {
    const intensity = ((index * 13) % 10) / 10;
    const color = `rgba(114,245,255,${0.1 + intensity * 0.7})`;
    return `<div class="heat-cell" style="background:${color}"></div>`;
  });

  return `
    <article class="heatmap-card panel">
      <div class="card-header">
        <div>
          <p class="eyebrow">Behavior heat map</p>
          <h3 class="section-title">${title}</h3>
        </div>
      </div>
      <div class="heatmap-grid">${cells.join("")}</div>
    </article>
  `;
}

function networkCard() {
  return `
    <article class="network-card panel">
      <div class="card-header">
        <div>
          <p class="eyebrow">Agent communication</p>
          <h3 class="section-title">AGI workforce network</h3>
        </div>
      </div>
      <div class="network-view">
        <div class="network-node" style="top:18%;left:44%;">Singularity</div>
        <div class="network-node" style="top:8%;left:20%;">Jack</div>
        <div class="network-node" style="top:8%;left:66%;">Julia</div>
        <div class="network-node" style="top:34%;left:12%;">Sales</div>
        <div class="network-node" style="top:34%;left:70%;">Support</div>
        <div class="network-node" style="top:58%;left:22%;">Research</div>
        <div class="network-node" style="top:58%;left:58%;">Finance</div>
        <div class="network-node" style="top:76%;left:41%;">Aegis</div>
        <span class="network-line" style="top:16%;left:26%;width:112px;transform:rotate(13deg);"></span>
        <span class="network-line" style="top:16%;left:54%;width:110px;transform:rotate(-12deg);"></span>
        <span class="network-line" style="top:34%;left:22%;width:132px;transform:rotate(-13deg);"></span>
        <span class="network-line" style="top:37%;left:54%;width:130px;transform:rotate(12deg);"></span>
        <span class="network-line" style="top:62%;left:32%;width:122px;transform:rotate(14deg);"></span>
        <span class="network-line" style="top:62%;left:49%;width:104px;transform:rotate(-16deg);"></span>
      </div>
    </article>
  `;
}

function renderScreenIntro(title, description) {
  return `
    <article class="section-card panel">
      <p class="eyebrow">AGI-1 admin surface</p>
      <h3 class="section-title">${title}</h3>
      <p class="section-description">${description}</p>
    </article>
  `;
}

function renderCommandCenter() {
  return `
    <section class="dashboard-grid">
      <div class="span-12 metric-grid">
        ${metricCard({
          label: "AGI System Status",
          value: "Operational",
          trend: "99.982% uptime",
          caption: "Aegis, Singularity, Jack, and Julia are currently synchronized.",
        })}
        ${metricCard({
          label: "Realtime Active Users",
          value: formatNumber(state.liveUsers),
          trend: "+12.4%",
          caption: "Trailing 15-minute concurrent load.",
        })}
        ${metricCard({
          label: "Agents Working",
          value: "1,024",
          trend: "876 autonomous",
          caption: "Sales, research, booking, support, finance, and marketing agents online.",
        })}
        ${metricCard({
          label: "Revenue Today",
          value: formatCurrency(state.revenueToday),
          trend: "+18.1%",
          caption: "Subscriptions, enterprise seats, and task-execution monetization.",
        })}
      </div>

      <div class="span-8">${lineChart("CPU / GPU utilization", { primary: realtimeSeries.usage, secondary: realtimeSeries.gpu })}</div>
      <div class="span-4">${notificationFeed()}</div>
      <div class="span-7">${worldMapCard()}</div>
      <div class="span-5">${avatarActivityCard()}</div>
      <div class="span-8">${networkCard()}</div>
      <div class="span-4">${aiRecommendationsCard()}</div>
    </section>
  `;
}

function renderSystemHealth() {
  return `
    <div class="stack">
      ${renderScreenIntro(
        "Realtime infrastructure diagnostics",
        "Track uptime, API latency, error budgets, model routing stability, and GPU pressure across the sovereign AGI runtime."
      )}
      <div class="panel-grid">
        ${lineChart("API latency and response speed", {
          primary: realtimeSeries.latency,
          secondary: realtimeSeries.usage,
        }, { primary: "#72f5ff", secondary: "#ff8d3f", unit: "m" })}
        ${barsChart("Failure pressure by subsystem", [
          { label: "API gateway", value: 12, display: "0.02% error rate" },
          { label: "Realtime transport", value: 28, display: "0.08% reconnects" },
          { label: "Task execution", value: 19, display: "0.04% retries" },
          { label: "Billing hooks", value: 7, display: "0.01% alerts" },
        ], "#ff8d3f")}
      </div>
      ${tableCard("Infrastructure signals", ["Subsystem", "Status", "Latency", "Notes"], [
        ["API Gateway", statusPill("Healthy"), "96ms", "TLS, rate limiting, and gzip enabled"],
        ["LiveKit Realtime", statusPill("Connected"), "178ms", "Dispatch + room join validated"],
        ["Task Runtime", statusPill("Healthy"), "142ms", "1,024 agents available"],
        ["DynamoDB Memory", statusPill("Ready"), "34ms", "Production table reachable"],
        ["Watchdog", statusPill("Enabled"), "90s recovery", "Service self-healing active"],
      ])}
    </div>
  `;
}

function renderUserAnalytics() {
  return `
    <div class="stack">
      ${renderScreenIntro(
        "User analytics and growth intelligence",
        "Monitor total users, DAU, MAU, retention, churn, heat maps, session depth, and conversion funnels across mobile and web."
      )}
      <div class="metric-grid">
        ${metricCard({ label: "Total Users", value: "238,420", trend: "+21.6%", caption: "Cross-platform installed users." })}
        ${metricCard({ label: "Daily Active Users", value: "84,192", trend: "+9.1%", caption: "Daily actives across app and web." })}
        ${metricCard({ label: "Monthly Active Users", value: "192,044", trend: "+14.2%", caption: "MAU consolidated from all surfaces." })}
        ${metricCard({ label: "Retention", value: "78.4%", trend: "-1.2% churn", caption: "Thirty-day retained power users." })}
      </div>
      <div class="split-layout">
        ${lineChart("Usage time by hour", { primary: [24, 28, 22, 25, 34, 46, 59, 72, 82, 88, 91, 84] })}
        <article class="section-card panel">
          <div class="card-header">
            <div>
              <p class="eyebrow">Conversion funnel</p>
              <h3 class="section-title">Visitor to paid user</h3>
            </div>
          </div>
          <div class="funnel">
            ${realtimeSeries.funnel
              .map(
                (step) => `
                  <div class="funnel-stage" style="width:${step.width}%;">
                    <strong>${step.stage}</strong>
                    <span class="muted">${step.value}</span>
                  </div>
                `
              )
              .join("")}
          </div>
        </article>
      </div>
      <div class="panel-grid">
        ${heatmapCard("Engagement heat map")}
        ${tableCard("Top 10 countries using AGI-1", ["Country", "Users", "Share"], analytics.topCountries)}
      </div>
    </div>
  `;
}

function renderDownloadsLocation() {
  return `
    <div class="stack">
      ${renderScreenIntro(
        "Download distribution by geography",
        "Track which markets are installing AGI-1 fastest and where additional localization, support, and compute should be provisioned."
      )}
      <div class="panel-grid">
        ${worldMapCard()}
        ${barsChart("App downloads by country", analytics.topCountries.slice(0, 6).map(([label, users, share]) => ({
          label,
          value: users,
          display: `${formatNumber(users)} downloads | ${share}`,
        })), "#72f5ff")}
      </div>
    </div>
  `;
}

function renderAvatarManagement(name) {
  const avatar = analytics.avatars.find((item) => item.name === name);
  return `
    <div class="stack">
      ${renderScreenIntro(
        `${name} digital human operations`,
        `${name} is a presentation-selectable digital human with the same capability contract as the alternate avatar. Control runtime, retraining, voice, personality, and live test operations here.`
      )}
      <div class="split-layout">
        <article class="avatar-card panel">
          <div class="avatar-profile">
            <div class="avatar-face">${avatar.name.charAt(0)}</div>
            <div>
              <strong>${avatar.name}</strong>
              <p class="muted">${avatar.role}</p>
              ${statusPill(avatar.status, "success")}
            </div>
          </div>
          <div class="avatar-stats">
            <div><span class="muted">Tasks handled</span><strong>${avatar.tasks}</strong></div>
            <div><span class="muted">Conversations today</span><strong>${avatar.conversations}</strong></div>
            <div><span class="muted">Customer satisfaction</span><strong>${avatar.csat}</strong></div>
            <div><span class="muted">Response latency</span><strong>${avatar.latency}</strong></div>
            <div><span class="muted">Performance rating</span><strong>${avatar.rating}</strong></div>
            <div><span class="muted">Accuracy score</span><strong>${avatar.accuracy}</strong></div>
          </div>
        </article>
        <article class="control-card panel">
          <div class="card-header">
            <div>
              <p class="eyebrow">Controls</p>
              <h3 class="section-title">${name} runtime actions</h3>
            </div>
          </div>
          <ul class="control-list">
            <li><span>Start / Stop avatar</span><button class="mini-button">Toggle</button></li>
            <li><span>Retrain AI</span><button class="mini-button">Queue</button></li>
            <li><span>Update personality</span><button class="mini-button">Edit</button></li>
            <li><span>Update voice model</span><button class="mini-button">Swap</button></li>
            <li><span>Test conversation</span><button class="mini-button">Launch</button></li>
          </ul>
        </article>
      </div>
      ${tableCard(`${name} session ledger`, ["Window", "Handled", "CSAT", "Accuracy", "Latency"], [
        ["08:00-10:00", "41", "97.1%", "99.4%", "162ms"],
        ["10:00-12:00", "58", "98.3%", "99.1%", "174ms"],
        ["12:00-14:00", "63", "98.8%", "99.6%", "168ms"],
        ["14:00-16:00", "42", "97.9%", "99.2%", "181ms"],
      ])}
    </div>
  `;
}

function renderAvatarSettings() {
  return `
    <div class="stack">
      ${renderScreenIntro(
        "Avatar settings and presentation logic",
        "Configure contextual outfits, voice models, wake words, realtime presence mode, and presentation rules shared by Jack and Julia."
      )}
      <div class="settings-grid">
        <article class="control-card panel">
          <div class="card-header">
            <div>
              <p class="eyebrow">Presentation logic</p>
              <h3 class="section-title">Dynamic role styling</h3>
            </div>
          </div>
          <ul class="control-list">
            <li><span>Healthcare outfit</span>${statusPill("Doctor enabled")}</li>
            <li><span>Finance outfit</span>${statusPill("Executive enabled")}</li>
            <li><span>Media anchor outfit</span>${statusPill("Studio enabled", "warning")}</li>
            <li><span>Wake phrase routing</span>${statusPill("Hey Jack / Hi Julia")}</li>
          </ul>
        </article>
        <article class="control-card panel">
          <div class="card-header">
            <div>
              <p class="eyebrow">Voice stack</p>
              <h3 class="section-title">Realtime voice configuration</h3>
            </div>
          </div>
          <ul class="control-list">
            <li><span>Presence mode</span><strong>mvp_mp4 / LiveKit hybrid</strong></li>
            <li><span>Voice synthesis quality</span><strong>Studio Premium</strong></li>
            <li><span>Lipsync engine</span><strong>PersonaPlex realtime</strong></li>
            <li><span>Interrupt support</span><strong>Enabled</strong></li>
          </ul>
        </article>
      </div>
    </div>
  `;
}

function renderWorkforceAgents() {
  return `
    <div class="stack">
      ${renderScreenIntro(
        "AGI workforce management",
        "Control specialized agents across sales, support, research, booking, marketing, and finance while observing automation success rates and runtime health."
      )}
      <div class="panel-grid">
        ${networkCard()}
        ${barsChart("Automation success rate", analytics.agents.map(([label, , count, accuracy]) => ({
          label,
          value: Number.parseFloat(accuracy),
          display: `${count} tasks | ${accuracy}`,
        })), "#72f5ff")}
      </div>
      ${tableCard("Workforce agent roster", ["Agent", "Runtime", "Tasks", "Accuracy", "Rating", "Automation success"], analytics.agents.map((agent) => [
        agent[0],
        agent[1] === "ACTIVE" ? statusPill("Online") : statusPill("Monitor", "warning"),
        formatNumber(agent[2]),
        agent[3],
        agent[4],
        agent[5],
      ]))}
    </div>
  `;
}

function renderTaskAutomation() {
  return `
    <div class="stack">
      ${renderScreenIntro(
        "Task execution monitoring",
        "Watch live tasks, completions, failures, execution time, and distribution across the primary AGI automation categories."
      )}
      <div class="metric-grid">
        ${metricCard({ label: "Live Tasks", value: "316", trend: "+7.2%", caption: "Currently running autonomous workflows." })}
        ${metricCard({ label: "Completed Today", value: "41,228", trend: "96.8% success", caption: "All task categories combined." })}
        ${metricCard({ label: "Failed Today", value: "142", trend: "-18.4%", caption: "Failures reduced after latest remediation sweep." })}
        ${metricCard({ label: "Average Exec Time", value: "2m 18s", trend: "-11s", caption: "Median autonomous completion time." })}
      </div>
      <div class="panel-grid">
        ${lineChart("Task completion timeline", { primary: [22, 36, 48, 54, 63, 70, 84, 88, 95, 104, 118, 126] })}
        ${barsChart("Agent task distribution", [
          { label: "Booking", value: 912, display: "912 live / completed" },
          { label: "Buying products", value: 614, display: "614 live / completed" },
          { label: "Customer service calls", value: 1240, display: "1,240 live / completed" },
          { label: "Marketing campaigns", value: 802, display: "802 live / completed" },
          { label: "Sales calls", value: 978, display: "978 live / completed" },
          { label: "Tax filing", value: 214, display: "214 live / completed" },
          { label: "Data research", value: 1338, display: "1,338 live / completed" },
        ], "#ff8d3f")}
      </div>
    </div>
  `;
}

function renderMarketplaceAgents() {
  return `
    <div class="stack">
      ${renderScreenIntro(
        "Marketplace automation",
        "Manage AGI agents that buy and sell products online, monitor product velocity, and supervise revenue from automated commerce."
      )}
      <div class="metric-grid">
        ${metricCard({ label: "Active Buying Tasks", value: "86", trend: "+11", caption: "Inventory sourcing and replenishment." })}
        ${metricCard({ label: "Active Selling Tasks", value: "141", trend: "+22", caption: "Marketplace listings and negotiations." })}
        ${metricCard({ label: "Products Purchased", value: "3,912", trend: "+18.2%", caption: "Transactions completed today." })}
        ${metricCard({ label: "Products Sold", value: "4,384", trend: "+22.6%", caption: "Automated sales closed today." })}
      </div>
      <div class="panel-grid">
        ${barsChart("Marketplace integrations", [
          { label: "Amazon", value: 94, display: "94 active syncs" },
          { label: "Shopify", value: 86, display: "86 active syncs" },
          { label: "eBay", value: 73, display: "73 active syncs" },
          { label: "Walmart", value: 41, display: "41 active syncs" },
        ])}
        ${lineChart("Automated sales revenue", { primary: realtimeSeries.revenue })}
      </div>
    </div>
  `;
}

function renderCustomerInteractions() {
  return `
    <div class="stack">
      ${renderScreenIntro(
        "Digital human interaction monitoring",
        "Track live conversations, video sessions, call transcripts, sentiment, satisfaction, and response velocity across Jack and Julia."
      )}
      <div class="panel-grid">
        <article class="feed-card panel">
          <div class="card-header">
            <div>
              <p class="eyebrow">Live conversations</p>
              <h3 class="section-title">Realtime customer feed</h3>
            </div>
          </div>
          <ul class="notification-feed">
            <li class="notification-item"><strong>Jack / Enterprise founder</strong><span class="muted">"Book flights, prep investor memo, and call legal counsel."</span></li>
            <li class="notification-item"><strong>Julia / Media producer</strong><span class="muted">"Summarize latest AI stories and outline a five-minute news segment."</span></li>
            <li class="notification-item"><strong>Jack / Support escalation</strong><span class="muted">"Troubleshoot billing error and initiate refund."</span></li>
          </ul>
        </article>
        ${lineChart("Conversation success and response time", {
          primary: [72, 74, 76, 78, 81, 83, 85, 87, 88, 89, 91, 92],
          secondary: [280, 260, 248, 238, 225, 214, 208, 194, 186, 182, 178, 174],
        }, { primary: "#72f5ff", secondary: "#ff8d3f" })}
      </div>
      ${tableCard("Sentiment and transcript monitor", ["Session", "Avatar", "Sentiment", "CSAT", "Transcript"], [
        ["CX-10021", "Jack", statusPill("Positive"), "4.9/5", "Client approved the sales playbook and scheduled follow-up."],
        ["CX-10022", "Julia", statusPill("Positive"), "4.8/5", "News briefing delivered with sources and timing cues."],
        ["CX-10023", "Jack", statusPill("Neutral", "warning"), "4.4/5", "Support conversation required second verification on refund route."],
      ])}
    </div>
  `;
}

function renderBookingSystems() {
  return `
    <div class="stack">
      ${renderScreenIntro(
        "Booking and reservation automation",
        "Observe travel, hospitality, restaurant, and appointment scheduling performance across autonomous booking agents."
      )}
      <div class="metric-grid">
        ${metricCard({ label: "Hotel Reservations", value: "612", trend: "98.2%", caption: "Successful bookings today." })}
        ${metricCard({ label: "Flight Bookings", value: "391", trend: "96.8%", caption: "Completed itineraries today." })}
        ${metricCard({ label: "Restaurant Reservations", value: "288", trend: "99.1%", caption: "Dining requests completed." })}
        ${metricCard({ label: "Appointment Scheduling", value: "714", trend: "97.4%", caption: "Professional and healthcare slots reserved." })}
      </div>
      <div class="panel-grid">
        ${lineChart("Booking success rate", { primary: [91, 92, 91, 93, 94, 95, 96, 96, 97, 97, 98, 98] })}
        ${barsChart("Booking revenue", [
          { label: "Hotels", value: 141000, display: "$141k" },
          { label: "Flights", value: 96000, display: "$96k" },
          { label: "Restaurants", value: 18000, display: "$18k" },
          { label: "Appointments", value: 42000, display: "$42k" },
        ], "#72f5ff")}
      </div>
    </div>
  `;
}

function renderPerformanceBenchmarks() {
  return `
    <div class="stack">
      ${renderScreenIntro(
        "AGI benchmarking center",
        "Compare Jack and Julia across reasoning accuracy, response speed, retrieval precision, task success, and user satisfaction."
      )}
      <div class="metric-grid">
        ${metricCard({ label: "Reasoning Accuracy", value: "99.3%", trend: "Jack +0.4", caption: "Weighted benchmark average." })}
        ${metricCard({ label: "Response Speed", value: "172ms", trend: "Julia -11ms", caption: "Median production response latency." })}
        ${metricCard({ label: "Task Success", value: "96.8%", trend: "Singularity stable", caption: "Autonomous task completion rate." })}
        ${metricCard({ label: "Knowledge Accuracy", value: "98.9%", trend: "+1.1%", caption: "Retrieval and citation integrity." })}
      </div>
      ${tableCard("Jack vs Julia performance", ["Metric", "Jack", "Julia", "Leader"], [
        ["Customer satisfaction", "97.8%", "98.6%", "Julia"],
        ["Response latency", "178ms", "166ms", "Julia"],
        ["Financial accuracy", "98.9%", "99.5%", "Julia"],
        ["Strategic task closure", "97.4%", "96.8%", "Jack"],
        ["Knowledge retrieval", "98.8%", "99.1%", "Julia"],
      ])}
    </div>
  `;
}

function renderMarketingIntelligence() {
  return `
    <div class="stack">
      ${renderScreenIntro(
        "Digital marketing intelligence",
        "Track acquisition, channel health, SEO performance, traffic quality, and campaign conversion across AGI-1 growth programs."
      )}
      <div class="metric-grid">
        ${metricCard({ label: "Campaign ROI", value: "4.8x", trend: "+0.6x", caption: "Blended ROI across paid and organic." })}
        ${metricCard({ label: "Cost per Acquisition", value: "$28", trend: "-12%", caption: "Down from prior weekly average." })}
        ${metricCard({ label: "Organic Traffic", value: "192k", trend: "+19%", caption: "SEO and content acquisition." })}
        ${metricCard({ label: "Social Engagement", value: "8.2M", trend: "+22%", caption: "Cross-platform engagement this month." })}
      </div>
      <div class="panel-grid">
        ${lineChart("Traffic and ranking momentum", {
          primary: [28, 34, 38, 44, 52, 58, 61, 66, 74, 79, 84, 92],
          secondary: [14, 19, 22, 26, 31, 36, 40, 44, 49, 52, 58, 63],
        })}
        ${barsChart("Funnel sources", [
          { label: "Organic search", value: 41, display: "41%" },
          { label: "Paid social", value: 24, display: "24%" },
          { label: "Creator referrals", value: 18, display: "18%" },
          { label: "Email lifecycle", value: 10, display: "10%" },
          { label: "Partnerships", value: 7, display: "7%" },
        ], "#ff8d3f")}
      </div>
    </div>
  `;
}

function renderKnowledgeBrain() {
  return `
    <div class="stack">
      ${renderScreenIntro(
        "Knowledge brain center",
        "Visualize AGI-1 knowledge graphs, ingestion logs, retraining cadence, and knowledge accuracy scores for the shared intelligence layer."
      )}
      <div class="panel-grid">
        ${networkCard()}
        <article class="control-card panel">
          <div class="card-header">
            <div>
              <p class="eyebrow">Knowledge maintenance</p>
              <h3 class="section-title">Learning updates</h3>
            </div>
          </div>
          <ul class="stats-strip">
            <li><span>Knowledge graph nodes</span><strong>24.8M</strong></li>
            <li><span>New ingestion events today</span><strong>412k</strong></li>
            <li><span>Model retraining cadence</span><strong>Every 6 hours</strong></li>
            <li><span>Knowledge accuracy score</span><strong>98.9%</strong></li>
          </ul>
        </article>
      </div>
    </div>
  `;
}

function renderRevenueDashboard() {
  return `
    <div class="stack">
      ${renderScreenIntro(
        "Revenue and business intelligence",
        "Track daily and monthly revenue, revenue by feature and country, LTV, and subscription conversion across the AGI-1 platform."
      )}
      <div class="metric-grid">
        ${metricCard({ label: "Daily Revenue", value: formatCurrency(state.revenueToday), trend: "+18.1%", caption: "Current day run rate." })}
        ${metricCard({ label: "Monthly Revenue", value: "$9.8M", trend: "+24.7%", caption: "Rolling thirty-day gross revenue." })}
        ${metricCard({ label: "Subscription Conversion", value: "12.4%", trend: "+1.8%", caption: "Trial to paid upgrade rate." })}
        ${metricCard({ label: "User Lifetime Value", value: "$1,480", trend: "+9.4%", caption: "Modeled blended LTV." })}
      </div>
      <div class="panel-grid">
        ${lineChart("Revenue by daypart", { primary: realtimeSeries.revenue, secondary: [62, 88, 96, 108, 126, 144, 156, 170, 181, 198, 214, 226] })}
        ${barsChart("Revenue by feature", [
          { label: "Realtime avatar calls", value: 42, display: "42%" },
          { label: "Enterprise orchestration", value: 26, display: "26%" },
          { label: "Autonomous tasks", value: 18, display: "18%" },
          { label: "Agent workforce seats", value: 14, display: "14%" },
        ])}
      </div>
    </div>
  `;
}

function renderAppMonitoring() {
  return `
    <div class="stack">
      ${renderScreenIntro(
        "Application monitoring",
        "Monitor uptime, app latency, network traffic, error rates, and mixed surface performance for mobile and web."
      )}
      <div class="metric-grid">
        ${metricCard({ label: "App Uptime", value: "99.982%", trend: "+0.004%", caption: "Past 30 days." })}
        ${metricCard({ label: "API Latency", value: "96ms", trend: "-8ms", caption: "Gateway median." })}
        ${metricCard({ label: "Error Rate", value: "0.02%", trend: "-0.01%", caption: "All surfaces combined." })}
        ${metricCard({ label: "Network Traffic", value: "8.4 TB", trend: "+14%", caption: "Today across CDN and API." })}
      </div>
      <div class="panel-grid">
        ${lineChart("Web and mobile latency", { primary: realtimeSeries.latency, secondary: [148, 146, 142, 138, 132, 128, 122, 118, 112, 108, 105, 101] })}
        ${barsChart("Error sources", [
          { label: "iOS client", value: 9, display: "9 incidents" },
          { label: "Android client", value: 11, display: "11 incidents" },
          { label: "Web HUD", value: 7, display: "7 incidents" },
          { label: "Admin panel", value: 3, display: "3 incidents" },
        ], "#ff8d3f")}
      </div>
    </div>
  `;
}

function renderServerMonitoring() {
  return `
    <div class="stack">
      ${renderScreenIntro(
        "Infrastructure server monitoring",
        "Track server load, memory, GPU utilization, network saturation, and API service health for the sovereign EC2 runtime."
      )}
      <div class="panel-grid">
        ${lineChart("CPU and GPU load", { primary: realtimeSeries.usage, secondary: realtimeSeries.gpu })}
        ${barsChart("Server load by service", [
          { label: "FastAPI runtime", value: 42, display: "42%" },
          { label: "LiveKit bridge", value: 56, display: "56%" },
          { label: "Nginx gateway", value: 18, display: "18%" },
          { label: "DynamoDB I/O", value: 24, display: "24%" },
        ], "#72f5ff")}
      </div>
    </div>
  `;
}

function renderTeamAccess() {
  return `
    <div class="stack">
      ${renderScreenIntro(
        "Admin team management",
        "Manage owners, executives, managers, developers, analysts, and support agents with activity logging and role assignment."
      )}
      ${tableCard("Team access roster", ["Name", "Role", "Scope", "Last Active", "Status"], [
        ["Jacquelin Antoine", "Owner", "Global", "2 minutes ago", statusPill("Online")],
        ["Executive Ops", "Executive", "Revenue + Agents", "8 minutes ago", statusPill("Online")],
        ["Infra Engineering", "Developer", "Infrastructure", "16 minutes ago", statusPill("Online")],
        ["Growth Analytics", "Analyst", "Users + Marketing", "27 minutes ago", statusPill("Online")],
        ["Customer Success", "Support Agent", "Conversations", "42 minutes ago", statusPill("Standby", "warning")],
      ])}
    </div>
  `;
}

function renderPermissions() {
  return `
    <div class="stack">
      ${renderScreenIntro(
        "Permissions and policy enforcement",
        "Control role-based access, audit trails, and sensitive operational privileges across AGI-1 command surfaces."
      )}
      <div class="settings-grid">
        <article class="control-card panel">
          <div class="card-header">
            <div>
              <p class="eyebrow">Policy matrix</p>
              <h3 class="section-title">Sensitive actions</h3>
            </div>
          </div>
          <ul class="control-list">
            <li><span>Model switching</span>${statusPill("Owner only", "warning")}</li>
            <li><span>Agent deployment</span>${statusPill("Executive + Developer")}</li>
            <li><span>Revenue data export</span>${statusPill("Owner + Analyst")}</li>
            <li><span>Conversation replay</span>${statusPill("Support + Executive")}</li>
          </ul>
        </article>
        <article class="feed-card panel">
          <div class="card-header">
            <div>
              <p class="eyebrow">Audit log</p>
              <h3 class="section-title">Recent permission events</h3>
            </div>
          </div>
          <ul class="notification-feed">
            <li class="notification-item"><strong>Aegis approved model swap preview</strong><span class="muted">Developer role elevated for 15-minute sandbox window.</span></li>
            <li class="notification-item"><strong>Conversation export denied</strong><span class="muted">Support role attempted to access executive-only transcript archive.</span></li>
            <li class="notification-item"><strong>Revenue dashboard export granted</strong><span class="muted">Analyst role executed scheduled finance snapshot.</span></li>
          </ul>
        </article>
      </div>
    </div>
  `;
}

function renderSystemSettings() {
  return `
    <div class="stack">
      ${renderScreenIntro(
        "Master AGI system controls",
        "Operate the control plane for model routing, system power state, deployment levels, security, and digital human configuration."
      )}
      <div class="settings-grid">
        <article class="control-card panel">
          <div class="card-header">
            <div>
              <p class="eyebrow">Master control</p>
              <h3 class="section-title">Runtime toggles</h3>
            </div>
          </div>
          <ul class="control-list">
            <li><span>AGI system on/off</span><button class="secondary-button">Live</button></li>
            <li><span>Model switching</span><button class="ghost-button">Balanced</button></li>
            <li><span>Agent deployment mode</span><button class="ghost-button">Autonomous</button></li>
            <li><span>Security level</span><button class="secondary-button">Aegis strict</button></li>
          </ul>
        </article>
        <article class="control-card panel">
          <div class="card-header">
            <div>
              <p class="eyebrow">Voice and avatar</p>
              <h3 class="section-title">Realtime configuration</h3>
            </div>
          </div>
          <ul class="control-list">
            <li><span>Voice model family</span><strong>Studio Sovereign</strong></li>
            <li><span>Digital human render mode</span><strong>Cinematic 60 FPS</strong></li>
            <li><span>Wake phrase listener</span><strong>Enabled</strong></li>
            <li><span>Interrupt policy</span><strong>Immediate</strong></li>
          </ul>
        </article>
      </div>
    </div>
  `;
}

function renderIntegrations() {
  return `
    <div class="stack">
      ${renderScreenIntro(
        "Integrations",
        "Monitor third-party and sovereign integrations for API health, billing, telephony, meetings, marketplaces, and observability."
      )}
      ${tableCard("Integration registry", ["Integration", "Status", "Latency", "Notes"], [
        ["LiveKit Cloud", statusPill("Connected"), "178ms", "Realtime video and voice transport"],
        ["DynamoDB", statusPill("Connected"), "34ms", "Shared memory and task state"],
        ["SearXNG", statusPill("Connected"), "758ms", "Sovereign research feed"],
        ["Stripe", statusPill("Connected"), "124ms", "Revenue and billing events"],
        ["Twilio SIP", statusPill("Standby", "warning"), "n/a", "Telephony route staged"],
        ["Zoom / Meet Adapter", statusPill("Connected"), "212ms", "Meeting automation bridge"],
      ])}
    </div>
  `;
}

function renderFallback() {
  return renderScreenIntro(
    "Module unavailable",
    "The requested control surface is not yet defined in this dashboard build."
  );
}

function updateHeader() {
  const definition = sections[state.view] || sections["command-center"];
  viewTitle.textContent = definition.title;
  viewBreadcrumb.textContent = definition.breadcrumb;
  topUsers.textContent = formatNumber(state.liveUsers);
  heroSessions.textContent = formatNumber(state.realtimeSessions);
  heroTasks.textContent = formatNumber(state.tasksToday);
  heroRevenue.textContent = formatCurrency(state.revenueToday);
  systemIndicator.className = `status-dot status-${state.systemColor}`;
  systemLabel.textContent = state.systemStatus;
}

function renderNavigation(filterText = "") {
  const query = filterText.trim().toLowerCase();
  sidebarNav.innerHTML = navigation
    .map((group) => {
      const items = group.items.filter((item) => {
        if (!query) return true;
        return (
          item.label.toLowerCase().includes(query) ||
          item.hint.toLowerCase().includes(query) ||
          group.group.toLowerCase().includes(query)
        );
      });

      if (!items.length) {
        return "";
      }

      return `
        <section class="nav-group">
          <p class="nav-group-title">${group.group}</p>
          <ul class="nav-list">
            ${items
              .map(
                (item) => `
                  <li>
                    <button class="nav-item-button ${item.id === state.view ? "active" : ""}" data-view="${item.id}" type="button">
                      <span class="nav-item-label">
                        <strong>${item.label}</strong>
                        <span>${item.hint}</span>
                      </span>
                      ${item.badge ? `<span class="nav-item-pill">${item.badge}</span>` : ""}
                    </button>
                  </li>
                `
              )
              .join("")}
          </ul>
        </section>
      `;
    })
    .join("");
}

function renderView() {
  updateHeader();
  const definition = sections[state.view];
  viewContent.innerHTML = definition ? definition.render() : renderFallback();
}

function setView(viewId) {
  state.view = viewId;
  renderNavigation(navSearch.value);
  renderView();
}

function startRealtimePulse() {
  setInterval(() => {
    state.liveUsers += Math.floor(Math.random() * 120 - 35);
    state.realtimeSessions += Math.floor(Math.random() * 14 - 5);
    state.tasksToday += Math.floor(Math.random() * 90);
    state.revenueToday += Math.floor(Math.random() * 3200);

    if (Math.random() > 0.92) {
      state.systemStatus = "Attention";
      state.systemColor = "orange";
    } else {
      state.systemStatus = "Operational";
      state.systemColor = "green";
    }

    state.liveUsers = Math.max(11000, state.liveUsers);
    state.realtimeSessions = Math.max(220, state.realtimeSessions);
    renderView();
  }, 4200);
}

sidebarNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-view]");
  if (!button) return;
  setView(button.dataset.view);
});

navSearch.addEventListener("input", (event) => {
  renderNavigation(event.target.value);
});

renderNavigation();
renderView();
startRealtimePulse();
