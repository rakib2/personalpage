import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Essays live as markdown files in content/essays/*.md.
 * Drop a new .md file in there with frontmatter and it shows up.
 * Frontmatter: title, date (YYYY-MM-DD), summary, tags[], featured, draft
 */

const ESSAYS_DIR = path.join(process.cwd(), "content", "essays");

export type EssayMeta = {
  slug: string;
  title: string;
  date: string; // ISO YYYY-MM-DD
  summary: string;
  tags: string[];
  featured: boolean;
  draft: boolean;
  readingMinutes: number;
};

export type Essay = EssayMeta & { content: string };

function parseFile(fileName: string): Essay {
  const slug = fileName.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(ESSAYS_DIR, fileName), "utf8");
  const { data, content } = matter(raw);
  const words = content.trim().split(/\s+/).length;

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ? String(data.date).slice(0, 10) : "1970-01-01",
    summary: data.summary ?? "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    featured: Boolean(data.featured),
    draft: Boolean(data.draft),
    readingMinutes: Math.max(1, Math.round(words / 200)),
    content,
  };
}

function allFiles(): string[] {
  if (!fs.existsSync(ESSAYS_DIR)) return [];
  return fs.readdirSync(ESSAYS_DIR).filter((f) => f.endsWith(".md"));
}

/** Published essays, newest first. Drafts excluded. */
export function getAllEssays(): EssayMeta[] {
  return allFiles()
    .map(parseFile)
    .filter((e) => !e.draft)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .map(({ content, ...meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeaturedEssay(): EssayMeta | null {
  const all = getAllEssays();
  return all.find((e) => e.featured) ?? all[0] ?? null;
}

export function getEssay(slug: string): Essay | null {
  const file = `${slug}.md`;
  if (!fs.existsSync(path.join(ESSAYS_DIR, file))) return null;
  return parseFile(file);
}

export function getEssaySlugs(): string[] {
  return allFiles().map((f) => f.replace(/\.md$/, ""));
}

export function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
