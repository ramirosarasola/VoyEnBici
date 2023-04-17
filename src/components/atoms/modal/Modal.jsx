import { useEffect } from "react";
import "./Modal.css";
const Modal = ({ children, isOpen, closeModal }) => {
	const handleModalContainerClick = (e) => e.stopPropagation();

	useEffect(() => {
		console.info("Abriendo componente Model.jsx..");
	}, []);

	return (
		<>
			<article
				className={`modal   ${isOpen && "is-open"}`}
				onClick={closeModal}
			>
				<div
					className="modal-container rounded-xl b"
					onClick={handleModalContainerClick}
				>
					<button className="modal-close" onClick={closeModal}>
						❌
					</button>
					{children}
				</div>
			</article>
		</>
	);
};

export default Modal;
