import { useRef } from "react";
import { projects } from "../../../../constants/projects";
import { Title } from "../../../atoms/title/Title";
import "./OurProjects.css";
import { Project } from "./Project.jsx";

export const OurProjects = () => {
	const sectionRef = useRef(null);

	const scrollUp = () => {
		sectionRef.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<section
				className="bg-gray-200 min-h-[100vh] h-full pt-7 pb-10 custom-md:py-0 custom-md:pt-5"
				ref={sectionRef}
			>
				<div className="flex flex-col sm:flex-row sm:justify-evenly items-center mb-3 sm:py-5 pb-3">
					<Title title="Nuestros proyectos / noticias" />
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
							queHicimos={project.queHicimos}
							link={project.link}
							scrollUp={scrollUp}
						/>
					))}
				</div>
			</section>
		</>
	);
};
