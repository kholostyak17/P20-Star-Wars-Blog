import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Card = props => {
	const { store, actions } = useContext(Context);
	const link = "/".concat(props.type, "/", props.uid);
	const [heartColor, setHeartColor] = useState("text-white");

	useEffect(
		() => {
			if (JSON.parse(localStorage.getItem("favourites")).includes(props.title)) {
				setHeartColor("text-danger");
			} else {
				setHeartColor("text-white");
			}
		},
		[localStorage.getItem("favourites")]
	);

	return (
		<div className="size card text-center text-warning border-warning m-2">
			<img className="cardImage card-img-top" src={props.image} alt="Card image cap" />
			<div className="card-body py-2 px-3">
				<h5 className="">{props.title}</h5>
				<p className="font-weight-lighter">{props.description}</p>
				<div className="d-flex justify-content-between align-items-center m-0 p-0">
					<Link to={link}>
						<a href="#" className="btn btn-warning font-weight-bold text-dark mt-1">
							Learn More
						</a>
					</Link>
					<button className="btn bg-transparent p-0" onClick={() => actions.setFavourites(props.title)}>
						<div className="icon-heart">
							<span className={heartColor.concat(" fav-icon-size")}>❥</span>
						</div>
					</button>
				</div>
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
