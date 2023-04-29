import "./Modal3.css";

const Modal3 = ({ children, isOpen, closeModal }) => {
	return (
		<>
			{isOpen && (
				<div className="modal-overlay">
					<div className="modal">
						<div className="modal-close" onClick={closeModal}>
							X
						</div>
						{children}
					</div>
				</div>
			)}
		</>
	);
};
export default Modal3;
