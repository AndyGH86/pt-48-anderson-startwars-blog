import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Personaje from "./component/personaje.jsx";
import Planeta from "./component/planeta.jsx";
import Nave from "./component/nave.jsx";
import Especie from "./component/especie.jsx";
import Personajes from "./component/personajes.jsx";
import Planetas from "./component/planetas.jsx";
import Naves from "./component/naves.jsx";
import Especies from "./component/esepcies.jsx";
import Favorito from "./component/favoritos.js";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/personajes" element={<Personajes />} />
						<Route path="/planetas" element={<Planetas />} />
						<Route path="/naves" element={<Naves/>} />
						<Route path="/especies" element={<Especies/>} />
						<Route path="/favoritos" element={<Favorito/>} />
						<Route path="/personaje/:uid" element={<Personaje />} />
						<Route path="/planeta/:uid" element={<Planeta />} />
						<Route path="/nave/:uid" element={<Nave />} />
						<Route path="/especie/:uid" element={<Especie />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
