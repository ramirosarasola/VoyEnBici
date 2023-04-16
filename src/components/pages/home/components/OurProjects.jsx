import { projects } from "../../../../constants/projects";
import "./OurProjects.css";
import { Project } from "./Project.jsx";

export const OurProjects = () => {
	// 	return (
	// 		<>
	// 			<div className="w-full">
	// 				<div className="flex justify-evenly items-center xs:px-5 pb-5">
	// 					<Title title={"Nuestros Proyectos/Noticias"}></Title>
	// 					<Subtitle
	// 						subtitle={
	// 							"Aca podriamos poner las cards que habia hecho uno de los chicos"
	// 						}
	// 					></Subtitle>
	// 				</div>

	// 				<div className="flex overflow-x-auto space-x-5 w-full">
	// 					<div>
	// 						<img className="image" src="" alt="" />
	// 					</div>
	// 					<div>
	// 						<img className="image" src="" alt="" />
	// 					</div>
	// 					<div>
	// 						<img className="image" src="" alt="" />
	// 					</div>
	// 					<div>
	// 						<img className="image" src="" alt="" />
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</>
	// 	)
	// const [isOpenModal1, openModal1, closeModal1] = useModal(false);

	return (
		<>
			<section className="bg-gray-200 py-10">
				<h1
					id="proyectos"
					className=" uppercase font-black text-center my-10 text-3xl lg:text-5xl"
				>
					proyectos
				</h1>

				<div
					className="proyectos flex flex-wrap  justify-center gap-y-5  max-w-5xl mx-auto
				lg:justify-between lg:gap-x-0 lg:gap-y-0
				"
				>
					{projects.map((project) => (
						<Project
							key={project.id} // Añade una key única para cada elemento  //* cambie 'cliente' por 'id'*/
							titulo={project.titulo}
							tipo={project.tipo}
							img={project.img}
							cliente={project.cliente}
						/>
					))}
				</div>
			</section>
		</>
	);
};
