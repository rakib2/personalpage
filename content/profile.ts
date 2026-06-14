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
    "I build AI-ready workflow software for companies that need governed business processes without heavyweight enterprise implementation.",
  bio: "I'm a software engineer and ITSM consultant based in Germany. Originally from Bangladesh, I've spent the last several years helping enterprise teams across Europe design and implement workflow systems.\n\nMy work at Accenture, CGI, and client environments gave me a practical view of how companies actually run processes: incidents, assets, approvals, onboarding, service requests, escalations, and audits.\n\nServiceNow showed me what mature enterprise workflow can look like. Flowlakes is my attempt to make that level of structure more accessible, faster to adopt, and ready for AI agents.",

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
        "Building AI-ready workflow infrastructure for service management, approvals, assets, and business processes.",
      href: "https://flowlakes.com",
      tags: ["founder", "saas", "itsm", "ai-agents"],
    },
    {
      role: "Senior Consultant",
      org: "CGI",
      period: "Oct 2024 — Present",
      blurb:
        "ServiceNow and ITSM consulting for enterprise clients, including architecture, implementation, and delivery.",
      tags: ["servicenow", "itsm", "consulting"],
    },
    {
      role: "Cloud & ITSM Analyst",
      org: "Accenture DACH",
      period: "Dec 2020 — Oct 2024",
      blurb:
        "Worked on ITSM and cloud-service-management initiatives, including a sovereign multi-cloud concept involving European cloud provider STACKIT. The team placed 2nd at Service Management Forum Switzerland.",
      tags: ["cloud", "architecture", "servicenow", "sovereign-cloud"],
    },
    {
      role: "IT Business Relationship Manager",
      org: "PepsiCo",
      period: "Sep 2019 — Aug 2020",
      blurb:
        "Connected IT and business stakeholders across delivery, vendor coordination, and technology rollout.",
      tags: ["it", "stakeholder-management", "delivery"],
    },
  ] as Experience[],

  // ── Videos ─────────────────────────────────────────────────
  videos: [] as Video[],
} as const;

export type Profile = typeof profile;
