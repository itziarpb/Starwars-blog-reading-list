import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Favorites = () => {
  const { store, actions } = useContext(Context);

  const handleRemove = (itemDelete) => {
    console.log(itemDelete);
    actions.deleteFavorite(itemDelete);
  };

  return (
    <div>
      {store.favorites.map((item, index) => (
        <li key={index} className="d-flex">
          <Link to={`/${item.type}/${item.id}`}>
            <div className="">{item.name}</div>
          </Link>
          <i
            className="fa fa-solid fa-trash"
            onClick={() => handleRemove(item)}
          ></i>
        </li>
      ))}
    </div>
  );
};

export default Favorites;
