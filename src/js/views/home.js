import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Item } from "../component/item";

export const Home = props => {
	const [breed, setBreed] = useState("");
	const [url, setUrl] = useState([]);

	const submit = e => {
		e.preventDefault();
		getList();
	};

	async function getList() {
		let response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/3`);
		let data = await response.json();
		console.log(data);
		setUrl(data.message);
	}

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};

	return (
		<div className=" mt-5 cont-all text-center">
			<div className="p-3 m-3 rounded d-flex container-home flex-column flex-md-row flex-lg-row">
				<div className="mt-3">
					<h2 className="mb-3">Lorem ipsum</h2>
					<h4 className="mt-3 header-home text-left">Lorem ipsum:</h4>
					<p className="mt-3 info-home">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget enim urna. Curabitur nec
						egestas neque. Etiam efficitur turpis faucibus velit condimentum, eu ultrices massa
						commodo.Pellentesque et malesuada purus. Phasellus blandit in nulla eget consequat. Nullam ac
						urna ante. Praesent ultrices quis dui ut luctus. Vivamus eget condimentum erat.
					</p>
					<div className="d-flex justify-content-center mt-5">
						<button className="m-2 btn btn-info">Adoptar</button>
						<button className="m-2 btn btn-info">Dar en adopcion</button>
					</div>
				</div>
				<div>
					<img className="ml-3 dog-yellow rounded " src="https://via.placeholder.com/150" />
				</div>
			</div>
			<div className="mt-4">
				<h3>Lorem ipsum</h3>
				<div className="border border-primary d-flex justify-content-center m-5 flex-column flex-md-row flex-lg-row">
					<div className="mx-5 text-stats">
						<p>Customers</p>
						<p>99k</p>
					</div>
					<div className="mx-5 text-stats">
						<p>Customers</p>
						<p>99k</p>
					</div>
					<div className="mx-5 text-stats">
						<p>Customers</p>
						<p>99k</p>
					</div>
				</div>
			</div>
			<div>
				<p>Encuentra fotos de tu raza favorita, Ingresa el nombre:</p>
				<form className="mb-3" onSubmit={submit}>
					<input name="dog breed" value={breed} onChange={e => setBreed(e.target.value)} />
					<button className="m-2 btn btn-info" type="submit">
						Buscar
					</button>
				</form>
				<div>
					<img className="m-2 rounded breed-img" src={url[1]} />
					<img className="m-2 rounded breed-img" src={url[2]} />
					<img className="m-2 rounded breed-img" src={url[0]} />
				</div>
			</div>
			<Carousel className="my-5" responsive={responsive} infinite={true}>
				<div className="card text-left mt-5 m-2">
					<img className="card-img" src="https://via.placeholder.com/150" />
					<div className="card-body">
						<h5 className="card-title">Lorem ipsu </h5>
						<p className="card-text">Test text</p>
					</div>
				</div>
				<div className="card text-left mt-5 m-2">
					<img className="img-fluid" src="https://via.placeholder.com/150" />
					<div className="card-body">
						<h5 className="card-title">Lorem ipsu </h5>
						<p className="card-text">Test text</p>
					</div>
				</div>
				<div className="card text-left mt-5 m-2">
					<img className="img-fluid" src="https://via.placeholder.com/150" />
					<div className="card-body">
						<h5 className="card-title">Lorem ipsu </h5>
						<p className="card-text">Test text</p>
					</div>
				</div>
				<div className="card text-left mt-5 m-2">
					<img className="img-fluid" src="https://via.placeholder.com/150" />
					<div className="card-body">
						<h5 className="card-title">Lorem ipsu </h5>
						<p className="card-text">Test text</p>
					</div>
				</div>
				<div className="card text-left mt-5 m-2">
					<img className="img-fluid" src="https://via.placeholder.com/150" />
					<div className="card-body">
						<h5 className="card-title">Lorem ipsu </h5>
						<p className="card-text">Test text</p>
					</div>
				</div>
			</Carousel>
		</div>
	);
};
