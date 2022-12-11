import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom";

const CharacterDetail = () => {
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
        { details ?
            <div>
                <div className="row ">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} 
                        className="col-12 col-md-5" alt="..." height="450"/>
                    <div className="col-12 col-md-6 text-center">
                        <h1 className="mt-5">{details.properties.name}</h1>
                        <h4 className="mt-5">{details.description }</h4> 
                    </div> 
                </div>
                <div className="mt-4"> 
                    <hr className="line"/>                
                <div className="row text-center text-danger">
                    <div className="col-md-2">Gender<br/>{details.properties.gender}</div>
                    <div className="col-md-2">Height<br/>{details.properties.height}</div>
                    <div className="col-md-2">Hair Color<br/>{details.properties.hair_color}</div>
                    <div className="col-md-2">Skin Color<br/>{details.properties.skin_color}</div>
                    <div className="col-md-2">Eye Color<br/>{details.properties.eye_color} </div>
                    <div className="col-md-2">Birth Year<br/>{details.properties.birth_year}</div>
                </div>
                </div >                    
            </div>
        :<h5>Cargando........</h5>
        } 
        </div> 
    );
};
export default CharacterDetail;