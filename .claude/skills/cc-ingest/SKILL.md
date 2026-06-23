---
name: ingest
description: Run the gbrain multi-source ingestion pipeline to pull new data from Calendar, Gmail, DevRev, Slack, and Drive into the inbox. Use when you want fresh data in the command center.
---

# cc:ingest — Pull Fresh Data

Run the ingestion pipeline immediately to fetch new items from all sources.

## Steps

1. Execute the pipeline:
```bash
cd ~/.gbrain/command-center && PYTHONPATH="$HOME/.gbrain/command-center" \
OPENAI_API_KEY="$OPENAI_API_KEY" \
OPENAI_BASE_URL="https://llm-gateway.razorpay.com" \
GOOGLE_GENERATIVE_AI_API_KEY="$GOOGLE_GENERATIVE_AI_API_KEY" \
python3 ~/.gbrain/ingest/pipeline.py
```

2. Report results: items fetched per source, items written, any errors
3. If items were written, suggest running `/cc:process` next

## Sources Fetched
- Google Calendar (past 1d → next 3d)
- Gmail (last 1h, from manager + direct emails + topic keywords)
- DevRev (issues modified since last sync)
- Slack (monitored channels + @mentions)
- Google Drive (tracked docs + recently shared)
