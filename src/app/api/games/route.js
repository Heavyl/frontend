import { NextResponse } from "next/server";
import callStrapi from "@/lib/callStrapi";

export async function GET(req) {
  const { ok, status, json } = await callStrapi(`/api/games`);
  if (!ok) return NextResponse.json({ error: json || "Strapi error" }, { status });
  return NextResponse.json(json.data, { status: 200 });
}
