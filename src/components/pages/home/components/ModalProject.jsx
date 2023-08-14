import React from "react";

export const ModalProject = ({
  titulo,
  tipo,
  img,
  cliente,
  queHicimos,
  link,
}) => {
  return (
    <>
      {/* <!-- Modal Content  --> */}
      <div className="modal-content text-white p-10 bg-zinc-900 mx-auto text-sm w-full h-[80%]">
        <div className="my-2">
          <h3 className="text-center font-bold mb-3 text-2xl italic">
            {titulo}
          </h3>
          <div className="modal-content--text md:flex gap-4">
            <img src={img} alt={titulo} className="" />

            {/* <div className="flex flex-col space-y-4 pt-8  md:grid md:grid-cols-2 md:space-y-0 md:grid-y-4  "> */}
            <div className="flex flex-col space-y-4 overflow-auto">
              <p>Tipo de Proyecto: {tipo}</p>
              <p className="">Poblacion Beneficada: {cliente}</p>
              <div className="flex flex-col">
                <p>¿Que hicimos?</p>
                <p className="flex overflow-auto max-w-[500px]">{queHicimos}</p>
              </div>
              {link ? (
                <button className=" my-2 inline-block py-2 w-full text-xs italic lg:text-sm bg-white text-slate-800 border border-slate-800 font-medium leading-tight uppercase  shadow-md hover:bg-slate-600 hover:text-white hover:shadow-lg focus:bg-slate-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:text-white active:shadow-lg transition duration-150 ease-in-out">
                  <a href={link} target="blank">
                    Ir a la pagina
                  </a>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};