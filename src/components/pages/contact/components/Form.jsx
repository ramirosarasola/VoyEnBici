import React, { useState } from "react";

export const Form = () => {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	//State  Error
	const [error, setError] = useState(false);

	// HandleSubmit

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validacion del formulario
		if ([email, message].includes("")) {
			console.log("Completa todos los casilleros por favor.");

			setError(true);
			return;
		}

		setError(false);
	};

	return (
		<div className="">
			<h2 className="font-black text-3xl text-center">Dona tu bicicleta </h2>
			<p className="mt-10 text-lg mb-10 text-center">
				Gracias a las donaciones el Banco de Bicicletas recibe semanalmente
				bicicletas usadas, antiguas y nuevas de diversos tamaños.
			</p>

			<div className="flex xl:justify-center">
				<div className="px-5 w-full xl:w-2/3">
					<p>Pasos para donar:</p>

					<ul className="grid gap-y-5 p-5 ">
						<li>
							1 - Vamos a pedirte algunos datos para ponernos en contacto con
							vos para coordinar la donacón.
						</li>

						<li>
							2 - Si podes sacale una foto a la bici. La foto de la bici nos da
							una idea de cuánto dinero deberíamos poner para arreglar y renovar
							la bici( costo por servicio general 8.000 pesos-10.000 pesos).
						</li>

						<li>
							3 - Una vez que tenemos la ubicación de las bicicletas, la
							buscamos por nuestra cuenta, luego las bicis son reparadas por
							nuestro equipo de bicicleteros, para finalmente presentarlas al
							Banco de Bicicletas, dónde se les dará utilidad compartida y
							resguardo.
						</li>
					</ul>
				</div>
			</div>

			<div className="flex justify-center">
				<form
					onSubmit={handleSubmit}
					className="bg-white shadow-xl py-10 px-5 mb-10 rounded-lg mx-5  w-full xl:w-2/3"
				>
					{error && <Error mensaje="Error" />}

					<div className="mb-5">
						<label
							htmlFor="email"
							className="block text-gray-700 font-bold uppercase"
						>
							Email
						</label>

						<input
							id="email"
							type="text"
							placeholder="Emai propio..."
							className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className="mb-5">
						<label
							htmlFor="sintomas"
							className="block text-gray-700 font-bold uppercase"
						>
							Mensaje
						</label>

						<textarea
							id="sintomas"
							placeholder="Describe tu consulta..."
							className="border border-opacity-60 w-full  p-2"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						></textarea>
					</div>

					<div className="flex text-center ">
						<button
							type="submit"
							className="font-semibold w-[432px] py-[5px] mx-auto text-center  rounded-md bg-indigo-600  p-3 text-white  hover:bg-indigo-700 cursor-pointer transition-all"
						>
							Hace tu donación
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
