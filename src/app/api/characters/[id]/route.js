import { NextResponse } from "next/server";
import callStrapi from "@/lib/callStrapi";

export async function GET(req, { params }) {
  const { id } = params;
  const { ok, status, json } = await callStrapi(`/api/characters/${id}?populate=*`);
  if (!ok) return NextResponse.json({ error: json || "Strapi error" }, { status });
  return NextResponse.json(json.data, { status: 200 });
}

export async function PUT(req, { params }) {
  const { id } = params;
  const body = await req.json();

  // ici tu peux valider / sanitize body avant d'appeler Strapi
  const { ok, status, json } = await callStrapi(`/api/characters/${id}`, {
    method: "PUT",
    body: JSON.stringify({ data: body }),
  });

  if (!ok) return NextResponse.json({ error: json || "Strapi error" }, { status });

  const updated = json.data;

  try {
    // NOTE: dans environnements serverless, garder une connexion persistante est fragile.
    strapi.io.emit("character:update", updated);
    
  } catch (e) {
    console.error("Socket emit failed:", e.message || e);
  }

  return NextResponse.json(updated, { status: 200 });
}