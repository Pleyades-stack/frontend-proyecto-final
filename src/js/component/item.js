import React, { useState, useEffect } from "react";
import { Card } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Item = () => {
	return (
		<div className="card m-3" style={{ width: "18rem" }}>
			<img className="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text"> Hello</p>
				<button className="btn btn-info m-1  btn-md" style={{ backgroundColor: "rgb(54,160,164)" }}>
					Adoptar
				</button>
				<button className="btn btn-info m-1  btn-md" style={{ backgroundColor: "rgb(54,160,164)" }}>
					<FontAwesomeIcon icon={faHeart} />
				</button>
			</div>
		</div>
	);
};
