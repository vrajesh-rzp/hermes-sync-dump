---
title: "[IMP] VRM <> DevOps"
type: meeting
date: 2026-05-12
tags: [meeting, gemini-recording]
gemini_doc_id: 1TdgT_3rXG9FNXU0lke8T_JdEvIsUYits-Zv16dpeH0U
---

# [IMP] VRM <> DevOps


**Date:** 2026-05-12
**Source:** Gemini recording ([Google Doc](https://docs.google.com/document/d/1TdgT_3rXG9FNXU0lke8T_JdEvIsUYits-Zv16dpeH0U/edit))

---

## Summary

﻿📝 Notes
May 12, 2026
[IMP] VRM <> DevOps
Invited Vrajesh Jaidev Iyengar Kadambary Diwan Syed Mudassir Hasan Razvi Nehalramsurya Balamurali Rishav Loomba Nithin V
Attachments [IMP] VRM <> DevOps
Meeting records Transcript 

Summary
Meeting focused on resolving VRM service connectivity and infrastructure security via a platform migration.

Connectivity and Compliance Risks
Teams evaluated IP whitelisting for service connectivity amid PCI compliance concerns. Security requirements necessitate architectural review for sensitive card data handling.

Infrastructure Governance Challenges
Lack of DevOps oversight for the AI strategy account threatens production readiness for 10 merchants. Discussions highlighted the need for standardized environment management.

Migration to Platform Environment
Consensus reached to migrate the VRM service to the Razorpay platform environment. This transition enables scaling and leverages deploy agents for standardized infrastructure management.

Rate this Summary: Helpful or Not Helpful

Decisions
We've updated the Decisions section using your feedback.
Let us know what you think: Helpful or Not Helpful

ALIGNED
* Pilot program execution methodology The 10-merchant pilot program will be executed as a planned exercise, with merchants informed beforehand, rather than a random rollout.
* Mandatory security review for infrastructure Any new infrastructure connectivity between the AI strategy account and the production environment must be reviewed and approved by the security team due to the involvement of sensitive data and potential PCI scope impact.
* External endpoint traffic strategy The team will adopt the external endpoint strategy for handling traffic, treating requests as external internet traffic, contingent on security team approval.
* RSPL migration strategy The VRM application will be migrated to the RSPL cluster using the deploy agent to ensure scalability and alignment with standardized infrastructure practices.

Next steps
* [Rishav Loomba] Engage Security Team: Evaluate proposed technical solutions for the service and obtain approval before implementation.
* [Rishav Loomba, Kadambary Diwan] Analyze Migration Requirements: Evaluate technical requirements and time estimates for moving to the RSPL cluster and share findings in a thread.
* [Rishav Loomba] Test Deploy Agent: Evaluate the capability of the tool for managing production deployment and pipeline creation in the RSPL environment.

Details
Did the screenshots in this section make your notes better or worse?
* VRM Service Connectivity: Rishav Loomba explains that the VRM service generates an OTP session to call downstream services, such as the Razer Assist service, to fetch purchase information. Nehalramsurya Balamurali inquires about how the service is exposed and whether it utilizes CloudFront or a concierge service. Rishav Loomba clarifies that they are not using CloudFront or a concierge service, but are instead proceeding with IP whit

---

## Full Notes

﻿📝 Notes
May 12, 2026
[IMP] VRM <> DevOps
Invited Vrajesh Jaidev Iyengar Kadambary Diwan Syed Mudassir Hasan Razvi Nehalramsurya Balamurali Rishav Loomba Nithin V
Attachments [IMP] VRM <> DevOps
Meeting records Transcript 




Summary
Meeting focused on resolving VRM service connectivity and infrastructure security via a platform migration.

Connectivity and Compliance Risks
Teams evaluated IP whitelisting for service connectivity amid PCI compliance concerns. Security requirements necessitate architectural review for sensitive card data handling.

Infrastructure Governance Challenges
Lack of DevOps oversight for the AI strategy account threatens production readiness for 10 merchants. Discussions highlighted the need for standardized environment management.

Migration to Platform Environment
Consensus reached to migrate the VRM service to the Razorpay platform environment. This transition enables scaling and leverages deploy agents for standardized infrastructure management.


Rate this Summary: Helpful or Not Helpful




Decisions
We've updated the Decisions section using your feedback.
Let us know what you think: Helpful or Not Helpful


ALIGNED
* Pilot program execution methodology The 10-merchant pilot program will be executed as a planned exercise, with merchants informed beforehand, rather than a random rollout.
* Mandatory security review for infrastructure Any new infrastructure connectivity between the AI strategy account and the production environment must be reviewed and approved by the security team due to the involvement of sensitive data and potential PCI scope impact.
* External endpoint traffic strategy The team will adopt the external endpoint strategy for handling traffic, treating requests as external internet traffic, contingent on security team approval.
* RSPL migration strategy The VRM application will be migrated to the RSPL cluster using the deploy agent to ensure scalability and alignment with standardized infrastructure practices.




Next steps
* [Rishav Loomba] Engage Security Team: Evaluate proposed technical solutions for the service and obtain approval before implementation.
* [Rishav Loomba, Kadambary Diwan] Analyze Migration Requirements: Evaluate technical requirements and time estimates for moving to the RSPL cluster and share findings in a thread.
* [Rishav Loomba] Test Deploy Agent: Evaluate the capability of the tool for managing production deployment and pipeline creation in the RSPL environment.




Details
Did the screenshots in this section make your notes better or worse?
* VRM Service Connectivity: Rishav Loomba explains that the VRM service generates an OTP session to call downstream services, such as the Razer Assist service, to fetch purchase information. Nehalramsurya Balamurali inquires about how the service is exposed and whether it utilizes CloudFront or a concierge service. Rishav Loomba clarifies that they are not using CloudFront or a concierge service, but are instead proceeding with IP whitelisting to manage the service via the web.
  

* AI Strategy Account Governance: Nehalramsurya Balamurali raises a concern that the AI strategy account is not currently managed by DevOps. They express that this lack of oversight presents a significant challenge as the application prepares to go live with 10 merchants. They emphasize that the current non-standardized environment lacks the security and infrastructure oversight typically provided by the DevOps team (00:01:50).
* Pilot Program Scope and Impact: Vrajesh Jaidev Iyengar clarifies that the planned pilot involves 10 merchants who will be informed in advance. In the event that the bot stops responding, the merchants will still have access to the dashboard, as the issue would only impact the WhatsApp-based information retrieval. The marketing team will be part of the WhatsApp groups to coordinate with merchants and inform them of any issues (00:02:36).
* Security Compliance and Data Handling: Nehalramsurya Balamurali identifies that the service involves card data, which brings the application into the PCI (Payment Card Industry) scope. They assert that the security team must review the architecture, particularly if it involves connectivity between the AI strategy account and the production account. Nehalramsurya Balamurali suggests that they should explore VPC peering or a direct connect tunnel to send data securely (00:03:23).
* Alternative Connectivity Strategy: Rishav Loomba proposes an alternative approach of treating the request as an external internet request, similar to traffic from a browser, to avoid complex internal network configurations. While Rishav Loomba notes this would utilize existing public endpoints, Nehalramsurya Balamurali cautions that the team must carefully analyze the resulting latency to ensure it meets requirements before proceeding with this solution (00:06:28).
  

* Transition to RSPL Environment: The group reaches a consensus that migrating the VRM service to the RSPL (Razorpay platform) environment is the ideal long-term solution. Rishav Loomba and Nehalramsurya Balamurali agree that this move is necessary to scale beyond the initial 10 merchants, as the current AI strategy account does not have the infrastructure nodes required for higher production traffic (00:09:21) (00:12:48).
* Use of the Deploy Agent for Migration: Nehalramsurya Balamurali introduces the "deploy agent" as a tool to assist with the migration to the RSPL account. They explain that if they provide the codebase and technical requirements, the agent will help create the necessary pull requests, set up the deployment pipeline, and manage the infrastructure-as-code. The agent will also assist with the migration of secrets from the current AWS Secret Manager to the new environment (00:09:21) (00:12:06).
* Technical Feasibility and Scaling: Vrajesh Jaidev Iyengar, Kadambary Diwan, and Rishav Loomba discuss the technical requirements for the migration, such as ensuring compatibility with Next JS and the Prisma database connector for Postgres. They acknowledge that the current AI account is not Terraform-managed, which necessitates the transition to the standardized RSPL environment to ensure the service is secure, scalable, and manageable by the DevOps team (00:12:48) (00:14:29).




You should review Gemini's notes to make sure they're accurate. Get tips and learn how Gemini takes notes
How is the quality of these specific notes? Take a short survey to let us know your feedback, including how helpful the notes were for your needs.
📖 Transcript
May 12, 2026
[IMP] VRM <> DevOps - Transcript
00:00:01


Rishav Loomba: okay and based on that session we'll call the other downstream services like the razer assist service to fetch the purchated information to render this thing so this is our main ask for the for this is our main network requirement now the
Nehalramsurya Balamurali: Uh sorry uh proluma just a quick question here the BRM service itself is residing in
Rishav Loomba: yeah in the account
Nehalramsurya Balamurali: the a correct and how is it exposed is it exposed via cloud front or simple concision
Rishav Loomba: No, currently it's exposed by crowd cloud front and uh so we not going ahead with
Vrajesh Jaidev Iyengar: Perfect.
Rishav Loomba: the concept we are just going ahead with a few IP white listing with handling this by the web so our solution well
Nehalramsurya Balamurali: Uh, okay.
Rishav Loomba: if we are not going ahead with moving this whole service to the RSPL but I'm thinking either we'll uh directly go by the internet approach and like the dashboard it will resolve
Vrajesh Jaidev Iyengar: Let's
Rishav Loomba: automatically.
Nehalramsurya Balamurali: See I'll tell you the problem here. Okay.




00:01:00


Vrajesh Jaidev Iyengar: stop
Nehalramsurya Balamurali: The main reason I asked with concage is okay. Concage does not make sense because it's a no actually wait what will be the French facing this m
Rishav Loomba: Yeah.
Vrajesh Jaidev Iyengar: it.
Nehalramsurya Balamurali: carbon I believe it's a third party service which will be helping us talk to WhatsApp and all right it's an interface correct.
Rishav Loomba: Yes.
Nehalramsurya Balamurali: So if that is an interface basically that interface is supposed to talk to our services which is a razor based services.
Rishav Loomba: Yes.
Nehalramsurya Balamurali: and uh M carbon will talk to WhatsApp and then M carbon will communicate to raise if at all there is an incoming traffic it will come from M carbon correct correct and M
Rishav Loomba: It will come from the dedicated MR1 service only.
Nehalramsurya Balamurali: carbon uh and M carbon doesn't care so where when all the requests are going because it has already entered the AOP network okay now MC carbon I think you must have configured the cloud
Rishav Loomba: Yes.
Nehalramsurya Balamurali: front endpoint I believe right for the VR and uh
Vrajesh Jaidev Iyengar: Correct.




00:01:50


Nehalramsurya Balamurali: creating a I believe this AI strategy account is not being maintained by DevOps at all in the first case, right? I believe the Yeah.
Vrajesh Jaidev Iyengar: I'm Yeah. I'm not sure.
Nehalramsurya Balamurali: Yeah. Because I remember Anurra is the one who is working on this.
Vrajesh Jaidev Iyengar: Yeah. Yeah.
Nehalramsurya Balamurali: If that is the case, then I think he and the team are like completely taking care of the whole account without DevOps intervention. That is a very big problem because we are taking it live to 10 merchants.
Vrajesh Jaidev Iyengar: Right.
Nehalramsurya Balamurali: Now what is the I mean we can talk about because creating a pairing or some kind of connectivity is another challenge which we have to deal with it but if at all let's say hypothetically it turns out to be good we have created a connectivity we have all the data required to read from the other accounts what
Vrajesh Jaidev Iyengar: f***.
Nehalramsurya Balamurali: if this application goes down will there be any direct impact on the merchants VRM only like if VRM goes down will




00:02:36


Rishav Loomba: the VM application.
Nehalramsurya Balamurali: there be any direct impact on the merchants
Vrajesh Jaidev Iyengar: So the 10 live merchants will not be able to access the information through WhatsApp but they will still have access to the dashboard like it will not affect any other uh parts that already exist
Nehalramsurya Balamurali: understood.
Vrajesh Jaidev Iyengar: for the merchant.
Nehalramsurya Balamurali: I mean, does it impact any customer experience? Is it going to be like a uh planned exercise or is it going to be like random 10
Vrajesh Jaidev Iyengar: No,
Rishav Loomba: Hey,
Vrajesh Jaidev Iyengar: no, no.
Nehalramsurya Balamurali: pilot
Vrajesh Jaidev Iyengar: This will be a planned exercise.
Rishav Loomba: it's
Vrajesh Jaidev Iyengar: The 10 merchants will be called and informed beforehand that they're part of a pilot. Uh the marketing team will coordinate with them and they will actually be a part of these WhatsApp groups also. So in case let's say the bot stops responding,
Nehalramsurya Balamurali: Perfect.
Vrajesh Jaidev Iyengar: the the uh the marketing person who is in this WhatsApp group will inform me and we'll take actions
Nehalramsurya Balamurali: Understood.




00:03:23


Nehalramsurya Balamurali: Got it.
Vrajesh Jaidev Iyengar: accordingly.
Nehalramsurya Balamurali: Makes sense.
Rishav Loomba: It's kind of a production P like think
Nehalramsurya Balamurali: So, understood. Got it. Got it.
Rishav Loomba: of
Nehalramsurya Balamurali: Okay. I'll tell few challenges here. Okay. As you mentioned like we cannot move the VRM to RSP because of M constraints. Correct.
Vrajesh Jaidev Iyengar: Yeah,
Nehalramsurya Balamurali: Okay. Okay, that I understand. Okay. Uh so we'll have to create the connectivity from the RSP because like say you want to access uh CD information, right? Card information and that's how it's going to work.
Rishav Loomba: But our service lies in the nonCD and it will internally call the CD like monolith
Nehalramsurya Balamurali: I I know bro,
Rishav Loomba: and more.
Nehalramsurya Balamurali: we'll have to reach out to security team regarding this because if at all there is a CD flow involved in this one, then this particular account comes into the PCS scope.
Vrajesh Jaidev Iyengar: Check.
Nehalramsurya Balamurali: So if it is under PCS scope and since we know how we are maintaining the a strategy account then that will be a challenge.




00:04:05


Rishav Loomba: Oh,
Nehalramsurya Balamurali: So we'll have to get it tribute by security team once the whole flow and we'll once
Rishav Loomba: okay.
Nehalramsurya Balamurali: they give an approval then they'll only giving a suggestion. See my take is like we can simply create a VPC pairing or a direct connect and we can tunnel through from a account to prod account and we can send the data back securely.
Vrajesh Jaidev Iyengar: Okay.
Nehalramsurya Balamurali: But again like we have to get it reviewed by security team and we'll have to go with what they are suggesting us to do.
Rishav Loomba: Yeah. Yeah.
Nehalramsurya Balamurali: So
Rishav Loomba: because uh I'm saying like in the same like same architecture we are following for few of the APIs in uh in across regions because in the US AWS account and between the
Nehalramsurya Balamurali: yes,
Rishav Loomba: RSPL where we're doing some kind of like for the memory DB remember we did the VPC pairing to share the
Nehalramsurya Balamurali: I agree.
Rishav Loomba: data
Nehalramsurya Balamurali: The problem is cells are completely streamlined and managed by DevOps. Everything is secured and standardized.




00:04:57


Rishav Loomba: uh
Nehalramsurya Balamurali: If something goes wrong, we'll get a notification on the infra side and on every side. If there is a security breach, we'll get to know. If there someone who's unauthorized gets into our system, security team will get to know immediately. I'm not sure if that is happening with the a strategy account currently. If you say we are going to deal with the card data, merchants are going to be involved and the whole ex customer experience team,
Vrajesh Jaidev Iyengar: Well, I know
Nehalramsurya Balamurali: everyone is going to be involved in this one with the service running in a non-standardized non-servile environment is a very big challenger. That's why I'm asking you to talk to security team
Rishav Loomba: Oh s***.
Vrajesh Jaidev Iyengar: I have been
Rishav Loomba: So okay I got it.
Nehalramsurya Balamurali: once.
Rishav Loomba: I got I already shared this with the discussed it with the but he agreed at that time. I'll discuss this particular problem with
Nehalramsurya Balamurali: Yeah. Yeah.
Rishav Loomba: him.
Nehalramsurya Balamurali: If you can explain like how the whole flow once what all data is being involved it's safe for us also later in case if at




00:05:45


Rishav Loomba: Yeah.
Nehalramsurya Balamurali: all something is not going in the right direction touchwood at least you'll be on the safer hands that's
Rishav Loomba: Got it.
Nehalramsurya Balamurali: why.
Rishav Loomba: I agree with you on that. I'm
Vrajesh Jaidev Iyengar: N just one one question on this like I understand that RSPL cluster will be fully like you you'll have transparency into what is happening with this cluster if there's unauthorized access etc. Is there a way for you and security like DevOps and security to validate the AI strategy account whether it is secure or not in its current state?
Nehalramsurya Balamurali: They'll have regist they'll actually take care of that because whatever packages and
Vrajesh Jaidev Iyengar: Okay.
Nehalramsurya Balamurali: basically while setting up an infrastructure we have all the modules like a template which is already security approved and
Vrajesh Jaidev Iyengar: Okay.
Nehalramsurya Balamurali: we know that okay if we create an infra with this particular templates it is going to be secured for sure. So it goes unsaid since yeah that's
Rishav Loomba: Okay. N I want one thing it's if we go that the main is security issue is currently if




00:06:28


Vrajesh Jaidev Iyengar: Okay.
Rishav Loomba: we go by the VPC pairing or any of the private network if we normally go by internet
Nehalramsurya Balamurali: Uh
Rishav Loomba: think of it as like I'll I'll let the dashboard.raaser.com reserve.com to resolve via external route 53. In that case, you don't need to do anything.
Nehalramsurya Balamurali: okay.
Rishav Loomba: It will resolve as as a normal traffic external
Nehalramsurya Balamurali: uh see my only concern is uh see we are giving an entry
Rishav Loomba: request.
Nehalramsurya Balamurali: point from a nonsecured I mean I cannot call it non-secure but which is not completely secure system to a razor pace infrastructure now we know like you know
Rishav Loomba: Yeah.
Nehalramsurya Balamurali: if at all there is a loophole we would know like how to get the send the request and get the response
Rishav Loomba: I am saying currently we are trying to resolve these two cluster internally. What I'm saying let's not uh solve that internally. Treat we are treating this particular now our request is originating from this cluster. I'm saying let's treat it as a separate client as browser.




00:07:37


Nehalramsurya Balamurali: Understood. Understood.
Rishav Loomba: It will be an external network request internet request that's it's coming from any anywhere from outside of the our RSPL don't need to take care of the request think of it as a brow it's coming from a browser we will treat it as a normal internet
Nehalramsurya Balamurali: So will you get all the information from the external endpoint which is already
Rishav Loomba: request
Nehalramsurya Balamurali: available.
Rishav Loomba: yeah everything because it will be so we we just need a token extra that are the service is already maintaining or service tokens post that it will be normal external request the dashboard.raaser.com razorbay.com it will resolve to the again to the non CD traffic then the edge edge will take care of the validations and every security aspect then it will directly go to the razor internal
Nehalramsurya Balamurali: Okay. Uh bro, tell me something.
Rishav Loomba: services
Nehalramsurya Balamurali: So whatever you're trying to do with the external endpoint, right? Uh so the same actions will be available by anyone in the world. Can be done by anyone in the world.




00:08:34


Rishav Loomba: yeah it's already there actually so this send messages endpoint or the OTP message it's currently being used
Nehalramsurya Balamurali: Understood?
Rishav Loomba: at the dual dashboard or uh or USL.
Nehalramsurya Balamurali: So understood anyone can use that.
Rishav Loomba: So they're already using this from the client and you can only
Nehalramsurya Balamurali: So even if we don't use it, someone else can
Rishav Loomba: problem is the by doing this the latency will be very
Nehalramsurya Balamurali: h I mean this way I mean if if at all we are going to access an already
Rishav Loomba: high
Nehalramsurya Balamurali: existing public endpoint I'm good with it provided security was also good with it but coming to the latency part is something which you have to sort it out because that is something which we cannot do anything. Yeah.
Rishav Loomba: that case the VPC or we need to set up the external connection. We will set up the call with security to discuss all the these three solutions and then we'll analyze some
Nehalramsurya Balamurali: Yes, I I I believe like given the time constraint the last solution which you discussed right the external endpoint that seems to be




00:09:21


Rishav Loomba: more. Yeah.
Nehalramsurya Balamurali: more feasible provided like we have an approval from security team and you're also okay with the latency which you just mentioned and if
Rishav Loomba: Okay.
Nehalramsurya Balamurali: you're going with a production deployment then slowly we'll start moving to VRM to RSP and then we
Rishav Loomba: Yeah.
Nehalramsurya Balamurali: can I mean that's pretty straightforward you know the
Rishav Loomba: Yeah. So uh do we have any like like how much time will it take to migrate a service to from
Nehalramsurya Balamurali: rules
Rishav Loomba: one cluster to another like all because now we have to do it by the teragrant and terraforms it will
Nehalramsurya Balamurali: are you I can do one thing like do we have all the text requirements like what all requires
Rishav Loomba: take
Nehalramsurya Balamurali: in components etc.
Rishav Loomba: uh do we have uh we have actually
Nehalramsurya Balamurali: Okay. So we have this deploy agent uh luma so you can try it out. Uh I think um even like Nathan can help you out with it.
Rishav Loomba: Okay.
Nehalramsurya Balamurali: So I'll also be there but yeah so once you have the text with you you have a separate repository as well right for this application.




00:10:22


Nehalramsurya Balamurali: Perfect. So you can just uh share this text with the deploy agent and ask it to create a complete
Rishav Loomba: Yeah.
Nehalramsurya Balamurali: take live file. I mean ask it to deploy it to production actually as an RSQL account. So it will do a few checks and it'll ask you a few questions and then if at all you have any queries in that you can get back to us. It'll be helping you with that production
Rishav Loomba: Got it.
Nehalramsurya Balamurali: deployment.
Rishav Loomba: And we'll we'll move this to the prod the nonCD cluster in RSPL. And then it will be the intern traffic internal request for each of the routes which we
Nehalramsurya Balamurali: Yeah.
Rishav Loomba: try
Nehalramsurya Balamurali: So maybe the VRM can be frontf facing. The rest of the communications can happen via internal endpoint.
Rishav Loomba: internal inputs. Got it.
Nehalramsurya Balamurali: You can try it out. I'll do one thing that just a minute. Uh did you get see the announcement by any chance?
Nithin V: Appreciate the SL announcement.




00:11:07


Nehalramsurya Balamurali: Okay, perfect. Thanks. Yeah,
Nithin V: Appar
Rishav Loomba: Okay.
Nehalramsurya Balamurali: you can try it out. Uh this will help you deploy to RSP account. So I think since you already know like how all the components work it'll be easy for you to understand with the questions it asks. So yes
Rishav Loomba: Sure. Sure. Sure. We we'll we'll go through all the approaches and then we'll
Nehalramsurya Balamurali: sure
Rishav Loomba: find
Vrajesh Jaidev Iyengar: Cool. So in terms of next action items we need to share like we need to check if this take it live uh or whatever the deploy agent can be used directly by us to um so what will the deploy agent here do? Will it actually like migrate the whole code to the RSL cluster or just whitelist the VRM to you know send traffic to these
Nehalramsurya Balamurali: Oh put it in simply terms Rajesh it will be if you give a code base with all the text it'll be trying to
Vrajesh Jaidev Iyengar: endpoints.




00:12:06


Nehalramsurya Balamurali: it'll be helping you with all the PRs which has to be required to take your application live to production you just have to review it and uh you know do the respective actions and then it'll be creating a deployment pipeline also for you so once all these infraes are created you can just ask it to go ahead and deploy to production it will be deploying it to RSQL
Vrajesh Jaidev Iyengar: Okay.
Nehalramsurya Balamurali: account
Vrajesh Jaidev Iyengar: Okay. So, right now I I'm deploying this to the um to the AWS account and the secrets are managed by
Nehalramsurya Balamurali: so
Vrajesh Jaidev Iyengar: AWS secret manager. So, I'm guess so will it also handle the credit stash migration and those kind of
Nehalramsurya Balamurali: uh yes yes you'll have to provide the secret scope
Vrajesh Jaidev Iyengar: things?
Nehalramsurya Balamurali: and it'll blood stash and it'll take care of it for
Vrajesh Jaidev Iyengar: Huh? Okay. Okay.
Nehalramsurya Balamurali: you
Vrajesh Jaidev Iyengar: So the approach we are proposing here is an actual migration to
Nehalramsurya Balamurali: uh that.




00:12:48


Nehalramsurya Balamurali: No,
Rishav Loomba: a long thing I I'm also thinking think of it as like suppose you want
Vrajesh Jaidev Iyengar: RSP.
Nehalramsurya Balamurali: no.
Rishav Loomba: to scale it like beyond 10 merchants like suppose you want to go with 100 merchants in that case anyways we have to go there because I don't know how the HP and all those things like we don't uh like how are we maintaining our infrastructure like I want to scale up pods I have to change some configuration for this for the I have to change the nodes I don't know key if this this AI AWS cluster is having that level of nodes which we required for the production traffic all those very
Vrajesh Jaidev Iyengar: Okay.
Rishav Loomba: unrealistic to handle then this new account that for that we need to move so if we have some time like we will migrate which is the ideal
Vrajesh Jaidev Iyengar: Okay. Okay.
Rishav Loomba: Okay
Vrajesh Jaidev Iyengar: So I so we'll use the deploy agent to migrate in the ideal way right now. You think that is the path




00:13:40


Rishav Loomba: will analyze like suppose it will see I don't know about the deployment we'll have to go
Vrajesh Jaidev Iyengar: forward.
Rishav Loomba: through it like how how much time will we need we need a proper plan like if we go via this approach how much time we required I think kumbri and me will analyze this and post
Vrajesh Jaidev Iyengar: Take
Rishav Loomba: that will hear the like which is uh how how much time will it take and which is the ideal approach and everything which we'll share those in a
Vrajesh Jaidev Iyengar: Okay.
Rishav Loomba: thread.
Nehalramsurya Balamurali: So uh Rishab you will be testing it out with deploy agent.
Vrajesh Jaidev Iyengar: Okay.
Nehalramsurya Balamurali: Okay. Okay. Um just give the a text pick uh link as in like if you have a doc it will be great.
Rishav Loomba: Yeah.
Nehalramsurya Balamurali: If you have like in the local dock also great can just call / deploy agent. This is a text u deploy this application. It'll be helping you over the next
Rishav Loomba: Got it. Got it.
Nehalramsurya Balamurali: steps.




00:14:29


Vrajesh Jaidev Iyengar: Okay, I'm guessing it'll it'll sort of disconnect the current CD pipeline that I have which is deploying into the AWS uh AI account.
Nehalramsurya Balamurali: M no it'll be creating a different pipeline valuations.
Vrajesh Jaidev Iyengar: Okay. Okay.
Nehalramsurya Balamurali: Yeah.
Vrajesh Jaidev Iyengar: Okay.
Nehalramsurya Balamurali: So for account Mhm.
Rishav Loomba: The AI account is not uh terraform managed.
Vrajesh Jaidev Iyengar: Sorry.
Nehalramsurya Balamurali: No no no as far as I know it is
Vrajesh Jaidev Iyengar: That's it.
Rishav Loomba: No.
Nehalramsurya Balamurali: not.
Vrajesh Jaidev Iyengar: Cool. Uh any other questions KD Lumba you have that you need before making the decisioning?
Nehalramsurya Balamurali: All right, I'll be available offline if at all you folks have any questions. I'm free to help you.
Vrajesh Jaidev Iyengar: Thank you so much Neil. Really nice meeting you. Thanks Nathan.
Nehalramsurya Balamurali: Thank you so much. Bye.
Nithin V: Thank you. Thanks a lot. Bye.
Rishav Loomba: Yeah.
Vrajesh Jaidev Iyengar: Okay.
Rishav Loomba: Thank
Vrajesh Jaidev Iyengar: Uh, normally that was the issue, but might as well do that.




00:15:46


Kadambary Diwan: Yes.
Vrajesh Jaidev Iyengar: Uh,
Rishav Loomba: deploy.
Kadambary Diwan: like
Vrajesh Jaidev Iyengar: Okay, here you go.
Kadambary Diwan: ready
Vrajesh Jaidev Iyengar: Okay.
Rishav Loomba: I think
Kadambary Diwan: pipeline.
Vrajesh Jaidev Iyengar: Uh
Rishav Loomba: Hello.
Vrajesh Jaidev Iyengar: mainly
Rishav Loomba: Think of it as a DNS. DNS reser
Vrajesh Jaidev Iyengar: Uh
Rishav Loomba: 53. It's not a internal entity. No.
Vrajesh Jaidev Iyengar: fairction.
Rishav Loomba: environment like production.
Vrajesh Jaidev Iyengar: Security.
Rishav Loomba: Not
Vrajesh Jaidev Iyengar: Will it create like a dev equivalent and production?
Rishav Loomba: already. Yeah. Anyways,
Vrajesh Jaidev Iyengar: agent.
Rishav Loomba: points are exposed.
Kadambary Diwan: Banana,
Vrajesh Jaidev Iyengar: Uh I think so.
Kadambary Diwan: right?
Vrajesh Jaidev Iyengar: expect.
Rishav Loomba: Okay. Now the problem statement is VRM
Vrajesh Jaidev Iyengar: You
Rishav Loomba: and everything 0 to one DNS set based on the nodes.
Vrajesh Jaidev Iyengar: got
Rishav Loomba: load. Now the thing is it's on the single next
Vrajesh Jaidev Iyengar: it.
Rishav Loomba: to deploy the
Vrajesh Jaidev Iyengar: Okay.
Rishav Loomba: thing. Okay.




00:19:15


Vrajesh Jaidev Iyengar: Okay.
Rishav Loomba: That
Vrajesh Jaidev Iyengar: Okay. or next whether it supports like whether supports next JS
Rishav Loomba: Confirm.
Vrajesh Jaidev Iyengar: application
Rishav Loomba: I'm just calling it out.
Vrajesh Jaidev Iyengar: USB meeting transcript groups
Rishav Loomba: the DB DB const
Vrajesh Jaidev Iyengar: to a different I don't know RDS Prisma DB Prisma as a connector to reach a
Rishav Loomba: cont.
Vrajesh Jaidev Iyengar: Postgress table database in mind. I don't think so.
Rishav Loomba: table. I
Kadambary Diwan: Mhm. Everything.
Vrajesh Jaidev Iyengar: table from the VRM code base. texting. Can you help with template?
Kadambary Diwan: Mhm.
Vrajesh Jaidev Iyengar: Definitely add-ons.
Kadambary Diwan: Evench.
Vrajesh Jaidev Iyengar: What's explicitly
Kadambary Diwan: Explos.
Vrajesh Jaidev Iyengar: go?
Kadambary Diwan: We can
Vrajesh Jaidev Iyengar: If you can work on the text knowledge of you will have I don't have at all I will work
Rishav Loomba: Console
Kadambary Diwan: Mhm.
Vrajesh Jaidev Iyengar: tables and direct NPX create tables.
Rishav Loomba: Good.
Kadambary Diwan: What up?
Rishav Loomba: Say yes.




00:23:41


Rishav Loomba: Say again.
Vrajesh Jaidev Iyengar: AWS I
Kadambary Diwan: Right.
Vrajesh Jaidev Iyengar: don't access my
Rishav Loomba: over the north of
Vrajesh Jaidev Iyengar: access
Rishav Loomba: us.
Kadambary Diwan: One page.
Rishav Loomba: Huh?
Vrajesh Jaidev Iyengar: managers.
Rishav Loomba: Uh,
Vrajesh Jaidev Iyengar: hand over
Rishav Loomba: someone
Vrajesh Jaidev Iyengar: access.
Rishav Loomba: They won't wait.
Kadambary Diwan: Open race. Why now? Most thread
Vrajesh Jaidev Iyengar: Take
Rishav Loomba: Frankly,
Vrajesh Jaidev Iyengar: the technical justification.
Rishav Loomba: take that.
Kadambary Diwan: Oh,
Vrajesh Jaidev Iyengar: Okay.
Kadambary Diwan: grouper. to flat level.
Vrajesh Jaidev Iyengar: Scalable. Yes, this is possible with the current AWS account. This will not be an approach that they will give a gohead for security. We have to do this
Kadambary Diwan: Okay.
Vrajesh Jaidev Iyengar: Because they don't want this to be
Kadambary Diwan: Okay. Politically
Vrajesh Jaidev Iyengar: followed
Kadambary Diwan: correct.
Vrajesh Jaidev Iyengar: whether it is secure, safe and all.
Rishav Loomba: So that easily
Vrajesh Jaidev Iyengar: Uh,
Rishav Loomba: process That's
Kadambary Diwan: Good.
Rishav Loomba: it.
Vrajesh Jaidev Iyengar: this is more of a
Kadambary Diwan: Experimentation.
Vrajesh Jaidev Iyengar: That's VRM as a project it will be live maybe current state responsibility. Huh?
Rishav Loomba: Consider
Kadambary Diwan: Yes, obvious. Yes, I agree.
Vrajesh Jaidev Iyengar: Anyway, as
Kadambary Diwan: cameras.
Vrajesh Jaidev Iyengar: a through retention and churn reduction. I'll just join that.
Kadambary Diwan: Take recording.
Rishav Loomba: Yeah,
Kadambary Diwan: Secondal
Rishav Loomba: transcript transcript.




Transcription ended after 00:29:22


This editable transcript was computer generated and might contain errors. People can also change the text after it was created.
