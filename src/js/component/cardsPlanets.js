import React, { useState, useEffect, useContext } from "react";
import Planets from "./planets";

const Cards = () => {
  const [planet, setPlanet] = useState([]);
  
  useEffect(() => {
    fetch("//www.swapi.tech/api/planets/").then((response) => {
      console.log(response.ok);
      return response.json().then((response) => {
        setPlanet(response.results);
      });
    });
  }, []);

  return (
    <div className="scroll row">
      <div className="d-flex">
        {planet.map((planets, index) => (
          <Planets name={planets.name} id={planets.uid} key={planets.uid} 
          
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
