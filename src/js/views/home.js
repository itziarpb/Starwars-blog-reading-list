import React from "react";
import CardsCharacters from "../component/cardsCharacters";
import CardsPlanets from "../component/cardsPlanets";
import "../../styles/home.css";

export const Home = () => (
  <div className="container">
    <h1 className="title mt-3 text-danger">Characters</h1>
    <CardsCharacters />
    <h1 className="title mt-3 text-danger">Planets</h1>
    <CardsPlanets />
  </div>
);
