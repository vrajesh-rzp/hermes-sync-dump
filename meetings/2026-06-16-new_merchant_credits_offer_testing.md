---
title: "New Merchant Credits Offer Testing"
type: meeting
date: 2026-06-16
tags: [meeting, gemini-recording]
gemini_doc_id: 1dkZknYCR-Szz02o-JGDWQuwXOzXZMXzFQRO2SCZv-PI
---

# New Merchant Credits Offer Testing


**Date:** 2026-06-16
**Source:** Gemini recording ([Google Doc](https://docs.google.com/document/d/1dkZknYCR-Szz02o-JGDWQuwXOzXZMXzFQRO2SCZv-PI/edit))

---

## Summary

﻿📝 Notes
Jun 16, 2026
New Merchant Credits Offer Testing
Invited Parul Vrajesh Jaidev Iyengar Nikhil Uday Khadilkar Nirvisha Mankad Raktim Talukdar R S Sriram Kanishk Mehta Ayon Gargary Shivam Kumar
Attachments New Merchant Credits Offer Testing
Meeting records Transcript 

Summary
The team aligned on testing strategies and dependencies for launching the credit assignment logic into production.

Credit Logic and Testing
The team defined exclusions for credit eligibility, including specific card types and international transactions. Developers will utilize 10 to 15 test merchant identifiers to validate logic through comprehensive unit tests covering edge cases.

Deployment and Risk Mitigation
The team decided to migrate changes using a splits experiment to whitelist internal test merchants in production. This approach enables validation without impacting live merchants before a full rollout.

Operational Readiness Requirements
Production deployment requires resolving cross-border zoning dependencies and verifying unit test coverage. The primary decision is to prioritize production testing for final validation due to staging environment limitations.

Decisions
Aligned
* Unit testing for logic validation The team decided to implement unit tests covering all identified edge cases, including prepaid, business, and international card types, to ensure logic validation before deployment.
* Production deployment via split experiment The team decided to deploy the code changes to production using a split experiment, which will restrict the rollout to internal test merchant IDs for initial validation.
* Production deployment conditions established Production deployment is contingent upon the completion of the cross-border zoning repo unblock, the provision of MIDI for stage testing, and the verification that unit tests cover all requirements with a realistic deployment timeline.

We've updated the Decisions section using your feedback.
Let us know what you think: Helpful or Not Helpful

Next steps
* [R S Sriram] Submit PR: Submit the code changes for review by tonight.
* [R S Sriram] Update Unit Tests: Include scenarios for recurring initial and subsequent charges in the test suite.
* [Parul] Share Test Data: Provide the list of card and non-card payment method combinations for testing.
* [Nirvisha Mankad] Communicate Status: Notify stakeholders on the thread that changes and tests are ready for production deployment.
* [Kadambary Diwan] Assign Credits: Allocate credits to internal test merchant identifiers to support manual validation.
* [Kadambary Diwan] Assign Credits: Push credit data into the credit table for the specified SP.
* [R S Sriram] Link Thread: Connect the main thread to the repo unblock cross border zoning discussion.
* [Kadambary Diwan] Provide MID: Provide the merchant ID for testing in the stage environment.
* [The group] Update Unit Tests: Verify that unit tests cover all relevant scenarios.
* [The group] Estimate Deployment: S

---

## Full Notes

﻿📝 Notes
Jun 16, 2026
New Merchant Credits Offer Testing
Invited Parul Vrajesh Jaidev Iyengar Nikhil Uday Khadilkar Nirvisha Mankad Raktim Talukdar R S Sriram Kanishk Mehta Ayon Gargary Shivam Kumar
Attachments New Merchant Credits Offer Testing
Meeting records Transcript 




Summary
The team aligned on testing strategies and dependencies for launching the credit assignment logic into production.

Credit Logic and Testing
The team defined exclusions for credit eligibility, including specific card types and international transactions. Developers will utilize 10 to 15 test merchant identifiers to validate logic through comprehensive unit tests covering edge cases.

Deployment and Risk Mitigation
The team decided to migrate changes using a splits experiment to whitelist internal test merchants in production. This approach enables validation without impacting live merchants before a full rollout.

Operational Readiness Requirements
Production deployment requires resolving cross-border zoning dependencies and verifying unit test coverage. The primary decision is to prioritize production testing for final validation due to staging environment limitations.




Decisions
Aligned
* Unit testing for logic validation The team decided to implement unit tests covering all identified edge cases, including prepaid, business, and international card types, to ensure logic validation before deployment.
* Production deployment via split experiment The team decided to deploy the code changes to production using a split experiment, which will restrict the rollout to internal test merchant IDs for initial validation.
* Production deployment conditions established Production deployment is contingent upon the completion of the cross-border zoning repo unblock, the provision of MIDI for stage testing, and the verification that unit tests cover all requirements with a realistic deployment timeline.


We've updated the Decisions section using your feedback.
Let us know what you think: Helpful or Not Helpful




Next steps
* [R S Sriram] Submit PR: Submit the code changes for review by tonight.
* [R S Sriram] Update Unit Tests: Include scenarios for recurring initial and subsequent charges in the test suite.
* [Parul] Share Test Data: Provide the list of card and non-card payment method combinations for testing.
* [Nirvisha Mankad] Communicate Status: Notify stakeholders on the thread that changes and tests are ready for production deployment.
* [Kadambary Diwan] Assign Credits: Allocate credits to internal test merchant identifiers to support manual validation.
* [Kadambary Diwan] Assign Credits: Push credit data into the credit table for the specified SP.
* [R S Sriram] Link Thread: Connect the main thread to the repo unblock cross border zoning discussion.
* [Kadambary Diwan] Provide MID: Provide the merchant ID for testing in the stage environment.
* [The group] Update Unit Tests: Verify that unit tests cover all relevant scenarios.
* [The group] Estimate Deployment: Share a realistic time for production deployment.




Details
Did the screenshots in this section make your notes better or worse?
* Testing Flow for Credit Assignment: Vrajesh Jaidev Iyengar provided an update from Nick Hill regarding the testing of credit assignment, which occurs once a merchant reaches their pre-activated state. The testing process involves verifying the end-to-end flow of credits being assigned to merchants to ensure that the assignments are correct. The team expects to perform this testing from their end once the credits are successfully assigned (00:05:02) (00:08:15).
* Payment Method Exclusions and Logic: R S Sriram clarified the logic for credit eligibility, stating that credits are not eligible if the payment method is a card, if the card is prepaid, if the card subtype is business, or if the card is from American Express. The team discussed excluding various methods, including cards, UPI, net banking, and wallets, from the credit flow. Nirvisha Mankad noted that EMI transactions utilize cards, which requires distinct service handling to account for potential overlaps (00:06:00).
* Validation and Testing Strategy: Parul intends to create 10 to 15 test MIDs to validate the logic, specifically ensuring that if one MID with a shared PAN receives an offer, the other does not. The team will run various combinations of methods to verify the logic. Vrajesh Jaidev Iyengar suggested that if the flow works for cards without issues, the team may not need to involve other service teams, though they will review non-card specific methods as necessary to ensure no breakages occur (00:09:33) (00:15:03).
* Unit Test Coverage: The team emphasized the importance of ensuring that unit tests cover all edge cases, including registered and unregistered business statuses. R S Sriram confirmed that the code changes are logic-specific. Nirvisha Mankad highlighted the need to verify that all exhaustive edge cases are included in the unit tests to provide the necessary confidence before moving to staging or production environments (00:11:08) (00:24:27).
* Production Deployment and Splits Experiment: The team decided to migrate changes to production while utilizing a splits experiment to whitelist Parul's internal test MIDs. This approach allows them to test in a production environment without affecting all live merchants immediately. The team plans to ramp up to a 100% rollout post-activation once they confirm the testing is successful (00:18:49) (00:46:01).
* International and PayPal Handling: The discussion included the treatment of PayPal gateways and international transactions. Parul confirmed that all international transactions are already handled. It was noted that the logic needs to explicitly exclude international and business subtypes where applicable to prevent incorrect credit application, with Parul planning to verify these details (00:21:12).
  

* Testing Support and MID Assignment: Parul encountered challenges with creating MIDs in the required "pre-activation" or "under review" state for testing purposes. Kadambary Diwan offered to assist by assigning credits to test MIDs once they are provided. Due to difficulties accessing specific merchant detail tables in the staging environment, the team agreed to rely heavily on production testing for final validation (00:25:59) (00:53:42).
* Recurring Payment Test Cases: Nirvisha Mankad highlighted the need to include test cases for recurring initial and recurring subsequent payments. R S Sriram agreed to include these in the unit tests to ensure comprehensive coverage of all payment scenarios (00:54:50).
* Project Timeline and Deployment: The team aligned on a goal to deploy the changes by Thursday night. R S Sriram noted that while the code is ready for review, there are dependencies on other PR merges that might impact this schedule. Parul confirmed that Thursday is the committed deadline for the launch. The team aims to expedite the process by managing these dependencies and noted that the risk of breaking changes remains low (00:56:20).
* Communication and Dependency Management: Nirvisha Mankad requested that the team communicate clearly on the outgoing thread regarding the status of unit tests and deployment readiness. They emphasized that if the blocking PR is not merged by Wednesday night, the deployment for this project will be delayed. The team reached a consensus that if testing confirms no issues, they will proceed with the planned rollout as soon as the dependencies are resolved (01:01:21).
* Credit Assignment and Data Access: Kadambary Diwan noted that merchant credits are currently not available in the merchant detail table, which necessitates assigning credits to random merchants. To resolve this, Kadambary Diwan will use a Curl command to directly assign credits to the credit table without requiring a shell job. Nirvisha Mankad requested that this process be applied specifically to the Merchant ID (MID) previously shared by R S Sriram (01:03:06).
* Testing Strategy and Trade-offs: Nirvisha Mankad emphasized that if R S Sriram feels that testing for the stage one split experiment is insufficient, they are entitled to push back as part of their professional judgment. Nirvisha Mankad advised that all concerns regarding tradeoffs should be documented on the main thread so the team can reach a consensus regarding the project timeline (01:04:20).
* Prerequisites for Production Deployment: Nirvisha Mankad outlined three specific conditions that must be fulfilled before the team can proceed with a production deployment: unblocking the cross-border zoning dependency, obtaining the stage testing Merchant ID (MID) from Kadambary Diwan, and ensuring that all Unit Test Suites (UTS) provide comprehensive coverage to establish a realistic deployment timeline. R S Sriram confirmed their agreement with these requirements (01:04:20).
* Timeline for Credit Assignment: Kadambary Diwan committed to assigning credits to the identified Merchant ID (MID) within 10 to 15 minutes. Nirvisha Mankad requested that Kadambary Diwan provide these updates on the relevant thread to ensure all stakeholders are informed of the progress (01:05:21).
* Risk Assessment and Team Alignment: The participants discussed the necessity of ensuring a zero blast radius and maintaining full confidence before moving forward with deployment. Nirvisha Mankad suggested that the team reconvene to assess their confidence levels, noting that they should not proceed if confidence is lacking. Vrajesh Jaidev Iyengar expressed a concern regarding potential negative outcomes, and Nirvisha Mankad concluded that it is a shared responsibility to ensure all necessary team members are up to speed on the details (01:05:21).




You should review Gemini's notes to make sure they're accurate. Get tips and learn how Gemini takes notes
How is the quality of these specific notes? Take a short survey to let us know your feedback, including how helpful the notes were for your needs.
📖 Transcript
Jun 16, 2026
New Merchant Credits Offer Testing - Transcript
00:05:02


Vrajesh Jaidev Iyengar: Hey Sham, how are you doing?
R S Sriram: We're done.
Vrajesh Jaidev Iyengar: So I just I'll keep this call quick only. I just got an update from Nick Hill. He is in one of these uh uh workshops.
R S Sriram: Okay.
Vrajesh Jaidev Iyengar: So our end say the testing would be like once a merchant is in their pre-activated state. We'll just take some mids from marketing and we'll test whether the flow is working end to end in terms of credits getting assigned to these merchants and whether these are the right merchants assign flow we
R S Sriram: So there you
Vrajesh Jaidev Iyengar: will get it we'll be able to test it from our end tomorrow after the credits get assigned
R S Sriram: go.
Vrajesh Jaidev Iyengar: uh the applicability is the main is the last block right I wanted to just understand like a breakdown of what all does it take like your team plus maybe Anisha's team I don't know how the work is split and just want to get like visibility and the timeline on when we can give it off to parl and marketing team to test enter




00:06:00


R S Sriram: the application of the feed the fe like uh so you own that part like you own that part
Vrajesh Jaidev Iyengar: no application
R S Sriram: uh
Vrajesh Jaidev Iyengar: it's not me but yeah you can take me as a proxy for now I'll give it to
R S Sriram: I think that's the only thing that I want you to do is simple like I'll just walk you over. Don't think
Vrajesh Jaidev Iyengar: No, I have engineering background. This is cool.
R S Sriram: so.
Vrajesh Jaidev Iyengar: The payment is in
R S Sriram: What we saying is it's not eligible if it's false.
Vrajesh Jaidev Iyengar: halls.
R S Sriram: It's not eligible if the method is if the card if card is present. If method is card then get the card. If card is prepaid then no. If card subtype is business then no.
Vrajesh Jaidev Iyengar: Okay.
R S Sriram: If card is MX then no
Vrajesh Jaidev Iyengar: Okay.
R S Sriram: finally true
Vrajesh Jaidev Iyengar: See uh seems straightforward only.
R S Sriram: notes.




00:07:07


Vrajesh Jaidev Iyengar: This is not if it's not card. Okay. Uh so transactions will false that might be a concern.
R S Sriram: Yes, everyone want to fall.
Vrajesh Jaidev Iyengar: I'll just actually hold I'll just call or to validate this part because I think you guys have handled I'll just check for and other methods maybe correct correct correct
R S Sriram: We are making the cards.
Vrajesh Jaidev Iyengar: flow. So if a merchant makes a UPI payment, does this function never get called?
R S Sriram: I am making only cards because we are from card
Vrajesh Jaidev Iyengar: Huh? I I know I know. But I'm saying like there'll be a separate
R S Sriram: methods.
Nirvisha Mankad: Um Rajes I'll jump in I'll just jump in.
Vrajesh Jaidev Iyengar: Yeah.
Nirvisha Mankad: So between cards UP I know the services are only different.
Vrajesh Jaidev Iyengar: Mhm.
Nirvisha Mankad: So this is payments card where there will be some overlap between EMI uses a lot of cards. It's possible completely different service
Vrajesh Jaidev Iyengar: Okay.




00:08:15


Vrajesh Jaidev Iyengar: And I think there were no exclusions but
Nirvisha Mankad: exclusions. Okay.
Vrajesh Jaidev Iyengar: current just getting that validated also
Nirvisha Mankad: H
Vrajesh Jaidev Iyengar: with
R S Sriram: What method? UPA cards, net banking.
Nirvisha Mankad: Net banking EMI will be in CPS only online.
Vrajesh Jaidev Iyengar: So cards, GPI, net banking, wallets.
R S Sriram: monitor but like uh code report same net banking NB
Nirvisha Mankad: Would
Vrajesh Jaidev Iyengar: Okay,
R S Sriram: plus
Vrajesh Jaidev Iyengar: because I don't have context on all these exhaustive list.
Nirvisha Mankad: Rajes would NL be able to join?
Vrajesh Jaidev Iyengar: Nichol has just given me brief context.
Nirvisha Mankad: Just click
Vrajesh Jaidev Iyengar: He won't be able to he's in a workshop but um he has said key from his
Nirvisha Mankad: it.
Vrajesh Jaidev Iyengar: endow that was up to assignment of credit we'll be able to test tomorrow. There was a test internally fail fix has been raised test once the are assigned the applicability is where we are
Nirvisha Mankad: Mhm.
Vrajesh Jaidev Iyengar: at over here like depending on the method different services will be called.




00:09:33


Vrajesh Jaidev Iyengar: What are all of these methods?
Nirvisha Mankad: Okay.
Vrajesh Jaidev Iyengar: just to get a check from the other
Nirvisha Mankad: So, got it. Got it. That makes sense. Just one quick check though in terms of expectation right once credits get uh
Vrajesh Jaidev Iyengar: teams.
Nirvisha Mankad: added you only want to exclude certain methods which is all of this code and card what we've been discussing right all the other m you methods you wanted to get applied right your credits to get
Vrajesh Jaidev Iyengar: Correct. Correct. That is my assumption.
Nirvisha Mankad: used right so that even like parl is already testing a bunch of things. She can just directly test out for your methods and you'll get the confirmation right
Vrajesh Jaidev Iyengar: Huh? Correct. So she will so the idea is that she'll create some 10 15 test account.
Nirvisha Mankad: so
Vrajesh Jaidev Iyengar: So we are doing some validations on so people multiple MIDIs having the
Nirvisha Mankad: h
Vrajesh Jaidev Iyengar: same PAN so then they if if one of those MIDIs has this offer applied then the other one should not get.




00:10:22


Vrajesh Jaidev Iyengar: So these kind of logic check checks are what we are doing. uh once it is applied the so parl will share these mids with us and then she'll use the same mids to just continue testing on different methods I
Nirvisha Mankad: H correct. So for other methods at least you you it'll hopefully be easy to get it confirmed.
Vrajesh Jaidev Iyengar: guess
Nirvisha Mankad: we might not be able to help out and anyway I mean even rather even even for you I think the easier approach will be to test it out and check on an MID because uh and have those tests because if you will reach out to each method team most likely most method teams will also not have context like off the top of their head to sort of confirm for you.
Vrajesh Jaidev Iyengar: Correct. Correct. I'm guessing the best would be Slack.
Nirvisha Mankad: So best to just test it out slash yeah slash also
Vrajesh Jaidev Iyengar: Uh, sorry, Slash to give the context. Uh,
Nirvisha Mankad: sometimes does I mean this is already live and in production it can just get tested on some that'll be




00:11:08


Vrajesh Jaidev Iyengar: yeah.
Nirvisha Mankad: fast
Vrajesh Jaidev Iyengar: But there was a filter.
Nirvisha Mankad: can we go one by one so for so now if all methods for we are now down to cards and
Vrajesh Jaidev Iyengar: Yeah. walked me through the the methods in cards.
Nirvisha Mankad: EMI
Vrajesh Jaidev Iyengar: He walked me through that. That seems okay. Like that seems decent. Uh regular.
Nirvisha Mankad: Yeah.
Vrajesh Jaidev Iyengar: There was no check that I saw. I'm assuming to you're not differentiating between registered and registered.
R S Sriram: What we're doing is key
Nirvisha Mankad: Why do you open it?
R S Sriram: on
Vrajesh Jaidev Iyengar: What
Nirvisha Mankad: unit cases test.
Vrajesh Jaidev Iyengar: are you
Nirvisha Mankad: Uh understood.
Vrajesh Jaidev Iyengar: doing?
Nirvisha Mankad: Correct. But unit all of these code changes are also very like unit spec. The scope of it is very logic specific. Right.
R S Sriram: So what I've done, right, I'll tell you what I've
Nirvisha Mankad: Yeah.
R S Sriram: done.




00:12:13


Nirvisha Mankad: Yeah.
Vrajesh Jaidev Iyengar: Okay.
Nirvisha Mankad: Correct. Yeah. Correct. All
R S Sriram: behind this. This is my calling place.
Nirvisha Mankad: right.
R S Sriram: So if it's if it's not eligible to what are you saying
Nirvisha Mankad: Okay.
Vrajesh Jaidev Iyengar: Yeah.
R S Sriram: about this is your
Vrajesh Jaidev Iyengar: unregistered.
Nirvisha Mankad: Uh unregistered false which means it is registered
R S Sriram: Uh
Vrajesh Jaidev Iyengar: Sorry. This
Nirvisha Mankad: then
R S Sriram: this is just saying unregistered business.
Vrajesh Jaidev Iyengar: is
R S Sriram: If it's unregistered and this feature is there then you can
Vrajesh Jaidev Iyengar: I
R S Sriram: okay.
Nirvisha Mankad: features features End result of this will be regardless of
Vrajesh Jaidev Iyengar: know
Nirvisha Mankad: registered unregistered same
R S Sriram: Yeah,
Nirvisha Mankad: apply.
R S Sriram: I think I think then we have to get rid of this. So today my code doesn't take care of this.
Vrajesh Jaidev Iyengar: return true. Okay, it won't it won't go down. Let's say the merchants are part of your splits.




00:13:36


R S Sriram: It is it is
Vrajesh Jaidev Iyengar: Then it'll check everything and if if if it is supposed to
R S Sriram: not
Vrajesh Jaidev Iyengar: return true or false whatever as specified in this function return
R S Sriram: I think we're unregistered.
Nirvisha Mankad: So my question was yeah my question
Vrajesh Jaidev Iyengar: we can test it anyways. Huh.
Nirvisha Mankad: is can you would be at the level of should disable amount credits right those
R S Sriram: Private function function
Nirvisha Mankad: That's even better. Great.
R S Sriram: function function capital. two is
Nirvisha Mankad: It doesn't matter as long as it is way above it basically because it only is going up in the
R S Sriram: further.
Nirvisha Mankad: hierarchy.
R S Sriram: Peace.
Nirvisha Mankad: ever this topmost function which you're trying to pull is so at least on the
Vrajesh Jaidev Iyengar: Thank you.
Nirvisha Mankad: logic which is all of these exhaustive edge cases what Rajes I think what you are also trying to get to right we should be able to test those out in the unit test itself right am I missing something okay




00:15:03


Vrajesh Jaidev Iyengar: Correct.
R S Sriram: level unit
Nirvisha Mankad: but have we written level But unit
R S Sriram: test.
Nirvisha Mankad: test prepaid business.
R S Sriram: Whatever have been generated hair. Yeah. But
Nirvisha Mankad: What I'm trying to get to is that
Vrajesh Jaidev Iyengar: What I'm thinking is if parl you can list out everything not just card specific even non-card specific method and combination merction we can pass that through a whatever slash or something and get written based on the business requirements directly and it'll also test function call if it's a UPI method or not like you said mostly but just
Parul: So for example,
Vrajesh Jaidev Iyengar: uh
Parul: reg uh UPI unred up ui red MX unred MX and D something like
Vrajesh Jaidev Iyengar: uh business prepaid sub all of those combinations that you can think of so they can so So, so Nervosa and Shir will be able to run these tests independently irrespective of the
Nirvisha Mankad: It it it won't be I'm sorry across method that just do quick I
Vrajesh Jaidev Iyengar: full no not across methods I'm saying




00:16:25


Nirvisha Mankad: just
Vrajesh Jaidev Iyengar: for cards before you joined cont which
Nirvisha Mankad: Yeah.
Vrajesh Jaidev Iyengar: is Nisha's team owns cards right specific requirements changes they'll make UPI there is something specific which I don't think but UPI that's a different service team that owns it existing conditions. Do they comply with our new requirements validate with the respective teams the way we have done with cards?
Parul: Okay.
Nirvisha Mankad: Okay.
Vrajesh Jaidev Iyengar: Yes. Yes.
Nirvisha Mankad: Yes.
Parul: Everything is here.
Vrajesh Jaidev Iyengar: But what I would what I would
Parul: I'll just check again. I'll
Vrajesh Jaidev Iyengar: suggest methods tomorrow or whenever we test
Parul: add
Vrajesh Jaidev Iyengar: everything we just go through the flow and if nothing is broken we don't even need to reach out to those teams and you know get them involved specific like there are some cases that are not working we can first take a call then we can raise it as a quick request if we know
Parul: Okay,
Vrajesh Jaidev Iyengar: the conditions Is
Parul: I'll share this
Nirvisha Mankad: Okay.
Parul: shortly.




00:17:46


Nirvisha Mankad: So, just starting H.
R S Sriram: Sorry.
Nirvisha Mankad: and boys.
R S Sriram: So parl the credits that you're adding here you you'll be adding it in production right
Parul: H.
R S Sriram: production test merchants you'll be adding those credits correct
Vrajesh Jaidev Iyengar: that
Parul: Yes.
Vrajesh Jaidev Iyengar: better?
R S Sriram: Okay.
Nirvisha Mankad: Excellent. Agreed. Let's go through that also. That also I wanted all this column only. Let's just start from the very top. One is par for cards. This is everything. I think this is everything. You have also gone through this by uh Shriram.
Parul: Let me guess.
Nirvisha Mankad: You and Rajes just did a walk through. I'm sorry I joined a few minutes late. All of these are covered there, right?
R S Sriram: Yes.
Nirvisha Mankad: In terms of implementation,
R S Sriram: Yeah.
Vrajesh Jaidev Iyengar: I think Apple GP I don't
Nirvisha Mankad: Apple pay,
R S Sriram: Uh
Vrajesh Jaidev Iyengar: know.
Nirvisha Mankad: Google, Apple. I think
Vrajesh Jaidev Iyengar: Is




00:18:49


Nirvisha Mankad: are we all confident?
Vrajesh Jaidev Iyengar: that
Nirvisha Mankad: Then we can quickly check duty exhaustedness and then we can do um can we then directly
Parul: Perfect.
Nirvisha Mankad: just uh migrate to production? credit us which merchants are on it. There are already a bunch of live merchants also who use their credits discounted pricing bundle. So there are live merchants who let me for
Parul: But we can assign and do the testing. Shall we have some test?
Nirvisha Mankad: internal merchants that's clear but the changes that will put will apply to everyone. So I'm just sort of gauging
Vrajesh Jaidev Iyengar: So,
Parul: Oh,
Vrajesh Jaidev Iyengar: so I think in terms of in terms of credits we have used it in pricing bundle which is one project and this is the second one that I'm aware of outside there might be run off cases escalation and just as a token of goodwill but no campaigns or programmatic assignment of credits is happening in my uh
Parul: that's me.
Nirvisha Mankad: Got it.
Vrajesh Jaidev Iyengar: understanding.
Nirvisha Mankad: Now across all the merchants using these credits all of these changes will apply.




00:19:52


Nirvisha Mankad: Right. So uh maybe what we can do
Vrajesh Jaidev Iyengar: Correct.
Nirvisha Mankad: is if you are okay we can production
Vrajesh Jaidev Iyengar: Awesome.
R S Sriram: should not be. I think normal green card I
Nirvisha Mankad: Okay. So we can use the next uh 40
R S Sriram: think.
Nirvisha Mankad: minutes. I think you already did it only Apple pay remaining then we can look at and then we can do one in stage and then uh Rajes par will migrate these changes to production and you parl you can do it on internal test merchants the only call out here is that once you migrated to production while parl will do testing on internal test merchants that changes will also uh sh you put a splits experiment so we can
Vrajesh Jaidev Iyengar: Reflect on the production.
Nirvisha Mankad: only whitelist parl's internal merchants
R S Sriram: Yes, you have to wait
Nirvisha Mankad: Great then but manage roll
Parul: I can give you.
Nirvisha Mankad: out just say
R S Sriram: like she will be adding some merchants,
Nirvisha Mankad: sorry




00:21:12


R S Sriram: some uh credits on Some more chance,
Nirvisha Mankad: huh okay so Raj just one quick call out on your side for
R S Sriram: right?
Nirvisha Mankad: GTM we have to add this one step key splits experiment whatever merchant Since you are giving three credits, let's add those to the splits experiment. Uh we'll give you the name so you can whoever is managing from your end on ops product, you can have
Vrajesh Jaidev Iyengar: So testing testing may we have a list of mids but post testing once we roll out we'll it'll be like
Nirvisha Mankad: it
Vrajesh Jaidev Iyengar: post activation. Uh yeah,
Nirvisha Mankad: automated.
Vrajesh Jaidev Iyengar: post activation assignment credits. So, we'll have to just ramp up to 100%. The splits
Nirvisha Mankad: Okay, then it will start applying to uh that should be possible
Vrajesh Jaidev Iyengar: experiment.
Nirvisha Mankad: right
R S Sriram: So what is PayPal gateway and PayPal
Parul: specifically All international use
R S Sriram: gateway?
Nirvisha Mankad: international anyway.
Parul: already.
R S Sriram: Yeah, I sure don't
Nirvisha Mankad: I'll add a motor all international




00:22:22


Vrajesh Jaidev Iyengar: Actually, if you can just walk through that code again once since parl is also here.
Nirvisha Mankad: already.
R S Sriram: know.
Vrajesh Jaidev Iyengar: She can validate a line by line or think of some edge cases.
Parul: What's up?
R S Sriram: So if it's uh over here something is wrong. return
Nirvisha Mankad: How are It's
R S Sriram: false
Parul: Huh? What is business? Subtype is business card, right?
R S Sriram: business We are identifying by sub
Parul: Okay.
Vrajesh Jaidev Iyengar: Oh, is this
R S Sriram: network.
Parul: You can
Nirvisha Mankad: Only open question is registered unregistered
Parul: huh?
R S Sriram: Check. This check is not
Vrajesh Jaidev Iyengar: That's
Nirvisha Mankad: disable I think
R S Sriram: international.
Nirvisha Mankad: it's if it to
R S Sriram: Huh?
Nirvisha Mankad: false true.
R S Sriram: Yeah. Lot of false.
Vrajesh Jaidev Iyengar: what
Nirvisha Mankad: So it is true returning true for exclusion
R S Sriram: True.
Nirvisha Mankad: enabled.
R S Sriram: Disable amount.
Nirvisha Mankad: Correct.
Vrajesh Jaidev Iyengar: Oh, exclusion enabled and uh that is causing the confusion.




00:24:27


Nirvisha Mankad: Yeah. Yeah. Yeah. Double negatives and triple negatives.
R S Sriram: You got
Parul: Hey,
Vrajesh Jaidev Iyengar: Uh
Nirvisha Mankad: Um my only this thing is whatever we have
R S Sriram: it.
Parul: pretty
Nirvisha Mankad: written anyways all of these dry runs that we're doing
R S Sriram: I have
Nirvisha Mankad: 10 we can have right at whatever highest level it is so that at least this logic we are all confident on
R S Sriram: you can do that. Disabled.
Nirvisha Mankad: Okay.
R S Sriram: What does now what it has done is it has just edited the current existing cont.
Nirvisha Mankad: Okay. But in terms of approach while this happens. So once all these UT is run then at least logic we are all confident on. Uh meanwhile can we do one manual in stage? Let's pick like a dummy AMX.
R S Sriram: Yeah.
Vrajesh Jaidev Iyengar: Thank you.
Nirvisha Mankad: Yeah business sub type we can do it. Can we do it like manually in stage end to end?




00:25:59


R S Sriram: Google.
Vrajesh Jaidev Iyengar: Meanwhile, Parl in terms of timelines from Nichl's
Nirvisha Mankad: What's your part of
Vrajesh Jaidev Iyengar: changes changes just the caveat there is that the mids that you will give us they will need to Pre-activation stage
Parul: Uh
Vrajesh Jaidev Iyengar: activation pipeline gets triggered which assigns the
Parul: I was talking to coding team um the CS team they were saying
Vrajesh Jaidev Iyengar: credits
Parul: usually because they are now trying to find in each case and make
Vrajesh Jaidev Iyengar: He will need the to be provided.
Parul: its already helping again.
Vrajesh Jaidev Iyengar: Let's say some you had already given testing
Parul: So whatever I could create, I created to help.
Vrajesh Jaidev Iyengar: 10
Parul: I created those mids and I gave it. But right now we need specific cases for let's say under
Vrajesh Jaidev Iyengar: as long if you don't have access to that account right can we do one thing can we get vation others like csops folks to uh mark some of our mids as under review or whatever cases we test.
Parul: documents such that we get under review.




00:27:34


Vrajesh Jaidev Iyengar: Uh, which manual
Parul: Okay,
Vrajesh Jaidev Iyengar: over?
Parul: I'll check. But I think they're saying create an account and follow these steps to get into the stage.
Vrajesh Jaidev Iyengar: Yes. Yes. Thanks. This
R S Sriram: Okay.
Vrajesh Jaidev Iyengar: Sounds big.
R S Sriram: Dangerous smoke. Thank you. Do we have some test account? I think Has
Nirvisha Mankad: Um, is there a question for Resam or BU?
R S Sriram: he given an account?
Vrajesh Jaidev Iyengar: Sorry. Stage test accounts.
R S Sriram: Angel. Yes. enable. Is your body anywhere? s***. Yes. I think these are the ones stage
Nirvisha Mankad: Um Rajes would you be able to help us get the key also
R S Sriram: ids.
Nirvisha Mankad: please? Uh I think maybe recently would you have the keys?
Parul: Sorry. Were you saying anything to
Nirvisha Mankad: Yeah, I think these mids were shared uh by KD on this thread.




00:34:25


Parul: me?
Nirvisha Mankad: These ones we can use to check credit utilization. Now to test it in stage, we need the key. Would you have the key by any chance or would you know who the owner for these three mids is? Where my
Vrajesh Jaidev Iyengar: I'll do one thing.
Parul: I
Vrajesh Jaidev Iyengar: I'll just call KDP.
Nirvisha Mankad: history?
R S Sriram: play. What is that?
Vrajesh Jaidev Iyengar: Kat Katie will be joining the call in like a minute or two.
Nirvisha Mankad: Sure. Thank you. Does he have the key though?
Vrajesh Jaidev Iyengar: Uh I am actually not sure about where you get this key from or how this key is used.
Nirvisha Mankad: I'm not sure which team he's from on
Vrajesh Jaidev Iyengar: The first time I'm seeing
Nirvisha Mankad: the merchant dashboard only. So whenever we create a new merchant um
Vrajesh Jaidev Iyengar: like the API
Nirvisha Mankad: so whoever is so whoever has created it will
Vrajesh Jaidev Iyengar: key.
R S Sriram: So,
Vrajesh Jaidev Iyengar: Will CS access to
Nirvisha Mankad: have




00:37:11


R S Sriram: uh I think it is
Vrajesh Jaidev Iyengar: this?
R S Sriram: right.
Kadambary Diwan: Hi
Vrajesh Jaidev Iyengar: Yeah,
Kadambary Diwan: folks.
Vrajesh Jaidev Iyengar: sure.
Kadambary Diwan: Yes. API key. I don't has any number. I don't get it also.
Nirvisha Mankad: Merchandise access.
Vrajesh Jaidev Iyengar: Okay.
Kadambary Diwan: Uh,
Nirvisha Mankad: No.
Kadambary Diwan: no.
Nirvisha Mankad: Would you know who will have it? Who set these up?
Vrajesh Jaidev Iyengar: Okay.
Kadambary Diwan: Like I don't know. I just I have just given them credits because they also got credits from pricing bundle. So I picked them
Nirvisha Mankad: Okay.
Kadambary Diwan: there.
Nirvisha Mankad: Okay. And these are all uh internal test possible for you to give credits to any
Kadambary Diwan: Yeah.
Nirvisha Mankad: mid. I'll give you my internal test. That works.
Kadambary Diwan: Okay, I can do one thing that you can give me any mid whose credits whose credits you have. So I'll assign credits to this.
Nirvisha Mankad: Perfect. That works. I think that's what the team uses.




00:38:38


R S Sriram: school. That is all the production stage. I only did the other, but credentials. I have the key. Nearest.
Nirvisha Mankad: Can I
Kadambary Diwan: Sure.
Nirvisha Mankad: please
Kadambary Diwan: This one SPN spa. Sure. Give me some time. I'll update here now.
R S Sriram: Better see logging in. Peace. Me too. Okay. Yes. I think one more thing we'll need to do.
Nirvisha Mankad: Um, CFB shouldn't be needed now.
R S Sriram: Get
Nirvisha Mankad: Um, Rajes par anyway for your uh offer roll out. Merchant could be on CFB or merchant the fee any model ID.
Vrajesh Jaidev Iyengar: Correct. CFB credits don't get applied was my understanding. I say what is the behavior if a person is on CFB and they have
Nirvisha Mankad: H
Vrajesh Jaidev Iyengar: credits?
R S Sriram: Like we don't know. You're going to
Nirvisha Mankad: I think let's put let's keep CFV out of this for a while.




00:46:01


R S Sriram: miss
Nirvisha Mankad: I think I can't imagine why would want to use the credits Yes, customer.
R S Sriram: Nice. So are you. Thank you. I only cut
Nirvisha Mankad: Um just a thought while we try this. Um challenge in testing in state since you
R S Sriram: here.
Nirvisha Mankad: have bounded all the changes to a split experiment in production. Once we confirm all the UTS are in place, can we then maybe put it in production and white list parl internal or any of our production internal
R S Sriram: Yeah.
Nirvisha Mankad: mids and then par hopefully you can the scenarios I think for cards are pretty clear you have the list you I think anyway be testing out all of those on production
Parul: Yes.
Nirvisha Mankad: right
Parul: So I think I have MIDIs. If KD can assign them some credits, I think we can start
Nirvisha Mankad: okay so this is just in case I mean I'm trying further to test it in stage.
Parul: testing.
Nirvisha Mankad: Uh there are I mean there have always been a bunch of issues in testing in stage.




00:49:27


Nirvisha Mankad: We can try give it maybe 10 more minutes. If it doesn't work at the one thing we'll confirm is that the UTS work. So the exact scenario that we discussed right and index prepaid business uh and international excluded that the UTS will confirm and then end to end we can test out
Parul: Come here.
Nirvisha Mankad: production on yeah let's just give it a shot while we are all Get in the
R S Sriram: It is a
Nirvisha Mankad: table.
R S Sriram: International
Nirvisha Mankad: Can we have merchant registered or unregistered as an input also?
R S Sriram: Dia.
Nirvisha Mankad: That's
R S Sriram: Thank you. Peace. Got any questions?
Kadambary Diwan: Um Nvisha. Okay.
Nirvisha Mankad: Yeah.
Kadambary Diwan: So I tried uh assigning credits to this merchant but uh like in merchant detail table there is no data found for this merchant. So the like credits got failed. Do you want me to add anyway?
Nirvisha Mankad: doesn't work
Kadambary Diwan: Yeah. Do you have any other
Nirvisha Mankad: for




00:53:42


Kadambary Diwan: ID?
R S Sriram: Sorry.
Nirvisha Mankad: she's not able to add credit because it's a much detail.
R S Sriram: Uh
Nirvisha Mankad: um my POV I am I think especially because we have scope require splits in production this is taking more effort than the change itself I think we
R S Sriram: Mhm.
Nirvisha Mankad: can
Vrajesh Jaidev Iyengar: Katie, you will be able to give credits on broad to a specific
Nirvisha Mankad: yeah
Kadambary Diwan: Yeah, sure. Sure. Yes.
Vrajesh Jaidev Iyengar: test.
Kadambary Diwan: But the MID should exist on uh like you know merchant
R S Sriram: Let
Kadambary Diwan: table.
Nirvisha Mankad: was confirmed.
R S Sriram: me
Vrajesh Jaidev Iyengar: Correct. Correct. I was just saying the same thing.
Nirvisha Mankad: Sorry.
Vrajesh Jaidev Iyengar: Go ahead and let us know. We'll assign credits and then you can test out the applicability. I think Parl can test it
Nirvisha Mankad: Uh huh. I think let's do that. That'll be easiest.
Parul: from the seat
Vrajesh Jaidev Iyengar: out.
Nirvisha Mankad: Uh cases, I think we are all aligned, right?




00:54:50


Nirvisha Mankad: I I just want to ensure that between all of us, we are all aligned that this is the expected behavior. I think just confidence and then if you can help test out in production and we should be good on this would you be able to
Vrajesh Jaidev Iyengar: Yeah, I'm
Nirvisha Mankad: help share just like confirm on the thread once UTS are good to go from your end basically UT should also cover exactly these
R S Sriram: Yeah.
Nirvisha Mankad: cases um Q we do and that should be okay because these are logic changes only and And uh when can we
Vrajesh Jaidev Iyengar: Let's
R S Sriram: Current duty current duties.
Nirvisha Mankad: deploy
R S Sriram: So it's covering this. I think the one thing that I have missed in the UTS it would be
Nirvisha Mankad: and one
Vrajesh Jaidev Iyengar: check.
R S Sriram: good.
Nirvisha Mankad: time
Kadambary Diwan: It's
Nirvisha Mankad: recurring initial recurring subsequent. Okay, great. So actually we should add for recurring initial release.
R S Sriram: Yes.
Nirvisha Mankad: Um so could you please confirm once you have added that by then when can we deploy it in production or production where you will deploy with zero in the splits and only when like car is available we can add our mid and then she can test it out.




00:56:20


R S Sriram: Yes.
Nirvisha Mankad: The same all
R S Sriram: So like at least for me for me at least I don't see this happening before
Vrajesh Jaidev Iyengar: I don't
Nirvisha Mankad: the deployment
Vrajesh Jaidev Iyengar: know.
R S Sriram: Thursday.
Nirvisha Mankad: also.
Vrajesh Jaidev Iyengar: You have questions.
R S Sriram: Okay. I think I send it for review by tonight after that right I can give it tomorrow and then Thursday morning Wednesday night Thursday night after that we can turn on the experiment. Thank you.
Nirvisha Mankad: What? to those timelines work.
Vrajesh Jaidev Iyengar: Sorry. Sorry. Please repeat.
Nirvisha Mankad: So timelines are today we'll complete these changes duties etc. There's an internal review process.
Vrajesh Jaidev Iyengar: Huh?
Nirvisha Mankad: So tomorrow it can get merged and latest it earliest it can get deployed is Thursday night that's what you said right and then will be able to
Vrajesh Jaidev Iyengar: Thursday
R S Sriram: Yes,
Vrajesh Jaidev Iyengar: night
Nirvisha Mankad: test.
Vrajesh Jaidev Iyengar: we won't be able




00:57:50


Nirvisha Mankad: Can we aim for deployment tomorrow night?
R S Sriram: sorry,
Nirvisha Mankad: Is that possible?
Vrajesh Jaidev Iyengar: They're
R S Sriram: but I'm seeing realistically Yeah,
Nirvisha Mankad: What is the
Vrajesh Jaidev Iyengar: asking
R S Sriram: see right now I think none of the PRs I mentioned in the morning none of the PR in are getting merged because
Nirvisha Mankad: challenge?
R S Sriram: of I think some uh PR which has gone in we figured it out I think we figured it out what is the team before that I at
Nirvisha Mankad: That's okay. So that is one thing for this specific change there is no challenge right I mean even in terms of credit if you can maybe share the might and can help quickly add
R S Sriram: least okay I'll share one more you can try to
Nirvisha Mankad: credits
R S Sriram: add you're saying that details are not available in dev stack sorry details table possible Because in that
Nirvisha Mankad: So my only this thing is worst case let's
Kadambary Diwan: Yes.
Nirvisha Mankad: say
R S Sriram: case
Nirvisha Mankad: then are you once you have confirmed on the UTS do you foresee any risk putting this specific code chain in production if it's already spoke by uh MID level experiment




00:59:19


R S Sriram: risk that's why I'm okay for Thursday. You're asking for Wednesday. That's the risk.
Nirvisha Mankad: can we do earlier huh
R S Sriram: I don't see any risk.
Nirvisha Mankad: because they can try at least and what are your overall timelines like the actual real timelines for go live for because we are like pushing but it will help us to know the realistic timelines.
Vrajesh Jaidev Iyengar: Actually Thursday is what we were targeting.
Nirvisha Mankad: Okay.
Vrajesh Jaidev Iyengar: Last week say this was supposed to be testing week and Thursday was supposed to be go live. Parl if you can share more details on campaigns that you were
Nirvisha Mankad: Okay.
Parul: So if the testing tomorrow goes like if the testing does not find any bug and there's no issue then we'll go live on
Vrajesh Jaidev Iyengar: running.
Parul: Thursday.
Nirvisha Mankad: Okay. Um the repo block aside, is there any way to help expedite this change? I understand already for this internal reviews and
Parul: Hey, just like um so we have I think Hershel is involved in this.




01:00:24


Nirvisha Mankad: merge.
R S Sriram: Yeah,
Parul: I think the timeline committed is Thursday.
Vrajesh Jaidev Iyengar: That's
Parul: Um it's possible we'll have to launch it by then but otherwise just let us know timelines because Hersel had asked the the committed timeline is Thursday.
Vrajesh Jaidev Iyengar: what
Nirvisha Mankad: No, no, I understand.
R S Sriram: heat.
Nirvisha Mankad: Um, how how best can be
R S Sriram: Yes, then maybe I'll stop working on this and I'll give it to some engineer.
Nirvisha Mankad: expedited?
R S Sriram: I think that is the best that I can do. Maybe I'll ask uh like I think was working I'll
Nirvisha Mankad: Hello.
R S Sriram: ask this will be completed that is the
Nirvisha Mankad: It's a one day impact. No, one day.
R S Sriram: best till now I was
Nirvisha Mankad: Yeah, I understand. If you can no data for
R S Sriram: impact I was getting involved if you want really want
Nirvisha Mankad: Huh? I think that that is will be best. Um whatever is needed to unblock this it's any matter of one day




01:01:21


R S Sriram: Yeah.
Nirvisha Mankad: changes are ready up we just need to verify repo unblock anyway separate folks I think I assume on call is working on can we aim for today we are already at 4:30 who's working a
R S Sriram: It is cross. Cross. What are they?
Nirvisha Mankad: okay so can you so one request uh can you please put this on this outgoing thread key changes are ready for UTS plus changes are ready for pro deployment. It's blocked on whatever that other thread is. Uh once it's unblocked, we will then aim for deployment for this one. And very naturally, this is tied to that one. And if that one doesn't get unblocked by let's say tomorrow night, then this will only go tomorrow night.
R S Sriram: Yeah,
Nirvisha Mankad: Then these folks will I just call out all the dependencies
R S Sriram: I just Okay, I'll just ask one thing.
Nirvisha Mankad: clearly. We need to together it's not even about we need to ensure it doesn't break.
R S Sriram: doesn't break.




01:02:21


Nirvisha Mankad: So if you have any concerns please raise right
R S Sriram: You're asking me only asking me it will break or not.
Nirvisha Mankad: now.
R S Sriram: I'll say according to me it will not break.
Nirvisha Mankad: Okay. No but what testing wise what is giving you less confidence?
R S Sriram: See
Nirvisha Mankad: Whatever we do usually for testing what are we not doing right now?
R S Sriram: whatever you we are supposed to do for testing that we are asking you asking to skip because you want to deliver one day
Nirvisha Mankad: What are we skipping?
R S Sriram: fast at least one normal test
Nirvisha Mankad: Okay. So then if it's then no so that's fair then let's put that as a thing and then
R S Sriram: here
Nirvisha Mankad: um Rajes I assume it be KD from your N team who can help at least
R S Sriram: is working or
Nirvisha Mankad: get credits added to some stage MID we need your support to do that
Vrajesh Jaidev Iyengar: Yeah. Yeah. KD can help with adding the Yeah.




01:03:06


Nirvisha Mankad: we let's not cut corners that's okay.
Vrajesh Jaidev Iyengar: KD can help in assigning the credits to both stage and I think stage Thank you.
Nirvisha Mankad: API you folks also must be testing. I assume you are from this growth team right?
Kadambary Diwan: Yeah.
Vrajesh Jaidev Iyengar: Yeah, Kitty is from
Kadambary Diwan: Yeah.
Vrajesh Jaidev Iyengar: the
Nirvisha Mankad: Yeah.
Kadambary Diwan: Yeah. Actually the thing that is happening is key what whatever merchant we have with the credits is also not available on merchant detail table. So I'm picking random date merchants and then give assigning them credits. But anyways I'll have one curl handy who I can assign the credits like without going by like without sh job or something.
Nirvisha Mankad: Okay.
Vrajesh Jaidev Iyengar: Yeah,
Kadambary Diwan: So credits will be shown to your credit table. I'm just get making and I'll just push into the credit table. That's for us.
Nirvisha Mankad: Great then if you can do that for this SP and SP mid only that Shri has shared. So Shan that's completely fair and you right to push back if you feel the testing is not enough.




01:04:20


Nirvisha Mankad: So if you feel stage one even in spite of having a split experiment it's a
R S Sriram: Thanks.
Nirvisha Mankad: judgment for your right I felt that because it's already cop it is okay to go but if you feel there are any concerns that's okay then let's also add that as a step in life then ultimately it comes down to timeline wise what are we doing let's put the trade-offs on the thread and then accordingly we can take off now Okay, going back repo unblock cross border zoning. Can you please help loop put the thread on this main thread because that's a dependency we can't control.
R S Sriram: Hey
Nirvisha Mankad: Second is state testing KD if you can help share that MIDI uh where we can test in state and third is
R S Sriram: guys.
Nirvisha Mankad: working on us we need to ensure our UTS cover everything and then share a realistic deployment time. If all of three of these are done then whenever all three are done we can deploy in production right?
R S Sriram: Yes.
Nirvisha Mankad: Okay. So, does that works?




01:05:21


Vrajesh Jaidev Iyengar: Thank you so
Kadambary Diwan: Um,
Nirvisha Mankad: Um,
Kadambary Diwan: Nisha, can you tell me by when you want me to assign the credits to
Nirvisha Mankad: right away. Right away.
Kadambary Diwan: this?
Nirvisha Mankad: If possible,
R S Sriram: right
Nirvisha Mankad: if you can give us an
Kadambary Diwan: Sure.
Nirvisha Mankad: MID
Kadambary Diwan: Sure. Just give me some time,
R S Sriram: away.
Kadambary Diwan: 10, 15 minutes. I'll just assign credit to No,
Nirvisha Mankad: mid
Kadambary Diwan: I'll assign credits to this SP only.
R S Sriram: I was going Okay.
Nirvisha Mankad: Okay.
Kadambary Diwan: Okay.
R S Sriram: Uh,
Nirvisha Mankad: the dependencies so that accordingly everyone
Kadambary Diwan: I'll I'll same thread only in new merent offer,
Nirvisha Mankad: okay
R S Sriram: okay.
Kadambary Diwan: right?
Vrajesh Jaidev Iyengar: I've just put an high level
Nirvisha Mankad: let's just surely sure let's stay in touch folks and let's
Kadambary Diwan: Okay.
Nirvisha Mankad: just try and get it across I think we can let's still reconvene and see if there is zero blast radius and full confidence we shouldn't do it if we don't have confidence but if your confidence and let's consider if we can take it to internal opportunity but let's try
Vrajesh Jaidev Iyengar: double triple negative. That is my only concern.
Nirvisha Mankad: that's completely fair I think that's on us whoever you want to look in from the team let's get them up to
Vrajesh Jaidev Iyengar: Yeah.
R S Sriram: Yeah.
Nirvisha Mankad: speed thanks a A funky leg.
R S Sriram: Okay.
Vrajesh Jaidev Iyengar: Okay.
R S Sriram: Thank you.
Vrajesh Jaidev Iyengar: The editing.




Transcription ended after 01:06:59


This editable transcript was computer generated and might contain errors. People can also change the text after it was created.

---

## Linked Entities
- [[people/nikhil-khadilkar]]
- [[people/raktim-talukdar]]
- [[people/vrajesh-iyengar]]
