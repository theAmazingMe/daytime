import { useContext, useState } from "react";
import { Template } from "./template";
import { AppContext } from "../../App";
import { AppContextType } from "../../resources/types";

export const ModalConfirmation = () => {
	
	const {shoModal, setShowModal} = useContext(AppContext) as AppContextType;
	
	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);

	return <Template prefix="m-conf" >
		Test
	</Template>;
};