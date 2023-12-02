const variantOrPrimary = (modalActions: { [x: string]: any }, actionKey: string) =>
    modalActions[actionKey].variant ?
    modalActions[actionKey].variant : "primary"

const labelOrActionKey = (modalActions: { [x: string]: any }, actionKey: string) =>
    modalActions[actionKey].label ?
    modalActions[actionKey].label : actionKey;

const doesDefineClose = (modalActions: { [x: string]: any }) => {
    let closeDefined = false;
    Object.keys(modalActions)
        .map(action => {
            if (/close/i.test(action)) {
                closeDefined = true;
            }
        })
    return closeDefined;
}

export {
    variantOrPrimary, labelOrActionKey, doesDefineClose
}