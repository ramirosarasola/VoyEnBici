import React from "react";
import { Title } from "../../../atoms/title/Title";

export const Values = () => {
	return (
		<>
			<div
				className="text-white p-24  py-10 lg:px-32"
				style={{ backgroundColor: "#1865AB" }}
			>
				<div className="pb-8">
					<Title title={"Nuestros Valores"} />
				</div>

				<div className="flex flex-col space-y-5 sm:flex-row sm:space-y-0 sm:justify-evenly ">
					<div className="container text-sm ">
						<ul className="space-y-1">
							<li>Inclusión Social</li>
							<li>Economia Circular</li>
							<li>Movilidad Sustentable & Compartida</li>
							<li>Descarbonización del Transporte</li>
							<li>Cuidad de Salud</li>
							<li>Empoderamiento de Colectivos Sociales Vulnerables</li>
						</ul>
					</div>

					<div className="container text-lg">
						<p>
							Podemos decir que VOY EN BICI Argentina genera una contribución
							social responsable, inclusiva, económica, mejorando el entorno
							social y la calidad de vida de los más desfavorecidos.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
