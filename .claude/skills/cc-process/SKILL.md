---
name: process
description: Process inbox items into threads and generate Command Center JSON. Groups items, classifies urgency, and updates the dashboard data. Run after cc:ingest or when you want to refresh thread classifications.
---

# cc:process — Process Inbox Into Threads

Run the Command Center processing pipeline to group inbox items into threads and generate dashboard JSON.

## Steps

1. Execute the pipeline:
```bash
cd ~/.gbrain/command-center && PYTHONPATH="$HOME/.gbrain/command-center" \
OPENAI_API_KEY="$OPENAI_API_KEY" \
OPENAI_BASE_URL="https://llm-gateway.razorpay.com" \
python3 ~/.gbrain/command-center/process.py
```

2. Report results: new threads created, threads updated, active vs watching counts
3. If there are active threads, show a brief summary of what needs attention

## What It Does
- Reads new files from `~/Desktop/repos/hermes-sync-dump/inbox/`
- Groups items into threads (matches by source ID patterns)
- Classifies each thread: active (needs action) vs watching (informational)
- Sets response_eta: urgent / today / this-week / no-rush
- Writes thread MD files to `threads/`
- Generates `command-center/threads.json` and `command-center/pulse.json`
- Auto-closes stale threads (>7 days no update)
