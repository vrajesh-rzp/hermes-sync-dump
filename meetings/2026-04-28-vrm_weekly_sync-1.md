---
title: "VRM Weekly Sync"
type: meeting
date: 2026-04-28
tags: [meeting, gemini-recording]
gemini_doc_id: 11FUt_xE9eYaFz3npO1UweaM2YwJ5wEdVxXpNiphKAoc
---

# VRM Weekly Sync


**Date:** 2026-04-28
**Source:** Gemini recording ([Google Doc](https://docs.google.com/document/d/11FUt_xE9eYaFz3npO1UweaM2YwJ5wEdVxXpNiphKAoc/edit))

---

## Summary

﻿📝 Notes
Apr 28, 2026
VRM Weekly Sync
Invited Anurag Rastogi Vrajesh Jaidev Iyengar Sagar Agarwal
Attachments VRM Weekly Sync Notes by Gemini

Summary
Technical discussions addressed message forwarding logic and authentication hurdles via JWT implementation for system security.

Current Secret Management Review
Existing architecture utilizes Secret Manager for authentication. Logic currently processes messages before forwarding via HTTPS.

Message Processing Architecture Shift
Development aims to shift processing to the agent-tech dashboard backend. Forwarding requires merchant identification via session data.

Authentication Through Faked Passport
Engineers decided to generate a faked JSON Web Signature containing the merchant ID. Secure connection depends on sharing a secret key.

Rate this Summary: Helpful or Not Helpful

Decisions
We've updated the Decisions section using your feedback.
Let us know what you think: Helpful or Not Helpful

ALIGNED
* Passport-based authentication strategy adopted The authentication strategy for the send message endpoint is set to utilize a generated Passport (JWT) and a specific secret key, replacing the requirement for a live user session.

Next steps
* [Ishaan Bahal] Send Documentation: Share relevant passport key documentation.
* [Vrajesh Jaidev Iyengar] Test Endpoint: Create fake passport, hit the production endpoint for testing.
* [Vrajesh Jaidev Iyengar] Build JWT Function: Ask Lot to create JWT generation function in the codebase.
* [Vrajesh Jaidev Iyengar] Whitelist Key: Request Lot to whitelist the created key on Razor assist client end.

Details
Did the screenshots in this section make your notes better or worse?
* Current System for Secret Management and Authentication: Vrajesh Jaidev Iyengar discussed the current solution for secret management, noting that secrets are managed using Secret Manager and are stored in an AWS secret manager account created by the AI strategy team. This secret is read by the application for authenticating and signature verification, specifically using an API key and API secret for MG. The application uses HTTPS for communication and is currently set up to process incoming messages before forwarding them.
* Proposed Shift in Message Processing Logic: The current flow involves Vrajesh Jaidev Iyengar's application processing messages and sending responses back to the group, but they want to change this logic so that the message processing rests entirely with the agent-tech dashboard backend. The plan is to simply forward received messages to the agent-tech dashboard backend's `/API/agent-tech/sendMessage` endpoint. The application is a Next.js full-stack app that does have a backend.
* Authentication Requirements for Agent-Tech Dashboard: The primary issue for forwarding messages is that the agent-tech dashboard requires JSON Web Tokens (JWT) for authentication. Although the user context (like user ID or merchant ID) can be fetched and sent, Vrajesh Jaidev Iyeng

---

## Full Notes

﻿📝 Notes
Apr 28, 2026
VRM Weekly Sync
Invited Anurag Rastogi Vrajesh Jaidev Iyengar Sagar Agarwal
Attachments VRM Weekly Sync Notes by Gemini




Summary
Technical discussions addressed message forwarding logic and authentication hurdles via JWT implementation for system security.

Current Secret Management Review
Existing architecture utilizes Secret Manager for authentication. Logic currently processes messages before forwarding via HTTPS.

Message Processing Architecture Shift
Development aims to shift processing to the agent-tech dashboard backend. Forwarding requires merchant identification via session data.

Authentication Through Faked Passport
Engineers decided to generate a faked JSON Web Signature containing the merchant ID. Secure connection depends on sharing a secret key.


Rate this Summary: Helpful or Not Helpful




Decisions
We've updated the Decisions section using your feedback.
Let us know what you think: Helpful or Not Helpful


ALIGNED
* Passport-based authentication strategy adopted The authentication strategy for the send message endpoint is set to utilize a generated Passport (JWT) and a specific secret key, replacing the requirement for a live user session.




Next steps
* [Ishaan Bahal] Send Documentation: Share relevant passport key documentation.
* [Vrajesh Jaidev Iyengar] Test Endpoint: Create fake passport, hit the production endpoint for testing.
* [Vrajesh Jaidev Iyengar] Build JWT Function: Ask Lot to create JWT generation function in the codebase.
* [Vrajesh Jaidev Iyengar] Whitelist Key: Request Lot to whitelist the created key on Razor assist client end.




Details
Did the screenshots in this section make your notes better or worse?
* Current System for Secret Management and Authentication: Vrajesh Jaidev Iyengar discussed the current solution for secret management, noting that secrets are managed using Secret Manager and are stored in an AWS secret manager account created by the AI strategy team. This secret is read by the application for authenticating and signature verification, specifically using an API key and API secret for MG. The application uses HTTPS for communication and is currently set up to process incoming messages before forwarding them.
* Proposed Shift in Message Processing Logic: The current flow involves Vrajesh Jaidev Iyengar's application processing messages and sending responses back to the group, but they want to change this logic so that the message processing rests entirely with the agent-tech dashboard backend. The plan is to simply forward received messages to the agent-tech dashboard backend's `/API/agent-tech/sendMessage` endpoint. The application is a Next.js full-stack app that does have a backend.
* Authentication Requirements for Agent-Tech Dashboard: The primary issue for forwarding messages is that the agent-tech dashboard requires JSON Web Tokens (JWT) for authentication. Although the user context (like user ID or merchant ID) can be fetched and sent, Vrajesh Jaidev Iyengar is unsure if the endpoint needs a "hot token" for subsequent GraphQL calls or authorization. The dashboard appears to rely on a session, as implied by the use of `passport JWT` and a dependency on a session somewhere for passport support.
  

* Determining Necessary Authentication Components: Further investigation of the dashboard's code revealed the use of `passport middleware` and `passport validation`. It was noted that the endpoint `/authenticateRSA` can perform signature validation using headers and may not strictly need user context. However, the specific `/agent/sendMessage` endpoint was originally built for merchants logged into the dashboard, requiring a merchant-specific response, which suggests the need for user context.
  

* Merchant ID as the Critical Parameter: After reviewing the `sendMessage` endpoint code, it was determined that the system requires the merchant ID, which is fetched from the session, to verify that the conversation belongs to the authenticated merchant. They concluded that the merchant ID is the critical parameter needed, not the user ID, because the system relies on checking the conversation against the authenticated merchant's session. Merchant ID retrieval is planned via the merchant details table using the contact number as a key, with the application handling the logic for multiple MIDs associated with one number.
  

* Solution: Faking a Passport/JWT: To resolve the authentication issue, the agreed-upon solution is for Vrajesh Jaidev Iyengar's application to fake a passport, which is essentially a JSON Web Signature (JWS), containing the necessary merchant ID. This fake passport will be a signed, encrypted string of information. Ishaan Bahal suggested building a creation Software Development Kit (SDK) to generate the passport, as a reader SDK already exists.
  

* Security Mechanism for the Fake Passport: The security against attackers faking the passport will rely on a secret key used to sign the JWT, which must be shared with the Agent-Assist client end for verification. The recommended approach is for Vrajesh Jaidev Iyengar to ask their cloud team to create a JWT generation function in their codebase and create a new key, which will then be whitelisted on the Razor Assist client end to secure the connection. Vrajesh Jaidev Iyengar will handle the logic for determining the merchant and gathering all their necessary parameters on the application side.




You should review Gemini's notes to make sure they're accurate. Get tips and learn how Gemini takes notes
How is the quality of these specific notes? Take a short survey to let us know your feedback, including how helpful the notes were for your needs.

---

## Series
- Previous: [[meetings/2026-04-23-vrm_weekly_sync]]
- Next: [[meetings/2026-04-28-vrm_weekly_sync]]

## Linked Entities
- [[people/anurag-rastogi]]
- [[people/sagar-agarwal]]
- [[people/vrajesh-iyengar]]
- [[projects/vrm]]
