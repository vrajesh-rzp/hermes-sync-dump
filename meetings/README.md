# meetings/

This folder holds meeting notes for Vrajesh's brain.

## Naming Convention

Files should be named using the pattern:

```
YYYY-MM-DD-topic.md
```

For example: `2026-05-19-vrm-weekly-sync.md`

## Linking

Each meeting page should link to all relevant:
- **People** — attendees and stakeholders via `[[people/...]]`
- **Projects** — any project discussed via `[[projects/...]]`
- **Decisions** — any decision made or referenced via `[[decisions/...]]`

## Frontmatter Schema

```yaml
---
title: <short descriptive title>
type: meeting
date: YYYY-MM-DD
attendees:
  - [[people/person-one]]
  - [[people/person-two]]
tags: [meeting, <topic-tag>]
---
```

## Tips

- Capture **decisions** made in a meeting as separate files under `decisions/` and link back.
- Use `## Action Items` sections with `- [ ]` checkboxes assigned to owners.
- Keep raw notes in a `## Notes` section; distil key takeaways under `## Summary`.

---

## Linked Entities
- [[people/vrajesh-iyengar]]
- [[projects/vrm]]
