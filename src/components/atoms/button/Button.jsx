import React from "react";
import "./Button.css";

export const Button = ({ title, className, onClick }) => {
	const mainColor = {
		backgroundColor: "#1865AB",
	};
	return (
		<>
			<button
				type="button"
				style={mainColor}
				onClick={onClick}
				className={`w-[432px] py-[3px] text-white font-extralight font-semibold hover:bg-blue-800 hover:scale-105 duration-200 ${className}`}
			>
				{title}
			</button>
		</>
	);
};
