import React from "react";

  
  const Cards =(props)=>{

    return (
   <div className="card row" >
    
    <div className="col-12 col-md-3">
        
  <img src={props.url} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p  className={props.uid}></p>
    <p className="card-text"></p>
    <a href="#" className="btn btn-primary">Learn More!</a>
    <a href="#" className="btn btn-primary"></a>
    </div>
    </div>
  
</div>


    )


}

export default Cards




