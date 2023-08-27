import React from "react";
import { dona_1, dona_2, waveBg } from "../../../assets";
import { Link } from "react-router-dom";

const Donation = () => {
  return (
    <section className="flex flex-col items-center jus h-full justify-between">
      <div className="flex justify-between">
        {/* <img src={waveBg} alt="background" className="absolute -z-10 h-[100vh]" /> */}
        <div className="text-container flex flex-col text-container px-5">
          <h1 className="text-[42px] text-[#1865AB] font-bold mb-5 text-justify">
            SIGAMOS RODANDO JUNTOS
          </h1>
          <p className="text-[23px] mb-4 w-[80%] leading-8">
            Ayúdanos a seguir cambiando realidades de manera equitativa, federal
            y sostenible, con mejores oportunidades para todos!
          </p>
          {/* //? Card 1  */}
          <div className="cita__card bg-[#62b3ff] text-white p-4 w-[450px] rounded-lg mb-4">
            <p className="cita italic text-[18px] mb-2">
              “ 2 de cada 3 niñas y niños en Argentina son pobres ”
            </p>
            <p className="cita__autor">UNICEF Argentina (2023)</p>
          </div>
          {/* //? Card 2  */}
          <div className="cita__card bg-[#62b3ff] text-white p-4 w-[450px] rounded-lg mb-4">
            <p className="cita italic text-[18px] mb-2">
              “ El derecho a la educación de los niños y adolescentes de comunidades rurales, suele estar obstruido debido a las grandes distancias que deben transitar para acceder a las escuelas rurales ”
            </p>
            <p className="cita__autor">Fundación Bunge y Bornn - Programa Sembrador - (2022)</p>
          </div>
          {/* //? Card 3  */}
          <div className="cita__card bg-[#62b3ff] text-white p-4 w-[450px] rounded-lg mb-4">
            <p className="cita italic text-[18px] mb-2">
              “ Solo 61 de cada 100 estudiantes de la secundaria termino en tiempo y forma la escuela en año 2022 ”
            </p>
            <p className="cita__autor">Argentinos por la Educacion (2022)</p>
          </div>
          <button className="bg-[#1865AB] px-4 py-2 rounded text-[#fff] w-[100px]">
            <Link
              target="a_blank"
              to={
                "https://donaronline.org/voy-en-bici-banco-mundial-de-bicicletas/voy-en-bici-argentina"
              }
            >
              DONA
            </Link>
          </button>
        </div>
        <img src={dona_2} alt="Imagen 2" className="" />
      </div>
    </section>
  );
};

export default Donation;
