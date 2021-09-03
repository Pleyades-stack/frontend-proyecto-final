import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Adopta } from "./views/adopta";
import { Info } from "./views/info";
import { Donacion } from "./views/donacion";
import { Perfil } from "./views/perfil.jsx";
import { Login } from "./views/login.jsx";
import { PerroDetails } from "./views/PerroDetails.jsx";
import injectContext from "./store/appContext";

import { Navigationbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navigationbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/adopta">
							<Adopta />
						</Route>
						<Route exact path="/info">
							<Info />
						</Route>
						<Route exact path="/donacion">
							<Donacion />
						</Route>
						<Route exact path="/perfil">
							<Perfil />
						</Route>
						<Route exact path="/perro/:id">
							<PerroDetails />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
