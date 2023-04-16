import React from "react";
import { useModal } from "../../../atoms/modal/hooks/useModal";
import Modal from "../../../atoms/modal/Modal";
import { ModalProject } from "./ModalProject.jsx";
export const Project = ({ titulo, img, cliente, tipo }) => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);

  const openModal = () => {
    console.info("Abriendo modal..");
    openModal1();
  };

  return (
    <>
      <div className="max-w-xs shadow-lg bg-white  ">
        <div className="">
          <a href="#!">
            <img
              className="object-cover h-[250px] w-[300px] "
              src={img}
              alt="Imagen1"
            />
          </a>
        </div>
        <div className="justify-center items-center text-center p-5 ">
          <h5 className="my-2 xs:text-base lg:text-xl font-black italic">
            {titulo}
          </h5>
          <img src="" className="mx-auto my-auto" alt="" />
          <div className="my-3">
            <p>Tipo de Proyecto: {tipo}</p>
            <p>Beneficiado: {cliente}</p>
          </div>
          <div className="">
            <button
              id="buttonMercadoLibre"
              type="button"
              className=" my-2 inline-block py-2 w-full text-xs italic lg:text-sm bg-white text-slate-800 border border-slate-800 font-medium leading-tight uppercase  shadow-md hover:bg-black hover:text-white hover:shadow-lg focus:bg-slate-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:text-white active:shadow-lg transition duration-150 ease-in-out"
              onClick={openModal}
            >
              ver proyecto
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <ModalProject />
      </Modal>
    </>
  );
};
