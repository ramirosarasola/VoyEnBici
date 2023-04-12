import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
			<ul className="flex justify-center gap-x-8">
				<Link to={"/"}> Inicio </Link>
				<Link to={"/contacto"}> Contactanos </Link>
				<Link to={"/mision"}> Misión </Link>
				<Link to={"/como-puedo-involucrarme"}> ¿Como puedo involucrarme? </Link>
				<Link to={"/logros"}> Logros </Link>
			</ul>
		</>
	);
};
