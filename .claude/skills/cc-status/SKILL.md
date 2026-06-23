---
name: status
description: Show current Command Center status — active threads needing action, pending executions, and pulse summary. Quick overview without running any pipelines.
---

# cc:status — Command Center Status

Show the current state of the Command Center without running any pipelines.

## Steps

1. Read `~/Desktop/repos/hermes-sync-dump/command-center/threads.json`
2. Read `~/Desktop/repos/hermes-sync-dump/command-center/pulse.json`
3. Count pending actions in `~/Desktop/repos/hermes-sync-dump/actions-queue/`
4. Present a concise summary:

```
Command Center Status
─────────────────────
Active: X threads (Y due today)
Watching: Z threads
Pending actions: N (awaiting execution)

Active threads:
  🔴 [urgent] Thread title (source)
  🟡 [today] Thread title (source)
  🔵 [this-week] Thread title (source)
```

## When to Use
- Quick check of what needs attention
- Before deciding whether to run `/cc:act`
- Morning review of overnight activity
