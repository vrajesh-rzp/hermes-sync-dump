---
title: "VRM x Agentic Dashboard - Security Review"
type: meeting
date: 2026-05-05
tags: [meeting, gemini-recording]
gemini_doc_id: 1LjRxkhXX4buo7SEgdQ0Cg5HM4o3aJaB2RXIS2wuTONk
---

# VRM x Agentic Dashboard - Security Review


**Date:** 2026-05-05
**Source:** Gemini recording ([Google Doc](https://docs.google.com/document/d/1LjRxkhXX4buo7SEgdQ0Cg5HM4o3aJaB2RXIS2wuTONk/edit))

---

## Summary

﻿📝 Notes
May 5, 2026
VRM x Agentic Dashboard - Security Review
Invited Vrajesh Jaidev Iyengar Rishav Loomba Ajmal Prathamesh Joshi Suchith Narayan
Attachments VRM x Agentic Dashboard - Security Review
Meeting records Transcript 

Summary
Meeting discussions focused on securing network infrastructure and finalizing authentication methods for third-party merchant services via WhatsApp.

Network and Architecture Security
Teams reviewed Virtual Private Cloud security requirements for API calls. They established that exposing specific endpoints on Trino minimizes query injection risks better than raw queries.

Authentication Strategy Debate
Participants debated relying on third-party vendor trust versus implementing mandatory login flows. They ultimately decided that proceeding without user OAuth requires exception approvals from Business Unit leadership.

Session Validation Protocols
The group analyzed token expiry cycles to balance security with merchant experience. Agreement centered on aligning session timeouts with existing 2-week dashboard standards.

Rate this Summary: Helpful or Not Helpful

Decisions
We've updated the Decisions section using your feedback.
Let us know what you think: Helpful or Not Helpful

NEEDS FURTHER DISCUSSION
* Session expiry duration The session expiry (TTL) duration remains undecided, with options ranging from two weeks to align with current dashboard standards and one month to improve merchant experience currently under review.

ALIGNED
* API interaction strategy Specific API endpoints will be exposed to handle data requests, restricting the LLM from generating raw queries directly to prevent excessive system exposure.
* Merchant authentication approach The authentication strategy for merchants will utilize an OTP-based login flow, replacing the initial reliance on implicit trust in the third-party vendor.

Next steps
* [Ajmal] Loop Security: Loop in security spoke for cloud setup to restrict IP access to the distribution.
* [Vrajesh Jaidev Iyengar] Check RT Expiry: Check internally regarding extending refresh token expiry time to 1 or 2 months for the VRM use case.
* [Ajmal] Document Security: Share security concerns regarding relying solely on M Carbon trust and document these points offline.
* [Ajmal] Discuss TTL Extension: Discuss internally with folks about extending the token Time To Live and notify the team on the thread.
* [Vrajesh Jaidev Iyengar] Document Approaches: Put all different authentication approaches into a document for review.
* [Vrajesh Jaidev Iyengar] Share Repository Access: Share repository access with Ajmal for querying answers using Clot.
* [Vrajesh Jaidev Iyengar] Upload Meeting Notes: Put the meeting transcript and general notes in the designated location.

Details
Did the screenshots in this section make your notes better or worse?
* Network Security and Distribution Setup: Ajmal explained that the distribution will typically be attached to a Virtual Private Cloud (VPC) or 

---

## Full Notes

﻿📝 Notes
May 5, 2026
VRM x Agentic Dashboard - Security Review
Invited Vrajesh Jaidev Iyengar Rishav Loomba Ajmal Prathamesh Joshi Suchith Narayan
Attachments VRM x Agentic Dashboard - Security Review
Meeting records Transcript 




Summary
Meeting discussions focused on securing network infrastructure and finalizing authentication methods for third-party merchant services via WhatsApp.

Network and Architecture Security
Teams reviewed Virtual Private Cloud security requirements for API calls. They established that exposing specific endpoints on Trino minimizes query injection risks better than raw queries.

Authentication Strategy Debate
Participants debated relying on third-party vendor trust versus implementing mandatory login flows. They ultimately decided that proceeding without user OAuth requires exception approvals from Business Unit leadership.

Session Validation Protocols
The group analyzed token expiry cycles to balance security with merchant experience. Agreement centered on aligning session timeouts with existing 2-week dashboard standards.


Rate this Summary: Helpful or Not Helpful




Decisions
We've updated the Decisions section using your feedback.
Let us know what you think: Helpful or Not Helpful


NEEDS FURTHER DISCUSSION
* Session expiry duration The session expiry (TTL) duration remains undecided, with options ranging from two weeks to align with current dashboard standards and one month to improve merchant experience currently under review.


ALIGNED
* API interaction strategy Specific API endpoints will be exposed to handle data requests, restricting the LLM from generating raw queries directly to prevent excessive system exposure.
* Merchant authentication approach The authentication strategy for merchants will utilize an OTP-based login flow, replacing the initial reliance on implicit trust in the third-party vendor.




Next steps
* [Ajmal] Loop Security: Loop in security spoke for cloud setup to restrict IP access to the distribution.
* [Vrajesh Jaidev Iyengar] Check RT Expiry: Check internally regarding extending refresh token expiry time to 1 or 2 months for the VRM use case.
* [Ajmal] Document Security: Share security concerns regarding relying solely on M Carbon trust and document these points offline.
* [Ajmal] Discuss TTL Extension: Discuss internally with folks about extending the token Time To Live and notify the team on the thread.
* [Vrajesh Jaidev Iyengar] Document Approaches: Put all different authentication approaches into a document for review.
* [Vrajesh Jaidev Iyengar] Share Repository Access: Share repository access with Ajmal for querying answers using Clot.
* [Vrajesh Jaidev Iyengar] Upload Meeting Notes: Put the meeting transcript and general notes in the designated location.




Details
Did the screenshots in this section make your notes better or worse?
* Network Security and Distribution Setup: Ajmal explained that the distribution will typically be attached to a Virtual Private Cloud (VPC) or a network, requiring a security review to ensure only specific IP addresses can make calls. Vrajesh Jaidev Iyengar inquired about the time required for this process, and Ajmal estimated that if they have access to the cloud resources, the setup should be done instantly by DevOps personnel. They also decided to loop in their security counterpart for cloud-related security matters.
* VRM WhatsApp Flow and Data Fetching: Vrajesh Jaidev Iyengar walked through the flow for how the system fetches data and responds to the merchant, noting that a message from a merchant on WhatsApp hits the VRM WhatsApp endpoint via a webhook. If the intent is a "data answer," the system fetches data from an API and responds; for general chat, it makes a respective API call to send data back. Currently, the system uses a static username and password from the data team to make the Trino API call, and there is a basic authentication happening between the components (00:01:12).
  

* Authentication Plan for Third-Party Vendors: Rishav Loomba detailed the plan for the bridge between the third-party vendor (M carbon), the VRM, and the service, explaining that the request comes from WhatsApp via M carbon to the VRM service (00:02:15). The assumption is that the request originates from a valid, authenticated mobile number of a merchant. The VRM service fetches the merchant and user entity, creates a JSON Web Token (JWT) with a unique hash, attaches it to the headers, and forwards the request (00:03:22).
  

* VRM Intent Identification and Service Flows: At the VRM layer, intent identification determines whether a query is solved via the Trino service or the Razer assist service (00:03:22). For calls coming via the third party (M carbon), they assume authentication has occurred through WhatsApp and create a JWT with user details for session validation, as they cannot perform the standard access token/refresh token login flow (such as an OTP) in WhatsApp chats (00:04:47). This JWT-based session validation is currently an alternative to the standard dashboard access token and refresh token flow (00:06:04).
  

* Guardrails and Security for Trino Service Access: The second service flow is the Trino one, which is hosted on AWS and is accessed using direct credentials via the Trino Software Development Kit (SDK). They must set up proper guardrails to ensure limited table access (e.g., 10 to 12 tables) with restrictions based on merchant ID and user ID data to prevent query injection (00:07:14) (00:11:00). Ajmal suggested exposing specific API endpoints on top of Trino for actions like fetching settlements or reading orders, rather than letting the large language model (LLM) craft a raw query, to minimize exposure (00:09:51) (00:12:05).
* Discussion on Session Validation and Trust in M carbon: Ajmal expressed security concerns regarding the lack of authentication, noting that they are relying too much on the third-party vendor, M carbon, and should at least authenticate the merchant once and set an expiry. Vrajesh Jaidev Iyengar suggested trusting M carbon for an initial launch of 10 to 15 merchants and implementing a fix later, but Ajmal considered this too sensitive (00:14:31). Rishav Loomba confirmed that the edge team was consulted, and the product team does not want to trigger an OTP or login flow in the WhatsApp chat (00:15:36).
* Mandatory Authentication and Token Expiry Debate: Ajmal insisted that a proper login flow, like an OTP generation, should be implemented, and the token should expire after a period such as a week or two. Rishav Loomba asked if the session timeouts could be extended beyond the current 24-hour refresh token expiry to maintain a positive merchant experience, suggesting 30 days or two months (00:16:41) (00:19:17). Ajmal countered that the dashboard uses a two-week session, and Vrajesh Jaidev Iyengar noted that extending the expiry to one month would improve the merchant experience over a two-week re-authentication cycle (00:20:20).
* Future Authentication Approaches: In response to a query about future use cases involving other social media, Vrajesh Jaidev Iyengar suggested using 'login with Meta' or 'login with Insta' flows, which would be more secure than relying on a third-party vendor (00:21:21). Ajmal requested that all different approaches be documented for offline review to determine the best method, as they were unsure how Meta's specific authentication works (00:22:18).
* Action Items and Follow-Up: Vrajesh Jaidev Iyengar outlined the main action items, which included checking on the URL to avoid exposing a cloudfront URL and checking on the two-week Time-To-Live (TTL) for the tokens. Ajmal confirmed they would discuss the token expiry internally and that proceeding with the current approach of not doing user OAuth would require exception approvals from the Business Unit and Security heads (00:23:22). Vrajesh Jaidev Iyengar will share the repository access with Ajmal to allow them to investigate how merchant queries are stored (00:24:29).




You should review Gemini's notes to make sure they're accurate. Get tips and learn how Gemini takes notes
How is the quality of these specific notes? Take a short survey to let us know your feedback, including how helpful the notes were for your needs.
📖 Transcript
May 5, 2026
VRM x Agentic Dashboard - Security Review - Transcript
00:00:00


Vrajesh Jaidev Iyengar: uh behind the checker network or internal network and you
Ajmal: Um so usually it will be attached to a VPC uh some there will
Vrajesh Jaidev Iyengar: are. Okay.
Ajmal: be a network to which this uh distribution will be attached or you'll have to attach one I loop in my uh security spoke I mean uh for cloud stuff here and you'll have to basically ensure only certain IPs are able to make a call to that summary
Vrajesh Jaidev Iyengar: Okay. And uh generally how much how much time would this take for this to
Ajmal: of shouldn't take much time.
Vrajesh Jaidev Iyengar: happen?
Ajmal: As if you have access to the cloud resources, it should be done instantly but by your DevOps uh DevOps folk
Vrajesh Jaidev Iyengar: Okay.
Ajmal: someone who have
Vrajesh Jaidev Iyengar: Okay.
Ajmal: contact.
Vrajesh Jaidev Iyengar: Okay. Hey, hey,
Rishav Loomba: Hey. Hey.
Vrajesh Jaidev Iyengar: Lumba.
Rishav Loomba: Hi.
Ajmal: Hi
Vrajesh Jaidev Iyengar: I was just walking uh as well through the uh flow.
Rishav Loomba: Hi.
Vrajesh Jaidev Iyengar: So, I'll just so now coming to how this thing actually does the you know figures fetches data and responds to the merchant.




00:01:12


Vrajesh Jaidev Iyengar: So merchant sends a message WhatsApp there's a web hook that hits us like hits this VRM WhatsApp endpoint and then we first just check what kind of uh like whether this is
Ajmal: Stay.
Vrajesh Jaidev Iyengar: a data answer data answer is the intent data answer then we fetch data from uh API and we respond to the merchant if it's any other kind of thing like just a general chitchat or some guide or something to it doesn't require data though it just basically uh makes that respective API call and uh you know sends data back to the merchant. For the TRON API call currently there is one uh like a static uh set
Rishav Loomba: That's
Vrajesh Jaidev Iyengar: of uh username password that the VRM has access to which we got from the data team. So it is using that to make the Trino API call. But all of these touch points like between MC carbon and uh the VRM and each there's a basic that is
Ajmal: Okay.
Vrajesh Jaidev Iyengar: happening.
Rishav Loomba: So I as well I'll explain like what we are planning to do for




00:02:15


Ajmal: Uh
Rishav Loomba: the authent like basically so how the bridge between third party vendor and carbon and razor pay will work so I'll give you a b like
Vrajesh Jaidev Iyengar: Stop
Ajmal: yeah.
Rishav Loomba: basic HLD I'll give you a walk through on top of it.
Vrajesh Jaidev Iyengar: with
Ajmal: Yeah.
Rishav Loomba: So basically this is a network flow which we are expecting from the WhatsApp WhatsApp. So we're not directly talking to WhatsApp WhatsApp will in case of any reactive or a proactive thing. Proactive as like in the case of VRM we'll analyze something.
Vrajesh Jaidev Iyengar: it.
Rishav Loomba: will directly push messages to the merchants's WhatsApp without even without even they are asking something or also they can ask question proactively from their side in in that will response reactively based on the merchant
Ajmal: Okay. Thank you.
Rishav Loomba: query. So the request will come to a third party M carbon.
Vrajesh Jaidev Iyengar: Thanks.
Rishav Loomba: Now in this particular phase we are assuming that the request coming from WhatsApp via M carbon to our VRM service. Okay.
Vrajesh Jaidev Iyengar: See




00:03:22


Rishav Loomba: We are assuming this mobile number to be validated. Yeah.
Ajmal: January.
Rishav Loomba: This is a valid mobile number of a merchant. Okay. Oppos that what we will do? What we'll do on in the VRM service? We'll fetch the merchant and user entity and we'll create one JWT token with the hash with a unique hash and we'll attach that JWT token to the headers and forward that request.
Vrajesh Jaidev Iyengar: What happened?
Rishav Loomba: Now, now there are two post in at the VRM layer we have intent identification like whether this query to be solved via Trino or by Razer assist service. Razer assist service I'll put it like this way. Okay. Now, now there are two flows based on the based on the intended identification key how this query to be solved like either it the either it the reser service. Now let's go one by one. So if it to be resolved by the resources service in which what we will do now the thing is this we are not doing a user session login like the basic user or the session login in that case the ideal flow should be like we already discussed this with the user or team and the edge team either every time user came to us like with the new request we have to do a login we have to do a proper login and we have to create one login like access token and refresh token and that will go to our services.




00:04:47


Rishav Loomba: In that case, it will work as it is because we in our in all our services on the at the edge layer, we are handling the access token and the refresh token. But now in this case due to the uh like the experience expectation we we don't uh every time we don't need we are we will not be able to do the login part like we will not be able to ask the OTP flow or the password flow in the WhatsApp chats what we have to do like the expectation is like every call which we are getting via the third party M carbon we assuming it to be a authenticated thing because it's coming via WhatsApp only merch and mobile number what we'll do we'll check whether that particular on the VRM layer we'll check that if that merchant mobile number is real actually attached to a active mobile number of a merchant from the merchant entity then we'll fetch the user fetch the merchant entity and the user details of that merchant and then we'll forward the we'll create the JWT with the the details which we require at the service layer and we'll forward that request to the edge on the edge layer for that particular domain and reser domain and uh which is the traffic external domain at the non CD we'll check the basic o and then we'll also add the rate limiting and the other security related plug-in and we'll forward that header to the resources service now




00:06:04


Rishav Loomba: in the resources service we will check whether if it's a VRM use case we'll use that header which we set here and this hash is only available at this service and this service like we use the credit st to store those that hash and based on the hash we decrypt that hash and key use the user session out of that uh
Ajmal: the reward hash.
Rishav Loomba: header.
Ajmal: Um, what hash are you referring to?
Rishav Loomba: So well currently it's not final to at the time of implementation we'll add those details in the LLD doc
Ajmal: I didn't understand the cash flow like
Rishav Loomba: hash as in basic will will attach one encrypted JWT
Ajmal: um
Rishav Loomba: header in that JWT token payload we'll uh we'll add the user entity based on the mobile
Ajmal: Okay.
Rishav Loomba: number which we fetch at the VRM layer and we'll use that user detail in the
Ajmal: Okay.
Rishav Loomba: Razer service for the session validation. Currently session validation is happening via access token like our dashboards uh login session flow like access token and refresh token. But in this case we don't have that token available.




00:07:14


Rishav Loomba: So we are using this approach to a third for a WhatsApp to our service network connection. So this is one flow in which we we are relying on our service for uh
Ajmal: Okay.
Rishav Loomba: user for the response. Second flow is a trino one. In this case what we are doing we directly like is hosted on AWS. So with the direct as credential we are calling the like the trino SDK and we are making the queries on that uh the trino server and we are getting the response. But here also we need to set up proper guard rails and the security things like the only the session like prop of post the proper session validation and uh like the table access should be limited based on like for this particular service we need to restrict like only three or four tables three or four like whatever the use cases like 10 or 12 tables with proper uh like merchant ID merchant details to be limited like no no mid And I'm query the other MIDIs or other user id data which is already handled like prompt injection and query injection is already handled.




00:08:28


Rishav Loomba: Uh that guardra will share like how we are building the query with all the like hardcoded uh hardcoded as in hardcoded session related things in the query like for this mid for this user ID for this role.
Ajmal: Okay. Okay. Uh so basically here one thing that we have to we can ensure is while building while designing right uh we are just still in that phase now. So uh I am assuming that Reno and Razerit service will be the two sort of MCPS integrated to the uh decision service right is that your
Rishav Loomba: Well, it's not it's it's an HTTP
Vrajesh Jaidev Iyengar: Yeah.
Ajmal: plan okay
Rishav Loomba: protocol.
Vrajesh Jaidev Iyengar: Seven,
Ajmal: so uh how how is it planned like uh what converts
Vrajesh Jaidev Iyengar: eight,
Ajmal: the you uh user indent to a specific query or um payload.
Rishav Loomba: Uh, didn't get
Ajmal: So are you expecting to uh
Rishav Loomba: the
Ajmal: create like row queries from the service
Vrajesh Jaidev Iyengar: yeah.
Ajmal: itself?
Rishav Loomba: Yeah,
Vrajesh Jaidev Iyengar: See
Rishav Loomba: we can we're building query on the fly.




00:09:51


Vrajesh Jaidev Iyengar: we can take the MCP approach or the API approach based on like just checking we'll need to set
Ajmal: Oh,
Vrajesh Jaidev Iyengar: up evals for seeing its performance bases that we'll take a call on whether the I think MCPA for this huh
Rishav Loomba: It clearly depends on the performance.
Ajmal: see rather than letting the LLM itself uh craft any query, I whatever functions that we are planning to expose uh like how we are doing it for dashboard genic dashboard right through graphql so similarly let's expose specific
Rishav Loomba: Yeah.
Ajmal: endpoints if we need a specific uh API call to be made
Rishav Loomba: Mhm.
Ajmal: say fetch a certain item or u uh change like modify a certain item rather than letting the LLM to create a raw request let's let's you know expose that specific functionality
Rishav Loomba: So that are your
Ajmal: that we yeah otherwise it will be too much of exposure
Rishav Loomba: contin
Ajmal: to
Vrajesh Jaidev Iyengar: Okay.
Rishav Loomba: agree on that.
Ajmal: the
Rishav Loomba: So basically like if you see at this VRM service layer we have two parts like and razor assist service.




00:11:00


Rishav Loomba: The razer this razer service is already supporting all the graphical APIs which we need for answering the question of the merchant. This is the same as like more or less we are inheriting the agentic dashboard flows. But why we need the trino is you know gives us flexibility. Flexibility as like they have the use case in which merchant require some set of data but our current our current API because graphq internally uses using the monolith APIs. Okay,
Ajmal: Okay.
Rishav Loomba: monot they have the limited set of data which we are exposing to the merchant but in the reno tables we have
Vrajesh Jaidev Iyengar: That's
Rishav Loomba: whole lot of columns.
Vrajesh Jaidev Iyengar: it.
Rishav Loomba: So the use case is to show all the all of these like details which we are not getting in
Ajmal: Okay.
Vrajesh Jaidev Iyengar: That's
Rishav Loomba: the which we are not which are not supported with those variables or keys which are not supported in the monolith contracts as of now that directly accessing it from that but it the
Ajmal: Okay.
Rishav Loomba: scope is limited to like for that credentials we are only giving the access of like 10 to 12 tables like the payment settlements refunds all of those tables that's it we're restricting




00:12:05


Ajmal: Okay.
Rishav Loomba: those tables for that particular use case use
Vrajesh Jaidev Iyengar: it.
Ajmal: I I I understood. uh but let's expose specific uh you know
Rishav Loomba: case.
Ajmal: specific actions like for example fetch settlement or say read orders uh like that uh on top of trino rather than letting llm create
Rishav Loomba: Yeah.
Ajmal: the raw query uh tomorrow then we'll not have control on what other table will
Rishav Loomba: Yeah.
Ajmal: be exposed and like there is a higher risk of accidental exposure I mean uh
Rishav Loomba: So basic in the build at the time of building a query we have the guardrail setup key you the LLM can only generate a query on top based on some templates and in those templates it's restricted the table name is restricted in all of those template so the scope will always be limited and under control. So the prompt injection but the only thing is the only risk is key LLM can generate high latency queries or unoptimized queries for that what we are thinking either we'll solve it via infra will create a separate instance of query book for the VRM use case which will limit the scope scope as in the impact radius to the VRM use cases only if suppose like we got LM generated few high latency queries it will block the other Azer




00:13:32


Vrajesh Jaidev Iyengar: You
Ajmal: Okay.
Rishav Loomba: services
Ajmal: Okay. Let's discuss this offline. Uh we'll move on to the next point.
Vrajesh Jaidev Iyengar: can't
Ajmal: Uh maybe this specific point we'll discuss it
Rishav Loomba: sure these are mainly two
Ajmal: offline.
Rishav Loomba: intent two intents of the VRM use case which you're trying to do because the both of
Vrajesh Jaidev Iyengar: get it.
Rishav Loomba: these are relying on the Razer Pay internal services either the request come to the Razer SS service
Vrajesh Jaidev Iyengar: Sounds
Rishav Loomba: will will do the session validation via JWT because in this particular flow for any merchant we are not going ahead with the existing user like access token and the refresh token we are directly creating a new token header based on the user entity we're passing we are just forwarding that request to
Vrajesh Jaidev Iyengar: What is that?
Rishav Loomba: the razor assist service in the headers and we'll consume that as a uh logged in user or a valid uh authenticated user
Ajmal: Okay. How are we planning to authenticate uh user
Rishav Loomba: So the we actually we are not doing any authentication.




00:14:31


Ajmal: first
Rishav Loomba: We are just assuming if someone is messaging us via WhatsApp because WhatsApp meta internally already did the authentication. If you are already on the WhatsApp it means your mobile number is authenticated at the meta level but meta is not giving
Ajmal: we are also putting too much test on the third party. I think at least once we should authenticate the um merchant and expire the session after a certain period reauthenticate it. It could be a week or uh like more something that is practical but uh in this case uh third party may are putting too much
Rishav Loomba: Okay.
Ajmal: of
Rishav Loomba: So,
Ajmal: trust.
Vrajesh Jaidev Iyengar: for like a initial launch of let's say like 10 to 15 merchants where we want to just do the P can we go ahead with the M carbon like trusting the M carbon and we'll do this fix once we are scaling beyond like 20 merchants
Ajmal: Uh no no Rajes this is too sensitive that we can just give a sign of like
Rishav Loomba: Okay. So because we already discussed this with the edge team as well.




00:15:36


Ajmal: that.
Vrajesh Jaidev Iyengar: Okay.
Rishav Loomba: So the thing is key from the merchant point of view we don't want product don't want to do the OTP login and any set of the login flow to be triggered in the WhatsApp chat. Yeah. The second second thing is what we are thinking is for the every request coming at the VRM layer will will trigger the based on that mobile number will call the edge IDP APIs to generate the access token and the refresh token but in that case also like we only have the option of using assuming that that mobile number is authenticated at the meta level because same thing we are doing it with the Google login as well like Google is sharing the token with us they're calling our page and we're building a session out of Yeah,
Ajmal: There's a difference between Google and MC carbon.
Rishav Loomba: but like in the industry lot of companies are using MR.
Ajmal: N see uh I explained my point this doesn't make sense to me I'll share the same in the thread as well uh so if you want to take a exception and go ahead it's up to




00:16:41


Rishav Loomba: Okay.
Ajmal: you from security point of view this doesn't make sense that's
Vrajesh Jaidev Iyengar: Okay. So, you're saying that a barp generation we should do and we can use the token for how muchever long we
Ajmal: Uh yeah,
Vrajesh Jaidev Iyengar: want.
Ajmal: you should also expire it after say a week or
Rishav Loomba: Sure.
Vrajesh Jaidev Iyengar: Okay.
Ajmal: two.
Vrajesh Jaidev Iyengar: So every two weeks like the merchant will need to uh relog in and do this OTP.
Ajmal: Okay. Anyway, uh we'll I'll just put down these points and also share
Vrajesh Jaidev Iyengar: Okay.
Ajmal: these things
Rishav Loomba: So a I need one suggestion like suppose we are doing the OTP login.
Ajmal: offline.
Rishav Loomba: So currently the access tokens thing is only validated for like 15 minutes and the refresh token is validated for uh 24 hours. So for this use case like suppose it's a mandatory for us to actually uh keep a session out
Vrajesh Jaidev Iyengar: This This
Rishav Loomba: of it. So can we uh can we keep the session timeouts bit longer like the refresh token




00:17:47


Vrajesh Jaidev Iyengar: one.
Rishav Loomba: for 30 days something like that?
Ajmal: Uh I didn't get you like uh what is
Rishav Loomba: So currently the token expiry is of 24 hours.
Ajmal: creating ATR?
Rishav Loomba: Suppose basically currently our ATIT expiries are 15 minutes and 24 hours. Suppose someone uh didn't log into the dashboard in the last 24 hours. We or she have to relog in again. But in the case
Ajmal: Is it is it IDP or that you'reing? No,
Rishav Loomba: yes
Ajmal: IDP is currently two weeks for RT.
Rishav Loomba: so uh ves the two if we if uh we using the two week thing will that
Vrajesh Jaidev Iyengar: Uh uh I'll check internally
Rishav Loomba: work
Vrajesh Jaidev Iyengar: but
Rishav Loomba: I think it's suppose uh we need like one month or two months to keep the RT time RT expiry. So can we do that for this use
Ajmal: No,
Rishav Loomba: case
Ajmal: I didn't understand. Why do we need um RT here?
Vrajesh Jaidev Iyengar: that.
Rishav Loomba: any so what we'll do now we'll post so suppose to create a session we'll do a login at the WhatsApp only like the OTP flow on the WhatsApp once the OTP OTP login is done we'll create the ATRT for that merch and and that




00:19:17


Ajmal: Okay.
Rishav Loomba: case we don't need to rerun the OTP flow after every two weeks we'll keep that for the two months kind of a things
Ajmal: Okay.
Rishav Loomba: which will solve your MX thing as well like in sing one OTP login in two weeks will not impact any merchant experience but for every two weeks maybe
Vrajesh Jaidev Iyengar: I hate
Ajmal: Okay. Uh so um I mean any particular reason that you want to extend this to 30 days instead of two weeks?
Rishav Loomba: only for the merchant experience we don't want to have Long RTB flow.
Vrajesh Jaidev Iyengar: Like our ideal our ideal merchant experiences merchant should not have to put in this because the flow is that we send out a group invite link to the merchant. the merchant joins that group and only this specific contact number when it sends a message in that specific group will our VRM service even receive this message. And bar we have all of our processing on which intent
Ajmal: Now the point is the carbon wall vendor right so from them
Vrajesh Jaidev Iyengar: which




00:20:20


Ajmal: we'll be just receiving a mobile number and uh whatever prompt or message that is from that is coming from that number that's it
Vrajesh Jaidev Iyengar: correct
Ajmal: Huh? Then we are not authenticating. I mean like we are just blindly trusting whatever uh the vendor is passing to us. We are not like authenticating merchant there like uh yeah that's
Vrajesh Jaidev Iyengar: correct here. Here it relies on the trust on M carbon. You're right about that.
Ajmal: yeah
Vrajesh Jaidev Iyengar: So, so that is a fair point. But from like the merchant experience lens,
Ajmal: right
Vrajesh Jaidev Iyengar: we don't want to have to you know keep sending them an OTP. So for from like the merchant experience lens, we want it ideally to not have an OTP which is why we are seeing what is the max that we can you know stretch this uh expiry uh till like if one month is a is an okay thing then that would that would still be a better experience than every two weeks. That is where we are coming from.




00:21:21


Ajmal: Okay, good. I I would suggest to go with the same session what dashboard is doing right now which is two weeks.
Vrajesh Jaidev Iyengar: I'll check on this. If it works, it works. Maybe for initial launch, we'll need to do uh whatever is
Ajmal: But uh anyway we'll I'll also discuss with my folks uh here and like
Vrajesh Jaidev Iyengar: fastest.
Ajmal: final um say if we can extend it or not. I'll let you know on the thread.
Vrajesh Jaidev Iyengar: Yeah,
Ajmal: I
Vrajesh Jaidev Iyengar: that will be very helpful.
Rishav Loomba: And like what what will be the ideal like use cases for all these like
Ajmal: will
Rishav Loomba: in the future use cases as well. Suppose we have like dependency on any as a third party social media application. So what will be the like do we have anything uh like the ideal state what what it would be for future references.
Ajmal: I think uh not sure if s there is something like that we can create if request
Vrajesh Jaidev Iyengar: So I I I guess like you'll need to use a login with meta.




00:22:18


Rishav Loomba: Okay.
Vrajesh Jaidev Iyengar: login with Insta, Joby, those flows and have meta or meta just generate a access token for you which you can validate like which VRM could validate. I guess that would be the most secure where you bypass like a third party vendor enough. I think the issue is mostly the third party vendor,
Ajmal: uh
Vrajesh Jaidev Iyengar: not the end application that the merchant is using,
Ajmal: uh yeah Rajes
Vrajesh Jaidev Iyengar: right?
Ajmal: I'll suggest this uh all put all the different approaches that you can think of uh we can review it like put in a dock. Uh we can review each one by one. So whichever is the best approach. Uh I mean we'll have to check it offline, right?
Vrajesh Jaidev Iyengar: See
Ajmal: I'm not sure about how this uh meta
Vrajesh Jaidev Iyengar: care
Ajmal: works.
Vrajesh Jaidev Iyengar: it's not something viable right now. I was just saying for the case that Lumba said like in the future if we have any social media platform like the respective oath from these flows would be the ideal way to go.




00:23:22


Ajmal: Okay. Okay.
Rishav Loomba: Okay.
Ajmal: Okay. Okay. I need to check about that Rajes. I'm not sure how meta works.
Vrajesh Jaidev Iyengar: So this is not a use case that has been done in Razer before makes
Ajmal: No. No, I don't think
Vrajesh Jaidev Iyengar: sense.
Ajmal: so.
Vrajesh Jaidev Iyengar: uh in terms of action items I know things one is to check on the
Rishav Loomba: Excellent.
Vrajesh Jaidev Iyengar: asking the URL uh not exposing a cloudfront URL to you can share the P with me a from your team and uh the second thing is checking on the
Ajmal: Yeah, sure.
Vrajesh Jaidev Iyengar: two weeks TTL if that is okay we are like there is a no go for this current approach where we are not doing user o right from security
Ajmal: Yeah, I I'll also discuss once internally and get back to you on that.
Vrajesh Jaidev Iyengar: uh if we have to go ahead with that route then we will need some exception approvals for this generally what is the process and how how does that work
Ajmal: Uh generally the BU head have to approve also the security




00:24:29


Vrajesh Jaidev Iyengar: okay okay so
Ajmal: head.
Vrajesh Jaidev Iyengar: these are the main two things about like uh otherwise is we are good to go with
Ajmal: Okay.
Vrajesh Jaidev Iyengar: implementation of the OTP approach with no changes to the TTL for the
Ajmal: Uh yeah. So can you also put this down this approaches in a dock and I can you know put my final
Vrajesh Jaidev Iyengar: RT
Ajmal: points on that.
Vrajesh Jaidev Iyengar: open question from your
Ajmal: Uh also I have uh wanted to understand what uh how does
Rishav Loomba: I adding
Vrajesh Jaidev Iyengar: shop.
Ajmal: the uh how is the merchant queries stored like somewhere I saw red is uh say if some merchant asks a query today and tomorrow like the sequence of messages right uh where are we storing it how are we storing
Vrajesh Jaidev Iyengar: Uh I can do one thing. I'll just share the repo's access with you and you can just use clot to ask to to get like whatever answers you want to your queries. I think I might not be that uh you know well first I'll share the
Ajmal: Okay.
Vrajesh Jaidev Iyengar: report you
Ajmal: Okay. Sure. Sure.
Vrajesh Jaidev Iyengar: awesome
Rishav Loomba: I have a call. We'll add the
Vrajesh Jaidev Iyengar: I'll h I'll share
Rishav Loomba: message.
Ajmal: No, I post the questions here in the
Vrajesh Jaidev Iyengar: the You can I'll also
Rishav Loomba: Sure.
Ajmal: third.
Vrajesh Jaidev Iyengar: put the meeting transcript there. The general notes cool.
Ajmal: All right. Thank you.
Vrajesh Jaidev Iyengar: Thank you so much.
Ajmal: Thank you.
Vrajesh Jaidev Iyengar: Bye.




Transcription ended after 00:26:31


This editable transcript was computer generated and might contain errors. People can also change the text after it was created.

---

## Linked Entities
- [[people/rishav-loomba]]
- [[people/vrajesh-iyengar]]
- [[projects/vrm]]
