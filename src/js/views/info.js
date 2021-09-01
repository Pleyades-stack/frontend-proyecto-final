import React from "react";
import "../../styles/info.scss";

export const Info = () => (
	<div>
		<div className="text-center mt-5">
			<h2 className="mt-5 font-weight-bold ">Como funciona?</h2>
			<hr className="container rounded" />
			<h4 className="container font-weight-bold">1. Crea un perfil de tu mascota</h4>
			<div className="container d-flex">
				<div>
					<p className="texto-todos">
						Create a pet profile in minutes and manage it in your dashboard. Use your dashboard to:
					</p>
					<ul className="text-left">
						<li>Edit and add to your pet profile</li>
						<li>Review adopter applications</li>
						<li>Respond to adopter questions</li>
						<li>Upload pet records</li>
						<li>Submit adoption paperwork</li>
					</ul>
				</div>

				<img
					className="ml-3 imagen-todas rounded "
					src="https://rehome.adoptapet.com/img/v2/how-it-works/Step-1.svg"
				/>
			</div>
			<hr className="container rounded" />
		</div>
		<div className="text-center mt-5">
			<h4 className="container font-weight-bold">2. Revisa las aplicaciones</h4>
			<div className="container d-flex">
				<img
					className="ml-3 imagen-todas rounded "
					src="https://rehome.adoptapet.com/img/v2/how-it-works/Step-2.svg"
				/>
				<div>
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
			<div className="container d-flex">
				<div>
					<p className="texto-todos">
						Después de seleccionar la aplicación, es hora de conocer al adoptante. Le daremos todos los
						consejos que necesita para llevar a cabo una reunión segura y eficaz.
					</p>
				</div>
				<img
					className="ml-3 imagen-todas rounded "
					src="https://rehome.adoptapet.com/img/v2/how-it-works/Step-3.svg"
				/>
			</div>
			<hr className="container rounded" />
		</div>
		<div className="text-center mt-5">
			<h4 className="container font-weight-bold">4. Finaliza la adopcion</h4>
			<div className="container d-flex">
				<img
					className="ml-3 imagen-todas rounded "
					src="https://rehome.adoptapet.com/img/v2/how-it-works/Step-4.svg"
				/>
				<div>
					<p className="texto-todos">
						Adopt-a-Pet.com le brinda un acuerdo de adopción personalizado que usted y su adoptante pueden
						firmar en línea.
					</p>
				</div>
			</div>
			<hr className="container rounded" />
		</div>
	</div>
);
