import React, { Component } from "react";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer mt-auto py-3">
		<div className="container">
			<div className="row">
				<div className="col-md-6 text-center">
					<p>Copyright © 2021, All Right Reserved </p>
				</div>
				<div className="col-md-6 d-flex float-right">
					<div className="ml-5">
						<div className="ml-4 d-flex justify-content-center text-center">
							<div className="mx-2">Home</div>
							<div className="mx-2">Terms</div>
							<div className="mx-2">Privacy</div>
							<div className="mx-2">Contact</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
);
