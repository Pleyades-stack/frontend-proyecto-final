import React from "react";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<div className="container fluid d-flex container-home">
			<div>
				<h2>Encuentra tu nuevo acompanante</h2>
				<h4 className="float-left header-home">Nuestra mision:</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget enim urna. Curabitur nec
					egestas neque. Etiam efficitur turpis faucibus velit condimentum, eu ultrices massa
					commodo.Pellentesque et malesuada purus. Phasellus blandit in nulla eget consequat. Nullam ac urna
					ante. Praesent ultrices quis dui ut luctus. Vivamus eget condimentum erat.
				</p>
				<button>Adoptar</button>
				<button>Dar en adopcion</button>
			</div>
			<div>
				<img
					className="ml-2 dog-yellow rounded"
					src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
				/>
			</div>
		</div>
	</div>
);
