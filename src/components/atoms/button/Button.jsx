import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

export const Button = ({ title, className, onClick, botonColor }) => {
	const mainColor = {
		backgroundColor: "#1865AB",
	};

	const navigate = useNavigate();

	const navigateTo = () => {
		console.log("hola");
		navigate("/contacto");
	};
	return (
		<>
			<button
				type="button"
				// style={mainColor}
				onClick={onClick ? onClick : navigateTo}
				// onClick={navigateTo}
				className={`font-semibold w-[280px] xl:w-[432px] py-[5px] hover:scale-105 duration-200 mx-auto text-center  rounded-md   p-3  cursor-pointer transition-all ${className} ${
					botonColor
						? botonColor
						: "bg-[#1865AB] text-white  hover:bg-[#12518b]"
				}`}
			>
				{title}
			</button>
		</>
	);
};
