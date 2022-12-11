import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Favorites = () => {
  const { store, actions } = useContext(Context);
  
  const handleRemove = () => {
    console.log(e.name)
    actions.deleteFavorite();
  }

  return (
    <div>
        {store.favorites.map((e, index) => (
                <li key={index} className="d-flex">
                  <Link to={`/${e.type}/${e.id}`}>
                    <div className="">{e.name}</div>
                  </Link>
                  <i
                    className="fa fa-solid fa-trash"
                    onClick={() =>handleRemove(e.name)}
                  ></i>
                </li>
              ))}
    </div>
  );
};

export default Favorites;