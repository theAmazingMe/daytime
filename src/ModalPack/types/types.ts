export type ModalActionType = {
    action : () => () => any;
    label: string;
    variant : string;
}

export type ModalType = {
	modalTitle: string | JSX.Element;
	modalBody: string | JSX.Element;
	showModal: boolean;
	displayModal: (modalTitle: string | JSX.Element, body: string | JSX.Element, action: any) => void;
	hideModal: () => void;
    modalActions: {[x: string]: ModalActionType};
	confirm: (action:string) => void;
}

export type ModalConfirmationPropsTypes = { prefix: string, customContext: any, children: any };
export type ModalConfirmContextType = any & ModalType;