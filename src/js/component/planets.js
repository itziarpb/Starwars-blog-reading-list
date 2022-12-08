import React, { useState, useContext } from "react";
import img400x200 from "../../img/400x200.png";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const Planets = (props) => {
  const { store, actions } = useContext(Context);

  const handleClick = () => {
    actions.addFavorite({ name: props.name, id: props.id });
  };
  return (
    <div className="col-12 col-md-4 me-4">
      <div className="card">
        <img src={`https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`} className="card-img-top" 
          height="350" />
        <div className="card-body">
          <h5 className="card-title ">{props.name}</h5>
          <div className="card-text">{props.diameter}</div>
          <div className="card-text">{props.climate}</div>
          <div className="card-text">{props.terrain}</div>
          <Link to={`/planet/${props.id}`}className="btn btn-outline-primary">
              Learn More!
          </Link>
          <a href="#" onClick={handleClick} className="btn btn-outline-warning float-end">
          <i class="far fa-heart"></i>
          </a>

          
        </div>
      </div>
    </div>
  );
};

export default Planets;





////store.favorites.filter(items => items.name !=e)

