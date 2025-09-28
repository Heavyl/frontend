const NEXT_PUBLIC_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;           // ex: http://localhost:1337
const STRAPI_TOKEN = process.env.FULL_ACCESS_TOKEN;  // secret, serveur uniquement

async function callStrapi(path, options = {}) {
  const res = await fetch(`${NEXT_PUBLIC_STRAPI_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
      "Content-Type": "application/json",
    },
    ...options,
  });
  const json = await res.json().catch(() => null);
  return { ok: res.ok, status: res.status, json };
}

export default callStrapi;