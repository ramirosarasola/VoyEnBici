import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { close, logo, menu } from "../../assets";
import "./Navbar.css";

export const Navbar = () => {
	const [mobile, setMobile] = useState(false);
	const [toggle, setToggle] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleResize = () => {
			window.innerWidth <= 1005 ? setMobile(true) : setMobile(false),
				setToggle(false);
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
	const navLinkStyles =
		"flex text-white custom-md:text-black items-center hover:pl-6 hover:border-slate-400 custom-md:hover:px-3 custom-md:hover:border-none pt-5 pl-4 custom-md:p-3 duration-200 custom-md:rounded-xl";

	const navLinkStylesActive =
		"border-b-4 custom-md:border-b-0 custom-md:bg-[#D9D9D9] active custom-md:border-b-0 custom-md:bg-[#D9D9D9] active";

	return (
		<nav
			className={`flex w-full justify-between items-center px-8 sm:px-16 border-b-[1px] border-black relative h-[15vh]`}
		>
			<Link to={"/home"}>
				<img src={logo} alt="logo-voy-en-bici" className="w-[160px]" />
			</Link>
			<ul
				className={`${!toggle
						? "hidden custom-md:flex justify-evenly gap-x-8 w-full"
						: "absolute top-[15vh] left-0 bg-[#1865AB] w-full h-[85vh] z-10 flex flex-col text-white"
					} `}
			>
				<Link
					to={"/home"}
					onClick={() => {
						mobile && setToggle(!toggle);
					}}
				>
					<li
						className={`${navLinkStyles} ${isActive(location.pathname, "home")
								? `${navLinkStylesActive} `
								: ""
							}`}
					>
						Inicio
					</li>
				</Link>
				<Link
					to={"/mision"}
					onClick={() => {
						mobile && setToggle(!toggle);
					}}
				>
					<li
						className={`${navLinkStyles} ${isActive(location.pathname, "mision")
								? `${navLinkStylesActive} `
								: ""
							}`}
					>
						Misión
					</li>
				</Link>
				<Link
					to={"/logros"}
					onClick={() => {
						mobile && setToggle(!toggle);
					}}
				>
					<li
						className={`${navLinkStyles} ${isActive(location.pathname, "logros")
								? `${navLinkStylesActive} `
								: ""
							}`}
					>
						Logros
					</li>
				</Link>
				<Link
					to={"/como-puedo-involucrarme"}
					onClick={() => {
						mobile && setToggle(!toggle);
					}}
				>
					<li
						className={`${navLinkStyles} ${isActive(location.pathname, "como-puedo-involucrarme")
								? `${navLinkStylesActive} `
								: ""
							}`}
					>
						¿Como puedo involucrarme?
					</li>
				</Link>
				<Link
					to={"/contacto"}
					onClick={() => {
						mobile && setToggle(!toggle);
					}}
				>
					<li
						className={`${navLinkStyles}`}
					>
						Contactanos
					</li>
				</Link>
				<Link
					to={"/donacion"}
					onClick={() => {
						mobile && setToggle(!toggle);
					}}
				>
					<li
						className={`${navLinkStyles} text-white  border-b-4 custom-md:border-b-0 custom-md:bg-[#1865AB] active`}
						id="dona-button"
					>
						DONA
					</li>
				</Link>
			</ul>
			{/* Menu para la navegacion mobile */}
			{!toggle ? (
				<img
					src={menu}
					alt="menu-navegacion"
					className="cursor-pointer sm:flex custom-md:hidden pt-5 z-20"
					onClick={() => {
						setToggle(!toggle);
					}}
				/>
			) : (
				<img
					src={close}
					alt="menu-navegacion"
					className="cursor-pointer sm:flex custom-md:hidden pt-5 z-20"
					onClick={() => {
						setToggle(!toggle);
					}}
				/>
			)}
		</nav>
	);
}