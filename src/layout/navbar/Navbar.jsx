import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../App.css";
import { close, logo, menu } from "../../assets";

export const Navbar = () => {
	const [mobile, setMobile] = useState(false);
	const [toggle, setToggle] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleResize = () => {
			window.innerWidth <= 1005 ? setMobile(true) : setMobile(false), setToggle(false);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		console.log(toggle);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const isActive = (pathName, keyword) => {
		const path = pathName.split("/").pop();
		return path === keyword;
	};

	return (
		<nav
			className={`flex justify-between items-center px-8 sm:px-16 border-b-[1px] border-black relative h-[15vh]`}
		>
			<Link to={"/home"}>
				<img
					src={logo}
					alt="logo-voy-en-bici"
					className="sm:w-[210px] w-[160px] pt-5 "
				/>
			</Link>
			<ul
				className={`${
					!toggle
						? "hidden custom-md:flex justify-evenly gap-x-8 pt-5 w-full"
						: "absolute top-[15vh] left-0 bg-[#1865AB] w-full h-[85vh] z-10 flex flex-col text-white"
				} `}
			>
				<Link
					to={"/home"}
					onClick={() => {
						mobile && setToggle(!toggle);
					}}
					className={`nav__link flex items-center p-3 ${
						isActive(location.pathname, "home") ? "active" : ""
					}`}
				>
					{" "}
					Inicio{" "}
				</Link>
				<Link
					to={"/contacto"}
					onClick={() => {
						mobile && setToggle(!toggle);
					}}
					className={`nav__link bg-[#D9D9D9] rounded-lg p-3 ${
						isActive(location.pathname, "contacto") ? "active" : ""
					}`}
				>
					{" "}
					Contactanos{" "}
				</Link>
				<Link
					to={"/mision"}
					onClick={() => {
						mobile && setToggle(!toggle);
					}}
					className={`nav__link flex items-center p-3 ${
						isActive(location.pathname, "mision") ? "active" : ""
					}`}
				>
					{" "}
					Misión{" "}
				</Link>
				<Link
					to={"/como-puedo-involucrarme"}
					onClick={() => {
						mobile && setToggle(!toggle);
					}}
					className={`nav__link flex items-center p-3 ${
						isActive(location.pathname, "como-puedo-involucrarme")
							? "active"
							: ""
					}`}
				>
					{" "}
					¿Como puedo involucrarme?{" "}
				</Link>
				<Link
					to={"/logros"}
					onClick={() => {
						mobile && setToggle(!toggle);
					}}
					className={`nav__link flex items-center p-3 ${
						isActive(location.pathname, "logros") ? "active" : ""
					}`}
				>
					{" "}
					Logros{" "}
				</Link>
			</ul>
			{/* Menu para la navegacion mobile */}
			{!toggle ? (
				<img
					src={menu}
					alt="menu-navegacion"
					className="sm:flex custom-md:hidden pt-5 z-20"
					onClick={() => {
						setToggle(!toggle);
					}}
				/>
			) : (
				<img
					src={close}
					alt="menu-navegacion"
					className="sm:flex custom-md:hidden pt-5 z-20"
					onClick={() => {
						setToggle(!toggle);
					}}
				/>
			)}
		</nav>
	);
};
