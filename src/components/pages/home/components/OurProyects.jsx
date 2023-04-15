import React from "react";
import { Subtitle } from "../../../atoms/subtitle/Subtitle";
import { Title } from "../../../atoms/title/Title";
import "./OurProyects.css";

export const OurProyects = () => {
	return (
		<>
			<div className="w-full">
				<div className="flex justify-evenly items-center xs:px-5 pb-5">
					<Title title={"Nuestros Proyectos/Noticias"}></Title>
					<Subtitle
						subtitle={
							"Aca podriamos poner las cards que habia hecho uno de los chicos"
						}
					></Subtitle>
				</div>

				<div className="flex overflow-x-auto space-x-5 w-full">
					<div>
						<img className="image" src="" alt="" />
					</div>
					<div>
						<img className="image" src="" alt="" />
					</div>
					<div>
						<img className="image" src="" alt="" />
					</div>
					<div>
						<img className="image" src="" alt="" />
					</div>
				</div>
			</div>
		</>
	);
};
