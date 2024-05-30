import type { FC } from "react";
import DoneRound from "../../assets/Done_round.svg";
import {
	lightTypography,
	semiboldTypography,
	themeClass,
} from "../../theme.css.ts";
import type { Task } from "../../types/task.ts";
import {
	iconWrapper,
	list,
	listItem,
	listItemHeader,
	statusWrapper,
	taskDescription,
	titleName,
} from "./index.css.ts";

type Props = {
	tasks: Task[];
};

export const TaskList: FC<Props> = ({ tasks }) => {
	return (
		<ul className={list}>
			{tasks.map((task) => (
				<li key={task.publicId} className={listItem}>
					<div className={listItemHeader}>
						<div className={iconWrapper}>
							<span className={`${themeClass} ${semiboldTypography}`}>
								{task.icon.emoji}
							</span>
						</div>
						<h3 className={`${themeClass} ${semiboldTypography} ${titleName}`}>
							{task.name}
						</h3>
						<div className={statusWrapper}>
							<img src={DoneRound} alt="" width={26} height={26} />
						</div>
					</div>
					<p className={`${themeClass} ${lightTypography} ${taskDescription}`}>
						{task.description && task.description}
					</p>
				</li>
			))}
		</ul>
	);
};
