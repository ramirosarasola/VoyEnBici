import React from "react";
import { Button } from "../../../atoms/button/Button";
import { Title } from "../../../atoms/title/Title";

export const CardHowToInvolve = () => {
  return (
    <div className="flex flex-col space-y-10 p-10 justify-center sm:px-16 sm:py-8 sm:grid sm:grid-cols-5">
      <div className="col-span-3 max-w-sm space-y-5">
        <Title title="¿Cómo puedo involucrarme?" />
        <p>
          Existen varias maneras de involucrarse con este proyecto de inclusión
          sustentable de triple impacto!
        </p>
        <p>
          En VOY EN BICI Argentina buscamos tejer vínculos de cooperación y de
          asociación con diferentes actores, que nos permitan cambiar realidades
          con un impacto ambiental positivo. De esta manera, VOY EN BICI
          Argentina se transforma en un puente, que permite unir a las personas
          que tienen una bicicleta a disposición, pero ya no la utilizan y
          aquellas personas vulnerables, que requieren de un medio de locomoción
          independiente, económico y sostenible.
        </p>
      </div>

      <div className="flex flex-col space-y-3 max-w-xs mx-auto items-center">
        <Button
          title={"Doná tu bicicleta"}
          botonColor={`bg-slate-300 text-black hover:bg-slate-400 `}
        />

        <Button
          title={"Hacé un aporte económico"}
          botonColor={`bg-slate-300 text-black hover:bg-slate-400 `}
        />
      </div>
    </div>
  );
};
