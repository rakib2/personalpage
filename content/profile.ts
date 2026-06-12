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

export type Paper = {
  title: string;
  venue: string; // conference / journal / "Preprint"
  year: number;
  authors: string; // your name in bold is handled in the UI
  href: string; // link to PDF / arXiv / DOI
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
  // Rotating roles in the hero. Add or remove freely.
  roles: ["Founder", "Engineer", "B2B Consultant"],
  location: "Earth",
  // One or two sentences. This is your brand statement.
  tagline:
    "Founder of Flowlakes. Engineer with years of B2B consulting behind me — turning hard technical problems into systems businesses actually run on.",
  // A longer "about" paragraph.
  bio: "I'm the founder of Flowlakes. Before that — and still today — I work as an engineer with years of B2B consulting experience, helping companies design and ship systems that hold up in the real world. I'm most interested in the space where autonomous agents, good interfaces, and real human workflows meet. This site is mission control for everything I build.",

  // ── Status line (the HUD vibe) ─────────────────────────────
  status: "ONLINE",
  statusDetail: "all systems nominal",

  // ── Quick metrics shown on the dashboard strip ─────────────
  // Swap these for anything you want to track publicly.
  metrics: [
    { label: "PAPERS", value: "—" },
    { label: "VIDEOS", value: "—" },
    { label: "FOCUS", value: "AGENTS", progress: 78 },
    { label: "UPTIME", value: "ALWAYS", progress: 100 },
  ] as Metric[],

  // ── Links ──────────────────────────────────────────────────
  socials: [
    { label: "GitHub", href: "https://github.com/", handle: "@rakib" },
    { label: "X", href: "https://x.com/", handle: "@rakib" },
    { label: "LinkedIn", href: "https://linkedin.com/in/", handle: "rakib" },
    { label: "YouTube", href: "https://youtube.com/@", handle: "@rakib" },
    { label: "Flowlakes", href: "https://flowlakes.com", handle: "flowlakes.com" },
    { label: "Email", href: "mailto:rakib@flowlakes.com", handle: "rakib@flowlakes.com" },
  ] as Social[],

  // ── Papers ─────────────────────────────────────────────────
  papers: [
    {
      title: "Replace with your paper title",
      venue: "Preprint",
      year: 2026,
      authors: "Rakib Hasan, Co-Author",
      href: "#",
      tags: ["agents", "systems"],
    },
  ] as Paper[],

  // ── Videos ─────────────────────────────────────────────────
  videos: [
    // Paste the id after youtube.com/watch?v=  →  here
    { title: "Replace with a real video", youtubeId: "dQw4w9WgXcQ", date: "2026" },
  ] as Video[],
} as const;

export type Profile = typeof profile;
