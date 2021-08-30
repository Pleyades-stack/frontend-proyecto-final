import React from "react";
import { Item } from "../component/item";

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
			<div className="d-flex flex-sm-column flex-md-row flex-lg-row justify-content-center">
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
			</div>
		</div>
	);
};
