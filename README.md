# AGI-1 Command Center Dashboard

Futuristic admin control center for the AGI-1 platform.

## Overview

This repository contains the frontend for the AGI-1 admin panel. It is designed around a sovereign AGI operations center with:

- a left navigation rail for the full command hierarchy
- a live top status bar
- a central command dashboard with executive metrics
- operational screens for analytics, digital humans, agents, finance, infrastructure, and system control
- a live backend integration path to the AGI-1 Command Center API

The visual language uses a dark enterprise command-center theme with blue and orange glow accents, white typography, glass panels, and holographic charts.

## Screens Included

- Command Center
- System Health
- User Accounts
- User Activity
- User Retention
- Team Roles
- Team Permissions
- Team Access Logs
- Jack
- Julia
- Avatar Settings
- Agent List
- Agent Performance
- Agent Rankings
- Model Library
- Model Benchmarks
- Model A/B Testing
- Data Analysis
- Product Market Fit
- User Behavior
- Install Analytics
- Geographic Data
- App Monitor
- Website Monitor
- Threat Detection
- Token Protection
- Revenue
- Subscriptions
- System Settings
- System Infrastructure
- System Integrations
- Developer API Keys
- Developer API Usage

## Run Locally

This project is dependency-free and runs as a static site. It can run in:

- seeded preview mode
- live API mode against the backend repo

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## Backend Integration

This frontend is designed to pair with:

```text
/Users/jatoine/Documents/AGI-1-Command-Center-Backend-admin-panel
```

The runtime API base is configured in:

```text
config.js
```

Default value:

```text
http://127.0.0.1:8000/api/v1
```

If the backend is unavailable, the frontend automatically falls back to the seeded preview dataset.

## Structure

- `index.html` - application shell
- `config.js` - frontend API target
- `styles.css` - visual system and layout
- `app.js` - API-aware navigation, state, charts, and screen rendering

## Notes

- The GitHub-safe repository slug should be `AGI-1-Command-Center-Dashboard-admin-panel`.
- The product title displayed in the UI remains `AGI-1 Command Center Dashboard`.
