import { useRef } from "react";
import { projects } from "../../../../constants/projects";
import { Subtitle } from "../../../atoms/subtitle/Subtitle";
import { Title } from "../../../atoms/title/Title";
import "./OurProjects.css";
import { Project } from "./Project.jsx";

export const OurProjects = () => {

	const sectionRef = useRef(null);

	const scrollUp = () => {
		sectionRef.current.scrollIntoView({behavior: 'smooth'})
	}

	return (
		<>
			<section className="bg-gray-200 min-h-[100vh] h-full" ref={sectionRef}>
				<div className="flex flex-col sm:flex-row sm:justify-evenly items-center gap-y-2 sm:gap-y-0 sm:py-5 pb-3">
					<Title title="Nuestros proyectos / noticias" />
					<Subtitle subtitle="Aca podriamos poner las cards que habia hecho uno de los chicos"></Subtitle>
				</div>
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
							scrollUp={scrollUp}
						/>
					))}
				</div>
			</section>
		</>
	);
};
