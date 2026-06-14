/**
 * ───────────────────────────────────────────────────────────────
 *  PROFILE — your single source of truth.
 *  Edit this file to update the entire site. Nothing else needed.
 * ───────────────────────────────────────────────────────────────
 */

export type Social = {
  label: string;
  href: string;
  /** short handle shown in the HUD, e.g. "@rakib" */
  handle?: string;
};

export type Experience = {
  role: string;
  org: string;
  period: string; // e.g. "2024 — Now" or "Present"
  blurb: string;
  href?: string; // link to the company / project
  current?: boolean; // shows a live "ACTIVE" marker
  tags?: string[];
};

export type Video = {
  title: string;
  /** YouTube video id, e.g. "dQw4w9WgXcQ" (the part after v=) */
  youtubeId: string;
  date?: string;
};

export type Metric = {
  label: string;
  value: string;
  /** 0–100, drives the little progress bar. Omit to hide the bar. */
  progress?: number;
};

export const profile = {
  // ── Publication (the main page) ────────────────────────────
  publication: {
    name: "Build Log",
    kicker: "flowlakes",
    tagline:
      "Notes on building Flowlakes — a service-management platform that gives AI agents a governed place to work on real business processes. From ITSM consultant to founder.",
  },

  // ── Identity ───────────────────────────────────────────────
  name: "Rakib Hasan",
  callsign: "RAKIB",
  photo: "/rakib.jpg",
  roles: ["Founder, Flowlakes", "ITSM / ServiceNow Consultant", "Software Engineer"],
  location: "Germany",
  tagline:
    "6 years of ServiceNow consulting taught me what enterprise workflow software gets wrong. Now I'm building Flowlakes — modern, AI-ready service management for companies that need structure without the enterprise price tag.",
  bio: "I'm a software engineer and ITSM consultant. I spent 6–7 years at Accenture and CGI implementing ServiceNow and workflow systems for large enterprises across Europe. That work gave me a clear view of the gap: companies need governed, auditable business processes — incident management, asset tracking, HR onboarding, approvals — but the dominant tools are expensive, slow to implement, and not built for AI. Flowlakes is what I'm building to fix that.",

  // ── Status line ─────────────────────────────────────────────
  status: "ONLINE",
  statusDetail: "all systems nominal",

  // ── Quick metrics ───────────────────────────────────────────
  metrics: [] as Metric[],

  // ── Links ──────────────────────────────────────────────────
  socials: [
    { label: "GitHub", href: "https://github.com/rakib2", handle: "@rakib2" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rakib99/", handle: "in/rakib99" },
    { label: "Flowlakes", href: "https://flowlakes.com", handle: "flowlakes.com" },
    { label: "Email", href: "mailto:rakib@flowlakes.com", handle: "rakib@flowlakes.com" },
  ] as Social[],

  // ── Trajectory ─────────────────────────────────────────────
  experience: [
    {
      role: "Founder",
      org: "Flowlakes",
      period: "2024 — Now",
      current: true,
      blurb:
        "Building Flowlakes — a service-management and workflow platform for companies that need governed business processes without the enterprise price tag. Incident management, asset tracking, approvals, and custom workflows with full audit trails and AI agent support.",
      href: "https://flowlakes.com",
      tags: ["founder", "saas", "itsm", "ai-agents"],
    },
    {
      role: "Senior Consultant",
      org: "CGI",
      period: "Oct 2024 — Present",
      blurb:
        "ServiceNow and ITSM consulting for enterprise clients — architecture, implementation, and delivery.",
      tags: ["servicenow", "itsm", "consulting"],
    },
    {
      role: "Cloud & ITSM Analyst",
      org: "Accenture DACH",
      period: "Dec 2020 — Oct 2024",
      blurb:
        "Helped architect a multi-cloud sovereign solution for portable cloud resources across hyperscalers, including European cloud provider STACKIT. Team placed 2nd at Service Management Forum Switzerland for the sovereign-cloud approach.",
      tags: ["cloud", "architecture", "servicenow", "sovereign-cloud"],
    },
    {
      role: "IT Business Relationship Manager",
      org: "PepsiCo",
      period: "Sep 2019 — Aug 2020",
      blurb:
        "Bridged IT and business stakeholders; managed project delivery, vendor relationships, and technology rollouts.",
      tags: ["it", "stakeholder-management", "delivery"],
    },
  ] as Experience[],

  // ── Videos ─────────────────────────────────────────────────
  videos: [] as Video[],
} as const;

export type Profile = typeof profile;
