import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { JSONPlaceHolder } from "./jsonPlaceHolder.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">


			<div className="container">

				<h3>clase anterior fetch por promesas</h3>
				<p className="fs-3">fetch(url).then().then().catch()</p>
			</div>


			<div className="container">
				<h3>Hoy fetch por asyncronia</h3>
			</div>

			<JSONPlaceHolder />

		</div>
	);
};

export default Home;