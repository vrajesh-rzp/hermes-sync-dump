---
title: "Shubham x nikhil x vrajesh"
type: meeting
date: 2026-06-08
tags: [meeting, gemini-recording]
gemini_doc_id: 1--_ewfXHWrQf9uRxSheUYuQvDTbTQ2pRx7xh6dteFrc
---

# Shubham x nikhil x vrajesh


**Date:** 2026-06-08
**Source:** Gemini recording ([Google Doc](https://docs.google.com/document/d/1--_ewfXHWrQf9uRxSheUYuQvDTbTQ2pRx7xh6dteFrc/edit))

---

## Summary

﻿📝 Notes
Feb 19, 2026
Shubham x nikhil x vrajesh
Invited Vrajesh Jaidev Iyengar Shubham Choudhary Nikhil Uday Khadilkar Suhas More
Attachments Shubham x nikhil x vrajesh 
Meeting records Transcript 

Summary
Group Management Strategy Uncertainty
The team needs to finalize the group management strategy, including whether to use an admin panel or internal teams, pending details from the PC time vendor. They are also reviewing the feasibility of scaling beyond the current impossible human-managed WhatsApp group structure for merchants.

Production Readiness and Scaling Needs
Significant production concerns were raised regarding the required infrastructure acquisition, technical approvals, and compliance needed to scale the solution for 150,000 merchants. This scaling effort requires ensuring query connectivity is accessible from the stage cluster and deciding on the use of MCPs for direct merchant data access.

Prioritizing Code and Architecture Setup
Leadership support is needed to fast-track a go/no-go decision on infrastructure setup to accelerate the development of an end-to-end working prototype. The team must define the split between engineering work (infra) and business logic development while noting that migrating the stack from Node to Python is a manageable effort

Details
Decisions
Rate these decisions: Helpful or Not Helpful

NEEDS FURTHER DISCUSSION
* Group Versus Single Chat Evaluation Communication mode group versus single chat needs justification review. Vrajesh needs to follow up on why group approach was chosen over single number chat.
* Evaluate Engineering Versus Vrajesh Effort Split Project effort split needs evaluation. Vrajesh proposed handling business logic/code while engineering handles infra, shell bits.

ALIGNED
* Code Must Sit On Internal Infra Code placement must be on internal infrastructure. Internal hosting necessary for requisitioning required permissions and involving leaders.
* Allocate Engineering Management Resources Allocate 0.3 to 0.5 engineering management resources for Vrajesh infra, architecture setup. Resources needed to help set up infrastructure and architecture.

More details:
* Group Management and Data Storage: The discussion covered how group management would be handled, potentially based on phone numbers, and if it would use an admin panel or internal teams to manage groups and map them to data storage. The team is waiting for details from the PC time vendor they are finalizing with.
* Production Concerns and Infrastructure Needs: Concerns were raised about taking the solution to production, including code or deployment changes that might require requisition and take weeks, depending on the requirements (00:02:30). The plan involves acquiring infra pieces, getting technical approvals, and achieving compliance to scale for 150,000 merchants (00:05:40).
* WhatsApp Group vs. Single Number Strategy: The group discussed the current state of merchant management where WhatsApp groups already exist, bu

---

## Full Notes

﻿📝 Notes
Feb 19, 2026
Shubham x nikhil x vrajesh
Invited Vrajesh Jaidev Iyengar Shubham Choudhary Nikhil Uday Khadilkar Suhas More
Attachments Shubham x nikhil x vrajesh 
Meeting records Transcript 


Summary
Group Management Strategy Uncertainty
The team needs to finalize the group management strategy, including whether to use an admin panel or internal teams, pending details from the PC time vendor. They are also reviewing the feasibility of scaling beyond the current impossible human-managed WhatsApp group structure for merchants.

Production Readiness and Scaling Needs
Significant production concerns were raised regarding the required infrastructure acquisition, technical approvals, and compliance needed to scale the solution for 150,000 merchants. This scaling effort requires ensuring query connectivity is accessible from the stage cluster and deciding on the use of MCPs for direct merchant data access.

Prioritizing Code and Architecture Setup
Leadership support is needed to fast-track a go/no-go decision on infrastructure setup to accelerate the development of an end-to-end working prototype. The team must define the split between engineering work (infra) and business logic development while noting that migrating the stack from Node to Python is a manageable effort


Details
Decisions
Rate these decisions: Helpful or Not Helpful


NEEDS FURTHER DISCUSSION
* Group Versus Single Chat Evaluation Communication mode group versus single chat needs justification review. Vrajesh needs to follow up on why group approach was chosen over single number chat.
* Evaluate Engineering Versus Vrajesh Effort Split Project effort split needs evaluation. Vrajesh proposed handling business logic/code while engineering handles infra, shell bits.


ALIGNED
* Code Must Sit On Internal Infra Code placement must be on internal infrastructure. Internal hosting necessary for requisitioning required permissions and involving leaders.
* Allocate Engineering Management Resources Allocate 0.3 to 0.5 engineering management resources for Vrajesh infra, architecture setup. Resources needed to help set up infrastructure and architecture.


More details:
* Group Management and Data Storage: The discussion covered how group management would be handled, potentially based on phone numbers, and if it would use an admin panel or internal teams to manage groups and map them to data storage. The team is waiting for details from the PC time vendor they are finalizing with.
* Production Concerns and Infrastructure Needs: Concerns were raised about taking the solution to production, including code or deployment changes that might require requisition and take weeks, depending on the requirements (00:02:30). The plan involves acquiring infra pieces, getting technical approvals, and achieving compliance to scale for 150,000 merchants (00:05:40).
* WhatsApp Group vs. Single Number Strategy: The group discussed the current state of merchant management where WhatsApp groups already exist, but human scaling is impossible for unmanaged merchants (00:07:48). Vrajesh Jaidev Iyengar will follow up to understand the exact reasons for deciding on groups versus a single chat, noting that one person managing 100 groups seems product-tricky (00:09:04).
* Query Access and Deployment Strategy: The team agreed that the easiest way to get the solution live is to ensure the query connectivity is accessible from the stage cluster. Vrajesh Jaidev Iyengar also mentioned using MCPs for merchants to directly access data, avoiding the need to put it on their own infrastructure (00:10:39).
* Infrastructure and Permissions for Code Deployment: A clear breakdown of work is necessary, as the code will need to sit on their infrastructure, requiring necessary permissions and involvement from leaders. There is a recognition that they might need to deprioritize some other tasks to secure the necessary bandwidth for this project (00:13:23).
* Engineering Work vs. Business Logic Development: Vrajesh Jaidev Iyengar is trying to estimate how much work requires engineers (infra and shell bits) versus the business logic components they can build themself, with the goal of evolving into a full-stack builder role (00:18:34). They are evaluating the threshold of work they can accomplish in assistance with the engineering team (00:21:03).
* Tech Stack and Migration Effort: The current state includes the possibility of the tech stack being different, which would require extra effort and context-gathering time from engineers. The effort to migrate an application from Node to Python was estimated not to take much time, supporting the argument for a stable architecture that can scale beyond small merchants (00:23:06).
* Leadership Support for Fast Tracking: The team needs the M Carbon work to be completed, preferably resulting in an end-to-end working prototype, which will require fast tracking from leadership regarding the go/no-go decision for the infrastructure setup (00:16:31). If pushback is received, leadership assistance will be required for infra and architecture setup (00:18:34) (00:27:39).


Suggested next steps
* Vrajesh Jaidev Iyengar will follow up on group versus single chat, specifically why groups were decided and the execution angle of group versus personal chat.
* Vrajesh Jaidev Iyengar will re-talk to WhatsApp to figure out the infra and architecture setup with .3 to .5 engineering management help and ask for bandwidth to deprioritize other tasks.
* Nikhil Uday Khadilkar will give context to an unspecified person, if needed, to help Vrajesh Jaidev Iyengar counter arguments effectively.


You should review Gemini's notes to make sure they're accurate. Get tips and learn how Gemini takes notes
Please provide feedback about using Gemini to take notes in a short survey.
📖 Transcript
Feb 19, 2026
Shubham x nikhil x vrajesh - Transcript
00:00:00
 
Vrajesh Jaidev Iyengar: Yeah, I think it is phone number
Shubham Choudhary: Huh?
Vrajesh Jaidev Iyengar: basis.
Shubham Choudhary: I think group manage. It's configured.
Vrajesh Jaidev Iyengar: So it's admin panel view with cams or with some internal teams who will manage this cams groups map or that will probably write into the same data storage that you're talking about.
Shubham Choudhary: limited number of groups in
Vrajesh Jaidev Iyengar: So, so actually the PC time vendor is what we are
Shubham Choudhary: future.
Vrajesh Jaidev Iyengar: finalizing with they are going to get back with some details.
Shubham Choudhary: We need to check 150k merchants.
Vrajesh Jaidev Iyengar: Huh? Correct.
Shubham Choudhary: groups.
Vrajesh Jaidev Iyengar: Huh.
Nikhil Uday Khadilkar: Although he's a good
Shubham Choudhary: Mhm.
Nikhil Uday Khadilkar: builder, what will be The concerns if we have to take it to production or how do we go about it and top level
Shubham Choudhary: You do.
Nikhil Uday Khadilkar: the response now uh
Shubham Choudhary: this.
Nikhil Uday Khadilkar: ideally that only we should be able to plug in something that we think
Shubham Choudhary: H
Nikhil Uday Khadilkar: reactive and we use the agent dashboard agent Okay.
 
 
00:02:30
 
Shubham Choudhary: JS file.
Nikhil Uday Khadilkar: Python. I'm not sure. Second
Shubham Choudhary: JS file.
Nikhil Uday Khadilkar: subs.
Shubham Choudhary: They're concern.
Nikhil Uday Khadilkar: Huh? Huh?
Shubham Choudhary: Bank account
Nikhil Uday Khadilkar: Okay.
Shubham Choudhary: number
Nikhil Uday Khadilkar: Here you go.
Shubham Choudhary: 25.
Nikhil Uday Khadilkar: Huh? Huh?
Shubham Choudhary: because I remember we were also trying to do the same
Nikhil Uday Khadilkar: Correct.
Shubham Choudhary: cross merchant
Nikhil Uday Khadilkar: Correct. Got it.
Shubham Choudhary: I'm not sure we should go with
Nikhil Uday Khadilkar: Correct. Maybe So
Shubham Choudhary: Yes. Yes.
Nikhil Uday Khadilkar: anyway,
Shubham Choudhary: Yes. Yes. Security.
Nikhil Uday Khadilkar: right.
Shubham Choudhary: It's a process.
Vrajesh Jaidev Iyengar: It's normally time for this.
Shubham Choudhary: Alert state
Vrajesh Jaidev Iyengar: But are these things that are like code changes or deployment changes or do these also require requisition
Shubham Choudhary: cost.
Vrajesh Jaidev Iyengar: weeks?
Nikhil Uday Khadilkar: minimum. I think Okay.
Shubham Choudhary: It depends. Okay.
Vrajesh Jaidev Iyengar: There are two angles to this right answer.
 
 
00:05:40
 
Nikhil Uday Khadilkar: Okay.
Vrajesh Jaidev Iyengar: One was current state what needs to be done and second is discussion which is 150k merchants 15 we need to acquisition all these infra pieces and
Nikhil Uday Khadilkar: Raz
Vrajesh Jaidev Iyengar: get approval tech compliance So
Shubham Choudhary: Yes. Yes,
Nikhil Uday Khadilkar: only
Shubham Choudhary: I
Vrajesh Jaidev Iyengar: get
Shubham Choudhary: agree.
Nikhil Uday Khadilkar: anyway.
Vrajesh Jaidev Iyengar: those second.
Nikhil Uday Khadilkar: scaling
Shubham Choudhary: WhatsApp WhatsApp
Vrajesh Jaidev Iyengar: Thank
Nikhil Uday Khadilkar: books.
Vrajesh Jaidev Iyengar: you.
Nikhil Uday Khadilkar: Okay. Okay. Got it.
Shubham Choudhary: group.
Nikhil Uday Khadilkar: Okay. back to better.
Vrajesh Jaidev Iyengar: Did you do
Nikhil Uday Khadilkar: Okay.
Vrajesh Jaidev Iyengar: that?
Shubham Choudhary: WhatsApp group why can't we expose a single number what we
Suhas More: Plus
Shubham Choudhary: can do number agent What do you
Vrajesh Jaidev Iyengar: So normally we are trying to replicate what happens in a am world.
Shubham Choudhary: want?
Vrajesh Jaidev Iyengar: AM world merchant side there are one or two people
Shubham Choudhary: Okay.
Vrajesh Jaidev Iyengar: and there are some three four people who are in that group.
 
 
00:07:48
 
Shubham Choudhary: Okay.
Vrajesh Jaidev Iyengar: customers depending on the
Suhas More: Hallelujah.
Vrajesh Jaidev Iyengar: issue. Sometimes it might be like one of our leaders are just in that group with another leader from some other company.
Shubham Choudhary: Okay. If you want fix group I
Suhas More: solution non-managed merchant manage
Shubham Choudhary: think
Vrajesh Jaidev Iyengar: non-manage manage already these WhatsApp groups exist and humans are there human cannot scale
Suhas More: merchant
Vrajesh Jaidev Iyengar: to unmanaged scale human we are having a VRM coordination and if needed then AM will be added to that group and am and other people depending on the ticket and other complexities
Nikhil Uday Khadilkar: or maybe 2,000 merchants coverage
Vrajesh Jaidev Iyengar: this
Suhas More: But same year 20,000 merchants let's say there will be 2,000 groups WhatsApp group it
Nikhil Uday Khadilkar: for
Suhas More: is humanly impossible to manage all those groups even if 10%
Vrajesh Jaidev Iyengar: he will not be there in 2,000 groups at the same time maybe 2000 so actually there will be some need of an AM majority will be lowle issues VRM handle
Suhas More: Correct.
 
 
00:09:04
 
Vrajesh Jaidev Iyengar: cut.
Suhas More: So group humanly impossible. No how we will check all those groups even if his attention is required. it is impossible to respond immediately versus if we create a dedicated slack bot
Nikhil Uday Khadilkar: neighbor.
Vrajesh Jaidev Iyengar: Huh?
Nikhil Uday Khadilkar: Huh?
Suhas More: uh sorry uh WhatsApp number he'll get involved and we communication now it is being handled by human
Vrajesh Jaidev Iyengar: I'll get back on this group. Group versus single chat.
Suhas More: something
Vrajesh Jaidev Iyengar: Why did they decide on groups exactly?
Shubham Choudhary: Okay,
Suhas More: group.
Shubham Choudhary: good.
Suhas More: So there's
Vrajesh Jaidev Iyengar: Execution angle say group versus personal chat.
Suhas More: no
Vrajesh Jaidev Iyengar: What is the limitation that we face WhatsApp provider
Suhas More: correct but for one person to manage 100 groups seems product tricky.
Vrajesh Jaidev Iyengar: technical implication
Nikhil Uday Khadilkar: difficult to say.
Vrajesh Jaidev Iyengar: I feel like carbon manage We are just waiting for that. We don't really we are not affected by that improvise.
Shubham Choudhary: We are sorted
Suhas More: How's it going?
 
 
00:10:39
 
Vrajesh Jaidev Iyengar: Mhm.
Shubham Choudhary: that you can think of. Yes. Yes.
Nikhil Uday Khadilkar: Proactively
Vrajesh Jaidev Iyengar: Yes,
Shubham Choudhary: That's
Nikhil Uday Khadilkar: correct.
Shubham Choudhary: it.
Nikhil Uday Khadilkar: back end. What will
Vrajesh Jaidev Iyengar: that
Shubham Choudhary: I didn't get you.
Nikhil Uday Khadilkar: exactly
Shubham Choudhary: But let's say
Suhas More: Wonderful.
Nikhil Uday Khadilkar: Got it.
Shubham Choudhary: fix simple.
Nikhil Uday Khadilkar: Got it. Got it. Which makes sense. Doesn't matter. What will be the easiest way to get it live?
Shubham Choudhary: We want to access the
Vrajesh Jaidev Iyengar: Yes,
Shubham Choudhary: query
Vrajesh Jaidev Iyengar: correct.
Shubham Choudhary: that connectity should be accessible from the stage cluster.
Nikhil Uday Khadilkar: Sorry.
Shubham Choudhary: externally
Suhas More: Thank goodness to me.
Nikhil Uday Khadilkar: Um, got it. Got it. Got
Shubham Choudhary: exposed
Nikhil Uday Khadilkar: it.
Shubham Choudhary: only the query.
Nikhil Uday Khadilkar: And
Vrajesh Jaidev Iyengar: MCP for merchants to directly access where we don't need to put it
 
 
00:13:23
 
Nikhil Uday Khadilkar: say
Shubham Choudhary: Oh,
Vrajesh Jaidev Iyengar: on our infra we directly access those MCPS instead of hitting 3.
Shubham Choudhary: we'll have to check
Vrajesh Jaidev Iyengar: Okay.
Shubham Choudhary: WhatsApp.
Nikhil Uday Khadilkar: correct.
Vrajesh Jaidev Iyengar: Take
Suhas More: Is
Nikhil Uday Khadilkar: What's
Suhas More: that
Shubham Choudhary: actual WhatsApp.
Vrajesh Jaidev Iyengar: Integrate.
Shubham Choudhary: I thought
Vrajesh Jaidev Iyengar: Thanks.
Shubham Choudhary: three four layers same I
Vrajesh Jaidev Iyengar: Exactly
Shubham Choudhary: think.
Nikhil Uday Khadilkar: Correct.
Vrajesh Jaidev Iyengar: something in whatever state it Yes.
Nikhil Uday Khadilkar: immediately
Vrajesh Jaidev Iyengar: Clear breakdown is key. We need our we need the code to sit on our infrastrument to requisition
Nikhil Uday Khadilkar: WhatsApp.
Vrajesh Jaidev Iyengar: the necessary permissions leaders involved.
Shubham Choudhary: They lead within a week.
Vrajesh Jaidev Iyengar: There you go.
Nikhil Uday Khadilkar: Yeah.
Shubham Choudhary: Oh,
Nikhil Uday Khadilkar: We don't have that only.
Shubham Choudhary: documentation.
Vrajesh Jaidev Iyengar: marketing hand
Suhas More: First All
Nikhil Uday Khadilkar: FX.
Vrajesh Jaidev Iyengar: over
Suhas More: right.
Vrajesh Jaidev Iyengar: we'll we'll ask for that we need to dep prioritize some other I got
 
 
00:16:31
 
Nikhil Uday Khadilkar: could
Vrajesh Jaidev Iyengar: bandwidth.
Nikhil Uday Khadilkar: be. It might not take the actual data of conversions.
Suhas More: It's
Vrajesh Jaidev Iyengar: It's a fair
Suhas More: okay.
Vrajesh Jaidev Iyengar: but uh the text is different.
Nikhil Uday Khadilkar: It'll take time.
Vrajesh Jaidev Iyengar: 10% assist build is not problem
Nikhil Uday Khadilkar: Correct.
Vrajesh Jaidev Iyengar: statement
Nikhil Uday Khadilkar: Correct.
Shubham Choudhary: wasted.
Vrajesh Jaidev Iyengar: saying we are okay to we'll take this effort but I'm just I'm being very critical of this argument line itself push
Shubham Choudhary: Okay.
Vrajesh Jaidev Iyengar: back push
Nikhil Uday Khadilkar: What you
Vrajesh Jaidev Iyengar: back.
Nikhil Uday Khadilkar: do?
Suhas More: What's
Nikhil Uday Khadilkar: What you
Suhas More: that?
Vrajesh Jaidev Iyengar: Why
Nikhil Uday Khadilkar: do? You will not be able to say anything much.
Vrajesh Jaidev Iyengar: see WhatsApp we'll need we'll get a better estimate after that.
Nikhil Uday Khadilkar: Okay.
Vrajesh Jaidev Iyengar: So we'll need whatever m carbon work is happening to be done preferably close like end to end working prototype then we can just take it live and taking it live will require a lot of fast tracking from leadership in terms of uh go no go for the infra setup
 
 
00:18:34
 
Nikhil Uday Khadilkar: Either
Suhas More: Wait.
Vrajesh Jaidev Iyengar: Bug it up.
Nikhil Uday Khadilkar: we get any push back.
Vrajesh Jaidev Iyengar: Huh?
Nikhil Uday Khadilkar: We need help from leadership.
Vrajesh Jaidev Iyengar: That will be the takeh.
Nikhil Uday Khadilkar: for this. But don't take it on.
Vrajesh Jaidev Iyengar: There you
Nikhil Uday Khadilkar: We can do some workounds.
Vrajesh Jaidev Iyengar: go.
Nikhil Uday Khadilkar: Marketing can figure that out. But
Suhas More: Get out
Nikhil Uday Khadilkar: apart from that WhatsApp WhatsApp
Suhas More: there.
Nikhil Uday Khadilkar: building at the same time we'll use the dashboard only anyway.
Vrajesh Jaidev Iyengar: Mhm.
Nikhil Uday Khadilkar: We
Vrajesh Jaidev Iyengar: Okay.
Nikhil Uday Khadilkar: plug
Suhas More: Okay.
Vrajesh Jaidev Iyengar: I want to give an estimate also to huh one more part that we wanted to know was how much of this would be things that would require engineers to work versus how much of it can be things that I can build I as in actually code like the business
Suhas More: Peace.
Vrajesh Jaidev Iyengar: logic bits if I can uh work on And we keep the infra and you know the the shell bits to engineering.
 
 
00:21:03
 
Shubham Choudhary: I think the internal application
Suhas More: Oh s***.
Shubham Choudhary: almost
Vrajesh Jaidev Iyengar: Huh.
Nikhil Uday Khadilkar: Stand.
Vrajesh Jaidev Iyengar: to let beh
Shubham Choudhary: I think longterm we don't need to build we just need
Vrajesh Jaidev Iyengar: correct
Shubham Choudhary: to WhatsApp
Vrajesh Jaidev Iyengar: correct.
Shubham Choudhary: I don't think your need will be
Vrajesh Jaidev Iyengar: I want to evolve into a fullstack builder role given some core things will be done only like will be possible only by engineering versus there'll be some
Shubham Choudhary: Okay.
Vrajesh Jaidev Iyengar: things threshold I'm trying to evaluate key for this project I know I can do something that
Suhas More: I
Vrajesh Jaidev Iyengar: has done but I will obviously do it in assistance with
Suhas More: know.
Shubham Choudhary: Yes. Oh.
Vrajesh Jaidev Iyengar: the team. I'm in line with actually
Shubham Choudhary: Then we can think of this.
Vrajesh Jaidev Iyengar: I have I have some content.
Nikhil Uday Khadilkar: part.
Vrajesh Jaidev Iyengar: Huh?
Nikhil Uday Khadilkar: Huh?
Vrajesh Jaidev Iyengar: I was just recapping
Nikhil Uday Khadilkar: Huh?
Suhas More: Hello.
Vrajesh Jaidev Iyengar: the tasks that need to be done quite a few what we suggest is locally because that is one bit approvals is one bit second bit is WhatsApp so we are that will require one to two weeks of testing and build once M carbon comes back.
 
 
00:23:06
 
Vrajesh Jaidev Iyengar: So because of these reasons we uh since the text stack is different our engineers don't have context to context gathering time extra effort.
Nikhil Uday Khadilkar: current state.
Vrajesh Jaidev Iyengar: Got it. Got it. Get
Nikhil Uday Khadilkar: So we ideally whatever we'll build we'll build already existing so
Vrajesh Jaidev Iyengar: it.
Nikhil Uday Khadilkar: language.
Vrajesh Jaidev Iyengar: I don't know.
Shubham Choudhary: What's moving? Okay.
Nikhil Uday Khadilkar: Okay.
Vrajesh Jaidev Iyengar: Python as fast might not be working.
Shubham Choudhary: JS
Nikhil Uday Khadilkar: Uh,
Shubham Choudhary: file.
Nikhil Uday Khadilkar: Python
Vrajesh Jaidev Iyengar: Effectively
Suhas More: What was the best?
Vrajesh Jaidev Iyengar: with cloud code, how much effort is it to migrate a an application from node to Python?
Shubham Choudhary: It won't take much. Yeah, I got it.
Vrajesh Jaidev Iyengar: Double architecture is a very strong point. I think easy to accept scale to large larger merchants beyond 10 merchants. These are the issues that we have. This will be my pitch.
Suhas More: America.
 
 
00:25:42
 
Shubham Choudhary: already. We have all that.
Vrajesh Jaidev Iyengar: Okay.
Nikhil Uday Khadilkar: I'll give the context to also if we need
Vrajesh Jaidev Iyengar: I think but I'll
Nikhil Uday Khadilkar: because
Vrajesh Jaidev Iyengar: just Huh?
Nikhil Uday Khadilkar: You have no way to counter it effectively
Vrajesh Jaidev Iyengar: I have I have ways to counter it.
Nikhil Uday Khadilkar: without
Vrajesh Jaidev Iyengar: WhatsApp and then authentication in I can I can push on some points and get some uh brownie points.
Suhas More: That's good.
Vrajesh Jaidev Iyengar: Why is it not 95% and why is it actually 60%. Huh?
Nikhil Uday Khadilkar: Why do we need to do all this wasted effort?
Vrajesh Jaidev Iyengar: Correct.
Suhas More: Just quickly
Nikhil Uday Khadilkar: Not in terms
Vrajesh Jaidev Iyengar: Uhhuh.
Suhas More: summarize
Nikhil Uday Khadilkar: of
Suhas More: story.
Nikhil Uday Khadilkar: Anyway,
Vrajesh Jaidev Iyengar: Mhm.
Suhas More: things. There's like a list of
Vrajesh Jaidev Iyengar: No, no.
Suhas More: attend
Vrajesh Jaidev Iyengar: Huh?
Nikhil Uday Khadilkar: WhatsApp if you are able to figure that out anyway and we will maybe
 
 
00:27:39
 
Vrajesh Jaidev Iyengar: Huh?
Nikhil Uday Khadilkar: start we in the meantime Start off with the
Vrajesh Jaidev Iyengar: Yeah.
Nikhil Uday Khadilkar: sorry
Vrajesh Jaidev Iyengar: Yeah.
Suhas More: It's just Yeah, it's just like
Vrajesh Jaidev Iyengar: high level.3 to.5 engineering management
Suhas More: drop
Vrajesh Jaidev Iyengar: to outside of whatever is already happening in Razor assist to just help me the right and set up the infra and architecture and figure out I'll
Suhas More: name address.
Vrajesh Jaidev Iyengar: re talk to WhatsApp
Nikhil Uday Khadilkar: But
Vrajesh Jaidev Iyengar: Mhm.
Nikhil Uday Khadilkar: we'll start.
Vrajesh Jaidev Iyengar: Yeah. Proactive.
Nikhil Uday Khadilkar: Sorry.
Vrajesh Jaidev Iyengar: Yeah.
Suhas More: Yeah.
Vrajesh Jaidev Iyengar: Okay.
Nikhil Uday Khadilkar: Okay.
Vrajesh Jaidev Iyengar: Yeah. Yeah. Ch.
Nikhil Uday Khadilkar: Okay.
Vrajesh Jaidev Iyengar: Take care.
Nikhil Uday Khadilkar: Yeah.
Suhas More: Uhhuh. I have a few things to discuss before I start. Let's
Shubham Choudhary: provider.
Suhas More: see.
Vrajesh Jaidev Iyengar: I'm
Shubham Choudhary: WhatsApp
Vrajesh Jaidev Iyengar: car. He has been in talks.
Suhas More: lights up. Hello Okay. So, It's good because Okay. Have you been Yes. with basically what you
 
 
Transcription ended after 00:33:07


This editable transcript was computer generated and might contain errors. People can also change the text after it was created.

---

## Linked Entities
- [[people/nikhil-khadilkar]]
- [[people/shubham-singhal]]
- [[people/vrajesh-iyengar]]
- [[projects/vrm]]
