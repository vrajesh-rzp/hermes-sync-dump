---
title: "VRM - Sagar / Vrajesh"
type: meeting
date: 2026-04-23
tags: [meeting, gemini-recording]
gemini_doc_id: 14mKKnoX_vlmoG_B9scVAS7DUIo2KTOqGed6hbsDRJ-Y
---

# VRM - Sagar / Vrajesh


**Date:** 2026-04-23
**Source:** Gemini recording ([Google Doc](https://docs.google.com/document/d/14mKKnoX_vlmoG_B9scVAS7DUIo2KTOqGed6hbsDRJ-Y/edit))

---

## Summary

﻿📝 Notes
Apr 23, 2026
VRM - Sagar / Vrajesh
Invited Vrajesh Jaidev Iyengar Sagar Agarwal
Attachments VRM - Sagar / Vrajesh
Meeting records Transcript 

Summary
Data analysis and notification strategy were reviewed alongside architecture alignment and scaling challenges for agent interactions.

Merchant Cohort and Notifications
Teams analyzed merchant data snapshots to generate growth hypotheses. The group decided to implement a daily payment recap template to provide clear, actionable insights for merchants.

Architecture and Agent Functionality
System architecture is confirmed as feasible for human agent dashboard integration. Technical constraints regarding message templates and platform restrictions necessitate defined intervention protocols for human agents.

Scalability and Success Metrics
Scalability concerns require high escalation metrics to prevent manual intervention overload. Success will be measured by gathering data from silent merchants to facilitate cohort movement analysis.

Rate this Summary: Helpful or Not Helpful

Decisions
We've updated the Decisions section using your feedback.
Let us know what you think: Helpful or Not Helpful

ALIGNED
* Daily recap rollout prioritization The daily recap feature is selected as the primary focus for the go-live phase to ensure clarity and minimize merchant anxiety.
* Manager intervention protocol established Customer account managers are designated to receive notifications and intervene in conversations when automated responses fail to satisfy the merchant.
* Bot image processing support The AI agent architecture is set to include support for consuming merchant-uploaded images to enhance communication capabilities.

Next steps
* [MR-13 Evan Spiegel room] Check Shoppers Data: Reach out to the Shoppers team; review example data.
* [MR-13 Evan Spiegel room] Review Automation: Look at the group creation automation process.
* [MR-13 Evan Spiegel room] Verify API: Check if an API exists for manually adding people to a group.
* [The group] Redo System: Redo the entire existing system architecture; redo connections.
* [The group] Review Redesign: Get the redesigned architecture reviewed by somebody.
* [The group] Implement Media: Add image consumption capability for the bot.

Details
Did the screenshots in this section make your notes better or worse?
* Simulation of Merchant Cohorts and Data Analysis: The team is working on simulating merchant data, looking both backward and forward, using data from the previous June to understand current cohorts, specifically focusing on merchants who started one month ago and those who have been with them for a month. They have taken snapshots from April 21st and March 22nd, aiming to generate movement hypotheses and move towards growth.
* Review of Template Categories and Notifications: The discussion moved to reviewing notification templates, including categories for transaction category four GM and operational settlements. A key point was the need

---

## Full Notes

﻿📝 Notes
Apr 23, 2026
VRM - Sagar / Vrajesh
Invited Vrajesh Jaidev Iyengar Sagar Agarwal
Attachments VRM - Sagar / Vrajesh
Meeting records Transcript 




Summary
Data analysis and notification strategy were reviewed alongside architecture alignment and scaling challenges for agent interactions.

Merchant Cohort and Notifications
Teams analyzed merchant data snapshots to generate growth hypotheses. The group decided to implement a daily payment recap template to provide clear, actionable insights for merchants.

Architecture and Agent Functionality
System architecture is confirmed as feasible for human agent dashboard integration. Technical constraints regarding message templates and platform restrictions necessitate defined intervention protocols for human agents.

Scalability and Success Metrics
Scalability concerns require high escalation metrics to prevent manual intervention overload. Success will be measured by gathering data from silent merchants to facilitate cohort movement analysis.


Rate this Summary: Helpful or Not Helpful




Decisions
We've updated the Decisions section using your feedback.
Let us know what you think: Helpful or Not Helpful


ALIGNED
* Daily recap rollout prioritization The daily recap feature is selected as the primary focus for the go-live phase to ensure clarity and minimize merchant anxiety.
* Manager intervention protocol established Customer account managers are designated to receive notifications and intervene in conversations when automated responses fail to satisfy the merchant.
* Bot image processing support The AI agent architecture is set to include support for consuming merchant-uploaded images to enhance communication capabilities.




Next steps
* [MR-13 Evan Spiegel room] Check Shoppers Data: Reach out to the Shoppers team; review example data.
* [MR-13 Evan Spiegel room] Review Automation: Look at the group creation automation process.
* [MR-13 Evan Spiegel room] Verify API: Check if an API exists for manually adding people to a group.
* [The group] Redo System: Redo the entire existing system architecture; redo connections.
* [The group] Review Redesign: Get the redesigned architecture reviewed by somebody.
* [The group] Implement Media: Add image consumption capability for the bot.




Details
Did the screenshots in this section make your notes better or worse?
* Simulation of Merchant Cohorts and Data Analysis: The team is working on simulating merchant data, looking both backward and forward, using data from the previous June to understand current cohorts, specifically focusing on merchants who started one month ago and those who have been with them for a month. They have taken snapshots from April 21st and March 22nd, aiming to generate movement hypotheses and move towards growth.
* Review of Template Categories and Notifications: The discussion moved to reviewing notification templates, including categories for transaction category four GM and operational settlements. A key point was the need to differentiate between daily payment recaps and settlements, as payment recaps would detail figures and transaction methods, while settlements would reflect the previous day's business (00:01:40). It was decided to start with a "daily recap" and keep it very sharp to avoid creating anxiety (00:03:02).
  

* Business Insights and Merchant Cohorts: The conversation highlighted that a third line of daily information is just noise, suggesting monthly or similar communication for complex information. Sharing business insights using consumer data is seen as valuable and unique for merchants, and there is a focus on how to use merchant cohort classifications to share relevant information. The initial set of features for go-live includes the daily recap and standard alerts (00:05:09).
* Architecture Alignment and Human Agent Dashboards: The team confirmed that the architecture for the system is aligned, with one individual confirming its feasibility, noting that the H team will need to make changes to allow the VRM to communicate with the agent backend (00:07:14). Discussions covered the human agent dashboard, which provides a view of all groups and tags areas requiring attention. This tagging logic depends on the chat history stored in a dedicated database (00:09:45).
* Agent Interaction and WhatsApp Constraints: The view dashboard allows agents to see groups and potentially override interactions, but there are WhatsApp restrictions that limit the ability to respond freely due to spam concerns (00:12:06). Agents cannot send custom messages upfront via the VRM but can use template messages, while the agent's actual phone number is not linked to the merchant group, meaning a human agent needs to respond from their mobile phone. The only money involved is the cost of private messaging (00:13:39) (00:25:27).
* Role of the Human Agent in the Group Chat: The team questioned the purpose of a three-person group (merchant, AI agent, human agent) if the human agent is masquerading as the AI bot, which was originally intended as a backup if the AI said something wrong. A stronger system is needed to evaluate when the human agent should intervene (00:26:51). A key takeaway is the need for review of the connectors to ensure the system is controlled and doesn't break (00:29:00).
* Scaling Challenges and Escalation Metrics: A major concern is the scalability of the system, particularly if the AI agent is not performing well and a large percentage of merchants require human intervention. The escalation metric to a human agent needs to be very high for the project to be scalable (00:32:04). It was noted that VRM can raise queries with an independent agent like Yogi, but since Yogi is not synchronous, the VRM can only inform the merchant that a ticket has been created (00:33:41).
* Media Consumption and Conversation History Limits: The bot can consume images, such as screenshots of payment failures, but is currently unable to respond with an image. Videos are not preferred for consumption due to their audio component (00:37:12). The team discussed implementing limits on conversation history, perhaps keeping conversations only for 10 or 20 days (00:35:03).
* Defining Success Metrics and Cohort Movement: The goal for running the project is to achieve statistical significance for the movement of merchants between cohorts. Success is not measured by the bot influencing merchant movement between cohorts, but rather by identifying and communicating with "silent merchants" to gain more data points, thereby making them "noisy" and creating intervention opportunities (00:42:39). The project should focus on outcomes, and merchant satisfaction seems to be a key metric (00:44:17).




You should review Gemini's notes to make sure they're accurate. Get tips and learn how Gemini takes notes
How is the quality of these specific notes? Take a short survey to let us know your feedback, including how helpful the notes were for your needs.
📖 Transcript
Apr 23, 2026
VRM - Sagar / Vrajesh - Transcript
00:00:00
 
MR-13 Evan Spiegel room: So, so uh we should be able to simulate backwards and and forward forward you don't know but if you assume something like that so so therefore we'll know and then we'll simulate then we'll um so what I've done is I've taken data for last June and then I've seen basis today. What has been the like what are the cohorts that have formed in terms of merchants who have just transported one month ago? Merchants have already been there with us for a month. Correct. And I've also currently transacted Marching I've also taken like two snapshots of 21st April and 22nd March. While we are hypothesizing general movement anyways you want to add some more value to this and move more towards growing and maybe less unlikely. Huh? That is fine. So um so let's go go through the templates once and then we'll come give a discussion you wanted.
 
 
00:01:40
 
MR-13 Evan Spiegel room: Sure. Category this is category transaction category four GM. Okay. Okay. Uh then there is your settlements operational. The settlements processed first settlement then the regular settlements settlements every time there's a settlement we want to send notification first we wanted to give it slightly different nothing crazy just we doing daily daily we're doing settlements or we're doing yesterday's business something that so that uh recap there'll be two there'll be one Daily payment recap for people daily at least and weekly this is the estimated split of this. So weekly weekly fine. So what is the difference between payment and settlement? uh payment will talk about your figures and other things also. Which methods did you take from some generated message for this merchant? Whereas second, right? You got this money and the second one is saying yesterday you did this amount of business.
 
 
00:03:02
 
MR-13 Evan Spiegel room: uh supposed to be but rather than they correct so it seems like they are the same messages it's like I can say that you got and the transaction modalities were UK method the same thing for daily anxiety so it seems overap No to define that sharply. Exactly. And therefore if there's differentation that's okay but like define it sharply. It seems to me that here that two numbers are not going to match then that's going to be like the worst correct settlement was more delays in settlement that might be coming alert. any reason for not want to start this. So you need to double click on both set and daily. So at least I feel we should start with daily recap and go really sharp. It should not create any anxiety. This is supposed to be degree to perform correct not there are some conditions and we show this last time you're in the top x percentile of your this if you're above the average or you're in a top 10 20 30 40 we will show this Monday you'll always be motivated to daily noise information.
 
 
00:05:09
 
MR-13 Evan Spiegel room: Third line is just noise. If you do like do do this like monthly or something like that something like that for example like the information that you can share a lot and which people will always like if you keep sharing the business insights You have all the consumer data also right heard from many people I haven't personally seen this data but we had tried one Not sure. I'll check for example data reach out to that team shoppers that's absolutely unique information for any merchant okay right so how do you classify your merchant cohorts. How do we do this here already? Right? And therefore, how can we use it to share information here? That would be so good, right? These were like the initial set of uh things that we wanted to take live just for go live and get some traction with the daily recap and some of the standard ones alert GMO.
 
 
00:07:14
 
MR-13 Evan Spiegel room: about this milestones and daily event right? Yeah. Settlement alerts delay alerts and your badges are just like celebrating mobile. Overall experience seems to be okay and A person might get daily have made five transactions weekly recap. It might feel aount. Okay. So, so we have the we'll get to down to that discussion also exact forms and you know you have to They have to feel the experience for the guy. And then imagine all the I wanted to this is for how to replace the aligned with Prashant and you showed them this architecture and they're okay that's aligned with no pashant is a mandatory sign on your architecture Dr. Yes, we sat for half an hour before the call and post he he had some incident he couldn't join the call. I sat for half an hour with the H team engineer. He is knows that solution and said it is possible HDM will need to make some changes to allow VRM to talk to the agent back.
 
 
00:09:45
 
MR-13 Evan Spiegel room: Who who is the VMP? Sorry HT and the other guy. No sign they have asked for one data point token information from your consultants. If everybody's ang I've started, so so we're going to the group approach and and what dashboard are we going to give the human agents what the plotted discussed this is what does it work it works there are many views I am not happy with the Does it work? It works. It works. So the so basically this is a view dashboard. So here you get a view of all the groups and anywhere where a camp attention is needed tagging or the tagging works. How what the logic? There is an that evaluates whether there are too many calls happening currently which is why reactive architecture needs to be rethought but even the way it does it some parts will need to be retained in terms of tagging whole aentic back won't handle conversation like whether it is tagging logic depends on the chat history where is the chat history chat history is in a DB that is maintained with this Prisma DB there's a Prisma there's connector which connects to our data stored in
 
 
00:12:06
 
MR-13 Evan Spiegel room: our taken ownership. Now I won't play any game. I was able to make a game. If I'm able to make this and take this live on a cloud URL, then that means I have control in a separate. Okay. So what you're saying is this is a this is a view dashboard. I agree with you through like if the agent looks at it and then how is the agent going to use it to go back in interact. Yeah. There's a groups view where you can open the group and you can override uh if the merchant has sent any message to child this is a WhatsApp restriction for you to respond freely. Correct. So you send the address for free. Uh no, you just can't send it because of spam. They block such things. Okay. You can't keep like sending messages unless you can respond back and private otherwise this is just like merchants to add to okay but you can send a template message from the selected message.
 
 
00:13:39
 
MR-13 Evan Spiegel room: Yes, no but can I send any other message custom messages you can't send up front from the VRM but the cam is added to this group that's what I was asking basically number is not linked so you can take over the agent's conversation number is not linked I am the merchant and was the group is not supposed to participants are excluding no WhatsApp group. There is one we'll change the name and all. This is what I have saved the number as. Got it. There is the merchant, the agent and there is this. So there are some tag whenever doesn't respond in the manager or whatever manage in the VRM It's not a separate service or something. Everything is a mono mono report. Got it. So, so that mono has the creation of this group, right? So that connector what is connector?
 
 
00:15:42
 
MR-13 Evan Spiegel room: So we can exper but he liked what the UI look like. So he copied whatever Periscope could have given into this but we send something to something to your WhatsApp message. This phone number is given to us by MC Carbon. So this phone number whenever a message goes uh M carbon shoots a message to one of the endpoints. There is some endpoint we have to configure. There is one more uh API, one more book that gets called whenever there is a delivery change, delivery status which is less relevant uh end to end like group creation and WhatsApp to there is a WhatsApp group API Min has provided us. So you can create a new group, you can add new participants, you can join using your provided phone number. This is the phone number agent. This is the agent phone number. Same phone number for all the merchants.
 
 
00:17:32
 
MR-13 Evan Spiegel room: One phone number one. And then there's the merchants. Yeah. Okay. So numberated I will need to look at the automation. I am not sure but automate automation is what there is a portal where you can do manual mapping but I'm sure like this can be automated. So, so no actually what I want to understand create a group. Yes, there is a WhatsApp there's an API that creates a group and send you in link that you can either need to be approved to join the group. So when a merchant joins to create a group. Yes. How can that be? I'll show you my first interaction with this bot before I joined the group. Right. No, I'm simply asking this something very simple. How are we able to create a group? There is a WhatsApp groups API.
 
 
00:18:49
 
MR-13 Evan Spiegel room: Groups API. group. I assign the cam. I basically give two phone number. No, you create the group and you generate an invite link and you are the only one in that group for one. You send the group. Who is who? The agent or the VRM. VRM sends creates a group is the person who has created the group. So is in the group. the the AI agent agent number I'm talking about this agent basically that's phone number human whatever agent But they have to click something to accept it. They click on this message. If they don't get a link if you have not created this uh system sometimes you can't like some people set privacy I'm not talking about those 10% 90% if they get added manually even then it will work invite link is just because we can't do this at scale like we won't be able to add everyone.
 
 
00:20:18
 
MR-13 Evan Spiegel room: Okay. I don't think there's an API to do this. I'll check people. Of course, not important. group. You click on the group, you join it, you join. So invite link and that is also good. Then the merchants are in the group. that will cost money. Yes. Two credits or something for every message from WhatsApp. Why will WhatsApp it will be an AI agent trying to do something something WhatsApp WhatsApp doesn't care because there are many customer service spots that exist Okay. And now every so there it is just reing the message to us through this message. Then what happens? which is basically it processes. It checks in whatever detection generates a response sends a response back to this and it goes as a message from the from this number.
 
 
00:23:25
 
MR-13 Evan Spiegel room: Okay. This part because they are outside of that 4hour window. Exactly. Huh. which is why you also have to do that and then you okay fine. So, so you keep sending proactive just fine as soon as the merchant responds and let's say he says this number looks wrong. Okay. So as soon as response keeps number seems wrong merchant response in the 4 hour window if the agent responds then it is fine then not judged and the conversation can continue then the merchant takes over the same respond to the merchant takes over the cam takes over sorry and responds on behalf of the and uh no on on the on the camp WhatsApp actual phone WhatsApp of course you can respond not on that interface right so can respond agent can keep on responding that's fine Now, now all of these chats are getting saved somewhere that system is not a system.
 
 
00:25:27
 
MR-13 Evan Spiegel room: That's a normal storage that's connected to this system and the the cam gets the notification and then the cam enters the chat. uh if it all the notification system is not like there obviously this have to be the product but if the cam gets into the chat for the cam to respond to the chat there is no way he can do this do it from this system he'll have to do it from his mobile phone only correct is that right that is okay that is one so of course correct Fine. So the only money involved here is the private correct. So actually then this inter is not really useful. Correct. Correct. So only if you have to override the VRM accounts. So there is like you want to talk as the VRM you want to like stop some who conversation you want to take over as the bot. What do you mean take over as the bot?
 
 
00:26:51
 
MR-13 Evan Spiegel room: What do you mean by that? Like it will say that this whatever this bot is talking to you instead of it coming from the AI a human is actually typing. So merchant doesn't know that a human is behind this. So then what is the point of having a group with three people like that is just as a like a hand to pull emergency but the human person happy uses his number this WhatsApp this I don't I don't get it like what is the point of the human agent masquerading as the AI agent. What is the point? It is like so this was built originally keeping in mind the AI can say something wrong which is why the human agent comes with the picture right shouldn't exist. It has been And the only way you know that the your eval to know there's a situation where the camp should intervene that needs to be strong point number one correct by the way if the mobile phone mobile then the not going to know when to intervene which is why they know this That will tell them I will figure out the way it is manager symbol and then the merchant name.
 
 
00:29:00
 
MR-13 Evan Spiegel room: Correct. That was the standard name. So you can follow that in terms of events. So I know this is not language use but uh there was some high level but also in terms of the intent that was identified for that how well did the respond I'm not confident of the system built so far but there is something important this is important important cards and connectors back and forth, right? Redo if you have to redo the entire thing. No, I'm saying not only should you do that, get it reviewed. Get it reviewed through somebody. Yeah, say somebody should review it. Keep this report. I don't want like things break and you're not in control. Even though you have seen it like I didn't know better to say I don't want to take this live before I understand this whole view. Yes. Yes.
 
 
00:30:27
 
MR-13 Evan Spiegel room: Yeah. It's a great tribute. You'll have more confidence. Okay. So connectors very crucial because the merchant is unhappy of course it merchant is unhappy is the crucial part according to you what is the ideal path forward. The cam gets notified. Is that enough or notified? And the cam should intervene and respond. And if the solution, right? There's nothing that they're missing here. If the cam doesn't respond, then again, you should get an alert or some dashboard to perform right. If the crafts are not performing to act alerting basically that is no I'm saying essentially it's a camp performance dashboard performance it's like a ticket WhatsApp That is separate. An intervention. Correct. You should write very nicely. Now that is very important.
 
 
00:32:04
 
MR-13 Evan Spiegel room: By the way, now the interesting thing to know will be will this scale? how in terms of tech architecture if the if let's say the uh if your overall AI agent is not doing a great job and merchant 40% of the merchants are unhappy which means that 40% scenarios the human agent have to intervene but we don't have enough human agent to intervene Right. Not similar maybe but you understand right that's why for taking it to merchants because we can't scale. So before scaling we need to ensure we have scaled. And if you realize for down of our LU we have to this is not scalable in this like escalation metric to a human needs to be very high. Correct. Correct. Correct. Right. So initially it will be low because less number of merchant and you're learning and trying to fix. So the project it demands a very high quality.
 
 
00:33:41
 
MR-13 Evan Spiegel room: Yeah. Correct. That is the number that I think I joined the path was to be able to handle like very low how many I'm saying we can allow escalations exactly that is the challenge here that is the major challenge Now think about it. Maybe because of that you don't want to make it right for individuals. Okay. Right. And then and then maybe you can say okay fine if it is for rejected maybe we can make it one to 100 another put put another way these are not going to be these are going to be actually a universe where we have all robust agents across like an independent agent should act like how we do stuff here right like talk to CS ops to resve a ticket or a best team or a product team. Let's say VRM can talk to Yugi. It can actually like the way a merchant raises a ticket with Yugi.
 
 
00:35:03
 
MR-13 Evan Spiegel room: VRM can raise a query with Yugi. Yogi auto response by the way you are VR WhatsApp is a special surface. So it has some connectors and all of that otherwise agent correct about escalation correct and why why yogi is not will be an independent agent but right Yogi is not designed to be synchronous. So therefore Yogi today is not pluggable inside dashboard. So the best we can do is say I have a ticket on your behalf. We are looking into this. Then you respond back. I think responds back in like 30 seconds right. So, so that dashboard you have to naturally inherit it always. Got it. to do anything. How muchever the moment this scales we need to start introducing some limits. We'll keep conversations only for uh like 20 days 10 days maybe.
 
 
00:37:12
 
MR-13 Evan Spiegel room: I don't think I don't think That's memory. It's not memory. forever. It doesn't matter. This is going to be media. This can accept when I got like that was one I can share something the merchant sending an image let's say uploads a screenshot of some payment failure customer he can send that if it has the payment ID this our bot can reference that image and do that it won't respond with an image right now but I think it would have to respond with an image I've not seen that merchant through an image or through a video or Whatever. So what media are you okay to consume? Images are okay to consume images. Videos I wouldn't want to because it's audio. Yeah. This actually has he had done it long back as a part of that is a good one.
 
 
00:39:04
 
MR-13 Evan Spiegel room: That is a good one we should add. Yeah because most for sure for sure that would be a good one. They have made a lot of their products vice versions. in these three wordsific. Okay. Right. These specific cohorts I continue growing steady and just started this is a larger so if I split 11,5 let me start 5050 if you want to measure 5.5% this is a large 50% is this much that is% growing mother. No, I'm saying like are these big or small? They're all like growing growing is smaller growing. growing card definition is uh transaction count higher and the current GMV is more than it has increased month on month and the transactions in the last 30 days is more than 100 growing is I don't know basically if you want to measure it We'll have to keep this active% power minimum detectable effect at 80% power 80% power is one in this formula statistical significance generally equal to This is something like it is something good is better but minimum run time is so so what you so you are trying to optimize for your OKR I'm trying to
 
 
00:42:39
 
MR-13 Evan Spiegel room: optimize for valid how long should I run for me to be sure that whatever data I have is enough data right for statistical significance of of uh like the movement of merchants from one cohort to another to the next That is what I was tracking here as a success. That's what why are we saying that silent I don't think B will be able to influence moving from one to second bucket to third bucket to fourth bucket. I don't think you it is you are not detention. is the video I was looking at is silent merchants whom we were not able to identify by the chart. So the fun angle was identific We are now having a conversation through another channel. So now we have more data points to analyze why this person but that's all that is not you have made silent noisy correct but is still the same. Yes. No, but that is the idea right then there is possibility to intervene.
 
 
00:44:17
 
MR-13 Evan Spiegel room: So is that enough as one of the goals? I guess you that is one of the ideas. It's a good conversation right this is a good conversation. It's a good one. So all of these are good inputs and then we look at like I feel that there will be like satisfaction some equivalent with the conversation. sentiment. But then there are two angles and output of that. Exactly. Outent Sir, we are in the go live sir. I just need to make a call. I know. I just need to check. It's reaches home. I think So But you understand that right and that is totally immediate something right. So something that tells us or whatever this product should point toward the outcome. Which means that this project could not lead to that. It lead to something. It led to but somehow that lead to like the surprising that's the thing right That's what you think for hypothesis the germ of the idea if there is a relationship manager for everybody they will not ch that is a germ of the idea all of this validate that germ of the idea outcome relationship satisfaction seems to be like this but I don't know why I asked you that because Yeah, perfect. I'm not Hello. Okay. All right. Oops. Okay.
 
 
Transcription ended after 08:00:00


This editable transcript was computer generated and might contain errors. People can also change the text after it was created.

---

## Linked Entities
- [[people/prashant-chaudhary]]
- [[people/sagar-agarwal]]
- [[people/vrajesh-iyengar]]
- [[projects/vrm]]
