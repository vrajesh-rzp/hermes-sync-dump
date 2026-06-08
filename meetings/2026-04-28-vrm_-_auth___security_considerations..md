---
title: "VRM - Auth & Security Considerations."
type: meeting
date: 2026-04-28
tags: [meeting, gemini-recording]
gemini_doc_id: 1MzcDCGT70MJ_zSMjIp1YuTbWevnXG1Km2UVvJj0tAwM
---

# VRM - Auth & Security Considerations.


**Date:** 2026-04-28
**Source:** Gemini recording ([Google Doc](https://docs.google.com/document/d/1MzcDCGT70MJ_zSMjIp1YuTbWevnXG1Km2UVvJj0tAwM/edit))

---

## Summary

﻿📝 Notes
Apr 28, 2026
VRM - Auth & Security Considerations.
Invited Vrajesh Jaidev Iyengar Ishaan Bahal Prashant Chaudhary Rishav Loomba
Attachments VRM - Auth & Security Considerations.
Meeting records Transcript 

Summary
Technical discussion covered passport generation, merchant identification, authentication protocols, and WhatsApp integration for merchant support.

Passport and Merchant ID
Teams debated passport creation flows and decided to pass the Merchant ID directly to Razor Assist to avoid gateway inefficiencies.

VRM Authentication Strategy
VRM will utilize session tokens verified against phone numbers to support WhatsApp interactions while avoiding cumbersome OTP requirements.

Security and Risk Mitigation
Risks involving third party message signatures prompted a plan for a security review of the authentication and unblock logic.

Rate this Summary: Helpful or Not Helpful

Decisions
We've updated the Decisions section using your feedback.
Let us know what you think: Helpful or Not Helpful

ALIGNED
* Authentication flow strategy for VRM The authentication flow for VRM is set to forward the Merchant ID and User ID directly to the Assist service, allowing it to bypass the standard dashboard, pending a formal security review.

Next steps
* [The group] Handle Logic: Handle VRM internal logic implementation. Pass Merchant ID (MI).
* [Ishaan Bahal] Consult Security: Have conversation with the security team. Align security on non-OTP quick fix path.
* [Rishav Loomba] Share Details: Share technical specifications for downstream calls.
* [The group] Create Document: Generate documentation summarizing all authentication discussions.

Details
Did the screenshots in this section make your notes better or worse?
* Discussion on Passport Creation and Forwarding to Razor Assist: The team debated two potential flows for creating a passport and sending it to Razor Assist: going via 'edge' which would be time-consuming for a lightweight gateway, or creating a fake passport embedded with a merchant ID and forwarding it directly to Razor Assist. Rishav Loomba noted that current workflows are typically stateless or perform session validation from within server processing.
* Alternative Flow for Merchant ID Extraction: Ishaan Bahal suggested a cheaper flow where the Merchant ID is already being extracted by the BRM and can be forwarded (00:01:11). Vrajesh Jaidev Iyengar proposed they could simply send the phone number, but Prashant Chaudhary pointed out the need to select the Merchant ID beforehand. It was agreed that they will handle the logic and pass the Merchant ID, noting that if multiple IDs are found against a user, they will need to ask the user for merchant information (00:03:38).
* VRM Application and WhatsApp Integration: The discussion shifted to the VRM application and its use of WhatsApp for merchant support, which Vrajesh Jaidev Iyengar confirmed is a new, cloud-hosted system that avoids reusing old code (00:05:30). The VRM app

---

## Full Notes

﻿📝 Notes
Apr 28, 2026
VRM - Auth & Security Considerations.
Invited Vrajesh Jaidev Iyengar Ishaan Bahal Prashant Chaudhary Rishav Loomba
Attachments VRM - Auth & Security Considerations.
Meeting records Transcript 




Summary
Technical discussion covered passport generation, merchant identification, authentication protocols, and WhatsApp integration for merchant support.

Passport and Merchant ID
Teams debated passport creation flows and decided to pass the Merchant ID directly to Razor Assist to avoid gateway inefficiencies.

VRM Authentication Strategy
VRM will utilize session tokens verified against phone numbers to support WhatsApp interactions while avoiding cumbersome OTP requirements.

Security and Risk Mitigation
Risks involving third party message signatures prompted a plan for a security review of the authentication and unblock logic.


Rate this Summary: Helpful or Not Helpful




Decisions
We've updated the Decisions section using your feedback.
Let us know what you think: Helpful or Not Helpful


ALIGNED
* Authentication flow strategy for VRM The authentication flow for VRM is set to forward the Merchant ID and User ID directly to the Assist service, allowing it to bypass the standard dashboard, pending a formal security review.




Next steps
* [The group] Handle Logic: Handle VRM internal logic implementation. Pass Merchant ID (MI).
* [Ishaan Bahal] Consult Security: Have conversation with the security team. Align security on non-OTP quick fix path.
* [Rishav Loomba] Share Details: Share technical specifications for downstream calls.
* [The group] Create Document: Generate documentation summarizing all authentication discussions.




Details
Did the screenshots in this section make your notes better or worse?
* Discussion on Passport Creation and Forwarding to Razor Assist: The team debated two potential flows for creating a passport and sending it to Razor Assist: going via 'edge' which would be time-consuming for a lightweight gateway, or creating a fake passport embedded with a merchant ID and forwarding it directly to Razor Assist. Rishav Loomba noted that current workflows are typically stateless or perform session validation from within server processing.
* Alternative Flow for Merchant ID Extraction: Ishaan Bahal suggested a cheaper flow where the Merchant ID is already being extracted by the BRM and can be forwarded (00:01:11). Vrajesh Jaidev Iyengar proposed they could simply send the phone number, but Prashant Chaudhary pointed out the need to select the Merchant ID beforehand. It was agreed that they will handle the logic and pass the Merchant ID, noting that if multiple IDs are found against a user, they will need to ask the user for merchant information (00:03:38).
* VRM Application and WhatsApp Integration: The discussion shifted to the VRM application and its use of WhatsApp for merchant support, which Vrajesh Jaidev Iyengar confirmed is a new, cloud-hosted system that avoids reusing old code (00:05:30). The VRM application relies on WhatsApp groups where merchants can send messages, such as "What is my payment summary for yesterday?", to which the system fetches and responds with relevant information. The team agreed they cannot implement an OTP flow due to the desire to avoid it for merchant convenience (00:07:47).
* Authentication for Destructive Actions: Prashant Chaudhary questioned if there was a better option for authentication, especially when considering destructive actions (00:07:47) (00:19:01). They agreed that VRM, acting on behalf of the user, will store a session token against the merchant's phone number. Vrajesh Jaidev Iyengar explained that VRM receives a message from M Carbon, checks for an active session with that phone number, and verifies the session token using existing endpoints (00:17:08).
  

* Security Concerns and Third-Party Risk: Ishaan Bahal raised concerns that because they are going via a third party called M Carbon and relying only on their signature, bad actors sending messages cannot be controlled (00:15:06). It was acknowledged that M Carbon is a large WhatsApp player, but destructive actions still carry a risk. The team identified two potential solutions: rebuilding the entire authentication flow with WhatsApp in mind or implementing a quick unblock system to send required items (00:19:01).
* Final Path Forward and Documentation: Vrajesh Jaidev Iyengar asked for clarity on the path forward, confirming they would review the 'quick fix while non-OTP flow' with security (00:22:54). The final solution involves sending the Merchant ID, user ID, or other necessary IDs from VRM to Razor Assist, allowing them to bypass the dashboard call. Rishav Loomba confirmed they will share the details for downstream calls, and the team planned to schedule a security review for the documentation of the proposed solution (00:24:36).




You should review Gemini's notes to make sure they're accurate. Get tips and learn how Gemini takes notes
How is the quality of these specific notes? Take a short survey to let us know your feedback, including how helpful the notes were for your needs.
📖 Transcript
Apr 28, 2026
VRM - Auth & Security Considerations. - Transcript
00:00:00


Ishaan Bahal: call II that's that's all they do uh so now to create a passport and send it to uh this particular bit razor assist one way is we go via edge edge uh now takes that phone number talks to figures out the merchant ID if the merchant ID is only one then it forwards that request but that will take a lot of time and edge will never go for it considering the fact it has to be lightweight gateway the other alternative um is going to be key we create a fake passport. We embed a merchant ID uh in the passport and then we forward it to razor assist. These were the two sort of possible flows we thought of. Uh now question I I'm not too sure what the question should be here. Uh first is will this work?
Rishav Loomba: doubts currently assistantic
Ishaan Bahal: Huh?
Rishav Loomba: workflows are like stateless or from within the
Vrajesh Jaidev Iyengar: Okay.
Rishav Loomba: server processing to validate the flow validate the flow as session validation
Ishaan Bahal: Uh so from




00:01:11


Rishav Loomba: JWT upstream JWT in the service network session API call to fetch the user persona.
Ishaan Bahal: Can you go to main py and go to aentic router? So aentic middleware line. So agentware
Rishav Loomba: Look
Ishaan Bahal: dispatch it's basically doing these it's reading the passport in uh headers uh if it has a passport else it tries to look for a session in cookies and then it does the authentication basic purpose merchant
Rishav Loomba: authentication
Ishaan Bahal: extraction huh
Rishav Loomba: Authentic
Ishaan Bahal: Aa. Okay. Okay.
Rishav Loomba: Yeah. So what I'm
Ishaan Bahal: So in that case
Rishav Loomba: saying
Vrajesh Jaidev Iyengar: Security.
Ishaan Bahal: What's
Rishav Loomba: like
Ishaan Bahal: up?
Rishav Loomba: downream passwordated
Ishaan Bahal: Uh, but you forward cookies.
Rishav Loomba: for this specific service to fetch the user persona request coming from this specific basic basic service forward for this set of merchant. This basic author
Ishaan Bahal: So there's even a cheaper flow. So BRM right now is anyway extracting the merchant ID. Uh we can forward that merchant ID also.




00:03:38


Vrajesh Jaidev Iyengar: But I can just send the phone number as well.
Ishaan Bahal: Nobody ever
Prashant Chaudhary: You need to select the merchant ID right before how can we
Ishaan Bahal: goint
Rishav Loomba: already. Mobile number
Prashant Chaudhary: take
Rishav Loomba: find
Ishaan Bahal: to merchant ID.
Vrajesh Jaidev Iyengar: According to GTM according to GTM first set of cohorts
Prashant Chaudhary: app like we need to solve for this.
Vrajesh Jaidev Iyengar: correct correct we'll we'll handle the logic and we'll pass the MI
Prashant Chaudhary: So like how do like what's
Vrajesh Jaidev Iyengar: a chat If we find multiple against this user then we'll need to ask the user
Prashant Chaudhary: the
Vrajesh Jaidev Iyengar: merchant information section
Prashant Chaudhary: user information? Okay. VRM
Vrajesh Jaidev Iyengar: This is a good
Prashant Chaudhary: access.
Ishaan Bahal: They're just relying on train
Rishav Loomba: dependent service
Ishaan Bahal: only.
Rishav Loomba: has
Ishaan Bahal: They don't really have access to a lot of
Rishav Loomba: ops.
Ishaan Bahal: APIs.
Rishav Loomba: Ops
Prashant Chaudhary: Okay.
Vrajesh Jaidev Iyengar: Yeah. AI strategy strategy.
Prashant Chaudhary: Okay.
Ishaan Bahal: Hey, that was the first problem we had and we validate that signature.




00:05:30


Prashant Chaudhary: third party
Ishaan Bahal: Um,
Prashant Chaudhary: authentication.
Ishaan Bahal: honestly,
Rishav Loomba: security payment link WhatsApp.
Vrajesh Jaidev Iyengar: What do you
Ishaan Bahal: WhatsApp
Vrajesh Jaidev Iyengar: guys?
Rishav Loomba: That's an incoming.
Ishaan Bahal: in
Prashant Chaudhary: Money movement could
Ishaan Bahal: M.
Rishav Loomba: remembering help and
Prashant Chaudhary: be
Vrajesh Jaidev Iyengar: Yes.
Rishav Loomba: support WhatsApp
Ishaan Bahal: Ray also uses uh oneway streams from what I
Vrajesh Jaidev Iyengar: Hear
Rishav Loomba: but help and support application like merchant wants to create a ticket WhatsApp
Ishaan Bahal: know. That is what VRM is,
Vrajesh Jaidev Iyengar: him.
Ishaan Bahal: right?
Rishav Loomba: I think I think existing
Vrajesh Jaidev Iyengar: Are you there?
Ishaan Bahal: any existing
Rishav Loomba: production.
Ishaan Bahal: product.
Vrajesh Jaidev Iyengar: VRM is a new thing. We are not reusing any of the old code or any of the old flows.
Ishaan Bahal: They'll have an idea also.
Vrajesh Jaidev Iyengar: Uh so this is the VRM application cloud hosted to there are WhatsApp groups that are created which have three members. One is the merchant WhatsApp this group.




00:07:47


Vrajesh Jaidev Iyengar: message. What is my payment summary for yesterday? thinking equivalent response and then it makes a few calls internally to other places to get like information based on this. It fetches whatever information is needed responds it responds to the same web hook.
Ishaan Bahal: We can't put in an OTP flow
Vrajesh Jaidev Iyengar: uh so ideally even in the first message the merchant is just sent a link to join a group they wanted to
Ishaan Bahal: also.
Vrajesh Jaidev Iyengar: avoid this whole OTP flow because uh merchant
Rishav Loomba: Okay. Just
Vrajesh Jaidev Iyengar: That was the thought
Prashant Chaudhary: What do
Rishav Loomba: I think
Vrajesh Jaidev Iyengar: respon
Prashant Chaudhary: you
Rishav Loomba: mobile number.
Prashant Chaudhary: very I saw Abandoned merchant phone number. What about
Rishav Loomba: Kiss.
Prashant Chaudhary: them?
Rishav Loomba: Kiss.
Ishaan Bahal: What you're saying is true.
Vrajesh Jaidev Iyengar: scaled ramp up program. This will not be launched to everyone at 100% at any point.
Prashant Chaudhary: I'm thinking is there any better option for authentication?
Vrajesh Jaidev Iyengar: Huh?




00:09:42


Prashant Chaudhary: Second How you
Vrajesh Jaidev Iyengar: Okay.
Rishav Loomba: other scalable alternate support
Prashant Chaudhary: next?
Rishav Loomba: ID access.
Vrajesh Jaidev Iyengar: Um
Ishaan Bahal: But on behalf of the user VRM Let's
Rishav Loomba: on behalf of us.
Ishaan Bahal: call
Rishav Loomba: Replicate
Vrajesh Jaidev Iyengar: better.
Rishav Loomba: authentic
Ishaan Bahal: from what I can think of, we can at least do this. So that you don't have to worry about
Rishav Loomba: downream.
Ishaan Bahal: request.
Rishav Loomba: What I say?
Vrajesh Jaidev Iyengar: But downream services don't use
Rishav Loomba: Yes.
Vrajesh Jaidev Iyengar: passports with passport.
Ishaan Bahal: They fetch it themselves.
Rishav Loomba: access token generation for merchant
Ishaan Bahal: token.
Rishav Loomba: merchant that's what I'm
Vrajesh Jaidev Iyengar: Okay.
Ishaan Bahal: Maybe
Rishav Loomba: Assuming mobile
Vrajesh Jaidev Iyengar: Conversation
Rishav Loomba: number
Prashant Chaudhary: concept. How they were doing
Vrajesh Jaidev Iyengar: I don't even
Prashant Chaudhary: for
Ishaan Bahal: WhatsApp for business statements.
Prashant Chaudhary: onboarding flows. Same way No worries.
Vrajesh Jaidev Iyengar: Bes. Pardon me.
Prashant Chaudhary: section.
Vrajesh Jaidev Iyengar: Onboarding branding




00:13:00


Prashant Chaudhary: Hello
Vrajesh Jaidev Iyengar: options.
Ishaan Bahal: session token, right?
Rishav Loomba: Think of it generate that user object.
Vrajesh Jaidev Iyengar: Hey,
Rishav Loomba: like that
Ishaan Bahal: MI to technically forward,
Rishav Loomba: with
Ishaan Bahal: but you still need user tokens.
Prashant Chaudhary: Okay,
Rishav Loomba: no tokens we don't need for downream to service to
Prashant Chaudhary: that's
Rishav Loomba: service but there are other few parameters
Prashant Chaudhary: okay.
Rishav Loomba: owner
Ishaan Bahal: I think One
Vrajesh Jaidev Iyengar: Thank
Rishav Loomba: Huh?
Vrajesh Jaidev Iyengar: you.
Ishaan Bahal: shot
Rishav Loomba: dashboard in that case.
Ishaan Bahal: regardless security review but uh at least we have one possible solution now.
Rishav Loomba: Yes.
Vrajesh Jaidev Iyengar: So what is solution?
Prashant Chaudhary: I have I got this WhatsApp. What we did was like WhatsApp. We asked them to create a like we had created a link for us would hit with their business ID and other information WhatsApp and we were creating that account based on that and then
Vrajesh Jaidev Iyengar: Hey, what's
Ishaan Bahal: limitation WhatsApp directly we are going via third party called




00:15:06


Vrajesh Jaidev Iyengar: up?
Ishaan Bahal: Marbon not a
Prashant Chaudhary: how that is.
Rishav Loomba: solution.
Ishaan Bahal: But
Rishav Loomba: Ideally login as a Facebook login Google login Facebook
Ishaan Bahal: h the
Vrajesh Jaidev Iyengar: Huh?
Ishaan Bahal: federation that is just signature. So all we can verify is message M carbon say but there can be bad actors sending messages that
Vrajesh Jaidev Iyengar: f***.
Ishaan Bahal: is not
Rishav Loomba: Huh?
Ishaan Bahal: controllable
Vrajesh Jaidev Iyengar: The same authentication stock team is also using with M carbon only.
Ishaan Bahal: stalk will not identify your message or it will not do any of the merchant ID extract or anything. It'll just dump all those messages to an
Rishav Loomba: Downream
Ishaan Bahal: SQSQ
Vrajesh Jaidev Iyengar: I think active handle reactive.
Rishav Loomba: service
Vrajesh Jaidev Iyengar: Uh
Rishav Loomba: request.
Ishaan Bahal: and then Everyone can
Vrajesh Jaidev Iyengar: Uh
Ishaan Bahal: listen.
Rishav Loomba: Oh,
Vrajesh Jaidev Iyengar: that is the reason we want to avoid
Rishav Loomba: feature.
Prashant Chaudhary: Yeah,
Ishaan Bahal: But
Vrajesh Jaidev Iyengar: what's happening.
Ishaan Bahal: WhatsApp
Prashant Chaudhary: they will ask OTP




00:17:08


Vrajesh Jaidev Iyengar: banking fine but customer support.
Prashant Chaudhary: in
Vrajesh Jaidev Iyengar: So they have context of your account and they're able to support
Prashant Chaudhary: action.
Ishaan Bahal: Read read
Prashant Chaudhary: For that you need proper
Rishav Loomba: Gotcha.
Vrajesh Jaidev Iyengar: Hello
Ishaan Bahal: WhatsApp
Vrajesh Jaidev Iyengar: dashboard
Ishaan Bahal: basis.
Prashant Chaudhary: Oh,
Vrajesh Jaidev Iyengar: with the flow with the like OTP verification flow. How will that work? I will just session.
Prashant Chaudhary: Jesse.
Ishaan Bahal: That only works on tokens. I don't even know tokens WhatsApp. That's another problem.
Rishav Loomba: Perfect.
Prashant Chaudhary: WhatsAppen
Vrajesh Jaidev Iyengar: Correct.
Ishaan Bahal: Then we have to rely on session entirely.
Prashant Chaudhary: like
Ishaan Bahal: But session
Prashant Chaudhary: Mest number which we are sending.
Vrajesh Jaidev Iyengar: take. So,
Prashant Chaudhary: token
Vrajesh Jaidev Iyengar: VRM session that will be like against
Ishaan Bahal: present.
Vrajesh Jaidev Iyengar: this.
Prashant Chaudhary: token VRM will store that ATR on behalf of
Ishaan Bahal: phone
Prashant Chaudhary: that phone
Ishaan Bahal: number.
Prashant Chaudhary: number.
Vrajesh Jaidev Iyengar: The VRM receives a message from M Carbon checks if that phone number active session session token verify with whatever end points we already have.




00:19:01


Prashant Chaudhary: Then you directly send this will take care.
Ishaan Bahal: You
Rishav Loomba: No token token
Ishaan Bahal: send
Rishav Loomba: generation
Ishaan Bahal: it WhatsApp.
Rishav Loomba: login.
Ishaan Bahal: Yeah, I agree. effort.
Rishav Loomba: login service.
Prashant Chaudhary: It should be like then it should work
Rishav Loomba: Huh? Wait, wait,
Prashant Chaudhary: and compiance
Rishav Loomba: wait.
Ishaan Bahal: Hey
Prashant Chaudhary: team
Vrajesh Jaidev Iyengar: Yeah,
Prashant Chaudhary: in the industry. Do they trust
Vrajesh Jaidev Iyengar: compliance already validation when this was initially started. I think or has signed some NDS with MC.
Prashant Chaudhary: Is itable or not? Just Google we trust
Ishaan Bahal: and coffee.
Prashant Chaudhary: them
Ishaan Bahal: They are more or less the largest WhatsApp player. Honey,
Prashant Chaudhary: like
Ishaan Bahal: we need to be also clear on WhatsApp destructive
Vrajesh Jaidev Iyengar: Nice.
Ishaan Bahal: actions.
Prashant Chaudhary: It has like it it is right actions are
Ishaan Bahal: risk.
Prashant Chaudhary: there.
Ishaan Bahal: So we have two possible solutions. One is to rebuild the entire O flow with a WhatsApp flow in mind.




00:21:01


Ishaan Bahal: Uh the other is discuss more like
Vrajesh Jaidev Iyengar: Jesus.
Ishaan Bahal: a unblock system where we can send like a list of things that you need.
Rishav Loomba: Yeah.
Ishaan Bahal: Cool.
Vrajesh Jaidev Iyengar: Agentic
Ishaan Bahal: Oh,
Vrajesh Jaidev Iyengar: dashboard.
Rishav Loomba: rate
Ishaan Bahal: hey.
Rishav Loomba: or 10 request per minute because Sorry, I'd say
Ishaan Bahal: Sorry.
Vrajesh Jaidev Iyengar: Right for the
Rishav Loomba: no.
Vrajesh Jaidev Iyengar: dashboard
Rishav Loomba: Get right. Right. Good.
Vrajesh Jaidev Iyengar: timelines. that we need to track. Next week
Ishaan Bahal: limited number of phone numbers. We have a purchase. But what if I send you a message?
Vrajesh Jaidev Iyengar: as in
Ishaan Bahal: So you have some sort of a white list on your end which says numbers
Vrajesh Jaidev Iyengar: huh only messages that come through this group in which this DRM is a part.
Ishaan Bahal: allowed
Vrajesh Jaidev Iyengar: one-on-one messages. These are only the messages that will come from a group
Ishaan Bahal: to I think he we should be able to do one or the other let's have a conversation with




00:22:54


Vrajesh Jaidev Iyengar: control.
Ishaan Bahal: security so that they are also aligned
Rishav Loomba: Thanks.
Ishaan Bahal: But then
Rishav Loomba: Proper proper third party
Ishaan Bahal: WhatsApp or we can
Vrajesh Jaidev Iyengar: friction
Rishav Loomba: login.
Ishaan Bahal: do like a link based login also that will also work. Huh? Fair.
Vrajesh Jaidev Iyengar: merchant. Maybe if they like if they have some destructive action that they're trying to take for validation.
Ishaan Bahal: Um, but I think
Rishav Loomba: It's not
Prashant Chaudhary: It's asking
Ishaan Bahal: From a standard security standpoint, it makes sense.
Prashant Chaudhary: change in October,
Vrajesh Jaidev Iyengar: Oh,
Prashant Chaudhary: September.
Ishaan Bahal: U keep me and also on
Vrajesh Jaidev Iyengar: you Yeah,
Ishaan Bahal: it
Vrajesh Jaidev Iyengar: action items. What are what is the path that we are going forward with the quick fix while nonotp
Ishaan Bahal: if um the quick fix while path is what we want to uh review from
Vrajesh Jaidev Iyengar: flow
Ishaan Bahal: them and if they also recommend the same thing that Prashant is saying then we'll have to go and build that because even if we do build this G&G




00:24:36


Vrajesh Jaidev Iyengar: okay
Rishav Loomba: Yo, it's come
Ishaan Bahal: Huh? This will be very
Rishav Loomba: foreign.
Ishaan Bahal: limited.
Vrajesh Jaidev Iyengar: that is That will be one other project.
Ishaan Bahal: security teams and then we should be good to go.
Rishav Loomba: Okay.
Vrajesh Jaidev Iyengar: Just for the sake of documentation, what was what is the solution?
Ishaan Bahal: So uh Risha will share whatever is needed to make like downstream calls but for the most part merchant ID, user ID or ID that we'll have to send from VRM to RER assist uh and they can basically bypass the dashboard
Vrajesh Jaidev Iyengar: Okay.
Ishaan Bahal: call
Vrajesh Jaidev Iyengar: Okay. So, the mock JWT will be generated uh on edge or on uh Yeah.
Ishaan Bahal: and no in Both cases bull
Rishav Loomba: I'll share the details
Prashant Chaudhary: external
Rishav Loomba: like
Ishaan Bahal: also.
Vrajesh Jaidev Iyengar: document. When we do the security
Prashant Chaudhary: cluster security
Vrajesh Jaidev Iyengar: review
Prashant Chaudhary: team.
Rishav Loomba: Security team
Prashant Chaudhary: Oh
Rishav Loomba: security
Ishaan Bahal: Security
Prashant Chaudhary: no.
Ishaan Bahal: review.
Rishav Loomba: done.
Vrajesh Jaidev Iyengar: meeting before.
Prashant Chaudhary: Gemini whatever we have discussed ask can you create a document please
Vrajesh Jaidev Iyengar: Yeah. Yeah. Yeah.
Prashant Chaudhary: come.
Rishav Loomba: Okay. Gemini
Vrajesh Jaidev Iyengar: Cooler,
Rishav Loomba: document.
Vrajesh Jaidev Iyengar: folks. Thank you so much.
Prashant Chaudhary: much.
Ishaan Bahal: Byebye.
Prashant Chaudhary: Thank you.
Ishaan Bahal: Byebye.
Vrajesh Jaidev Iyengar: Bye-bye.




Transcription ended after 00:27:14


This editable transcript was computer generated and might contain errors. People can also change the text after it was created.
