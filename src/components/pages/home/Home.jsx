import React from "react";
import { BlackLine } from "../../atoms/black-line/BlackLine";
import { ContainerCard } from "../../atoms/container-card/ContainerCard";
import { OurProyects } from "./components/OurProyects";
import { Card } from "../../atoms/cards/Card";
export const Home = () => {
	return (
		<>
			<div>
				<BlackLine />
				<ContainerCard>
					<Card/>
					<OurProyects />
				</ContainerCard>
			</div>
		</>
	);
};
