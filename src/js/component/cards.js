import React,{useState, useEffect} from "react";
import Products from "./products";

          const Cards =()=>{
            const [characters, setCharacters]=useState([])

            useEffect (()=>{
              fetch('https://www.swapi.tech/api/people/')
              .then(response=>{
                return response.json
                .then (response=>{
                  setCharacters(response.results)
                })
              })

          },[])  
  
    return (
      <div className="card row" >
        <Products  />
    
</div>


    )
  }

  
export default Cards




