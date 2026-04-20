import { promises as fs } from "node:fs";
import path from "node:path";

const DATA_DIR = path.join(process.cwd(), "data");

async function ensureFile(name: string) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const filePath = path.join(DATA_DIR, name);
  try {
    await fs.access(filePath);
  } catch {
    await fs.writeFile(filePath, "[]\n", "utf8");
  }
  return filePath;
}

export async function append<T extends Record<string, unknown>>(
  name: string,
  record: T,
): Promise<T & { id: string; receivedAt: string }> {
  const filePath = await ensureFile(name);
  const raw = await fs.readFile(filePath, "utf8");
  const list: unknown[] = raw.trim() ? JSON.parse(raw) : [];
  const stamped = {
    id: cryptoRandomId(),
    receivedAt: new Date().toISOString(),
    ...record,
  };
  list.push(stamped);
  await fs.writeFile(filePath, JSON.stringify(list, null, 2), "utf8");
  return stamped as T & { id: string; receivedAt: string };
}

function cryptoRandomId(): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(8)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

const buckets = new Map<string, { count: number; resetAt: number }>();
export function rateLimit(key: string, max = 5, windowMs = 60_000) {
  const now = Date.now();
  const b = buckets.get(key);
  if (!b || b.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: max - 1 };
  }
  if (b.count >= max) return { ok: false, remaining: 0, retryAfter: Math.ceil((b.resetAt - now) / 1000) };
  b.count += 1;
  return { ok: true, remaining: max - b.count };
}
