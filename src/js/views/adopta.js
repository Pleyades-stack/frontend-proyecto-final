import React from "react";
import { Item } from "../component/item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faHeart, faBone, faTag } from "@fortawesome/free-solid-svg-icons";

export const Adopta = () => {
	return (
		<div className="mt-5">
			<div className="text-center mt-5">
				<h1>Adopta</h1>

				<div className="container-fluid input-group mb-3">
					<div className="input-group-prepend">
						<span className="input-group-text" id="inputGroup-sizing-default">
							Buscar
						</span>
					</div>
					<input
						type="text"
						className="form-control"
						aria-label="Buscar"
						aria-describedby="inputGroup-sizing-default"
					/>
				</div>
			</div>
			<div className="">
				<div className="row">
					<div className="col-md-3">
						<div className="card text-left mt-5 m-2">
							<img
								className="img-fluid"
								src="https://user-images.githubusercontent.com/84352630/132062239-3214a9ea-5fb4-4ce5-91a2-03705bfae467.png"
							/>
							<div className="card-body">
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faTag} /> <p className="ml-2 card-title">Nombre: Firulai </p>
								</div>
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faBone} /> <p className="ml-2 card-title">Sexo: M </p>
								</div>
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
									<h5 className="ml-2 card-title">Caracas, Venezuela </h5>
								</div>
								<button
									className="btn btn-info m-1  btn-md"
									style={{ backgroundColor: "rgb(54,160,164)" }}>
									Adoptar
								</button>
								<button
									className="btn btn-info m-1  btn-md"
									style={{ backgroundColor: "rgb(54,160,164)" }}>
									<FontAwesomeIcon icon={faHeart} />
								</button>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card text-left mt-5 m-2">
							<img
								className="img-fluid"
								src="https://user-images.githubusercontent.com/84352630/132062252-e948a748-d3f3-43e6-a1b5-f01e26246e83.png"
							/>
							<div className="card-body">
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faTag} /> <p className="ml-2 card-title">Nombre: Cometa </p>
								</div>
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faBone} /> <p className="ml-2 card-title">Sexo: M </p>
								</div>
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
									<h5 className="ml-2 card-title">Maracaibo, Venezuela </h5>
								</div>
								<button
									className="btn btn-info m-1  btn-md"
									style={{ backgroundColor: "rgb(54,160,164)" }}>
									Adoptar
								</button>
								<button
									className="btn btn-info m-1  btn-md"
									style={{ backgroundColor: "rgb(54,160,164)" }}>
									<FontAwesomeIcon icon={faHeart} />
								</button>
							</div>
						</div>
					</div>{" "}
					<div className="col-md-3">
						<div className="card text-left mt-5 m-2">
							<img
								className="img-fluid"
								src="https://user-images.githubusercontent.com/84352630/132062255-79deab2a-bac6-402b-bd12-7cec6202568b.png"
							/>
							<div className="card-body">
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faTag} /> <p className="ml-2 card-title">Nombre: Chispa </p>
								</div>
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faBone} /> <p className="ml-2 card-title">Sexo: H </p>
								</div>
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
									<h5 className="ml-2 card-title">Maturin, Venezuela </h5>
								</div>
								<button
									className="btn btn-info m-1  btn-md"
									style={{ backgroundColor: "rgb(54,160,164)" }}>
									Adoptar
								</button>
								<button
									className="btn btn-info m-1  btn-md"
									style={{ backgroundColor: "rgb(54,160,164)" }}>
									<FontAwesomeIcon icon={faHeart} />
								</button>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card text-left mt-5 m-2">
							<img
								className="img-fluid"
								src="https://user-images.githubusercontent.com/84352630/132062262-2a80043d-68fb-48ae-be79-dc93b91fa457.png"
							/>
							<div className="card-body">
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faTag} /> <p className="ml-2 card-title">Nombre: Poker </p>
								</div>
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faBone} /> <p className="ml-2 card-title">Sexo: M </p>
								</div>
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
									<h5 className="ml-2 card-title">Barquisimeto, Venezuela </h5>
								</div>
								<button
									className="btn btn-info m-1  btn-md"
									style={{ backgroundColor: "rgb(54,160,164)" }}>
									Adoptar
								</button>
								<button
									className="btn btn-info m-1  btn-md"
									style={{ backgroundColor: "rgb(54,160,164)" }}>
									<FontAwesomeIcon icon={faHeart} />
								</button>
							</div>
						</div>
					</div>{" "}
					<div className="col-md-3">
						<div className="card text-left mt-5 m-2">
							<img
								className="img-fluid"
								src="https://user-images.githubusercontent.com/84352630/132062267-2729ee38-9d6c-4441-9ed9-2d2ce1006fdb.png"
							/>
							<div className="card-body">
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faTag} /> <p className="ml-2 card-title">Nombre: Ehiber </p>
								</div>
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faBone} /> <p className="ml-2 card-title">Sexo: H </p>
								</div>
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
									<h5 className="ml-2 card-title">Merida, Venezuela </h5>
								</div>
								<button
									className="btn btn-info m-1  btn-md"
									style={{ backgroundColor: "rgb(54,160,164)" }}>
									Adoptar
								</button>
								<button
									className="btn btn-info m-1  btn-md"
									style={{ backgroundColor: "rgb(54,160,164)" }}>
									<FontAwesomeIcon icon={faHeart} />
								</button>
							</div>
						</div>
					</div>{" "}
					<div className="col-md-3">
						<div className="card text-left mt-5 m-2">
							<img
								className="img-fluid"
								src="https://user-images.githubusercontent.com/84352630/132062275-061d34d9-9b16-4b05-a5a9-0e52be38a311.png"
							/>
							<div className="card-body">
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faTag} /> <p className="ml-2 card-title">Nombre: Neron </p>
								</div>
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faBone} /> <p className="ml-2 card-title">Sexo: M </p>
								</div>
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
									<h5 className="ml-2 card-title">Caracas, Venezuela </h5>
								</div>
								<button
									className="btn btn-info m-1  btn-md"
									style={{ backgroundColor: "rgb(54,160,164)" }}>
									Adoptar
								</button>
								<button
									className="btn btn-info m-1  btn-md"
									style={{ backgroundColor: "rgb(54,160,164)" }}>
									<FontAwesomeIcon icon={faHeart} />
								</button>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card text-left mt-5 m-2">
							<img
								className="img-fluid"
								src="https://user-images.githubusercontent.com/84352630/132062280-43b8f68f-d899-4394-afea-e357321bed56.png"
							/>
							<div className="card-body">
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faTag} /> <p className="ml-2 card-title">Nombre: Rayo </p>
								</div>
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faBone} /> <p className="ml-2 card-title">Sexo: M </p>
								</div>
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
									<h5 className="ml-2 card-title">Barcelona, Venezuela </h5>
								</div>
								<button
									className="btn btn-info m-1  btn-md"
									style={{ backgroundColor: "rgb(54,160,164)" }}>
									Adoptar
								</button>
								<button
									className="btn btn-info m-1  btn-md"
									style={{ backgroundColor: "rgb(54,160,164)" }}>
									<FontAwesomeIcon icon={faHeart} />
								</button>
							</div>
						</div>
					</div>{" "}
					<div className="col-md-3">
						<div className="card text-left mt-5 m-2">
							<img
								className="img-fluid"
								src="https://user-images.githubusercontent.com/84352630/132062289-037970ea-e49f-41c7-9bea-c4563ab6eecb.png"
							/>
							<div className="card-body">
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faTag} /> <p className="ml-2 card-title">Nombre: Luna </p>
								</div>
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faBone} /> <p className="ml-2 card-title">Sexo: H </p>
								</div>
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
									<h5 className="ml-2 card-title">Caracas, Venezuela </h5>
								</div>
								<button
									className="btn btn-info m-1  btn-md"
									style={{ backgroundColor: "rgb(54,160,164)" }}>
									Adoptar
								</button>
								<button
									className="btn btn-info m-1  btn-md"
									style={{ backgroundColor: "rgb(54,160,164)" }}>
									<FontAwesomeIcon icon={faHeart} />
								</button>
							</div>
						</div>
					</div>{" "}
					<div className="col-md-3">
						<div className="card text-left mt-5 m-2">
							<img
								className="img-fluid"
								src="https://user-images.githubusercontent.com/84352630/132062295-91196c91-cd74-4236-8683-a20a95aad1b2.png"
							/>
							<div className="card-body">
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faTag} /> <p className="ml-2 card-title">Nombre: Pecas </p>
								</div>
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faBone} /> <p className="ml-2 card-title">Sexo: H </p>
								</div>
								<div className="d-flex mt-3 ">
									<FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
									<h5 className="ml-2 card-title">Margarita, Venezuela </h5>
								</div>
								<button
									className="btn btn-info m-1  btn-md"
									style={{ backgroundColor: "rgb(54,160,164)" }}>
									Adoptar
								</button>
								<button
									className="btn btn-info m-1  btn-md"
									style={{ backgroundColor: "rgb(54,160,164)" }}>
									<FontAwesomeIcon icon={faHeart} />
								</button>
							</div>
						</div>
					</div>{" "}
				</div>
			</div>
		</div>
	);
};
