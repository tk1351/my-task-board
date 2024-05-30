import { assignInlineVars } from "@vanilla-extract/dynamic";
import type { FC } from "react";
import {
	lightTypography,
	semiboldTypography,
	themeClass,
	vars,
} from "../../theme.css.ts";
import type { Task } from "../../types/task.ts";
import { TaskStatusImage } from "../TaskStatusImage";
import {
	iconWrapper,
	list,
	listItem,
	listItemHeader,
	statusColor,
	taskDescription,
	titleName,
} from "./index.css.ts";

type Props = {
	tasks: Task[];
};

export const TaskList: FC<Props> = ({ tasks }) => {
	const conditionStatusColor = (status: string) => {
		if (status === "inProgress") return vars.backgroundColor.progress;
		if (status === "completed") return vars.backgroundColor.completed;
		return vars.backgroundColor.wontDo;
	};
	return (
		<ul className={list}>
			{tasks.map((task) => (
				<li
					key={task.publicId}
					className={`${themeClass} ${listItem}`}
					style={assignInlineVars({
						[statusColor]: conditionStatusColor(task.status.name),
					})}
				>
					<div className={listItemHeader}>
						<div className={iconWrapper}>
							<span className={`${themeClass} ${semiboldTypography}`}>
								{task.icon.emoji}
							</span>
						</div>
						<h3 className={`${themeClass} ${semiboldTypography} ${titleName}`}>
							{task.name}
						</h3>
						<TaskStatusImage status={task.status.name} />
					</div>
					<p className={`${themeClass} ${lightTypography} ${taskDescription}`}>
						{task.description && task.description}
					</p>
				</li>
			))}
		</ul>
	);
};
