import { useState } from "react";

export function useCharacter() {
  const [allCharacters, setAllCharacter] = useState([]);

  const getAllCharacters = () => {
    return fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setAllCharacter(data.results));
  };
  return {
    getAllCharacters,
    allCharacters,
  };
}
