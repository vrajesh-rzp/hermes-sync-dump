---
name: sync
description: Sync the hermes-sync-dump repo with gbrain — imports new thread and inbox files into PGLite, runs embedding, and reports brain score. Use after cc:process to keep gbrain searchable.
---

# cc:sync — Sync to GBrain

Import new files into the gbrain knowledge base and refresh embeddings.

## Steps

1. Sync:
```bash
GOOGLE_GENERATIVE_AI_API_KEY="$GOOGLE_GENERATIVE_AI_API_KEY" \
OPENAI_API_KEY="$OPENAI_API_KEY" \
OPENAI_BASE_URL="https://llm-gateway.razorpay.com" \
gbrain sync --repo ~/Desktop/repos/hermes-sync-dump
```

2. Extract links/timeline:
```bash
gbrain extract all --source db
```

3. Report: pages imported, brain score, any errors

## When to Use
- After `/cc:process` generates new thread files
- After manual edits to brain content
- When you want gbrain search to include the latest data
