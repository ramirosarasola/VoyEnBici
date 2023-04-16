import React from "react";

export const ContainerPage = ({ children }) => {
	return (
		<div className="w-full py-10 " data-aos="fade-left">
			{children}
		</div>
	);
};
