---
title: "Why AI Agents Need Business Process Infrastructure"
date: "2026-06-13"
summary: "After 6 years of ServiceNow consulting I kept seeing the same gap: AI tools wanted to act on enterprise processes, but those processes had no structure for AI to operate in. Flowlakes is my answer."
tags: ["flowlakes", "itsm", "ai-agents", "build-in-public"]
featured: true
---

After six years of ServiceNow consulting — at Accenture, then CGI — I kept seeing the same thing. A company would spend months mapping their incident management or asset tracking workflows into a system. They'd get it working. Then AI tools would arrive and immediately try to act on those same processes.

And they couldn't. Not cleanly. Because the processes had no structure AI could reason about.

Not "no AI integration." More fundamental than that. The workflows existed only as configuration inside ServiceNow, or as tribal knowledge in someone's head, or as a Confluence page nobody updated. There was no governing layer — no audit trail of who approved what, no defined states an AI could transition between, no permission model that said what an agent was allowed to do and what required a human sign-off.

Chatbots tried to paper over this. They'd take a user request, summarize it to a human, and wait. The "AI" was a thin translation layer on top of an email chain. That's not automation. It's a fancy ticketing form.

## The real problem

The assumption baked into most AI tools is that language is the interface. Give the model a prompt, get an action. That works for one-off tasks. It breaks for business processes because business processes are not one-off. They are stateful. They require approvals. They produce records that have to be auditable years later. They involve multiple people with different roles and different permissions.

A process where an AI can approve a purchase request without a trace of who authorized what is not a process any compliance officer would accept. A process where an AI can modify an asset record without the change being logged is not a process any IT manager would trust.

Language models are not the bottleneck anymore. The bottleneck is infrastructure: the governed, structured layer that a process has to exist in before any AI can reliably act on it.

## What I built

Flowlakes is that infrastructure layer. It gives companies a place to build processes — incident management, asset management, HR onboarding, approvals, requests, custom workflows — and it gives AI agents a governed way to participate in those processes.

Concretely: forms define the data. Tables hold the records. Workflows define the states and transitions. Permissions define who (or what) can do what at each stage. Audit trails log everything. Integrations connect to external systems.

When an AI agent acts inside Flowlakes, it is not producing free-form output. It is moving a record through a defined workflow, with the same permission constraints a human user would have, with every action logged. You can reconstruct exactly what happened and why.

This is what enterprise IT has always needed. The difference is that now AI agents are ready to use it — and the value of getting the infrastructure right has multiplied.

## Where it is today

Flowlakes is in pilot at **Beacon Pharmaceuticals PLC** in Bangladesh. Their IT department is validating incident management and asset management workflows for an internal user base of around 500 people. Real workflows. Real data. Real users who need the thing to work.

That pilot is teaching me more than six years of consulting taught me — because it's my product on the line instead of a client's.

## Why this, why now

ServiceNow costs tens of thousands of dollars per year to license and weeks of consultant time to configure. The companies that need workflow infrastructure most — mid-sized enterprises, fast-growing startups — are priced out or scared off by the implementation overhead.

Flowlakes is what I would have recommended to every client who got sticker shock at that number: a modern, AI-ready service-management platform that a small IT team can actually run.

I spent six years learning what these processes need to look like. Now I'm building the tool that should have existed the whole time.
