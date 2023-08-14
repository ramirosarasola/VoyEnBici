import React from "react";
import { dona_1, dona_2 } from "../../../assets";
import { Link } from "react-router-dom";

const Donation = () => {
  return (
    <section className="flex flex-col items-center justify-center h-full p-4">
      <h2 className="text-2xl font-bold text-center mb-4">
        Ayúdanos a seguir cambiando realidades de manera equitativa, federal y
        sostenible, con mejores oportunidades para todos!
      </h2>

      <div className="flex justify-center">
        <img src={dona_2} alt="Imagen 2" className="w-1/2" />
      </div>

      <button className="bg-[#1865AB] px-4 py-2 rounded text-[#fff]" ><Link target="a_blank" to={'https://donaronline.org/voy-en-bici-banco-mundial-de-bicicletas/voy-en-bici-argentina'}>DONA</Link></button>
    </section>
  );
};

export default Donation;
