import React from "react";
import { Item } from "../component/item";

export const Donacion = () => (
	<div className="text-center mt-5">
		{/* <h1>Donacion</h1> */}
		<div className="m-4 rounded border border-info">
			<h2 className="mt-4 font-weight-bold">Gracias por el apoyo!</h2>
			<img
				className="ml-3  rounded "
				src="data:image/png;base64,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"
			/>
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
					<h4 className="container bg-info p-2 mt-3 font-weight-bold">Pago</h4>
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
