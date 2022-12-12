import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PlanetsDetail = () => {
  const params = useParams();

  const [detailsPlanets, setDetailsPlanets] = useState("");

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${params.id}`).then(
      (response) => {
        console.log(response.ok);
        return response.json().then((response) => {
          setDetailsPlanets(response.result);
        });
      }
    );
  }, []);

  return (
    <div className="Container">
      {detailsPlanets ? (
        <div>
          <div className="row text-center">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`}
              alt="..."
              className="col-md-5"
              height="450"
            />
            <div className="col-12 col-md-6 text-center">
              <h1 className="mt-5"> {detailsPlanets.properties.name}</h1>
              <h4 className="mt-5">{detailsPlanets.description}</h4>
            </div>
          </div>
          <div className="mt-4">
            <hr className="line" />
            <div className="row text-center text-danger">
              <div className="col-md-2">
                Population
                <br />
                {detailsPlanets.properties.population}
              </div>
              <div className="col-md-2">
                Climate
                <br />
                {detailsPlanets.properties.climate}
              </div>
              <div className="col-md-2">
                Terrain
                <br />
                {detailsPlanets.properties.terrain}
              </div>
              <div className="col-md-2">
                Gravity
                <br />
                {detailsPlanets.properties.gravity}
              </div>
              <div className="col-md-2">
                Rotation Period
                <br />
                {detailsPlanets.properties.rotation_period}{" "}
              </div>
              <div className="col-md-2">
                Orbital Period
                <br />
                {detailsPlanets.properties.orbital_period}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h5>Cargando........</h5>
      )}
    </div>
  );
};

export default PlanetsDetail;
