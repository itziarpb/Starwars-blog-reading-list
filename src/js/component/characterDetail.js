import React, { useState, useContext, useEffect } from "react";
import img800x600 from "../../img/800x600.png";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const CharacterDetail = (props) => {
    const params = useParams()

    const [details, setDetails]= useState ("")

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/people/${params.theid}`)
		.then((response) => {
		  console.log(response.ok);
		  return response.json()
		  .then((response) => {
            setDetails(response.result);
		  });
		});
	  }, []);

     
    return(
        <div className="Container">
        
            <div className="row ">
            <img src={img800x600} className="col-md-6" alt="..." />
            <div className="col-12 col-md-6">
                    { details ? 
                    <div>
                    <h2> {details.properties.name}</h2>
                    <div> <ul>
                        <li>Description: {details.description }</li>
                        <li>Gender: {details.properties.gender}</li>
                        <li>Height: {details.properties.height}</li>
                        <li>Hair Color: {details.properties.hair_color}</li>
                        <li>Skin Color :{details.properties.skin_color}</li>
                        <li>Eye Color: {details.properties.eye_color} </li>
                        <li>Birth Year: {details.properties.birth_year}</li>
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
export default CharacterDetail;