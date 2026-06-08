---
title: "Website Sales Agent KT"
type: meeting
date: 2026-06-08
tags: [meeting, gemini-recording]
gemini_doc_id: 1UA0jzOGllrhNOJANu1iAaLp1VgA57KvTgi4ML1S35TA
---

# Website Sales Agent KT


**Date:** 2026-06-08
**Source:** Gemini recording ([Google Doc](https://docs.google.com/document/d/1UA0jzOGllrhNOJANu1iAaLp1VgA57KvTgi4ML1S35TA/edit))

---

## Summary

﻿📝 Notes
Jan 9, 2026
Website Sales Agent KT
Invited Vrajesh Jaidev Iyengar Nikhil Uday Khadilkar Deekonda Sai Manish Suhas More
Attachments Website Sales Agent KT 
Meeting records Recording 

Summary
Deekonda Sai Manish introduced a tool for converting video into a live avatar, clarifying that it is a subscribed service called Huna with 950 remaining credits, which led Vrajesh Jaidev Iyengar to propose a two-phase project plan to first use current credits and then focus on in-house cost optimization. The team discussed the need for greater control over the knowledge base, data handling, and agreed that guardrails are configured via the underlying LLM. Vrajesh Jaidev Iyengar, along with Deekonda Sai Manish, Suhas More, and Nikhil Uday Khadilkar, discussed the high cost and credit usage of the tool, the challenge of building the avatar's face in-house, and agreed to run an experiment with current credits while Vrajesh Jaidev Iyengar and Suhas More received access to the repository from Deekonda Sai Manish. Suhas More also suggested implementing real-time analysis on the cloud infrastructure, which Nikhil Uday Khadilkar acknowledged but prioritized the development of HQL for the quarter.

Details
Notes Length: Standard
* Avatar and Tool Selection Deekonda Sai Manish introduced a tool that converts video into a live avatar, mentioning that a two-minute video, including silent and speaking segments, is required to create an avatar. They clarified that this is a subscribed service, not free, and they currently have 950 credits left. Vrajesh Jaidev Iyengar and Nikhil Uday Khadilkar discussed the tool, identified as the Huna website or "Aan," and its capacity to use custom voices like 11 Labs, though Deekonda Sai Manish noted the current agent's accent is not Indian.
* Customization and Knowledge Base Deekonda Sai Manish explained that they have internal code for a knowledge base and Retrieval-Augmented Generation (RAG). The current implementation uses a static knowledge base within the agent's persona, which includes general information and URLs. They also stated that for greater control, they need to check with agent support if custom knowledge bases can be used instead of the static one, which would allow for dynamic context based on user speech.
* Project Phases and Implementation Strategy Vrajesh Jaidev Iyengar proposed a two-phase project plan: Phase one involves using the Huna platform as-is with current credits, analyzing the impact with a small percentage of traffic, and stopping the bot once credits are exhausted. Phase two will focus on cost optimization by building these capabilities in-house. Deekonda Sai Manish confirmed they have the code ready for a custom implementation with RAG and 11 Labs integration, though they currently rely solely on the agent for voice and thought generation due to video quality issues with 11 Labs.
* Data Handling and Guardrails The team discussed the need for handling data like a merchant's phone number and tr

---

## Full Notes

﻿📝 Notes
Jan 9, 2026
Website Sales Agent KT
Invited Vrajesh Jaidev Iyengar Nikhil Uday Khadilkar Deekonda Sai Manish Suhas More
Attachments Website Sales Agent KT 
Meeting records Recording 


Summary
Deekonda Sai Manish introduced a tool for converting video into a live avatar, clarifying that it is a subscribed service called Huna with 950 remaining credits, which led Vrajesh Jaidev Iyengar to propose a two-phase project plan to first use current credits and then focus on in-house cost optimization. The team discussed the need for greater control over the knowledge base, data handling, and agreed that guardrails are configured via the underlying LLM. Vrajesh Jaidev Iyengar, along with Deekonda Sai Manish, Suhas More, and Nikhil Uday Khadilkar, discussed the high cost and credit usage of the tool, the challenge of building the avatar's face in-house, and agreed to run an experiment with current credits while Vrajesh Jaidev Iyengar and Suhas More received access to the repository from Deekonda Sai Manish. Suhas More also suggested implementing real-time analysis on the cloud infrastructure, which Nikhil Uday Khadilkar acknowledged but prioritized the development of HQL for the quarter.


Details
Notes Length: Standard
* Avatar and Tool Selection Deekonda Sai Manish introduced a tool that converts video into a live avatar, mentioning that a two-minute video, including silent and speaking segments, is required to create an avatar. They clarified that this is a subscribed service, not free, and they currently have 950 credits left. Vrajesh Jaidev Iyengar and Nikhil Uday Khadilkar discussed the tool, identified as the Huna website or "Aan," and its capacity to use custom voices like 11 Labs, though Deekonda Sai Manish noted the current agent's accent is not Indian.
* Customization and Knowledge Base Deekonda Sai Manish explained that they have internal code for a knowledge base and Retrieval-Augmented Generation (RAG). The current implementation uses a static knowledge base within the agent's persona, which includes general information and URLs. They also stated that for greater control, they need to check with agent support if custom knowledge bases can be used instead of the static one, which would allow for dynamic context based on user speech.
* Project Phases and Implementation Strategy Vrajesh Jaidev Iyengar proposed a two-phase project plan: Phase one involves using the Huna platform as-is with current credits, analyzing the impact with a small percentage of traffic, and stopping the bot once credits are exhausted. Phase two will focus on cost optimization by building these capabilities in-house. Deekonda Sai Manish confirmed they have the code ready for a custom implementation with RAG and 11 Labs integration, though they currently rely solely on the agent for voice and thought generation due to video quality issues with 11 Labs.
* Data Handling and Guardrails The team discussed the need for handling data like a merchant's phone number and triggering workflows. Deekonda Sai Manish mentioned they have added functionality for converting voice to text and saving/analyzing the data, but they have not tested it. They agreed that guardrails for the bot, such as limiting responses to competitive comparisons, are configured within the knowledge base and depend on the underlying LLM.
* Credit Usage and Cost Analysis The discussion shifted to the cost of using the agent, where 1,000 credits equate to 1,000 minutes of avatar speaking time, with a maximum session limit of 20 minutes. Vrajesh Jaidev Iyengar noted that 1,000 credits only provide roughly 500 minutes of conversation time if a session is three minutes long, based on a test where three minutes consumed seven credits. They calculated that servicing 500 people who talk for one minute might yield five additional conversions, leading Vrajesh Jaidev Iyengar to state that they need to determine the Customer Acquisition Cost (CAC) break-even point before proceeding.
* In-House Avatar Development The team discussed the challenge of building the "face part" of the avatar in-house, as the quality of the Hen avatar was praised for not looking robotic. Suhas More and Deekonda Sai Manish suggested exploring internal solutions, possibly using Nvidia, for video generation and lip sync as a direction for research. Vrajesh Jaidev Iyengar proposed a technical deep dive on building Hen capabilities in-house.
* Experimentation and Code Access The team agreed to run an experiment using Deekonda Sai Manish's existing account credits to assess the impact, ensuring the experiment would auto shut down once credits run out. Vrajesh Jaidev Iyengar requested access to Deekonda Sai Manish's personal repo containing the dummy page code, which Suhas More noted was initially a 404 error. Deekonda Sai Manish then updated the team members' access to the repository.
* Cloud Infrastructure and Performance Suhas More shared insights from investigating the cloud infrastructure, specifically around CloudWatch and Coralogix access. They suggested implementing real-time analysis, which is free of cost but has a 15-minute delay in CloudWatch metrics. Nikhil Uday Khadilkar acknowledged the importance of performance but emphasized that HQL is the primary focus for the quarter, suggesting Suhas More create a performance framework within a few days before prioritizing HQL.


Suggested next steps
* Vrajesh Jaidev Iyengar will talk to Hun customer support to find out if they can use 11 Labs voice through an out-of-the-box integration.
* Deekonda Sai Manish will explore using Nvidia's tools with five to ten minutes of proper video to see if they can build the face part in-house.
* Deekonda Sai Manish will give all attendees access to the code base repository.


You should review Gemini's notes to make sure they're accurate. Get tips and learn how Gemini takes notes
Please provide feedback about using Gemini to take notes in a short survey.
