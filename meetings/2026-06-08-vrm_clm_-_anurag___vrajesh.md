---
title: "VRM CLM - Anurag / Vrajesh"
type: meeting
date: 2026-06-08
tags: [meeting, gemini-recording]
gemini_doc_id: 1RUoD4bgnKEdMoAJdOrLPhfNLfHGuN79sbZr4MnzHDf8
---

# VRM CLM - Anurag / Vrajesh


**Date:** 2026-06-08
**Source:** Gemini recording ([Google Doc](https://docs.google.com/document/d/1RUoD4bgnKEdMoAJdOrLPhfNLfHGuN79sbZr4MnzHDf8/edit))

---

## Summary

﻿📝 Notes
Feb 25, 2026
VRM CLM - Anurag / Vrajesh
Invited Anurag Rastogi Vrajesh Jaidev Iyengar Sagar Agarwal Swaminathan
Attachments VRM CLM - Anurag / Vrajesh 
Meeting records Transcript Recording 

Summary
MVP Scope and Implementation Status
The team reviewed the MVP scope (Phase 1), which involves sending 11 operational templates triggered by a non-real-time cron job fetching data from Trino. Current testing is challenged by template matching and response failures, although two templates have been approved.

Security and Data Fetching Concerns
Compliance concerns were raised regarding data fetching from Trino using only Merchant ID (MID) authentication, necessitating a review of the guardrails and authentication setup by the security stakeholders. The team also outlined the workflow for Phase 2 CAM-reviewed templates, which require human approval before being sent to merchants.

Group Setup and Backend Integration
The merchant onboarding flow requires manual or bulk group creation, utilizing an invite link and an admin approval mode for new members. The team confirmed plans to integrate the reactive portion of the project with the existing agentic backend to manage conversational context and utilize its established guard rails

Details
Decisions
Rate these decisions: Helpful or Not Helpful

NEEDS FURTHER DISCUSSION
* Data Authentication Compliance Guardrails The current MID-based authentication mechanism for fetching data from Trino requires robust guard rails documentation to satisfy Tech compliance requirements before going live, necessitating further review by Ashwat and his team.

ALIGNED
* CAM Employee Data Retrieval Source CAM employee phone numbers needed for testing will be retrieved by utilizing the Success Factors replica table available in Trino.
* Merchant Group Entry Auto-Approval Process The process for merchant group entry approval is set to auto-approve merchants whose phone numbers exist in the database, reserving manual CAM approval only when the phone number is not found.
* Webhook Endpoints OAuth Setup OAuth authentication will be set up for the webhook endpoints (Delivery URL and Event URL).
* Integrate Existing Agentic Backend The VRM codebase's reactive component, including guard rails and skills logic, will integrate with the existing agentic backend built by Ankit Gar's team to handle ticket creation, updates, and data fetching, thereby replacing the current custom logic.

More details:
* Health and Workload Status: Anurag Rastogi reported that they have been stretching themself too thin due to numerous running projects and late-night setups, leading to draining their energy (00:00:00). They acknowledged the concern that the codebase may have become too large (00:01:54).
* Codebase and Cleanup Strategy: Vrajesh Jaidev Iyengar suggested that the code should be the source of truth, and once it becomes large, an MD file might be needed to describe the structure (00:00:00). They offered to handle the cleanup and instr

---

## Full Notes

﻿📝 Notes
Feb 25, 2026
VRM CLM - Anurag / Vrajesh
Invited Anurag Rastogi Vrajesh Jaidev Iyengar Sagar Agarwal Swaminathan
Attachments VRM CLM - Anurag / Vrajesh 
Meeting records Transcript Recording 


Summary
MVP Scope and Implementation Status
The team reviewed the MVP scope (Phase 1), which involves sending 11 operational templates triggered by a non-real-time cron job fetching data from Trino. Current testing is challenged by template matching and response failures, although two templates have been approved.

Security and Data Fetching Concerns
Compliance concerns were raised regarding data fetching from Trino using only Merchant ID (MID) authentication, necessitating a review of the guardrails and authentication setup by the security stakeholders. The team also outlined the workflow for Phase 2 CAM-reviewed templates, which require human approval before being sent to merchants.

Group Setup and Backend Integration
The merchant onboarding flow requires manual or bulk group creation, utilizing an invite link and an admin approval mode for new members. The team confirmed plans to integrate the reactive portion of the project with the existing agentic backend to manage conversational context and utilize its established guard rails


Details
Decisions
Rate these decisions: Helpful or Not Helpful


NEEDS FURTHER DISCUSSION
* Data Authentication Compliance Guardrails The current MID-based authentication mechanism for fetching data from Trino requires robust guard rails documentation to satisfy Tech compliance requirements before going live, necessitating further review by Ashwat and his team.


ALIGNED
* CAM Employee Data Retrieval Source CAM employee phone numbers needed for testing will be retrieved by utilizing the Success Factors replica table available in Trino.
* Merchant Group Entry Auto-Approval Process The process for merchant group entry approval is set to auto-approve merchants whose phone numbers exist in the database, reserving manual CAM approval only when the phone number is not found.
* Webhook Endpoints OAuth Setup OAuth authentication will be set up for the webhook endpoints (Delivery URL and Event URL).
* Integrate Existing Agentic Backend The VRM codebase's reactive component, including guard rails and skills logic, will integrate with the existing agentic backend built by Ankit Gar's team to handle ticket creation, updates, and data fetching, thereby replacing the current custom logic.


More details:
* Health and Workload Status: Anurag Rastogi reported that they have been stretching themself too thin due to numerous running projects and late-night setups, leading to draining their energy (00:00:00). They acknowledged the concern that the codebase may have become too large (00:01:54).
* Codebase and Cleanup Strategy: Vrajesh Jaidev Iyengar suggested that the code should be the source of truth, and once it becomes large, an MD file might be needed to describe the structure (00:00:00). They offered to handle the cleanup and instruct the agent to not rely too heavily on MD files when they take over the project (00:01:54).
* MVP Scope and Structure Presentation: Anurag Rastogi presented a shared draft outlining two scopes: one for Phase 1/Minimum Viable Product (MVP) and a second for a scaled setup (00:01:54). They detailed the current implementation, including life cycle stages such as onboarding, activation, growing scale, at-risk, and churn, with the churn state defined as having more than 10 transactions (00:03:21).
* Phase 1 Template Implementation: Phase 1 involves sending 11 operational templates, which are a mix of utility and marketing templates. These templates, which include daily payment recaps, settlement delay alerts, and holiday heads-up, are currently triggered by a cron job using Trino MCP to fetch data every 6 hours, meaning the process is not real-time and bypasses the need for event-based triggers (00:03:21).
* Onboarding and Growth Funnel Templates: The onboarding stage includes welcome messages, day one tips, and celebrations for first transactions and settlements. Growth and engagement templates, such as milestone notifications and payment link nudges, are included for merchants who fall into the onboarding funnel (00:04:24).
* Testing and Template Status: The build is currently in testing mode, and Anurag Rastogi is trying to resolve issues with template matching and responses, which are currently failing, although group creation is successful. Two templates have been approved, while the rest have not been sent or created yet (00:05:34).
* Phase 2 and CAM-Reviewed Flows: Phase 2 will introduce CAM-reviewed flows, including templates for retention (dominant merchant GMV drop, win-back alerts) and lifecycle transitions (activated to growing, at-risk early warnings, and recovery). These templates will be approved by the Cams via a dashboard before being sent, which is intended to avoid potential agent determination errors (00:06:28).
* Event-Driven and Advisory Templates: The final bucket includes automated event-driven templates for events like dispute filing, chargeback raising, sustained webhook failures, and large bulk payout confirmations (00:07:46). Additionally, advisory templates, such as settlement cycle upgrades and bank outage impacts, are available but require CAM approval and are not yet automated (00:12:54).
* Template Storage and Approval Process: Templates are stored in a template library within an admin-only sandbox environment and must be approved via Gupshup or M Carbon before they can be synced (00:07:46). The templates are text-based and use dynamic variables enclosed in curly brackets for data points such as company name and join links, which are fetched from Trino (00:09:00).
* Trino Authentication and Guardrails: Data fetching from Trino is currently authenticated based on the Merchant ID (MID), although Vrajesh Jaidev Iyengar suggested that a user-based authentication or OAuth token should ideally be implemented (00:09:54). Anurag Rastogi confirmed that guardrails are in place to ensure that a merchant can only access data related to their specific MID (00:10:45).
* Security Concerns and Stakeholder Review: Vrajesh Jaidev Iyengar raised compliance concerns regarding data fetching without robust authentication, suggesting that the team needs to be more robust or provide justification for the existing guardrails. This information, along with the guardrails, needs to be shared with Ashwat and their team for review (00:11:49).
* CAM Approval Workflow and Template Scheduling: CAM-reviewed templates flow into the admin panel where a human clicks to approve them before they are sent. The sending of these templates is tied to a schedule that runs for the specific template, operating similar to a campaign setup (00:12:54).
* Testing Challenges and MID Request: Anurag Rastogi is currently encountering a 422 error, specifically a 10m mismatch error, when trying to send messages to the merchant and CAM, but expects to resolve it by mid-day (00:13:54). They requested a test MID that has a phone number associated with it to facilitate testing in a real environment (00:14:56) (00:25:47).
* CAM Contact Information Issue: A current challenge in setting up the groups is that CAM phone numbers are often missing in the system, with only email IDs available (00:14:56). Vrajesh Jaidev Iyengar suggested checking the Success Factors table in Trino, which holds employee information, as an alternative source for the necessary phone numbers (00:16:16).
* Merchant Onboarding Flow: The proposed flow involves sending merchants a direct message with a link to join the WhatsApp group after they complete their onboarding and their KYC is approved. Group creation is currently not automated and requires either a bulk CSV upload or manual group creation (00:17:23) (00:19:38).
* Group Link Creation and Approval Mode: Upon group creation, an invite link is generated automatically and is sent to the merchant via direct message (00:09:54) (00:18:16). The group has an approval mode that requires admin approval for members to join, which can be configured to auto-approve members whose phone numbers are already in the database (00:19:38).
* Webhook Management and VRM Messaging: Two webhooks have been added for administrative webbook management: a Delivery URL for read receipts and status updates when the VRM sends a message, and an Event URL, which is triggered when M Carbon receives a message from the merchant on the group. Anurag Rastogi noted that no authentication is currently set up for the webhooks but has requested an OAuth setup (00:22:10).
* Template Configuration and VRM Messaging Structure: The structure of the welcome onboarding template was presented, which includes tagging the CAM with an @ symbol and clearly stating that the group offers two ways to help: an AI assistant and the CAM. The template is configured to notify merchants about proactive updates and prompts them to start the interaction by typing their question (00:24:28).
* Integration with Agentic Backend: Vrajesh Jaidev Iyengar stated that they would reuse the existing agentic backend for the reactive portion of the project, including ticket creation, updates, and reading, as it already includes guard rails and context storage (00:25:47). They proposed using the last 10 messages to maintain conversational context with the Large Language Model (00:27:16).
* Future Integration and Agent Piece Functionality: Vrajesh Jaidev Iyengar plans to integrate with the existing robustly built agentic backend, which is ready for production and may involve scrapping the current guard logic (00:27:16). The agent piece is capable of fetching data and can perform informational actions, with a future goal of reducing service volume by providing actionable information to prevent ticket creation (00:28:20).


Suggested next steps
* Vrajesh Jaidev Iyengar will clean up the codebase when Anurag Rastogi hands it over and instruct it not to reference the MD files too heavily.
* Anurag Rastogi will share the guard rails information with Vrajesh Jaidev Iyengar for review by the Tech Compliance teams.
* Vrajesh Jaidev Iyengar will ping Anurag Rastogi about the success factors table and the CAM person's number.
* Vrajesh Jaidev Iyengar will find an MID for testing the group creation and message sending process on a real account.
* Anurag Rastogi will share the credentials for the setup with Vrajesh Jaidev Iyengar.


You should review Gemini's notes to make sure they're accurate. Get tips and learn how Gemini takes notes
Please provide feedback about using Gemini to take notes in a short survey.
📖 Transcript
Feb 25, 2026
VRM CLM - Anurag / Vrajesh - Transcript
00:00:00
 
Anurag Rastogi: Yeah.
Vrajesh Jaidev Iyengar: Hey.
Anurag Rastogi: Hi.
Vrajesh Jaidev Iyengar: Yes. So, how's your
Anurag Rastogi: Um, this is the same.
Vrajesh Jaidev Iyengar: health?
Anurag Rastogi: I've been like stretching myself a little too much. Yeah. I think last to last week I've been draining myself like there too many projects running, lot of late night setups.
Vrajesh Jaidev Iyengar: stretching yourself too thin. I feel stretching yourself too
Anurag Rastogi: Huh? Yeah.
Vrajesh Jaidev Iyengar: thin.
Anurag Rastogi: Yeah.
Vrajesh Jaidev Iyengar: Second
Anurag Rastogi: Not sure. I've shared the draft. By the way,
Vrajesh Jaidev Iyengar: draft. Uh, you had shared the note.
Anurag Rastogi: actually what's happening? No. I'm testing bunch of things and I think
Vrajesh Jaidev Iyengar: because whenever any other agent wants to read into the codebase know it's just reading all the MD files and assuming even though there are changes in the older MD files are not you know overwritten now I feel like the code can be the
Anurag Rastogi: short
Vrajesh Jaidev Iyengar: source of truth and once it becomes large enough then we'll need like an agent MD file to tell
 
 
00:01:54
 
Anurag Rastogi: Sure
Vrajesh Jaidev Iyengar: and what is the structure and
Anurag Rastogi: take I think maybe the code has become a little too large but anyways
Vrajesh Jaidev Iyengar: stuff
Anurag Rastogi: like I I'll see how it can be sorted.
Vrajesh Jaidev Iyengar: whenever you hand over I can I can do the cleanup that's fine I'll just instruct it to not reference the MD files too heavily second I'll just check with Saga
Anurag Rastogi: Ter.
Vrajesh Jaidev Iyengar: uh Saga is caught up in some other work. He will not be able to join but we can go ahead. I'll just record the
Anurag Rastogi: Okay.
Vrajesh Jaidev Iyengar: meeting.
Anurag Rastogi: Uh, cool. Uh so I have uh shared this draft uh this broadly has uh two
Vrajesh Jaidev Iyengar: Okay.
Anurag Rastogi: scopes. uh one is like what what I can do in phase one like for the MVP and the second can be you know what what broadly we want okay what is that u broadly what can happen at a scaled setup ticket to u I I'll just directly jump into uh like what we have done u
 
 
00:03:21
 
Vrajesh Jaidev Iyengar: Yes.
Anurag Rastogi: so there is uh certain life cycle stages is which we have draft mapped.
Vrajesh Jaidev Iyengar: Let's go.
Anurag Rastogi: Uh first transaction 30 days ago or no transaction. This is onboarding stage. Uh activation stage growing scale at risk and churn state. In churn state we are doing a baseline of more than 10 transactions. The previous one avoid any false positives. Right. Uh next up is phase one again where we're sending a bunch of operation like currently 11
Vrajesh Jaidev Iyengar: Mhm.
Anurag Rastogi: templates. uh which is a B mix of uh utility and marketing template.
Vrajesh Jaidev Iyengar: Take
Anurag Rastogi: Um so here you'll have settlement uh it so what what what happens
Vrajesh Jaidev Iyengar: him.
Anurag Rastogi: right there's a chrome job or with the trino mcp we using and every uh 6 hours it tries to fetch uh the data from the back end and uh it pushes it to the user right so it's not real time right now real time we need to have event based triggers so that's not there so the bypass was to
 
 
00:04:24
 
Vrajesh Jaidev Iyengar: True.
Anurag Rastogi: use trino and and uh fetch it and send it to the user at a stipulated time. Right. Um daily payment recap uh settlement delay alert and holiday heads up.
Vrajesh Jaidev Iyengar: Take
Anurag Rastogi: So back in May there's a holiday calendar uh for every state as per bank and RBI guidelines which have been mapped. So it picks up and it's can send holiday heads up as well.
Vrajesh Jaidev Iyengar: You
Anurag Rastogi: Then uh onboarding uh here you are welcoming them uh when they join the
Vrajesh Jaidev Iyengar: go.
Anurag Rastogi: group. Then uh you have a welcome for day one after the group creation. Onboarding tips uh first transaction celebration and first settlement celebration and then for growth and engagement like every merchant will be
Vrajesh Jaidev Iyengar: There you go.
Anurag Rastogi: falling into the onboarding funnel. So two uh growth engagement uh templates uh one is milestone and one is payment link nudge. So in case uh if they have opted out opted in for the product uh but haven't used it so we'll send link
 
 
00:05:34
 
Vrajesh Jaidev Iyengar: Yeah. Onboarding me. Just one question.
Anurag Rastogi: nudge.
Vrajesh Jaidev Iyengar: Onboarding me. Should we have a further breakdown just submit to submit stage stages level?
Anurag Rastogi: So we are creating group uh as of now once the merchant gets onboarded with us like the KYC is approved.
Vrajesh Jaidev Iyengar: So this is all post
Anurag Rastogi: Yes. Yes. Uh not not during onboarding of such because otherwise there'll be too many groups or
Vrajesh Jaidev Iyengar: onboarding.
Anurag Rastogi: acquisition finalist quite high. So we need to think about how how we want to mitigate it.
Vrajesh Jaidev Iyengar: You
Anurag Rastogi: Okay. And then uh these these are the approval statuses like these two have been approved.
Vrajesh Jaidev Iyengar: got
Anurag Rastogi: Uh like rest of have not been created, not been sent yet. Since it's uh the build is still in testing mode, I'm I'm currently able to trying to figure out uh how the responses how the template matching uh is is working. Uh it's getting it's failing right now.
 
 
00:06:28
 
Anurag Rastogi: I'm able to create groups as of now. But otherwise uh templates mismatch is happening and it's failing.
Vrajesh Jaidev Iyengar: Okay.
Anurag Rastogi: Okay. uh and in next uh phase two like we'll have a bunch of cam reviewed flows as well. So I I'll show you what it is. So bucket one is retention. These templates are automated. We're checking dominant merchants GMV drop alert and winning win back if 30 days no transaction. Uh there's a suppression as well in case there's a FD ticket. We will not uh send any of these messages. Okay. Then uh life cycle transitions. So activated 30 days uh and stage growing entry first time and like moving from activated to growing uh then at risk uh early warning in case uh you know they're not transacting um and then stage recovery in case uh merchant recovers from this to as risk to growing and these goes via cams u so cams will have a dashboard and they'll have all these templates mapped uh they will approve all the templates uh because uh you know it it can be tricky uh for agent to determine that if if this is the right time to all these templates or not.
 
 
00:07:46
 
Anurag Rastogi: Then last bucket is uh event driven templates. uh in case a dispute is filed, chargeback is raised like uh the message goes. Uh web hook failure like if there's a sustained failure of web hooks uh endpoints, then bulk payout confirmation in case uh you know uh the the payout is large. So we'll send it right. Uh we avoiding a noise here a little because otherwise we could have sent you know all the template like payment success and whatnot. But uh since this group is more of a support than uh letting merchants know about every transaction. So I felt like these can be the nice starting points.
Vrajesh Jaidev Iyengar: S template ids all of these templates how will they how do this like where are they stored currently?
Anurag Rastogi: So we can store it uh in a template library. Uh yeah. You can see this is failing.
Vrajesh Jaidev Iyengar: Okay.
Anurag Rastogi: So uh there's a sandbox environment where we we test it out and this is admin only right uh then you have uh template section uh here you either create templates or you sync templates directly from uh mcarbon so process either you need to go to cupshop or m carbon to get
 
 
00:09:00
 
Vrajesh Jaidev Iyengar: Okay.
Anurag Rastogi: the templates approved and uh once they're there you can just sync those those templates and they'll come
Vrajesh Jaidev Iyengar: Huh?
Anurag Rastogi: in
Vrajesh Jaidev Iyengar: Okay. So, multiple buckets of templates. We'll need to go first create those templates on M Carbon, get them approved.
Anurag Rastogi: Correct.
Vrajesh Jaidev Iyengar: And these are HTML templates.
Anurag Rastogi: Uh the these are text based templates.
Vrajesh Jaidev Iyengar: Oh, what what kind of templates are these?
Anurag Rastogi: Uh uh like how how you create on gupshub right now like how how messages go in.
Vrajesh Jaidev Iyengar: A
Anurag Rastogi: So this is like okay sorry I lo got logged off. Take a bit but uh
Vrajesh Jaidev Iyengar: glimpse basically curly brackets there'll be some variables which we will replace with some dynamic
Anurag Rastogi: So,
Vrajesh Jaidev Iyengar: text.
Anurag Rastogi: so check it this way. Take.
Vrajesh Jaidev Iyengar: So the company name join link where do these data points come in
Anurag Rastogi: So,
Vrajesh Jaidev Iyengar: from?
Anurag Rastogi: join link actually comes from uh the dynamic.
 
 
00:09:54
 
Anurag Rastogi: It comes whenever you plan to create a group and company name gets fetched from Trina.
Vrajesh Jaidev Iyengar: And all this is being handled in the VRM codebase like fetching from TO and
Anurag Rastogi: Correct. Yeah. Yeah. So this is like the test group I created.
Vrajesh Jaidev Iyengar: everything
Anurag Rastogi: Here you can see there's an invite link which got generated automatically.
Vrajesh Jaidev Iyengar: one last thing sorry TRO when you're fetching the data to authentication you're not I'm
Anurag Rastogi: Um
Vrajesh Jaidev Iyengar: guessing we should ideally do a user based authentication But uh
Anurag Rastogi: authentic is happening bas on the mid.
Vrajesh Jaidev Iyengar: currently
Anurag Rastogi: So whenever you create a group uh you lock in the mid I just try to show
Vrajesh Jaidev Iyengar: okay are you locking the mid to the group
Anurag Rastogi: you
Vrajesh Jaidev Iyengar: but whenever a message comes uh what o token is being sent to trino.
Anurag Rastogi: uh nothing nothing yet. How how like how does this work?
Vrajesh Jaidev Iyengar: So normally there should be one access token or an o token.
 
 
00:10:45
 
Vrajesh Jaidev Iyengar: So when I was running MCP for instance locally I had to reach out to the
Anurag Rastogi: Mhm.
Vrajesh Jaidev Iyengar: data team to generate an O token for me for against my email id. So then all the activity that was being done was getting mapped back to me and permissions
Anurag Rastogi: Okay.
Vrajesh Jaidev Iyengar: were you know getting associated with all those three requests when it's when this is merchant facing then
Anurag Rastogi: Okay.
Vrajesh Jaidev Iyengar: ideally you know whatever the merchant mid should have access to right now I don't think there's a role like a mid level access control policy but merchant logs in through us access token which goes to the back end and back end uses that same Access O to fetch
Anurag Rastogi: Yeah sure. So what I've done uh vij in order to mitigate it and in order to like not
Vrajesh Jaidev Iyengar: data.
Anurag Rastogi: merchant have access to any other MID is I have logged it right and even if merchant types and says that hey uh can you tell me about this right uh which is maybe a different MIDI or a different ticket or a different refund ID or anything like that it states straight away goes and tells that hey I can only tell you about your MID.
 
 
00:11:49
 
Vrajesh Jaidev Iyengar: Huh?
Anurag Rastogi: So uh whatever query is happening is happening on this mid only and I get your point on you know getting the odd token but I think whenever you productize it probably you can pick it up in in for 10 merchant odd like I don't think that that case can be like I can I can work on it extensively to solve for a
Vrajesh Jaidev Iyengar: Huh?
Anurag Rastogi: process.
Vrajesh Jaidev Iyengar: before getting this live.
Anurag Rastogi: Sorry,
Vrajesh Jaidev Iyengar: Tech compliance teams might have issues with this like fetching data like allowing merchants to
Anurag Rastogi: what?
Vrajesh Jaidev Iyengar: even make a call. We need to be a little robust with it or at least have reasoning key why like what kind of guard rails are in
Anurag Rastogi: Sure.
Vrajesh Jaidev Iyengar: place.
Anurag Rastogi: Yeah, that I can share.
Vrajesh Jaidev Iyengar: Sure.
Anurag Rastogi: And uh this this needs to go to Ashwat and team,
Vrajesh Jaidev Iyengar: Huh.
Anurag Rastogi: right?
Vrajesh Jaidev Iyengar: Mhm. Correct.
Anurag Rastogi: I'll maybe Okay. Uh so coming back to this one.
 
 
00:12:54
 
Anurag Rastogi: Yeah. So there are bunch of other templates as well like which require cam approval uh advisory templates like settlement cycle upgrade SAR to insight bank outage impact. Well, these are can be reviewed. Uh these are not automated uh yet. And then there's a future scope as well on what we can
Vrajesh Jaidev Iyengar: So,
Anurag Rastogi: do.
Vrajesh Jaidev Iyengar: camera view templates uh they will first flow into that admin panel that you showed like it's a human clicking approve or something and when it gets sent.
Anurag Rastogi: Yes.
Vrajesh Jaidev Iyengar: Okay.
Anurag Rastogi: Yes.
Vrajesh Jaidev Iyengar: And it will get sent only when there is a schedule that runs for that
Anurag Rastogi: Correct.
Vrajesh Jaidev Iyengar: template.
Anurag Rastogi: So think of it as a like a moing gage kind of a setup where you want to run campaigns uh but u you know in case you want to create new cohorts that those are currently hardcoded u so because we don't want to give the flexibility but
Vrajesh Jaidev Iyengar: Okay.
Anurag Rastogi: admin in case you have a query ready so you can maybe fix stitch it
 
 
00:13:54
 
Vrajesh Jaidev Iyengar: H.
Anurag Rastogi: and send the those templates
Vrajesh Jaidev Iyengar: So at the moment those two templates that are ready that are approved sorry only those two will
Anurag Rastogi: No,
Vrajesh Jaidev Iyengar: go.
Anurag Rastogi: see I I'll get the approvals of all the phase one templates, right?
Vrajesh Jaidev Iyengar: Huh.
Anurag Rastogi: And yeah.
Vrajesh Jaidev Iyengar: Then there will be the stage of creating these templates that I'm assuming is a shorter activity.
Anurag Rastogi: Yeah. So the templates get approved like in 5 minutes.
Vrajesh Jaidev Iyengar: Okay.
Anurag Rastogi: So from
Vrajesh Jaidev Iyengar: And this is approval from the mcarbon team or from our teams from
Anurag Rastogi: meta yeah
Vrajesh Jaidev Iyengar: ma. Okay.
Anurag Rastogi: so uh that's what is currently there uh I'm also again as I was telling you the current state is I'm I'm getting some error so I'm trying to get it fixed group
Vrajesh Jaidev Iyengar: Huh.
Anurag Rastogi: ID is getting created right uh but beyond that you know sending the messages
Vrajesh Jaidev Iyengar: Yeah.
Anurag Rastogi: to merchant and cam is uh currently getting a 4ouble2 error.
 
 
00:14:56
 
Anurag Rastogi: It's a 10 m mismatch error. So like would be a short while uh when I solve it like probably by mid of today we'll be able to solve it and then uh I can start testing uh amongst a couple user
Vrajesh Jaidev Iyengar: Take
Anurag Rastogi: groups. We're just one more check. Uh do you have any other MID which is available which is you know probably for testing for
Vrajesh Jaidev Iyengar: I have a I have a couple of IDs for testing.
Anurag Rastogi: yourself right and those MIDIs
Vrajesh Jaidev Iyengar: So I can use those.
Anurag Rastogi: I believe will have your phone number as
Vrajesh Jaidev Iyengar: I they don't have my phone number.
Anurag Rastogi: well.
Vrajesh Jaidev Iyengar: I don't have my account activated. Weirdly enough, I have like a four four test accounts which are my engineers and some ex employees. Create another account on boarding account so that I have my number.
Anurag Rastogi: Uh actually uh what I I actually wanted to test this is sandbox environment right? I actually want to test if I can create groups here like new group and you know like this this can be done automatically or maybe uh go to provision group fetch in a single MID and or maybe do a bulk CSV upload challenge I wanted to maybe use a Salesforce table in order to fetch all the data right it can be uh so generally what happens that a CAM is associated with all the accounts At least we have right a current challenge is their phone numbers are
 
 
00:16:16
 
Vrajesh Jaidev Iyengar: Got Huh?
Anurag Rastogi: not there. It's only email. Huh?
Vrajesh Jaidev Iyengar: Camar
Anurag Rastogi: So either we push it then you know this
Vrajesh Jaidev Iyengar: you can use this thing.
Anurag Rastogi: single.
Vrajesh Jaidev Iyengar: There is a success factors table available in train that is basically our employee
Anurag Rastogi: Okay.
Vrajesh Jaidev Iyengar: information. I'm not 100% sure but at least email and that is a success factors replica.
Anurag Rastogi: So email id was able to fetch same from
Vrajesh Jaidev Iyengar: So check I'll do one thing I'll just give me
Anurag Rastogi: sa
Vrajesh Jaidev Iyengar: two minutes actually this call I'll ping you on that you need the cam person's email ID somehow no
Anurag Rastogi: not email ID. I need the number.
Vrajesh Jaidev Iyengar: sorry number otherwise worst case you can send
Anurag Rastogi: Yeah.
Vrajesh Jaidev Iyengar: out a form and ask everyone to just dump their numbers this for now but I think the success factors route will be better.
Anurag Rastogi: Uh ticket and here I have a bunch of functionalities as well but uh let's
 
 
00:17:23
 
Vrajesh Jaidev Iyengar: So tell me the flow overall merchant merch like what we are proposing is merchant completes their onboarding with razor
Anurag Rastogi: see.
Vrajesh Jaidev Iyengar: pay once they and then when do they like how do how are they given this WhatsApp link like do we send it to them on WhatsApp only or do they see like a pop-up on the dashboard saying that click this to join a WhatsApp group and then they
Anurag Rastogi: So I I'll tell you the process right.
Vrajesh Jaidev Iyengar: go
Anurag Rastogi: Um so first of all test sandbox right this a sandbox test setup um uh al also all the group creation is not automated we have to think it through since we need needed to create
Vrajesh Jaidev Iyengar: Okay.
Anurag Rastogi: a set of groups only functionality upload so it'll start creating groups maybe I'll I'll add a template as
Vrajesh Jaidev Iyengar: Okay. This is the link creation. This is the group link creation. And then it'll the group will only be found when the merchant clicks on this link.
Anurag Rastogi: Right.
 
 
00:18:16
 
Anurag Rastogi: Right. So, okay, let me just show you uh box create first group. message send. Cool. I got a message. I'll I'll show you. So, yeah,
Vrajesh Jaidev Iyengar: Huh?
Anurag Rastogi: group first of all like whatever like whenever you whenever we create a group only group gets created like how how you on WhatsApp you do it, right? One group created and then you add participants to it.
Vrajesh Jaidev Iyengar: Uh-huh. So, the group will be created with one participant already in it, right? the group creator that will be our VRM whatever number has been given to
Anurag Rastogi: Yes.
Vrajesh Jaidev Iyengar: it.
Anurag Rastogi: Yes. Let me just
Vrajesh Jaidev Iyengar: Two people need to join one cam and one uh human one
Anurag Rastogi: H correct. So Abina I've got a template but uh it's uh without the
Vrajesh Jaidev Iyengar: merchant.
Anurag Rastogi: invite link. So I'll show you this one. Right.
Vrajesh Jaidev Iyengar: Huh?
Anurag Rastogi: So this is how uh the message will come along with it join link and along with the company name.
 
 
00:19:38
 
Vrajesh Jaidev Iyengar: Uh this will be sent to the this is a
Anurag Rastogi: Ha ha
Vrajesh Jaidev Iyengar: DM.
Anurag Rastogi: correct.
Vrajesh Jaidev Iyengar: Hi company name your WhatsApp group is ready. Click here to join. So this so the merchant never needs to log into the dashboard or do anything of that sort. GTM see the
Anurag Rastogi: Exactly. Exactly. Join link. Join link.
Vrajesh Jaidev Iyengar: WhatsApp.
Anurag Rastogi: click and uh he'll he'll get joined to this group uh which is supposedly this right native because uh I've logged in as a link but WhatsApp they'll get an option directly to join this uh also approval mode admin must approve your request so What generally happens that
Vrajesh Jaidev Iyengar: Huh?
Anurag Rastogi: u uh yeah u this link can be shared with anyone right and you don't want too many people to join in that group so
Vrajesh Jaidev Iyengar: Huh?
Anurag Rastogi: it also has a an approval mode you auto approve uh everyone to join or otherwise you guard trail it with you know approvals which come to this platform uh like here
 
 
00:20:58
 
Vrajesh Jaidev Iyengar: Can you also by default create make someone an admin like can I can I
Anurag Rastogi: uh yeah after the person joins
Vrajesh Jaidev Iyengar: or that will need to happen after the person joins the group.
Anurag Rastogi: and I don't think there's an end point for uh changing admins so this will be the admin uh this but but currently on WhatsApp you can invite people to join the group without having permissions
Vrajesh Jaidev Iyengar: invites I'm just thinking of the non-manual parts. Okay. Whenever I'm saying anything,
Anurag Rastogi: Mhm.
Vrajesh Jaidev Iyengar: can this be automated? You'll take it to 10 to 100 to 10,000 that stages.
Anurag Rastogi: So see this is what you can see right on the screen actions like whatever phone number of the merchant we have selected
Vrajesh Jaidev Iyengar: Correct.
Anurag Rastogi: or is in the DB it can be multiple phone numbers you auto approve them request it fetches the DB and checks that if the merchant uh phone muncher's phone number exist auto in case Not then probably you go ahead and give cams feasibility to prove
 
 
00:22:10
 
Vrajesh Jaidev Iyengar: Fair is one question.
Anurag Rastogi: it.
Vrajesh Jaidev Iyengar: So M interfacing so you had initially mentioned that polling thing right I'm guessing so how does it work like who so message comes in on the group from the merchant so are we listening like to mcarbon constantly or does mcarbon hit an API hit a web hook on our end
Anurag Rastogi: Yeah,
Vrajesh Jaidev Iyengar: when it creates a
Anurag Rastogi: so I'll show you maybe here if it works. Let me log in a second.
Vrajesh Jaidev Iyengar: also
Anurag Rastogi: I I'll just show you this part. Ah,
Vrajesh Jaidev Iyengar: because I think the uh ENV files won't get pushed to the
Anurag Rastogi: sure. Right.
Vrajesh Jaidev Iyengar: repo.
Anurag Rastogi: Uh okay. So yeah, this admin webbook management. So these are the two web hooks I've added. Delivery URL or event URL, right? Uh this may be so again there's no authentication which is
Vrajesh Jaidev Iyengar: Okay.
Anurag Rastogi: happening. Uh I'll set up an O as well here.
 
 
00:23:24
 
Anurag Rastogi: I have already placed the request. Right. Uh second is uh uh so yeah uh is this end point hit and we fetch the data right
Vrajesh Jaidev Iyengar: Okay. Okay. So, wait. Sorry.
Anurag Rastogi: uh
Vrajesh Jaidev Iyengar: Uh, this is a WhatsApp. So, this is our WhatsApp endpoint.
Anurag Rastogi: yeah not WhatsApp endpoint this is our apps endpoint
Vrajesh Jaidev Iyengar: Okay. So, our huh? So, every time WhatsApp receives I mean M Carbon receives a message from the merchant on that group, it'll trigger the event event endpoint or the delivery end point
Anurag Rastogi: event endpoint.
Vrajesh Jaidev Iyengar: delivery.
Anurag Rastogi: Delivery is when we are sending something like how red receipts generally work like you send something uh and update
Vrajesh Jaidev Iyengar: When
Anurag Rastogi: URL or you
Vrajesh Jaidev Iyengar: Got it, got it. Got it.
Anurag Rastogi: know
Vrajesh Jaidev Iyengar: So when when the VRM sends a message to the merchant, if the merchant has received the message, read the message delivered statuses call back happens to this URL.
 
 
00:24:28
 
Vrajesh Jaidev Iyengar: the delivery.
Anurag Rastogi: Right. Right.
Vrajesh Jaidev Iyengar: Take a
Anurag Rastogi: Uh you there are templates which you can uh get
Vrajesh Jaidev Iyengar: fair
Anurag Rastogi: approved to see template here right like this is a welcome onboarding template. Welcome to dedicated Razer Bay group support. This group helps you has two ways to help you AI assistant and then cam. So we are tagging cam here with add the rate and you will also receive proactive updates on settlement confirmation and delays important raer pay notification to get started just type your question here.
Vrajesh Jaidev Iyengar: check.
Anurag Rastogi: So this is like how the configuration is is done broadly.
Vrajesh Jaidev Iyengar: Okay, this whole thing prog.mobi is the mcarbon
Anurag Rastogi: Yes.
Vrajesh Jaidev Iyengar: portal.
Anurag Rastogi: Yes. I'll share.
Vrajesh Jaidev Iyengar: It's
Anurag Rastogi: Yeah. Right.
Vrajesh Jaidev Iyengar: not.
Anurag Rastogi: So see platform wise though it's it's there credentials. So that piece was not tested end to end. Uh so I I I'm currently in a process to you know test it on a sandbox mode because I can override my phone number from merchants's phone number.
 
 
00:25:47
 
Vrajesh Jaidev Iyengar: Huh?
Anurag Rastogi: Uh I need to test it out on a real like an actual mid as well. Merchant phone number is same as uh you know what's there and link. So that piece can be tested as well.
Vrajesh Jaidev Iyengar: Chica,
Anurag Rastogi: So yeah that that is one of the blocker if you if you have an MI like that will really help.
Vrajesh Jaidev Iyengar: I need to find one.
Anurag Rastogi: or ticket creation API but the the catch is that it creates ticket from my fresh test account credentials to be it's okay we we can align Ankit gar team but going forward I think you would need a dedicated API for this for uh ticket
Vrajesh Jaidev Iyengar: or a dedicated API for um we
Anurag Rastogi: creation Press
Vrajesh Jaidev Iyengar: can use the same flow. See honestly the whole reactive bit now I will be reusing uh agentic back end because
Anurag Rastogi: description.
Vrajesh Jaidev Iyengar: they have managed ticket creation, ticket updates, ticket reading, uh autoc closing tickets and everything though and in fact like a lot of the reactive engine code that you have written for you know guard rails and stuff it already has and they have already built this they just need to take it to prod like they'll start testing probably this week itself
 
 
00:27:16
 
Anurag Rastogi: I
Vrajesh Jaidev Iyengar: already it is ready to go to pro demos. So once that happens, I will just be sending in the input like the message.
Anurag Rastogi: got
Vrajesh Jaidev Iyengar: It has a way to store context also for up to 30 minutes. Logic I'll just like double click on once with them to see 30 minutes versus X number of messages or should I just send like 20 previous messages along with the current message uh for them
Anurag Rastogi: How I do my in the context of the last 10 messages what what's happening what's been chatting
Vrajesh Jaidev Iyengar: to
Anurag Rastogi: about uh to LLM and uh along with that so move from reject matching to intentbased cloud uh setup to cl interactions summary and uh it it auto kind of
Vrajesh Jaidev Iyengar: Huh?
Anurag Rastogi: creates like it auto defines that context
Vrajesh Jaidev Iyengar: I would suggest just make like the bare minimum that you need for your 10 10 merchants
Anurag Rastogi: Sure.
Vrajesh Jaidev Iyengar: P success, you know. Beyond that cookie they have built it in a robust way.
 
 
00:28:20
 
Vrajesh Jaidev Iyengar: I would want to just integrate with that. So I will I will be scrapping the guard logic and skills. I think
Anurag Rastogi: Sure.
Vrajesh Jaidev Iyengar: bar.
Anurag Rastogi: Just one more check. I I have another one.
Vrajesh Jaidev Iyengar: Huh?
Anurag Rastogi: agent piece I I what what I was able to see
Vrajesh Jaidev Iyengar: Huh?
Anurag Rastogi: from Pratul when when he were demonstrating it but but
Vrajesh Jaidev Iyengar: H.
Anurag Rastogi: is it also fetching the data?
Vrajesh Jaidev Iyengar: Sorry.
Anurag Rastogi: Is it also so fetching the data as well?
Vrajesh Jaidev Iyengar: it is fetching the data. So it is basically dashboard it will be a similar sort of interface right merchant instead of it being a WhatsApp based channel it'll be a dashboard based channel the brain will do everything that we are also trying to do with the reactive bit ticket information but even action on things like
Anurag Rastogi: Watch out.
Vrajesh Jaidev Iyengar: settlement information bits not actionable informationational bits and then to one level they want to also make it do RCS because their metric itself is service volume reduction so they will try to action upon like information
Anurag Rastogi: Makes
Vrajesh Jaidev Iyengar: provide which will lead to no tickets getting created.
Anurag Rastogi: sense. Cool. Then we'll share the credentials with you as well. Take care. Sure.
 
 
Transcription ended after 00:30:14


This editable transcript was computer generated and might contain errors. People can also change the text after it was created.
