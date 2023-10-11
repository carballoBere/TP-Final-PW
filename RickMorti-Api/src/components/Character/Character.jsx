import { useEffect } from "react";
import "./character.css";
import { useCharacter } from "../../hooks/useCharacter";

export function Character() {
  const { getAllCharacters, allCharacters } = useCharacter();

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <div>
      <div className="botones">
        <button>Docs</button>
        <button>About</button>
        <button>Suport Us</button>
      </div>
      <div>
        <div className=" titulo">
          <h1>The Ricky And Morty API</h1>
        </div>
      </div>
      <div className="fondo ">
        <ul className="contenedor">
          {allCharacters.map((item, index) => (
            <li key={index}>
              <div className="encapsulador">
                <img src={item.image} alt="" />
                <div className="texto">
                  <h3>{item.name}</h3>
                  <p>{item.status}</p>
                  <p>{item.origin.name}</p>
                  <p>{item.species}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
