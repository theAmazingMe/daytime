import { useContext } from "react";
import Modal from "react-bootstrap/esm/Modal";
import { useClassPrefix } from "mazeof-react/dist/hooks";



import { CloseButton } from "react-bootstrap";
import { ActionButtons } from "./actionButtons";
import { ModalConfirmContext } from ".";

export const Design = (props: any) => {
    const pre = useClassPrefix("m-conf");
    const { themes, modalTitle, showModal,hideModal } = useContext(ModalConfirmContext) as any;

    return <Modal className={pre(`feat feat-${themes?.theme}`)}
        size="xl"
        show={showModal}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Header>
            <Modal.Title> {modalTitle} </Modal.Title>
            <CloseButton onClick={hideModal}></CloseButton>
        </Modal.Header>
        <Modal.Body>  {props.children} </Modal.Body>
        <Modal.Footer>
            <ActionButtons></ActionButtons>
        </Modal.Footer>
    </Modal>
}