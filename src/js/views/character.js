import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import CharacterDetail from "../component/characterDetail";

export const Character = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();


	return (
		<div className="container jumbotron ">
			<h1>Character: {params.theid} </h1>
		<CharacterDetail />
		</div>
	);
};

Character.propTypes = {
	match: PropTypes.object
};
