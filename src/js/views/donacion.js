import React from "react";
import { Item } from "../component/item";

export const Donacion = () => (
	<div className="text-center mt-5">
		{/* <h1>Donacion</h1> */}
		<div className="m-3 rounded border border-info">
			<h3>Gracias por el apoyo!</h3>
			<img className="ml-3 dog-yellow rounded " src="https://via.placeholder.com/150" />
			<p>Porfavor complete su donacion abajo</p>

			<div className="table-responsive">
				<table className="container table table-bordered">
					<thead className="thead-primary bg-info">
						<tr>
							<th scope="col">Escoja su donacion</th>

							<th scope="col">Monto</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">
								{" "}
								<input type="radio" id="" name="" value="" />
								<label htmlFor="" className="ml-2">
									1 pack perrarina
								</label>
							</th>
							<td>$10</td>
						</tr>
						<tr>
							<th scope="row">
								{" "}
								<input type="radio" id="" name="" value="" />
								<label htmlFor="" className="ml-2">
									5 pack perrarina
								</label>
							</th>
							<td>$50</td>
						</tr>
						<tr>
							<th scope="row">
								{" "}
								<input type="radio" id="" name="" value="" />
								<label htmlFor="" className="ml-2">
									10 pack perrarina
								</label>
							</th>
							<td>$100</td>
						</tr>
						<tr>
							<th scope="row">
								{" "}
								<input type="radio" id="" name="" value="" />
								<label htmlFor="" className="ml-2">
									15 pack perrarina
								</label>
							</th>
							<td>$150</td>
						</tr>
						<tr>
							<th scope="row">
								{" "}
								<input type="radio" id="" name="" value="" />
								<label htmlFor="" className="ml-2">
									20 pack perrarina
								</label>
							</th>
							<td>$200</td>
						</tr>
					</tbody>
				</table>
				<div className="m-3">
					<h4 className="container bg-info p-2 mt-3">Pago</h4>
					<form>
						<div className="container form-group  d-flex flex-column">
							<div className="m-1 justify-content-center align-items-center">
								<input type="text" className="form-control" id="inputPassword" placeholder="Nombre" />
							</div>
							<div className=" m-1 justify-content-center align-items-center">
								<input type="text" className="form-control" id="inputPassword" placeholder="Apellido" />
							</div>
							<div className="m-1 justify-content-center align-items-center">
								<input type="text" className="form-control" id="inputPassword" placeholder="Correo" />
							</div>
							<div className="m-1 justify-content-center align-items-center">
								<input type="text" className="form-control" id="inputPassword" placeholder="Numero" />
							</div>
							<div className="m-1 justify-content-center align-items-center">
								<input
									type="text"
									className="form-control"
									id="inputPassword"
									placeholder="Codigo Postal"
								/>
							</div>
						</div>
					</form>

					<form className="container">
						<div className="row m-2">
							<div className="col">
								<label>Nombre en la tarjeta</label>
								<input type="text" className="form-control" placeholder="Nombre " />
							</div>
							<div className="col">
								<label>Numero de la tarjeta </label>

								<input type="text" className="form-control" placeholder="XXXX XXXX XXXX XXXX" />
							</div>
						</div>
						<div className="row m-2">
							<div className="col">
								<label>Expiracion</label>

								<input type="text" className="form-control" placeholder="XX/XX" />
							</div>
							<div className="col">
								<label>CVV</label>

								<input type="text" className="form-control" placeholder="XXX" />
							</div>
						</div>
					</form>
					<button className="p2 m-2 btn btn-info">Completar</button>
				</div>
			</div>
		</div>
	</div>
);
