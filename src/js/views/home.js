import React,{useEffect, useState}from "react";
import Cards  from "../component/cards";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

 

const [characters, setCharacters]=useState([])


/*useEffect (()=>{
  fetch('https://www.swapi.tech/api/people')
    .then(response =()=>{
    return response.json()
    .then(response)=()=>{
        setCharacters(response)
    }
})

},[])
*/
export const Home = () => (
	
	<div className=" text-center mt-5">{
		characters.map=(value, index)=>{
			return <Cards url={value.url} uid={value.uid} title={value.title} />


		}

	}

		
		
		
	</div>
	
);
