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
				className={`font-semibold w-[432px] py-[5px] mx-auto text-center  rounded-md bg-indigo-600  p-3 text-white  hover:bg-indigo-700 cursor-pointer transition-all ${className}`}
			>
				{title}
			</button>
		</>
	);
};
