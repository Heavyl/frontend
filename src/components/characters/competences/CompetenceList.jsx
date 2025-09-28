
async function getCompetences(characterDocumentId) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/characters/${characterDocumentId}?populate[competences][populate]=*`, {
    headers: {
      Authorization: `Bearer ${process.env.FULL_ACCESS_TOKEN}`,
    },
    cache: "no-store", // pour ne pas garder en cache en dev
  });

  if (!res.ok) throw new Error("Erreur API : " + res.status);

  const data = await res.json();
  return data.data;
}

export default async function CompetenceList() {
  const character = await getCompetences('kbjvb6l1y4p4ak8ijw0kwyui');

    console.log(character.competences);

  return (
    <ul>
      {character.competences.map((comp) => (
        <li key={comp.id}>{comp.name}</li>
      ))}
    </ul>
  );
}