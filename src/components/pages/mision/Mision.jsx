import React from "react";
import { ContainerPage } from "../../atoms/container-card/ContainerPage";
import { CardMision } from "./components/CardMision";
import { Values } from "./components/Values";

export const Mision = () => {
	return (
		<ContainerPage>
			<CardMision />
			<Values />
		</ContainerPage>
	);
};
