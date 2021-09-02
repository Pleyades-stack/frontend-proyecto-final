import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import Dog from "./../../img/dog.png";
import { useHistory } from "react-router-dom";
export const Login = () => {
	let history = useHistory();
	const { store, actions } = useContext(Context);
	const [registro, setRegistro] = useState(false);
	const [current, setCurrent] = useState(1);
	let active = "btn btn-outline-info active";
	let normal = "btn btn-outline-info";
	const [correo, setCorreo] = useState("");
	const [clave, setclave] = useState("");
	const [nombre, setNombre] = useState("");
	const [apellido, setApellido] = useState("");
	const [sexo, setSexo] = useState("");
	const [telefono, setTelefono] = useState();
	const [ciudad, setCiudad] = useState("");
	const [rrss, setrrss] = useState("");
	const [terminos, setTerminos] = useState(false);
	const [error, setError] = useState(false);
	const handleRegister = async () => {
		let usuario = {
			correo,
			clave,
			nombre,
			apellido,
			sexo,
			telefono,
			ciudad,
			rrss,
			tipo: "usuario"
		};
		await actions.register(usuario);
		history.push("/perfil");
	};
	const handleLogin = async () => {
		let usuario = {
			correo,
			clave
		};
		await actions.login(usuario);
		if (store.token.length > 0) {
			history.push("/perfil");
		} else {
			setError(true);
		}
	};
	return (
		<div className="my-5 loginContainer">
			<div className="row w-75 mt-5 card mx-auto loginCard">
				<div className="text-center d-flex flex-column imagen col-lg-6 col-md-12 justify-content-center">
					<p>Conviertete en un guardian permanente o consigue un hogar para un perro</p>
					<div className="align-self-center w-75">
						<img
							className="w-50"
							src="https://user-images.githubusercontent.com/84352630/131925008-ca7354fa-2767-4651-a6c6-5e1b007b5037.png"
						/>
					</div>
				</div>
				<div className="d-flex flex-column col-lg-6 col-md-12 formulario">
					<div className="btn-group p-5 align-self-end" role="group" aria-label="Basic example">
						<button
							type="button"
							className={registro ? active : normal}
							onClick={() => setRegistro(!registro)}>
							Registro
						</button>
						<button
							type="button"
							className={registro ? normal : active}
							onClick={() => setRegistro(!registro)}>
							Ingreso
						</button>
					</div>
					<div className="my-5">
						{registro ? (
							<h2 className="text-center">Registrate</h2>
						) : (
							<h2 className="text-center">Inicia Sesión</h2>
						)}

						<div className="w-75 mx-auto d-flex flex-column">
							{registro ? (
								<div>
									{current === 1 ? (
										<>
											<div className="form-group">
												<label>Correo Electronico</label>
												<input
													placeholder={correo}
													value={correo}
													onChange={e => setCorreo(e.target.value)}
													type="email"
													className="form-control"
												/>
											</div>
											<div className="form-group">
												<label>Contraseña</label>
												<input
													placeholder={clave}
													value={clave}
													onChange={e => setclave(e.target.value)}
													type="password"
													className="form-control"
												/>
											</div>
											<div className="form-group">
												<label>Nombre</label>
												<input
													placeholder={nombre}
													value={nombre}
													onChange={e => setNombre(e.target.value)}
													type="text"
													className="form-control"
												/>
											</div>
											<div className="form-group">
												<label>Apellido</label>
												<input
													placeholder={apellido}
													value={apellido}
													onChange={e => setApellido(e.target.value)}
													type="text"
													className="form-control"
												/>
											</div>
											<div className="form-group">
												<button
													className="btn btn-info"
													onClick={() => setCurrent(current + 1)}>
													Siguiente
												</button>
											</div>
										</>
									) : (
										<>
											<div className="form-group">
												<label>Sexo</label>
												<select
													onChange={e => setSexo(e.target.value)}
													className="custom-select"
													id="validationCustom04"
													required>
													<option selected disabled value="">
														...
													</option>
													<option value="Hombre">Hombre</option>
													<option value="Mujer">Mujer</option>
													<option value="Otro">Otr@</option>
												</select>
											</div>
											<div className="form-group">
												<label>Telefono</label>
												<input
													placeholder={telefono}
													value={telefono}
													onChange={e => setTelefono(e.target.value)}
													type="number"
													className="form-control"
												/>
											</div>
											<div className="form-group">
												<label>Ciudad</label>
												<input
													placeholder={ciudad}
													value={ciudad}
													onChange={e => setCiudad(e.target.value)}
													type="text"
													className="form-control"
												/>
											</div>
											<div className="form-group">
												<label>Red Social</label>
												<input
													placeholder={rrss}
													value={rrss}
													onChange={e => setrrss(e.target.value)}
													type="text"
													className="form-control"
												/>
											</div>
											<div className="form-group form-check">
												<input
													type="checkbox"
													onClick={() => setTerminos(!terminos)}
													className="form-check-input"
												/>
												<label className="form-check-label">
													He leido y acepto los terminos y condiciones
												</label>
											</div>
											<div className="form-group d-flex">
												<button className="btn btn-info mr-2" onClick={() => setCurrent(1)}>
													Regresar
												</button>
												<button className="btn btn-info" onClick={() => handleRegister()}>
													Registrate
												</button>
											</div>
										</>
									)}
								</div>
							) : (
								<>
									<div className="form-group">
										<label>Correo Electronico</label>
										<input
											type="email"
											value={correo}
											onChange={e => setCorreo(e.target.value)}
											className="form-control"
										/>
									</div>
									<div className="form-group">
										<label>Contraseña</label>
										<input
											type="password"
											value={clave}
											onChange={e => setclave(e.target.value)}
											className="form-control"
										/>
									</div>
									<div className="form-group">
										<button className="btn btn-info" onClick={() => handleLogin()}>
											Ingresa
										</button>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
