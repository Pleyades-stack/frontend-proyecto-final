import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { Perro } from "../component/Perro.jsx";
import Imagen from "../../img/usuario.jpg";
import { ContactSupportOutlined } from "@material-ui/icons";
export const Perfil = () => {
	const { store, actions } = useContext(Context);
	const [perro, setPerro] = useState(false);
	let history = useHistory();
	let usuario = store.usuario;
	if (store.token.length === 0) {
		history.push("/login");
	}
	useEffect(() => {
		const getPerros = async () => {
			await actions.getPerros();
		};
		getPerros();
	}, []);
	return (
		<div className="mt-5 perfil">
			<div className="row special w-75 m-auto">
				<div className="col-4 py-5 justify-self-center text-center">
					<div className="card h-100">
						<img src={Imagen} className="card-img-top" alt="" />
						<div className="card-body justify-content-around">
							<div>
								<h3>{usuario.nombre}</h3>
								<p>Numero de perros dados en adopcion</p>

								<p>Numero de perros en cuidado</p>
							</div>
							<div>
								<button className="btn btn-secondary">Poner en adopcion</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-8 py-5 mx-auto">
					<p className="text-center">Mis perros</p>
					{store.perrosUsuario === 0 ? (
						<p className="text-center">Aun no tienes ningun perro en adopcion</p>
					) : (
						<div className="row">
							{store.perrosUsuario.map(perro => {
								return <Perro key={perro.id} />;
							})}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
