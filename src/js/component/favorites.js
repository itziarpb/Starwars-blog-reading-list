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
    
    <div className="col-12 " >
      {store.favorites.map((item, index) => (
      
          <li key={index} className="d-flex" >
         <div className="col-9"> <Link to={`/${item.type}/${item.id}`}>
            <div className="">{item.name}</div>
          </Link>
          </div>
          <div className="col-3">
          <i
           onClick={() => handleRemove(item)}
           className="fas fa-trash float-center"
          > 
          </i>  
           </div>
        </li>
      ))}  
    </div>
  );
};

export default Favorites;