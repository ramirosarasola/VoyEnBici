import React from "react";
import { mision1, mision2 } from "../../../../assets";
import { Title } from "../../../atoms/title/Title";

export const CardMision = () => {
	return (
		<>
			{/* MISION */}
			<div className="grid custom-md:grid-cols-2 lg:items-start">
				<div
					className={`sm:px-16 px-6 py-5 gap-10 lg:gap-4 my-auto flex flex-col items-start 2xl:w-[80%] 2xl:m-auto   2xl:gap-10 $`}
				>
					<Title title="Misión" className="text-[1.3rem] md:text-[1.4rem] lg:text-[1.7rem]" />

					<h3 className="text-[1.1rem]">
						Nuestro Objetivo reside en que miles de ciudadanos de bajos recursos
						puedan acceder a un medio de locomoción útil, versátil y sustentable
						como lo es la bicicleta.
					</h3>
					<p className=" text-[1.1rem]">
						Ya sea por una cuestión de salud, social, medio ambiental o
						económica, la bicicleta es una actividad muy beneficiosa y completa
						para adquirir como hábito de vida. De esta manera,{" "}
						<span className="font-bold">
							solucionamos la movilidad urbana de las personas más
							desfavorecidas.
						</span>
					</p>
				</div>
				<div className="">
					<img
						className="w-full bg-cover object-cover max-h-[450px]"
						src={mision1}
						alt=""
					/>
				</div>
			</div>

			{/* VISION */}
			<div className="grid custom-md:grid-cols-2 lg:items-start">
				<div className="hidden md:flex ">
					<img
						className="w-full bg-cover object-cover max-h-[450px]"
						src={mision2}
						alt=""
					/>
				</div>
				<div
					className={`sm:px-16 px-6 py-5 gap-10 lg:gap-4 my-auto flex flex-col items-start 2xl:w-[80%] 2xl:m-auto   2xl:gap-10 $`}
				>
					<Title title="Visión" className="text-[1.3rem] md:text-[1.4rem] lg:text-[1.7rem] "  />

					<h3 className="text-[1.1rem] ">
						Desde VOY EN BICI Argentina creemos firmemente que{" "}
						<span className="font-bold">
							las oportunidades laborales, las interacciones y la vida digna en
							un territorio dependen del movimiento de las personas del lugar.
						</span>
					</h3>
					<p className=" text-[1.1rem]">
						La pandemia ha dañado la situación social y ha repercutido
						seriamente en la movilidad de las personas. En VOY EN BICI Argentina
						consideramos que sólo podemos mirar hacia adelante, sin dejar a
						nadie atrás.
					</p>
				</div>
				<div className="flex md:hidden ">
					<img
						className="w-full bg-cover object-cover max-h-[450px]"
						src={mision2}
						alt=""
					/>
				</div>
			</div>

			{/* VISION */}
			<div className="grid custom-md:grid-cols-2 lg:items-start">
				<div
					className={`sm:px-16 px-6 py-5 gap-10 lg:gap-4 my-auto flex flex-col items-start 2xl:w-[80%] 2xl:m-auto   2xl:gap-10 $`}
				>
					<Title title="Accion" className="text-[1.3rem] md:text-[1.4rem] lg:text-[1.7rem] " />

					<p className="text-[1.1rem]">
						Actualmente contamos con 3 modelos de acción:
					</p>
					<ul className="text-[1.1rem] flex flex-col">
						<li>
							<p>- Bancos de Bicicletas en barrios marginales.</p>
						</li>
						<li>
							<p>
								- Bancos de Bicicletas y talleres de oficio de bicicletería en
								las cárceles.
							</p>
						</li>
						<li>
							<p>
								- Bancos de Bicicletas y taller de oficio para escuelas y
								comunidades rurales.
							</p>
						</li>
					</ul>
				</div>
				<div className="hidden md:flex  ">
					<img
						className="w-full bg-cover object-cover max-h-[450px]"
						src={mision2}
						alt=""
					/>
				</div>
			</div>
		</>
	);
};
