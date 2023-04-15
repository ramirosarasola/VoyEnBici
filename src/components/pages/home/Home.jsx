import React from "react";
import { BlackLine } from "../../atoms/black-line/BlackLine";
import { ContainerCard } from "../../atoms/container-card/ContainerCard";
import { OurProyects } from "./components/OurProyects";
import { Card } from "../../atoms/cards/Card";
import { homeContent } from '../../../constants';


export const Home = () => {

	return (
		<>
			<div>
				<BlackLine />
				<ContainerCard>
					{homeContent.map((item, index) =>{
						return (
							<Card homeContent={item} key={index} />
						)
					})}
					<OurProyects />
				</ContainerCard>
			</div>
		</>
	);
};
