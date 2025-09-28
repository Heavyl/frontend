'use client';

import { useEffect, useState } from "react";

function GameList() {

  const [games, setgames] = useState([]);

  useEffect(() => {
   
    async function fetchgames() {
      try {
        const res = await fetch('/api/games');
        const data = await res.json();

        setgames(data) ;
      } catch (err) {
        console.error(err);
      } 
    }

    fetchgames();
  }, []);

  const  GameList =  games.map(game =>(
    <li key={game.id}>{game.name}</li>
  ));

  return (
    <div>
      <ul>{GameList}</ul>
    </div>
  );

}

export default GameList;