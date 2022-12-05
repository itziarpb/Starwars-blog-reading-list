import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
  const {store, actions}= useContext(Context)
  return (
    <nav className="container navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo.jpg"
          alt="Bootstrap" width="65" height="50"></img>
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <div class="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              Favorites: {store.likes.length}
            </button>
            <ul class="dropdown-menu"></ul>
          </div>
        </Link>
      </div>
    </nav>
  );
};
