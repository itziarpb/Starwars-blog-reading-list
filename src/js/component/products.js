import React, {useContext}from "react";
import { Context } from "../store/appContext";
import img400x200 from "../../img/400x200.png";


const Products = (props) => {
  const {store, actions}= useContext(Context)

  const click =(e)=>{
      actions.addLikes({name: props.name})
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
          <a href="#" onClick={click} className="btn btn-outline-warning  justify-content-md-end">
          <i class="far fa-heart"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
