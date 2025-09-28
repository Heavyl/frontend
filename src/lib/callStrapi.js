const STRAPI_URL = process.env.STRAPI_URL;           // ex: http://localhost:1337
const STRAPI_TOKEN = process.env.FULL_ACCESS_TOKEN;  // secret, serveur uniquement

async function callStrapi(path, token = STRAPI_TOKEN, options = {}) {

  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${STRAPI_URL}${path}`, {
    headers,
    ...options,
  });
  
  const json = await res.json().catch(() => null);
  return { ok: res.ok, status: res.status, json };
}

export default callStrapi;