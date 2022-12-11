import React, {useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const Planets = (props) => {
  const { store, actions } = useContext(Context);

  const handleClick = () => {
    let counter = 0;
    if (store.favorites.length > 0) {
      store.favorites.map((item, index) => {
        if (item.name == props.name) {
          counter = counter + 1;
        }
      });
      if (counter == 0) {
        actions.addFavorite({ name: props.name, id: props.id, type: "planet" });
      }
    } else {
      actions.addFavorite({ name: props.name, id: props.id, type: "planet" });
    }
  };
  return (
    <div className="col-12 col-sm-6 col-lg-4 me-4">
      <div className="card">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`}
          className="card-img-top"
          height="300"
        />
        <div className="card-body">
          <h5 className="card-title ">{props.name}</h5>
          <div className="card-text">{props.diameter}</div>
          <div className="card-text">{props.climate}</div>
          <div className="card-text">{props.terrain}</div>
          <Link to={`/planet/${props.id}`} className="btn btn-outline-primary">
            Learn More!
          </Link>
          <a
            href="#"
            onClick={handleClick}
            className="btn btn-outline-warning float-end"
          >
            <i className="far fa-heart"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Planets;

////store.favorites.filter(items => items.name !=e)
