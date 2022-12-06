import React, { useState, useContext } from "react";
import img800x600 from "../../img/800x600.png";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const CharacterDetail = (props) => {


    return(
        <div className="Container">
            <div className="row">
            <img src={img800x600} className="col-6" alt="..." />
            </div>
            <div className="row">

            </div>

        </div>
    );
};
export default CharacterDetail;