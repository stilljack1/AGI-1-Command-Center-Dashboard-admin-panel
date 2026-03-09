const navigation = [
  {
    group: "Dashboard",
    items: [
      { id: "command-center", label: "Command Center", hint: "Global AGI mission control", badge: "Live" },
      { id: "system-health", label: "System Health", hint: "Runtime and infrastructure" },
    ],
  },
  {
    group: "Users",
    items: [
      { id: "user-accounts", label: "User Accounts", hint: "Profiles and account types" },
      { id: "user-activity", label: "Activity", hint: "Tasks, tokens, sessions" },
      { id: "user-retention", label: "Retention", hint: "Churn and engagement" },
    ],
  },
  {
    group: "Team",
    items: [
      { id: "team-roles", label: "Roles", hint: "Internal operating structure" },
      { id: "team-permissions", label: "Permissions", hint: "Access control matrix" },
      { id: "team-access-logs", label: "Access Logs", hint: "Audit trail" },
    ],
  },
  {
    group: "Digital Humans",
    items: [
      { id: "jack", label: "Jack", hint: "CEO digital human" },
      { id: "julia", label: "Julia", hint: "CFO digital human" },
      { id: "avatar-settings", label: "Avatar Settings", hint: "Wake phrases and persona" },
    ],
  },
  {
    group: "Agents",
    items: [
      { id: "agent-list", label: "Agent List", hint: "Workforce directory" },
      { id: "agent-performance", label: "Performance", hint: "Success and runtime" },
      { id: "agent-rankings", label: "Rankings", hint: "Quality leaderboard" },
    ],
  },
  {
    group: "Models",
    items: [
      { id: "model-library", label: "Model Library", hint: "Reasoning, vision, speech" },
      { id: "model-benchmarks", label: "Benchmarks", hint: "Latency, accuracy, cost" },
      { id: "model-ab-testing", label: "A/B Testing", hint: "Variant evaluation" },
    ],
  },
  {
    group: "Analytics",
    items: [
      { id: "data-analysis", label: "Data Analysis", hint: "Usage and collection" },
      { id: "product-market-fit", label: "Product Market Fit", hint: "NPS and growth" },
      { id: "user-behavior", label: "User Behavior", hint: "Journey and drop-off" },
    ],
  },
  {
    group: "Downloads",
    items: [
      { id: "install-analytics", label: "Install Analytics", hint: "Growth and uninstall" },
      { id: "geographic-data", label: "Geographic Data", hint: "Global adoption map" },
    ],
  },
  {
    group: "Performance",
    items: [
      { id: "app-monitor", label: "App Monitor", hint: "iOS, Android, web" },
      { id: "website-monitor", label: "Website Monitor", hint: "Traffic and page speed" },
    ],
  },
  {
    group: "Security",
    items: [
      { id: "threat-detection", label: "Threat Detection", hint: "Aegis alert console" },
      { id: "token-protection", label: "Token Protection", hint: "API key governance" },
    ],
  },
  {
    group: "Finance",
    items: [
      { id: "revenue", label: "Revenue", hint: "Income and monetization" },
      { id: "subscriptions", label: "Subscriptions", hint: "Tier health" },
    ],
  },
  {
    group: "System",
    items: [
      { id: "system-settings", label: "Settings", hint: "Platform configuration" },
      { id: "system-infrastructure", label: "Infrastructure", hint: "Cloud and runtime" },
      { id: "system-integrations", label: "Integrations", hint: "Connected services" },
    ],
  },
  {
    group: "Developer",
    items: [
      { id: "developer-api-keys", label: "API Keys", hint: "Issued credentials" },
      { id: "developer-usage", label: "API Usage", hint: "Traffic and rate limits" },
    ],
  },
];

