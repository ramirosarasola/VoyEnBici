import React from "react";

export const ContainerCard = ({ children }) => {
	return (
		<div className="h-[250px] w-full p-5 " data-aos="fade-left">
			{children}
		</div>
	);
};
