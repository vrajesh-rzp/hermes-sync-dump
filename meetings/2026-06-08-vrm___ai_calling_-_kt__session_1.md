---
title: "VRM / AI Calling - KT (Session 1)"
type: meeting
date: 2026-06-08
tags: [meeting, gemini-recording]
gemini_doc_id: 1nqEbk-YXVuym7aib0WrklyAVnGqi5BfcC6DKVOrOSeI
---

# VRM / AI Calling - KT (Session 1)


**Date:** 2026-06-08
**Source:** Gemini recording ([Google Doc](https://docs.google.com/document/d/1nqEbk-YXVuym7aib0WrklyAVnGqi5BfcC6DKVOrOSeI/edit))

---

## Summary

﻿📝 Notes
Feb 18, 2026
VRM / AI Calling - KT (Session 1)
Invited Vinil Sanjay Vasani Anurag Rastogi Vrajesh Jaidev Iyengar Nikhil Uday Khadilkar Suhas More
Attachments VRM / AI Calling - KT (Session 1) 
Meeting records Transcript Recording 

Summary
VRM Concept and AI Architecture
The Virtual Relationship Manager (VRM) concept aims to service the unmanaged merchant base using an AI agent within existing WhatsApp group chats to handle routine queries like settlements and disputes. The reactive engine architecture was detailed, emphasizing the use of skills, paths, and intent classification to handle merchant messages via the preferred push/pull channel of WhatsApp.

Addressing Merchant Direct Messages
A consensus was reached that the system must respond to merchants who send direct messages (DM) to the VRM number, utilizing the existing reactive backend to prevent a confusing and 'broken experience.' The team agreed to prioritize getting the reactive components live first to gather learnings before productizing the proactive functionality, justifying the internal build as necessary to combine all required use cases.

Product Launch and Quarterly Goals
The primary objective is the launch of a scalable VRM product to 100 merchants, with Q4 established as the project deadline, stressing the necessity of high quality over rushed completion. Additional project scope includes building sales agents on the website to automate post-lead capture communication flows, especially for assisting with sign-ups and improving internal sales processes

Details
Decisions
Rate these decisions: Helpful or Not Helpful

NEEDS FURTHER DISCUSSION
Onboarding Process Alignment
Onboarding setup requires alignment and mapping to current fiscal quarter plan.

ALIGNED
Meeting Agenda Flow Standard
Meeting structure dictates initial Knowledge Transfer session review first. Reserve questions until session end.

Reactive Setup Deployment Strategy
Team takes local reactive setup live temporarily. Setup provides immediate learnings for future scale implementation.

Product Development Standards
Product must not be built halfast. Launch objective includes scaling product to 100 merchants for value capture.

Project Deadline Establishment
Q4 is project deadline. FTX goal is not deadline, allowing 15 extra days if necessary.

Website Lead Capture Process
Website sales agents will be built for lead capture flow. Leads captured from website trigger automatic call to encourage sign up.

More details:
* Concept and Purpose of VRM: The core concept of VRM (Virtual Relationship Manager) is to provide a managed experience for the unmanaged merchant base who currently only interact via support tickets. The goal is to use an existing communication channel, such as WhatsApp, where an AI agent can sit in a group chat to answer day-to-day merchant queries related to settlements, disputes, and business comparisons. This approach is intended to mitigate broader setup challenges and is based on

---

## Full Notes

﻿📝 Notes
Feb 18, 2026
VRM / AI Calling - KT (Session 1)
Invited Vinil Sanjay Vasani Anurag Rastogi Vrajesh Jaidev Iyengar Nikhil Uday Khadilkar Suhas More
Attachments VRM / AI Calling - KT (Session 1) 
Meeting records Transcript Recording 


Summary
VRM Concept and AI Architecture
The Virtual Relationship Manager (VRM) concept aims to service the unmanaged merchant base using an AI agent within existing WhatsApp group chats to handle routine queries like settlements and disputes. The reactive engine architecture was detailed, emphasizing the use of skills, paths, and intent classification to handle merchant messages via the preferred push/pull channel of WhatsApp.

Addressing Merchant Direct Messages
A consensus was reached that the system must respond to merchants who send direct messages (DM) to the VRM number, utilizing the existing reactive backend to prevent a confusing and 'broken experience.' The team agreed to prioritize getting the reactive components live first to gather learnings before productizing the proactive functionality, justifying the internal build as necessary to combine all required use cases.

Product Launch and Quarterly Goals
The primary objective is the launch of a scalable VRM product to 100 merchants, with Q4 established as the project deadline, stressing the necessity of high quality over rushed completion. Additional project scope includes building sales agents on the website to automate post-lead capture communication flows, especially for assisting with sign-ups and improving internal sales processes


Details
Decisions
Rate these decisions: Helpful or Not Helpful


NEEDS FURTHER DISCUSSION
Onboarding Process Alignment
Onboarding setup requires alignment and mapping to current fiscal quarter plan.


ALIGNED
Meeting Agenda Flow Standard
Meeting structure dictates initial Knowledge Transfer session review first. Reserve questions until session end.


Reactive Setup Deployment Strategy
Team takes local reactive setup live temporarily. Setup provides immediate learnings for future scale implementation.


Product Development Standards
Product must not be built halfast. Launch objective includes scaling product to 100 merchants for value capture.


Project Deadline Establishment
Q4 is project deadline. FTX goal is not deadline, allowing 15 extra days if necessary.


Website Lead Capture Process
Website sales agents will be built for lead capture flow. Leads captured from website trigger automatic call to encourage sign up.


More details:
* Concept and Purpose of VRM: The core concept of VRM (Virtual Relationship Manager) is to provide a managed experience for the unmanaged merchant base who currently only interact via support tickets. The goal is to use an existing communication channel, such as WhatsApp, where an AI agent can sit in a group chat to answer day-to-day merchant queries related to settlements, disputes, and business comparisons. This approach is intended to mitigate broader setup challenges and is based on the proven use of WhatsApp groups by mid-market and enterprise customers for internal communication and by smaller businesses with agencies (00:00:00).
* AI Agent Functionality and Human-in-the-Loop: The proposed setup involves a WhatsApp group where a merchant, their organization members, and representatives from the speaker's organization can interact. The idea is to incorporate a "human in the loop" for complex issues, though most queries are expected to be handled by the AI agent. If the agent cannot answer, it will either create a support ticket or provide a skills-based answer, with the agent's goal being to handle common questions (00:03:19).
* WhatsApp as a Push/Pull Channel: WhatsApp is preferred over the dashboard because it allows for pushing information, whereas the dashboard is a pull-based channel that requires the merchant to initiate contact. The plan is to use the same backend and skills developed for the agent dashboard for the WhatsApp channel, which will also provide daily business updates and marketing communications. The internal team will receive a UI where all their charts are available, mapping approximately 2,000 accounts to them via WhatsApp groups, which are created using official WhatsApp group settings (00:05:36).
* Reactive Engine Architecture and Components: The reactive engine handles messages from the merchant via WhatsApp and involves layers such as the Meta form layer, message layer, proactive engine, and reactive message handler. The engine validates input, checks the conversation state, and routes the request to a reactive connector, with the final response being an LLM response after making all necessary skill calls (00:08:41). The system also uses intent classification to understand the context of the merchant's query, such as asking about today's settlement (00:14:49).
* Role of Skills and Paths in Intent Classification: The system uses "skills" and "paths" to determine the appropriate response, where a path is a prompt appended to the context that helps the system understand the list of intents it can identify (00:18:31). The intent classification layer verifies the conversation's context, such as a merchant asking about a settlement, to trigger the correct response (00:14:49). Although the hardcoded elements used for testing may eventually be replaced by agents building solutions, the current setup is built on skills that utilize data (00:18:31) (00:43:02).
* Proactive vs. Reactive Capabilities and Onboarding: The system distinguishes between reactive (responding to a merchant's request) and proactive (sending triggered messages or updates) functions, with the reactive engine also making calls to the proactive functionality for necessary context (00:21:52). To initiate the service for merchants, they are not directly added to the group but are sent a link via message to join the WhatsApp group (00:07:04). The system is built locally on Vortex and is intended to be a replication of WhatsApp interactions for testing purposes (00:30:09).
* Addressing Merchant Direct Messaging (DM) Concerns: A major point of discussion was whether to allow merchants to DM the number used for the group chat (00:35:43). Blocking direct messaging to the number would create a "broken experience," leading to confusion when a merchant sends "Hi, hi, hello" and gets no response. It was suggested that the system should respond to these direct messages using the existing reactive backend, as DM is a first step in relationship management (00:38:59).
* Development and Scaling Strategy: The team agreed to prioritize getting the reactive version live to gather learnings while working to productize the proactive components (00:46:48). The current setup is considered a big win because it is reusable, covering about 70% of the functionality needed for a 100% base scale, although some deployment and provisioning effort is still required to move from the local setup to a live production environment (00:43:02). The proactive system will require pushing events to a read point to ensure data is available, as the reactive part will need proactive context for questions regarding reports (00:50:29).
* Platform Building Justification: The decision to build this solution internally, rather than using existing services, stems from the necessity to address a combination of use cases—proactive communication, reactive responses, group interactions, and API connections—that no single out-of-the-box solution currently provides. The strategic focus is on solving use cases with the lowest effort and decent impact, prioritizing proactive communications first (00:54:28).
* Platform Development and Quarterly Goals: Vrajesh Jaidev Iyengar emphasized the need to avoid building anything "half-fast," prioritizing quality over rushed completion, despite having a goal like FTX. The launch of a scalable product to 100 merchants is the objective, with Q4 serving as the project deadline, allowing for a potential 15-day extension if necessary. The team planned to set up the campaign and onboarding processes to align with the quarterly timeline, focusing on understanding visitor-to-sign-up conversion use cases (00:58:15).
* Lead Capture and Automated Outreach: The project scope included building sales agents on the website to automate post-lead capture communication, such as automatically calling people or initiating flows to encourage sign-ups. Vrajesh Jaidev Iyengar mentioned their original intent was to capture leads from the website, call them, and ask them to sign up, particularly utilizing WhatsApp for outreach (00:58:15). They confirmed the availability of a service that could assist with sign-ups, which they intended to clarify with the team to prevent unnecessary technical discussions (01:01:32).
* Conversion Tracking and Internal Process Improvement: There was a discussion about the complexity of tracking and instrumentation, specifically the challenge of accurately measuring the percentage of conversion and ensuring the integrity of captured data. Vrajesh Jaidev Iyengar agreed that this instrumentation was a priority and suggested improving the internal sales process, possibly moving toward a more structured cloud-based system. The team was encouraged to quickly pick up the necessary processes for services like WhatsApp on the side (01:01:32).


Suggested next steps
No suggested next steps were found for this meeting


You should review Gemini's notes to make sure they're accurate. Get tips and learn how Gemini takes notes
Please provide feedback about using Gemini to take notes in a short survey.
📖 Transcript
Feb 18, 2026
VRM / AI Calling - KT (Session 1) - Transcript
00:00:00
 
Vrajesh Jaidev Iyengar: I'll just post any links.
Suhas More: Got it.
Vrajesh Jaidev Iyengar: Hello. Hi folks.
Suhas More: Yeah.
Vrajesh Jaidev Iyengar: So,
Suhas More: Hey
Vrajesh Jaidev Iyengar: Nichol is the EM SAS and Manila both. Yeah, I know. You know, yeah, most people say nice. broadly documentation. Huh. Okay. So, um what is actually a VRM? uh core concept how we can give a managed experience to unmanaged base right in the current setup this unmanaged base is not catered anywhere like the only channel they have to interact with razor is by raising a support ticket right and like growth opportunities urgently they it's it's again a self
Suhas More: All
Vrajesh Jaidev Iyengar: broader setup mitigate we thought of that can we use some channel where we can maybe give a v glove experience to these merchants as well right and one identification was that since mid-market or enterprise customers they're using WhatsApp as a primary channel of uh you know internal communication uh groups get do get created and uh you know traditionally they do chat on the groups right and this this This is broadly proven in the agency culture as well where this is
 
 
00:01:50
 
Suhas More: right.
Vrajesh Jaidev Iyengar: like the smaller businesses create groups with the agencies and then they kind of manage it like manage the day-to-day operations there itself right so we thought that why not maybe bank upon this existing capability and you know have have an AI agent sit in this WhatsApp group which can answer you know day-to-day queries which a merchant might uh think about settlement, think about you know um issues, disputes um comparison between last month to this month, week week by week comparison, SR comparisons and whatnot right so had had clubbed some of the very basic queries which merchant do ask not like deep diving u into complex queries um so yeah this is what was built I I'll maybe show you how this inference work. So, uh I I'll come back to this uh document later. Your screen is not Oh, hello. So, this is uh the UI which you're able to see, right? Uh this is this UI is what we want to give it as our purpose. question.
 
 
00:03:19
 
Vrajesh Jaidev Iyengar: WhatsApp WhatsApp merchant creates a group with some people from his organization, some people from our organization. There are groups similar to that group can't be just used to do business WhatsApp. So the issue is that this one to one communication agent like a but it will keep on chatting with him in this right there's no option somebody but this group exactly groups. So groups may like you can have multiple people join that group. So your idea is to have a human in the loop. Yes. In case correct. Yeah. So we have chatted with the emerging business owners users and they have decided to allocate one person for 2,000. Okay. But but scale see most of the queries are getting answered by the agent itself. Wherever it is not able to answer it's either create going ahead and creating a ticket or it's uh question that is built on a framework this is also built on skills the question here aim finally.
 
 
00:05:36
 
Vrajesh Jaidev Iyengar: Yes. Whenever you you think that context is the dashboard is a push is a pullbased channel. Once the merchant comes there only then they will talk to this dashboard and get their queries. WhatsApp becomes a channel where we can push things out also and the conversations that they have and the data that is being used as a context for these conversations. Can we use the same back end for the agenting dashboard? can just become another channel using the same skills. Plus, this will have some additional capabilities which would be like daily uh daily business updates, some marketing coms if you want to send out like you know some I'll show it to you. It's all drafted here and also do partactive reactive proactive you're sending forms reactive you know version is coming and asking for something you are responding this is a broader UI which internal teams will get here they'll get all the all their charts so every camp will have maybe 2,000 accounts which are mapped to them WhatsApp right and This these will be created from the back end since we are using official WhatsApp group set.
 
 
00:07:04
 
Vrajesh Jaidev Iyengar: So you not directly added to the group. You are given a link as a message and message then you get added to the group. similar functionality here but additionally they can be before we get to groups one-on-one what are the capabilities that exist today if a merchant comes and wants to talk to the what is whether it like what is it using right now otherwise I'll have to like we'll have to look at the repo ourselves and figure it out this will get any replaced ideal case will be obviously limited to what dashboard team will be building which will have like lot more Yes, completely based on whatever questions that is something you have created. You're not using something that was already migration, right? But the the infra which Nai also saw earlier which is built here, right? it's getting better responses than what their team has built. So that's one angle code or Hindi or English or English mix is also been mapped here very well.
 
 
00:08:41
 
Vrajesh Jaidev Iyengar: So maybe I'll show you that piece. So this is how the broader reactive engine works, right? Merchant, WhatsApp, WhatsApp, dashboard is browser and scheduler. So okay, these are these are all the layers which are available metatform layer, message layer, proactive engine, reactive message. So it validates the input certain then it checks the conversation state and then route to reactive connector reactive connector. Meta datification state react Um you know uh yeah so response so your response is an LLM this is the whole engine final response after making all skill calls we have configured them in the tool itself. and response skills using data. What is the orchestrator layer to manage all of this? Just give me one sec. uh process my understanding is multiple people like you said can talk to this phone number talking to the phone number is handled by a third party right now which is the WhatsApp layer right now interface it is hitting some API or web hook where is what role is playing that is WhatsApp number you can talk to this number that part is a third party understand that is what he has written over here which is reactive numbers some other WhatsApp WhatsApp
 
 
00:11:56
 
Vrajesh Jaidev Iyengar: also I don't I don't know if they're using because he mentioned some other name which I think there are two three tools for Let us message comes in first where does it? So the moment a message comes in it's on WhatsApp WhatsApp. So it's yeah m carbon carbon endow. How are we getting listening for any
Suhas More: Yeah folks I think let's first go through KT let's first understand
Vrajesh Jaidev Iyengar: new
Suhas More: what do in existing systems and then raise the questions.
Vrajesh Jaidev Iyengar: architecture? We need to discuss
Suhas More: Yeah, I'm saying let's first go through the KT and then raise a question if if we have any at end of the session.
Vrajesh Jaidev Iyengar: Let's go through the flow. Let's go through the flow. So once that poll is done, you this will get the data will get the query which student will get data. we are hitting the process. So first check what does that mean?
 
 
00:14:49
 
Vrajesh Jaidev Iyengar: So supposedly I'm asking ahead. So what we're doing we locking the merchant ID to a particular approved. So once this is passed over here that's all. So once this is done we have a very conversation politics last. Exactly. That is what context means. Right. Settlement merchant asking about today's settlement. or settlement hasn't happened yet then it goes and verifies it. This layer is for intent classification classified into one of those tenants. Tell me out of this context for that understand it has skill scenarios based solutions as well. So my assumption was that identification by something like able to handle and trigger the right hed. Yeah. So I have two versions. So maybe I'll put it in classificating acknowledgement screen. Sorry. Okay. This is the response deterministic hand. We should ask to look into it.
 
 
00:18:31
 
Vrajesh Jaidev Iyengar: Correct. Correct. These are your skills. basically right are these skills. These are not skills. These are parts. Okay. What is a path? So it is a it is a prompt basically that will be appended with the same context. So it knows for it. So basically what cannot determine answer this is appending the list of intents that it can identify. These are some hardcoded things that we are also testing it out and it cannot do things I feel like will get replaced by the technically types of triggers. First of March process. So instead of the trigger being the merchants message, this is a triggered message. So basically what we should do is assuming this is going to get replaced by agents building it right. So you will build it out of our figure. So at least what we had because things will change only That part you test it out.
 
 
00:21:52
 
Vrajesh Jaidev Iyengar: You do interesting and editing on this version. Whatever whatever that will be because I I completely agree but at least I'm saying what I feel right basically might be very Correct. Reactive will be responding to mobile dashboard. It is finally making a call to proactive proactive doesn't need to go through agent. What were the setments you had yesterday? Basically like a dashboard. I got that but interface for AI agents to query that is very WhatsApp. templates which can fill in those. So there is no way to to do this proactive bit without going through the API the carbon carbon will have to get onboarded onto a group. We not for that will be basically so how will we trigger for test to merchants. WhatsApp again. number one set.
 
 
00:26:05
 
Vrajesh Jaidev Iyengar: Yeah. Okay. How are we quing? This is all local. We are using some service. reactive to be identification doesn't need to be a separate block, right? That can that is part of how claude behaves with it hasn't worked. We'll figure out how to set that up. the best practices only. The only thing we need to do is prompt injection. They have a question about the report. So they respond with some query. Then passing that context along with this message will be something we do but it'll go to that same we do that is basically security man which is fine. See why not just try this on we want to launch it to 100% usees we will then identify and go that's why we had started off and we can plug into it that we don't is converting to Disney because this also is very complex of complex this whole UI that you're seeing this is something you have built locally right this is like an admin pattern correct that for the very tried connecting this like have you tried interacting through WhatsApp WhatsApp right WhatsApp WhatsApp.
 
 
00:30:09
 
Vrajesh Jaidev Iyengar: This is just a local setup of you hitting your own back end. Mhm. It's not WhatsApp. There is no involvement any UI is just talking to your back. There's no WhatsApp as I mean like WhatsApp WhatsApp WhatsApp is just a conversation with an LLM with some skills if I if I boil it down to it's what LM is your locally hosted where on Vortex. Yes. And how do you set up a cloud instance and give it every week on Vertx? Uh I'm not giving it to Vortex locally. So basically your cloud instance on your local respond right now. Sure. because I'm understanding there would be a lot of things even might not know This is how it's going to work. similar just congratulations. This is not WhatsApp. Similarly, connects All payments of the individual service. Starting the test.
 
 
00:35:43
 
Vrajesh Jaidev Iyengar: Oh, hi. Yeah. So, this is Okay. What exactly is that? This is the testing set. This is trying to replicate WhatsApp. This is just WhatsApp. Reactive. Sorry. proposed flow. This is my understanding right now. Correct me if I'm wrong WhatsApp because of pushing that WhatsApp when I say VRM VRM is the name of that chat the will tell that will tell three types of triggers these are this is how trigger Mer WhatsApp group versus DM. I'm just covering those two cases. Okay. I'm thinking it should also be like a if it's a relationship manager group. What does it mean? It seems more intuitive. If I have to get support, I want support. And I send a message to my Yeah. Hello. We'll work with this group because then you independently messaging numbers on that group.
 
 
00:38:59
 
Vrajesh Jaidev Iyengar: Sorry on that number phone number. That is the enablement you want to get done on that number. So which is blocking. WhatsApp supports this that a number can be added only to a group but you can't DM that number or is that going to be something we block think about it rightsided but that is a broken experience but why do you want to give that experience like either I don't allow the motion to contact this number is I understand. So then what we are doing is we are letting them talk to this one. on connect then it'll start responding. I understand as a merchant I get it. We won't respond that is like a but again you are you trying to solve something which is which is not in the scope as well. Why don't we just respond on this? We have the back end that can respond to this query, but additionally first thing is this is like relationship management for a first step.
 
 
00:41:24
 
Vrajesh Jaidev Iyengar: You're forcing a merchant into a flow because it is convenient to you because it's convenient for him to contact his he doesn't have but the functionality is there in case something is broken right he knows there's a realistically most of the issues are getting solved here itself WhatsApp so that we can log this we can log this separately if your polling or doing whatever toss I'm Not saying the cam will come into this DM conversation, right? This will be like a separate thing that the merchant can just have on the side. It's like you talking to Claude versus you talking to Claude with customer support. I mean first think I'm not thinking of this as a separate thing. I'm thinking by default blocking this becomes an extra task for me. How do I ensure a motion doesn't come here and get stuck? They're just saying, "Hi, hi, hello. What? What the f***? Where are you?" or response.
 
 
00:43:02
 
Vrajesh Jaidev Iyengar: We can't we can't end it saying that agent is what I'm saying. Whatever version we have on reactive, this needs to go live. That's okay. Just what you're saying is fair. For example, if you want to market to basically scale it up correct. WhatsApp WhatsApp what I'm saying is if you feel we will think of at least in this moment react sorry proactive right to actually prodize it and service because it is not what I see is in this current state. It is not in a state of things which is a fair what you can do basically. M you basically finally can maybe take it like for 10 it'll fix if there were things from this that are reusable for that it will be almost building from zero we are building 70 so for us it is a big win only for using your setup but to take it live for the reactive version at this point with the bandwidth that I have in the team is not feasible with the skill set also we don't have too much back At the same time we scope it 100% for reusable components that can actually scale to our 100% base if you were to design it right grounds
 
 
00:46:48
 
Vrajesh Jaidev Iyengar: up everything from from scratch agreed 100% Which the planning was basically anyway. It doesn't matter because for us at least we'll get learning or you can go and we can get some bindings get some learnings. In the meantime, we try to see and take WhatsApp while you have your application putting it on another it's a small thing for You do it through GI. We have to basically provision machines. We have to get deployment. We basically need to click that machine services every set to take it has a process incess also think you'll need to set up a lot of alerting and monitoring keep prompting and changing adding features. Sorry. I agree to it. Since you have the context, you can actually take it live. We'll get some learnings from there. In the meantime, we'll try to get this live the reactive one and actually start using it for the one So that was that is a smaller thing then we solve the next problem and maybe marketation But this will be a different number that will be a different that won't be the same but already we are giving more personalizing
 
 
00:50:29
 
Vrajesh Jaidev Iyengar: dashboard engage at a merchant level that is what we will do. If you had a GMA drop yesterday, but you are here right now only with this reactive sorry proactive look recreating what is going money. data leak. You'll have to first push the events to read point. Listen. Your point is fully valid. I think that is that going and we figure out the last 20 messages cont sorry which going. It will have very limited use. It has all the data. You can build up any use case you want and all you have to look for all the merchants sitting on you know a pre-built service. But basically getting it live on production is the But you already step first. Nobody and the reactive thing should have the proactive stuff for context because there might be questions on the reports that have been sent or whatever.
 
 
00:54:28
 
Vrajesh Jaidev Iyengar: Uh human that response which has which a merchant has sent to you on that to an API to process it. bottapility wise feeling that you have to in so right now what the thing is there are services that exist out of the box that solve independent use cases there is nothing that solves all of what we want to achieve which is why we are building right group some person being there proactive reactive talking to our APIs responding context which is why we're building what is the easiest to achieve most proactive use cases are on Eventually we can solve all of these use cases independently through but they will never stitch together again platform the same solutions. So we have to build all of these priority priority wise. So the effort is lowest and impact is decent for proactive coms. Say we'll start off anyway March 15th FTX they're launching there will be some level of capability we'll start this going to get pushed by it basically running on Basically, we don't have to be on any No, the to handle requests.
 
 
00:58:15
 
Vrajesh Jaidev Iyengar: You can use route You can take this locally last I know I know but we shouldn't build something that is again halfast because FTX is a goal I want to launch something scale it to 100 merchants get some value. FTX is not a deadline. Q4 is a deadline. 15 days extra if it is following So it is the camping setup. what it does. I think We'll set up the onboarding is not it needs to map to our quarter. to sign up we didn't sign up for that post sign up% we didn't sign up for that but as a platform we wanted to understand and see visitor to sign up use cases we building some sales agents on the website if we can automatically call people after that or like those flows like we capture leads from the website and make a call to them and ask them to sign up. That was sort of our WhatsApp with WhatsApp.
 
 
01:01:32
 
Vrajesh Jaidev Iyengar: Okay. So, I can get that service% by the way for that sign up was mentioning that will help that other explicitly to not worry about I don't want them to have an unnecessary discussion. One person saying and then I know I I know from you. I feel like I told him the same thing. I said I just spoke to he said it is not in a state to support is needed for that we have one more he doesn't get the complexities there nobody does whatever is getting captured is right or not. What is the percentage of conversion instrumentation basically for all that? I feel like keep on right WhatsApp. Okay. Or maybe sales per year. services. very structured. I don't Can you learn this like the process of We're currently on a little better than I was. cloud start. So we were Basically, the cloud Nice. Priority. Don't get without that code. ketchup. I agree. That's why taste. We basically want to This is very East. HQ. already. Facebook. They say I think it's something We want to provide that processor that we That's what I was saying by that first pick it up on the side. WhatsApp. very number question that I Correct.
 
 
Transcription ended after 01:15:18


This editable transcript was computer generated and might contain errors. People can also change the text after it was created.

---

## Linked Entities
- [[people/anurag-rastogi]]
- [[people/nikhil-khadilkar]]
- [[people/vrajesh-iyengar]]
- [[projects/vrm]]
