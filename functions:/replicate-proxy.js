/**
 * Cloudflare Pages Function – Replicate CORS Proxy
 * Datei liegt in: functions/replicate-proxy.js
 * Erreichbar unter: https://deinprojekt.pages.dev/replicate-proxy
 */

const REPLICATE_URL = "https://api.replicate.com/v1/models/black-forest-labs/flux-schnell/predictions";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, Prefer",
};

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function onRequestPost({ request }) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return new Response(JSON.stringify({ error: "Missing Authorization header" }), {
      status: 401,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  const body = await request.json();

  const replicateRes = await fetch(REPLICATE_URL, {
    method: "POST",
    headers: {
      Authorization: authHeader,
      "Content-Type": "application/json",
      Prefer: "wait",
    },
    body: JSON.stringify(body),
  });

  const data = await replicateRes.json();

  return new Response(JSON.stringify(data), {
    status: replicateRes.status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}
