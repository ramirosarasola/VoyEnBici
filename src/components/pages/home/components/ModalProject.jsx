import React from "react";
import { contact1 } from "../../../../assets/index.js";

export const ModalProject = () => {
	return (
		<>
			{/* <!-- The Close Button --> */}
			<button id="closeMercadoLibre" className="close">
				&times;
			</button>

			{/* <!-- Modal Content  --> */}
			<div className="modal-content  text-white p-10 bg-zinc-900 mx-auto text-sm max-w-xl lg:max-w-3xl">
				<div
					className="max-w-md  mx-auto my-5
                        lg:max-w-xl"
				>
					<img src={contact1} alt="" />

					<h3 className="font-bold my-3 text-lg italic">
						{" "}
						Sala de descanso Mercado Libre{" "}
					</h3>

					<div className="flex flex-col space-y-2 md:grid md:grid-cols-2 md:space-y-0 md:grid-y-4  ">
						<p className="">
							Tipo de Contrato: Proyecto y Construccion Llave en Mano.
						</p>
						<p className="">Tipo de Proyecto: Ambientes de trabajo</p>
						<p className="">Cliente Mercado Libre</p>
						<p className="">Superficie: 200M°</p>
						<p className="">Año: 2020</p>
						<p className="">Lugar: Centro de distribución CAD, Villa Madero</p>
					</div>
				</div>
			</div>
		</>
	);
};
