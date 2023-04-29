import React from "react";
import { Button } from "../button/Button";
import "../../../index.css"

export const Card = ({ homeContent }) => {
	return (
		<div className="grid custom-md:grid-cols-2 lg:items-start relative">
			<div
				className={`sm:px-16 px-6 py-5 gap-10 lg:gap-4 my-auto flex flex-col items-start 2xl:w-[80%] 2xl:m-auto   2xl:gap-10 ${homeContent.style}`}
			>
				<h3 className="font-bold text-[1.3rem] md:text-[1.4rem] lg:text-[1.7rem]">
					{homeContent.title}
				</h3>
				<p className=" lg:text-[1.1rem]">{homeContent.desc}</p>

				<Button title={"Hace un donación"} />
			</div>
			<div className="">
				<img className="w-full" src={homeContent.img} alt="" />
			</div>
		</div>
	);
};
