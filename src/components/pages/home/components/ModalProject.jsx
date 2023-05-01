import React from "react";
//! Segundo
export const ModalProject = ({
	titulo,
	tipo,
	img,
	cliente,
	queHicimos,
	link,
}) => {
	return (
		<>
			{/* <!-- The Close Button --> */}
			{/* <button id="closeMercadoLibre" className="close ">
				<p className="text-2xl"> X </p>
			</button> */}

			{/* <!-- Modal Content  --> */}
			<div className="modal-content text-white p-10 bg-zinc-900 mx-auto text-sm w-full h-[80%]">
				<div className="my-2">
					<h3 className="text-center font-bold mb-3 text-2xl italic">
						{titulo}
					</h3>
					<div className="modal-content--text md:flex gap-4">
					<img src={img} alt={titulo} className="" />

{/* <div className="flex flex-col space-y-4 pt-8  md:grid md:grid-cols-2 md:space-y-0 md:grid-y-4  "> */}
<div className="flex flex-col space-y-4 overflow-auto">
	<p>Tipo de Proyecto: {tipo}</p>
	<p>Beneficiado: {cliente}</p>
	<div className="flex flex-col">
		<p>¿Que hicimos?</p>
		<p className="flex overflow-auto max-w-[500px]">{queHicimos}</p>
	</div>
	{link ? (
		<button className=" my-2 inline-block py-2 w-full text-xs italic lg:text-sm bg-white text-slate-800 border border-slate-800 font-medium leading-tight uppercase  shadow-md hover:bg-slate-600 hover:text-white hover:shadow-lg focus:bg-slate-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:text-white active:shadow-lg transition duration-150 ease-in-out">
			<a href={link} target="blank">
				Ir a la pagina
			</a>
		</button>
	) : (
		""
	)}
</div>
					</div>
				</div>
			</div>
		</>
	);
};

// import { contact1 } from "../../../../assets";
// export const ModalProject = () => {
// 	return (
// 		<>
// 			{/* <!-- The Close Button --> */}
// 			<button id="closeMercadoLibre" className="close">
// 				&times;
// 			</button>

// 			{/* <!-- Modal Content  --> */}
// 			<div className="modal-content  text-white p-10 bg-zinc-900 mx-auto text-sm max-w-xl lg:max-w-3xl">
// 				<div
// 					className="max-w-md  mx-auto my-5
//                         lg:max-w-xl"
// 				>
// 					<img src={contact1} alt="" />

// 					<h3 className="font-bold my-3 text-lg italic">
// 						Sala de descanso Mercado Libre
// 					</h3>

// 					<div className="flex flex-col space-y-2 md:grid md:grid-cols-2 md:space-y-0 md:grid-y-4  ">
// 						<p className="">
// 							Tipo de Contrato: Proyecto y Construccion Llave en Mano.
// 						</p>
// 						<p className="">Tipo de Proyecto: Ambientes de trabajo</p>
// 						<p className="">Cliente Mercado Libre</p>
// 						<p className="">Superficie: 200M°</p>
// 						<p className="">Año: 2020</p>
// 						<p className="">Lugar: Centro de distribución CAD, Villa Madero</p>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
