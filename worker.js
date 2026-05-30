const REPLICATE_URL = "https://api.replicate.com/v1/models/black-forest-labs/flux-schnell/predictions";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, Prefer",
  "Access-Control-Max-Age": "86400",
};

export default {
  async fetch(request) {
    // OPTIONS als allererstes — vor jedem anderen Check
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: CORS_HEADERS,
      });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: CORS_HEADERS });
    }

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
  },
};
