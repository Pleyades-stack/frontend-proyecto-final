import React from "react";
import "../../styles/info.scss";

export const Info = () => (
	<div>
		<div className="text-center mt-5">
			<h2 className="mt-5 font-weight-bold ">¿Como funciona?</h2>
			<hr className="container rounded" />
			<h4 className="container font-weight-bold">1. Crea un perfil de tu mascota</h4>
			<div className="container d-flex flex-column flex-lg-row align-items-sm-center">
				<div>
					<p className="texto-todos">
						Cree un perfil de mascota en minutos y adminístrelo en su panel de control. Use su tablero para:
					</p>
					<ul className="text-left">
						<li>Edite y agregue a su perfil de mascota</li>
						<li>Revisar las solicitudes de adopción</li>
						<li>Responder a las preguntas de los adoptantes</li>
						<li>Cargar registros de mascotas</li>
						<li>Presentar la documentación de adopción</li>
					</ul>
				</div>

				<img
					className="ml-3 imagen-todas rounded "
					src="https://user-images.githubusercontent.com/84352630/131913669-593054d7-678f-4519-a07b-ed12e90a7702.png"
				/>
			</div>
			<hr className="container rounded" />
		</div>
		<div className="text-center mt-5">
			<h4 className="container font-weight-bold">2. Revisa las aplicaciones</h4>
			<div className="container d-flex flex-column flex-lg-row  ">
				<div>
					<img
						className="ml-3 mr-2 imagen-todas rounded "
						src="https://user-images.githubusercontent.com/84352630/131914963-c283629c-62cc-467e-b686-44e6202886af.png"
					/>
				</div>

				<div className="ml-2">
					<p className="texto-todos">
						Encontrar un nuevo hogar para su mascota puede parecer una gran decisión. Nos aseguraremos de
						que no estés solo
					</p>
					<ul className="text-left">
						<li>Te notificaremos cuando tengas una nueva aplicacion</li>
						<li>
							Si no está 100% seguro de su capacidad para elegir al adoptante adecuado, tenemos una guía
							de selección pregunta por pregunta directamente en la página de la solicitud, para que pueda
							ver qué respuestas son excelentes, cuáles no tan buenas y cuáles pueden requerir preguntas
							de seguimiento
						</li>
					</ul>
				</div>
			</div>
			<hr className="container rounded" />
		</div>
		<div className="text-center mt-5">
			<h4 className="container font-weight-bold">3. Conoce a los adoptantes</h4>
			<div className="container d-flex flex-column flex-lg-row align-items-sm-center">
				<div>
					<p className="texto-todos">
						Después de seleccionar la aplicación, es hora de conocer al adoptante. Le daremos todos los
						consejos que necesita para llevar a cabo una reunión segura y eficaz.
					</p>
				</div>
				<img
					className="ml-3 imagen-todas rounded "
					src="https://user-images.githubusercontent.com/84352630/131915127-b40b1455-709a-4dce-af68-69010e7f547b.png"
				/>
			</div>
			<hr className="container rounded" />
		</div>
		<div className="text-center mt-5">
			<h4 className="container font-weight-bold">4. Finaliza la adopcion</h4>
			<div className="container d-flex flex-column flex-lg-row align-items-sm-center">
				<img
					className="ml-3 imagen-todas rounded "
					src="https://user-images.githubusercontent.com/84352630/131915226-bfae2ac7-8726-4369-9c55-07a7b47a112f.png"
				/>
				<div className="ml-3">
					<p className="mt-2 texto-todos">
						aDOGta.com le brinda un acuerdo de adopción personalizado que usted y su adoptante pueden firmar
						en línea.
					</p>
				</div>
			</div>
			<hr className="container rounded" />
		</div>
	</div>
);
