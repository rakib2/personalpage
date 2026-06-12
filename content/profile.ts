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
  // ── Identity ───────────────────────────────────────────────
  name: "Rakib Hasan",
  callsign: "RAKIB", // shown in the HUD frame
  // Photo lives in /public. Swap the file to change it.
  photo: "/rakib.jpg",
  // Rotating roles in the hero. Add or remove freely.
  roles: ["Software Engineer", "Builder", "Aspiring Founder"],
  location: "Earth",
  // One or two sentences. This is your brand statement.
  tagline:
    "Software engineer and builder, chasing the founder path. I turn ideas into things that ship — and I'm building Flowlakes to do it at scale.",
  // A longer "about" paragraph.
  bio: "I'm a software engineer and builder with years of B2B consulting experience, helping companies design and ship systems that hold up in the real world. Now I'm building Flowlakes and working toward the founder I want to become. I care about good interfaces, autonomous agents, and the craft of turning a rough idea into something people actually use. This site is mission control for everything I build.",

  // ── Status line (the HUD vibe) ─────────────────────────────
  status: "ONLINE",
  statusDetail: "all systems nominal",

  // ── Quick metrics shown on the dashboard strip ─────────────
  // Swap these for anything you want to track publicly.
  metrics: [
    { label: "FOCUS", value: "SHIPPING", progress: 82 },
    { label: "VENTURE", value: "FLOWLAKES" },
    { label: "VIDEOS", value: "—" },
    { label: "UPTIME", value: "ALWAYS", progress: 100 },
  ] as Metric[],

  // ── Links ──────────────────────────────────────────────────
  socials: [
    { label: "GitHub", href: "https://github.com/", handle: "@rakib" },
    { label: "X", href: "https://x.com/", handle: "@rakib" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rakib99/", handle: "in/rakib99" },
    { label: "YouTube", href: "https://youtube.com/@", handle: "@rakib" },
    { label: "Flowlakes", href: "https://flowlakes.com", handle: "flowlakes.com" },
    { label: "Email", href: "mailto:rakib@flowlakes.com", handle: "rakib@flowlakes.com" },
  ] as Social[],

  // ── Trajectory (LinkedIn-style experience) ─────────────────
  // Most recent first. Edit freely — this replaces "papers".
  experience: [
    {
      role: "Founder",
      org: "Flowlakes",
      period: "Present",
      current: true,
      blurb:
        "Building Flowlakes — turning years of engineering and consulting into a product of my own.",
      href: "https://flowlakes.com",
      tags: ["founder", "product", "0→1"],
    },
    {
      role: "Software Engineer · B2B Consultant",
      org: "Independent",
      period: "Several years",
      blurb:
        "Designed and shipped systems for B2B clients — from architecture to delivery, the kind of work that has to survive contact with real users.",
      tags: ["engineering", "b2b", "delivery"],
    },
    {
      role: "Builder",
      org: "Side projects",
      period: "Always",
      blurb:
        "Always building something. Tools, experiments, and the occasional thing that turns into more.",
      tags: ["builder", "experiments"],
    },
  ] as Experience[],

  // ── Videos ─────────────────────────────────────────────────
  videos: [
    // Paste the id after youtube.com/watch?v=  →  here
    { title: "Replace with a real video", youtubeId: "dQw4w9WgXcQ", date: "2026" },
  ] as Video[],
} as const;

export type Profile = typeof profile;
