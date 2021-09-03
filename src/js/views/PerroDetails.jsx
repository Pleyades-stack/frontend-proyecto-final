import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export const PerroDetails = () => {
	const { store, actions } = useContext(Context);
	const [cargando, setCargando] = useState("");
	const { id } = useParams();
	let imagen;
	console.log(id);
	useEffect(() => {
		actions.getPerro(id);
		actions.getImagenes(id);
	}, []);
	if (store.imagenes.length > 0) {
		imagen = store.imagenes[0].url_imagen;
		console.log(imagen);
	}
	console.log(store.imagenes);
	return (
		<div className="mt-5 detallePerroContainer">
			<div className="card w-75 h-75 m-auto detallePerro">
				<div className="row w-100 m-auto">
					{imagen ? <img className="col-lg-6 col-md-12 p-0" src={imagen} alt="" /> : <p>cargando</p>}

					<div className="col-lg-6 col-md-12 p-0">
						<div className="p-5">
							{store.perroActual.nombre ? (
								<>
									<h5 className="card-title text-center">{store.perroActual.nombre}</h5>
									<div className="row m-auto py-2 text-center justify-content-between">
										<h3 className="col-lg-6 col-sm-12">Raza</h3>
										<p className="col-lg-6 col-sm-12">{store.perroActual.raza}</p>
									</div>
									<hr />
									<div className="row m-auto py-2 text-center justify-content-between">
										<h3 className="col-lg-6 col-sm-12">Edad</h3>
										<p className="col-lg-6 col-sm-12">{store.perroActual.edad}</p>
									</div>
									<hr />

									<div className="row m-auto py-2 text-center justify-content-between">
										<h3 className="col-lg-6 col-sm-12">Tamaño</h3>
										<p className="col-lg-6 col-sm-12">{store.perroActual.tamaño}</p>
									</div>
									<hr />

									<div className="row m-auto py-2 text-center justify-content-between">
										<h3 className="col-lg-6 col-sm-12">Caracter</h3>
										<p className="col-lg-6 col-sm-12">{store.perroActual.caracter}</p>
									</div>
									<hr />

									<div className="row m-auto py-2 text-center justify-content-between">
										<h3 className="col-lg-6 col-sm-12">Caracteristicas</h3>
										<p className="col-lg-6 col-sm-12">{store.perroActual.raza}</p>
									</div>
									<hr />

									<div className="row m-auto py-2 text-center justify-content-between">
										<h3 className="col-lg-6 col-sm-12">Peso</h3>
										<p className="col-lg-6 col-sm-12">{store.perroActual.peso}</p>
									</div>
								</>
							) : (
								<p>Cargando</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
PerroDetails.propTypes = {
	id: PropTypes.number
};
