import React from "react";
import { BlackLine } from "../../atoms/black-line/BlackLine";
import { ContainerCard } from "../../atoms/container-card/ContainerCard";
import { OurProyects } from "./components/OurProyects";
export const Home = () => {
	return (
		<>
			<div>
				<BlackLine />
				<ContainerCard>
					<OurProyects />
				</ContainerCard>
			</div>
		</>
	);
};
