import React, { useState, useContext, useEffect } from "react";
import img800x600 from "../../img/800x600.png";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const PlanetsDetail = (props) => {
    const params = useParams()

    const [detailsPlanets, setDetailsPlanets]= useState ("")

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/planets/${params.id}`)
		.then((response) => {
		  console.log(response.ok);
		  return response.json()
		  .then((response) => {
            setDetailsPlanets(response.result);
		  });
		});
	  }, []);

     
    return(
        <div className="Container">
        
            <div className="row text-center">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} alt="..." className="col-md-6" 
          height="500" />
            <div className="col-12 col-md-6 text-center">
                    { detailsPlanets ? 
                    <div>
                    <h1> {detailsPlanets.properties.name}</h1>
                    <div>
                       <ul>
                        <li>Description: {detailsPlanets.description }</li>
                        <li>Rotation Period: {detailsPlanets.properties.rotation_period}</li>
                        <li>Orbital Period: {detailsPlanets.properties.orbital_period}</li>
                        <li>Gravity: {detailsPlanets.properties.gravity}</li>
                        <li>Population :{detailsPlanets.properties.population}</li>
                        <li>Climate: {detailsPlanets.properties.climate} </li>
                        <li>Terrain: {detailsPlanets.properties.terrain}</li>
                    </ul>
                    </div>
                    </div>
                    
                        :<h5>Cragando........</h5>

                    } 
            </div>
    
    

    </div>    
     </div>  
        
     
    );
};
export default PlanetsDetail;