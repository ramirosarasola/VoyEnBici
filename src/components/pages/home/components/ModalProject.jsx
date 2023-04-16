import React from "react";
import { contact1 } from "../../../../assets/index.js";

export const ModalProject = () => {
	return (
		<>
			{/* <!-- The Close Button --> */}
			<button id="closeMercadoLibre" class="close">
				&times;
			</button>

			{/* <!-- Modal Content  --> */}
			<div class="modal-content  text-white p-10 bg-zinc-900 mx-auto text-sm max-w-xl lg:max-w-3xl">
				<div
					class="max-w-md  mx-auto my-5
                        lg:max-w-xl"
				>
					<img src={contact1} alt="" />

					<h3 class="font-bold my-3 text-lg italic">
						{" "}
						Sala de descanso Mercado Libre{" "}
					</h3>

					<div class="flex flex-col space-y-2 md:grid md:grid-cols-2 md:space-y-0 md:grid-y-4  ">
						<p class="">
							Tipo de Contrato: Proyecto y Construccion Llave en Mano.
						</p>
						<p class="">Tipo de Proyecto: Ambientes de trabajo</p>
						<p class="">Cliente Mercado Libre</p>
						<p class="">Superficie: 200M°</p>
						<p class="">Año: 2020</p>
						<p class="">Lugar: Centro de distribución CAD, Villa Madero</p>
					</div>
				</div>
			</div>
		</>
	);
};
