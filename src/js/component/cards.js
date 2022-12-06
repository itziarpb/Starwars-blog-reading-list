import React, { useState, useEffect , useContext} from "react";
import Products from "./products";

const Cards = () => {
  const [characters, setCharacters] = useState([]);
 
  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/")
    .then((response) => {
      console.log(response.ok);
      return response.json()
      .then((response) => {
        setCharacters(response.results);
      });
    });
  }, []);


  
  return (
 
    <div className="scroll row">
    <div className="d-flex">
      {characters.map((character, index) => (
        <Products 
          name={character.name} id={character.uid} key={character.uid} />
      ))}
      </div>
    </div>

    
    
  );
};

export default Cards;
