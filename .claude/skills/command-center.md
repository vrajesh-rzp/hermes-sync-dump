---
name: command-center
description: >
  PM Command Center — a human-in-the-loop system for managing threads, OKRs, and priorities.
  Ingests data from Calendar, Gmail, DevRev, Slack, and Drive, groups into threads, classifies
  urgency, and lets the PM take actions that Claude Code executes. Use when the user says
  "ingest", "process threads", "sync brain", "show status", "execute actions", "refresh metrics",
  "command center", "cc:ingest", "cc:process", "cc:sync", "cc:act", "cc:status", or "cc:metrics".
version: 1.0.0
---

# PM Command Center Plugin

A full human-in-the-loop system for managing your PM workflow. Threads are the core unit — every incoming signal (Slack message, email, calendar event, DevRev update) maps to a thread that either needs your action or is just tracking.

## Architecture

```
Ingest (hourly) → inbox/*.md → Process → threads/*.md + command-center/*.json
                                                    ↓
                                        React Dashboard (GitHub Pages)
                                                    ↓
                                        User actions → actions-queue/*.json
                                                    ↓
                                        /cc:act → Claude Code executes
```

## Available Skills

| Skill | Purpose |
|-------|---------|
| `/cc:ingest` | Pull fresh data from all sources |
| `/cc:process` | Process inbox into threads, classify, generate JSON |
| `/cc:sync` | Import new files into gbrain |
| `/cc:act` | Execute pending actions from the queue |
| `/cc:status` | Quick overview of active threads |
| `/cc:metrics` | Refresh OKR metrics from Trino |

## Key Paths

- Inbox: `~/Desktop/repos/hermes-sync-dump/inbox/`
- Threads: `~/Desktop/repos/hermes-sync-dump/threads/`
- JSON output: `~/Desktop/repos/hermes-sync-dump/command-center/`
- Action queue: `~/Desktop/repos/hermes-sync-dump/actions-queue/`
- Pipeline code: `~/.gbrain/ingest/` and `~/.gbrain/command-center/`
- Dashboard: `~/Desktop/repos/hermes-sync-dump/dashboard/`

## Environment Variables Required

```bash
export OPENAI_API_KEY="$OPENAI_API_KEY"
export OPENAI_BASE_URL="https://llm-gateway.razorpay.com"
export GOOGLE_GENERATIVE_AI_API_KEY="$GOOGLE_GENERATIVE_AI_API_KEY"
export PYTHONPATH="$HOME/.gbrain/command-center"
```
