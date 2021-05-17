import React from "react";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<img
			className="homeImage"
			src="https://db-api.elestimulo.com/app/uploads/2016/01/Star-Wars-Logo1-1100x572.jpg"
		/>
		<a href="#" className="btn btn-warning font-weight-bold">
			If you see this yellow button, the force power of jedi is working
		</a>
	</div>
);
