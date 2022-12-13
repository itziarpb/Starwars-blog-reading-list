import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const Characters = (props) => {
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
        actions.addFavorite({name: props.name, id: props.id, type: "character"});
      }
    } else {
      actions.addFavorite({name: props.name, id: props.id, type: "character"});
    }
  };
  return (
    <div className="col-12 col-sm-6 col-lg-4 me-4">
      <div className="card ">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`}
          className="card-img-top"
          height="300"
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <div className="card-text">{props.gender}</div>
          <div className="card-text">{props.hairColor}</div>
          <div className="card-text">{props.eyeColor}</div>
          <Link
            to={`/character/${props.id}`}
            className="btn btn-outline-primary "
          >
            Learn More!
          </Link>
          <a
            href="#"
            onClick={handleClick}
            className={store.favorites.filter(item=> item.name == props.name).length ==0 ? "btn btn-outline-warning" : "btn btn-warning"

            }
          >
            <i className="far fa-heart"></i>   
          </a>
        </div>
      </div>
    </div>
  );
};

export default Characters;
