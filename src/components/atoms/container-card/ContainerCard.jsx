import React from "react";

export const ContainerCard = ({ children }) => {
	return (
		<div className="w-full" data-aos="fade-left">
			{/* <div className="w-full mb-10 "> */}
			{children}
		</div>
	);
};