const fallbackSnapshot = {
  meta: {
    platform: "AGI-1",
    organization: "Fair Group AI",
    apiVersion: "2026.03",
    environment: "seeded-preview",
    generatedAt: new Date().toISOString(),
  },
  dashboard: {
    status: { label: "Operational", tone: "green", uptime: "99.982%" },
    metrics: {
      activeUsers: 12842,
      activeAgents: 1187,
      tasksToday: 41228,
      apiRequests: 3842216,
      tokenUsage: "8.4B",
      securityAlerts: 3,
      revenueToday: 428912,
      systemUptimeHours: 392,
    },
    charts: {
      tasksPerMinute: [212, 244, 238, 281, 312, 329, 341, 368, 386, 402, 425, 448],
      inferenceLoad: [54, 58, 55, 63, 68, 72, 76, 79, 81, 84, 87, 89],
      gpuUsage: [42, 45, 48, 53, 57, 61, 66, 69, 72, 74, 78, 81],
      memoryConsumption: [38, 39, 41, 43, 44, 46, 47, 49, 51, 50, 52, 54],
    },
    alerts: [
      { severity: "warning", title: "Vector index lag", detail: "semantic refresh delayed 42 seconds in eu-west" },
      { severity: "danger", title: "Login anomaly cluster", detail: "7 suspicious attempts blocked by Aegis in 3 minutes" },
      { severity: "success", title: "Jack voice path stable", detail: "realtime voice latency held under 180ms" },
    ],
    notifications: [
      { title: "Model drift sweep complete", detail: "Research model variance stayed below threshold." },
      { title: "Julia satisfaction rising", detail: "Finance sessions reached 98.6% positive feedback." },
      { title: "Marketplace automation burst", detail: "Order-handling agents closed 612 commerce tasks in the last hour." },
    ],
    recommendations: [
      { title: "Shift 6 GPU workers to inference", detail: "Speech load is rising faster than research load." },
      { title: "Increase enterprise onboarding automation", detail: "Activation funnel dips after API key generation." },
      { title: "Tighten token quota on one developer segment", detail: "Abuse risk score elevated for sandbox-heavy keys." },
    ],
  },
  users: {
    summary: {
      totalUsers: 184220,
      dailyActiveUsers: 12842,
      monthlyActiveUsers: 84210,
      engagementScore: 87,
      churnRisk: 11,
    },
    accounts: [
      { name: "Maya Chen", email: "maya@futuredesk.ai", phone: "+1 415 555 0140", location: "San Francisco, US", type: "Enterprise", status: "Active" },
      { name: "Daniel Okafor", email: "daniel@orbitmedia.io", phone: "+44 20 5550 1150", location: "London, UK", type: "Premium", status: "Active" },
      { name: "Sophia Alvarez", email: "sophia@creatorstack.com", phone: "+1 786 555 0191", location: "Miami, US", type: "Developer", status: "Under review" },
      { name: "Arjun Rao", email: "arjun@talentloop.in", phone: "+91 22 5552 1022", location: "Mumbai, IN", type: "Free", status: "Suspended" },
    ],
    activity: [
      { user: "Maya Chen", tasksRequested: 182, agentsUsed: 24, tokenConsumption: "18.2M", loginHistory: "5 sessions / 24h" },
      { user: "Daniel Okafor", tasksRequested: 134, agentsUsed: 18, tokenConsumption: "9.1M", loginHistory: "3 sessions / 24h" },
      { user: "Sophia Alvarez", tasksRequested: 89, agentsUsed: 12, tokenConsumption: "4.6M", loginHistory: "2 sessions / 24h" },
    ],
    retention: {
      day1: 80,
      day7: 55,
      day30: 32,
      churnRate: 8.9,
      sessionDuration: "18m 22s",
    },
    behavior: {
      featureUsage: [
        { label: "Chat assistant", value: 92 },
        { label: "Task automation", value: 61 },
        { label: "Marketplace agents", value: 34 },
        { label: "Voice mode", value: 47 },
      ],
      journey: ["Login", "Prompt or wake phrase", "Task planning", "Execution", "Result review", "Feedback"],
      heatmap: [
        [7, 8, 5, 6, 9, 10, 12],
        [6, 8, 10, 12, 14, 15, 13],
        [5, 7, 11, 16, 18, 17, 15],
        [4, 7, 9, 14, 17, 18, 16],
      ],
    },
  },
  team: {
    roles: [
      { role: "Owner", permissions: "Full access" },
      { role: "Executive", permissions: "Strategic dashboards" },
      { role: "Admin", permissions: "System config" },
      { role: "Developer", permissions: "Models + infrastructure" },
      { role: "Analyst", permissions: "Analytics only" },
      { role: "Support", permissions: "User accounts" },
    ],
    members: [
      { name: "Jacquelin Antoine", role: "Owner", scope: "Platform", lastActive: "2 min ago", status: "Active" },
      { name: "Julia Ops Lead", role: "Executive", scope: "Finance + growth", lastActive: "8 min ago", status: "Active" },
      { name: "Aegis Admin", role: "Admin", scope: "Security + policies", lastActive: "11 min ago", status: "Active" },
      { name: "Infra Engineer", role: "Developer", scope: "Runtime + API", lastActive: "18 min ago", status: "Active" },
    ],
    accessLogs: [
      { actor: "Jacquelin Antoine", event: "Updated infrastructure alert thresholds", time: "2026-03-08T20:42:00Z" },
      { actor: "Aegis Admin", event: "Revoked developer sandbox token", time: "2026-03-08T20:30:00Z" },
      { actor: "Infra Engineer", event: "Rotated edge deployment secrets", time: "2026-03-08T20:11:00Z" },
    ],
  },
  digitalHumans: {
    avatars: [
      {
        name: "Jack",
        role: "CEO Digital Human",
        status: "Online",
        tasksHandled: 732,
        conversationsToday: 189,
        customerSatisfaction: 97.8,
        performanceRating: "A+",
        accuracy: 99.2,
        latencyMs: 178,
        outfitProfile: "Executive",
      },
      {
        name: "Julia",
        role: "CFO Digital Human",
        status: "Online",
        tasksHandled: 689,
        conversationsToday: 204,
        customerSatisfaction: 98.6,
        performanceRating: "A+",
        accuracy: 99.5,
        latencyMs: 166,
        outfitProfile: "Executive",
      },
    ],
    wakePhrases: ["Hey Jack", "Hi Julia", "Good morning Julia", "Halo Jack"],
    settings: [
      { setting: "Persona parity", value: "Jack and Julia share the same core capability contract" },
      { setting: "Outfit switching", value: "Contextual roles: doctor, executive, analyst, host" },
      { setting: "Realtime mode", value: "Voice, text, and video are enabled through a unified session layer" },
    ],
  },
  agents: {
    summary: {
      taskAgents: 812,
      supervisorAgents: 144,
      executiveAgents: 4,
      researchAgents: 133,
      customerAgents: 61,
      securityAgents: 33,
    },
    list: [
      { name: "Research Agent 482", type: "Research", tasksCompleted: 15201, accuracy: 98.4, qualityRating: 4.7, failureRate: 1.1, responseSpeedMs: 221 },
      { name: "Coding Agent 031", type: "Task", tasksCompleted: 14114, accuracy: 97.8, qualityRating: 4.8, failureRate: 1.5, responseSpeedMs: 188 },
      { name: "Support Agent 224", type: "Customer", tasksCompleted: 12421, accuracy: 95.9, qualityRating: 4.6, failureRate: 2.1, responseSpeedMs: 205 },
      { name: "Finance Agent 014", type: "Executive", tasksCompleted: 9821, accuracy: 99.1, qualityRating: 4.9, failureRate: 0.4, responseSpeedMs: 174 },
    ],
    performance: [
      { category: "Sales agents", successRate: 96.4, automationRate: 89.1, runtime: "Healthy" },
      { category: "Customer service agents", successRate: 95.8, automationRate: 91.3, runtime: "Healthy" },
      { category: "Research agents", successRate: 98.2, automationRate: 84.9, runtime: "Healthy" },
      { category: "Booking agents", successRate: 94.7, automationRate: 86.8, runtime: "Monitor" },
    ],
    rankings: [
      { agent: "Research Agent", accuracy: 98, rating: 4.8 },
      { agent: "Coding Agent", accuracy: 97, rating: 4.7 },
      { agent: "Support Agent", accuracy: 95, rating: 4.6 },
    ],
    categories: ["Task Agents", "Supervisor Agents", "Executive Agents", "Research Agents", "Customer Agents", "Security Agents"],
  },
  models: {
    library: [
      { model: "AGI Core", family: "LLM", latency: "20ms", accuracy: "96%", cost: "Medium", energy: "Balanced" },
      { model: "Fast Model", family: "LLM", latency: "8ms", accuracy: "90%", cost: "Low", energy: "Low" },
      { model: "Research Model", family: "Reasoning", latency: "80ms", accuracy: "99%", cost: "High", energy: "High" },
      { model: "Vision Precision", family: "Vision", latency: "41ms", accuracy: "95%", cost: "Medium", energy: "Balanced" },
    ],
    benchmarks: [
      { metric: "Latency", agiCore: 20, fastModel: 8, researchModel: 80 },
      { metric: "Accuracy", agiCore: 96, fastModel: 90, researchModel: 99 },
      { metric: "Cost", agiCore: 62, fastModel: 28, researchModel: 91 },
    ],
    abTests: [
      { test: "Voice response pacing", variantA: "Default", variantB: "Expressive", winner: "Expressive", confidence: "94%" },
      { test: "Task plan verbosity", variantA: "Compact", variantB: "Detailed", winner: "Detailed", confidence: "88%" },
    ],
  },
  analytics: {
    dataAnalysis: {
      featureUsage: [
        { label: "Chat assistant", value: 92 },
        { label: "Task automation", value: 61 },
        { label: "Agents marketplace", value: 34 },
        { label: "Video calls", value: 42 },
      ],
      collection: ["User feedback", "Task success rate", "Agent interactions", "Feature usage", "Search queries"],
    },
    productFit: {
      nps: 64,
      growthRate: 18.4,
      viralityCoefficient: 1.21,
      userSatisfaction: 4.7,
    },
    userBehavior: {
      dropOffPoints: [
        { stage: "Signup", rate: 12 },
        { stage: "API key generation", rate: 21 },
        { stage: "First automation", rate: 16 },
      ],
      usageTimeByPlatform: [
        { platform: "iOS", minutes: 18 },
        { platform: "Android", minutes: 15 },
        { platform: "Web", minutes: 22 },
      ],
    },
  },
  downloads: {
    summary: {
      totalDownloads: 460000,
      activeInstalls: 281400,
      dailyInstalls: 6200,
      uninstallRate: 4.1,
    },
    geography: [
      { country: "USA", installs: 120000, share: "26.1%" },
      { country: "India", installs: 210000, share: "45.7%" },
      { country: "Brazil", installs: 80000, share: "17.4%" },
      { country: "UK", installs: 50000, share: "10.8%" },
    ],
    heatmap: [
      { region: "North America", value: 92 },
      { region: "Europe", value: 74 },
      { region: "South America", value: 68 },
      { region: "APAC", value: 96 },
      { region: "Middle East", value: 49 },
    ],
  },
  performance: {
    apps: [
      { surface: "iOS", crashRate: "0.18%", sessionLength: "19m", apiLatency: "142ms" },
      { surface: "Android", crashRate: "0.24%", sessionLength: "16m", apiLatency: "151ms" },
      { surface: "Web", crashRate: "0.04%", sessionLength: "23m", apiLatency: "119ms" },
    ],
    websites: [
      { surface: "agi1.org", pageLoad: "1.4s", bounceRate: "21%", cdnStatus: "Healthy" },
      { surface: "fairgroupai.com", pageLoad: "1.1s", bounceRate: "18%", cdnStatus: "Healthy" },
    ],
    infrastructure: {
      apiResponseTime: "118ms",
      errorRate: "0.09%",
      serverUptime: "99.982%",
      databaseLatency: "18ms",
      networkLatency: "34ms",
      gpuUtilization: "78%",
    },
  },
  security: {
    overview: {
      blockedAttacks: 381,
      suspiciousUsers: 12,
      apiAbuseAttempts: 47,
      credentialRisk: "Low",
    },
    alerts: [
      { severity: "danger", title: "Credential stuffing blocked", detail: "12 IPs isolated by Aegis" },
      { severity: "warning", title: "Developer token anomaly", detail: "Rate-limit escalation applied" },
      { severity: "success", title: "Consent audit complete", detail: "No privacy policy drift detected" },
    ],
    controls: [
      "Credential monitoring",
      "API key protection",
      "Anomaly detection",
      "Suspicious login alerts",
      "Encrypted audit trails",
    ],
  },
  finance: {
    overview: {
      dailyRevenue: 428912,
      monthlyRevenue: 10842880,
      subscriptionConversionRate: 14.8,
      lifetimeValue: 2480,
      transactionVolume: 12281,
    },
    revenueMix: [
      { label: "Subscriptions", value: 58 },
      { label: "API usage", value: 23 },
      { label: "Agent marketplace", value: 12 },
      { label: "Enterprise services", value: 7 },
    ],
    subscriptions: [
      { tier: "Free", accounts: 91220, growth: "+6.2%" },
      { tier: "Premium", accounts: 62110, growth: "+8.9%" },
      { tier: "Enterprise", accounts: 18344, growth: "+11.4%" },
      { tier: "Developer", accounts: 12546, growth: "+5.7%" },
    ],
  },
  system: {
    settings: [
      { domain: "Platform configuration", state: "Managed", notes: "Default policies versioned" },
      { domain: "AI model settings", state: "Managed", notes: "Traffic split 62/25/13" },
      { domain: "Agent deployment", state: "Auto", notes: "Supervisor pool auto-scales" },
      { domain: "API rate limits", state: "Protected", notes: "Tiered quotas enabled" },
      { domain: "Security rules", state: "Strict", notes: "Aegis signatures active" },
    ],
    infrastructure: [
      { component: "API cluster", status: "Healthy", detail: "3 active nodes" },
      { component: "Realtime media bridge", status: "Healthy", detail: "LiveKit regions synced" },
      { component: "DynamoDB memory", status: "Healthy", detail: "Replication under SLA" },
      { component: "Storage and artifacts", status: "Healthy", detail: "Retention policy active" },
    ],
    integrations: [
      { integration: "LiveKit", status: "Connected", latency: "72ms", notes: "Voice and video bridge" },
      { integration: "DynamoDB", status: "Connected", latency: "18ms", notes: "Shared memory layer" },
      { integration: "S3", status: "Connected", latency: "24ms", notes: "Media and artifacts" },
      { integration: "Payment gateway", status: "Monitor", latency: "94ms", notes: "Retry spike observed" },
    ],
  },
  developer: {
    apiKeys: [
      { name: "Enterprise Partner Key", scope: "prod.readwrite", usage: "82%", status: "Active" },
      { name: "Analytics Sandbox", scope: "sandbox.read", usage: "34%", status: "Active" },
      { name: "Marketplace Worker", scope: "worker.execute", usage: "67%", status: "Rotating" },
    ],
    usage: [
      { segment: "Enterprise", requests: 2218441, avgLatency: "124ms" },
      { segment: "Developers", requests: 882140, avgLatency: "138ms" },
      { segment: "Internal agents", requests: 741635, avgLatency: "91ms" },
    ],
    rateLimits: [
      { plan: "Free", rpm: 120, burst: 30 },
      { plan: "Premium", rpm: 600, burst: 120 },
      { plan: "Enterprise", rpm: 4000, burst: 600 },
      { plan: "Developer", rpm: 1200, burst: 180 },
    ],
  },
};

