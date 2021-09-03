import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Item } from "../component/item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

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
			<div className="p-3 m-3 rounded d-flex container-home flex-column ">
				<div className="mt-4">
					<img
						className="logo-home"
						src="https://user-images.githubusercontent.com/84352630/131912033-4bb862c2-328f-43b5-a740-9a6255f567e1.png"
					/>
				</div>
				<div className="mt-3">
					<h2 className="mb-3 titulo-home">¿Quienes somos?</h2>
					<p className="mt-3 info-home">
						aDogta es una comunidad pensada y diseñada para facilitar el proceso de adopción de perros
						rescatados, en ella podrás contactar con Guardianes temporales (refugio o personas) que se dan a
						la tarea buscar hogares definitivos, consigue un compañero que forme parte de tu familia y
						conviértete en un Guardián!
					</p>
					<div className="d-flex justify-content-center mt-5">
						<button
							className="botones-home m-2 btn btn-info"
							style={{ fontWeight: "bold", color: "white" }}>
							Adoptar
						</button>
						<button
							className="botones-home m-2 btn btn-info"
							style={{ fontWeight: "bold", color: "white" }}>
							Dar en adopcion
						</button>
					</div>
				</div>
			</div>
			<div className="mt-4">
				<h3 style={{ fontWeight: "bold", color: "rgb(87,53,22)" }}>Nuestro trabajo en numeros</h3>
				<div className="border border-info rounded d-flex justify-content-center m-5 flex-column flex-md-row flex-lg-row">
					<div className="mx-5 text-stats">
						<p>Adoptados</p>
						<p>1245+</p>
					</div>
					<div className="mx-5 text-stats">
						<p>Clientes</p>
						<p>550+</p>
					</div>
					<div className="mx-5 text-stats">
						<p>Felices</p>
						<p>9999+</p>
					</div>
				</div>
			</div>
			<div>
				<h3 style={{ fontWeight: "bold" }}>Encuentra fotos de tu raza favorita, Ingresa el nombre:</h3>
				<form className="mb-3" onSubmit={submit}>
					<input name="dog breed" value={breed} onChange={e => setBreed(e.target.value)} />
					<button
						className="botones-home m-2 btn btn-info"
						type="submit"
						style={{ fontWeight: "bold", color: "white" }}>
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
					<img
						className="card-img"
						src="https://user-images.githubusercontent.com/84352630/131915595-f803f94a-1481-476e-8e03-1f5230b4c2e7.png"
					/>
					<div className="card-body">
						<button className="btn btn-success">Adoptado</button>
						<div className="d-flex mt-3 ">
							<FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
							<h5 className="ml-2 card-title">Caracas, Venezuela </h5>
						</div>
					</div>
				</div>
				<div className="card text-left mt-5 m-2">
					<img
						className="img-fluid"
						src="https://user-images.githubusercontent.com/84352630/131915900-9f3b5e05-4077-431b-9e81-fb6cc3fdfc23.png"
					/>
					<div className="card-body">
						<button className="btn btn-success">Adoptado</button>
						<div className="d-flex mt-3 ">
							<FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
							<h5 className="ml-2 card-title">Caracas, Venezuela </h5>
						</div>
					</div>
				</div>
				<div className="card text-left mt-5 m-2">
					<img
						className="img-fluid"
						src="https://user-images.githubusercontent.com/84352630/131915993-1fb80dfc-a8fa-451d-82e0-3f4bf7a5c90a.png"
					/>
					<div className="card-body">
						<button className="btn btn-success">Adoptado</button>
						<div className="d-flex mt-3 ">
							<FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
							<h5 className="ml-2 card-title">Caracas, Venezuela </h5>
						</div>
					</div>
				</div>
				<div className="card text-left mt-5 m-2">
					<img
						className="img-fluid"
						src="https://user-images.githubusercontent.com/84352630/131916075-54b25e89-1862-4ed9-93bf-051967463ce4.png"
					/>
					<div className="card-body">
						<button className="btn btn-success">Adoptado</button>
						<div className="d-flex mt-3 ">
							<FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
							<h5 className="ml-2 card-title">Caracas, Venezuela </h5>
						</div>
					</div>
				</div>
				<div className="card text-left mt-5 m-2">
					<img
						className="img-fluid"
						src="https://user-images.githubusercontent.com/84352630/131916147-660ae591-a1d0-4c82-b6b6-a48eb1525199.png"
					/>
					<div className="card-body">
						<button className="btn btn-success">Adoptado</button>
						<div className="d-flex mt-3 ">
							<FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
							<h5 className="ml-2 card-title">Caracas, Venezuela </h5>
						</div>
					</div>
				</div>
			</Carousel>
		</div>
	);
};
