import React from "react";
import { Button } from "../../../atoms/button/Button";
import { Title } from "../../../atoms/title/Title";

export const CardHowToInvolve = () => {
	const buttonColor = {
		backgroundColor: "#D9D9D9",
	};

	return (
		// <div className="flex flex-col space-y-10 p-10 items-center sm:px-16 sm:py-8 sm:grid sm:grid-cols-5">
		// 	<div className="col-span-3 max-w-sm ">
		// 		<p>
		// 			VOY EN BICI Argentina se transforma en un puente entre aquellas
		// 			personas que tienen una bicicleta a disposición, pero ya no la
		// 			utilizan y aquellas personas vulnerables que requieren de un medio de
		// 			locomoción sostenible.
		// 		</p>
		// 	</div>

		// 	<div className="flex flex-col space-y-3 max-w-xs items-center mx-auto">
		// 		<Button
		// 			title={"Doná tu bicicleta"}
		// 			botonColor={`bg-slate-300 text-black hover:bg-slate-400 `}
		// 		/>

		// 		<Button
		// 			title={"Hacé un aporte económico"}
		// 			botonColor={`bg-slate-300 text-black hover:bg-slate-400 `}
		// 		/>
		// 	</div>
		// </div>
		<div className="flex flex-col space-y-10 p-10 justify-center sm:px-16 sm:py-8 sm:grid sm:grid-cols-5">
			<div className="col-span-3 max-w-sm space-y-5">
				<Title title="¿Como me puedo involucrar?" />
				<p>
					VOY EN BICI Argentina se transforma en un puente entre aquellas
					personas que tienen una bicicleta a disposición, pero ya no la
					utilizan y aquellas personas vulnerables que requieren de un medio de
					locomoción sostenible.
				</p>
			</div>

			<div className="flex flex-col space-y-3 max-w-xs mx-auto items-center">
				<Button
					title={"Doná tu bicicleta"}
					botonColor={`bg-slate-300 text-black hover:bg-slate-400 `}
				/>

				<Button
					title={"Hacé un aporte económico"}
					botonColor={`bg-slate-300 text-black hover:bg-slate-400 `}
				/>
			</div>
		</div>
	);
};
