import { type ChangeEventHandler, useCallback, useState } from "react";
import { vars } from "../theme.css.ts";

export const useCreateTask = () => {
	const [nameValue, setNameValue] = useState("");
	const [descriptionValue, setDescriptionValue] = useState("");
	const [selectedIcon, setSelectedIcon] = useState("");
	const [selectedStatus, setSelectedStatus] = useState("");

	const onChangeName: ChangeEventHandler<HTMLInputElement> = (event) => {
		setNameValue(event.target.value);
	};

	const onChangeDescription: ChangeEventHandler<HTMLTextAreaElement> = (
		event,
	) => {
		setDescriptionValue(event.target.value);
	};

	const onClickIconButton = (id: string) => {
		setSelectedIcon(id);
	};

	const onClickStatusButton = (id: string) => {
		setSelectedStatus(id);
	};

	const conditionIconColor = useCallback(
		(selectedIconId: string) => {
			if (selectedIcon === selectedIconId) {
				return vars.backgroundColor.iconSelected;
			}
			return vars.backgroundColor.iconDefault;
		},
		[selectedIcon],
	);

	const conditionStatusColor = useCallback(
		(selectedStatusId: string) => {
			if (selectedStatus === selectedStatusId) {
				return vars.color.primary;
			}
			return vars.color.darkGray;
		},
		[selectedStatus],
	);

	return {
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
	};
};
