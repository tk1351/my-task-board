import type { FC, RefObject } from "react";
import DoneRound from "../../assets/Done_round.svg";
import Trash from "../../assets/Trash.svg";
import CloseLingDuotone1 from "../../assets/close_ring_duotone-1.svg";
import { semiboldTypography, themeClass } from "../../theme.css.ts";
import type { Icon } from "../../types/icon.ts";
import type { Status } from "../../types/status.ts";
import { Button } from "../Button";
import {
	addDialogFormWrapper,
	dialogCloseButton,
	dialogContainer,
	dialogFooter,
	dialogHeader,
	formList,
	input,
	label,
	textarea,
} from "./index.css.ts";

type Props = {
	dialogRef: RefObject<HTMLDialogElement>;
	onClickCloseButton: () => void;
	icons: Icon[];
	status: Status[];
};

export const NewTaskFormDialog: FC<Props> = ({
	dialogRef,
	onClickCloseButton,
	icons,
	status,
}) => {
	return (
		<dialog ref={dialogRef} className={dialogContainer}>
			<form className={addDialogFormWrapper}>
				<header className={dialogHeader}>
					<h2 className={`${themeClass} ${semiboldTypography}`}>New Task</h2>
					<button
						type="button"
						className={dialogCloseButton}
						onClick={onClickCloseButton}
					>
						<img src={CloseLingDuotone1} alt="" width={32} height={32} />
					</button>
				</header>
				<label className={label}>
					Task Name
					<input className={input} placeholder="Enter a task name" />
				</label>
				<label className={label}>
					Description
					<textarea
						className={textarea}
						placeholder="Enter a short description"
					/>
				</label>
				<div className={label}>
					Icon
					<ul className={formList}>
						{icons?.map((icon) => (
							<li key={icon.publicId}>{icon.emoji}</li>
						))}
					</ul>
				</div>
				<div className={label}>
					Status
					<ul className={formList}>
						{status?.map((s) => (
							<li key={s.publicId}>{s.name}</li>
						))}
					</ul>
				</div>
				<footer className={dialogFooter}>
					<Button type="button" color="cancel" onClick={onClickCloseButton}>
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
