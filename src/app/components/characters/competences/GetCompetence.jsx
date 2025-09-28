async function getCompetence(competenceDocumentId) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/competences/${characterDocumentId}?populate[competences][populate]=*`, {
    headers: {
      Authorization: `Bearer ${process.env.FULL_ACCESS_TOKEN}`,
    },
    cache: "no-store", // pour ne pas garder en cache en dev
  });

  if (!res.ok) throw new Error("Erreur API : " + res.status);

  const data = await res.json();
  return data.data;
}

