import { NextResponse } from "next/server";

/**
 * LAYER 3 — OpenClaw agent endpoint.
 *
 * This is the brain. Right now it's a health stub. To bring it online:
 *
 *   import Anthropic from "@anthropic-ai/sdk";
 *   const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
 *
 *   export async function POST(req: Request) {
 *     const { messages } = await req.json();
 *     // Define your tools (read calendar, search email, query db) and run
 *     // the tool-use loop with model "claude-opus-4-8", streaming the result.
 *   }
 *
 * Keep secrets in .env.local (ANTHROPIC_API_KEY). Gate behind auth before
 * exposing any tool that touches private data.
 */

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    name: "openclaw",
    status: "offline",
    layer: 3,
    message: "Agent endpoint scaffold. Wire the Claude tool-use loop here.",
  });
}
