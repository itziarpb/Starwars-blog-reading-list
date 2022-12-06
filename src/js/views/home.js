import React,{useEffect, useState}from "react";
import Cards  from "../component/cards";
import "../../styles/home.css";

 


export const Home = () => (
	
	<div className="container">
		<h1 className="title mt-5">Characters</h1>
		<Cards />
		<h1 className="title mt-5">Planet</h1>
	
	</div>
	
);
