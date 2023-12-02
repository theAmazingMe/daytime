import { useContext,createContext } from "react";
import { Design } from "./modalConfirmation.design";
import "./style.scss"
import { ModalConfirmContextType } from "../types/types";

export const ModalConfirmContext = createContext<ModalConfirmContextType | null>(null);

export const ModalConfirmation = (props: any) => {

	const { customContext } = props;
	const { modalBody } = customContext;
	
	return <ModalConfirmContext.Provider value={customContext}>
		<Design>{ modalBody }</Design>
	</ModalConfirmContext.Provider>
};