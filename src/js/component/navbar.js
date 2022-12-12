import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Favorites from "./favorites";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="container navbar navbar-light bg-light mb-3">
      <div className="container-fluid">
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
            Favorite  {store.favorites.length }
            </button>
            <ul className="dropdown-menu ">
               { (store.favorites.length ) == 0 ? " (Empty) " : " "  }
              <Favorites />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};


