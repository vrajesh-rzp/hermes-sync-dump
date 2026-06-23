---
title: "VRM Auth Flow Discussion"
type: meeting
date: 2026-04-23
tags: [meeting, gemini-recording]
gemini_doc_id: 1qlUIrENpg7MNStRcoZWOkfGDBIGVQU7DS-LilbHXhSU
---

# VRM Auth Flow Discussion


**Date:** 2026-04-23
**Source:** Gemini recording ([Google Doc](https://docs.google.com/document/d/1qlUIrENpg7MNStRcoZWOkfGDBIGVQU7DS-LilbHXhSU/edit))

---

## Summary

﻿📝 Notes
Apr 23, 2026
VRM Auth Flow Discussion
Invited Vrajesh Jaidev Iyengar Dimpal Kataniya Rishav Loomba Ishaan Bahal Pratul Gupta
Attachments VRM Auth Flow Discussion
Meeting records Transcript Recording 

Summary
Technical discussion defined authentication requirements for integrating WhatsApp tokens via existing gateway infrastructure.

Authentication Infrastructure Review
Existing gateways rely on standard authentication schemes to generate passports. Downstream services require these identifiers to maintain consistent user context.

WhatsApp Integration Gaps
Current WhatsApp tokens lack the necessary metadata for passport generation. Conventional authentication methods cannot process raw phone number data effectively.

New Authentication Scheme Decision
Engineering will implement a dedicated WhatsApp scheme allowing token validation and mapping to specific identifiers. Gateways will remain focused on performance rather than complex state management.

Rate this Summary: Helpful or Not Helpful

Decisions
We've updated the Decisions section using your feedback.
Let us know what you think: Helpful or Not Helpful

ALIGNED
* Agentic backend architecture defined The Agentic backend is designated to manage state machines and merchant context, while the Edge gateway will restrict its operations to passport generation to maintain performance and avoid latency.
* WhatsApp authentication plugin integration A new WhatsApp-based authentication scheme will be implemented as a plugin within the Edge system to support the necessary application requirements.

Next steps
* [Vrajesh Jaidev Iyengar] Research WhatsApp Token: Research specific information WhatsApp offers regarding token secrets for authentication validation.
* [Vrajesh Jaidev Iyengar] Contact MARBN Team: Get in touch with the MARBN team regarding the specific token they will receive.
* [Vrajesh Jaidev Iyengar] Consult Backend Team: Check with the Agentic backend team if they can make necessary edits to support new request types.
* [Ishaan Bahal] Develop Auth Scheme: Create a new authentication scheme for Edge to accept and process WhatsApp tokens.
* [Vrajesh Jaidev Iyengar] Contact Lumba: Get in touch with Lumba regarding the project and agent backend details.

Details
Did the screenshots in this section make your notes better or worse?
* Authentication Schemes and Passport Generation: Ishaan Bahal outlined the existing authentication schemes which include a partnership/oath grant, and explained how Edge eventually creates a "passport" that communicates essential details to downstream services. The passport informs the service about the consumer type (merchant, user, application partner) and provides a corresponding identifier, such as a merchant ID or user ID, for services that do not need to care about authentication (00:00:00). They also noted that a simple bypass exists where Edge verifies read limits but downstream services handle self-authentication, though they doubted a ne

---

## Full Notes

﻿📝 Notes
Apr 23, 2026
VRM Auth Flow Discussion
Invited Vrajesh Jaidev Iyengar Dimpal Kataniya Rishav Loomba Ishaan Bahal Pratul Gupta
Attachments VRM Auth Flow Discussion
Meeting records Transcript Recording 




Summary
Technical discussion defined authentication requirements for integrating WhatsApp tokens via existing gateway infrastructure.

Authentication Infrastructure Review
Existing gateways rely on standard authentication schemes to generate passports. Downstream services require these identifiers to maintain consistent user context.

WhatsApp Integration Gaps
Current WhatsApp tokens lack the necessary metadata for passport generation. Conventional authentication methods cannot process raw phone number data effectively.

New Authentication Scheme Decision
Engineering will implement a dedicated WhatsApp scheme allowing token validation and mapping to specific identifiers. Gateways will remain focused on performance rather than complex state management.


Rate this Summary: Helpful or Not Helpful




Decisions
We've updated the Decisions section using your feedback.
Let us know what you think: Helpful or Not Helpful


ALIGNED
* Agentic backend architecture defined The Agentic backend is designated to manage state machines and merchant context, while the Edge gateway will restrict its operations to passport generation to maintain performance and avoid latency.
* WhatsApp authentication plugin integration A new WhatsApp-based authentication scheme will be implemented as a plugin within the Edge system to support the necessary application requirements.




Next steps
* [Vrajesh Jaidev Iyengar] Research WhatsApp Token: Research specific information WhatsApp offers regarding token secrets for authentication validation.
* [Vrajesh Jaidev Iyengar] Contact MARBN Team: Get in touch with the MARBN team regarding the specific token they will receive.
* [Vrajesh Jaidev Iyengar] Consult Backend Team: Check with the Agentic backend team if they can make necessary edits to support new request types.
* [Ishaan Bahal] Develop Auth Scheme: Create a new authentication scheme for Edge to accept and process WhatsApp tokens.
* [Vrajesh Jaidev Iyengar] Contact Lumba: Get in touch with Lumba regarding the project and agent backend details.




Details
Did the screenshots in this section make your notes better or worse?
* Authentication Schemes and Passport Generation: Ishaan Bahal outlined the existing authentication schemes which include a partnership/oath grant, and explained how Edge eventually creates a "passport" that communicates essential details to downstream services. The passport informs the service about the consumer type (merchant, user, application partner) and provides a corresponding identifier, such as a merchant ID or user ID, for services that do not need to care about authentication (00:00:00). They also noted that a simple bypass exists where Edge verifies read limits but downstream services handle self-authentication, though they doubted a new service would use this method (00:01:08).
  

* Handling WhatsApp Tokens and Edge Integration: Vrajesh Jaidev Iyengar introduced the problem of handling WhatsApp tokens received via the VRM interface, noting that the starting point is the WhatsApp interface with the merchant. Ishaan Bahal clarified that Edge currently lacks support for managing or handling WhatsApp tokens because WhatsApp is not one of the schemes they work with, and suggested the current flow likely involves WhatsApp communicating with a CloudFront app, which then goes via Edge, potentially bypassing authentication to Trino (00:02:12). They confirmed that if the new service intends to use the existing authentication infrastructure, they must go through Edge and support its required authentication schemes, which are contextual and depend on API structure (00:03:05).
* Passport Requirement and Authentication Gaps: The discussion focused on the necessity of generating a passport for the agentic back end, which is suspected to reuse existing dashboard functionality and expect user context (00:05:59). Since the current WhatsApp flow only provides a phone number, which does not generate a passport via the existing four schemes, Vrajesh Jaidev Iyengar proposed sending the contact number to Edge, which would then be mapped to a user ID to bypass traditional authentication (00:04:01). Ishaan Bahal confirmed that if a passport is expected, any request sent without adhering to the existing schemes will fail, as the WhatsApp token only yields a phone number, which is insufficient for generating a passport at Edge (00:05:04).
* Implementing a New WhatsApp Authentication Scheme: Vrajesh Jaidev Iyengar expressed the need to generate a passport without following traditional authentication methods and inquired about white-labeling their CloudFront app, which Ishaan Bahal dismissed because the app is public, making tokens easily forgeable (00:05:59). Ishaan Bahal determined that supporting WhatsApp token authentication would require creating a new scheme that allows Edge to validate the token using a secret and map the WhatsApp number to a specific ID for passport creation (00:07:55). They noted that a single contact number could be associated with multiple merchants, meaning more context is needed, though Edge's role would be limited to mapping a user ID (00:08:43).
* Edge's Role in Contextual Data and Latency: Ishaan Bahal emphasized that Edge, being a high-volume gateway, cannot handle application logic or state machines for selecting a merchant ID from multiple options, as this would add unacceptable latency. They explained that Edge provides a user-level passport, and the agentic back end is responsible for handling the complex flows and state machines, such as determining which merchant ID the user intends to access (00:09:35). They further clarified that the existing dashboard manages merchant selection by generating a privileged token that includes merchant context, which is currently impossible to extract from the WhatsApp token at Edge (00:12:21).
* Next Steps for Implementing the WhatsApp Scheme: The participants concluded that Vrajesh Jaidev Iyengar needs to coordinate with the MARBN team to understand the nature of the token they will receive and that Ishaan Bahal's team will likely need to create a new "WhatsApp scheme" for Edge to accept. Ishaan Bahal will confirm if they can support multiple plugins on the same route. They agreed that verifying the WhatsApp token context is the main priority and that Vrajesh Jaidev Iyengar will also contact Lumba from the agentic back-end team regarding potential necessary edits to their service (00:13:16).




You should review Gemini's notes to make sure they're accurate. Get tips and learn how Gemini takes notes
How is the quality of these specific notes? Take a short survey to let us know your feedback, including how helpful the notes were for your needs.
📖 Transcript
Apr 23, 2026
VRM Auth Flow Discussion - Transcript
00:00:00
 
Ishaan Bahal: Right. Uh there's also I think let's add three here and then a four one. Uh there's also one scheme which can be a partnership uh which is technically an oath
Vrajesh Jaidev Iyengar: Okay.
Ishaan Bahal: grant. Right? So uh these are more or less what any application would sort of make calls
Vrajesh Jaidev Iyengar: Okay.
Ishaan Bahal: with.
Vrajesh Jaidev Iyengar: Okay.
Ishaan Bahal: Now uh once you have these uh edge eventually will uh create something called a passport uh that passport is it essentially tells you a couple of things. Uh so it tells you uh this is this is what a passport looks like which all services eventually get downstream. Uh it tells you that okay uh the consumer uh is this
Vrajesh Jaidev Iyengar: Okay.
Ishaan Bahal: um we logged them in using certain uh impersonation if there's an impersonation it'll be written in this impersonation block um else uh what we'll uh display is that this is the type merchant user application partner the three things I was talking about right uh application will be like the company's keys user will be user
 
 
00:01:08
 
Vrajesh Jaidev Iyengar: Yeah.
Ishaan Bahal: authentication partner will be like the oath authentic authentication and here it will just give you an identifier for that user that's that's all there will be. So if it is a type merchant this will be a merchant id is a user it will be a user ID and that is all the uh requirement will be
Vrajesh Jaidev Iyengar: Oh,
Ishaan Bahal: to an upstream where they don't really care about authentication. Now um this is just one way of doing this. The other way is just using a uh simple bypass.
Vrajesh Jaidev Iyengar: good.
Ishaan Bahal: So think of it this way where edge did not do authentication did nothing and all edge verified was yeah your read limits are fine um and you can go in now in that case uh the downstream service if they want to do something custom they self authenticate so these cases also
Vrajesh Jaidev Iyengar: Okay.
Ishaan Bahal: exist though I doubt uh here like a new service would be doing this. These cases exist. Um there are some cases where API calls are also required.
 
 
00:02:12
 
Ishaan Bahal: So more or less these are the schemes. Now in your case what you have uh is uh say for instance right now you have uh a second you also have an API somewhere
Vrajesh Jaidev Iyengar: So let's say the starting yeah the starting point is like the WhatsApp interface with the merchant.
Ishaan Bahal: running right.
Vrajesh Jaidev Iyengar: So that is all meta controlled right. Then I receive a message into VRM. This message will have some meta token associated with it that says key hey this is a valid u valid source from which this message is coming or this request is coming please process it and we should have some way to decrypt this meta token to validate that this is a valid source.
Ishaan Bahal: Yeah.
Vrajesh Jaidev Iyengar: So gala part should that be handled within the VRM or is this something that edge would
Ishaan Bahal: So
Vrajesh Jaidev Iyengar: handle?
Ishaan Bahal: I don't think Edge has any support for managing or handling WhatsApp tokens. Uh considering the fact that WhatsApp isn't one of the schemes that we actually work with.
 
 
00:03:05
 
Vrajesh Jaidev Iyengar: Okay.
Ishaan Bahal: Uh so right now what's happening is uh WhatsApp talks to your CloudFront app and you eventually go via edge only.
Vrajesh Jaidev Iyengar: H.
Ishaan Bahal: For the most part I'm very certain this is what will happen. you still uh right now will be going via edge,
Vrajesh Jaidev Iyengar: Okay.
Ishaan Bahal: right?
Vrajesh Jaidev Iyengar: Mhm.
Ishaan Bahal: Uh it's just that your edge routes are most likely being forwarded directly uh to Trino without any authentication required.
Vrajesh Jaidev Iyengar: Okay. Right now I don't know if edge is being used.
Ishaan Bahal: Uh if even if it isn't so then you probably directly connect to Trino.
Vrajesh Jaidev Iyengar: Ah yeah,
Ishaan Bahal: Either of them could be true.
Vrajesh Jaidev Iyengar: I think we're Yeah.
Ishaan Bahal: Well, right now edge either is a bypass or it's not there.
Vrajesh Jaidev Iyengar: Yeah.
Ishaan Bahal: It's directly connecting to Trino. Now if you want to uh sort of say that you want to go this route you will have to go via edge
Vrajesh Jaidev Iyengar: Yeah.
Ishaan Bahal: that means you'll have to support the authentication schemes this supports uh which means it can be user based contextual uh so again depends on how the APIs are written here think of it this
 
 
00:04:01
 
Vrajesh Jaidev Iyengar: Correct.
Ishaan Bahal: way like if their APIs uh they are of the form of let's say I'm just giving you an example right uh data u let's say order details orders v1 and you'll give user ID let's say for instance this
Vrajesh Jaidev Iyengar: Okay.
Ishaan Bahal: uh you will not have right um so you'll need to sort of see what kind of
Vrajesh Jaidev Iyengar: Got it.
Ishaan Bahal: API access patterns are here in the first place if both of these are directly compatible first
Vrajesh Jaidev Iyengar: Mhm.
Ishaan Bahal: second would be to now understand okay if I do need these how do I get them um because here the user's context would automatically populate the user ID but in your case there is no authentication all you have is a meta token
Vrajesh Jaidev Iyengar: So is it is it enough for me to like hit here and fetch a user ID because I have the contact number that is my source of truth, right? So your contact number whatever user ID is associated I take that and I just bypass like I send that
Ishaan Bahal: Yeah.
 
 
00:05:04
 
Vrajesh Jaidev Iyengar: to edge. Edge just checks for rate limiting and sends the data over to uh the agentic back end.
Ishaan Bahal: H you can do that. uh you can create sort of like an API uh that essentially your app uh figured out
Vrajesh Jaidev Iyengar: Y
Ishaan Bahal: the entire context uh it can talk to get the user ID and then it can forward it to agentic dashboard back end but you'll have to still need to create like newer APIs which are not bound on a particular passport right because right now if it's expecting a passport whatever request you
Vrajesh Jaidev Iyengar: correct.
Ishaan Bahal: send will more or less fail because to generate a passport at edge you need to be under any of these schemes
Vrajesh Jaidev Iyengar: Correct.
Ishaan Bahal: right?
Vrajesh Jaidev Iyengar: Okay.
Ishaan Bahal: Which right now won't be there. And the WhatsApp token only gives you,
Vrajesh Jaidev Iyengar: So right now any of these four screens all right it
Ishaan Bahal: I'm guessing, a phone number. It doesn't really relate any ID. Right.
Vrajesh Jaidev Iyengar: just gives a phone number then we'll we maintain a mapping of the phone number to a user ID or merchant
 
 
00:05:59
 
Ishaan Bahal: Right.
Vrajesh Jaidev Iyengar: ID.
Ishaan Bahal: So in that case, it's a keyless O. That means the O is handled technically by you. Uh edge can forward that request. But if if it edge does forward that request, it means that the agentic back end also needs to support that kind of
Vrajesh Jaidev Iyengar: Okay. Okay. So my understanding so far is that the agentic back end definitely they are reusing
Ishaan Bahal: request.
Vrajesh Jaidev Iyengar: whatever was already built for the dashboard as an application. So I'm guessing all the requests would expect uh a passport.
Ishaan Bahal: User context.
Vrajesh Jaidev Iyengar: Yeah,
Ishaan Bahal: Yeah.
Vrajesh Jaidev Iyengar: it'll expect the user context which will be part of the passport that it generates.
Ishaan Bahal: Yes.
Vrajesh Jaidev Iyengar: So I want to not create too much headache for any of these other teams and I want to also generate a passport but without but not following any of the traditional authentication methods that accounts.traaserpay.com trapay.com allows right like your email password combo or your phone number OTP combo I want to bypass that I want to still generate the password how would is there a way right now that I can do that like let's say edge
 
 
00:06:58
 
Ishaan Bahal: uh right now. I don't think
Vrajesh Jaidev Iyengar: white edge white labels my cloudfront app and says that any request that comes from here with some secret let's
Ishaan Bahal: so.
Vrajesh Jaidev Iyengar: say I I'm just saying this very high level uh some token that I send validates that hey this cloudfront app is legit And for this we are like you basically allow uh token
Ishaan Bahal: No, but that's the thing, right? Uh your CloudFront app is running on a public uh system,
Vrajesh Jaidev Iyengar: generation.
Ishaan Bahal: which means that anyone can technically create those same tokens, right? Um so even if you were to send some sort of a token for edge to identify you,
Vrajesh Jaidev Iyengar: Okay.
Ishaan Bahal: but anyone can create that because it's being created at a front end, not at a back end. Um and the other way could be that we identify your WhatsApp token, figure it out uh what the user would be.
Vrajesh Jaidev Iyengar: Huh?
Ishaan Bahal: But even that is uh it's easily attackable because there's no uniqueness to it. There's no secret unless WhatsApp offers you some sort of a
 
 
00:07:55
 
Vrajesh Jaidev Iyengar: I think WhatsApp does offer something.
Ishaan Bahal: secret.
Vrajesh Jaidev Iyengar: So, what should I research right now and give you information? What is it you're looking
Ishaan Bahal: Okay?
Vrajesh Jaidev Iyengar: for?
Ishaan Bahal: So uh right now we don't support uh like WhatsApp token authentication. So think of it this way like it'll be a new scheme that we'll have to support which will allow us to
Vrajesh Jaidev Iyengar: Yeah.
Ishaan Bahal: access WhatsApp tokens and create a passport from it,
Vrajesh Jaidev Iyengar: Okay.
Ishaan Bahal: right? Uh which means that figuring out what number is mapped to what particular ID and then forwarding it out.
Vrajesh Jaidev Iyengar: Okay.
Ishaan Bahal: Uh but for that we need two things.
Vrajesh Jaidev Iyengar: Yeah.
Ishaan Bahal: One would be some sort of a secret for us to validate that token at our end that it's not been uh messed around with.
Vrajesh Jaidev Iyengar: Okay.
Ishaan Bahal: Um and the other thing is uh yeah I think that's more than enough. Uh we just need to verify if that has enough context for us to even like get information like user contextual information.
 
 
00:08:43
 
Ishaan Bahal: That's all.
Vrajesh Jaidev Iyengar: I think the main thing you will receive from the token would be the contact number.
Ishaan Bahal: So
Vrajesh Jaidev Iyengar: Then you'll need to internally check whether this contact number maps to an existing account or and then
Ishaan Bahal: it would but the problem is still um it's not clear enough to get you that
Vrajesh Jaidev Iyengar: retrieve
Ishaan Bahal: context. So uh a single contact number can be associated with multiple merchants right?
Vrajesh Jaidev Iyengar: start.
Ishaan Bahal: So we need more context or the agentic back end should have more context. The most edge can do here is map a user ID.
Vrajesh Jaidev Iyengar: So if edge maps the user ID to my uh WhatsApp token that was sent,
Ishaan Bahal: Yeah, that's
Vrajesh Jaidev Iyengar: then I handle some application logic which asks the user,
Ishaan Bahal: uh
Vrajesh Jaidev Iyengar: hey, you have these five uh MIDIs associated with this uh user account. uh which one would you like to get details about and then you finally I edge will re
Ishaan Bahal: Yeah.
Vrajesh Jaidev Iyengar: will will then fetch like the context around this mid that
 
 
00:09:35
 
Ishaan Bahal: No, no. So, Edge can't do any of that. Uh the reason is because it's a gateway,
Vrajesh Jaidev Iyengar: okay
Ishaan Bahal: which means it re gets like 50,000 requests a second.
Vrajesh Jaidev Iyengar: okay
Ishaan Bahal: Um so we won't like want to do that in the first place because it it adds latency.
Vrajesh Jaidev Iyengar: enough
Ishaan Bahal: Uh so what we'll keep on doing is we'll still keep on giving you passport at the user level. Agentic backend dashboard this particular dashboard.
Vrajesh Jaidev Iyengar: Okay.
Ishaan Bahal: Um it'll have to do flows.
Vrajesh Jaidev Iyengar: So when I'm making requests, I will send understood.
Ishaan Bahal: It'll have to do state machines. The first state machine will be key. Okay. If it is just user ID,
Vrajesh Jaidev Iyengar: Understood.
Ishaan Bahal: these are the merchants. Now with the uh APIs like request context, you'll have to start sending merchant ids. that will get autoforwarded. Edge will not touch them because Edge really doesn't have any context of what merchant
Vrajesh Jaidev Iyengar: I think merchant bound because uh they do you have the merchant uh switcher and all of those
 
 
00:12:21
 
Ishaan Bahal: support.
Vrajesh Jaidev Iyengar: things in the dashboard right so the dashboard views are generally built for one mid so I'm guessing all
Ishaan Bahal: No,
Vrajesh Jaidev Iyengar: the request
Ishaan Bahal: but in case of dashboard dashboard when the merchant selection happens um
Vrajesh Jaidev Iyengar: h
Ishaan Bahal: we generate another token pair with uh higher privileged escalates. So essentially you create a basic token with user level and then once you have a merchant also attached we create a privileged SQ like token where now the token also has merchant context. So at any given point of time when the request comes in edge automatically knows this is for a user which has this merchant ID as metadata. Uh in your case it will not be able to extract
Vrajesh Jaidev Iyengar: Okay. Okay.
Ishaan Bahal: that.
Vrajesh Jaidev Iyengar: Understood. It makes sense because I've seen you're right. I've seen some of the requests go without a payload. Some of them go with an MID as a payload.
Ishaan Bahal: Yeah.
Vrajesh Jaidev Iyengar: So I think those depend on what kind of passports have been given to these different accounts
 
 
00:13:16
 
Ishaan Bahal: pretty much.
Vrajesh Jaidev Iyengar: if
Ishaan Bahal: So without payload may merchant ID is inferred at edge with payloads merchandise inferred by the service.
Vrajesh Jaidev Iyengar: okay okay got it this has been super helpful I I'll get in touch with the MARBN team uh
Ishaan Bahal: Yeah.
Vrajesh Jaidev Iyengar: for uh what token we are going to get and u you will need to basically then potentially uh create another schema uh another scheme sorry that u edge would
Ishaan Bahal: Yeah.
Vrajesh Jaidev Iyengar: accept like a WhatsApp scheme.
Ishaan Bahal: Yeah,
Vrajesh Jaidev Iyengar: I'll need to check with the agentic backend team if uh they can make any
Ishaan Bahal: I'm still confused. Uh think I'll need to figure out key on the same particular route can we
Vrajesh Jaidev Iyengar: edits.
Ishaan Bahal: uh approach. Uh actually we can support multiple plugins which is fine. Okay, it'll work.
Vrajesh Jaidev Iyengar: Okay, awesome. You are awesome.
Ishaan Bahal: Sorry.
Vrajesh Jaidev Iyengar: I had a great time talking to you about this. I've learned a lot. I will just uh get in touch with Lumba as well. He got caught in some incident but he'll be the Have you worked with Lumba before?
Ishaan Bahal: No worries. Yeah, he
Vrajesh Jaidev Iyengar: I know see Lumba is the guy for agent back end.
Ishaan Bahal: knows.
Vrajesh Jaidev Iyengar: So I think overall this project is in good hands.
Ishaan Bahal: The only thing that we need to verify is WhatsApp. All right.
Vrajesh Jaidev Iyengar: I'll discuss with him. Thanks man.
Ishaan Bahal: Bye-bye.
Vrajesh Jaidev Iyengar: See you. Bye.
 
 
Transcription ended after 00:14:36


This editable transcript was computer generated and might contain errors. People can also change the text after it was created.

---

## Linked Entities
- [[people/rishav-loomba]]
- [[people/vrajesh-iyengar]]
- [[projects/vrm]]
