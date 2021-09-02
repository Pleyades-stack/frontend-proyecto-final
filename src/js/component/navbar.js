import React, { useState, useEffect } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navigationbar = props => {
	const [isOpen, setIsOpen] = useState(false);
	const [show, setShow] = useState(false);

	//animacion para controlar el navbar hide
	const showNav = () => {
		if (window.scrollY < 100) {
			setShow(false);
		} else {
			setShow(true);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", showNav);
		return () => {
			window.removeEventListener("scroll", showNav);
		};
	}, []);

	const toggle = () => setIsOpen(!isOpen);

	//asignar una variable al location
	const location = useLocation();

	//destructurar el pathname
	const { pathname } = location;

	//obtener el path para activar el link del navbar en el que esta el usuario
	const splitLocation = pathname.split("/");

	return (
		<div>
			<Navbar color="faded" light expand="md" className={`navbar ${show && "navbar-hide"}`}>
				<NavbarBrand>
					<Link to="/">
						<img
							className="logo"
							src="https://user-images.githubusercontent.com/84352630/131912033-4bb862c2-328f-43b5-a740-9a6255f567e1.png"
						/>
					</Link>
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
								Como funciona?
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
