import React, { useState, useContext } from "react";
import img400x200 from "../../img/400x200.png";
import { Context } from "../store/appContext";


const Products = (props) => {
  const {store, actions} = useContext(Context);

  const handleClick = ()=>{
    actions.addFavorite();
    console.log(likes)
  }

  return (
    <div className="col-12 col-md-4">
      <div className="card">
        <img src={img400x200} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <div className="card-text">{props.gender}</div>
          <div className="card-text">{props.hairColor}</div>
          <div className="card-text">{props.eyeColor}</div>
          <a href="#" className="btn btn-primary">
            Learn More
          </a>
          <a href="#" onClick={handleClick} className="btn btn-primary ms-1">
            like
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
