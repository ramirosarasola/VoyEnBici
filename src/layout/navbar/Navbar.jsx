import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import "../../App.css";
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

	//! VIejo
	// Styles
	// const navLinkStyles =
	// 	"flex text-white md:text-black items-center hover:pl-6 hover:border-slate-400 md:hover:px-3 md:hover:border-none pt-5 pl-4 md:pt-3 md:p-3 md:hover:bg-[#ebe7e7] duration-200 md:rounded-xl";

	// const navLinkStylesActive =
	// 	"border-b-4 md:border-b-0 md:bg-[#D9D9D9] active md:border-b-0 md:bg-[#D9D9D9] active";

	//! Nuevo
	const navLinkStyles =
		"flex text-white  items-center hover:pl-6 hover:border-slate-400   pt-5 pl-4  duration-200 ";

	const navLinkStylesActive = "border-b-4";
	return (
		<nav
			className={`flex justify-between items-center px-8 sm:px-16 border-b-[1px] border-black relative h-[15vh]`}
		>
			<Link to={"/home"}>
				<img src={logo} alt="logo-voy-en-bici" className="w-[160px]" />
			</Link>
			<ul
				className={`${
					!toggle
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
						className={`${navLinkStyles} ${
							isActive(location.pathname, "home")
								? `${navLinkStylesActive} `
								: ""
						}`}
					>
						Inicio
					</li>
				</Link>
				<Link
					to={"/contacto"}
					onClick={() => {
						mobile && setToggle(!toggle);
					}}
				>
					<li
						className={`${navLinkStyles} ${
							isActive(location.pathname, "contacto")
								? `${navLinkStylesActive} `
								: ""
						}`}
					>
						Contactanos
					</li>
				</Link>
				<Link
					to={"/mision"}
					onClick={() => {
						mobile && setToggle(!toggle);
					}}
				>
					<li
						className={`${navLinkStyles} ${
							isActive(location.pathname, "mision")
								? `${navLinkStylesActive} `
								: ""
						}`}
					>
						Misión
					</li>
				</Link>
				<Link
					to={"/como-puedo-involucrarme"}
					onClick={() => {
						mobile && setToggle(!toggle);
					}}
				>
					<li
						className={`${navLinkStyles} ${
							isActive(location.pathname, "como-puedo-involucrarme")
								? `${navLinkStylesActive} `
								: ""
						}`}
					>
						¿Como puedo involucrarme?{" "}
					</li>
				</Link>
				<Link
					to={"/logros"}
					onClick={() => {
						mobile && setToggle(!toggle);
					}}
				>
					<li
						className={`${navLinkStyles} ${
							isActive(location.pathname, "logros")
								? `${navLinkStylesActive} `
								: ""
						}`}
					>
						Logros
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

	// // Styles

	// const navLinkStyles =
	// 	"flex text-white md:text-black items-center hover:border-b-4 hover:border-slate-400 pt-5 pl-4 md:pt-3 md:p-3 md:hover:bg-[#ebe7e7] duration-200 md:rounded-xl";

	// const navLinkStylesActive = "md:border-b-0 md:bg-[#D9D9D9] active";

	// const navLinkMobileStyles = "border-b-4 md:border-b-0 md:bg-[#D9D9D9] active";
	// return (
	// 	<nav
	// 		className={`flex justify-between items-center px-8 sm:px-16 border-b-[1px] border-black relative ${toggle}`}
	// 	>
	// 		<Link to={"/home"}>
	// 			<img
	// 				src={logo}
	// 				alt="logo-voy-en-bici"
	// 				className="sm:w-[210px] w-[160px] pt-5 "
	// 			/>
	// 		</Link>
	// 		<ul
	// 			className={`${
	// 				!toggle
	// 					? "hidden custom-md:flex justify-evenly gap-x-8 pt-5 w-full"
	// 					: "absolute top-0 left-0 bg-[#1865AB] w-full h-[80vh] pt-20 z-10 flex flex-col"
	// 			} `}
	// 		>
	// 			<Link
	// 				to={"/home"}
	// 				onClick={() => {
	// 					mobile && setToggle(!toggle);
	// 				}}
	// 				className={`${navLinkStyles} ${
	// 					isActive(location.pathname, "home") ? `${navLinkStylesActive} ` : ""
	// 				}`}
	// 			>
	// 				Inicio
	// 				{/* </p> */}
	// 			</Link>
	// 			<Link
	// 				to={"/contacto"}
	// 				onClick={() => {
	// 					mobile && setToggle(!toggle);
	// 				}}
	// 				className={`${navLinkStyles}  ${
	// 					isActive(location.pathname, "contacto")
	// 						? `${navLinkStylesActive}  `
	// 						: ""
	// 				}`}
	// 			>
	// 				<p className={navLinkMobileStyles}> Contactanos</p>
	// 			</Link>
	// 			<Link
	// 				to={"/mision"}
	// 				onClick={() => {
	// 					mobile && setToggle(!toggle);
	// 				}}
	// 				className={`${navLinkStyles} ${
	// 					isActive(location.pathname, "mision")
	// 						? `${navLinkStylesActive} `
	// 						: ""
	// 				}`}
	// 			>
	// 				{" "}
	// 				Misión{" "}
	// 			</Link>
	// 			<Link
	// 				to={"/como-puedo-involucrarme"}
	// 				onClick={() => {
	// 					mobile && setToggle(!toggle);
	// 				}}
	// 				className={`${navLinkStyles} ${
	// 					isActive(location.pathname, "como-puedo-involucrarme")
	// 						? `${navLinkStylesActive} `
	// 						: ""
	// 				}`}
	// 			>
	// 				{" "}
	// 				¿Como puedo involucrarme?{" "}
	// 			</Link>
	// 			<Link
	// 				to={"/logros"}
	// 				onClick={() => {
	// 					mobile && setToggle(!toggle);
	// 				}}
	// 				className={`${navLinkStyles} ${
	// 					isActive(location.pathname, "logros")
	// 						? `${navLinkStylesActive} `
	// 						: ""
	// 				}`}
	// 			>
	// 				{" "}
	// 				Logros{" "}
	// 			</Link>
	// 		</ul>
	// 		{/* Menu para la navegacion mobile */}
	// 		{!toggle ? (
	// 			<img
	// 				src={menu}
	// 				alt="menu-navegacion"
	// 				className="cursor-pointer sm:flex custom-md:hidden pt-5 z-20"
	// 				onClick={() => {
	// 					setToggle(!toggle);
	// 				}}
	// 			/>
	// 		) : (
	// 			<img
	// 				src={close}
	// 				alt="menu-navegacion"
	// 				className="cursor-pointer  sm:flex custom-md:hidden pt-5 z-20"
	// 				onClick={() => {
	// 					setToggle(!toggle);
	// 				}}
	// 			/>
	// 		)}
	// 	</nav>
	// );
};
