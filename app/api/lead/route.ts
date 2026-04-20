import { NextRequest, NextResponse } from "next/server";
import { LeadSchema } from "@/lib/schemas";
import { append, rateLimit } from "@/lib/store";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const rl = rateLimit(`lead:${ip}`, 5, 60_000);
  if (!rl.ok) {
    return NextResponse.json({ error: "Too many requests. Try again shortly." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = LeadSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const k = issue.path.join(".") || "_";
      if (!fieldErrors[k]) fieldErrors[k] = issue.message;
    }
    return NextResponse.json({ error: "Validation failed", fieldErrors }, { status: 400 });
  }

  if (parsed.data.hp) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const { hp: _hp, ...clean } = parsed.data;
  const saved = await append("leads.json", { ...clean, ip, userAgent: req.headers.get("user-agent") || null });

  console.log(`[lead] ${saved.id} ${saved.email} (${saved.business})`);

  return NextResponse.json({ ok: true, id: saved.id }, { status: 201 });
}