const state = {
  view: "command-center",
  filterText: "",
  snapshot: fallbackSnapshot,
  api: {
    base: resolveApiBase(),
    mode: "seeded",
    detail: "Using local seeded preview dataset",
    lastSync: "Not synced",
  },
  syncBusy: false,
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
const apiConnectionLabel = document.querySelector("#api-connection-label");
const apiConnectionDetail = document.querySelector("#api-connection-detail");
const syncButton = document.querySelector("#sync-button");

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
  "user-accounts": {
    title: "User Accounts",
    breadcrumb: "Users / User Accounts",
    render: renderUserAccounts,
  },
  "user-activity": {
    title: "User Activity",
    breadcrumb: "Users / Activity",
    render: renderUserActivity,
  },
  "user-retention": {
    title: "User Retention",
    breadcrumb: "Users / Retention",
    render: renderUserRetention,
  },
  "team-roles": {
    title: "Team Roles",
    breadcrumb: "Team / Roles",
    render: renderTeamRoles,
  },
  "team-permissions": {
    title: "Team Permissions",
    breadcrumb: "Team / Permissions",
    render: renderTeamPermissions,
  },
  "team-access-logs": {
    title: "Team Access Logs",
    breadcrumb: "Team / Access Logs",
    render: renderTeamAccessLogs,
  },
  jack: {
    title: "Jack Control",
    breadcrumb: "Digital Humans / Jack",
    render: () => renderAvatarManagement("Jack"),
  },
  julia: {
    title: "Julia Control",
    breadcrumb: "Digital Humans / Julia",
    render: () => renderAvatarManagement("Julia"),
  },
  "avatar-settings": {
    title: "Avatar Settings",
    breadcrumb: "Digital Humans / Avatar Settings",
    render: renderAvatarSettings,
  },
  "agent-list": {
    title: "Agent List",
    breadcrumb: "Agents / Agent List",
    render: renderAgentList,
  },
  "agent-performance": {
    title: "Agent Performance",
    breadcrumb: "Agents / Performance",
    render: renderAgentPerformance,
  },
  "agent-rankings": {
    title: "Agent Rankings",
    breadcrumb: "Agents / Rankings",
    render: renderAgentRankings,
  },
  "model-library": {
    title: "Model Library",
    breadcrumb: "Models / Model Library",
    render: renderModelLibrary,
  },
  "model-benchmarks": {
    title: "Model Benchmarks",
    breadcrumb: "Models / Benchmarks",
    render: renderModelBenchmarks,
  },
  "model-ab-testing": {
    title: "Model A/B Testing",
    breadcrumb: "Models / A/B Testing",
    render: renderModelABTesting,
  },
  "data-analysis": {
    title: "Data Analysis",
    breadcrumb: "Analytics / Data Analysis",
    render: renderDataAnalysis,
  },
  "product-market-fit": {
    title: "Product Market Fit",
    breadcrumb: "Analytics / Product Market Fit",
    render: renderProductMarketFit,
  },
  "user-behavior": {
    title: "User Behavior",
    breadcrumb: "Analytics / User Behavior",
    render: renderUserBehavior,
  },
  "install-analytics": {
    title: "Install Analytics",
    breadcrumb: "Downloads / Install Analytics",
    render: renderInstallAnalytics,
  },
  "geographic-data": {
    title: "Geographic Data",
    breadcrumb: "Downloads / Geographic Data",
    render: renderGeographicData,
  },
  "app-monitor": {
    title: "App Monitor",
    breadcrumb: "Performance / App Monitor",
    render: renderAppMonitor,
  },
  "website-monitor": {
    title: "Website Monitor",
    breadcrumb: "Performance / Website Monitor",
    render: renderWebsiteMonitor,
  },
  "threat-detection": {
    title: "Threat Detection",
    breadcrumb: "Security / Threat Detection",
    render: renderThreatDetection,
  },
  "token-protection": {
    title: "Token Protection",
    breadcrumb: "Security / Token Protection",
    render: renderTokenProtection,
  },
  revenue: {
    title: "Revenue",
    breadcrumb: "Finance / Revenue",
    render: renderRevenue,
  },
  subscriptions: {
    title: "Subscriptions",
    breadcrumb: "Finance / Subscriptions",
    render: renderSubscriptions,
  },
  "system-settings": {
    title: "System Settings",
    breadcrumb: "System / Settings",
    render: renderSystemSettings,
  },
  "system-infrastructure": {
    title: "System Infrastructure",
    breadcrumb: "System / Infrastructure",
    render: renderSystemInfrastructure,
  },
  "system-integrations": {
    title: "System Integrations",
    breadcrumb: "System / Integrations",
    render: renderSystemIntegrations,
  },
  "developer-api-keys": {
    title: "Developer API Keys",
    breadcrumb: "Developer / API Keys",
    render: renderDeveloperApiKeys,
  },
  "developer-usage": {
    title: "Developer API Usage",
    breadcrumb: "Developer / API Usage",
    render: renderDeveloperUsage,
  },
};

function resolveApiBase() {
  if (window.__AGI1_ADMIN_CONFIG__?.apiBase) {
    return window.__AGI1_ADMIN_CONFIG__.apiBase;
  }

  const stored = window.localStorage.getItem("agi1-admin-api-base");
  if (stored) {
    return stored;
  }

  if (window.location.protocol.startsWith("http")) {
    return `${window.location.origin}/api/v1`;
  }

  return "http://127.0.0.1:8000/api/v1";
}

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

