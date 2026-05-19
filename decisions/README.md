# decisions/

This folder holds product and engineering decisions, structured as lightweight Architecture Decision Records (ADRs).

## Naming Convention

Files should be named using a short, descriptive slug that identifies the decision:

```
<slug-describing-the-decision>.md
```

For example: `use-langchain-for-agent-orchestration.md` or `vrm-signal-priority-ranking.md`

## Frontmatter Schema

```yaml
---
title: <full human-readable title of the decision>
type: decision
status: proposed        # one of: proposed | in-progress | decided | superseded
date: YYYY-MM-DD
owner: [[people/owner-name]]
---
```

## Status Definitions

| Status | Meaning |
|---|---|
| `proposed` | Under discussion, not yet accepted |
| `in-progress` | Being actively refined or implemented |
| `decided` | Accepted and in effect |
| `superseded` | Was decided but has since been replaced by another decision |

## Tips

- Link decisions to relevant `[[projects/...]]`, `[[meetings/...]]`, and `[[people/...]]` nodes.
- Add a `## Context` section explaining *why* the decision was needed.
- Add a `## Decision` section stating *what* was decided.
- Add a `## Consequences` section noting trade-offs and follow-on actions.
- If a decision is superseded, add a `superseded-by: [[decisions/new-slug]]` field to its frontmatter.
