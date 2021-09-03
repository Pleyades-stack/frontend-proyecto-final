import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
export const Perro = () => {
	return (
		<div className="card col-lg-4">
			<div className="card-body text-center">
				<h5 className="card-title">Fido</h5>
				<button className="btn btn-outline-success card-link">
					<CheckIcon />
				</button>
				<button className="btn btn-outline-primary card-link">
					<EditIcon />
				</button>
				<button className="btn btn-outline-danger card-link">
					<DeleteIcon />
				</button>
			</div>
		</div>
	);
};