function toneToPill(tone) {
  if (tone === "green" || tone === "success" || tone === "healthy" || tone === "connected") {
    return "success";
  }
  if (tone === "danger" || tone === "red" || tone === "critical" || tone === "suspended") {
    return "danger";
  }
  return "warning";
}

function toneToDot(tone) {
  if (tone === "green" || tone === "success" || tone === "healthy" || tone === "connected") {
    return "status-green";
  }
  if (tone === "danger" || tone === "red" || tone === "critical") {
    return "status-red";
  }
  return "status-orange";
}

function statusPill(label, tone = "success") {
  return `<span class="status-pill ${toneToPill(String(tone).toLowerCase())}">${label}</span>`;
}

function metricCard({ label, value, trend, caption }) {
  return `
    <article class="metric-card panel">
      <div class="metric-header">
        <span class="metric-label">${label}</span>
        <span class="metric-trend">${trend || ""}</span>
      </div>
      <strong class="metric-value">${value}</strong>
      <p class="metric-caption muted">${caption}</p>
    </article>
  `;
}

function screenIntro(title, description) {
  return `
    <article class="section-card panel">
      <p class="eyebrow">AGI-1 Admin Surface</p>
      <h3 class="section-title">${title}</h3>
      <p class="section-description">${description}</p>
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
              .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
              .join("")}
          </tbody>
        </table>
      </div>
    </article>
  `;
}

