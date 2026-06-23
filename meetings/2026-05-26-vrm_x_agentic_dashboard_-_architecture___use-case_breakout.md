---
title: "VRM x Agentic Dashboard - Architecture & Use-Case Breakout"
type: meeting
date: 2026-05-26
tags: [meeting, gemini-recording]
gemini_doc_id: 1WJ3HTh_9dB1gXaISuikwnvul9fv9fk1J8Awc5gKB1Sw
---

# VRM x Agentic Dashboard - Architecture & Use-Case Breakout


**Date:** 2026-05-26
**Source:** Gemini recording ([Google Doc](https://docs.google.com/document/d/1WJ3HTh_9dB1gXaISuikwnvul9fv9fk1J8Awc5gKB1Sw/edit))

---

## Summary

﻿📝 Notes
May 26, 2026
VRM x Agentic Dashboard - Architecture & Use-Case Breakout 
Invited Vrajesh Jaidev Iyengar Dushyant Panda Apoorv S Chaturvedi Raktim Talukdar Tejas Gowda Khilan Haria Rishav Loomba Sagar Agarwal Pratul Gupta Apuarv Sethi Harshil Mathur Anurag Rastogi Prashant Chaudhary Vinay Chopra
Attachments VRM x Agentic Dashboard - Architecture & Use-Case Breakout 
Meeting records Transcript 

Summary
Integration strategies for ticket pipelines and scaling requirements for instant agent deployment were prioritized for implementation.

Pipeline and Context Integration
Maintaining human-centric ticket feeds ensures consistent tracking across communication channels. High-quality customer responses require well-maintained context integration.

System Scaling and Testing
Scaling the instant agent across 130,000 models necessitates rigorous testing to ensure response accuracy. The system requires extensive query validation to handle future load requirements.

Dashboard Implementation Decision
The team decided to use the everything dashboard to manage upcoming offer launches and document storage. This centralized approach streamlines the go-live process for new services.

Rate this Summary: Helpful or Not Helpful

Decisions
ALIGNED
* Offer offers feature launch The offer offers feature is approved for go-live.

We've updated the Decisions section using your feedback.
Let us know what you think: Helpful or Not Helpful

Next steps
* [Tejas Gowda] Request Context Building: Request the creation of background information for query responses by contacting the appropriate individual.
* [The group] Write Queries: Draft 1000 inquiries to test system performance and accuracy over time.
* [The group] Select Daily Queries: Choose 5 inquiries every day to facilitate real time system learning.

Details
* Ticket Pipeline and Context Integration: EX-02 -Brian Chesky Room and Tejas Gowda discussed the necessity of maintaining a feed for tickets in the pipeline to ensure consistent tracking. They agreed that context must be human-centric and well-maintained so that external communication channels, such as WhatsApp, can reference this information to generate appropriate, high-quality responses for the customer.
* Implementation Timeline and Success Metrics: The participants discussed the timeline for getting the system, referred to as the "instant agent," up and running, noting that it is several weeks away from handling the necessary load. They reviewed performance data from the last few days to gauge success and agreed to begin implementation immediately to accelerate the project (00:02:56).
* System Testing and Scaling Requirements: EX-02 -Brian Chesky Room emphasized the importance of scaling the system across 130,000 models to ensure it provides accurate responses in English. To ensure the system passes the test of time, the team is required to write 1,000 queries, with a commitment to test five queries daily to facilitate real-time learning an

---

## Full Notes

﻿📝 Notes
May 26, 2026
VRM x Agentic Dashboard - Architecture & Use-Case Breakout 
Invited Vrajesh Jaidev Iyengar Dushyant Panda Apoorv S Chaturvedi Raktim Talukdar Tejas Gowda Khilan Haria Rishav Loomba Sagar Agarwal Pratul Gupta Apuarv Sethi Harshil Mathur Anurag Rastogi Prashant Chaudhary Vinay Chopra
Attachments VRM x Agentic Dashboard - Architecture & Use-Case Breakout 
Meeting records Transcript 




Summary
Integration strategies for ticket pipelines and scaling requirements for instant agent deployment were prioritized for implementation.

Pipeline and Context Integration
Maintaining human-centric ticket feeds ensures consistent tracking across communication channels. High-quality customer responses require well-maintained context integration.

System Scaling and Testing
Scaling the instant agent across 130,000 models necessitates rigorous testing to ensure response accuracy. The system requires extensive query validation to handle future load requirements.

Dashboard Implementation Decision
The team decided to use the everything dashboard to manage upcoming offer launches and document storage. This centralized approach streamlines the go-live process for new services.


Rate this Summary: Helpful or Not Helpful




Decisions
ALIGNED
* Offer offers feature launch The offer offers feature is approved for go-live.


We've updated the Decisions section using your feedback.
Let us know what you think: Helpful or Not Helpful




Next steps
* [Tejas Gowda] Request Context Building: Request the creation of background information for query responses by contacting the appropriate individual.
* [The group] Write Queries: Draft 1000 inquiries to test system performance and accuracy over time.
* [The group] Select Daily Queries: Choose 5 inquiries every day to facilitate real time system learning.




Details
* Ticket Pipeline and Context Integration: EX-02 -Brian Chesky Room and Tejas Gowda discussed the necessity of maintaining a feed for tickets in the pipeline to ensure consistent tracking. They agreed that context must be human-centric and well-maintained so that external communication channels, such as WhatsApp, can reference this information to generate appropriate, high-quality responses for the customer.
* Implementation Timeline and Success Metrics: The participants discussed the timeline for getting the system, referred to as the "instant agent," up and running, noting that it is several weeks away from handling the necessary load. They reviewed performance data from the last few days to gauge success and agreed to begin implementation immediately to accelerate the project (00:02:56).
* System Testing and Scaling Requirements: EX-02 -Brian Chesky Room emphasized the importance of scaling the system across 130,000 models to ensure it provides accurate responses in English. To ensure the system passes the test of time, the team is required to write 1,000 queries, with a commitment to test five queries daily to facilitate real-time learning and refinement (00:05:56).
* Go-Live Strategy and Dashboard Usage: The team discussed the upcoming launch of offers and noted that they would be moving forward with the process, requiring the assistance of both participants. They planned to use the "everything dashboard" to manage these offers and ensure that all related documents are properly stored (00:05:56).




You should review Gemini's notes to make sure they're accurate. Get tips and learn how Gemini takes notes
How is the quality of these specific notes? Take a short survey to let us know your feedback, including how helpful the notes were for your needs.
📖 Transcript
May 26, 2026
VRM x Agentic Dashboard - Architecture & Use-Case Breakout  - Transcript
00:00:13


EX-02 -Brian Chesky Room: needs to know is that if there's a tickets in the pipeline there has to be a feed to also
Tejas Gowda: Right.
EX-02 -Brian Chesky Room: because
Tejas Gowda: Easy.
EX-02 -Brian Chesky Room: And context is human. By
Tejas Gowda: I'd ask him to build the context for some questions.
EX-02 -Brian Chesky Room: the way, if the context is over here, right? You are not
Tejas Gowda: I want to ensure
EX-02 -Brian Chesky Room: Yeah. If this is we
Tejas Gowda: we can push to keep the table.
EX-02 -Brian Chesky Room: can
Tejas Gowda: Happy customer.
EX-02 -Brian Chesky Room: open this Always keep track.
Tejas Gowda: Yes.
EX-02 -Brian Chesky Room: Yes.
Tejas Gowda: on top of
EX-02 -Brian Chesky Room: So that all of this is
Tejas Gowda: R.
EX-02 -Brian Chesky Room: by
Tejas Gowda: can ask questions to this and answer
EX-02 -Brian Chesky Room: channel supposedly or WhatsApp it can take a reference from this as a context.




00:02:56


EX-02 -Brian Chesky Room: So for
Tejas Gowda: ticket.
EX-02 -Brian Chesky Room: that right I can make what's I think let's
Tejas Gowda: Let's start doing it and see oft
EX-02 -Brian Chesky Room: see. I don't know where that did
Tejas Gowda: There was one more.
EX-02 -Brian Chesky Room: the same as
Tejas Gowda: Did you ask me? What is my success?
EX-02 -Brian Chesky Room: What is I success last few days and then
Tejas Gowda: My success
EX-02 -Brian Chesky Room: follow the kind of responses.
Tejas Gowda: last
EX-02 -Brian Chesky Room: So somewhere we look at our current
Tejas Gowda: Okay. So,
EX-02 -Brian Chesky Room: we
Tejas Gowda: no for us
EX-02 -Brian Chesky Room: has to be like weeks away. So for us to get this up and running and there's more load up.
Tejas Gowda: to get there. Amazing work.
EX-02 -Brian Chesky Room: So instant agent
Tejas Gowda: Let's
EX-02 -Brian Chesky Room: contour
Tejas Gowda: accelerate the
EX-02 -Brian Chesky Room: cont.
Tejas Gowda: It was also ask Rest of the day.




00:05:56


EX-02 -Brian Chesky Room: So I'm saying all of this okay memory what are you using different because Make sure it scales across 130,000 and model to give responses on English. So all the challenges what what we have to do is to ensure the emails very well that this query it should not answer this query should only answer so much. So what at least between Lucant and you folks you folks should write thousand queries that is the only way we will know if it is passing the test of time. Every day we'll pick fiveies at the max that's okay. Those five will keep learning real time. Now is the only parture is simple. It is clear if you get right we are sorted we'll work together on the harness context all put together final response goes to the user expected I should not have exposing that question is up to you. Then you folks can still provide feedback on the input itself. for example. July. Okay. Sounds good. Thank you. Since I have both of you, we are going live with the offer offers. I require both of your help today. The response was like sending Everything dashboard. Okay. So we have these five six around whatever And the document is stored afterwards. for you. You don't even




Transcription ended after 00:15:06


This editable transcript was computer generated and might contain errors. People can also change the text after it was created.

---

## Linked Entities
- [[people/anurag-rastogi]]
- [[people/apoorv-chaturvedi]]
- [[people/apuarv-sethi]]
- [[people/dushyant-panda]]
- [[people/harshil-mathur]]
- [[people/khilan-haria]]
- [[people/prashant-chaudhary]]
- [[people/raktim-talukdar]]
- [[people/rishav-loomba]]
- [[people/sagar-agarwal]]
- [[people/tejas-gowda]]
- [[people/vinay-chopra]]
- [[people/vrajesh-iyengar]]
- [[projects/vrm]]
