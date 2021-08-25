import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navigationbar = props => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	//assigning location variable
	const location = useLocation();

	//destructuring pathname from location
	const { pathname } = location;

	//Javascript split method to get the name of the path in array
	const splitLocation = pathname.split("/");

	return (
		<div>
			<Navbar color="faded" light expand="md" className="navbar m-1">
				<NavbarBrand>
					<Link to="/">Logo</Link>
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mx-5 m-auto" navbar>
						<NavItem>
							<NavLink
								tag={Link}
								exact
								to="/adopta"
								className={splitLocation[1] === "adopta" ? "mx-5 selected" : "mx-5 inactive"}>
								Adopta
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								tag={Link}
								exact
								to="/info"
								className={splitLocation[1] === "info" ? "mx-5 selected" : "mx-5 inactive"}>
								Quienes somos?
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								tag={Link}
								exact
								to="/donacion"
								className={splitLocation[1] === "donacion" ? "mx-5 selected" : "mx-5 inactive"}>
								Contribuye
							</NavLink>
						</NavItem>
					</Nav>
					<NavLink className="pl-0">
						<Link to="/login" className="p-2 login">
							Login
						</Link>
					</NavLink>
				</Collapse>
			</Navbar>
		</div>
	);
};
