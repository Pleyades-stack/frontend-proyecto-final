import React from "react";
import Dog from "./../../img/dog.png";
export const Login = () => (
	<div className="vh-100 mt-5">
		<div className="row w-75 mt-5 h-75 card mx-auto loginForm">
			<div className="text-center flex-column imagen col-6 p-5 h-100 my-auto">
				<p>Conviertete en un guardian permanente o consigue un hogar para un perro</p>
				<div className="flex-fill align-self-center">
					<img className="w-50" src={Dog} />
				</div>
			</div>
		</div>
	</div>
);
