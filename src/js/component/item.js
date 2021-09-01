import React, { useState, useEffect } from "react";
import { Card } from "reactstrap";

export const Item = () => {
	return (
		<div className="card m-3" style={{ width: "18rem" }}>
			<img className="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text"> Hello</p>
				<button className="btn btn-info m-1">Adoptar</button>
				<button className="btn btn-info m-1">Favorito</button>
			</div>
		</div>
	);
};
