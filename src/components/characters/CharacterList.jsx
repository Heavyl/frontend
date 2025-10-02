'use client';

import { useEffect, useState } from "react";

function CharacterList() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
   
    async function fetchCharacters() {
      try {
        const res = await fetch('/api/characters');
        const data = await res.json();
        
        console.log(data)

        setCharacters(data) ;
      } catch (err) {
        console.error(err);
      } 
    }

    fetchCharacters();
  }, []);

  const  characterList =  characters.map(character =>(
    <li key={character.id}>{character.name}</li>
  ));

  return (
    <div>
      <ul>{characterList}</ul>
    </div>
  );

}

export default CharacterList;