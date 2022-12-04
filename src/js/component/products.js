import React from "react";
import img400x200 from "../../img/400x200.png";


const Products = (props) => {
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
          <a href="#" className="btn btn-primary ms-1">
            like
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
