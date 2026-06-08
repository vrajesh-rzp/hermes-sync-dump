---
title: "Ankit / Vrajesh Meeting"
type: meeting
date: 2026-06-08
tags: [meeting, gemini-recording]
gemini_doc_id: 1yn7hmh9AfudI1j6W9PCRPufyz-6tCcO2v7guxOL1-II
---

# Ankit / Vrajesh Meeting


**Participants:** Ankit, Vrajesh

**Date:** 2026-06-08
**Source:** Gemini recording ([Google Doc](https://docs.google.com/document/d/1yn7hmh9AfudI1j6W9PCRPufyz-6tCcO2v7guxOL1-II/edit))

---

## Summary

﻿📝 Notes
Feb 11, 2026
Ankit / Vrajesh
Invited Vrajesh Jaidev Iyengar Ankit Garg Nikhil Uday Khadilkar Sheetal Monica Veeresh S Shillin
Attachments Ankit / Vrajesh 
Meeting records Transcript 

Summary
Addressing Suspended Subscriptions First
The team focused on immediate remediation for 40 active users with suspended subscriptions, deciding to bypass the operational team for confirmation and refund processing in this initial phase.

Technical Glitch and Refund SOP
A technical glitch causing merchants to toggle between 2.5% and 1.9% MDR plans was identified as high priority and is being fixed by the backend team. The tedious current refund process lacks automation and requires a formal SOP, including finance approval, for scalability.

Retrospective Refunds and Merchant Experience
Over 100 merchants require retrospective refunds due to plan changes not reflecting immediately, necessitating Service Request Forms (SRFs). The negative merchant experience, especially concerning plan switching, is deemed a critical priority fix for organic growth.

Details
Decisions
Rate these decisions: Helpful or Not Helpful

NEEDS FURTHER DISCUSSION
Suspended Users Refund Plan
Focus effort on 40 suspended users who actually played. Do not issue refunds for these users as Step One.

Process Refunds Bulk Email
Ops team process refunds in bulk via email. Team member sends email authorizing bulk refund process for suspended users.

Automate Plan Cancellation
Run cron job every day. Job cancels incorrect plan assignments identified in technical glitch.

ALIGNED
Technical Glitch Refund Process
Retrospective refund issuance for technical glitch requires raising System Request Form (SRF). Rushik Shagarwal provides assistance processing SRF.

More details:
* Suspended Subscriptions and Remediation: Sheetal Monica initiated discussion regarding the status change of subscriptions, noting that 40 users who had played the game were suspended, despite an initial query showing 1200 suspended accounts. The immediate plan is to address the 40 active suspended users, but refunds will not be issued in the first step. Veeresh S Shillin indicated they would be available in 30 minutes to finalize related tasks.
* Refund Process and Technical Glitch Fixes: The team recognized that the current refund process is tedious, involving multiple approvals and lacking automation, requiring a standard operating procedure (SOP) that includes finance approval. Sheetal Monica suggested that they process refunds for the 40 users, bypassing ops, by sending an email once the suspension is confirmed. A high-priority technical glitch involving merchants switching between 2.5% and 1.9% MDR plans, where the original 2.5% plan temporarily reactivates, is being fixed by the backend team (00:01:37).
* Refunding Affected Merchants and Automation Needs: There are over 100 merchants affected by the issue where plan changes only reflect the next month, which was not captured due to the system only being live

---

## Full Notes

﻿📝 Notes
Feb 11, 2026
Ankit / Vrajesh
Invited Vrajesh Jaidev Iyengar Ankit Garg Nikhil Uday Khadilkar Sheetal Monica Veeresh S Shillin
Attachments Ankit / Vrajesh 
Meeting records Transcript 


Summary
Addressing Suspended Subscriptions First
The team focused on immediate remediation for 40 active users with suspended subscriptions, deciding to bypass the operational team for confirmation and refund processing in this initial phase.

Technical Glitch and Refund SOP
A technical glitch causing merchants to toggle between 2.5% and 1.9% MDR plans was identified as high priority and is being fixed by the backend team. The tedious current refund process lacks automation and requires a formal SOP, including finance approval, for scalability.

Retrospective Refunds and Merchant Experience
Over 100 merchants require retrospective refunds due to plan changes not reflecting immediately, necessitating Service Request Forms (SRFs). The negative merchant experience, especially concerning plan switching, is deemed a critical priority fix for organic growth.


Details
Decisions
Rate these decisions: Helpful or Not Helpful


NEEDS FURTHER DISCUSSION
Suspended Users Refund Plan
Focus effort on 40 suspended users who actually played. Do not issue refunds for these users as Step One.


Process Refunds Bulk Email
Ops team process refunds in bulk via email. Team member sends email authorizing bulk refund process for suspended users.


Automate Plan Cancellation
Run cron job every day. Job cancels incorrect plan assignments identified in technical glitch.


ALIGNED
Technical Glitch Refund Process
Retrospective refund issuance for technical glitch requires raising System Request Form (SRF). Rushik Shagarwal provides assistance processing SRF.


More details:
* Suspended Subscriptions and Remediation: Sheetal Monica initiated discussion regarding the status change of subscriptions, noting that 40 users who had played the game were suspended, despite an initial query showing 1200 suspended accounts. The immediate plan is to address the 40 active suspended users, but refunds will not be issued in the first step. Veeresh S Shillin indicated they would be available in 30 minutes to finalize related tasks.
* Refund Process and Technical Glitch Fixes: The team recognized that the current refund process is tedious, involving multiple approvals and lacking automation, requiring a standard operating procedure (SOP) that includes finance approval. Sheetal Monica suggested that they process refunds for the 40 users, bypassing ops, by sending an email once the suspension is confirmed. A high-priority technical glitch involving merchants switching between 2.5% and 1.9% MDR plans, where the original 2.5% plan temporarily reactivates, is being fixed by the backend team (00:01:37).
* Refunding Affected Merchants and Automation Needs: There are over 100 merchants affected by the issue where plan changes only reflect the next month, which was not captured due to the system only being live for three months. The team must issue a retrospective refund, which requires raising an SRF (Service Request Form). Rushik Shagarwal from CS will assist if there are questions about the SRF process and will confirm once the money transfer is complete (00:04:12).
* Ongoing Plan Management and Merchant Experience: The team needs to implement a daily cron job to cancel plans for those who fall into the refund criteria, which Sheetal Monica assumed Veeresh S Shillin would manage. The merchant experience, particularly when switching from a free to a paid plan and expecting a specific lower percentage, is considered a high priority. This priority fix is critical for organic merchants, but the negative experience is not exposed to existing, high-value merchants (00:05:27).


Suggested next steps
* Sheetal Monica will run a crown job every day to cancel a plan and handle the refund process for whoever falls into that.
* Sheetal Monica will send an email to process the refunds for the 40 people after they got suspended.


You should review Gemini's notes to make sure they're accurate. Get tips and learn how Gemini takes notes
Please provide feedback about using Gemini to take notes in a short survey.
📖 Transcript
Feb 11, 2026
Ankit / Vrajesh - Transcript
00:00:00
 
Sheetal Monica: Live status changing can happen through multiple reasons and we say that we were thinking of a solution from October to now who are suspended suspended. And how have you taken this out? What do you think? I checked his table. I am not very confident on Hey V by when will you come down?
Veeresh S Shillin: I'll come short 30
Sheetal Monica: Huh?
Veeresh S Shillin: minutes.
Sheetal Monica: 30 minutes. In 30 minutes you're leaving, is it?
Veeresh S Shillin: Yeah.
Sheetal Monica: Okay. Take a lot of time. Okay. We sat together. He shared the query that he to basically get the number of suspended but I basically inter it was coming 1200 for him but it's actually 40 because 40 are the ones who have actually played and the rest could be. So will you take care of 40 then? So 40 to take care that is part. So that is but you will not issue refunds but that is step one.
 
 
00:01:37
 
Sheetal Monica: Step two refunds we created an SOP which involves finance approval. We are aware of the refund process very tedious as you would have seen. There are multiple approvals. I spoke to he said that there is no automated we need to build this out. So in the meantime we'll still have So tell me can you send an email to I'm okay to process the refunds rather than op sending it because ops if I send opscess different they can get it done in bulk if you already know if you want to give it for this 40 people You can send an email after they got suspended because suspension time versus that is going to happen from when And we already have a few issues that we have. So this is second priority list. First is another one which was a technical glitch. So let's say you're on the 2.5% MDR plan and you switch to 1.9% MDR. Let's say 2.5 was active on first. 10th they pay and they come to a go sorry first they and 10th they switch to a paid which is 1.9 gets activated but then first it switches back to 2.5 till 10th 10 okay the date until they went in this is something that my back end is fixing this is new okay last I'm guessing based ticket volume coming from also data query there
 
 
00:04:12
 
Sheetal Monica: are more than 100 such merchants in so basically these purchases were on free plan free plan let's say it's any plan any plan change the plan change reflects next month only from that particular date so the first and that happens like at least talking but since this has been live for only 3 months we weren't able to like capture this specific condition we are fixing of priority fix is halfway done. Once that is just completed the same person will look this fix. Okay. So two things one is retrospective we have to issue the refund about raise an SRF and SRF will get processed issue number one that is spoken and all that that I'm sure you need to do and then there's an SRF uh SRF will come to my SRF Rushik Shagarwal is the PC. If you don't know how to do it, Rushik Shagarwal will help. He's from CS. Once this is done, he will confirm that the money is done. Okay. Now, second point is run a crown job every day and cancel a plan.
 
 
00:05:27
 
Sheetal Monica: This I'm assuming you will take care of it. And then same process. Whoever falls into to say that uh issue the refund then you will take care of it. You will send to make your own life easy to the automation of this uh this is like the second issue where they're saying the first one is a bigger one which she's discussing. No no I get it. I'm not I'm sure that week or maybe Tuesday next week the timeline for that first issue. So first one also we'll have an instant of where we'll have to give a refund. No no it is not a refund. It is a poor experience. It is not. So the obviously the second one is a high priority for us which is when the merchant switches from a free plan to a paid plan they expect% I'm sure he's solving for this. The second case99 months and actually higher then it makes sense to take and there's always option for custom pricing so for custom pricing calling or sales team and all we are not showing this experience at So we're keeping the high value merchants out of the only for this organic merch and also this is not exposed to existing merchant people who get activated from here on thanks nice meeting. Thanks because it's only info can be seen in one or two. I can't have it along too much. It's just not have to click on certain options to view the game. there. What are other placeholders in I don't know. I am using We not we are making changes only for custom schedules on the dashboard. You mean the custom schedules? Custom schedules on the dashboard. Okay. can show this an admin dash. What is Yes, three of his head. We can show this video off.
 
 
Transcription ended after 00:24:49


This editable transcript was computer generated and might contain errors. People can also change the text after it was created.
