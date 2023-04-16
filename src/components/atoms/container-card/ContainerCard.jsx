import React from "react";

export const ContainerCard = ({ children }) => {
	return (
		<div className="w-full mb-10 " data-aos="fade-left">
			{children}
		</div>
	);
};
