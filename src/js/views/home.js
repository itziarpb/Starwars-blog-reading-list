import React,{useEffect, useState}from "react";
import Cards  from "../component/cards";
import CardsPlanets from "../component/cardsPlanets";
import "../../styles/home.css";
import Planets from "../component/planets";

 


export const Home = () => (
	
	<div className="container">
		<h1 className="title mt-5">Characters</h1>
		<Cards />
		<h1 className="title mt-5">Planets</h1>
		<CardsPlanets/>
	</div>
	
);
