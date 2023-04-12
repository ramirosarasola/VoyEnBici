import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../../assets";

export const Navbar = () => {

	const [active, setActive] = useState('');

	return (
		<nav className="flex justify-between items-center px-8 sm:px-16 mt-5 border-b-[1px] border-black">
			<img src={logo} alt="logo-voy-en-bici" className="sm:w-[230px] w-[180px] "/>
			

			<ul className="hidden custom-md:flex justify-evenly gap-x-8 w-full">
				{/* <Link to={"/"}>Inicio </Link> */}
				<Link to={"/contacto"} className="bg-[#D9D9D9] rounded-lg p-3"> Contactanos </Link>
				<Link to={"/mision"} className="flex items-center p-3"> Misión </Link>
				<Link to={"/como-puedo-involucrarme"} className="flex items-center p-3"> ¿Como puedo involucrarme? </Link>
				<Link to={"/logros"} className="flex items-center p-3"> Logros </Link>
			</ul>

			{/* Menu para la navegacion mobile */}
			<img src={menu} alt="menu-navegacion" className="sm:flex custom-md:hidden" />
		</nav>
	);
};
