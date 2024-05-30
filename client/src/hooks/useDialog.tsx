import {useRef} from "react";

export const useDialog = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const showModal = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    };

    const closeModal = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    return {dialogRef, showModal, closeModal}
}
