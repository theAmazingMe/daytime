import { useClassPrefix } from "mazeof-react/dist/hooks";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { ModalConfirmContext } from ".";
import { variantOrPrimary, labelOrActionKey } from "./viewLogic";
import { ModalConfirmContextType } from "../types/types";

export const ActionButtons = () => {
	const pre = useClassPrefix("mod-act-btn");
	const { themes, modalActions, confirm } = useContext(ModalConfirmContext) as ModalConfirmContextType;

	return (
		<div className={pre(`feat feat-${themes?.theme}`)}> {Object.keys(modalActions).map(action =>
			<Button
				key={`action-${action}`}
				variant={variantOrPrimary(modalActions, action)}
				onClick={() => confirm(action)}
			>
				{labelOrActionKey(modalActions, action)}
			</Button>
		)}
		</div>
	);
};