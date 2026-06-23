---
title: "VRM Weekly Sync"
type: meeting
date: 2026-04-23
tags: [meeting, gemini-recording]
gemini_doc_id: 1iGt0mNhMGzNWRMLkH4ELSFiJXt06CXPW-WfxwiAWfNM
---

# VRM Weekly Sync


**Date:** 2026-04-23
**Source:** Gemini recording ([Google Doc](https://docs.google.com/document/d/1iGt0mNhMGzNWRMLkH4ELSFiJXt06CXPW-WfxwiAWfNM/edit))

---

## Summary

﻿📝 Notes
Apr 23, 2026
VRM Weekly Sync
Invited Anurag Rastogi Vrajesh Jaidev Iyengar Sagar Agarwal
Attachments VRM Weekly Sync
Meeting records Transcript 

Summary
VRM memory architecture, integration strategies, and service deployment plans were established for agentic system optimization.

VRM Memory Architecture Planning
The team decided to deploy the memory layer as a standalone service rather than part of the existing application codebase. This architecture facilitates real-time webhook updates instead of relying on periodic pulls.

Authentication and Service Integration
Integration with the edge service will manage authentication and security requirements. Utilizing this gateway handles rate limiting and allows reuse of existing agentic dashboard skills.

Data Source Strategy
Prioritize direct data access to reduce latency for the VRM system. Future efforts focus on ensuring consistent data granularity across enterprise accounts and WhatsApp support.

Rate this Summary: Helpful or Not Helpful

Decisions
We've updated the Decisions section using your feedback.
Let us know what you think: Helpful or Not Helpful

ALIGNED
* Markdown file storage architecture The memory system will utilize Markdown files as the data storage format.
* Real-time memory update mechanism The memory architecture will implement a webhook-based update system for real-time data ingestion instead of relying on periodic batch jobs.
* Shared Git branching workflow The development process will follow a standardized workflow using feature branches that merge into a central master branch.
* Universal service architecture The memory layer will be architected as a reusable, standalone service to support all internal use cases rather than being coupled to specific applications.
* Edge team authentication integration The platform will integrate with the Edge team to manage authentication, security, and request routing.
* LangSmith observability implementation The team will integrate LangSmith into the system to manage conversation observability.

Next steps
* [Vrajesh Jaidev Iyengar] Build Agent: Write different agent configured for VRM use cases.
* [Vrajesh Jaidev Iyengar] Integrate Langu: Integrate Langu system for observability tracking.
* [Vrajesh Jaidev Iyengar] Get Document: Retrieve needed project documentation or transcription.
* [Vrajesh Jaidev Iyengar] Share Contacts: Send 2 names, Ishan and another contact, from the Edge team.
* [Anurag Rastogi] Contact Edge: Reach out to Edge team contacts to explain the building plan and discuss required architecture.
* [Vrajesh Jaidev Iyengar] Document Tasks: Document all discussed action items and set broader project tasks.

Details
Did the screenshots in this section make your notes better or worse?
* Merchant Profile and VRM Automation Overview: The team is building a system where a merchant profile creates a wiki tree, which can be fetched using the merchant ID or company name, including details like profile activit

---

## Full Notes

﻿📝 Notes
Apr 23, 2026
VRM Weekly Sync
Invited Anurag Rastogi Vrajesh Jaidev Iyengar Sagar Agarwal
Attachments VRM Weekly Sync
Meeting records Transcript 




Summary
VRM memory architecture, integration strategies, and service deployment plans were established for agentic system optimization.

VRM Memory Architecture Planning
The team decided to deploy the memory layer as a standalone service rather than part of the existing application codebase. This architecture facilitates real-time webhook updates instead of relying on periodic pulls.

Authentication and Service Integration
Integration with the edge service will manage authentication and security requirements. Utilizing this gateway handles rate limiting and allows reuse of existing agentic dashboard skills.

Data Source Strategy
Prioritize direct data access to reduce latency for the VRM system. Future efforts focus on ensuring consistent data granularity across enterprise accounts and WhatsApp support.


Rate this Summary: Helpful or Not Helpful




Decisions
We've updated the Decisions section using your feedback.
Let us know what you think: Helpful or Not Helpful


ALIGNED
* Markdown file storage architecture The memory system will utilize Markdown files as the data storage format.
* Real-time memory update mechanism The memory architecture will implement a webhook-based update system for real-time data ingestion instead of relying on periodic batch jobs.
* Shared Git branching workflow The development process will follow a standardized workflow using feature branches that merge into a central master branch.
* Universal service architecture The memory layer will be architected as a reusable, standalone service to support all internal use cases rather than being coupled to specific applications.
* Edge team authentication integration The platform will integrate with the Edge team to manage authentication, security, and request routing.
* LangSmith observability implementation The team will integrate LangSmith into the system to manage conversation observability.




Next steps
* [Vrajesh Jaidev Iyengar] Build Agent: Write different agent configured for VRM use cases.
* [Vrajesh Jaidev Iyengar] Integrate Langu: Integrate Langu system for observability tracking.
* [Vrajesh Jaidev Iyengar] Get Document: Retrieve needed project documentation or transcription.
* [Vrajesh Jaidev Iyengar] Share Contacts: Send 2 names, Ishan and another contact, from the Edge team.
* [Anurag Rastogi] Contact Edge: Reach out to Edge team contacts to explain the building plan and discuss required architecture.
* [Vrajesh Jaidev Iyengar] Document Tasks: Document all discussed action items and set broader project tasks.




Details
Did the screenshots in this section make your notes better or worse?
* Merchant Profile and VRM Automation Overview: The team is building a system where a merchant profile creates a wiki tree, which can be fetched using the merchant ID or company name, including details like profile activity and payment metrics. The goal is for VRM to automate and chatter using data stored in Markdown files, essentially text that will be used by a super agent, confirming it is a three-bit structure (00:02:07).
  

* SSO and Authentication Constraints: The current setup is blocked on Single Sign-On (SSO) authentication for the super MCP Claw app UI version (00:02:07). Instead of SSO, a custom username/password or config login might be needed for the service which has access to all data, and they will need to mention this credential (00:04:21).
* Data Update Frequency and Architecture: The current data update frequency is every six hours, but this can be changed (00:04:21). A preferred approach is to move away from a pull system and have the wiki expose a webhook so events are pushed in real-time whenever an interaction or status change occurs, requiring a memory update endpoint for other services to hit (00:05:49).
* Data Source Reliability and Super Leap Integration: The frequency of updates is critical for merchant issue follow-up, suggesting that the granularity needs to be fast. If super leap does not update in real-time, it cannot be used as a reliable source for current data; thus, they must decide if super leap or the platform being built (VRM memory) will be the core source of data (00:07:04).
* Repository Collaboration and Deployment: They have set up the same pipeline to push into the same AWS instance for VRM. The standard operating procedure for collaboration will involve cloning the master branch into a feature branch, making changes, and then creating a pull request into the master branch to trigger the deployment pipeline (00:07:54).
* Use Cases for the Memory Layer: The memory layer being built is intended to be widely used, not just for VRM, but for other use cases as well (00:09:24) (00:13:40). The VRM will serve as an end-to-end proactive memory layer for EV merchants, act as support for mid-market accounts, and provide a support system for enterprise accounts, particularly with WhatsApp integration (00:15:02).
  

* Performance and Data Latency Concerns: While the Super UI panel provides decent responses, using it takes a lot of tokens and involves fetching data across different tables, leading to longer latency (00:10:29). The VRM team needs shorter latency and should be closer to the source of data instead of pulling from Super Leap, which uses a cron job and is built primarily for enterprise business (EB) (00:12:03).
  

* Super Leap Integration Approach: A different approach suggests that Super Leap should be able to read data from the VRM memory layer, rather than VRM pulling data from Super Leap (00:15:02). They confirmed the VRM graph will provide information available on Superle Plus, though it is not real-time, by using fetch pipelines (00:17:12).
  

* Integrating with Agentic Backend and Skills: The service needs to integrate with the agentic backend so that it can also read into this data source (00:20:47). The agentic dashboard and VRM can access this edge service, which is their gateway edge (00:22:19). They will reuse the central set of skills maintained by the agentic dashboard, such as getting settlement information or creating tickets (00:23:43).
* Authentication and Gateway Edge Service: To integrate with the agentic dashboard, they must onboard WhatsApp for authentication, converting a meta token to a JWT passport using the edge team (00:22:19). It is suggested that the memory layer be deployed as a new service and integrate with the edge team to manage rate limiting and infra concerns (00:26:36).
* Edge Team Collaboration and Security: The edge service currently gates requests for security and authentication (00:27:40). They suggest connecting with the edge team to white-label the service and handle authentication, which is critical since the service is housing data and other services are expected to talk to it (00:28:49). Vrajesh Jaidev Iyengar will share the names of two people, Ishan and one other person, from the edge team for Anurag Rastogi to contact to understand the architectural design (00:29:56).
* Future Documentation and Tasks: Vrajesh Jaidev Iyengar will document the discussion and the broader tasks that they have set out to achieve (00:29:56). Both participants agreed to use a separate service for the memory layer instead of part of the VRM nextJS application codebase, treating it as a service instead of a core component (00:24:58).




You should review Gemini's notes to make sure they're accurate. Get tips and learn how Gemini takes notes
How is the quality of these specific notes? Take a short survey to let us know your feedback, including how helpful the notes were for your needs.
📖 Transcript
Apr 23, 2026
VRM Weekly Sync - Transcript
00:00:00
 
Anurag Rastogi: So this is broadly what I have is set up. So maybe let me just open this one. Thank you. U this this merchant ID merchant name right uh has two
Vrajesh Jaidev Iyengar: Second checking with Sak if he's joining
Anurag Rastogi: different ones. Okay.
Vrajesh Jaidev Iyengar: He said he'll join but he just got a call and he has walked away.
Anurag Rastogi: Okay. Um, so this is what we are trying to build, right? Um, so supposedly there is a merchant, right? Uh, profile Yeah. It it creates a wiki tree,
Vrajesh Jaidev Iyengar: Huh?
Anurag Rastogi: right?
Vrajesh Jaidev Iyengar: Uh-huh.
Anurag Rastogi: This is how it can be fetched by calling the merchant ID by calling the uh name of the company, right? And RM VRM both same. Um then it talks about you know its profile activity payment metrics right so broader view we will pass on this one right Google meeting notes promises etc. to place case on the watch list. The RM also committed CC2 emails etc. Right.
 
 
00:02:07
 
Anurag Rastogi: Details interaction human RM
Vrajesh Jaidev Iyengar: You
Anurag Rastogi: VRM
Vrajesh Jaidev Iyengar: go.
Anurag Rastogi: differentiation.
Vrajesh Jaidev Iyengar: Okay.
Anurag Rastogi: Secondly,
Vrajesh Jaidev Iyengar: Okay.
Anurag Rastogi: so this is open. This is for VRM to automate and
Vrajesh Jaidev Iyengar: Yeah.
Anurag Rastogi: chatter. key.
Vrajesh Jaidev Iyengar: Think about all of this we are storing as MD files right like these will all be like basically just text that
Anurag Rastogi: Yes, correct. Correct.
Vrajesh Jaidev Iyengar: um will be used as a super agent a rank
Anurag Rastogi: It's a three bit structure. Correct. It's a three bit structure.
Vrajesh Jaidev Iyengar: source
Anurag Rastogi: Yeah. Yeah.
Vrajesh Jaidev Iyengar: take
Anurag Rastogi: MD you use one merchant. Right. But are kind of today good
Vrajesh Jaidev Iyengar: Huh?
Anurag Rastogi: enough
Vrajesh Jaidev Iyengar: Take up.
Anurag Rastogi: right again if I can use super MCP clawed desktop sorry claw app UI version razor enterprise version it's not working as a individual setup like this
Vrajesh Jaidev Iyengar: Uh
Anurag Rastogi: it is currently blocked on your
 
 
00:04:21
 
Vrajesh Jaidev Iyengar: and uh this it is blocked on SSO fair.
Anurag Rastogi: SS
Vrajesh Jaidev Iyengar: Uh I think I'll talk to if needed
Anurag Rastogi: H there's a WhatsApp group is there as well.
Vrajesh Jaidev Iyengar: and
Anurag Rastogi: I'm directly pushing on that group configuration or uh like I tested just now it's not working. Um um
Vrajesh Jaidev Iyengar: basically which has access to all all data and you just Give those
Anurag Rastogi: Mhm.
Vrajesh Jaidev Iyengar: credentials. This will be this won't be like an SSO login. This will be maybe a custom username password login or config.
Anurag Rastogi: Huh?
Vrajesh Jaidev Iyengar: We'll need to mention this credential.
Anurag Rastogi: This is so loged, right? Or supposedly I can't because it's only available on claw anthropic UI desktop web.
Vrajesh Jaidev Iyengar: Huh?
Anurag Rastogi: There's no way. So, MCP are made for those level of nuances,
Vrajesh Jaidev Iyengar: Correct.
Anurag Rastogi: right?
Vrajesh Jaidev Iyengar: Correct. How when is this getting updated in this memory?
Anurag Rastogi: So, uh I think every six hours is what we are updating.
 
 
00:05:49
 
Anurag Rastogi: Uh we can change it as well. So, currently it's not
Vrajesh Jaidev Iyengar: Yeah, instead of six hours like I know you might be running a batch update like instead of it being like a pull system like like your this basically this wiki exposes
Anurag Rastogi: Huh?
Vrajesh Jaidev Iyengar: an a web hook which you go to all of these respective sources of data and you like you push the event whenever it is happening in real time.
Anurag Rastogi: MCP should trigger uh some call uh and it just updates
Vrajesh Jaidev Iyengar: Hal there should be one memory update endpoint that this uh whatever what are you calling this
Anurag Rastogi: it
Vrajesh Jaidev Iyengar: platform like the
Anurag Rastogi: current like VRM party memory VR
Vrajesh Jaidev Iyengar: merchant BRM memory
Anurag Rastogi: memory.
Vrajesh Jaidev Iyengar: right so memory update manag API is exposed for other services to hit and send like a memory update memory
Anurag Rastogi: Yeah.
Vrajesh Jaidev Iyengar: update like whenever there is a actual ticket interaction interactions once that interaction is done or closed or there's a status change to we update this at that time
 
 
00:07:04
 
Anurag Rastogi: Uh,
Vrajesh Jaidev Iyengar: real the reason I'm asking for that is because
Anurag Rastogi: sure. But I put
Vrajesh Jaidev Iyengar: granularity will need to be fast I'm thinking if a merchant has an issue they keep followly
Anurag Rastogi: 100%. Yeah. Yeah. I'm I'm with you on that. But I'm just thinking about the architecture, right? So supposedly fresh for that matter.
Vrajesh Jaidev Iyengar: Huh.
Anurag Rastogi: it doesn't get updated on super in real time right
Vrajesh Jaidev Iyengar: Okay.
Anurag Rastogi: super but
Vrajesh Jaidev Iyengar: Huh.
Anurag Rastogi: I think for that also they have chron right then we are not
Vrajesh Jaidev Iyengar: Okay. Correct.
Anurag Rastogi: 100% like exactly but
Vrajesh Jaidev Iyengar: Then super leap we can't use as a reliable source.
Anurag Rastogi: super we can use it for you know merchant logging
Vrajesh Jaidev Iyengar: I think we need a huh we need to decide if super leap is going to be the place where all of this data
Anurag Rastogi: Um.
Vrajesh Jaidev Iyengar: sits or whether what you're building is the place where this data will sit like a core source of
 
 
00:07:54
 
Anurag Rastogi: Mhm.
Vrajesh Jaidev Iyengar: data both will exist but will read out a super leap or super leap can reference What's
Anurag Rastogi: Huh. Ah, correct. uh also super leap may um I think challenges see it also has LLM uh which can talk about um you know merchants context configuration etc invalid indirect URI if I'm trying to use this MCP
Vrajesh Jaidev Iyengar: Oh, good.
Anurag Rastogi: uh
Vrajesh Jaidev Iyengar: VRM I have set up the same pipeline to push into the same AWS instance.
Anurag Rastogi: Huh?
Vrajesh Jaidev Iyengar: So nothing changes. It's just now the code will like whatever changes you want to do VRM and as an SOP uh the process we'll follow is just so that we can collaborate is uh master branch master branch out with your into your feature branch feature branch changes and then once you're happy with your changes just push it like create a PR into master from your branch but we'll know the the change that the other person is making it run the deployment pipeline.
Anurag Rastogi: Take care.
Vrajesh Jaidev Iyengar: Okay.
 
 
00:09:24
 
Anurag Rastogi: Nice.
Vrajesh Jaidev Iyengar: So now we both can code into this repo. Just one question. This will be in a different like this will be a different endpoint right that we want
Anurag Rastogi: Correct.
Vrajesh Jaidev Iyengar: the VR to access those same
Anurag Rastogi: Yes.
Vrajesh Jaidev Iyengar: cloud. Correct.
Anurag Rastogi: Um I don't mind doesn't matter. No. See
Vrajesh Jaidev Iyengar: Doesn't matter. Yes.
Anurag Rastogi: is
Vrajesh Jaidev Iyengar: Doesn't matter. If this is going to be something that is uh read extensively by other
Anurag Rastogi: can be widely used. It can be widely used if it is done right. uh not just for VRM for other use cases as
Vrajesh Jaidev Iyengar: services
Anurag Rastogi: well doesn't matter
Vrajesh Jaidev Iyengar: like it'll be I guess easier to observe for us.
Anurag Rastogi: much
Vrajesh Jaidev Iyengar: I don't know the technical constraints of having just one thing versus multiple things. I feel like we'll be the only consumers of this data initially at least or point of
 
 
00:10:29
 
Anurag Rastogi: see you I mean uh I was just talking about
Vrajesh Jaidev Iyengar: discussion.
Anurag Rastogi: like can I check what's happening right So
Vrajesh Jaidev Iyengar: I took as an example. What super capabilities do you have?
Anurag Rastogi: maybe
Vrajesh Jaidev Iyengar: He it created like a a PDF for me which is this quarterly business report and this data
Anurag Rastogi: CRM Super UI
Vrajesh Jaidev Iyengar: super
Anurag Rastogi: panel uh you can just uh query and uh it'll
Vrajesh Jaidev Iyengar: Okay.
Anurag Rastogi: respond. So this is this is how it looks under a razor pay
Vrajesh Jaidev Iyengar: Super.
Anurag Rastogi: super it's a default screen to like you you do it can you check what's happening with and uh it's all the data and it's uh giving a decent response based on the
Vrajesh Jaidev Iyengar: Uhhuh.
Anurag Rastogi: data which is available uh in the account
Vrajesh Jaidev Iyengar: So much girl.
Anurag Rastogi: to it's already there right but uh I'm again thinking key u it it might have taken a lot of tokens,
Vrajesh Jaidev Iyengar: Yeah, definitely.
 
 
00:12:03
 
Anurag Rastogi: right?
Vrajesh Jaidev Iyengar: Okay, you can see what I
Anurag Rastogi: And because the debug across different tables uh or
Vrajesh Jaidev Iyengar: got.
Anurag Rastogi: ink setup, hence uh more calls, more fetch, more time, right? We probably do not have that time uh in VRM.
Vrajesh Jaidev Iyengar: We need we need shorter latency.
Anurag Rastogi: Yeah.
Vrajesh Jaidev Iyengar: I think we should be closer to the source of data.
Anurag Rastogi: Yep.
Vrajesh Jaidev Iyengar: Super leap is pulling this from our data warehouses anyway or with the crown job. We should not pull from super leap. you should pull only the ones like the data that uh am have put in into
Anurag Rastogi: I sound.
Vrajesh Jaidev Iyengar: super
Anurag Rastogi: Uh
Vrajesh Jaidev Iyengar: objects like the actual parent child mapping
Anurag Rastogi: supposedly u support tickets timeline associated pipeline banned banned
Vrajesh Jaidev Iyengar: Cam mapping everything
Anurag Rastogi: pipeline merchant engagement
Vrajesh Jaidev Iyengar: but information PPC is
Anurag Rastogi: right.
Vrajesh Jaidev Iyengar: end of the day is built for EB. It is not for your bigger
 
 
00:13:40
 
Anurag Rastogi: VRM is for everyone.
Vrajesh Jaidev Iyengar: enterprise
Anurag Rastogi: That's what uh that's what it is like not VRM like this at least memory layer is for everyone.
Vrajesh Jaidev Iyengar: a memory layer for everyone. Fine. Memory layer for everyone.
Anurag Rastogi: uh
Vrajesh Jaidev Iyengar: I thought like that was something super cheap for solving for enterprise.
Anurag Rastogi: but but not at that scale. Right. So supposedly WhatsApp WhatsApp rights group
Vrajesh Jaidev Iyengar: is a WhatsApp. Huh? Correct. I think I think Superleaf supports that. I'll check with the team because when I was involved with the CRM
Anurag Rastogi: right
Vrajesh Jaidev Iyengar: project, we need to be able to have a consolidated view of all conversations across all channels including WhatsApp.
Anurag Rastogi: Okay. Okay. Uh,
Vrajesh Jaidev Iyengar: I'm not sure if it is done.
Anurag Rastogi: sure. Um,
Vrajesh Jaidev Iyengar: Are we sure VRM is not on TV? Yes. Because enterprise merchants have like this level of support.
 
 
00:15:02
 
Anurag Rastogi: First was key um for our use case for EV merchants uh VRM would be there end to end
Vrajesh Jaidev Iyengar: Okay.
Anurag Rastogi: proactive memory layer second was for midmarket midm It'll act as a support for
Vrajesh Jaidev Iyengar: Okay. Like a
Anurag Rastogi: camack
Vrajesh Jaidev Iyengar: Anybody
Anurag Rastogi: right why does scam has to go on super and prompt and Right. It should act as a harness directly helper. Okay. Uh similarly on enterprise accounts um again will act as a support system WhatsApp.
Vrajesh Jaidev Iyengar: If that is the case, then you know what I honestly think we are thinking of the super leap integration the other way around.
Anurag Rastogi: Mhm.
Vrajesh Jaidev Iyengar: Super leap should be able to read data from the VRM.
Anurag Rastogi: Mhm.
Vrajesh Jaidev Iyengar: It shouldn't be VRM is trying to pull super data to help the Uh
Anurag Rastogi: Okay. Different approaches, right? So,
Vrajesh Jaidev Iyengar: airport.
Anurag Rastogi: we supposedly notes right is also ingesting Google Meets transcripts right WhatsApp pushing to connect WhatsApp okay what what is happening at least
 
 
00:17:12
 
Vrajesh Jaidev Iyengar: Uh-huh. Okay.
Anurag Rastogi: Okay. Support, right? Um, merchant engagement
Vrajesh Jaidev Iyengar: Hello.
Anurag Rastogi: activities comments
Vrajesh Jaidev Iyengar: Hello.
Anurag Rastogi: like But
Vrajesh Jaidev Iyengar: Yeah, at least the same
Anurag Rastogi: supposedly I'm I'm using one source,
Vrajesh Jaidev Iyengar: sources
Anurag Rastogi: right?
Vrajesh Jaidev Iyengar: because I feel like we discussed this, right? It was doing so many calls, so many better.
Anurag Rastogi: So, okay, sorry.
Vrajesh Jaidev Iyengar: Huh?
Anurag Rastogi: But Right.
Vrajesh Jaidev Iyengar: Okay.
Anurag Rastogi: Whatever information is available on Superle Plus which is not real time. Uh, this graph will give you everything.
Vrajesh Jaidev Iyengar: Take a photo.
Anurag Rastogi: Right.
Vrajesh Jaidev Iyengar: What is the text of use for this?
Anurag Rastogi: Broadly fetch pipelines that can be accessed by VM or whatever information is
Vrajesh Jaidev Iyengar: Okay.
Anurag Rastogi: available across
Vrajesh Jaidev Iyengar: Yeah.
Anurag Rastogi: basically broader tickets including I think
Vrajesh Jaidev Iyengar: Okay. Mhm.
Anurag Rastogi: I was able to make it exhaustive because uh limited data set available on train tables but pipelines.
 
 
00:20:47
 
Vrajesh Jaidev Iyengar: Okay.
Anurag Rastogi: What are you thinking otherwise? Like
Vrajesh Jaidev Iyengar: The only trade-off I can see in using super gives us a lot of data, a lot of rich data which are actually like human validated uh inputs like many of them are human entered inputs. So confidence be higher. The only downside is this might take longer than directly hitting the source tables.
Anurag Rastogi: Yeah,
Vrajesh Jaidev Iyengar: So
Anurag Rastogi: at least how I am thinking definitely data
Vrajesh Jaidev Iyengar: yes,
Anurag Rastogi: but that it was a CRM it was not made for agent first architecture right it was it is always made for a human first
Vrajesh Jaidev Iyengar: it got it.
Anurag Rastogi: architecture It shouldn't take too much of time and what not right hence this LMI kind of architecture is important
Vrajesh Jaidev Iyengar: Okay, makes sense. Now actually coming to a bigger thing that I wanted to discuss. I know Sag asked me to integrate this with agentic back end. So then we will need the agentic back end to also be able to read into this data source.
 
 
00:22:19
 
Anurag Rastogi: Right.
Vrajesh Jaidev Iyengar: All the skills are will be written there that we can commonly access like the agency dashboard and VRM can access this edge service which is our gateway edge
Anurag Rastogi: Huh?
Vrajesh Jaidev Iyengar: rate and I will get as I had a meeting with the edge team today to accept like WhatsApp this uh you'll have to onboard WhatsApp as a scheme for authentication meta token we'll give it to the HTM HD team will convert
Anurag Rastogi: Okay.
Vrajesh Jaidev Iyengar: that to a JWT passport So basically contact basically request originator user ID merchant ID phone
Anurag Rastogi: Mhm.
Vrajesh Jaidev Iyengar: number that gets passed and
Anurag Rastogi: Okay.
Vrajesh Jaidev Iyengar: then or like our agent will be able to talk to the agent dashboard. So that is the work needed to connect this about if we want to build anything custom we will need to start building into the uh dashboard.
Anurag Rastogi: Can can you not do this in in the following fashion? Right. First, right agent from this from from this the current fetch v Just
 
 
00:23:43
 
Vrajesh Jaidev Iyengar: I can do that.
Anurag Rastogi: again,
Vrajesh Jaidev Iyengar: to back end I will write a different agent which will be built for VRM use cases and there's a different agent with its own persona it own set of instructions for the agentic dashboard they need to basically render some custom UI components as well right so I will only reuse
Anurag Rastogi: Mhm.
Vrajesh Jaidev Iyengar: the set of skills that they have to get settlement information get tickets create tickets those kind of things become things that are reusable and that are maintained centrally by this other
Anurag Rastogi: Okay.
Vrajesh Jaidev Iyengar: just use cases like fetching this context and maintaining this context uh adding context with the first message and session management whatever we write
Anurag Rastogi: Or also one more thing like whatever conversations are happening right uh we need to I think pass them
Vrajesh Jaidev Iyengar: but
Anurag Rastogi: to super as well
Vrajesh Jaidev Iyengar: it go
Anurag Rastogi: right some for audit as I
Vrajesh Jaidev Iyengar: Correct. So yeah that is one point.
Anurag Rastogi: have to repeat
Vrajesh Jaidev Iyengar: One more point is for observability for observability langu.
 
 
00:24:58
 
Vrajesh Jaidev Iyengar: So I will want us to also integrate langu.
Anurag Rastogi: this.
Vrajesh Jaidev Iyengar: So if we move to the agent dashboard already anyway. So I'll find a way for uh our conversations to also getated there basically you're aware of
Anurag Rastogi: Uhhuh.
Vrajesh Jaidev Iyengar: language and we won't need to maintain it much
Anurag Rastogi: Okay.
Vrajesh Jaidev Iyengar: so on these current discussions but I started
Anurag Rastogi: Vish
Vrajesh Jaidev Iyengar: transcription I will get the dog for you.
Anurag Rastogi: so that you know both of us are on the same page and document it somewhere as well and uh basis this let's decide the way forward set few things are very clear Right. VRMP integration proactive reactive.
Vrajesh Jaidev Iyengar: So in terms of the code architecture like code uh not arch whatever you want to call it uh version management of your code that you're writing right Same same this will be part of the same codebase that has the VRM nextJS app as
Anurag Rastogi: See,
Vrajesh Jaidev Iyengar: well.
Anurag Rastogi: um I don't think
Vrajesh Jaidev Iyengar: I I I agree with you.
 
 
00:26:36
 
Anurag Rastogi: right
Vrajesh Jaidev Iyengar: So I think what we should do is we should have a separate separate whatever you
Anurag Rastogi: now see
Vrajesh Jaidev Iyengar: want.
Anurag Rastogi: because I think you should use this as a service Then using it as a poor
Vrajesh Jaidev Iyengar: Correct. Exactly. Correct. Correct. So I'll just make a call to fetch context for whatever mid I identify and I will start uh like
Anurag Rastogi: in
Vrajesh Jaidev Iyengar: I will interact with the agentic dashboard back end or whatever myself.
Anurag Rastogi: exactly exactly right and I'll give that to you as well.
Vrajesh Jaidev Iyengar: I'll I I'll actually give you one suggestion. as a new service,
Anurag Rastogi: H.
Vrajesh Jaidev Iyengar: talk to the edge team, make them your gateway. The advantage would be that any uh rate limiting and all those other infra
Anurag Rastogi: Okay.
Vrajesh Jaidev Iyengar: concerns will no longer be your headache and you will receive like one very good gatekeeper for your service. Secondly,
Anurag Rastogi: Mhm.
 
 
00:27:40
 
Vrajesh Jaidev Iyengar: uh I can use the same authentication system to authenticate my requests to you. And then potentially when someone is on the dashboard, let's say agentic dashboard wants to uh use this service that you're building, they are already authenticated through edge.
Anurag Rastogi: Mhm.
Vrajesh Jaidev Iyengar: So soever they they send a request your way authentication you won't need to handle.
Anurag Rastogi: Right.
Vrajesh Jaidev Iyengar: That's
Anurag Rastogi: And help me understand this. Right.
Vrajesh Jaidev Iyengar: okay.
Anurag Rastogi: Key um got your point there. But uh service right can I work in this way? I don't know how how it can be worked upon but one single thought process that hey this is what I'm building right and whenever we are there uh
Vrajesh Jaidev Iyengar: Yeah.
Anurag Rastogi: we just do the integration with them based on their requirement but those can be handled like I don't want to say the team or because that will take
Vrajesh Jaidev Iyengar: Edge is a separate service. it lives today. What it does is it gates requests that go to all other like to dashboard to your accounts.
 
 
00:28:49
 
Vrajesh Jaidev Iyengar: To the website it's like a security system also in a way since
Anurag Rastogi: Mhm. Take care.
Vrajesh Jaidev Iyengar: you're housing data and you're expecting other services to talk to your service. It is I think very critical for you to either build an edge equivalent or connect with the edge team.
Anurag Rastogi: H.
Vrajesh Jaidev Iyengar: I would suggest connect with the edge team because you're building something that ideally other services should also be able to use.
Anurag Rastogi: Um, take a
Vrajesh Jaidev Iyengar: I won't say see I I don't I'm I'm aligned with you key this should not reduce your speed of
Anurag Rastogi: point.
Vrajesh Jaidev Iyengar: execution. So today I had a conversation with one guy. They seem very collaborative at least so far.
Anurag Rastogi: That's
Vrajesh Jaidev Iyengar: So the changes are also in the sense they will just need to white label your
Anurag Rastogi: all.
Vrajesh Jaidev Iyengar: service any request that comes to instead of something slash wiki that you had built instead of like let's say VRM or agentic dashboard hitting your endpoint directly you'll hit an endpoint that was white labelled by edge and then edge will in turn hit your endpoint and return the same data.
 
 
00:29:56
 
Anurag Rastogi: take understood.
Vrajesh Jaidev Iyengar: say it's mostly a routing change because the system already exists to authenticate and do all those
Anurag Rastogi: So Mhm.
Vrajesh Jaidev Iyengar: things.
Anurag Rastogi: Okay. Uh, can you please share the name of the person
Vrajesh Jaidev Iyengar: I'll send you I'll send you two people name one is and one is Ishan
Anurag Rastogi: who
Vrajesh Jaidev Iyengar: but even that uh very very very
Anurag Rastogi: uh sure then probably I'll just reach out to them help them understand what we're building and um understand like in
Vrajesh Jaidev Iyengar: collaborative
Anurag Rastogi: case they want to design architecture beforehand later how should it work how should we get You
Vrajesh Jaidev Iyengar: use key VRM and other such services will reach out will
Anurag Rastogi: listen.
Vrajesh Jaidev Iyengar: will make calls to you to fetch some some data about the merchant so that then they know it is merchant sensitive data so they will configure level of security they will need to put for your end point that kind of stuff and they have also told me key even for the
Anurag Rastogi: She can
Vrajesh Jaidev Iyengar: VRM use case like they are fully okay if you have no authentication and the end services handle like some authentication logics So that will be okay with them. Just you'll get then an advantage of rate limiting concerns any red. It won't be your problem to solve.
Anurag Rastogi: H. Got it. Understood.
Vrajesh Jaidev Iyengar: I'll bring you the PC parally. I'll just document like all these things that we discussed today broader like what are the different
Anurag Rastogi: Sure.
Vrajesh Jaidev Iyengar: tasks we are setting out to achieve.
Anurag Rastogi: Yeah. Both man.
Vrajesh Jaidev Iyengar: Thanks.
Anurag Rastogi: Okay. All right. Thanks.
Vrajesh Jaidev Iyengar: Thank you.
 
 
Transcription ended after 00:31:50


This editable transcript was computer generated and might contain errors. People can also change the text after it was created.

---

## Series
- Next: [[meetings/2026-04-28-vrm_weekly_sync-1]]

## Linked Entities
- [[people/anurag-rastogi]]
- [[people/sagar-agarwal]]
- [[people/vrajesh-iyengar]]
- [[projects/vrm]]
