import { useCallback, useRef } from "react";

export const useDialog = () => {
	const dialogRef = useRef<HTMLDialogElement>(null);

	const showModal = useCallback(() => {
		if (dialogRef.current) {
			dialogRef.current.showModal();
		}
	}, []);

	const closeModal = useCallback(() => {
		if (dialogRef.current) {
			dialogRef.current.close();
		}
	}, []);

	return { dialogRef, showModal, closeModal };
};
