import React from "react";
import "../../styles/info.scss";

export const Info = () => (
	<div>
		<div className="texto-info text-center">
			<h2 className="mt-5 font-weight-bold ">¿Como funciona?</h2>
			<hr className="container rounded" />
			<h4 className="container font-weight-bold">1. Crea un perfil de tu mascota:</h4>
			<div className="container d-flex flex-column flex-lg-row align-items-sm-center">
				<div>
					<p className="texto-todos">
						Si ya estas registrado crea del de cada perro llenando el formulario que encontraras en tu
						perfil. En tu perfil de usuario podrás:
					</p>
					<ul className="texto-todos text-left">
						<li>Agregar y editar el perfil de los perros </li>
						<li>Dar de baja al perfil de los perros que ya fueron adoptados</li>
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
			<h4 className="container font-weight-bold">2. Revisa los perfiles de las personas interesadas</h4>
			<div className="container d-flex flex-column flex-lg-row  ">
				<div>
					<img
						className="ml-3 mr-2 imagen-todas rounded "
						src="https://user-images.githubusercontent.com/84352630/131914963-c283629c-62cc-467e-b686-44e6202886af.png"
					/>
				</div>

				<div className="ml-2">
					<p className="texto-todos">
						Encontrar un nuevo hogar para un perro es una gran decisión una gran decisión, por eso revisa
						detenidamente el perfil de los solicitantes y realiza las preguntas correspondientes para
						garantizar que es el adecuado para el perro.
					</p>
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
						aDOGta le brinda un acuerdo de adopción personalizado que usted y su adoptante pueden firmar en
						línea antes de la entrega del perro , para finalizar el proceso dale de baja al perfil del
						animal ingresando en tu perfil para publicarlo como Adoptado.
					</p>
				</div>
			</div>
			<hr className="container rounded" />
		</div>
	</div>
);
