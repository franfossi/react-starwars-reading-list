import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Ernesto = props => {
	const { title, data, type } = props;
	const history = useHistory();
	const { store, actions } = useContext(Context);

	const makeColumns = () => {
		return data.map((item, index) => {
			item.id = index;

			return (
				<div key={index} className="col-5">
					<div className="card">
						<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />

						<div className="card-body">
							<h4 className="card-title">{item.name}</h4>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">{item.climate || item.gender || item.model}</li>
							<li className="list-group-item">{item.population || item.height || item.manufacturer}</li>
							<li className="list-group-item">
								{item.terrain || item.birth_year || item.cost_in_credits}
							</li>
						</ul>
						<div className="card-body2">
							<button className="btn btn-primary" onClick={e => history.push(`/${title}/${item.id}`)}>
								{"Ver detalles"}
							</button>
							<a href="#" className="card-link">
								<i
									className={"fas fa-heart"}
									onClick={event => {
										console.log(`${item.name} se añadio a favoritos`);
										actions.AddNewFavorite(item.name, `${type}`);
										console.log(store.favorites);
									}}
								/>
							</a>
						</div>
					</div>
				</div>
			);
		});
	};
	return (
		<div>
			<h2>{title}</h2>
			<div className=" scrolling-wrapper row flex-row wrapper flex-nowrap mt-4 pb-4">{makeColumns()}</div>
		</div>
	);
};

Ernesto.propTypes = {
	title: PropTypes.string,
	data: PropTypes.array,
	type: PropTypes.string
};

/*
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Ernesto = props => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	return (
		<>
			{store.personajes.map(personaje => {
				return (
					<div key={personaje.id} className="card">
						<div className="card-body">
							<h4>{personaje.name}</h4>
						</div>
						<button className="btn btn-success" onClick={e => history.push(`/ernesto/${personaje.id}`)}>
							{"ver detalles"}
						</button>
					</div>
				);
			})}
		</>
	);
};
*/
