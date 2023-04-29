// //! 1° Version

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

//! 1° BIS  Version
// import { useEffect } from "react";
// import "./Modal.css";

// const Modal = ({ children, isOpen, closeModal }) => {
// 	const handleModalContainerClick = (e) => e.stopPropagation();

// 	useEffect(() => {
// 		console.info("Abriendo componente Modal.jsx..");
// 	}, []);

// 	return (
// 		<>
// 			<article
// 				className={`modal   ${isOpen && "is-open"}`}
// 				onClick={closeModal}
// 			>
// 				<div
// 					className="modal-container rounded-xl b"
// 					onClick={handleModalContainerClick}
// 				>
// 					<button className="modal-close" onClick={closeModal}>
// 						❌
// 					</button>
// 					<div className="modal-content">{children}</div>
// 				</div>
// 			</article>
// 		</>
// 	);
// };

// export default Modal;

//! 2° Version

// import { useEffect } from "react";
// import "./Modal2.css";
// const Modal = ({ children, isOpen, closeModal }) => {
// 	const handleModalContainerClick = (e) => e.stopPropagation();

// 	useEffect(() => {
// 		console.info("Abriendo componente Model.jsx..");
// 	}, []);

// 	return (
// 		<>
// 			<article
// 				className={`modal   ${isOpen && "is-open"}`}
// 				onClick={closeModal}
// 			>
// 				<div
// 					className="modal-container  rounded-xl b"
// 					onClick={handleModalContainerClick}
// 				>
// 					{/* <button className="modal-close" onClick={closeModal}>
// 						❌
// 					</button> */}

// 					<div className="modal-content">{children}</div>
// 				</div>
// 			</article>
// 		</>
// 	);
// };

// export default Modal;

//! 3° Version
// import "./Modal2.css";
// const Modal = ({ children, isOpen, closeModal }) => {
// 	return (
// 		<div className={`modal-wrapper   ${isOpen && "is-open"}`}>
// 			<div className="modal">
// 				<button className="close-button" onClick={closeModal}>
// 					X
// 				</button>
// 				<div className="modal-content">{children}</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Modal;
