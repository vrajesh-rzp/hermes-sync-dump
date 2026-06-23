---
title: "Subscription issues - connect"
type: meeting
date: 2026-06-08
tags: [meeting, gemini-recording]
gemini_doc_id: 1hFB8EzhvQoQiMI4-_CoRt1RhHUvvNWEJ3yH5EloIfrc
---

# Subscription issues - connect


**Date:** 2026-06-08
**Source:** Gemini recording ([Google Doc](https://docs.google.com/document/d/1hFB8EzhvQoQiMI4-_CoRt1RhHUvvNWEJ3yH5EloIfrc/edit))

---

## Summary

﻿📝 Notes
Mar 10, 2026
Subscription issues - connect
Invited Vrajesh Jaidev Iyengar Satyam Mishra Tushar Saxena Namrata Khandelwal Sagar Agarwal
Attachments Subscription issues - connect 
Meeting records Transcript 

Summary
Revenue loss analysis and credit assignment issues discussed, demanding immediate migration off older views and full team focus.

Analyze Free Plan Revenue Loss
Analysis of multiple free plan creations before V2 revealed revenue loss, prompting the suggestion to cancel future schedules to mitigate financial damage for affected merchants. The primary issue was determined to be the frontend allowing multiple calls and the current code failing to cancel free charge subscriptions upon upgrade to a paid plan.

Address Overlapping Credit Assignment
Data showed 9,900 merchants had 3 or more overlapping 5,000-rupee credits, resulting in a potential loss of 2.72 CR due to automatic assignment via pricing bundle code. A separate issue was identified where the presence of fee credits prevented the assignment of amount credits, and the logic restricting this needs to be removed as no business case supports it.

Mandate Immediate Issue Resolution
It was decided to start the 'growth war room' immediately, dedicated to resolving all identified issues, including migrating 17 affected merchants off the older V2 view. All known issues must be listed in a central tracking sheet for prioritization based on impact, and proactive review of all API flows is required to prevent future edge cases.

Details
* Analysis of Multiple Free Plan Creations and Revenue Loss Calculation: Namrata Khandelwal discussed the issue of multiple free plans being created because users were able to click on the free plan multiple times on the frontend, particularly before version V2 was released around January 3rd. They questioned Vrajesh Jaidev Iyengar about how the revenue loss was being calculated, asking if it was based on all 12-month schedules that would run or only on money lost until the current time. Namrata Khandelwal suggested canceling future schedules to stop further losses for affected merchants (00:00:58).
* Addressing Merchant Migration from Older Views: The immediate action required is to migrate people off the older view (V2 to V3), specifically the 17 merchants affected who are currently on the older plus plan (00:00:58). Vrajesh Jaidev Iyengar stressed that getting everyone off V2 is a must, and they need to figure out the exact data fix or process this migration entails (00:01:54).
* Review of Overlapping Free Credits and Potential Loss: Vrajesh Jaidev Iyengar shared data showing 9,900 merchants had three or more overlapping 5,000-rupee credits assigned to them which have not yet expired, totaling a potential loss of 2.72 CR. This assignment of credits was happening through the pricing bundle code and not manually, and they noted that some merchants were heavily abusing the system (00:01:54). A third action item is to correct the free credits assig

---

## Full Notes

﻿📝 Notes
Mar 10, 2026
Subscription issues - connect
Invited Vrajesh Jaidev Iyengar Satyam Mishra Tushar Saxena Namrata Khandelwal Sagar Agarwal
Attachments Subscription issues - connect 
Meeting records Transcript 


Summary
Revenue loss analysis and credit assignment issues discussed, demanding immediate migration off older views and full team focus.

Analyze Free Plan Revenue Loss
Analysis of multiple free plan creations before V2 revealed revenue loss, prompting the suggestion to cancel future schedules to mitigate financial damage for affected merchants. The primary issue was determined to be the frontend allowing multiple calls and the current code failing to cancel free charge subscriptions upon upgrade to a paid plan.

Address Overlapping Credit Assignment
Data showed 9,900 merchants had 3 or more overlapping 5,000-rupee credits, resulting in a potential loss of 2.72 CR due to automatic assignment via pricing bundle code. A separate issue was identified where the presence of fee credits prevented the assignment of amount credits, and the logic restricting this needs to be removed as no business case supports it.

Mandate Immediate Issue Resolution
It was decided to start the 'growth war room' immediately, dedicated to resolving all identified issues, including migrating 17 affected merchants off the older V2 view. All known issues must be listed in a central tracking sheet for prioritization based on impact, and proactive review of all API flows is required to prevent future edge cases.


Details
* Analysis of Multiple Free Plan Creations and Revenue Loss Calculation: Namrata Khandelwal discussed the issue of multiple free plans being created because users were able to click on the free plan multiple times on the frontend, particularly before version V2 was released around January 3rd. They questioned Vrajesh Jaidev Iyengar about how the revenue loss was being calculated, asking if it was based on all 12-month schedules that would run or only on money lost until the current time. Namrata Khandelwal suggested canceling future schedules to stop further losses for affected merchants (00:00:58).
* Addressing Merchant Migration from Older Views: The immediate action required is to migrate people off the older view (V2 to V3), specifically the 17 merchants affected who are currently on the older plus plan (00:00:58). Vrajesh Jaidev Iyengar stressed that getting everyone off V2 is a must, and they need to figure out the exact data fix or process this migration entails (00:01:54).
* Review of Overlapping Free Credits and Potential Loss: Vrajesh Jaidev Iyengar shared data showing 9,900 merchants had three or more overlapping 5,000-rupee credits assigned to them which have not yet expired, totaling a potential loss of 2.72 CR. This assignment of credits was happening through the pricing bundle code and not manually, and they noted that some merchants were heavily abusing the system (00:01:54). A third action item is to correct the free credits assigned to approximately 10,000 merchants (00:03:50).
* Root Cause of Credit Assignment Issues and Code Fixes: Namrata Khandelwal explained that the issue stems from the frontend allowing multiple calls, and the current code not canceling schedules for free charge subscriptions when a user moves to a paid plan (00:03:50). As a result, the person continues to receive free plan benefits even after upgrading to a paid plan, which is a known fix they were working on with KD. Vrajesh Jaidev Iyengar requested confirmation that the root cause and required fixes are documented (00:04:55).
* Creation of a Central War Room Document for Issues: To consolidate information, Vrajesh Jaidev Iyengar suggested creating a single "subscription war room document" that links to all separate documents and issues, rather than requiring people to look in multiple places. They noted that reducing the filter from three-plus to two-plus 5,000-rupee credit assignments increases the affected merchant count to 21k, with a potential value loss of 3.87 CR (00:05:45).
* Credits Utilization for Specific Transaction Methods: A separate issue was raised regarding the proper assignment of credits, but their utilization against transactions for specific payment methods, particularly the credit card on UPI method. Namrata Khandelwal clarified that this is not a one-off case, and Ankit Songara mentioned this was happening because credits were not being assigned due to control issues from other services (00:06:38). Vrajesh Jaidev Iyengar identified a separate issue where fee credits assigned to a merchant prevented the system from assigning them amount credits, and they need to change the logic to remove this restriction (00:08:13).
* Removing Logic Restricting Amount Credit Assignment: Vrajesh Jaidev Iyengar reported that they spoke to a senior PM who confirmed there is no known business use case for the logic that restricts assigning amount credits when fee credits are present (00:08:13). Ankit Songara noted that this logic is written in the API monolith, and Vrajesh Jaidev Iyengar committed to getting the name of the engineering manager to facilitate the required change (00:09:06).
* Creation of Analytics Reporting and Alerts: Vrajesh Jaidev Iyengar emphasized the need to establish a daily or weekly report for subscriptions and credits from analytics and to create alerts for any abnormal behavior. They recognized that getting bandwidth from the analytics team would be difficult, but given the significant money loss, Vrajesh Jaidev Iyengar committed to discussing it with them (00:10:10).
* Full Focus on Issue Resolution and Team Assignment: Vrajesh Jaidev Iyengar mandated full focus on resolving all identified issues immediately, stating that Namrata Khandelwal, Satyam, and one other person need to dedicate 100% of their time to this (00:11:02). They noted that most required changes are backend, and while Adita is working on logs, they will be pulled in if needed for the relevant logging (00:12:45) (00:21:13).
* Starting the War Room Immediately and Establishing a Tracker: Vrajesh Jaidev Iyengar decided to start the "growth war room" immediately, rather than waiting until Wednesday as previously planned (00:15:31) (00:17:32). They requested the creation of a temporary channel, a central tracking sheet for all known issues (including the UCS cache issue and PSC tickets), and a system for prioritizing, assigning owners, and tracking status (00:16:53) (00:18:57).
* Proactive Review of API Flows and Edge Cases: Namrata Khandelwal suggested a proactive approach of going through each API flow with the product team to cover all edge cases, preventing future issues, which Vrajesh Jaidev Iyengar agreed should be a top priority (00:22:03). Vrajesh Jaidev Iyengar stressed that all known issues, regardless of whether they are website, subscription, tech, or product-related, must be listed in the sheet for prioritization based on impact (00:22:51) (00:25:48).


Suggested next steps
* [The group] Migrate V2 Merchants: Migrate 17 merchants from the older V2 plan view to the V3 plan. Ensure everyone is off V2.
* [Ankit Songara] Analyze Credits: Analyze why multiple 5000 rupee credit assignments are occurring. Determine root cause for high assignment counts.
* [The group] Correct Credits: Correct the free credit assigned improperly to 10k merchants.
* [Namrata Khandelwal] Share Documents: Share all existing documentation and dogs related to subscription issues.
* [Namrata Khandelwal] Create Tracker: Maintain a central tracker sheet for all known issues (subscription, credits, general tech).
* [Namrata Khandelwal] Create Channel: Create a temporary Growth War Room channel for focused issue discussion.
* [Namrata Khandelwal] Post Link: Post a link on the Growth Ideas channel redirecting users to the new War Room discussion channel.
* [The group] Setup Reporting: Create daily/weekly subscription and credit reports from analytics. Set up corresponding utilization alerts.
* [Vrajesh Jaidev Iyengar] Share PM Contact: Provide the engineering manager Point of Contact for the credit service team to Ankit.
* [Namrata Khandelwal] Schedule Meeting: Set up a follow-up meeting in the second half of the day (5 or 6 PM).
* [Namrata Khandelwal] Share Merchant ID: Share the Merchant ID (MID) of the merchant who took 2 temporary paid plans.
* [Namrata Khandelwal] Review Tickets: Systematically review all PSC tickets to find patterns and trends for systematic fixing.
* [Namrata Khandelwal] Review API Flows: Go through every API flow with Product to ensure all edge cases are covered proactively.
* [Namrata Khandelwal] Add UCS Issue: Add the UCS cache issue to the central war room tracker.
* [Namrata Khandelwal] Start Project Plan: Start the project plan for the war room initiative. Figure out project Ballet details with Vrajesh.


You should review Gemini's notes to make sure they're accurate. Get tips and learn how Gemini takes notes
Please provide feedback about using Gemini to take notes in a short survey.
📖 Transcript
Mar 10, 2026
Subscription issues - connect - Transcript
00:00:00
 
Namrata Khandelwal: Shar I just have one question on this um so like I had already mentioned right that we knew about it I'll tell you just one miss here is that what our understanding was that between the plan switches that is the upgrade downgrade which happens very rarely if a person already takes a paid plan right that is when the default plan creation happens why this happened primarily as a loss was because on front end there are some views uh I think before this version v2 that was released I think 3rd January or something that Satyam can confirm before that they were able to click on the free plan multiple times due to which this got created multiple times. So that is one. So that was the major point of leakage and second thing the revenue like the the money that is being lost right how are you calculating this Rajes is this on the basis of all the 12 month
Vrajesh Jaidev Iyengar: Yeah.
Namrata Khandelwal: schedules that will run or is it on the money that has been lost till now because what what I want to say is key these schedules
 
 
00:00:58
 
Vrajesh Jaidev Iyengar: So I think like one of the things that I
Namrata Khandelwal: so uh you have calculated everything we can actually stop the schedules I'll
Vrajesh Jaidev Iyengar: will
Namrata Khandelwal: you know basically We cancel all the that are going to run from here on for all such merchants that we can do. So is this numberated on
Vrajesh Jaidev Iyengar: also like what is the difference?
Namrata Khandelwal: that?
Vrajesh Jaidev Iyengar: Like Satyam you had mentioned only 17 militants were affected by by this many not were affected. Uh those are currently on the older view where they can take it repeatedly. Okay let me get a mark. Uh Namita did you have a chance to look at the query book execution link that I had
Namrata Khandelwal: I did.
Vrajesh Jaidev Iyengar: shared.
Namrata Khandelwal: But uh actually these were
Vrajesh Jaidev Iyengar: So,
Namrata Khandelwal: like
Vrajesh Jaidev Iyengar: so one action is that we need to migrate people of the older view, right? Those 17 people are they on the plus plan? They are on the older plus plan which is not in they in the new part.
 
 
00:01:54
 
Vrajesh Jaidev Iyengar: Let's migrate them to the let's migrate. So V2 to V3 basically, right? Yeah. Uh yes. Okay. So that is something that we should do right away. We'll figure out like what that migration means like is it a data fix to like we'll figure out what it means but we need to get everyone off V2. That is a must. Now coming to the data that I had shared which had a huge number. Yes. Uh this was shared to me by the panchchu and I think Satyam had raised it to the panchcho. Uh what we are doing is just seeing how many merchants have overlapping 5,000 rupee credits assigned to them which are not expired yet. Okay. Okay. So and how did this credit uh assigning happen? Uh this 5,000 happens through the pricing bundle through through the code only, right? It's not manual assignment, right?
 
 
00:02:38
 
Vrajesh Jaidev Iyengar: This is not manual assignment. So we're checking specifically for a 5,000 rupee value assignment for this and we need to basically understand why is this happening. Yeah. So in this I am taking a filter of people who have three such 5,000 rupee assignments or higher. There are 9,900 such merchants and the total value of these credits that are assigned is 2.72 CR. Now these might not be fully utilized. There might be all of those additional caveats like how much actual revenue loss has happened because of this but this is potential. There are some merchants who are high up on this list who have like 2.5 lakhs assigned to them in bunches of 5,000. So those are pure abusers. Now there might be a long tale of merchants who where there was a bug due to which a double assignment or triple assignment has happened. Okay. So we need to do that analysis right? I think like maybe Ankit also will need to figure out like do that analysis figure out why it is happening but like in terms of correction what do we need to do any data correction over here in terms of credits that have been assigned do we need to remove them I don't think there's a mechanism nita correct me if
 
 
00:03:50
 
Vrajesh Jaidev Iyengar: I'm wrong there's a mechanism mechanism do we need to do it or not are these are these credits are they rightfully assigned to these they should be assigned to we need to correct so that is a third item
Namrata Khandelwal: Yeah.
Vrajesh Jaidev Iyengar: correct uh the free credit assigned to 10k merchants. Okay. That is a threat data. Yeah. And what do you mean by three plus schedules like like basically 5,000 credits assigned this action has happened thrice or more? 5k once is understandable. There might be some edge case. Maybe a click the page didn't refresh the clicked again. That is also not that shouldn't happen. Let me just see if I make this
Namrata Khandelwal: Uh so Tushar currently what happens is uh f one of the first things is the view.
Vrajesh Jaidev Iyengar: too.
Namrata Khandelwal: The third second thing that happens is currently when we move from one plan to another uh the code has been written in such a way that we do not cancel the schedules for the free charge subscriptions at all.
 
 
00:04:55
 
Namrata Khandelwal: So even if that person has moved to say some other paid plan, he will still be getting benefits of the free plan as well. So that is a fix that we were already working on with KD right. And the third thing is yeah, so we are aware of why this is happening completely.
Vrajesh Jaidev Iyengar: Good.
Namrata Khandelwal: Uh why it was exploited is because front end was somehow allowing multiple uh calls and also backend for create you will never be able to create multiple free chart subscription. But since update works in a way that it cannot really not allow if someone wants to move from an active to a different plan is is why uh you know update also couldn't handle this. So yeah we are aware of the things that we need to do and about the data correction that we are talking about. Uh I
Vrajesh Jaidev Iyengar: So is this is this documented anywhere like like the root cause and like what is
Namrata Khandelwal: think
Vrajesh Jaidev Iyengar: the fixes
Namrata Khandelwal: there is an there are multiple dogs around this.
 
 
00:05:45
 
Vrajesh Jaidev Iyengar: required?
Namrata Khandelwal: There is an upgrade downgrade dog. There is a doc which where we we actually checked all the schedules and what are the losses that we are having for 5,000. I'll share all the dogs with you there
Vrajesh Jaidev Iyengar: like create like a let's create a subscription war room document a single one let's all the issues and if
Namrata Khandelwal: h
Vrajesh Jaidev Iyengar: there's a separate doc just link that in it right that way for this war room you will have a single place rather than looking in multiple
Namrata Khandelwal: sure.
Vrajesh Jaidev Iyengar: docs by the way if I reduce the
Namrata Khandelwal: Yeah. Okay.
Vrajesh Jaidev Iyengar: three plus to two plus uh the merchant count becomes 21k and the value count becomes 3.87s here. Got it. Uh okay. So I think uh this is fine. There was also one separate issue where we are asking the Pore team to basically look into something, right? Yeah. Yeah. Yeah. So uh that was uh credits are assigned properly.
 
 
00:06:38
 
Vrajesh Jaidev Iyengar: Uh it is utilization of these credits against transactions that the merchant makes for specific methods especially the credit card on UPI method which was launched I think four five months ago. Okay. And do we have do we have any like numbers on the potential impact of that? Uh no. So this was not this was a one-off case in my opinion because the code doesn't show that there is a explicit restriction on this. So it could happen again, right? Yeah. I spoke to the PM the senior PM who is part of the credits team. He said that the actually all of the method teams individually apply the restrictions. So UPI team will apply a restriction for UPI if needed based on work with all the teams work with all the teams to understand or or we have to put like some sort of guard rail within the growth services or something I don't think we can do
Namrata Khandelwal: Oh, Rajesh Tushar this is not a one-off case first and second Ankit is also here.
 
 
00:07:23
 
Vrajesh Jaidev Iyengar: anything
Ankit Songara: I
Namrata Khandelwal: So basically this was happening because the credits were not being able to assign and that is because of
Ankit Songara: love
Namrata Khandelwal: certain things which we can't control but the other services can. So uh I think Ankit can
Vrajesh Jaidev Iyengar: Credits not being able to assign is a third problem.
Namrata Khandelwal: uh
Vrajesh Jaidev Iyengar: The second one I'm saying is credits are assigned but utilized for specific
Namrata Khandelwal: I think the one that Tushar is talking about is the threads on which we are actually asking the other team for a fix
Vrajesh Jaidev Iyengar: methods.
Namrata Khandelwal: for this because we are trying to raise a schedule and the because of the uh error that the
Vrajesh Jaidev Iyengar: Yes.
Namrata Khandelwal: other service throws we actually don't process you
Vrajesh Jaidev Iyengar: Okay.
Namrata Khandelwal: remember.
Vrajesh Jaidev Iyengar: There's another thread where on the critical case desk where we are again tagging pore only to look into so
Namrata Khandelwal: Yes. Yes.
Vrajesh Jaidev Iyengar: I think those two are getting
Namrata Khandelwal: If you see the last three months the schedule never ran.
 
 
00:08:13
 
Namrata Khandelwal: So that is why it was not being used because credits were never given
Vrajesh Jaidev Iyengar: uh so on that issue there was one conflict on fee credits versus amount credits as well right so the issue found was if a
Namrata Khandelwal: only
Vrajesh Jaidev Iyengar: merchant has fee credits assigned then they were the system was not allowing us to assign amount credits to them I spoke to the PM there's no business use case for this logic And uh he has given a go ahead on if we need to make any changes we should. So that's the free credits uh fee credits. Sorry fes. So what is action required over here?
Ankit Songara: What?
Vrajesh Jaidev Iyengar: Uh we need to change the logic that restricts amount credit assignment fee credits are present. So tell me again identify if if a merchant has fee credits currently we are not able to assign additional amount credits to them. That logic needs to be like that check needs to be removed from the credit service. But they want us to make that change.
 
 
00:09:06
 
Vrajesh Jaidev Iyengar: Is it? Yeah.
Namrata Khandelwal: No, I think did not get any response only. Right. Ankit. Uh Ankit, you can actually uh tell your point here.
Ankit Songara: So Rajes so the the logic you are saying so like it's written in the API monolith so like it is not the case we are only using that logic is the on the or level so back every method team use that thing service
Vrajesh Jaidev Iyengar: contact.
Ankit Songara: Yeah.
Vrajesh Jaidev Iyengar: You asked me to reach out to one of the senior PMs, right? I spoke to him today morning.
Ankit Songara: Yeah.
Vrajesh Jaidev Iyengar: He said key there is no business use case that he knows of that you know needs
Ankit Songara: Uhhuh.
Vrajesh Jaidev Iyengar: this
Ankit Songara: Correct. So uh just give me the P like who what is the PM?
Vrajesh Jaidev Iyengar: restriction.
Ankit Songara: I just because we need to talk to his team or because I think Oh my
Vrajesh Jaidev Iyengar: I I'll I've I've asked him I'll ask him for the engineering manager's name.
 
 
00:10:10
 
Ankit Songara: god.
Vrajesh Jaidev Iyengar: I'll give you the PC. So I think uh like I've noted down seven things that we need to do apart from all of this. One more thing that we need to add is uh like create like a daily or weekly report for any subscriptions and credits or something from analytics and also create alerts if we see any funny behavior over there. Currently I think analytics is not looking deeply into the credits and the utilization but we need to do that. Yeah, we are only looking at the take rate and so I I think we will only have to create it like they will not do it for us but at least work with them just to get it set up that is one thing. It'll be tough to get bandwidth from there because he's marketing analytics pulled into four different good things only. Yeah. Yeah. So I I know that we will not basically we will not get we will not get the bandwidth but given like the way to prioritize is seeing that this is led to your money loss like 2.67.
 
 
00:11:02
 
Vrajesh Jaidev Iyengar: So we I'll talk to him I'll talk to them. can report you. Just one sec. I'll just get the engineering for you. and any lead engineer from your team can work with a discussion. Cool. I'll just CC Pratik anyways wherever we make these changes but he using really sucks. I took a photo of this and I asked Gemini to convert it to text. See what it is come up with. Please tell me what language that is in. I just want to be the free model standard Google right pratik p is the em on that side he has been appraised that they also have no problem with us making this change he also doesn't know why this uh exists like this uh check okay but anyways I think like uh ultimately I'm I'm going to share this u screenshot on on that thread only but uh couple of things full focus on this until all these issues are is resolved.
 
 
00:12:45
 
Vrajesh Jaidev Iyengar: I don't care how long it takes. uh like uh Satyam Namita the thing is some bandwidth is pulled out right KD has been pulled into onboarding something for whoever is available is looking into HQ so I'll talk to Sag this is a big problem we need on this for sure right I mean like the faster we do it the faster we can move back to HQL and other projects right so three of you need to be on this 100% of the time if uh do we need anyone else we don't have anyone else working on projects other on quality some quality test.
Namrata Khandelwal: Adita is currently working on logs for group.
Vrajesh Jaidev Iyengar: But but this is more like back end changes, right? Less front
Namrata Khandelwal: Yes,
Vrajesh Jaidev Iyengar: end.
Namrata Khandelwal: most of the changes are for back end only. We need to also do some thorough round of testing which I think was missed earlier. So uh but there are certain changes that needs to be done on like yesterday when we were discussing this.
 
 
00:13:42
 
Namrata Khandelwal: Satyam, do you want to highlight the things that you know are currently not showing up properly on front end? uh issues that we were discussing on front end uh the blade issues and everything that you were talking
Vrajesh Jaidev Iyengar: on. Uh yeah. So after the new blade change the view is kind of breaking.
Namrata Khandelwal: Oh,
Vrajesh Jaidev Iyengar: So let me just show you which we breaking uh pricing bundle and like pricing bundle cells of this kind of uh so when you talk about breaking just show what you mean by breaking like a little bit of design. This is overflowing and components have been updated. I think we need to fix this also. any one thread please report it on that thread also. So like I created a thread like there was yesterday also there was one design breakage because of the bleed up. So I'm going to start a common thread on dashboard for all these pages. They might get a push back because this is just custom.
 
 
00:15:31
 
Vrajesh Jaidev Iyengar: This is not like a
Namrata Khandelwal: uh Tushar wanted to highlight one more thing. Uh yeah. So I had a talk about this to Nikil as well uh last week before he uh left.
Vrajesh Jaidev Iyengar: Yeah.
Namrata Khandelwal: So basically we had decided to go for the uh war room from Vness day uh that is tomorrow. just wanted to uh highlight one more thing is key apart
Vrajesh Jaidev Iyengar: one thing like why wait till witness day I don't
Namrata Khandelwal: from I want to I want to tell you the reason like I'm just discussing
Vrajesh Jaidev Iyengar: understand
Namrata Khandelwal: this you can tell me if I'm thinking incorrectly but the thing is uh these are just some of the issues that we are discussing right there are certain other kinds of tickets also for example there's a webbook issue that I think I had highlighted to you earlier also right we have done a a bunch of analysis on that we do understand there are certain so there are certain tickets that are being raised wherein the merchant ends up taking two paid plans because he never understood that his previous plan got activated and some of those things are happening on growth service wherein for some reason the failure the processing gets successful but the update never happens so we don't have the logs for those Ankit has mostly like 70% completed the logs uh sorry Adita and what we wanted to do is we wanted to wait for a week for the
 
 
00:16:53
 
Namrata Khandelwal: logs to be sufficient so that from Sunday once we start with the war room we can solve all the issues that are there starting from
Vrajesh Jaidev Iyengar: Yeah. So I think I'll just uh I'll just short circuit this. I need to go into another meeting soon.
Namrata Khandelwal: huh
Vrajesh Jaidev Iyengar: Uh we should fix this also. Right. I'm aware of the web hooks issue.
Namrata Khandelwal: yeah
Vrajesh Jaidev Iyengar: I I remember I read that talk that you had prepared for this as well. Uh we should fix it. What we need to do right now, let's create a new channel, a temporary channel just for like let's call it growth war room or something like that. Uh let's maintain a tracking sheet with all the known issues that we have.
Namrata Khandelwal: Yeah.
Vrajesh Jaidev Iyengar: Can you just have a thread on the growth ideas channel? It's not a growth idea. I mean it'll just give that's a public channel that we use.
 
 
00:17:32
 
Vrajesh Jaidev Iyengar: The other channel can also be public. Okay. Like I just want to have focused discussion growth may or like we discuss a lot about that thing. Yeah. you post a link over there that we are discussing the war room in this channel and also dev environment is also broken for pricing bundle so we can't test any changes on dev put all the issues uh in there uh let's list down all the issues then we'll prioritize which ones are P 0 P1 P2 and all of that and then we'll start fixing we need to fix the
Namrata Khandelwal: Okay.
Vrajesh Jaidev Iyengar: channel
Namrata Khandelwal: So are you suggesting that we still start volume uh you know now itself?
Vrajesh Jaidev Iyengar: yes why would we not start right now we have so many other issues to
Namrata Khandelwal: Yeah, but there are some like Yeah, there are many other issues but for a lot
Vrajesh Jaidev Iyengar: So start start with that then NA right I mean like I understood that like for the web hook one you want and for
 
 
00:18:13
 
Namrata Khandelwal: of
Vrajesh Jaidev Iyengar: the you want to wait for some more logs that's okay we can prioritize that after a few days also till then let's uh prioritize the other issues that we know right so let's
Namrata Khandelwal: Okay, sure. Okay. So that was just one of Yeah,
Vrajesh Jaidev Iyengar: let's start right let's start right
Namrata Khandelwal: sure. Uh but just wanted to say that that was just one of the things. The other thing was also like apart from these two schedules that we are picking up with the PCore team,
Vrajesh Jaidev Iyengar: Okay.
Namrata Khandelwal: there are certain other things also wherein we don't end up getting any logs for other schedules that are not running. So for a lot of those things we need logs to be in place. But okay, what I'll do is I'll start a channel and then post all the things and then
Vrajesh Jaidev Iyengar: I think uh Rajes is already starting a channel. What you can do is maintain a central tracker uh with all the known issues over there.
 
 
00:18:57
 
Namrata Khandelwal: Sure.
Vrajesh Jaidev Iyengar: Right in that we will track like what is the status who's working on it are we blocked what is the ETA what is all of that we'll track in that central tracker only and this could be this is any sort of issue not necessarily only subscription or credits or anything like that any issue okay so start
Namrata Khandelwal: Sure.
Vrajesh Jaidev Iyengar: collecting that list maybe in the second half today let's connect again and we'll go and prioritize that list
Namrata Khandelwal: Sure.
Vrajesh Jaidev Iyengar: and assign owners for each one of Cool.
Namrata Khandelwal: Okay. Okay. All right.
Vrajesh Jaidev Iyengar: So, let's set up some time second half maybe five or 6:00 or something like that. Is that enough time?
Namrata Khandelwal: Uh yes, sure.
Vrajesh Jaidev Iyengar: Could you set that up then? Just set up a follow-up meeting. Same same group of people,
Namrata Khandelwal: Okay. Uh we'll do
Vrajesh Jaidev Iyengar: please. I have some FTX demos which I need to go to.
 
 
00:20:09
 
Vrajesh Jaidev Iyengar: Okay. Anyways, I think like just create that thing. Uh once you're ready, just ping on that war room channel itself. Uh I'll let you guys know when I'm free so that we can review it. Honestly, you can uh you guys can do that initial pass of prioritization on your own, right? I think uh take a call what use your best judgment on that and just ping me I'll take a look at uh today there's actually a lot of FTX demos so I need to be there and uh present a couple of things whenever I get time I'll come talk to you guys and we'll review it then sounds good sure I'll just type these can you share me the MID of that merchant who u who taken that two light temporary translate.
Namrata Khandelwal: Shannon.
Vrajesh Jaidev Iyengar: Yeah. And uh please uh like let's follow that tracker that Namita is going to create. Put all the information in that. That will become like our bible for the next few days until we sort out all uh I'll uh should I put the queries for debugging also?
 
 
00:21:13
 
Vrajesh Jaidev Iyengar: That will make it a little bit noisy. You can you can put you can link it somewhere. You can say that the query is in this slack message or something like that. I'll you figure it out. I mean like basically like we I want that to be the central starting point from there you link to any other content that you want but basically I want to see in a single place what are all the issues that we need to address what is the status and who is working on what okay right that is that is that is why I want to do all of this but uh I mean like let's treat this as a war room all of you full focus on this only nothing else uh what is Adita working on Adita is working on log logging which is relevant So we'll pull him in also like if
Namrata Khandelwal: uh Tushar we would really need the logs to be out as soon as possible and uh Ankit is also
Vrajesh Jaidev Iyengar: needed.
 
 
00:22:03
 
Namrata Khandelwal: working on a priority issue itself which is the UCS cash issue. Uh cross body team has raised it with us. They are getting a lot of escalations due to some cash issue that we are facing. I'll tag you in that thread. So even Ankit would be working on that itself
Vrajesh Jaidev Iyengar: Yeah. No, that's fine. that is also an issue that we need to fix. So also add that to this war room.
Namrata Khandelwal: today.
Vrajesh Jaidev Iyengar: Not a problem. Um other thing that we also need to do is take a look at PSC tickets. Are there any patterns or trends that we need to fix systematically? That should also be an action item in this uh
Namrata Khandelwal: Sure. Okay.
Vrajesh Jaidev Iyengar: tracker.
Namrata Khandelwal: And this time I uh one thing I want to do is I don't want to just see the PSC tickets for the last 6 months or 3 months. I also want to be s like going through each API flow that is there and you know sit with the product and understand okay all edge cases are being covered so that we are not just
 
 
00:22:51
 
Vrajesh Jaidev Iyengar: Yes, 100% align with
Namrata Khandelwal: reactive and we are also proactive because this has
Vrajesh Jaidev Iyengar: that.
Namrata Khandelwal: happened for way too long I feel
Vrajesh Jaidev Iyengar: Yeah, I I agree. I think this is a must do. Uh in fact, Navita,
Namrata Khandelwal: so
Vrajesh Jaidev Iyengar: maybe that can be your top priority right now, right? at least help us with the discovery because out of that we might uncover new major issues that we don't even know about yet.
Namrata Khandelwal: shortly. Okay.
Vrajesh Jaidev Iyengar: Okay, I'm currently also working on one more issue which is like memory spike in front.
Namrata Khandelwal: Okay.
Vrajesh Jaidev Iyengar: So should I dearize that? Uh actually that's not uh what is like what is the impact of that? Impact is just though but I suspect that that is not a P issue. We'll treat that as a P. Right. So anyways I think this is what I want. I want all the known issues whether it's like website related subscription whether it's tech or product related doesn't matter let's put all of the known issues in one sheet and then we'll prioritize right it honestly while I understand what it's uh what you're saying we should fix it but it's not causing any merchandising issues right now right because so that's probably a P1 or maybe even a P2 issue
 
 
00:24:17
 
Namrata Khandelwal: Uh Rajes HLB pre deprioritized for me then for this week and till we fix all these issues.
Vrajesh Jaidev Iyengar: Good to go with they don't have band. It's a band conversation always the dev is not there. Everyone is FDA except that thing is owned by dev not us. I I will also say one thing like if it's a high priority issue and the impact is high right we'll start IM call for it. IM call everyone has to join it. Someone told me at some point that the only way to get work done here is IM calls. There was IM call last week because like Shuhish was not able to merge up PR and started IM like what the f***? Uh they do the same thing in cross every you know him right? Yeah, if we are not able to merge the P, we can start. If it is blocked, let's say this is not a SOP. No, no, it is SOP. No, no, for this like it shouldn't be abused.
 
 
00:25:48
 
Vrajesh Jaidev Iyengar: I think this itself is abused. Yeah, that's what I'm saying. That shouldn't be But that is the SOP. I have both and I'll just talk to him also after that. Okay, cool. Anyways, I need to go guys but I'll connect with all of you later in the second half of time. We'll go through the list but in the meanwhile make sure that the list is complete. Prioritize it. Uh prioritize on impact. Okay. And then let's start fixing it one by one. Sure. Uh who all is available? So uh one I think we need one guy from PSA for not daily for task just for context and the can I can add the he's the guy who gave me the query just for
Namrata Khandelwal: But for actively working on the dev task right now only me uh and Ankit I think after he fixes the UCS KD is also not free for this week till FDX I think.
 
 
00:26:51
 
Vrajesh Jaidev Iyengar: it Yeah. Yeah. KD is not so is not
Namrata Khandelwal: Yeah.
Vrajesh Jaidev Iyengar: working on website performance or something if we need him for any task that is I'm okay to prepare do we but let's see where and we have two people but we need exactly Even though she won't be able to mostly tomorrow onwards she should be but she's actually working on something player also right back and have gone from like when she will finish her task let's include her also in in this room as soon as she mostly like by tomorrow day she'll be the day after that FTX after that one can see FTX as a reason. Yeah. Yeah. Should I add CSOPS folks like anyone who channel for all these issues? Not yet. One message from that. I was trying to skip that because I'm meeting with right now. I I'll leave you please. monthlys could be anything.
 
 
00:29:29
 
Vrajesh Jaidev Iyengar: channel I'm not putting anything but whatever documentation you had started no based on today's discussion with
Namrata Khandelwal: Mhm.
Vrajesh Jaidev Iyengar: tentative timelines engineers whoever is involved in
Namrata Khandelwal: All right.
Vrajesh Jaidev Iyengar: this I'll also take a view and
Namrata Khandelwal: See, valid.
Vrajesh Jaidev Iyengar: assign that is the realvenue loss% okay with are not working on HQ.
Namrata Khandelwal: It will also look like Namita or surprising but already
Vrajesh Jaidev Iyengar: But publicly I want people to feel like it is worth putting in full engineering and effort into fixing this. add
Namrata Khandelwal: Rajes I'll just leave I'll go and start project plan I will
Vrajesh Jaidev Iyengar: yeah I'm
Namrata Khandelwal: can we sit together for this so that figure
Vrajesh Jaidev Iyengar: good
Namrata Khandelwal: out project Ballet
Vrajesh Jaidev Iyengar: I'm okay with anything
Namrata Khandelwal: doubting. Stop doubting me.
Vrajesh Jaidev Iyengar: front front
Namrata Khandelwal: Here
Vrajesh Jaidev Iyengar: camp.
Namrata Khandelwal: you go.
Vrajesh Jaidev Iyengar: Yeah. Yeah, det is the only different EB changes.
 
 
Transcription ended after 00:35:39


This editable transcript was computer generated and might contain errors. People can also change the text after it was created.

---

## Linked Entities
- [[people/sagar-agarwal]]
- [[people/satyam-mishra]]
- [[people/tushar-saxena]]
- [[people/vrajesh-iyengar]]
