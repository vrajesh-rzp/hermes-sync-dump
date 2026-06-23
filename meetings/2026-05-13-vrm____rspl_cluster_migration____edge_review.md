---
title: "VRM <> RSPL Cluster migration <> Edge review"
type: meeting
date: 2026-05-13
tags: [meeting, gemini-recording]
gemini_doc_id: 1FVHr7un7_isFJHM1TQzX5E2JS3lq0G5UlJhfMNWnGlU
---

# VRM <> RSPL Cluster migration <> Edge review


**Date:** 2026-05-13
**Source:** Gemini recording ([Google Doc](https://docs.google.com/document/d/1FVHr7un7_isFJHM1TQzX5E2JS3lq0G5UlJhfMNWnGlU/edit))

---

## Summary

﻿📝 Notes
May 13, 2026
VRM <> RSPL Cluster migration <> Edge review
Invited Vrajesh Jaidev Iyengar Kadambary Diwan Ishaan Bahal
Attachments VRM <> RSPL Cluster migration <> Edge review
Meeting records Transcript 

Summary
Technical review session established authentication protocols and finalized the limited merchant cohort rollout strategy.

Authentication and Session Strategy
Teams prioritized email verification over phone numbers to establish trust. Participants decided to restrict authentication flows exclusively to direct messages to prevent security vulnerabilities.

Infrastructure and Deployment Planning
Engineers prioritized go-live readiness over complete architectural integration. Staff plan to launch with 10 selected merchants to bypass complex edge cases.

Security and Testing Protocols
Leadership will facilitate security clearance by leveraging current technical limitations as justification. Testing requires manual JSON web token generation for initial merchant verification.

Rate this Summary: Helpful or Not Helpful

Decisions
We've updated the Decisions section using your feedback.
Let us know what you think: Helpful or Not Helpful

ALIGNED
* Go-live strategy for initial merchants The team will proceed with a minimal "lift and shift" deployment strategy for the initial 10 merchants to meet the launch timeline next week, accepting current security and authentication limitations.
* Authentication restricted to direct messages Authentication-based flows will be restricted exclusively to Direct Messages (DMs) to mitigate security and permission visibility concerns present in group chat environments.

Next steps
* [Vrajesh Jaidev Iyengar] Select Merchants: Identify 10 merchants without complex Single Sign On requirements for the beta launch.
* [Vrajesh Jaidev Iyengar] Request Security Approval: Coordinate with the security team to explain the project and obtain go live authorization.
* [Vrajesh Jaidev Iyengar] Create Merchant Mapping: Store and manage the phone number to merchant ID mapping for the 10 selected pilot merchants.

Details
Did the screenshots in this section make your notes better or worse?
* Authentication Flow: Ishaan Bahal and Vrajesh Jaidev Iyengar reviewed the technical flow where a merchant sends a message to the VRM service. The sequence involves a high-level message, a login request triggering an OTP, and a merchant selection process that could be implicit or explicit. Vrajesh Jaidev Iyengar questioned if the phone number alone could serve as sufficient authentication, but Ishaan Bahal noted the difficulty in establishing trust, necessitating additional email verification (00:01:30).
  

* Session Management and Domain Verification: The team discussed the need for domain validation for the verification request and token issuance, noting that they might need to patch this to make it functional. Rishav Loomba clarified that there is currently no device identifier for sessions, making it difficult to limit

---

## Full Notes

﻿📝 Notes
May 13, 2026
VRM <> RSPL Cluster migration <> Edge review
Invited Vrajesh Jaidev Iyengar Kadambary Diwan Ishaan Bahal
Attachments VRM <> RSPL Cluster migration <> Edge review
Meeting records Transcript 




Summary
Technical review session established authentication protocols and finalized the limited merchant cohort rollout strategy.

Authentication and Session Strategy
Teams prioritized email verification over phone numbers to establish trust. Participants decided to restrict authentication flows exclusively to direct messages to prevent security vulnerabilities.

Infrastructure and Deployment Planning
Engineers prioritized go-live readiness over complete architectural integration. Staff plan to launch with 10 selected merchants to bypass complex edge cases.

Security and Testing Protocols
Leadership will facilitate security clearance by leveraging current technical limitations as justification. Testing requires manual JSON web token generation for initial merchant verification.


Rate this Summary: Helpful or Not Helpful




Decisions
We've updated the Decisions section using your feedback.
Let us know what you think: Helpful or Not Helpful


ALIGNED
* Go-live strategy for initial merchants The team will proceed with a minimal "lift and shift" deployment strategy for the initial 10 merchants to meet the launch timeline next week, accepting current security and authentication limitations.
* Authentication restricted to direct messages Authentication-based flows will be restricted exclusively to Direct Messages (DMs) to mitigate security and permission visibility concerns present in group chat environments.




Next steps
* [Vrajesh Jaidev Iyengar] Select Merchants: Identify 10 merchants without complex Single Sign On requirements for the beta launch.
* [Vrajesh Jaidev Iyengar] Request Security Approval: Coordinate with the security team to explain the project and obtain go live authorization.
* [Vrajesh Jaidev Iyengar] Create Merchant Mapping: Store and manage the phone number to merchant ID mapping for the 10 selected pilot merchants.




Details
Did the screenshots in this section make your notes better or worse?
* Authentication Flow: Ishaan Bahal and Vrajesh Jaidev Iyengar reviewed the technical flow where a merchant sends a message to the VRM service. The sequence involves a high-level message, a login request triggering an OTP, and a merchant selection process that could be implicit or explicit. Vrajesh Jaidev Iyengar questioned if the phone number alone could serve as sufficient authentication, but Ishaan Bahal noted the difficulty in establishing trust, necessitating additional email verification (00:01:30).
  

* Session Management and Domain Verification: The team discussed the need for domain validation for the verification request and token issuance, noting that they might need to patch this to make it functional. Rishav Loomba clarified that there is currently no device identifier for sessions, making it difficult to limit logins at the device level, though they plan to implement session-level restrictions in the future (00:05:43). They concluded that if a VRM session is active, it should not critically impact the dashboard login, though they discussed the possibility of an endpoint that could invalidate sessions as needed (00:07:38).
* Initial Go-Live Strategy: To facilitate a launch for the upcoming week, Vrajesh Jaidev Iyengar proposed selecting a cohort of 10 merchants who do not have complex edge cases, such as Single Sign-On enabled, to simplify the process (00:07:38). Ishaan Bahal confirmed that VRM will serve as the authority calling the Identity Provider as a customer proxy, which is a feasible approach for this limited scope (00:09:26).
  

* Technical Infrastructure and DevOps: Vrajesh Jaidev Iyengar and Ishaan Bahal discussed the necessary DevOps and networking changes required for the VRM to communicate with the Edge service (00:09:26). Rishav Loomba expressed concerns regarding cross-cluster migration and the impact of performing these integrations within the existing application structure rather than building them separately (00:12:01). The group explored the trade-off between doing the integration properly versus a faster implementation, with Ishaan Bahal suggesting they can prioritize the go-live readiness and perform additional integration work in parallel (00:15:59).
* Security Clearance Justification: Regarding security compliance, the team debated how to secure approval for the initial 10-merchant launch. Ishaan Bahal suggested that because the current system was not originally designed to support WhatsApp authentication, they could use this as a justification to security teams to proceed with the current architecture while they continue to build robust checks later (00:20:30). They reached a consensus that senior leadership could help facilitate this approach to avoid blocking business needs (00:22:45).
* Direct Messaging vs. Group Channels: Ishaan Bahal and Vrajesh Jaidev Iyengar agreed that authentication should primarily be restricted to direct messages rather than group chats (00:28:17). This decision is driven by security concerns, as group chats could expose sensitive information to unintended users who have different permissions (00:32:36). Vrajesh Jaidev Iyengar clarified that while the original goal was to have group interactions for AI-driven support, the authentication flow must prioritize direct communication to ensure the user's identity is verified and protected (00:28:17) (00:34:14).
* Final Implementation and Testing: The team finalized plans for testing the send message endpoint (00:34:14). Vrajesh Jaidev Iyengar confirmed that merchant-level authentication is required for the dashboard, and they must white-label the VRM as a safe origin to successfully handle these requests. To test the flow before the official launch, Vrajesh Jaidev Iyengar will manually generate JSON Web Tokens for the 10 selected merchants to verify the functionality (00:35:42).




You should review Gemini's notes to make sure they're accurate. Get tips and learn how Gemini takes notes
How is the quality of these specific notes? Take a short survey to let us know your feedback, including how helpful the notes were for your needs.
📖 Transcript
May 13, 2026
VRM <> RSPL Cluster migration <> Edge review - Transcript
00:00:00


Ishaan Bahal: let's disconnect this for a second. Uh let's say you sorry so your request flows to edge and then goes to VRM uh you said uh login. So you sent back a message via M carbon by the way M carbon entity. So you you sent the message back to your and then it reed back to right. So this is the first high message.
Vrajesh Jaidev Iyengar: First thing will be the the the merchant sends a message to VRM. PRM checks at
Ishaan Bahal: So, uh you got your first high here, right? This is your high message which you talk to on
Vrajesh Jaidev Iyengar: Yeah.
Ishaan Bahal: your high. uh then you return with e uh login request. So this is your second source that's got triggered to the mobile. You basically said login request to we have already sent you an OTP OTP respond back right something like that is what you'll say.
Vrajesh Jaidev Iyengar: Got
Ishaan Bahal: So first step would be key uh internally you trigger some form of




00:01:30


Vrajesh Jaidev Iyengar: it.
Ishaan Bahal: O for the user right to get the OTP you need
Vrajesh Jaidev Iyengar: Got it.
Ishaan Bahal: credentials.
Vrajesh Jaidev Iyengar: What kind
Ishaan Bahal: Uh so what kind of credentials uh could be key username
Vrajesh Jaidev Iyengar: of
Ishaan Bahal: password or it can be google or it can
Vrajesh Jaidev Iyengar: phone
Ishaan Bahal: be phone right maybe username
Vrajesh Jaidev Iyengar: number?
Rishav Loomba: currently.
Ishaan Bahal: password
Rishav Loomba: Hey Sean,
Ishaan Bahal: Tell me
Rishav Loomba: externally.
Vrajesh Jaidev Iyengar: RSP approach.
Rishav Loomba: You got to go
Ishaan Bahal: even if we do have phone right now everything requires phone. We again do email verification. We'll have to go through security. The next step that you'll have to take after this will be merchant selection. parts. It can be implicit if there is only one merchant or it can be implicit in case
Vrajesh Jaidev Iyengar: Oh,
Ishaan Bahal: of preferred merchant or it can be explicit. You select your merchant,
Rishav Loomba: H.
Ishaan Bahal: right?
Vrajesh Jaidev Iyengar: yeah.
Ishaan Bahal: This is second step.




00:03:30


Ishaan Bahal: after that happens. Uh so this is the first and
Rishav Loomba: H.
Ishaan Bahal: then this guy responded with OTP.
Vrajesh Jaidev Iyengar: Is there a way to say then just phone should be enough?
Ishaan Bahal: But how do you trust something.
Vrajesh Jaidev Iyengar: Look,
Ishaan Bahal: That's the problem. So,
Rishav Loomba: Okay.
Ishaan Bahal: phone
Rishav Loomba: Uh
Vrajesh Jaidev Iyengar: just
Ishaan Bahal: number
Rishav Loomba: facing us as it is replicated for VRM
Ishaan Bahal: you ask for the phone number then you take the OTP and then you again ask for the email, right?
Vrajesh Jaidev Iyengar: second part I'm not sure about.
Rishav Loomba: usated
Vrajesh Jaidev Iyengar: You can get
Rishav Loomba: I'm got the email
Vrajesh Jaidev Iyengar: it.
Ishaan Bahal: Depend
Rishav Loomba: notification.
Ishaan Bahal: background 85. This work
Rishav Loomba: applic
Ishaan Bahal: will call set. Yes. So basically that will get called
Rishav Loomba: H dash
Ishaan Bahal: on dashboard right
Vrajesh Jaidev Iyengar: What?
Rishav Loomba: dash.
Ishaan Bahal: sorry dashboard.com
Rishav Loomba: H.
Vrajesh Jaidev Iyengar: What is it?
Ishaan Bahal: right so




00:05:43


Rishav Loomba: Yes.
Ishaan Bahal: verification request doain. Second is token token issued at has to validate on the same domain which we can sort of hack patch here.
Rishav Loomba: Yes.
Ishaan Bahal: If that can be done we are good to go with token based as long as token based
Rishav Loomba: VRM token VM actually.reserved share.
Ishaan Bahal: Well,
Rishav Loomba: Sorry.
Ishaan Bahal: users session
Rishav Loomba: Okay. Oh,
Ishaan Bahal: user.
Rishav Loomba: active sessions WhatsApp session for the
Vrajesh Jaidev Iyengar: Hello.
Rishav Loomba: user. and hold on
Vrajesh Jaidev Iyengar: Let's see the cut again.
Rishav Loomba: to.
Ishaan Bahal: All we'll be able to say is session We not
Vrajesh Jaidev Iyengar: What's
Ishaan Bahal: know basically there's no identifier of the device
Vrajesh Jaidev Iyengar: wrong?
Rishav Loomba: But your
Ishaan Bahal: itself.
Rishav Loomba: feature
Ishaan Bahal: We are also planning to do that SSH so that we can limit the number of login which is fine.
Rishav Loomba: Huh? Service level.
Ishaan Bahal: that is service level at any point of time active.
Rishav Loomba: Huh?
Ishaan Bahal: Um technically it's not a user authentication processed but




00:07:38


Rishav Loomba: Yep.
Vrajesh Jaidev Iyengar: You have to answer if VRM may the session is active then the merchant can't log into the dashboard or if he logs into
Ishaan Bahal: time
Vrajesh Jaidev Iyengar: the dashboard then this session gets invalidated
Ishaan Bahal: over time I don't think it'll impact any good
Vrajesh Jaidev Iyengar: session
Ishaan Bahal: person
Rishav Loomba: time.
Ishaan Bahal: automatically I think this will work In that case
Rishav Loomba: Yes.
Ishaan Bahal: uh
Rishav Loomba: Anyways,
Ishaan Bahal: one one problem is force.
Rishav Loomba: unless of merchant mobile
Vrajesh Jaidev Iyengar: Then we should be able to hit an end point that logs them
Rishav Loomba: number mobile number But all the artists for that particular mobile
Vrajesh Jaidev Iyengar: Take
Rishav Loomba: number
Ishaan Bahal: But if you can uh so basically all I want
Vrajesh Jaidev Iyengar: cases.
Ishaan Bahal: was IDP may behave weirdly IDP
Vrajesh Jaidev Iyengar: Hey guys. So what should we
Ishaan Bahal: dashboard.
Vrajesh Jaidev Iyengar: initial 10 merchants which I'll launch for I'll pick merchants who don't have these things like these edge cases SSO enabled filter will be able to get a list of 10




00:09:26


Ishaan Bahal: It's easy.
Vrajesh Jaidev Iyengar: merchants
Ishaan Bahal: Uh
Vrajesh Jaidev Iyengar: dropped
Ishaan Bahal: oh. So session you'll maintain at VRM. uh VLM will be the actual authority that is calling IDP as a customer's proxy and phone
Vrajesh Jaidev Iyengar: OTP SMS through message.
Ishaan Bahal: should be this will work. We'll probably need to figure out
Vrajesh Jaidev Iyengar: uh so to get VRM to talk to edge what are the basic changes that we'll need from a security compliance DevOps standpoint networking
Ishaan Bahal: VRM depends
Vrajesh Jaidev Iyengar: What approach should we
Ishaan Bahal: cluster
Vrajesh Jaidev Iyengar: take?
Ishaan Bahal: or CD proud HK throughout
Vrajesh Jaidev Iyengar: Roger
Ishaan Bahal: traffic.
Vrajesh Jaidev Iyengar: honey. So statement we are trying to shave off like what is the bare minimum we can do to take this live next
Ishaan Bahal: Take a second.
Vrajesh Jaidev Iyengar: week.
Ishaan Bahal: Effort effort estimation.
Rishav Loomba: discuss regarding the capture WhatsApp
Vrajesh Jaidev Iyengar: Yeah.
Ishaan Bahal: Capture fire edge cool.
Rishav Loomba: WhatsApp VRM.raaser.com
Ishaan Bahal: bypass
Rishav Loomba: VM service.res.com
Vrajesh Jaidev Iyengar: Check the foot.




00:12:01


Ishaan Bahal: dashboard flows UI. I don't
Rishav Loomba: dashboard.apt.
Ishaan Bahal: think you're right. If we don't add it to the VRM terform,
Rishav Loomba: Oh
Vrajesh Jaidev Iyengar: What is my sign?
Rishav Loomba: Okay.
Vrajesh Jaidev Iyengar: Okay.
Ishaan Bahal: sorry.
Rishav Loomba: See,
Ishaan Bahal: session.
Vrajesh Jaidev Iyengar: Hello. Hello.
Ishaan Bahal: Sorry, capture is good. So, capture WhatsApp
Rishav Loomba: WhatsApp.
Vrajesh Jaidev Iyengar: Hey.
Ishaan Bahal: manifesting
Rishav Loomba: Generic efforts
Ishaan Bahal: camera.
Rishav Loomba: Public. Public white.
Ishaan Bahal: service build set up I don't think service build set might take time but simple simple You can paralyze these
Rishav Loomba: problem is the beer reviews, merges with application or testing to combine
Ishaan Bahal: tasks.
Rishav Loomba: side production.
Vrajesh Jaidev Iyengar: Take a look.
Ishaan Bahal: route on board.
Rishav Loomba: Doing dashboard. send verify recent
Vrajesh Jaidev Iyengar: Okay.
Rishav Loomba: messages.
Ishaan Bahal: IDP.res.com IDP.com
Rishav Loomba: US
Ishaan Bahal: Hungicular
Rishav Loomba: term.
Vrajesh Jaidev Iyengar: Who's this?
Ishaan Bahal: problem.
Rishav Loomba: Huh?
Ishaan Bahal: Record
Rishav Loomba: I am




00:15:59


Ishaan Bahal: stash GM
Rishav Loomba: ASR service level.
Ishaan Bahal: changes major effort.
Vrajesh Jaidev Iyengar: Oh my goodness.
Rishav Loomba: or build
Ishaan Bahal: That's directly
Vrajesh Jaidev Iyengar: What the hell?
Rishav Loomba: cloud funer.
Ishaan Bahal: hosted.
Rishav Loomba: like directly service like the API assets doain exposed straightforward assets or cloud and the service
Ishaan Bahal: Okay. Aside from the time frame, I don't think all of this is required to make
Rishav Loomba: Moment.
Ishaan Bahal: it broad ready.
Vrajesh Jaidev Iyengar: This
Ishaan Bahal: The time frames maybe can be parallelized. Shad,
Vrajesh Jaidev Iyengar: is
Ishaan Bahal: but
Rishav Loomba: Wait, wait, wait.
Ishaan Bahal: I don't think
Vrajesh Jaidev Iyengar: Yeah. Is there a different approach we can follow? Just say uh timelines.
Ishaan Bahal: the cheaper answer would be and then you do the
Vrajesh Jaidev Iyengar: Yeah.
Ishaan Bahal: flow account but you still have to But the rest you'll have to do in RSPL and then you do this later then you can split it in parts.
Vrajesh Jaidev Iyengar: this is ploning into RSPL will that ensure key functionality still works.




00:18:32


Vrajesh Jaidev Iyengar: like because for all these group to merchant ID this will be devops uh
Ishaan Bahal: regardless.
Vrajesh Jaidev Iyengar: but instead of doing it properly the razor pay way we'll be just ploning it here and then figuring out
Ishaan Bahal: But the problem is go ahead.
Vrajesh Jaidev Iyengar: is go ahead
Ishaan Bahal: Go
Vrajesh Jaidev Iyengar: Okay.
Rishav Loomba: It's cross data
Ishaan Bahal: ahead.
Rishav Loomba: migration cross cluster maybe I think India
Ishaan Bahal: cluster in India. Is he a CD
Rishav Loomba: the AI counter God
Ishaan Bahal: or
Rishav Loomba: bless.
Vrajesh Jaidev Iyengar: Okay.
Ishaan Bahal: we can bring in the entire
Rishav Loomba: But uh do we need paragrant for this
Vrajesh Jaidev Iyengar: See,
Rishav Loomba: or directly?
Vrajesh Jaidev Iyengar: good. Yet.
Rishav Loomba: Come here.
Ishaan Bahal: most likely security will clock this at least agrees to it and then we do this the remaining part I think we can effort
Vrajesh Jaidev Iyengar: Yes. Huh?
Ishaan Bahal: And then the secondary thing is to bring it under oneh I don't know the
Vrajesh Jaidev Iyengar: security team.




00:20:30


Ishaan Bahal: entire team
Vrajesh Jaidev Iyengar: We can
Ishaan Bahal: problem is the
Vrajesh Jaidev Iyengar: explain
Ishaan Bahal: director
Vrajesh Jaidev Iyengar: and he very
Ishaan Bahal: seemingly to us also.
Vrajesh Jaidev Iyengar: Right. We need the final go live like that's not feasible for business and product. next week
Ishaan Bahal: Skip temporary goal
Vrajesh Jaidev Iyengar: already without merchant level authent but skip how will we talk to the
Ishaan Bahal: security.
Vrajesh Jaidev Iyengar: send message endpoint we'll have to create that JWT ourselves and send it to but to fetch data from message endpoint what will I
Ishaan Bahal: Nothing Think of it this
Vrajesh Jaidev Iyengar: ADRD
Ishaan Bahal: way.
Vrajesh Jaidev Iyengar: external.
Ishaan Bahal: It was always about finding
Vrajesh Jaidev Iyengar: Uh
Ishaan Bahal: WhatsApp. That is a concern security
Vrajesh Jaidev Iyengar: correct. So,
Ishaan Bahal: limitation.
Vrajesh Jaidev Iyengar: so we'll be basically getting a go ahead from security to say key this is fine for 10 merchants or whatever.
Ishaan Bahal: user is not designed to be working with WhatsApp. You can place that as reason nothing has been designed in system to deal with WhatsApp authentication.




00:22:45


Ishaan Bahal: So that can be one argument.
Vrajesh Jaidev Iyengar: H.
Ishaan Bahal: If you want to do the entire thing, maybe
Vrajesh Jaidev Iyengar: But in your experience,
Ishaan Bahal: honestly without proper checks in place and then we added them later because as long as we can
Vrajesh Jaidev Iyengar: Oh,
Ishaan Bahal: showcase Everything is
Vrajesh Jaidev Iyengar: I just get this lift and shift.
Ishaan Bahal: any any senior directors they can push
Vrajesh Jaidev Iyengar: If I just
Ishaan Bahal: this
Vrajesh Jaidev Iyengar: push then you're saying key the changes are minimal and we can potentially go
Ishaan Bahal: slightly minimal.
Vrajesh Jaidev Iyengar: live.
Ishaan Bahal: singhere else forward.
Vrajesh Jaidev Iyengar: Okay.
Ishaan Bahal: Go.
Vrajesh Jaidev Iyengar: So, step one
Ishaan Bahal: Seniors
Vrajesh Jaidev Iyengar: the senior director in which function devops
Ishaan Bahal: in
Vrajesh Jaidev Iyengar: security.
Ishaan Bahal: your sush right if I
Vrajesh Jaidev Iyengar: Yeah, I'll
Ishaan Bahal: think that's
Vrajesh Jaidev Iyengar: check.
Ishaan Bahal: about I do agree. You can't verify if the user is genuine or someone is hijacking a session. But I think we can go ahead.




00:25:26


Ishaan Bahal: You can keep building that.
Vrajesh Jaidev Iyengar: question.
Ishaan Bahal: VM VRM DNS.
Vrajesh Jaidev Iyengar: I think good. Yes.
Ishaan Bahal: RSP
Vrajesh Jaidev Iyengar: Yes.
Ishaan Bahal: flow API and
Vrajesh Jaidev Iyengar: like with basic merchant locked in consider system.
Ishaan Bahal: merchant merchant is a different users. explicit.
Vrajesh Jaidev Iyengar: Okay,
Ishaan Bahal: If you want to increase the adoption, we will have to build the user authent.
Vrajesh Jaidev Iyengar: makes sense.
Ishaan Bahal: So as long as I think there are cases I telling you
Vrajesh Jaidev Iyengar: Merchants with multiple accounts.
Ishaan Bahal: or
Vrajesh Jaidev Iyengar: for the select motion.
Ishaan Bahal: WhatsAppidget
Vrajesh Jaidev Iyengar: That happens only in DMs.
Ishaan Bahal: groups eventually group
Vrajesh Jaidev Iyengar: The idea is that message merchant will send on that group can be
Ishaan Bahal: authentony
Vrajesh Jaidev Iyengar: better user.
Ishaan Bahal: login post user phone number can't be
Vrajesh Jaidev Iyengar: Correct.
Ishaan Bahal: shared on a group chat
Vrajesh Jaidev Iyengar: Okay. Got it.
Ishaan Bahal: anyway.
Vrajesh Jaidev Iyengar: DM. So DM flow will be needed for authentication at a




00:28:17


Ishaan Bahal: All of this should only work with DMs.
Vrajesh Jaidev Iyengar: user.
Ishaan Bahal: In reality, if you do authentication, has to only work in DMs. groups. Sign in using
Vrajesh Jaidev Iyengar: I'm sorry.
Ishaan Bahal: authentic
Vrajesh Jaidev Iyengar: I don't out to merchants who have only one one user to
Ishaan Bahal: Either that or
Vrajesh Jaidev Iyengar: them
Ishaan Bahal: DMsual manager
Vrajesh Jaidev Iyengar: and having a human in the loop system. Human in the loop system.
Ishaan Bahal: that can take over the conversation WhatsApp much like how Zumato does it conversation chat You can do message interaction. A human has taken
Vrajesh Jaidev Iyengar: So the idea is not well eventual idea was the reason we wanted a group is uh
Ishaan Bahal: over.
Vrajesh Jaidev Iyengar: agent AI and there can be multiple humans both from the merchant side and the uh the company side or situation there is like a group conversation where low-level queries are being handled by this AI and deeper queries humans are getting
Ishaan Bahal: Authentic group
Vrajesh Jaidev Iyengar: involved in DM will there be a way to map it to the same WhatsApp




00:29:54


Ishaan Bahal: inherently
Vrajesh Jaidev Iyengar: user who will need to manage that we are
Ishaan Bahal: access token request token
Vrajesh Jaidev Iyengar: I
Ishaan Bahal: which itself is a broken.
Vrajesh Jaidev Iyengar: will
Ishaan Bahal: Uh, but the thing is
Vrajesh Jaidev Iyengar: start message through part can be fix figured out.
Ishaan Bahal: first group. I'm very certain
Vrajesh Jaidev Iyengar: Security dark.
Ishaan Bahal: for legal compiment. So the moment WhatsApp
Vrajesh Jaidev Iyengar: merchant marketing team will be in touch and talk to them and tell them you are beta testers who are helping us test out this new feature we launching social media escalation they will they will know that this is a test feature that they are going to interact with and see If the retail is aligned with what they were expecting, that kind of
Ishaan Bahal: temporarily do not disclose the group but when you do
Vrajesh Jaidev Iyengar: stuff.
Ishaan Bahal: group honestly not just but I don't think API is because a user can only see what is available to them.




00:32:36


Ishaan Bahal: But if it's a group uh and there are different oy permissions so think of it this way you are let's say admin I am let's say an accountant permission versus the permission you both will have massive difference but if you're talking on chat you might be able to see messages that are not meant for you
Vrajesh Jaidev Iyengar: scale. Anyway, this project is meant for the theme cohort or maybe we'll look for what
Ishaan Bahal: but you will have to do DM only essentially
Vrajesh Jaidev Iyengar: people
Ishaan Bahal: and they're triggering this
Vrajesh Jaidev Iyengar: group. They will then just be the high
Ishaan Bahal: Yeah.
Vrajesh Jaidev Iyengar: level. So the way people join this group is invite and then there's a need
Ishaan Bahal: I know invite but there's nothing stopping them from sending the invite ahead to other
Vrajesh Jaidev Iyengar: to the group accept permissions you
Ishaan Bahal: people.
Vrajesh Jaidev Iyengar: can make this groups where you need to accept the person who trying to join
Ishaan Bahal: problem.
Vrajesh Jaidev Iyengar: already
Ishaan Bahal: Group




00:34:14


Vrajesh Jaidev Iyengar: over the time being
Ishaan Bahal: It's not secure. It is essentially
Vrajesh Jaidev Iyengar: if this know if the group can allow only one user from the other side and upid say
Ishaan Bahal: credential.
Vrajesh Jaidev Iyengar: multiple members
Ishaan Bahal: That's fine.
Vrajesh Jaidev Iyengar: that's uh
Ishaan Bahal: As long number validate
Vrajesh Jaidev Iyengar: Huh the number two ATRT mapping will be stored in VRM that will be used but group say
Ishaan Bahal: over.
Vrajesh Jaidev Iyengar: group user sides so there will only be one user in the group RZP side we'll have one CAM maybe a PSC there'll be the bot there'll be a few folks from our side if we want to Here you
Ishaan Bahal: Yeah, more or less if he
Vrajesh Jaidev Iyengar: go.
Ishaan Bahal: can help out.
Vrajesh Jaidev Iyengar: on the send message endpoint a bit you're saying without o also how will we uh get a
Ishaan Bahal: Send message
Vrajesh Jaidev Iyengar: response send messages
Ishaan Bahal: contract.
Vrajesh Jaidev Iyengar: I'm talking about the agent dashboard while send message endpoint dashboard so if I need to call that from VRM then first I need to white label VRM as a you know safe origin for these requests.




00:35:42


Ishaan Bahal: But does it ever block? Question
Vrajesh Jaidev Iyengar: H
Ishaan Bahal: is
Vrajesh Jaidev Iyengar: security
Ishaan Bahal: last.
Vrajesh Jaidev Iyengar: User level authentication is
Ishaan Bahal: Merchant level
Vrajesh Jaidev Iyengar: needed.
Ishaan Bahal: authentic. Dashboards
Vrajesh Jaidev Iyengar: Yeah, if you just not edge or whatever like whatever is the appropriate service. VRM request. It'll come with a merchant ID. That merchant ID.
Ishaan Bahal: it will try to authenticate only then it can generate the
Vrajesh Jaidev Iyengar: Okay.
Ishaan Bahal: password because that's
Vrajesh Jaidev Iyengar: So right now if I just open a curl maru with this JWT in the payload and I
Ishaan Bahal: password.
Vrajesh Jaidev Iyengar: send it to Lumba's endpoint ideally he should he should be able to respond is the contents of that there will be nothing that blocks this
Ishaan Bahal: Daddy
Vrajesh Jaidev Iyengar: resp.
Ishaan Bahal: regardless. Yes. Edu customer.
Vrajesh Jaidev Iyengar: This guy is
Ishaan Bahal: First request message. Send
Vrajesh Jaidev Iyengar: uh
Ishaan Bahal: message.
Vrajesh Jaidev Iyengar: basically a phone number to motion mapping. maintain for my 10 merchants
Ishaan Bahal: And then you send the request via edge to
Vrajesh Jaidev Iyengar: deterren
Ishaan Bahal: dashboard.
Vrajesh Jaidev Iyengar: I'll just generate JTs for them which have like there's nothing that's changing message How do I test this?
Ishaan Bahal: If everything is required,
Vrajesh Jaidev Iyengar: Take care. Take care.
Ishaan Bahal: sure.
Vrajesh Jaidev Iyengar: See you.
Ishaan Bahal: Bye-bye.
Vrajesh Jaidev Iyengar: Thanks. Thank you so much. Bye.




Transcription ended after 00:39:48


This editable transcript was computer generated and might contain errors. People can also change the text after it was created.

---

## Linked Entities
- [[people/rishav-loomba]]
- [[people/vrajesh-iyengar]]
- [[projects/vrm]]
