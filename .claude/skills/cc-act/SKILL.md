---
name: act
description: Execute pending actions from the Command Center queue. Pulls the latest actions-queue/ files from the hermes-sync-dump repo, reads unexecuted items, and performs each action (Slack reply, DevRev comment, email response). Marks actions as executed after completion.
---

# cc:act — Execute Command Center Actions

Execute pending actions that were submitted via the Command Center dashboard.

## Workflow

1. Pull latest from the hermes-sync-dump repo
2. Read all `*.json` files in `~/Desktop/repos/hermes-sync-dump/actions-queue/`
3. Filter to actions with `"status": "pending"`
4. For each pending action, execute based on `action` type:
   - **respond**: Post the message to the target (Slack thread, Gmail reply, DevRev comment)
   - **approve**: Execute the approved operation (e.g., post meeting notes to DevRev)
   - **defer**: Update the thread deadline and move to watching
   - **reject**: Mark thread as closed
5. Update the action JSON file: set `status: "executed"`, `executed_at: <now>`, `result: <summary>`
6. Commit and push changes back to the repo

## Execution Details

### Slack responses
Use the Slack MCP (`mcp__claude_ai_Slack__slack_send_message`) to post to the channel/thread referenced in `payload.target`.

### DevRev comments
Use the DevRev MCP (`mcp__plugin_compass_devrev__add_comment`) to post to the referenced issue/enhancement.

### Gmail replies
Use `gw gmail send` CLI to reply to the thread.

## Running

```bash
cd ~/Desktop/repos/hermes-sync-dump
git pull origin main

# Then read and execute each pending action in actions-queue/
```

After execution, report:
- How many actions were executed
- Any failures (with reason)
- Suggest running `/cc:process` if threads need re-classification

## Important

- ALWAYS confirm with the user before executing actions that send external messages
- Show the action content and target before executing
- If an action references a Slack thread_ts or DevRev ID, verify it exists before posting
- Never execute the same action twice (check `status` field)
