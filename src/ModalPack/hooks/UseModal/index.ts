import { useState } from "react";

export const UseModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState<JSX.Element | string>("Modal title")
    const [modalBody, setModalBody] = useState<JSX.Element | string>("This is a modal ! You can either confirm or close this");
    const [modalActions, setModalAction] = useState<{[x: string]: any}>({
        'sanityCheck': () => () => { console.log("confirmed") }
    });

    const displayModal = (modalTitle:JSX.Element|string, body: JSX.Element|string, action: any) => {
        setModalTitle(modalTitle)
        setModalBody(body);
        setShowModal(true);
        setModalAction(() => action);
    }

    const hideModal = () => {
        setShowModal(false);
        setModalBody("");
    }

    const confirm = (action:string) => {
        if(shouldNotKeepOpen(applyAction(action))){
            hideModal();
        }
    }

    const shouldNotKeepOpen = (keepOpen:any) => {
        return keepOpen === undefined || !keepOpen
    }

    const applyAction = (action:string) => {
        return modalActions[action].action();
    }

    return {
        modalTitle, modalBody, showModal, displayModal, hideModal, modalActions, confirm
    }
}