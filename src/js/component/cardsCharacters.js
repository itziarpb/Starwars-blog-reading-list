import React, { useState, useEffect, useContext } from "react";
import Characters from "./characters";

const CardsCharacters = () => {
  const [persons, setpersons] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/").then((response) => {
      console.log(response.ok);
      return response.json().then((response) => {
        setpersons(response.results);
      });
    });
  }, []);

  return (
    <div className="scroll row ">
      <div className="d-flex">
        {persons.map((person, index) => (
          <Characters name={person.name} id={person.uid} key={person.uid} />
        ))}
      </div>
    </div>
  );
};

export default CardsCharacters;
