---
title: "Why AI Agents Need Business Process Infrastructure"
date: "2026-06-13"
summary: "After years of ServiceNow consulting, I kept seeing the same gap: enterprise processes were structured for humans and platforms, but not yet designed for AI agents to safely understand, navigate, and act across them."
tags: ["flowlakes", "itsm", "ai-agents", "build-in-public"]
featured: true
---

After years of IT service management consulting, I kept seeing the same pattern. Companies had serious business processes: incident management, asset tracking, approvals, onboarding, service requests. These workflows were governed, auditable, and operationally important.

Then AI tools arrived.

The problem was not that enterprise platforms had no structure. They did. In most cases, enterprise platforms had exactly the kind of guardrails enterprises need: records, permissions, approvals, audit trails, state models, and ownership.

The problem was that most AI integrations treated the agent like a chatbot sitting on top of the system, not like a participant inside the process.

## The real problem

Most AI layers were bolted onto existing enterprise systems from the outside. They could summarize a ticket, draft a response, or help a user fill a form. But they could not reliably navigate the full operational context: the request details, related records, workflow state, available transitions, permission boundaries, approval requirements, and downstream systems of record.

That is the missing layer.

An AI agent does not only need access to data. It needs an environment it can safely navigate. It needs to know what it is allowed to inspect, what actions are available, what each action means, when a human must approve, and how to explain its reasoning before anything changes.

Traditional enterprise systems were designed for human operators and platform specialists. Their internal configuration, tables, scripts, and record models may be powerful, but they are not naturally shaped as an interface an LLM can reason through.

Agent-native workflow infrastructure should expose processes differently: structured schemas, explainable workflow states, explicit action definitions, permission-aware tools, human approval checkpoints, and clear links between records, policies, and business context.

The goal is not just logging. Logging is necessary, but it is not sufficient. The real requirement is that an AI agent can understand where it is, what it can do, what it should not do, and when to bring a human into the loop.

## What I built

Flowlakes is my attempt to build workflow infrastructure that is not only usable by humans, but also understandable and navigable by AI agents.

Forms define the data. Tables hold the records. Workflows define states and transitions. Permissions define who — or what — can act at each stage. Approval rules define when a human must stay in control. Audit trails record what happened. Agent-facing interfaces expose the process in a structured, explainable way.

When an AI agent acts inside Flowlakes, it is not guessing from a prompt or scraping context from a UI. It is operating through defined actions, constrained by permissions using role-based access control, grounded in records, and able to explain what it is doing before it does it.

## Why this, why now

Platforms like ServiceNow are powerful, and working with them taught me how serious companies think about process, governance, and operational reliability. But they usually come with enterprise-level licensing, implementation effort, and specialist dependency. That model makes sense for large organisations. It is much harder for smaller companies that still need structure, accountability, and reliable service operations.

AI changes the access model. With the right infrastructure underneath, business users and technical teams should be able to build, evolve, and automate workflows without months of specialist configuration. The platform handles the structure, permissions, auditability, and process logic. The model handles the translation.

The next generation of workflow software will not just manage business processes for humans. It will make those processes understandable, navigable, and governable for AI agents.

That is what I am building. I will document it here as I go.
