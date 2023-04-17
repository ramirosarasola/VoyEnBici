import React from "react";
import { ContainerPage } from "../../atoms/container-card/ContainerPage";
import { Title } from "../../atoms/title/Title";
import { Values } from "./components/Values";

export const Mision = () => {
	return (
		<ContainerPage>
			<Title title="Misión" />
			<Values />
		</ContainerPage>
	);
};