function listCard(title, eyebrow, items) {
  return `
    <article class="recommendation-card panel">
      <div class="card-header">
        <div>
          <p class="eyebrow">${eyebrow}</p>
          <h3 class="section-title">${title}</h3>
        </div>
      </div>
      <ul class="recommendation-list">
        ${items
          .map(
            (item) => `
              <li>
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

function bulletCard(title, eyebrow, bullets) {
  return `
    <article class="control-card panel">
      <div class="card-header">
        <div>
          <p class="eyebrow">${eyebrow}</p>
          <h3 class="section-title">${title}</h3>
        </div>
      </div>
      <ul class="control-list">
        ${bullets.map((bullet) => `<li><span>${bullet}</span></li>`).join("")}
      </ul>
    </article>
  `;
}

function keyValueCard(title, eyebrow, entries) {
  return `
    <article class="control-card panel">
      <div class="card-header">
        <div>
          <p class="eyebrow">${eyebrow}</p>
          <h3 class="section-title">${title}</h3>
        </div>
      </div>
      <ul class="control-list">
        ${entries
          .map(
            (entry) => `
              <li>
                <span>${entry.label}</span>
                <strong>${entry.value}</strong>
              </li>
            `
          )
          .join("")}
      </ul>
    </article>
  `;
}

function pointsToPolyline(points, height = 180, width = 640) {
  const max = Math.max(...points);
  const min = Math.min(...points);

  return points
    .map((point, index) => {
      const x = (index / Math.max(points.length - 1, 1)) * width;
      const y = height - ((point - min) / Math.max(max - min, 1)) * (height - 24) - 12;
      return `${x},${y}`;
    })
    .join(" ");
}

function lineChart(title, primary, secondary = null, primaryColor = "#72f5ff", secondaryColor = "#ff8d3f") {
  const labels = ["00", "02", "04", "06", "08", "10", "12", "14", "16", "18", "20", "22"];

  return `
    <article class="chart-card panel">
      <div class="card-header">
        <div>
          <p class="eyebrow">Realtime chart</p>
          <h3 class="section-title">${title}</h3>
        </div>
        <div class="chart-legend">
          <span class="legend-chip" style="color:${primaryColor}">Primary</span>
          ${secondary ? `<span class="legend-chip" style="color:${secondaryColor}">Secondary</span>` : ""}
        </div>
      </div>
      <svg viewBox="0 0 640 220" class="chart-svg" role="img" aria-label="${title}">
        ${labels
          .map(
            (_, index) =>
              `<line x1="${(index / 11) * 640}" y1="0" x2="${(index / 11) * 640}" y2="220" stroke="rgba(255,255,255,0.04)" />`
          )
          .join("")}
        <polyline points="${pointsToPolyline(primary)}" fill="none" stroke="${primaryColor}" stroke-width="4" />
        ${secondary ? `<polyline points="${pointsToPolyline(secondary)}" fill="none" stroke="${secondaryColor}" stroke-width="3" stroke-dasharray="10 8" />` : ""}
        ${labels
          .map((label, index) => `<text x="${(index / 11) * 640}" y="214" class="axis-text">${label}</text>`)
          .join("")}
      </svg>
    </article>
  `;
}

function barsChart(title, entries, eyebrow = "Breakdown") {
  const max = Math.max(...entries.map((entry) => entry.value), 1);

  return `
    <article class="chart-card panel">
      <div class="card-header">
        <div>
          <p class="eyebrow">${eyebrow}</p>
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
                  <span class="muted">${entry.display || entry.value}</span>
                </div>
                <div style="height:10px;border-radius:999px;background:rgba(255,255,255,0.06);overflow:hidden;">
                  <div style="width:${(entry.value / max) * 100}%;height:100%;border-radius:999px;background:linear-gradient(90deg, #72f5ff, #ff8d3f);"></div>
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    </article>
  `;
}

function heatmapCard(matrix) {
  const max = Math.max(...matrix.flat(), 1);

  return `
    <article class="heatmap-card panel">
      <div class="card-header">
        <div>
          <p class="eyebrow">Engagement map</p>
          <h3 class="section-title">User engagement heat map</h3>
        </div>
      </div>
      <div class="heatmap-grid">
        ${matrix
          .flat()
          .map((value) => {
            const alpha = 0.12 + (value / max) * 0.88;
            return `<div class="heat-cell" style="background:rgba(114,245,255,${alpha.toFixed(2)})"></div>`;
          })
          .join("")}
      </div>
    </article>
  `;
}

function worldMapCard(downloads) {
  return `
    <article class="world-map-card panel">
      <div class="card-header">
        <div>
          <p class="eyebrow">Global footprint</p>
          <h3 class="section-title">Live users and installs by region</h3>
        </div>
        ${statusPill("Realtime", "success")}
      </div>
      <div class="world-map">
        <div class="world-region region-us"></div>
        <div class="world-region region-eu"></div>
        <div class="world-region region-af"></div>
        <div class="world-region region-apac"></div>
        <div class="world-region region-sa"></div>
        <span class="pulse" style="top:31%;left:22%"></span>
        <span class="pulse" style="top:26%;left:47%"></span>
        <span class="pulse" style="top:32%;left:74%"></span>
      </div>
      <div class="stack">
        ${downloads.geography
          .slice(0, 4)
          .map(
            (entry) => `
              <div class="card-header">
                <strong>${entry.country}</strong>
                <span class="muted">${formatNumber(entry.installs)} installs · ${entry.share}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </article>
  `;
}

function avatarActivityCard(avatars) {
  return `
    <article class="avatar-card panel">
      <div class="card-header">
        <div>
          <p class="eyebrow">Digital humans</p>
          <h3 class="section-title">Jack and Julia activity</h3>
        </div>
      </div>
      <div class="avatar-grid">
        ${avatars
          .map(
            (avatar) => `
              <div class="avatar-tile">
                <div class="avatar-profile">
                  <div class="avatar-face">${avatar.name.slice(0, 1)}</div>
                  <div>
                    <strong>${avatar.name}</strong>
                    <p class="muted small">${avatar.role}</p>
                    ${statusPill(avatar.status, avatar.status.toLowerCase() === "online" ? "success" : "warning")}
                  </div>
                </div>
                <div class="avatar-stats">
                  <div><span class="muted small">Tasks</span><strong>${formatNumber(avatar.tasksHandled)}</strong></div>
                  <div><span class="muted small">Conversations</span><strong>${formatNumber(avatar.conversationsToday)}</strong></div>
                  <div><span class="muted small">Accuracy</span><strong>${avatar.accuracy}%</strong></div>
                  <div><span class="muted small">Latency</span><strong>${avatar.latencyMs}ms</strong></div>
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    </article>
  `;
}

function notificationFeed(items) {
  return `
    <article class="feed-card panel">
      <div class="card-header">
        <div>
          <p class="eyebrow">Live feed</p>
          <h3 class="section-title">Notifications</h3>
        </div>
      </div>
      <ul class="notification-feed">
        ${items
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

function accessLogFeed(logs) {
  return `
    <article class="timeline-card panel">
      <div class="card-header">
        <div>
          <p class="eyebrow">Audit trail</p>
          <h3 class="section-title">Latest access events</h3>
        </div>
      </div>
      <ul class="notification-feed">
        ${logs
          .map(
            (log) => `
              <li class="notification-item">
                <strong>${log.actor}</strong>
                <span class="muted">${log.event}</span>
                <span class="muted small">${log.time}</span>
              </li>
            `
          )
          .join("")}
      </ul>
    </article>
  `;
}

function journeyCard(steps) {
  return `
    <article class="control-card panel">
      <div class="card-header">
        <div>
          <p class="eyebrow">Journey map</p>
          <h3 class="section-title">User flow</h3>
        </div>
      </div>
      <ul class="stats-strip">
        ${steps.map((step, index) => `<li><span>${index + 1}. ${step}</span></li>`).join("")}
      </ul>
    </article>
  `;
}

function getSnapshot() {
  return state.snapshot;
}

function renderCommandCenter() {
  const data = getSnapshot();
  const metrics = data.dashboard.metrics;

  return `
    <div class="dashboard-grid">
      <div class="span-12">
        ${screenIntro(
          "AGI-1 Control Tower",
          "Central operating system dashboard for Fair Group AI. This surface controls users, AI agents, models, infrastructure, security, analytics, performance, growth, and monetization from a single futuristic command center."
        )}
      </div>
      <div class="span-12 metric-grid">
        ${metricCard({ label: "Active Users", value: formatNumber(metrics.activeUsers), trend: "+12.4%", caption: "Live connected operators and customers" })}
        ${metricCard({ label: "Active Agents", value: formatNumber(metrics.activeAgents), trend: "1,000+ network", caption: "Task, supervisor, executive, research, customer, security" })}
        ${metricCard({ label: "Tasks Today", value: formatNumber(metrics.tasksToday), trend: "+8.7%", caption: "Completed autonomous and guided work" })}
        ${metricCard({ label: "Revenue Today", value: formatCurrency(metrics.revenueToday), trend: "+14.1%", caption: "Subscriptions, APIs, marketplace, enterprise" })}
      </div>
      <div class="span-8">${lineChart("Tasks per minute vs model inference load", data.dashboard.charts.tasksPerMinute, data.dashboard.charts.inferenceLoad)}</div>
      <div class="span-4">${notificationFeed(data.dashboard.notifications)}</div>
      <div class="span-7">${worldMapCard(data.downloads)}</div>
      <div class="span-5">${avatarActivityCard(data.digitalHumans.avatars)}</div>
      <div class="span-6">${barsChart("Real-time security and growth signals", [
        { label: "API requests", value: 82, display: formatNumber(metrics.apiRequests) },
        { label: "Token usage", value: 68, display: metrics.tokenUsage },
        { label: "Security alerts", value: metrics.securityAlerts, display: String(metrics.securityAlerts) },
        { label: "Uptime hours", value: metrics.systemUptimeHours, display: String(metrics.systemUptimeHours) },
      ], "Platform signals")}</div>
      <div class="span-6">${listCard("AI recommendations", "Operator guidance", data.dashboard.recommendations)}</div>
      <div class="span-12">${tableCard("System alerts", ["Severity", "Title", "Detail"], data.dashboard.alerts.map((alert) => [statusPill(alert.severity, alert.severity), alert.title, alert.detail]))}</div>
    </div>
  `;
}

function renderSystemHealth() {
  const data = getSnapshot();
  const infra = data.performance.infrastructure;

  return `
    <div class="view-content">
      ${screenIntro(
        "Global System Health",
        "Realtime overview of AGI compute, API health, model inference load, GPU utilization, database latency, network performance, and Aegis-protected system alerts."
      )}
      <div class="metric-grid">
        ${metricCard({ label: "Server Uptime", value: infra.serverUptime, trend: "Stable", caption: "Public API and orchestration runtime" })}
        ${metricCard({ label: "API Response", value: infra.apiResponseTime, trend: "-6ms", caption: "Median command center route latency" })}
        ${metricCard({ label: "DB Latency", value: infra.databaseLatency, trend: "Healthy", caption: "Memory, state, audit writes" })}
        ${metricCard({ label: "GPU Utilization", value: infra.gpuUtilization, trend: "+3%", caption: "Realtime voice, inference, and orchestration" })}
      </div>
      <div class="panel-grid">
        ${lineChart("GPU vs memory consumption", data.dashboard.charts.gpuUsage, data.dashboard.charts.memoryConsumption)}
        ${listCard("Aegis alert queue", "Security", data.security.alerts.map((alert) => ({ title: alert.title, detail: alert.detail })))}
      </div>
      ${tableCard("Infrastructure signals", ["Component", "Status", "Detail"], data.system.infrastructure.map((item) => [
        item.component,
        statusPill(item.status, item.status.toLowerCase()),
        item.detail,
      ]))}
    </div>
  `;
}

function renderUserAccounts() {
  const data = getSnapshot();
  const summary = data.users.summary;

  return `
    <div class="view-content">
      ${screenIntro("User management", "Manage user profiles, account types, lifecycle status, and global account distribution across the AGI-1 platform.")}
      <div class="metric-grid">
        ${metricCard({ label: "Total Users", value: formatNumber(summary.totalUsers), trend: "+9.8%", caption: "All registered AGI-1 accounts" })}
        ${metricCard({ label: "DAU", value: formatNumber(summary.dailyActiveUsers), trend: "+7.2%", caption: "Daily active users" })}
        ${metricCard({ label: "MAU", value: formatNumber(summary.monthlyActiveUsers), trend: "+10.5%", caption: "Monthly active users" })}
        ${metricCard({ label: "Engagement Score", value: `${summary.engagementScore}/100`, trend: "High", caption: "Composite retention and usage score" })}
      </div>
      ${tableCard("User accounts", ["Name", "Email", "Phone", "Location", "Account type", "Status"], data.users.accounts.map((account) => [
        account.name,
        account.email,
        account.phone,
        account.location,
        account.type,
        statusPill(account.status, account.status.toLowerCase()),
      ]))}
    </div>
  `;
}

function renderUserActivity() {
  const data = getSnapshot();

  return `
    <div class="view-content">
      ${screenIntro("User activity", "Observe task requests, agent usage, token consumption, and session histories for high-value operators and enterprise accounts.")}
      <div class="panel-grid">
        ${barsChart("Feature usage", data.users.behavior.featureUsage.map((item) => ({
          label: item.label,
          value: item.value,
          display: `${item.value}%`,
        })))}
        ${journeyCard(data.users.behavior.journey)}
      </div>
      ${tableCard("User activity ledger", ["User", "Tasks requested", "Agents used", "Token consumption", "Login history"], data.users.activity.map((row) => [
        row.user,
        formatNumber(row.tasksRequested),
        formatNumber(row.agentsUsed),
        row.tokenConsumption,
        row.loginHistory,
      ]))}
    </div>
  `;
}

function renderUserRetention() {
  const retention = getSnapshot().users.retention;

  return `
    <div class="view-content">
      ${screenIntro("User retention analytics", "Track retention curves, churn, engagement time, and behavioral heat maps to understand long-term product stickiness.")}
      <div class="metric-grid">
        ${metricCard({ label: "Day 1", value: `${retention.day1}%`, trend: "Strong", caption: "Immediate retention" })}
        ${metricCard({ label: "Day 7", value: `${retention.day7}%`, trend: "Recovering", caption: "Week-one retention" })}
        ${metricCard({ label: "Day 30", value: `${retention.day30}%`, trend: "Core users", caption: "Monthly retention" })}
        ${metricCard({ label: "Churn Rate", value: `${retention.churnRate}%`, trend: "-0.6%", caption: `Average session ${retention.sessionDuration}` })}
      </div>
      <div class="panel-grid">
        ${heatmapCard(getSnapshot().users.behavior.heatmap)}
        ${barsChart("Retention funnel", [
          { label: "Day 1", value: retention.day1, display: `${retention.day1}%` },
          { label: "Day 7", value: retention.day7, display: `${retention.day7}%` },
          { label: "Day 30", value: retention.day30, display: `${retention.day30}%` },
        ], "Retention")}
      </div>
    </div>
  `;
}

function renderTeamRoles() {
  const team = getSnapshot().team;
  return `
    <div class="view-content">
      ${screenIntro("Team management", "Run internal operating control for founders, executives, admins, managers, developers, analysts, and support operators.")}
      <div class="panel-grid">
        ${tableCard("Role matrix", ["Role", "Permissions"], team.roles.map((role) => [role.role, role.permissions]))}
        ${tableCard("Active team roster", ["Name", "Role", "Scope", "Last active", "Status"], team.members.map((member) => [
          member.name,
          member.role,
          member.scope,
          member.lastActive,
          statusPill(member.status, member.status.toLowerCase()),
        ]))}
      </div>
    </div>
  `;
}

function renderTeamPermissions() {
  const team = getSnapshot().team;
  return `
    <div class="view-content">
      ${screenIntro("Permissions and access control", "Administer the access control matrix that governs strategic dashboards, system configuration, infrastructure, analytics, and support operations.")}
      ${tableCard("Access control matrix", ["Role", "Scope", "Control level"], team.roles.map((role) => [
        role.role,
        role.permissions,
        role.role === "Owner" ? statusPill("Full", "success") : role.role === "Analyst" || role.role === "Support" ? statusPill("Restricted", "warning") : statusPill("Managed", "success"),
      ]))}
      <div class="panel-grid">
        ${bulletCard("Governance controls", "Policy", [
          "Least-privilege role assignment",
          "Activity tracking across all admin actions",
          "Audit trails retained for security review",
          "Aegis evaluates permission-sensitive operations",
        ])}
        ${bulletCard("Operational actions", "Admin tasks", [
          "Invite team member",
          "Assign role",
          "Remove access",
          "Escalate anomalous behavior",
        ])}
      </div>
    </div>
  `;
}

function renderTeamAccessLogs() {
  return `
    <div class="view-content">
      ${screenIntro("Access logs", "Review admin actions, security-sensitive configuration changes, and credential lifecycle events with a clean audit trail.")}
      ${accessLogFeed(getSnapshot().team.accessLogs)}
    </div>
  `;
}

function renderAvatarManagement(name) {
  const avatar = getSnapshot().digitalHumans.avatars.find((entry) => entry.name === name);
  const counterpart = getSnapshot().digitalHumans.avatars.find((entry) => entry.name !== name);

  return `
    <div class="view-content">
      ${screenIntro(`${name} digital human management`, `${name} is presentation-specific but capability-identical to ${counterpart.name}. This control screen manages status, tasks, conversations, accuracy, latency, and contextual presentation.`)}
      <div class="panel-grid">
        ${avatarActivityCard([avatar])}
        ${keyValueCard("Avatar controls", "Operator actions", [
          { label: "Start / Stop avatar", value: "Ready" },
          { label: "Retrain AI", value: "Queued" },
          { label: "Update personality", value: "Managed" },
          { label: "Update voice model", value: "Ready" },
          { label: "Test conversation", value: "Available" },
        ])}
      </div>
      ${tableCard(`${name} performance ledger`, ["Metric", "Value"], [
        ["Tasks handled", formatNumber(avatar.tasksHandled)],
        ["Conversations today", formatNumber(avatar.conversationsToday)],
        ["Customer satisfaction", `${avatar.customerSatisfaction}%`],
        ["Performance rating", avatar.performanceRating],
        ["Accuracy", `${avatar.accuracy}%`],
        ["Latency", `${avatar.latencyMs}ms`],
        ["Outfit profile", avatar.outfitProfile],
      ])}
    </div>
  `;
}

function renderAvatarSettings() {
  const digitalHumans = getSnapshot().digitalHumans;
  return `
    <div class="view-content">
      ${screenIntro("Digital human configuration", "Manage shared interface contracts, wake phrase activation, voice/video routing, contextual outfit logic, and persona parity between Jack and Julia.")}
      <div class="panel-grid">
        ${tableCard("Avatar settings", ["Setting", "Value"], digitalHumans.settings.map((row) => [row.setting, row.value]))}
        ${bulletCard("Wake phrase routing", "Activation", digitalHumans.wakePhrases)}
      </div>
    </div>
  `;
}

function renderAgentList() {
  const agents = getSnapshot().agents;
  return `
    <div class="view-content">
      ${screenIntro("AGI agent management", "Monitor the entire workforce of task agents, supervisor agents, executive agents, research agents, customer agents, and security agents.")}
      <div class="metric-grid">
        ${Object.entries(agents.summary)
          .map(([label, value]) =>
            metricCard({
              label: label.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase()),
              value: formatNumber(value),
              trend: "Online",
              caption: "Active capacity",
            })
          )
          .join("")}
      </div>
      ${tableCard("Agent roster", ["Agent", "Type", "Tasks completed", "Accuracy", "Quality rating", "Failure rate", "Response speed"], agents.list.map((agent) => [
        agent.name,
        agent.type,
        formatNumber(agent.tasksCompleted),
        `${agent.accuracy}%`,
        `${agent.qualityRating}/5`,
        `${agent.failureRate}%`,
        `${agent.responseSpeedMs}ms`,
      ]))}
    </div>
  `;
}

function renderAgentPerformance() {
  const agents = getSnapshot().agents;
  const chartEntries = agents.performance.map((item) => ({
    label: item.category,
    value: item.successRate,
    display: `${item.successRate}%`,
  }));

  return `
    <div class="view-content">
      ${screenIntro("Agent performance", "Track task success, automation coverage, completion speed, runtime health, and execution quality across the AGI workforce.")}
      <div class="panel-grid">
        ${barsChart("Task success by agent category", chartEntries, "Quality")}
        ${lineChart("Tasks per minute vs automation load", getSnapshot().dashboard.charts.tasksPerMinute, getSnapshot().dashboard.charts.inferenceLoad)}
      </div>
      ${tableCard("Agent performance matrix", ["Category", "Success rate", "Automation rate", "Runtime"], agents.performance.map((item) => [
        item.category,
        `${item.successRate}%`,
        `${item.automationRate}%`,
        statusPill(item.runtime, item.runtime.toLowerCase()),
      ]))}
    </div>
  `;
}

function renderAgentRankings() {
  const agents = getSnapshot().agents;
  return `
    <div class="view-content">
      ${screenIntro("Agent rankings", "Benchmark quality leaders across research, coding, customer support, and specialist execution domains.")}
      <div class="panel-grid">
        ${tableCard("Agent ranking board", ["Agent", "Accuracy", "Rating"], agents.rankings.map((item) => [
          item.agent,
          `${item.accuracy}%`,
          `${item.rating}/5`,
        ]))}
        ${bulletCard("Agent categories", "Taxonomy", agents.categories)}
      </div>
    </div>
  `;
}

function renderModelLibrary() {
  return `
    <div class="view-content">
      ${screenIntro("Model management", "Manage LLM, vision, speech, and decision models powering the AGI-1 cognitive and interaction layers.")}
      ${tableCard("Model library", ["Model", "Family", "Latency", "Accuracy", "Cost", "Energy"], getSnapshot().models.library.map((model) => [
        model.model,
        model.family,
        model.latency,
        model.accuracy,
        model.cost,
        model.energy,
      ]))}
    </div>
  `;
}

function renderModelBenchmarks() {
  const benchmarks = getSnapshot().models.benchmarks;
  return `
    <div class="view-content">
      ${screenIntro("Model benchmarks", "Compare AGI core reasoning models across latency, accuracy, and operating cost to guide routing and deployment decisions.")}
      <div class="panel-grid">
        ${lineChart(
          "AGI Core vs Research Model",
          benchmarks.map((item) => item.agiCore),
          benchmarks.map((item) => item.researchModel)
        )}
        ${tableCard("Benchmark comparison", ["Metric", "AGI Core", "Fast Model", "Research Model"], benchmarks.map((item) => [
          item.metric,
          String(item.agiCore),
          String(item.fastModel),
          String(item.researchModel),
        ]))}
      </div>
    </div>
  `;
}

function renderModelABTesting() {
  return `
    <div class="view-content">
      ${screenIntro("Model A/B testing", "Evaluate production behavior, conversation quality, planning clarity, and user preference across competing model variants.")}
      ${tableCard("A/B experiments", ["Test", "Variant A", "Variant B", "Winner", "Confidence"], getSnapshot().models.abTests.map((test) => [
        test.test,
        test.variantA,
        test.variantB,
        test.winner,
        test.confidence,
      ]))}
    </div>
  `;
}

function renderDataAnalysis() {
  const analytics = getSnapshot().analytics;
  return `
    <div class="view-content">
      ${screenIntro("Data analysis", "Track feature usage, data collection streams, product intelligence, and the telemetry that powers AGI-1 improvement loops.")}
      <div class="panel-grid">
        ${barsChart("Feature usage", analytics.dataAnalysis.featureUsage.map((item) => ({
          label: item.label,
          value: item.value,
          display: `${item.value}%`,
        })))}
        ${bulletCard("Collected signals", "Learning layer", analytics.dataAnalysis.collection)}
      </div>
    </div>
  `;
}

function renderProductMarketFit() {
  const fit = getSnapshot().analytics.productFit;
  return `
    <div class="view-content">
      ${screenIntro("Product market fit", "Measure product success through satisfaction, NPS, growth rate, virality, and monetization health.")}
      <div class="metric-grid">
        ${metricCard({ label: "NPS", value: String(fit.nps), trend: "+3", caption: "Net promoter score" })}
        ${metricCard({ label: "Growth Rate", value: `${fit.growthRate}%`, trend: "Month over month", caption: "User and revenue growth" })}
        ${metricCard({ label: "Virality", value: fit.viralityCoefficient.toFixed(2), trend: "Share loop", caption: "Organic spread coefficient" })}
        ${metricCard({ label: "User Satisfaction", value: `${fit.userSatisfaction}/5`, trend: "Stable", caption: "Aggregate product satisfaction" })}
      </div>
      <div class="panel-grid">
        ${barsChart("Revenue mix", getSnapshot().finance.revenueMix.map((item) => ({
          label: item.label,
          value: item.value,
          display: `${item.value}%`,
        })), "Monetization")}
        ${barsChart("Feature adoption", getSnapshot().analytics.dataAnalysis.featureUsage.map((item) => ({
          label: item.label,
          value: item.value,
          display: `${item.value}%`,
        })), "Usage")}
      </div>
    </div>
  `;
}

function renderUserBehavior() {
  const behavior = getSnapshot().analytics.userBehavior;
  return `
    <div class="view-content">
      ${screenIntro("User behavior analysis", "Study click patterns, platform time, onboarding friction, and drop-off points across the AGI-1 user journey.")}
      <div class="panel-grid">
        ${tableCard("Drop-off points", ["Stage", "Drop-off rate"], behavior.dropOffPoints.map((item) => [item.stage, `${item.rate}%`]))}
        ${tableCard("Usage time by platform", ["Platform", "Minutes"], behavior.usageTimeByPlatform.map((item) => [item.platform, `${item.minutes} min`]))}
      </div>
      ${journeyCard(getSnapshot().users.behavior.journey)}
    </div>
  `;
}

function renderInstallAnalytics() {
  const summary = getSnapshot().downloads.summary;
  return `
    <div class="view-content">
      ${screenIntro("Install analytics", "Track downloads, active installs, daily velocity, uninstall rates, and adoption strength for the AGI-1 mobile and web ecosystem.")}
      <div class="metric-grid">
        ${metricCard({ label: "Total Downloads", value: formatNumber(summary.totalDownloads), trend: "+11.2%", caption: "Lifetime install volume" })}
        ${metricCard({ label: "Active Installs", value: formatNumber(summary.activeInstalls), trend: "+7.4%", caption: "Currently retained install base" })}
        ${metricCard({ label: "Daily Installs", value: formatNumber(summary.dailyInstalls), trend: "+5.2%", caption: "Daily acquisition" })}
        ${metricCard({ label: "Uninstall Rate", value: `${summary.uninstallRate}%`, trend: "-0.3%", caption: "Retention headwind" })}
      </div>
    </div>
  `;
}

function renderGeographicData() {
  const downloads = getSnapshot().downloads;
  return `
    <div class="view-content">
      ${screenIntro("Geographic data", "Monitor installations, active usage, and market expansion by country and world region.")}
      <div class="panel-grid">
        ${worldMapCard(downloads)}
        ${barsChart("Regional strength", downloads.heatmap.map((region) => ({
          label: region.region,
          value: region.value,
          display: `${region.value}/100`,
        })), "Regional intensity")}
      </div>
      ${tableCard("Downloads by geography", ["Country", "Installs", "Share"], downloads.geography.map((row) => [
        row.country,
        formatNumber(row.installs),
        row.share,
      ]))}
    </div>
  `;
}

function renderAppMonitor() {
  return `
    <div class="view-content">
      ${screenIntro("App performance monitor", "Track crash rates, session length, and API responsiveness across iOS, Android, and web clients.")}
      ${tableCard("Application health", ["Surface", "Crash rate", "Session length", "API latency"], getSnapshot().performance.apps.map((app) => [
        app.surface,
        app.crashRate,
        app.sessionLength,
        app.apiLatency,
      ]))}
    </div>
  `;
}

function renderWebsiteMonitor() {
  return `
    <div class="view-content">
      ${screenIntro("Website performance monitor", "Watch page load speed, bounce rate, CDN status, and backend-linked public surface quality for AGI-1 product and corporate sites.")}
      <div class="panel-grid">
        ${tableCard("Website monitor", ["Surface", "Page load", "Bounce rate", "CDN"], getSnapshot().performance.websites.map((site) => [
          site.surface,
          site.pageLoad,
          site.bounceRate,
          statusPill(site.cdnStatus, site.cdnStatus.toLowerCase()),
        ]))}
        ${keyValueCard("Infrastructure KPIs", "Realtime", [
          { label: "API response time", value: getSnapshot().performance.infrastructure.apiResponseTime },
          { label: "Error rate", value: getSnapshot().performance.infrastructure.errorRate },
          { label: "Network latency", value: getSnapshot().performance.infrastructure.networkLatency },
          { label: "GPU utilization", value: getSnapshot().performance.infrastructure.gpuUtilization },
        ])}
      </div>
    </div>
  `;
}

function renderThreatDetection() {
  const security = getSnapshot().security;
  return `
    <div class="view-content">
      ${screenIntro("Threat detection", "Aegis monitors credential attacks, suspicious users, API abuse attempts, and policy anomalies across the AGI-1 ecosystem.")}
      <div class="metric-grid">
        ${metricCard({ label: "Blocked Attacks", value: formatNumber(security.overview.blockedAttacks), trend: "Aegis", caption: "Threats neutralized" })}
        ${metricCard({ label: "Suspicious Users", value: formatNumber(security.overview.suspiciousUsers), trend: "Monitor", caption: "Accounts under inspection" })}
        ${metricCard({ label: "API Abuse Attempts", value: formatNumber(security.overview.apiAbuseAttempts), trend: "Rate limited", caption: "Traffic anomalies" })}
        ${metricCard({ label: "Credential Risk", value: security.overview.credentialRisk, trend: "Stable", caption: "Current exposure level" })}
      </div>
      ${tableCard("Security alerts", ["Severity", "Title", "Detail"], security.alerts.map((alert) => [
        statusPill(alert.severity, alert.severity),
        alert.title,
        alert.detail,
      ]))}
    </div>
  `;
}

function renderTokenProtection() {
  const developer = getSnapshot().developer;
  return `
    <div class="view-content">
      ${screenIntro("Token protection", "Control API keys, quota policy, sandbox risk, and the secure developer surface that exposes AGI-1 to partner applications.")}
      <div class="panel-grid">
        ${tableCard("API key registry", ["Name", "Scope", "Usage", "Status"], developer.apiKeys.map((key) => [
          key.name,
          key.scope,
          key.usage,
          statusPill(key.status, key.status.toLowerCase()),
        ]))}
        ${bulletCard("Token security controls", "Controls", getSnapshot().security.controls)}
      </div>
    </div>
  `;
}

function renderRevenue() {
  const finance = getSnapshot().finance;
  return `
    <div class="view-content">
      ${screenIntro("Revenue and business intelligence", "Monitor subscriptions, API income, marketplace earnings, enterprise services, transaction volume, and monetization trends.")}
      <div class="metric-grid">
        ${metricCard({ label: "Daily Revenue", value: formatCurrency(finance.overview.dailyRevenue), trend: "+14.1%", caption: "Today" })}
        ${metricCard({ label: "Monthly Revenue", value: formatCurrency(finance.overview.monthlyRevenue), trend: "+9.7%", caption: "This month" })}
        ${metricCard({ label: "Conversion Rate", value: `${finance.overview.subscriptionConversionRate}%`, trend: "+1.3%", caption: "Paid subscription conversion" })}
        ${metricCard({ label: "Lifetime Value", value: formatCurrency(finance.overview.lifetimeValue), trend: "+4.2%", caption: "Average LTV" })}
      </div>
      ${barsChart("Revenue mix", finance.revenueMix.map((item) => ({
        label: item.label,
        value: item.value,
        display: `${item.value}%`,
      })), "Business mix")}
    </div>
  `;
}

function renderSubscriptions() {
  return `
    <div class="view-content">
      ${screenIntro("Subscriptions", "Track account tier health, growth by plan, and monetization performance across free, premium, enterprise, and developer customers.")}
      ${tableCard("Subscription tiers", ["Tier", "Accounts", "Growth"], getSnapshot().finance.subscriptions.map((tier) => [
        tier.tier,
        formatNumber(tier.accounts),
        tier.growth,
      ]))}
    </div>
  `;
}

function renderSystemSettings() {
  return `
    <div class="view-content">
      ${screenIntro("System settings", "Central configuration for platform rules, AI model policies, agent deployment, API rate limits, and security behavior.")}
      ${tableCard("System settings", ["Domain", "State", "Notes"], getSnapshot().system.settings.map((setting) => [
        setting.domain,
        statusPill(setting.state, setting.state.toLowerCase()),
        setting.notes,
      ]))}
    </div>
  `;
}

function renderSystemInfrastructure() {
  return `
    <div class="view-content">
      ${screenIntro("System infrastructure", "Live view of cloud components, realtime bridges, memory systems, storage, and operating infrastructure used by AGI-1.")}
      ${tableCard("Infrastructure", ["Component", "Status", "Detail"], getSnapshot().system.infrastructure.map((item) => [
        item.component,
        statusPill(item.status, item.status.toLowerCase()),
        item.detail,
      ]))}
    </div>
  `;
}

function renderSystemIntegrations() {
  return `
    <div class="view-content">
      ${screenIntro("System integrations", "Monitor external platforms and connected services across realtime media, memory, storage, payments, and partner systems.")}
      ${tableCard("Integrations", ["Integration", "Status", "Latency", "Notes"], getSnapshot().system.integrations.map((item) => [
        item.integration,
        statusPill(item.status, item.status.toLowerCase()),
        item.latency,
        item.notes,
      ]))}
    </div>
  `;
}

function renderDeveloperApiKeys() {
  return `
    <div class="view-content">
      ${screenIntro("Developer API keys", "Manage external developer access, scopes, lifecycle state, and traffic exposure across the AGI-1 ecosystem.")}
      ${tableCard("API keys", ["Name", "Scope", "Usage", "Status"], getSnapshot().developer.apiKeys.map((key) => [
        key.name,
        key.scope,
        key.usage,
        statusPill(key.status, key.status.toLowerCase()),
      ]))}
    </div>
  `;
}

function renderDeveloperUsage() {
  const developer = getSnapshot().developer;
  return `
    <div class="view-content">
      ${screenIntro("Developer API usage", "Track request volume, latency, and plan quotas for enterprise, internal, and external developer traffic.")}
      <div class="panel-grid">
        ${tableCard("Usage by segment", ["Segment", "Requests", "Average latency"], developer.usage.map((row) => [
          row.segment,
          formatNumber(row.requests),
          row.avgLatency,
        ]))}
        ${tableCard("Rate limits", ["Plan", "RPM", "Burst"], developer.rateLimits.map((row) => [
          row.plan,
          formatNumber(row.rpm),
          formatNumber(row.burst),
        ]))}
      </div>
    </div>
  `;
}

function renderFallback() {
  return `
    <article class="section-card panel">
      <p class="eyebrow">Missing surface</p>
      <h3 class="section-title">This admin module has not been wired yet.</h3>
      <p class="section-description">The requested panel is not in the current navigation registry.</p>
    </article>
  `;
}

function renderNavigation(filterText = "") {
  const normalized = filterText.trim().toLowerCase();
  const groups = navigation
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        if (!normalized) {
          return true;
        }

        return `${item.label} ${item.hint}`.toLowerCase().includes(normalized);
      }),
    }))
    .filter((group) => group.items.length > 0);

  sidebarNav.innerHTML = groups
    .map(
      (group) => `
        <section class="nav-group">
          <h3 class="nav-group-title">${group.group}</h3>
          <ul class="nav-list">
            ${group.items
              .map(
                (item) => `
                  <li>
                    <button class="nav-item-button ${state.view === item.id ? "active" : ""}" type="button" data-view="${item.id}">
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
      `
    )
    .join("");
}

function updateTopbar() {
  const data = getSnapshot();
  const status = data.dashboard.status;

  viewTitle.textContent = sections[state.view]?.title || "AGI-1 Command Center";
  viewBreadcrumb.textContent = sections[state.view]?.breadcrumb || "Dashboard";
  topUsers.textContent = formatNumber(data.dashboard.metrics.activeUsers);
  heroSessions.textContent = formatNumber(Math.round(data.dashboard.metrics.activeUsers * 0.025));
  heroTasks.textContent = formatNumber(data.dashboard.metrics.tasksToday);
  heroRevenue.textContent = formatCurrency(data.dashboard.metrics.revenueToday);
  systemLabel.textContent = status.label;
  systemIndicator.className = `status-dot ${toneToDot(status.tone)}`;

  apiConnectionLabel.textContent = state.api.mode === "live" ? "Live API" : state.api.mode === "error" ? "Sync Failed" : "Seeded Preview";
  apiConnectionDetail.textContent = `${state.api.detail} · ${state.api.lastSync}`;
  syncButton.disabled = state.syncBusy;
  syncButton.textContent = state.syncBusy ? "Syncing..." : "Sync Control Tower";
}

function renderView() {
  updateTopbar();
  const section = sections[state.view];
  viewContent.innerHTML = section ? section.render() : renderFallback();
  renderNavigation(state.filterText);
}

function setView(viewId) {
  state.view = viewId;
  renderView();
}

async function syncControlTower() {
  state.syncBusy = true;
  updateTopbar();

  try {
    const response = await fetch(`${state.api.base}/control-tower`, {
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    state.snapshot = data;
    state.api.mode = "live";
    state.api.detail = `Connected to ${state.api.base}`;
    state.api.lastSync = new Date().toLocaleString();
  } catch (error) {
    state.api.mode = "error";
    state.api.detail = `Falling back to seeded preview (${error.message})`;
    state.api.lastSync = new Date().toLocaleString();
  } finally {
    state.syncBusy = false;
    renderView();
  }
}

function startRealtimePulse() {
  window.setInterval(() => {
    const metrics = state.snapshot.dashboard.metrics;
    const drift = Math.floor(Math.random() * 80) - 30;
    metrics.activeUsers = Math.max(12000, metrics.activeUsers + drift);
    metrics.tasksToday += Math.max(4, Math.floor(Math.random() * 26));
    metrics.revenueToday += Math.max(180, Math.floor(Math.random() * 1400));
    metrics.apiRequests += Math.max(400, Math.floor(Math.random() * 3400));
    state.snapshot.meta.generatedAt = new Date().toISOString();
    updateTopbar();

    if (state.view === "command-center") {
      renderView();
    }
  }, 7000);
}

sidebarNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-view]");
  if (!button) {
    return;
  }

  setView(button.dataset.view);
});

navSearch.addEventListener("input", (event) => {
  state.filterText = event.target.value;
  renderNavigation(state.filterText);
});

syncButton.addEventListener("click", () => {
  syncControlTower();
});

renderNavigation();
renderView();
startRealtimePulse();
syncControlTower();
