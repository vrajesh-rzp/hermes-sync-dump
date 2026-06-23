---
title: "Sprint Planning - Growth"
type: meeting
date: 2026-06-08
tags: [meeting, gemini-recording]
gemini_doc_id: 1nyQ_xHvNZRjJ0MnlJEGxdZAgbSW9tZ6hydM0p07T6CY
---

# Sprint Planning - Growth


**Date:** 2026-06-08
**Source:** Gemini recording ([Google Doc](https://docs.google.com/document/d/1nyQ_xHvNZRjJ0MnlJEGxdZAgbSW9tZ6hydM0p07T6CY/edit))

---

## Summary

﻿📝 Notes
Mar 3, 2026
Sprint Planning - Growth 
Invited purav.s@razorpay.com Satyam Mishra Nikhil Uday Khadilkar Jasbindar Singh Susheela Choudry Satvik Namrata Khandelwal Laksh Sadhwani Vinil Sanjay Vasani Vrajesh Jaidev Iyengar Aditya Mohan Gupta Tushar Saxena Suhas More Kadambary Diwan Shubham Choudhary
Attachments Sprint Planning - Growth  
Meeting records Transcript 

Summary
Performance improvements prioritized for international homepage, payments onboard migration completed, and Smart Assist evaluation efforts initiated.

Performance and Page Migration
A new international homepage solution was proposed to address performance issues for international users, along with a plan to apply image prefetching learnings to LCP failures on the support and GST search pages. The payments onboard page migration to the Framer framework is complete on the design side, with engineering work remaining to push the new page live.

Technical Debt and Prioritization
The required Node version upgrade to 18.2, and subsequently 22, was deemed too large for the current team to handle due to extensive testing requirements. The decision was made to request another team to take ownership of the Node upgrade, focusing current bandwidth on critical tasks like logging and tracing for better debugging.

Growth and Sign-up Strategy
The immediate objective is to increase sign-ups via 3 to 4 intent flow experiments. Smart Assist requires urgent evaluation concerning cost, scalability, and reliability before further development investment, with initial analysis suggested before benchmarking against Smart Info.

Rate this Summary: Helpful or Not Helpful

Details
Decisions
Rate these decisions: Helpful or Not Helpful

NEEDS FURTHER DISCUSSION
* Upgrade Testing vs. Logging Priority A decision is needed regarding whether upgrade testing or logging/tracing should be prioritized in the current sprint, given the limited engineering bandwidth.

ALIGNED
* Node Version Upgrade Delegation The node version upgrade effort (to 18.2/22) will be delegated to the owning team, as the magnitude of work and associated testing exceeds current capacity.
* Smart Assist Evaluation Process Defined The Smart Assist improvement process will focus on evaluating platform options, optimizing conversion rates, improving prompts, and documenting the final platform choice based on cost, scalability, reliability, and GTM speed in a one-pager.
* LinkedIn Data Scraping Script A simple script running at 3 or 6-hour intervals will be implemented to scrape LinkedIn for HQL data to start producing leads prior to full model development.
* Short-Term Webhook Idempotency Fix One to two days will be allocated to implement the short-term idempotency fix for web hook events.
* Integrate Segment for Mo Engage Events Segment needs to be integrated into the growth service to facilitate the flow of events to Mo Engage.
* Reliability Findings PS Thread Communications and follow-up regarding reliability findings (related t

---

## Full Notes

﻿📝 Notes
Mar 3, 2026
Sprint Planning - Growth 
Invited purav.s@razorpay.com Satyam Mishra Nikhil Uday Khadilkar Jasbindar Singh Susheela Choudry Satvik Namrata Khandelwal Laksh Sadhwani Vinil Sanjay Vasani Vrajesh Jaidev Iyengar Aditya Mohan Gupta Tushar Saxena Suhas More Kadambary Diwan Shubham Choudhary
Attachments Sprint Planning - Growth  
Meeting records Transcript 


Summary
Performance improvements prioritized for international homepage, payments onboard migration completed, and Smart Assist evaluation efforts initiated.

Performance and Page Migration
A new international homepage solution was proposed to address performance issues for international users, along with a plan to apply image prefetching learnings to LCP failures on the support and GST search pages. The payments onboard page migration to the Framer framework is complete on the design side, with engineering work remaining to push the new page live.

Technical Debt and Prioritization
The required Node version upgrade to 18.2, and subsequently 22, was deemed too large for the current team to handle due to extensive testing requirements. The decision was made to request another team to take ownership of the Node upgrade, focusing current bandwidth on critical tasks like logging and tracing for better debugging.

Growth and Sign-up Strategy
The immediate objective is to increase sign-ups via 3 to 4 intent flow experiments. Smart Assist requires urgent evaluation concerning cost, scalability, and reliability before further development investment, with initial analysis suggested before benchmarking against Smart Info.


Rate this Summary: Helpful or Not Helpful


Details
Decisions
Rate these decisions: Helpful or Not Helpful


NEEDS FURTHER DISCUSSION
* Upgrade Testing vs. Logging Priority A decision is needed regarding whether upgrade testing or logging/tracing should be prioritized in the current sprint, given the limited engineering bandwidth.


ALIGNED
* Node Version Upgrade Delegation The node version upgrade effort (to 18.2/22) will be delegated to the owning team, as the magnitude of work and associated testing exceeds current capacity.
* Smart Assist Evaluation Process Defined The Smart Assist improvement process will focus on evaluating platform options, optimizing conversion rates, improving prompts, and documenting the final platform choice based on cost, scalability, reliability, and GTM speed in a one-pager.
* LinkedIn Data Scraping Script A simple script running at 3 or 6-hour intervals will be implemented to scrape LinkedIn for HQL data to start producing leads prior to full model development.
* Short-Term Webhook Idempotency Fix One to two days will be allocated to implement the short-term idempotency fix for web hook events.
* Integrate Segment for Mo Engage Events Segment needs to be integrated into the growth service to facilitate the flow of events to Mo Engage.
* Reliability Findings PS Thread Communications and follow-up regarding reliability findings (related to subscription money saved) must be kept on the existing PS thread.
* Schedule Response Tracking Process Tracking must be maintained to ensure the team is responding regarding schedules not getting picked up to prevent an increase in PSC tickets.
* Sales and Smartest Agent Dropped Focus on the sales agent and the smartest agent must be dropped from current development and documentation.
* Workflow Site Map Low Priority The low-priority workflow site map item must be addressed asynchronously when idle time is available.
* Aditya Assigned Tracing/Logging Aditya is assigned the task of implementing tracing and logging for 3 to 4 days to gain backend experience.
* P0 Subscription Flow Logging Priority Prioritization of fixing logging tasks for P0 subscription flows will occur next week.


SHELVED
* AI Calling Initiative Shelved The AI calling initiative is deprioritized until the last week of March due to a lack of clarity.


More details:
* International Homepage Solution: The team discussed introducing a new page as a better solution for performance issues related to the homepage, especially for international users. The proposal is to render a different homepage specifically for international interactions, including all related specific configurations (00:00:00).
* Upcoming Leave and Task Coverage: Nikhil Uday Khadilkar is scheduled to be on leave the following week, Monday through Thursday. Kadambary Diwan intends to take ownership of the testing, resolving, and commencing processes, even if someone else picks up the initial task (00:03:51).
* Sales Agent Experiments and Events: Sales agent experiments require data points for intent identification and events not moving to subscription, as well as more engagement events (00:03:51). Nikhil Uday Khadilkar suggested that Kadambary Diwan can swap with Ankit Songara this sprint, as she will be working on the growth events (00:05:40).
* Upgrade Fix and Sprint Planning: The upgrade fix is estimated to require about one week of effort (00:00:00). Kadambary Diwan noted that the sprint planning is fixed, and they might address the upgrade fix during the sprint if they find time, otherwise it will be tackled at the end of the sprint (00:08:06).
* Payments Onboard and Framer Migration: The design team is currently working on migrating the payments onboard page to the Framer framework (00:08:06). Vrajesh Jaidev Iyengar confirmed that most changes have been completed by the design team, and the remaining engineering effort is to make the new page live and replace the current page (00:08:06).
* Performance Improvement Targets: With the payments onboard page being excluded from immediate performance tasks, the focus shifts to improving the support and GST number search pages, where the only failure is the Largest Contentful Paint (LCP). The suggested action items include applying learnings from the homepage optimization, such as image prefetching and text placement on top, to address LCP issues on the support and GST number search pages (00:10:17).
* Framer Page Debugging and Analytics Culprit: Framer pages were discussed, and Vinil Sanjay Vasani will take the lead on debugging Input Next Paint (INP) issues, leveraging insights from the Framer team (00:10:17). Preliminary analysis suggests that the razor analytics script is the likely culprit for performance issues on framework pages (00:13:45).
* Targeting High-Traffic Pages for Performance Fixes: The team is targeting performance improvements for the GST search and support pages, which are high-traffic pages, with support being the second or third most popular page. An issue with the IFC page in the web view was also noted, showing a spike in issues since the 13th of the month (00:15:16).
* Node Version Upgrade and Project Ownership: The team discussed the required Node version upgrade to 18.2, and subsequently to version 22. It was decided that the magnitude of the work, including testing, was greater than anticipated, and the team should call this out and request someone else to take on the upgrade (00:18:25).
* UTM Parameter and Cookie Optimization Issues: The need for a Node upgrade is linked to a required change in a UTM parameter for the universal utils tool, which is necessary to prevent breakage in the marketing lead funnel (00:19:56). The UTM parameter issue is a side effect of optimizing the overall cookie limit, where existing cookie keys were renamed or removed to make space for a new cookie (00:21:52).
* Upgrade Effort Estimation and Prioritization: The total estimation for the Node upgrade, including updating workflows, lambdas, and testing, needs clarification, and the team agreed to call out that the work is too large for them to take on (00:24:26). If the effort is found to be smaller, they might prioritize it later, otherwise, they will push back (00:26:46).
* Manual Midpoint Trigger and CRM/CMS Clarification: Vinil Sanjay Vasani is working on configurable keys per project, which is estimated to be a one-day task with an additional day for testing, totaling 2.5 points (00:29:04). The team confirmed that the midpoint manual process will be triggered by the GitHub app, but testing is required. Vrajesh Jaidev Iyengar clarified that a previous discussion was related to the CMS framework, not CRM (00:30:26).
* Sign-up Conversion Experiments and Smart Assist Evaluation: The immediate objective is to increase sign-ups, which will be pursued by running three to four experiments using the intent flow. The team needs to prioritize the evaluation of platforms like Smart Assist, considering factors like cost, scalability, and reliability, before investing in further development (00:31:53).
* Improving Smart Assist and Documentation Focus: Smart Assist currently focuses only on product discovery and is not effectively converting leads (00:33:39). The team plans to improve Smart Assist to facilitate sign-ups and product pitching, possibly with a different full-screen user interface, and the key focus should be on documenting the reasoning for platform choices (00:31:53).
* Smart Assist Benchmarking and Analysis: The team needs to conduct benchmarking between Smart Assist and Smart Info (00:35:28). Suhas More suggested that analysis, which is not a large task, should be implemented before benchmarking, as fixing issues first would make the benchmarking more meaningful (00:39:53).
* AI Calling Deprioritization and SDK Migration: The AI calling initiative is being deprioritized for now due to a lack of clarity, but it might be revisited in the last week of March. Satvik joined the discussion to follow up on an SDK migration, confirming they will assess the effort and provide an update (00:37:52).
* HQ Lead Data Collection Strategy: The team needs a way to acquire data for HQ leads beyond funding status, as many non-funded companies are being missed (00:41:30). They decided to focus on using LinkedIn data first and plan to run a simple script at intervals (e.g., 3 or 6 hours) to start producing leads (00:43:33).
* LinkedIn API Cost and Timeline for Model Deployment: The next step involves checking if a paid LinkedIn API is required, determining the cost, and aligning this with the marketing team (00:43:33). The team will confirm the timelines for deploying the new model with the relevant person to begin initial testing and metric tracking once leads are generated (00:44:53).
* Short-Term Fixes for Webhook Events: The team needs to implement a short-term fix for Kadambary Diwan's web hook event fixes, specifically addressing idempotency to prevent multiple mail-sending consequences and entries (00:44:53). The long-term solution involves defining failsafe mechanisms if the workflow processing the events fails (00:46:20).
* Prioritizing Logging and Tracing: Given the limited bandwidth, the team discussed whether to prioritize the upgrade testing or logging, with an agreement that logging will help with other things (00:47:50). Implementing logging and tracing, which is estimated as a half-day effort but with required testing, is considered a crucial task, as current deep-level logs are inadequate for debugging (00:49:23).
* Segment Integration for Event Flow: The team needs to address the flow of events to MoEngage, which currently involves segmenting the data. The solution may involve integrating Segment directly with the growth service (00:54:24).
* Event Tracking and Front-End/Back-End Ownership: Many required event changes, such as 'pricing page loaded' and 'annual plan clicked', appear to be covered by front-end modifications (00:54:24). The team discussed the need for backend events like 'payment successful' and 'renewal successful/failure', noting that current system only receives 'activated' or 'failure' (00:56:26).
* Discussion on Subscription Plan Savings and Marketing Communications: The team discussed the difficulty in quantifying money saved due to the subscription plan, but agreed this information is valuable for marketing to increase subscriptions, renewals, reduce churn, or encourage free users to upgrade. Namrata Khandelwal noted that the reliability team has already conducted some findings on this, and they need to follow up. Nikhil Uday Khadilkar advised keeping all communication and follow-up requests regarding this matter on the existing PS thread (00:59:39).
* Handling Development and Tracking of PSC Tickets: Namrata Khandelwal emphasized that while they are not starting any development on the issue of unpicked-up schedules, they need to keep tracking if the responsible people are responding, as unresolved schedule issues could lead to an increase in PSC tickets. Nikhil Uday Khadilkar clarified the context of the issue and suggested that they should spend time fixing current issues, even if the subscription data might have a high priority (01:01:20). Kadambary Diwan agreed to merge all the time they spend on the issue and update Nikhil Uday Khadilkar accordingly (01:03:37).
* Review of Current Development Tasks and Priorities: Nikhil Uday Khadilkar suggested that some individuals could drop the sales agent task, specifically the smartest agent, noting it was not yet added to the documentation. Satyam Mishra mentioned their current tasks include LWD, the Intent page, and the international page, and they confirmed having some bandwidth this Friday (01:03:37). Nikhil Uday Khadilkar suggested they prioritize tasks where they already have some clarity (01:06:51).
* Reliability Items and Debugging Strategy: Vinil Sanjay Vasani raised several reliability items, including closing up universe CL for SSR stages V7, which has a deployment memory leak, and a workflow site map workflow item. Nikhil Uday Khadilkar suggested they look at these items together but noted that the workflow site map might not be a priority, though it could help with backend testing and analyzing alerts (01:06:51). They agreed that adding tracing and logging to the backend flows, which can take three to four days, is a good idea to gain better experience and insight (01:08:41).
* Focusing on Growth Flows and Prioritization: The team discussed the need to add correct logs to the "growth flows" to gain a better understanding of the backend processes that handle subscriptions and benefits. Aditya Mohan Gupta confirmed that logs are already added in some P0 flows, and the group needs to look into the existing logs and tasks. Nikhil Uday Khadilkar concluded that they can prioritize the logging task next week after looking at which actions will have the best impact (01:11:22).
* Resolving Technical Access for Slack and GitHub Integration: The team discussed how to handle Slack processing and connecting with the application, noting that one option is to use a Cloudflare worker tied to the platform growth account, not a personal account, for processing (01:13:12). Nikhil Uday Khadilkar also mentioned a GitHub app that interfaces with their repo, which creates and dissolves temporary components. Vinil Sanjay Vasani confirmed they have access to the bot, which is tied to the reserve account, and Nikhil Uday Khadilkar agreed that Vinil Sanjay Vasani can create the Slack app themself (01:16:37).


Suggested next steps
* [Kadambary Diwan] Resolve Upgrade Fix: Handle commence resolve and testing for the 1 week upgrade fix effort.
* [Kadambary Diwan] Swap Task: Swap Growth Events tasks with Ankit Songara for the current sprint.
* [Vinil Sanjay Vasani] Improve Page Performance: Improve support and GST number search pages. Apply homepage learnings (image upload, prefetch, text).
* [Vinil Sanjay Vasani] Debug Framer INP: Debug INP insights for framework pages. Utilize context from framework team discussions.
* [Vinil Sanjay Vasani, Jasbindar Singh] Analyze Mobile Analytics: Conduct a deep dive on Razer analytics mobile behavior. Define subsequent action items.
* [Vrajesh Jaidev Iyengar] Document Platform Evaluation: Document Smart Assist platform evaluation in a one-pager. Detail selection reasons (cost, scalability, reliability, features).
* [Namrata Khandelwal] Check API Cost: Check paid API cost for scraping 500-600 data points. Add details today; align with Marketing Team.
* [Namrata Khandelwal] Implement Idempotency Fix: Implement the short-term idempotency fix for web hook events during the current sprint.
* [Namrata Khandelwal] Implement Tracing Logs: Implement server/service level tracing and logging for meaningful output. Plan this week-long task.
* [Ankit Songara] Ask About MoEngage Flow: Ask the relevant team about the proposed MoEngage event flow task.
* [The group] Integrate Segment: Integrate Segment into the Growth service architecture. Ensure required events flow to MoEngage.
* [Namrata Khandelwal] Follow PS Thread: Respond on the PS thread; keep all communication consolidated. Track responses regarding schedules not getting picked up.
* [Kadambary Diwan] Update Time: Merge all time. Update Nikhil Uday Khadilkar accordingly.
* [Satyam Mishra] Update Documentation: Add the sales agent or smartest agent to the documentation flow.
* [Aditya Mohan Gupta] Implement Logging: Add correct logs to P0 flows for better clarity. Focus work on subscription creation and benefit flows.
* [Vinil Sanjay Vasani] Create Cloudflare Worker: Log into the platform growth account. Create a Cloudflare worker for necessary processing.
* [Vinil Sanjay Vasani] Create Slack App: Create a new Slack application independently.


You should review Gemini's notes to make sure they're accurate. Get tips and learn how Gemini takes notes
Please provide feedback about using Gemini to take notes in a short survey.
📖 Transcript
Mar 3, 2026
Sprint Planning - Growth  - Transcript
00:00:00
 
Nikhil Uday Khadilkar: Yeah, can you
Vrajesh Jaidev Iyengar: I'll just
Nikhil Uday Khadilkar: just
Vrajesh Jaidev Iyengar: check
Nikhil Uday Khadilkar: I might have missed some. What we had told her was there is one better solution.
Vrajesh Jaidev Iyengar: I don't remember
Nikhil Uday Khadilkar: for us and outside because of the
Vrajesh Jaidev Iyengar: home page.
Nikhil Uday Khadilkar: uh performance it that it was giving she was saying we can actually introduce a new page
Vrajesh Jaidev Iyengar: Okay.
Nikhil Uday Khadilkar: only I don't think that they will have so that international We render a different homepage only with all specific things related to interaction
Vrajesh Jaidev Iyengar: I'll cut something.
Nikhil Uday Khadilkar: only.
Vrajesh Jaidev Iyengar: Um, the wall
Nikhil Uday Khadilkar: Yeah, I think uh
Kadambary Diwan: Mhm.
Nikhil Uday Khadilkar: leaves.
Vrajesh Jaidev Iyengar: Thank you.
Kadambary Diwan: Emergency shed.
Nikhil Uday Khadilkar: uh I think in your case I think around one week type effort they're also saying upgrade fix is there
Kadambary Diwan: Okay.
Nikhil Uday Khadilkar: Uh
Kadambary Diwan: But at least we have idea.
Nikhil Uday Khadilkar: go instead of basically let someone else picking picking it
 
 
00:03:51
 
Kadambary Diwan: No, no.
Nikhil Uday Khadilkar: up.
Kadambary Diwan: I I'm thinking maybe someone can pick, but I'm thinking
Nikhil Uday Khadilkar: Okay.
Kadambary Diwan: commence resolve and everything testing I would take on my
Nikhil Uday Khadilkar: Got it.
Kadambary Diwan: own
Nikhil Uday Khadilkar: Put it on your name only. I think I think other some people are there. I think second we pending again. I think mostly I think Amrad is joining a little bit late. Um SA I think is uh leaves. I'll be on leave I think next week Monday to Thursday I'll
Kadambary Diwan: Yeah. Share.
Nikhil Uday Khadilkar: just yeah in the meantime
Vrajesh Jaidev Iyengar: Okay.
Nikhil Uday Khadilkar: which might have missed
Vrajesh Jaidev Iyengar: Discussion sales agent three experiments. There was a intent identification HQite I think data points which was not able to fetch
Nikhil Uday Khadilkar: Correct.
Vrajesh Jaidev Iyengar: right
Nikhil Uday Khadilkar: I think apart from this event they needed events not moving subscription
Vrajesh Jaidev Iyengar: more engage as well.
Nikhil Uday Khadilkar: events.
 
 
00:05:40
 
Nikhil Uday Khadilkar: They want us to basically send those events. Uh events I think I
Vrajesh Jaidev Iyengar: Okay,
Nikhil Uday Khadilkar: think I'm not sure. I think
Vrajesh Jaidev Iyengar: this is How many are done?
Nikhil Uday Khadilkar: between you and between you
Kadambary Diwan: Neighbor
Nikhil Uday Khadilkar: and
Kadambary Diwan: last
Nikhil Uday Khadilkar: was there last week not experience
Kadambary Diwan: experience. M.
Nikhil Uday Khadilkar: the back end growth back
Kadambary Diwan: Okay.
Nikhil Uday Khadilkar: I think that you can swap with
Kadambary Diwan: Okay. multiple
Nikhil Uday Khadilkar: experience which is why I'll remove this
Kadambary Diwan: threads.
Nikhil Uday Khadilkar: only from April onwards but this is specific to
Kadambary Diwan: Okay.
Nikhil Uday Khadilkar: growth events. So uh you can swap with Ankit.
Kadambary Diwan: Mhm.
Nikhil Uday Khadilkar: I think this time
Kadambary Diwan: Sure.
Nikhil Uday Khadilkar: this sprint cut you are there but Ankit basically we can swap because you'll be working on
Kadambary Diwan: I cannot handle now on call.
Nikhil Uday Khadilkar: hopefully now but yeah but in any case sure better swap anything that we should include.
 
 
00:08:06
 
Nikhil Uday Khadilkar: They not flowing properly.
Kadambary Diwan: Plus, I mean This might be cancel.
Nikhil Uday Khadilkar: got it sprint planning anyway that is fixed
Kadambary Diwan: Mhm.
Nikhil Uday Khadilkar: right
Kadambary Diwan: Yes.
Nikhil Uday Khadilkar: I think I think week and probably Monday you'll be busy and upgrade if you get time otherwise at the end of the sprint I'm just putting it here so that because you'll have couple of days once upgrade is done I think uh K you can drop then if you have calls with that uh the onboarding team you can Uh yeah, performance case. What all we should look at basically
Vinil Sanjay Vasani: majorly pages whatever was doing right before reliability
Nikhil Uday Khadilkar: now
Vinil Sanjay Vasani: week where we just need to look at LCP for one second I'll just quickly share that sheet yeah so payments on board we are not moving it to framer as of right now
Nikhil Uday Khadilkar: payments onward already. I think the design team is working to move it on framework. I think uh Rajes are you there?
 
 
00:10:17
 
Nikhil Uday Khadilkar: Huh? But more move once the dish
Vrajesh Jaidev Iyengar: Sorry,
Vinil Sanjay Vasani: We know
Vrajesh Jaidev Iyengar: I was talking on mute.
Nikhil Uday Khadilkar: Hello.
Vrajesh Jaidev Iyengar: Sorry. I was saying go has made most of the changes. I wanted to know engineering effort is to make that page live and replace this current page.
Nikhil Uday Khadilkar: I
Vrajesh Jaidev Iyengar: Huh.
Nikhil Uday Khadilkar: think
Vrajesh Jaidev Iyengar: Uh I think redirect to the USL page. Huh? Redirect with query parameters sets.
Nikhil Uday Khadilkar: uh just do you have context we can directly set as a link
Vrajesh Jaidev Iyengar: There is an email id and a phone number or something. So once the user enters and clicks on sign up redirect with intent equal to sign up
Jasbindar Singh: I
Vrajesh Jaidev Iyengar: and that email id present in the URL
Jasbindar Singh: usmail.
Vrajesh Jaidev Iyengar: set
Nikhil Uday Khadilkar: We can pick up actually.
Jasbindar Singh: Then I figured out
Nikhil Uday Khadilkar: Ah, best makes sense that that anyway very easy only
 
 
00:11:51
 
Vrajesh Jaidev Iyengar: Huh?
Nikhil Uday Khadilkar: um
Vinil Sanjay Vasani: So if payment onboard is out of the picture uh then we need to
Nikhil Uday Khadilkar: taken
Vinil Sanjay Vasani: improve support and uh GST number search page. So support the only thing failing is uh LCP and uh GST number search inputs failing know we can apply learnings that we had on the homepage check how the image is coming upload it preetch it text
Nikhil Uday Khadilkar: Yeah, question
Vinil Sanjay Vasani: to
Nikhil Uday Khadilkar: top on framework.
Vinil Sanjay Vasani: now.
Nikhil Uday Khadilkar: All of them are will they be in green? If not, what what what all things we need to do as action or some other things that we need to do.
Vinil Sanjay Vasani: pages. Let's have some time for Jasper since he had already started working on it and him and I we were
Nikhil Uday Khadilkar: Take
Vinil Sanjay Vasani: debugging SR pages also.
Nikhil Uday Khadilkar: got
Vrajesh Jaidev Iyengar: Morning.
Vinil Sanjay Vasani: uh action item for support and GST number search and then we also need to for framework pages framework pages we had insights from uh framer team on inp debugging to let's let let me take that up since I'm already talking to framer so context that how do we go about it so I should be able to wrap it up fairly
 
 
00:13:45
 
Nikhil Uday Khadilkar: Yeah.
Vinil Sanjay Vasani: quickly so Another task.
Nikhil Uday Khadilkar: I know. How much are we getting currently?
Vrajesh Jaidev Iyengar: That's what
Nikhil Uday Khadilkar: At least if anything comes,
Vrajesh Jaidev Iyengar: we
Nikhil Uday Khadilkar: we'll have to anyway prioritize. I don't
Jasbindar Singh: See the
Nikhil Uday Khadilkar: think
Jasbindar Singh: there.
Nikhil Uday Khadilkar: had you started then you can only pick continue on it we can basically in do one thing pages plus top 10 top five top
Jasbindar Singh: So,
Nikhil Uday Khadilkar: five favorite pages apart from homepage there
Vrajesh Jaidev Iyengar: Yeah.
Nikhil Uday Khadilkar: are some issues on these five pages So basically green for mobile.
Vrajesh Jaidev Iyengar: Yeah.
Vinil Sanjay Vasani: So
Jasbindar Singh: Keep
Vinil Sanjay Vasani: basically
Nikhil Uday Khadilkar: Okay,
Vinil Sanjay Vasani: so that is something that I had initiated a conversation with framework also uh according to their
Nikhil Uday Khadilkar: got it.
Vinil Sanjay Vasani: analysis it's razor analytics which is the culprit but they've given us access to a
Jasbindar Singh: working.
Vinil Sanjay Vasani: free
Nikhil Uday Khadilkar: Okay.
 
 
00:15:16
 
Vinil Sanjay Vasani: deep improvement like put one story point for me also
Nikhil Uday Khadilkar: Got it.
Vinil Sanjay Vasani: what I'll do is like I'll work with to do a deep dive or like in parallel and then we'll come up with action items on what exactly do we need to do for Razer analytics behavior we only mobile analytics is behaving a little
Nikhil Uday Khadilkar: Okay.
Jasbindar Singh: Goodbye.
Vinil Sanjay Vasani: differently so let's take a
Nikhil Uday Khadilkar: or pages consequent pages. We are targeting two
Vinil Sanjay Vasani: Uh so this GST search
Nikhil Uday Khadilkar: PS
Vinil Sanjay Vasani: and support these are the two
Jasbindar Singh: problem.
Vinil Sanjay Vasani: which
Nikhil Uday Khadilkar: supports
Vinil Sanjay Vasani: are
Nikhil Uday Khadilkar: that also has lot of traffic. It's like second or third only on uh
Vinil Sanjay Vasani: top 10.
Jasbindar Singh: Fine.
Nikhil Uday Khadilkar: I'll just
Vinil Sanjay Vasani: report merchant
Nikhil Uday Khadilkar: report
Vinil Sanjay Vasani: correct? Yes. Yes.
Nikhil Uday Khadilkar: from last 7 10 days.
Jasbindar Singh: Yeah.
Nikhil Uday Khadilkar: Uh it is showing that IFC page that is also showing web view issue.
 
 
00:16:42
 
Vinil Sanjay Vasani: FC
Nikhil Uday Khadilkar: It is there all of them.
Vinil Sanjay Vasani: like oh cumulator
Jasbindar Singh: We want to prevent
Vinil Sanjay Vasani: traffic will be up there you're saying
Nikhil Uday Khadilkar: Uh so it is basically saying from this from I think 13th of
Vinil Sanjay Vasani: Oh.
Nikhil Uday Khadilkar: suddenly
Vinil Sanjay Vasani: Uh, okay. I remember last
Nikhil Uday Khadilkar: it is showing there was no issue. So what we'll do is we'll take a little more time.
Vinil Sanjay Vasani: inpately task because
Suhas More: Hey,
Vinil Sanjay Vasani: input
Nikhil Uday Khadilkar: Huh? What I'm saying is between you and
Suhas More: first of all,
Nikhil Uday Khadilkar: Jasper for top five pages and framework similar learnings that we'll try to see and let's see what we can do.
Vinil Sanjay Vasani: Huh? For sure. Uh and time there are like a few script difference action items also that I have taken up as part of my deep dive. We'll try to squeeze those in as well.
 
 
00:18:25
 
Nikhil Uday Khadilkar: Got it. Uh, do you have any?
Jasbindar Singh: part 11 13 post we need node version upgrade which would be 182 and the major thing
Nikhil Uday Khadilkar: Okay.
Jasbindar Singh: upgrade 22
Nikhil Uday Khadilkar: Got it.
Vinil Sanjay Vasani: So I was discussing this with us.
Jasbindar Singh: Basically,
Nikhil Uday Khadilkar: Um
Vinil Sanjay Vasani: I don't think I'm aligned of we taking this up like let's say if we also raise a PR in dashboard upgrading anything we won't like just raise the PR and tell them that it's
Nikhil Uday Khadilkar: Huh?
Vinil Sanjay Vasani: live everything underneath also like the team
Nikhil Uday Khadilkar: Correct.
Vinil Sanjay Vasani: has
Nikhil Uday Khadilkar: I completely agree.
Jasbindar Singh: Let's
Nikhil Uday Khadilkar: Let's do one thing. Let's call it out. We did a little deep dive. Same thread.
Jasbindar Singh: keep
Nikhil Uday Khadilkar: It is the testing the magnitude of the work is much more than we
Jasbindar Singh: it.
Nikhil Uday Khadilkar: anticipated. We cannot take this up and we if we can get someone from your team basically to get this.
 
 
00:19:56
 
Nikhil Uday Khadilkar: If you want to want me to add it, I can also
Vinil Sanjay Vasani: I
Jasbindar Singh: I have plot code.
Vinil Sanjay Vasani: think something
Nikhil Uday Khadilkar: case. They they should basically we are saying they should take all the upgrades basically. Hello.
Vinil Sanjay Vasani: Yeah, I think we should do
Nikhil Uday Khadilkar: So, uh, one
Vinil Sanjay Vasani: that.
Nikhil Uday Khadilkar: question
Jasbindar Singh: basically universal I don't even think
Nikhil Uday Khadilkar: Okay. Or dependencies which basically
Jasbindar Singh: Okay, take
Vinil Sanjay Vasani: So like I was telling that we can give them support but like we can't drive this
Jasbindar Singh: it.
Vinil Sanjay Vasani: ourselves.
Suhas More: But why they want to upgrade in our
Vinil Sanjay Vasani: Basically there is a change in a UTM parameter for universe util
Suhas More: CLA?
Vinil Sanjay Vasani: consume for sending analytics events. So there is one change in the UTM parameter that they need to do. Uh I think Gashri has done some patch on this thing USL to map that UTM parameter to the correct parameter.
 
 
00:21:52
 
Vinil Sanjay Vasani: If they don't do that marketing is not able to capture the correct leads like there is some breakage in the funnel that is happening as far as I understand.
Suhas More: So this should also impact our team as well,
Vinil Sanjay Vasani: So no like nobody has kind of called this
Suhas More: right?
Vinil Sanjay Vasani: out to us right as far as I am aware. directly.
Suhas More: website conversion they are basically tracking visitor to sign up or ID creation. If this UTM parameter is incorrect we should also I think we should also think about
Jasbindar Singh: Thank you.
Suhas More: prioritizing it but maybe can comment.
Vinil Sanjay Vasani: we can prioritize but I am I'm not aware that's what I'm saying I'm not aware of any impact to us
Suhas More: Got
Vinil Sanjay Vasani: directly
Suhas More: it.
Nikhil Uday Khadilkar: Yeah. Breaking and they have
Suhas More: So recently uh they have optimized cookie size number of cookie params
Nikhil Uday Khadilkar: come.
Suhas More: which we are setting across razor.com and dashboard end to end.
Nikhil Uday Khadilkar: Huh.
 
 
00:22:58
 
Suhas More: Uh so I think in that activity they re renamed few cookie keys removed unnecessary keys to track this one end to end.
Nikhil Uday Khadilkar: Correct. But why is this a requirement for
Suhas More: But
Nikhil Uday Khadilkar: them?
Vinil Sanjay Vasani: So they have done a patch. So as far as I understand, so sorry, correct me if I'm wrong here. As far as I understand, uh that cookie uh which is required to track the funnel by marketing team. So Ashkre is patching this on his end on USL wherein he's just renaming it to the right cookie but he wants to remove that patch from USL and fix it properly from source which is website as of right now.
Suhas More: And this is a side effect of optimizing overall cookie limit because they wanted to make some space for another cookie uh which is required for uh gloing or something. I forgot the context.
Vinil Sanjay Vasani: I talk about it. This I was not aware of.
Nikhil Uday Khadilkar: Uh Arvin is making trying to figure out key what is the what is the action.
 
 
00:24:26
 
Nikhil Uday Khadilkar: Should we take it or should they take it? Exactly. We only have to take it up. If they want to do something for their end, then we we can push them.
Vinil Sanjay Vasani: But we need to understand but as far as I know that
Nikhil Uday Khadilkar: As we in the latest version of we have depreated the cookie. Universe utils may basically uh we have depreated this cookie. I've already discussed with Aspendinder but they are not even able to prioritize it yet. Uh we have deprecated this. Okay. But they put testing effort. Now for this for this estimation.
Vinil Sanjay Vasani: draft that was for CLA or
Jasbindar Singh: Uh,
Vinil Sanjay Vasani: util.
Jasbindar Singh: util
Vinil Sanjay Vasani: Okay.
Nikhil Uday Khadilkar: estimation.
Jasbindar Singh: changes. Changes.
Nikhil Uday Khadilkar: Sorry.
Jasbindar Singh: changes
Nikhil Uday Khadilkar: I'm saying including overall to go get
Jasbindar Singh: upgrade
Nikhil Uday Khadilkar: it live.
Vinil Sanjay Vasani: Do you have any
Jasbindar Singh: all the workflows.
 
 
00:26:46
 
Jasbindar Singh: This may be node upgrade and lambdas also.
Nikhil Uday Khadilkar: Lambda,
Jasbindar Singh: Lambda may be node 18 uh lambda
Nikhil Uday Khadilkar: Lambda Edge
Jasbindar Singh: at ags and deployment also
Nikhil Uday Khadilkar: 2020.
Jasbindar Singh: see what I
Nikhil Uday Khadilkar: What I'm saying is at least number of times I have upgraded node in workflows should be apart from
Jasbindar Singh: Good
Nikhil Uday Khadilkar: workloading.
Jasbindar Singh: changes to there's not much
Nikhil Uday Khadilkar: Got it. So confirm last I remember on
Jasbindar Singh: changes.
Nikhil Uday Khadilkar: lambda.
Suhas More: Correct.
Satvik: Lambda load
Suhas More: Let me check.
Nikhil Uday Khadilkar: Got it.
Satvik: time.
Suhas More: I don't think we can create
Jasbindar Singh: Yeah.
Nikhil Uday Khadilkar: Correct.
Suhas More: a
Nikhil Uday Khadilkar: What I'm saying is we can just come back on this.
Jasbindar Singh: Hello.
Nikhil Uday Khadilkar: Okay. Uh in case if it is smaller will you be able to practice this
Jasbindar Singh: Uh-huh.
Nikhil Uday Khadilkar: effort we'll push back then we'll only take this up maybe
Jasbindar Singh: Sh.
Nikhil Uday Khadilkar: later I think mostly
 
 
00:29:04
 
Jasbindar Singh: Let
Nikhil Uday Khadilkar: is accommodated FTX or if you want drop
Jasbindar Singh: me
Nikhil Uday Khadilkar: off feel free. Uh I think you are on leave also right?
Vinil Sanjay Vasani: So, I want to close this. Uh,
Nikhil Uday Khadilkar: reliability.
Suhas More: What's
Nikhil Uday Khadilkar: Correct.
Vinil Sanjay Vasani: I
Suhas More: that?
Nikhil Uday Khadilkar: We should close
Suhas More: All
Vinil Sanjay Vasani: Yes.
Nikhil Uday Khadilkar: also effort including test.
Vinil Sanjay Vasani: Sorry.
Nikhil Uday Khadilkar: I'm saying we should take some buffer also for testing and taking uh the time from then also but in general what do we
Suhas More: right.
Vinil Sanjay Vasani: Yeah. So majorly
Nikhil Uday Khadilkar: think
Vinil Sanjay Vasani: and configurable keys or for each project. So that is like a one day thing and testing is like I think testing it out will be like a one day thing. So and let's add some buffer. So 2.5
Nikhil Uday Khadilkar: Got it.
Vinil Sanjay Vasani: points
Nikhil Uday Khadilkar: But you're saying actually makes sense.
 
 
00:30:26
 
Nikhil Uday Khadilkar: And what about the midpoint manual that also from Slack only correct?
Vinil Sanjay Vasani: because that we haven't done previously, right?
Nikhil Uday Khadilkar: But uh is it possible? Okay.
Vinil Sanjay Vasani: the GitHub app should be able to trigger it,
Nikhil Uday Khadilkar: Cool.
Vinil Sanjay Vasani: but we'll have to test it. Team
Nikhil Uday Khadilkar: Uh makes sense.
Vinil Sanjay Vasani: one
Nikhil Uday Khadilkar: Uh, I think and I think uh the CRM CRM based
Vinil Sanjay Vasani: I had set up in between Yumi and Rajes.
Nikhil Uday Khadilkar: on
Vinil Sanjay Vasani: I just want to understand like clarity as to what is the exact thing that we need to do. I understand that to ambiguous openended problem but
Vrajesh Jaidev Iyengar: CRM that was more of the website
Vinil Sanjay Vasani: uh
Vrajesh Jaidev Iyengar: CMS
Nikhil Uday Khadilkar: H sorry CMS framework
Vrajesh Jaidev Iyengar: So Can't do it
Nikhil Uday Khadilkar: alternative
Vrajesh Jaidev Iyengar: again.
Nikhil Uday Khadilkar: I think sure artist what I think right should we take up basically what I'm thinking
 
 
00:31:53
 
Vrajesh Jaidev Iyengar: H.
Nikhil Uday Khadilkar: is but to actually increase the sign up right uh both to maybe run three four
Vrajesh Jaidev Iyengar: Yeah.
Nikhil Uday Khadilkar: experiments with using the intent flow and uh what what what do we plan to prioritize.
Vrajesh Jaidev Iyengar: We need to break it down into objectives. Objective is figuring out mode of conversation is the best. Next thing would be conversation itself.
Nikhil Uday Khadilkar: Correct.
Vrajesh Jaidev Iyengar: We'll need to improve conversions.
Nikhil Uday Khadilkar: Correct.
Vrajesh Jaidev Iyengar: We'll need to first evaluate platform smart if we decide smart then smart assist we will invest and make changes info we will improve the prompts evaluation I think is what sag also had mentioned we should do
Nikhil Uday Khadilkar: Correct. But on what basis will we do that evaluation?
Vrajesh Jaidev Iyengar: those we'll have to I think similar to the CMS that we had list of cost will be one of them scalability
Nikhil Uday Khadilkar: Hat.
Vrajesh Jaidev Iyengar: reliability will be one parameter or feature wise we'll have to see like GTM fast if we choose to stay on our internal smart assist tool and list parameters and we'll document this in a one pager this is the reason we are picking this I think your documentation should be one key focus more than building something.
 
 
00:33:39
 
Nikhil Uday Khadilkar: I didn't get time to fully go over it, but smart home. How can we make it like a better
Suhas More: Correct.
Nikhil Uday Khadilkar: experience?
Suhas More: So problem statement based on the analysis users having conversation with smart what type of
Nikhil Uday Khadilkar: All right.
Suhas More: conversation they having. We should make currently smart assist is not able to satisfy all the queries like leads but it is not correctly uh convert those leads through that
Nikhil Uday Khadilkar: H.
Suhas More: conversation to say to currently smart assist only. It is only for product discovery. We can modify or make it smart to make the sign up as well or pitch the
Nikhil Uday Khadilkar: Correct.
Suhas More: products
Nikhil Uday Khadilkar: And from a UI perspective,
Suhas More: full screen like different UI.
Nikhil Uday Khadilkar: got it.
Suhas More: Gopy and I will discussing this closely will care today to discuss
Nikhil Uday Khadilkar: H uh makes sense.
Suhas More: further.
Nikhil Uday Khadilkar: Uh I'm also very what basically to take one
Suhas More: Okay.
Nikhil Uday Khadilkar: approach.
 
 
00:35:28
 
Nikhil Uday Khadilkar: So still pending. Um
Suhas More: benchmarking basically spot info. I think clearly smart assist
Nikhil Uday Khadilkar: correct.
Suhas More: info.
Nikhil Uday Khadilkar: Got it. More smart.
Suhas More: Okay,
Nikhil Uday Khadilkar: Okay.
Suhas More: this uh will
Nikhil Uday Khadilkar: Assist
Suhas More: Yeah,
Nikhil Uday Khadilkar: versus
Suhas More: discuss to summarize all the conversations into one
Vrajesh Jaidev Iyengar: I'm
Suhas More: single
Nikhil Uday Khadilkar: I'll just add you also in that WhatsApp. We can check with him.
Vrajesh Jaidev Iyengar: holding
Nikhil Uday Khadilkar: Maybe it should be easy for him. Uh
Satyam Mishra: discussion discussion related
Nikhil Uday Khadilkar: on a batch level analysis. H
Satyam Mishra: fields description basically
Nikhil Uday Khadilkar: Got
Satyam Mishra: CRM Salesforce
Nikhil Uday Khadilkar: it. Got it. I think we can take some place. because you're not sure exactly based on findings figure out what we'll
Suhas More: Thank you again.
Nikhil Uday Khadilkar: do.
Vinil Sanjay Vasani: One more thing that we were discussing last week along with VRM was the AI calling thing.
 
 
00:37:52
 
Vinil Sanjay Vasani: Uh are we depriorizing that for now?
Vrajesh Jaidev Iyengar: Yes, but um not this sprint.
Vinil Sanjay Vasani: Okay.
Vrajesh Jaidev Iyengar: We don't have enough clarity. Maybe last week of March.
Nikhil Uday Khadilkar: Got it. SDK.
Suhas More: name.
Nikhil Uday Khadilkar: Okay. And do we have
Suhas More: Okay.
Satvik: basically there would be fix. So
Nikhil Uday Khadilkar: Approx approx.
Satvik: basically
Nikhil Uday Khadilkar: Uh
Satvik: I can look into that migration. So that's why I joined the call. Exactly. So that I'm accordingly to
Nikhil Uday Khadilkar: Got it. So basically kind
Satvik: it.
Nikhil Uday Khadilkar: of
Satvik: I'll let you
Nikhil Uday Khadilkar: got it. Uh
Satvik: know.
Nikhil Uday Khadilkar: anyway, it shouldn't
Suhas More: One more thing smart assist spot info in benchmarking smart is currently not being used for conversion. It is only being used for product discovery and streamline for at least analysis problem
Vrajesh Jaidev Iyengar: Thank analysis. We still have a I was just saying we still are
 
 
00:39:53
 
Suhas More: solve.
Vrajesh Jaidev Iyengar: comparing
Suhas More: Uh correct. So what I was suggesting is analysis already implement is not a big task within a week or sprint time we can do it. So should we look into that as well and then we'll do benchmarking.
Vrajesh Jaidev Iyengar: I think benchmark there's no point in while we make the fixes anyways benchmarking because both are
Suhas More: Got it. Take him.
Nikhil Uday Khadilkar: So what are we saying current case?
Vrajesh Jaidev Iyengar: No
Nikhil Uday Khadilkar: Uh spot info is more tailored towards conversion.
Suhas More: Yeah.
Nikhil Uday Khadilkar: But that is not the question here.
Vrajesh Jaidev Iyengar: heat.
Nikhil Uday Khadilkar: The question here is see which platform we go ahead with smart is the way forward. But
Suhas More: Then comparison based on conversion based on future use cases
Nikhil Uday Khadilkar: Basically which is the platform that we we we will be betting on.
Suhas More: and
Nikhil Uday Khadilkar: If we are saying smart then can we build it in house will it be as cost effective for us example not at this point of time or
 
 
00:41:30
 
Suhas More: Got it. Thank you.
Nikhil Uday Khadilkar: future. Sure. So, I think uh you guys can then drop off. Uh back are you
Namrata Khandelwal: Yeah.
Nikhil Uday Khadilkar: there?
Namrata Khandelwal: Yeah.
Nikhil Uday Khadilkar: I think we figured out attributes to get HQ because what is happening is but will come for very less number of startups but he will might be but he'll not be funded.
Namrata Khandelwal: All
Nikhil Uday Khadilkar: We need basically some some way to get their data.
Namrata Khandelwal: right.
Nikhil Uday Khadilkar: Apart from that integration or do we have any current idea what when are we taking the initial model live and we have
Namrata Khandelwal: yesterday after the week of Squa and showed
Nikhil Uday Khadilkar: details.
Namrata Khandelwal: me all things that you know I think he had already demoed to you and Saga I have to check LinkedIn quickly and API and see the other two metrics which is founders pedigree and the other one right employee count there were a couple of things that I wanted to talk about but he said these things were already clarified like small like companies which are not funded that is okay like funding and apart from that he also showed 10 very popular uh companies wherein the robot like sorry the bot was not allowed.
 
 
00:43:33
 
Namrata Khandelwal: So uh be it was okay with you and Saga is what he said. So I
Nikhil Uday Khadilkar: Let's build it on wherever they saying it's fine. Uh as long as initial we get some ide
Namrata Khandelwal: Yeah. So we aligned first to LinkedIn before development also we want we write a very simple or something which runs on the on in some intervals like 6 hours or
Nikhil Uday Khadilkar: Makes
Namrata Khandelwal: 3 hours and then we just start producing some leads. So that is the
Nikhil Uday Khadilkar: which makes sense. If we need any right that is fine
Namrata Khandelwal: H.
Nikhil Uday Khadilkar: market
Namrata Khandelwal: Oh,
Nikhil Uday Khadilkar: that we'll have to basically script
Namrata Khandelwal: Rajes is not here.
Nikhil Uday Khadilkar: okay uh uh basically around 500 600 maximum scrape to get this data
Namrata Khandelwal: Mhm.
Nikhil Uday Khadilkar: Is is do we need a paid API? If yes, what is the cost? And we'll get it aligned with the
Namrata Khandelwal: I'll check and I'll add all of this today.
 
 
00:44:53
 
Nikhil Uday Khadilkar: marketing.
Namrata Khandelwal: Yeah. First half actually wasn't wasn't working. I'll put all these details.
Nikhil Uday Khadilkar: Okay. What are the timelines
Namrata Khandelwal: Mhm.
Nikhil Uday Khadilkar: they looking to deploy that new model? I'll just confirm once with him just to get idea initial uh once we it starts running we'll start getting some HQL we can then test we can get those those metrics out
Namrata Khandelwal: Huh?
Nikhil Uday Khadilkar: that makes sense I think I think apart from that
Namrata Khandelwal: H
Nikhil Uday Khadilkar: currently. Just
Namrata Khandelwal: uh spill as in web but I need to test and
Nikhil Uday Khadilkar: pill.
Namrata Khandelwal: release the fixes as well. So I saw that KD web hook event fixes assigned to
Nikhil Uday Khadilkar: Okay. Okay. Okay.
Namrata Khandelwal: KD.
Nikhil Uday Khadilkar: I think estimation
Namrata Khandelwal: Uh so here there are three parts.
Nikhil Uday Khadilkar: Huh?
Namrata Khandelwal: But like just
Nikhil Uday Khadilkar: What will be fixing the short-term
Namrata Khandelwal: potency fix so that we don't consequences like mail sending
 
 
00:46:20
 
Nikhil Uday Khadilkar: fix?
Namrata Khandelwal: multiple
Nikhil Uday Khadilkar: Okay. And a sync to sync.
Namrata Khandelwal: entries.
Nikhil Uday Khadilkar: Sorry. A sync to sync to basically fix that.
Namrata Khandelwal: There are three or four things that we do in that flow. Uh-huh.
Nikhil Uday Khadilkar: in that doc I I I saw solution we don't know
Namrata Khandelwal: Uh but it'll be mostly that only we acknowledge it faster and remaining everything is a job. We need to what we need to we have not added the solution because I think I need to find out workflows what is the way we are making sure it is getting processed. But what if suppose that workflow fails. So what are the failsafe mechanisms? So that is a long-term solution for this that is added to the
Nikhil Uday Khadilkar: Got it.
Namrata Khandelwal: dock
Nikhil Uday Khadilkar: I think uh devstack
Namrata Khandelwal: still solve two problems and one the failed events for that the thread that had
Nikhil Uday Khadilkar: events
Namrata Khandelwal: created with the stock team I'm thinking you know we know for a fact we didn't receive because I can also show the flow because as a first step update it means that there is some miss that is happening.
 
 
00:47:50
 
Namrata Khandelwal: So
Nikhil Uday Khadilkar: Got it. So what we'll do is uh because on you are coming only like PR reviews
Namrata Khandelwal: I'm
Nikhil Uday Khadilkar: or coach let's take some extra time for that. So just take like one or two days for adoc we saying the short-term fix we can take it right.
Namrata Khandelwal: Yes.
Nikhil Uday Khadilkar: shortterm fix I think I think your also done makes
Namrata Khandelwal: I wanted to know one one thing.
Nikhil Uday Khadilkar: sense
Namrata Khandelwal: So I think and we should release that for
Nikhil Uday Khadilkar: correct corrects that we should take for the sprint can be like spill also or something that we were not able to prioritize like the logs. This is a good
Kadambary Diwan: Yes. For the
Nikhil Uday Khadilkar: one.
Kadambary Diwan: logs.
Nikhil Uday Khadilkar: Okay.
Kadambary Diwan: Next week
Nikhil Uday Khadilkar: Can I get
Kadambary Diwan: down.
Nikhil Uday Khadilkar: Okay, got it. So, you're saying but it will help us with the other other
Kadambary Diwan: Yes. Yes,
Nikhil Uday Khadilkar: things.
 
 
00:49:23
 
Nikhil Uday Khadilkar: Got it.
Kadambary Diwan: definitely.
Nikhil Uday Khadilkar: Uh if it is like a half day thing, you feel you
Kadambary Diwan: Half
Nikhil Uday Khadilkar: think
Kadambary Diwan: day
Nikhil Uday Khadilkar: Got
Kadambary Diwan: that for that we testing is taking some time.
Nikhil Uday Khadilkar: problem you don't have.
Kadambary Diwan: Yes.
Nikhil Uday Khadilkar: You are working already on multiple things. Uh It's a big
Namrata Khandelwal: I think apart from that I'll tell you deep
Nikhil Uday Khadilkar: deal.
Namrata Khandelwal: like server level service level but was debugging something the other day on Friday the schedule is not getting picked up right. So then there are
Nikhil Uday Khadilkar: Basically
Namrata Khandelwal: certain deep even for web I saw that there's no log whatsoever. So at least with logs
Nikhil Uday Khadilkar: the tracing actual log on. Exactly.
Namrata Khandelwal: it is going to be a week long task but it is going to be like so that we get meaningful logs.
Nikhil Uday Khadilkar: It makes sense also. something
Kadambary Diwan: Next.
Nikhil Uday Khadilkar: might have further impact
 
 
00:51:30
 
Kadambary Diwan: P
Nikhil Uday Khadilkar: uh tracing basically is what we saying
Kadambary Diwan: P1 testing dressing
Nikhil Uday Khadilkar: What? What does Aadhabat mean?
Kadambary Diwan: library but context.
Nikhil Uday Khadilkar: And got it. So what should we pick up in the sprint given key we have limited bandwidth?
Kadambary Diwan: Like you tell me upgrade testing is crucial or logging while is crucial.
Nikhil Uday Khadilkar: Yeah. So that we should do first. But we we let's just check
Namrata Khandelwal: He's there.
Ankit Songara: Huh?
Nikhil Uday Khadilkar: effort.
Ankit Songara: Tested or approve. Sorry
Nikhil Uday Khadilkar: Okay,
Ankit Songara: fix
Nikhil Uday Khadilkar: which is fine. Uh approximately estimation
Ankit Songara: you doing.
Nikhil Uday Khadilkar: Should we take some buffer key? We are confident. Uh this is including
Ankit Songara: Okay.
Nikhil Uday Khadilkar: testing.
Ankit Songara: The same is I. Huh?
Nikhil Uday Khadilkar: We are
Ankit Songara: You can
Nikhil Uday Khadilkar: assuming key uh we pick this up first.
Ankit Songara: only need to ask. I will ask them.
 
 
00:54:24
 
Nikhil Uday Khadilkar: I'll tell you I think I was telling KD also to she's working on one FTX task to uh which on with onboarding team to one week she'll be there to we can swap the on call between you and her next uh sprint she can take you on call to uh we can basic
Ankit Songara: Thank you.
Nikhil Uday Khadilkar: events we want to flow to mo engage to flow to segment and then to moage in that case uh growth service segment I don't think directly uh so how do we basically send them either we integrate segment uh and then pass those events to moage solution
Ankit Songara: Oh,
Namrata Khandelwal: Yeah.
Ankit Songara: segment. Hello.
Nikhil Uday Khadilkar: Sorry.
Namrata Khandelwal: Bundle. Hi
Nikhil Uday Khadilkar: Exactly. Same similar and changes. We decide to add to add segment to growth.
Namrata Khandelwal: Nikil these changes look like most of them can be covered like correct me if I'm wrong can be covered by front end itself so priity next page loaded plan etc will mostly cover all of this
 
 
00:56:26
 
Nikhil Uday Khadilkar: Okay. Okay. Actually, I was not very
Namrata Khandelwal: When plan limit is only 20% left this I'm not sure how will this be yeah
Nikhil Uday Khadilkar: sure.
Namrata Khandelwal: to when plan limit is by what do you mean by when plan limit is only 20% li
Nikhil Uday Khadilkar: saying what they
Namrata Khandelwal: left
Nikhil Uday Khadilkar: mean,000,000. Sorry 5,000
Namrata Khandelwal: Even if you pick this
Nikhil Uday Khadilkar: easily back we basically have to do integration of segment
Namrata Khandelwal: I think customer custom glue or customer I think had only set that up from what I had checked.
Nikhil Uday Khadilkar: customer doesn't have integration with moage. It's it's not a big
Namrata Khandelwal: Okay.
Nikhil Uday Khadilkar: task or
Namrata Khandelwal: H
Nikhil Uday Khadilkar: whatever. I'm saying once if segment gets and tested there's some just adding that event pricing page loaded event annual plan clicked event contact sales event any plan buy now clicked uh front end event payment successful payment successful payment failure you No.
Namrata Khandelwal: We just received activated or failure failure as such cancellation
 
 
00:58:03
 
Nikhil Uday Khadilkar: Uh,
Namrata Khandelwal: activated payment subscription service we don't receive anything
Nikhil Uday Khadilkar: yeah. We are only telling front end,
Namrata Khandelwal: H that is
Nikhil Uday Khadilkar: right?
Namrata Khandelwal: when
Nikhil Uday Khadilkar: We are getting we'll get the event, right?
Namrata Khandelwal: that is there those things we can add but suppose a failure pay a payment failure happens right in that case we don't receive any cancellation also activation also it just stays as created So
Nikhil Uday Khadilkar: that is not currently flowing. Uh is there any way for us to get right activated plan activated is same only right?
Namrata Khandelwal: yeah,
Nikhil Uday Khadilkar: uh back annual or monthly plan
Namrata Khandelwal: this also we can say one year.
Nikhil Uday Khadilkar: uh when plan limit is only 20% left we have to figure out when plan limit is
Namrata Khandelwal: Yeah.
Nikhil Uday Khadilkar: exhausted
Namrata Khandelwal: H.
Nikhil Uday Khadilkar: date last date
Namrata Khandelwal: Yes.
Nikhil Uday Khadilkar: renewal successful renewal failure.
Namrata Khandelwal: Yeah.
Nikhil Uday Khadilkar: Uh money saved due to absession plan. Uh
 
 
00:59:39
 
Namrata Khandelwal: I think halted. Yeah, we can send
Nikhil Uday Khadilkar: h makes sense. Uh money saved due to subscription plan will be
Namrata Khandelwal: that.
Nikhil Uday Khadilkar: tough. There is I'll tell you why finally marketing teams can start sending lot of coms around to get increase the number of subscription people to buy or renew or churn reduce or people who are on free plan to show keys this is this will be very powerful to do it what I feel basically let's take little more time only for it Uh what I'm saying is grows
Namrata Khandelwal: The thing that we picked up in reliability right has already done some amount of findings in that we need to follow up but in case
Nikhil Uday Khadilkar: shared that thread with me. I was going over that only. So we have tagged few people but if comes to us
Namrata Khandelwal: Black.
Nikhil Uday Khadilkar: right on the same PS
Namrata Khandelwal: Oh.
Nikhil Uday Khadilkar: thread on that respond keep everything on one thread on the PS thread and ask to follow follow up with them.
 
 
01:01:20
 
Namrata Khandelwal: Huh. Okay. Okay. While we don't pick up anything development around that but I'm just saying if you could just keep and make sure keep tracking if they like responding to us or not because schedules not getting picked up is can blow up to bigger amount of PSC tickets is what I feel.
Ankit Songara: like
Satyam Mishra: Uh, front end event.
Nikhil Uday Khadilkar: Huh? Basically, I'll give more context. Maybe you might not have context fully.
Namrata Khandelwal: All
Nikhil Uday Khadilkar: post. I think anyway we have taken we can spend that time
Namrata Khandelwal: right.
Nikhil Uday Khadilkar: on fixing current issues right maybe think of this maybe prior obviously the priority But this will help us a lot. So I don't think
Ankit Songara: Uh
Nikhil Uday Khadilkar: sorry this is still 16th second.
Ankit Songara: spring.
Nikhil Uday Khadilkar: Uh
Kadambary Diwan: Yes. Yes.
Nikhil Uday Khadilkar: 16th
Ankit Songara: Okay.
Kadambary Diwan: solo.
Nikhil Uday Khadilkar: you also don't spend too much time because you are working on other things.
 
 
01:03:37
 
Nikhil Uday Khadilkar: Then you can spend some time if you see you need basically some debugging then I think backed
Kadambary Diwan: I'll merge all the time. I'll update you accordingly.
Nikhil Uday Khadilkar: Sure. Uh I think uh you folks can then drop uh sales agent. I think uh smartest agent
Satyam Mishra: back end.
Nikhil Uday Khadilkar: that is not added in the doc also IDE should be added
Satyam Mishra: Okay.
Nikhil Uday Khadilkar: once flow what else is on your flow is on your one
Satyam Mishra: Okay.
Nikhil Uday Khadilkar: second
Satyam Mishra: LWD.
Nikhil Uday Khadilkar: I think Friday. this Friday. Uh I think so we have some bandwidth out
Satyam Mishra: Mostly basically
Nikhil Uday Khadilkar: Got it. Office
Satyam Mishra: I did for
Aditya Mohan Gupta: But just need to
Nikhil Uday Khadilkar: Confirm.
Aditya Mohan Gupta: research.
Satyam Mishra: Intent page, international
Nikhil Uday Khadilkar: Huh.
Satyam Mishra: page.
Nikhil Uday Khadilkar: What we should do is we should pick those that we had said we have a little clarity.
 
 
01:06:51
 
Nikhil Uday Khadilkar: We can pick that up. Okay. Okay. Okay. Okay. Cool.
Vinil Sanjay Vasani: One more reliability items we have going. Do you think we'll have time to close
Nikhil Uday Khadilkar: catches.
Vinil Sanjay Vasani: them?
Nikhil Uday Khadilkar: Sorry.
Vinil Sanjay Vasani: up universe CL for SSR
Vrajesh Jaidev Iyengar: West.
Vinil Sanjay Vasani: stages V7 that is also there is a leak of deployment
Nikhil Uday Khadilkar: Memory leak leak. Then we have one more item workflow site
Vinil Sanjay Vasani: I
Nikhil Uday Khadilkar: map workflow.
Vinil Sanjay Vasani: So that we have one central list
Nikhil Uday Khadilkar: What we can do is key uh then look at these few items
Vinil Sanjay Vasani: but
Nikhil Uday Khadilkar: together.
Vinil Sanjay Vasani: I know that is not priority but it could be helpful testing it on the back end to analyze alert.
Nikhil Uday Khadilkar: Got it.
Vinil Sanjay Vasani: So,
Nikhil Uday Khadilkar: randomly uh as in when you get
Vinil Sanjay Vasani: take it
Nikhil Uday Khadilkar: ideal
 
 
01:08:41
 
Satyam Mishra: site that is coming from
Vinil Sanjay Vasani: is
Satyam Mishra: another which is
Nikhil Uday Khadilkar: We'll figure out
Vinil Sanjay Vasani: bundle like let's take half a day or something for
Satyam Mishra: Huh?
Vinil Sanjay Vasani: that.
Nikhil Uday Khadilkar: uh
Satyam Mishra: That didn't help much. First bundle
Nikhil Uday Khadilkar: Yeah,
Satyam Mishra: code.
Nikhil Uday Khadilkar: actually sorry that I was figuring
Vinil Sanjay Vasani: I logs can work.
Nikhil Uday Khadilkar: I think uh we can actually take help. Uh I'll give you more context.
Aditya Mohan Gupta: Exactly.
Nikhil Uday Khadilkar: Uh basically uh there is something called tracing. There is one that gets to basically gateway or at the same time loging. This is a good idea. You can basically pick this up. We can take some time 3 4 days so that back so that you can only take up so that you'll get some exper to
Aditya Mohan Gupta: What?
Nikhil Uday Khadilkar: back end also. Uh so I think I'm not
Aditya Mohan Gupta: Thursday.
 
 
01:11:22
 
Nikhil Uday Khadilkar: um so what we can do is I think
Aditya Mohan Gupta: Uhhuh.
Nikhil Uday Khadilkar: growth
Aditya Mohan Gupta: is already
Nikhil Uday Khadilkar: So there are flows are there flows.
Aditya Mohan Gupta: present.
Nikhil Uday Khadilkar: We need to think and add the correct logs so that we have a better idea group
Aditya Mohan Gupta: Okay. For the P 0 flows for like
Nikhil Uday Khadilkar: back which might be creating that subscription might
Aditya Mohan Gupta: water
Nikhil Uday Khadilkar: be giving benefits.
Aditya Mohan Gupta: currently logs added.
Nikhil Uday Khadilkar: in some of the flows basically that we need to basically look into and tasks basically but we can just ask them to give whatever is there and short we can do
Vinil Sanjay Vasani: Yeah.
Aditya Mohan Gupta: llm.txt thread.
Vinil Sanjay Vasani: SEO
Aditya Mohan Gupta: Sorry.
Nikhil Uday Khadilkar: He was saying uh and so we can
Aditya Mohan Gupta: basically.x
Nikhil Uday Khadilkar: pick it up. I think makes
Aditya Mohan Gupta: Xp.
Nikhil Uday Khadilkar: sense. What you can do is Then we can basically prioritize this uh next week.
 
 
01:13:12
 
Aditya Mohan Gupta: Uh share thread I'm talking.
Nikhil Uday Khadilkar: Huh?
Aditya Mohan Gupta: Uh
Nikhil Uday Khadilkar: Correct.
Aditya Mohan Gupta: second team
Nikhil Uday Khadilkar: Makes sense. I think next week we'll figure out which will have good impact.
Satyam Mishra: cancel. I noticed that API and then service whereas create
Aditya Mohan Gupta: Celebrities.
Satyam Mishra: subscription and allow front end. I think
Nikhil Uday Khadilkar: Take
Satyam Mishra: basically
Nikhil Uday Khadilkar: got it. Say okay. Okay. Thank you folks. Okay.
Vinil Sanjay Vasani: Nicad. Foreign speech.
Nikhil Uday Khadilkar: Just quick folks and drop if you
Vinil Sanjay Vasani: Foreign speech.
Satyam Mishra: E2
Nikhil Uday Khadilkar: want.
Satyam Mishra: basically is solve. E2 spill
Nikhil Uday Khadilkar: Take over.
Vinil Sanjay Vasani: Yeah.
Nikhil Uday Khadilkar: Slack processing. is it can only hit a end point and it it only helps in connecting with Slack and calling something he can basically approve
Vinil Sanjay Vasani: H.
Nikhil Uday Khadilkar: once you create a Slack app that you basically need some either you can do it through Lambda or I I was just trying to figure out
 
 
01:16:37
 
Vinil Sanjay Vasani: Huh?
Nikhil Uday Khadilkar: that Cloudflare worker that also was doing the job because around limit
Vinil Sanjay Vasani: personal account.
Nikhil Uday Khadilkar: growth platform growth channel. So you can basically it is not tied to my personal account.
Vinil Sanjay Vasani: Okay.
Nikhil Uday Khadilkar: uh you can basically just log into that account, create a worker and if you want to do some processing there only and third thing is GitHub app which uh GitHub app basically interfaces with uh your repo.
Vinil Sanjay Vasani: Huh.
Nikhil Uday Khadilkar: So it creates something and immediately after half an hour it dissolves it. So maybe you can just see if you access
Vinil Sanjay Vasani: But I have access to
Nikhil Uday Khadilkar: bot that that is not
Vinil Sanjay Vasani: it.
Nikhil Uday Khadilkar: also again tied to my account. It is tied to reserve
Vinil Sanjay Vasani: Okay. Okay.
Nikhil Uday Khadilkar: only
Vinil Sanjay Vasani: cloud. If I log in through my Google, will I get access to the team
Nikhil Uday Khadilkar: platform growth.
Vinil Sanjay Vasani: platform?
Nikhil Uday Khadilkar: Second Huh? I think uh
Vinil Sanjay Vasani: Slack
Nikhil Uday Khadilkar: Slack app you can create that app yourself
Vinil Sanjay Vasani: app.
Nikhil Uday Khadilkar: only appl One second thread. Uh
Vinil Sanjay Vasani: I got a
Nikhil Uday Khadilkar: check.
Vinil Sanjay Vasani: thumbs
Nikhil Uday Khadilkar: Okay.
Vinil Sanjay Vasani: enough to unblock me.
Nikhil Uday Khadilkar: Basically, you can create a new app. 30 Huh? Looks like it.
Vinil Sanjay Vasani: Oh, sorry. One more thing.
Nikhil Uday Khadilkar: from once little I get free I'll just reply on Slack
Vinil Sanjay Vasani: Huh?
Nikhil Uday Khadilkar: once
Vinil Sanjay Vasani: Say it's okay. I I can log in a little on Thursday also to have this discussion for the
Nikhil Uday Khadilkar: okay thank
Vinil Sanjay Vasani: CMS.
 
 
Transcription ended after 01:20:57


This editable transcript was computer generated and might contain errors. People can also change the text after it was created.

---

## Linked Entities
- [[people/nikhil-khadilkar]]
- [[people/satyam-mishra]]
- [[people/shubham-singhal]]
- [[people/tushar-saxena]]
- [[people/vrajesh-iyengar]]
- [[projects/vrm]]
