import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PlanetsDetail from "../component/planetsDetails";


export const Planet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();


	return (
		<div className="jumbotron">
			<h1>Planet: {params.id} </h1>
		<PlanetsDetail/>
		</div>
	);
};

Planet.propTypes = {
	match: PropTypes.object
};
