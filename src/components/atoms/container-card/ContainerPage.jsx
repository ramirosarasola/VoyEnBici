import React from "react";

export const ContainerPage = ({ children }) => {
	return (
		<div className="w-full" data-aos="fade-left">
			{/* <div className="w-full py-10 "> */}
			{children}
		</div>
	);
};
