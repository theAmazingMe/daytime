import { useClassPrefix } from "mazeof-react/dist/hooks";
import { useContext } from "react";
import { ModalConfirmContext } from ".";
import { Button } from "react-bootstrap";
import { doesDefineClose } from "./viewLogic";
import { ModalConfirmContextType } from "../types/types";

export const CloseButton = () => {
	const { themes, modalActions, hideModal } = useContext(ModalConfirmContext) as ModalConfirmContextType

	const pre = useClassPrefix("mod-cls-btn");
	return (
		<div className={pre(`feat feat-${themes?.theme}`)}> 
			{!doesDefineClose(modalActions) ?
			<Button key="close" variant="secondary" onClick={hideModal}> 
				Close 
			</Button>
			: ""}
		</div>
	);
};