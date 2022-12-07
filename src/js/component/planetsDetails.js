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
        
            <div className="row ">
            <img src={img800x600} className="col-md-6" alt="..." />
            <div className="col-12 col-md-6">
                    { detailsPlanets ? 
                    <div>
                    <h2> {detailsPlanets.properties.name}</h2>
                    <div> <ul>
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