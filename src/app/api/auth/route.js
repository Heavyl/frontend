import { NextResponse } from "next/server";
import callStrapi from "@/app/lib/callStrapi";

export async function POST(req) {
  const { ok, status, json } = await callStrapi(`/api/characters`);
  if (!ok) return NextResponse.json({ error: json || "Strapi error" }, { status });
  return NextResponse.json(json.data, { status: 200 });
}
