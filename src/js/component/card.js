import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Card = props => {
	const { store, actions } = useContext(Context);
	const link = "/".concat(props.type, "/", props.uid);
	return (
		<div className="size card text-center text-warning bg-dark border-warning m-2">
			<img className="cardImage card-img-top" src={props.image} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<Link to={link}>
					<a href="#" className="btn btn-warning font-weight-bold text-dark">
						Learn More
					</a>
				</Link>
				<button className="btn bg-transparent text-danger" onClick={() => actions.setFavourites(props.title)}>
					<i className="fa fa-heart" />
				</button>
			</div>
		</div>
	);
};

export default Card;

Card.propTypes = {
	title: PropTypes.string,
	uid: PropTypes.string,
	type: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string
};

// img source "https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
