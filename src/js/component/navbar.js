
import React, { useContext } from "react";
import { Link, useParams} from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const params = useParams()

  
  const handleRemove = (e) => {
    //store.favorites.filter(items => items.e !=e)

  };
  return (
    <nav className="container navbar navbar-light bg-light mb-3">
 <div class="container-fluid">
      <Link to="/">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo.jpg"
          alt="Bootstrap"
          width="65"
          height="50"
        ></img>
  
      </Link>
      <div className="ml-auto">
        
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            Favorites {store.favorites.length}
          </button>
          <ul className="dropdown-menu">
            {store.favorites.map((e, index) => (
              <li key={index} className="d-flex">
              <Link to={`/character/${e.id}`} >
              <
                div className="">{e.name}
              </div>
           </Link>
                <i className="fa fa-solid fa-trash" onClick={handleRemove}></i>
                
              </li>  
            
            ))}
             
          </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};


