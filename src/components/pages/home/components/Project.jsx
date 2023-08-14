import { useModal } from "../../../atoms/modal/hooks/useModal";
import Modal from "../../../atoms/modal/Modal";
import { ModalProject } from "./ModalProject";
export const Project = ({
	titulo,
	img,
	cliente,
	tipo,
	scrollUp,
	queHicimos,
	link,
}) => {
	const [isOpenModal, openModal, closeModal] = useModal(false);

	const handleOpenModal = () => {
		console.info("Abriendo modal..");
		openModal();
	};

	return (
		<>
			<div className="max-w-xs shadow-lg bg-white">
				<div className="">
						<img
							className="object-cover h-[250px] w-[100%]"
							src={img}
							alt="Imagen1"
						/>
				</div>
				<div className="justify-center items-center text-center p-5 ">
					<h5 className="my-2 xs:text-base lg:text-xl font-black italic">
						{titulo}
					</h5>
					<div className="my-4">
						<p>Poblacion Beneficiada: {cliente}</p>
					</div>
					<div className="">
						<button
							id="buttonMercadoLibre"
							type="button"
							className=" my-2 inline-block py-2 w-full text-xs italic lg:text-sm bg-white text-slate-800 border border-slate-800 font-medium leading-tight uppercase  shadow-md hover:bg-black hover:text-white hover:shadow-lg focus:bg-slate-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:text-white active:shadow-lg transition duration-150 ease-in-out"
							onClick={() => {
								handleOpenModal();
								scrollUp();
							}}
						>
							ver proyecto
						</button>
					</div>
				</div>
			</div>

			{/* Modal Reutilizable */}
			<Modal isOpen={isOpenModal} closeModal={closeModal}>
				<ModalProject
					titulo={titulo}
					tipo={tipo}
					img={img}
					cliente={cliente}
					queHicimos={queHicimos}
					link={link}
				/>
			</Modal>
		</>
	);
};
