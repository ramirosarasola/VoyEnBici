import React from "react";
import { homeContent } from "../../../constants";
import { BlackLine } from "../../atoms/black-line/BlackLine";
import { Card } from "../../atoms/cards/Card";
import { ContainerCard } from "../../atoms/container-card/ContainerCard";
import { OurProjects } from "./components/OurProjects";

export const Home = () => {
	return (
		<>
			<div className="">
				<BlackLine />
				<ContainerCard>
					{homeContent.map((item, index) => {
						return <Card homeContent={item} key={index} />;
					})}
					<OurProjects />
				</ContainerCard>
			</div>
		</>
	);
};
