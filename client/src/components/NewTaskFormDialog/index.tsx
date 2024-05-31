import { useMutation, useQueryClient } from "@tanstack/react-query";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import type { FC, FormEvent, RefObject } from "react";
import DoneRound from "../../assets/Done_round.svg";
import Trash from "../../assets/Trash.svg";
import CloseLingDuotone1 from "../../assets/close_ring_duotone-1.svg";
import { createTask } from "../../features/api.ts";
import { useCreateTask } from "../../hooks/useCreateTask.tsx";
import { semiboldTypography, themeClass } from "../../theme.css.ts";
import type { Icon } from "../../types/icon.ts";
import type { Status } from "../../types/status.ts";
import { Button } from "../Button";
import { TaskStatusImage } from "../TaskStatusImage";
import {
	addDialogFormWrapper,
	dialogCloseButton,
	dialogContainer,
	dialogFooter,
	dialogHeader,
	iconList,
	iconWrapper,
	input,
	label,
	selectIconButton,
	selectStatusButton,
	selectedColor,
	selectedStatusColor,
	statusList,
	statusListItem,
	textarea,
} from "./index.css.ts";

type Props = {
	dialogRef: RefObject<HTMLDialogElement>;
	closeModal: () => void;
	icons: Icon[];
	status: Status[];
};

export const NewTaskFormDialog: FC<Props> = ({
	dialogRef,
	closeModal,
	icons,
	status,
}) => {
	const {
		nameValue,
		descriptionValue,
		selectedIcon,
		selectedStatus,
		setNameValue,
		setDescriptionValue,
		setSelectedIcon,
		setSelectedStatus,
		onChangeName,
		onChangeDescription,
		onClickIconButton,
		onClickStatusButton,
		conditionIconColor,
		conditionStatusColor,
	} = useCreateTask();

	const queryClient = useQueryClient();

	const { mutate } = useMutation({
		mutationFn: async () =>
			await createTask({
				name: nameValue,
				description: descriptionValue !== "" ? descriptionValue : null,
				iconId: selectedIcon,
				statusId: selectedStatus,
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["tasks"] });
			setNameValue("");
			setDescriptionValue("");
			setSelectedIcon("");
			setSelectedStatus("");
			closeModal();
		},
		onError: (error) => console.error(error),
	});

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		mutate();
	};

	return (
		<dialog ref={dialogRef} className={dialogContainer}>
			<form className={addDialogFormWrapper} onSubmit={onSubmit}>
				<header className={dialogHeader}>
					<h2 className={`${themeClass} ${semiboldTypography}`}>New Task</h2>
					<button
						type="button"
						className={dialogCloseButton}
						onClick={closeModal}
					>
						<img src={CloseLingDuotone1} alt="" width={32} height={32} />
					</button>
				</header>
				<label className={label}>
					Task Name
					<input
						className={input}
						placeholder="Enter a task name"
						value={nameValue}
						onChange={onChangeName}
					/>
				</label>
				<label className={label}>
					Description
					<textarea
						className={textarea}
						placeholder="Enter a short description"
						value={descriptionValue}
						onChange={onChangeDescription}
					/>
				</label>
				<div className={label}>
					Icon
					<ul className={iconList}>
						{icons?.map((icon) => (
							<li
								key={icon.publicId}
								className={iconWrapper}
								style={assignInlineVars({
									[selectedColor]: conditionIconColor(icon.publicId),
								})}
							>
								<button
									type="button"
									className={selectIconButton}
									onClick={() => onClickIconButton(icon.publicId)}
								>
									<span className={`${themeClass} ${semiboldTypography}`}>
										{icon.emoji}
									</span>
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className={label}>
					Status
					<ul className={statusList}>
						{status?.map((s) => (
							<li
								key={s.publicId}
								className={statusListItem}
								style={assignInlineVars({
									[selectedStatusColor]: conditionStatusColor(s.publicId),
								})}
							>
								<button
									type="button"
									className={selectStatusButton}
									onClick={() => onClickStatusButton(s.publicId)}
								>
									<TaskStatusImage status={s.name} />
									{s.name}
								</button>
							</li>
						))}
					</ul>
				</div>
				<footer className={dialogFooter}>
					<Button type="button" color="cancel" onClick={closeModal}>
						Cancel
						<img src={Trash} alt="" />
					</Button>
					<Button type="submit" color="primary">
						Save
						<img src={DoneRound} alt="" />
					</Button>
				</footer>
			</form>
		</dialog>
	);
};
