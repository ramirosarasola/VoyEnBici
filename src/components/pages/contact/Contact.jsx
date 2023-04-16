import React from "react";
import { ContainerPage } from "../../atoms/container-card/ContainerPage";
import { Form } from "./components/Form";

export const Contact = () => {
	return (
		<ContainerPage>
			{/* <Title title="Contacto" /> */}
			{/* <Button title="Hacé tu donación" /> */}
			<Form />
		</ContainerPage>
	);
};
