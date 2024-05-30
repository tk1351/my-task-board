import { assignInlineVars } from "@vanilla-extract/dynamic";
import type { FC, RefObject } from "react";
import DoneRound from "../../assets/Done_round.svg";
import Trash from "../../assets/Trash.svg";
import CloseLingDuotone1 from "../../assets/close_ring_duotone-1.svg";
import { semiboldTypography, themeClass, vars } from "../../theme.css.ts";
import type { Icon } from "../../types/icon.ts";
import type { Status } from "../../types/status.ts";
import { Button } from "../Button";
import {
	addDialogFormWrapper,
	dialogCloseButton,
	dialogContainer,
	dialogFooter,
	dialogHeader,
	iconWrapper,
	input,
	label,
	selectIconButton,
	selectedColor,
	textarea, iconList, statusList, statusListItem, selectStatusButton,
} from "./index.css.ts";
import {TaskStatusImage} from "../TaskStatusImage";

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
					<ul className={iconList}>
						{icons?.map((icon) => (
							<li
								key={icon.publicId}
								className={iconWrapper}
								style={assignInlineVars({
									[selectedColor]: vars.backgroundColor.iconDefault,
								})}
							>
								<button type="button" className={selectIconButton}>
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
							<li key={s.publicId} className={statusListItem}>
								<button type='button' className={selectStatusButton}>

								<TaskStatusImage status={s.name} />{s.name}
								</button>
							</li>
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
