import { useEffect } from "react";
import "./character.css";
import { useCharacter } from "../../hooks/useCharacter";

export function Character() {
  const { getAllCharacters, allCharacters } = useCharacter();

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <ul className="contenedor">
      {allCharacters.map((item, index) => (
        <li key={index}>
          <div className="encapsulador">
            <img src={item.image} alt="" />
            <div>
              <h3>{item.name}</h3>
              <p>{item.status}</p>
              <p>{item.origin.name}</p>
              <p>{item.species}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
