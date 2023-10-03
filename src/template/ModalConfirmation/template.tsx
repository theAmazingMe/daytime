import "./style.scss";
import { useClassPrefix } from "mazeof-react/dist/hooks";
import { AppContextType } from "../../resources/types";
import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { Button, Modal } from "react-bootstrap";

export const Template = ({ prefix, children }: any) => {
	const { themes } = useContext(AppContext) as AppContextType;
	const pre = useClassPrefix(prefix);

	const { shoModal, setShowModal } = useContext(AppContext) as AppContextType;

	const handleClose = () => {
		setShowModal(false);
	}
	return (
		<Modal className={pre(`feat feat-${themes.theme}`)}
			show={shoModal}
			onHide={handleClose}
			backdrop="static"
			keyboard={false}
		>
			<Modal.Header closeButton>
				<Modal.Title>Modal title</Modal.Title>
			</Modal.Header>
			<Modal.Body> {children} </Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="primary">Understood</Button>
			</Modal.Footer>
		</Modal>
	);
};