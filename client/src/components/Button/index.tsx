import { assignInlineVars } from "@vanilla-extract/dynamic";
import type { ComponentProps, FC } from "react";
import { themeClass, vars } from "../../theme.css.ts";
import { ButtonWrapper, buttonColor } from "./index.css.ts";

type Props = ComponentProps<"button"> & {
	color: "cancel" | "primary";
};

export const Button: FC<Props> = ({ type, children, color, onClick }) => {
	const conditionStyle = () => {
		if (color === "cancel") {
			return vars.backgroundColor.cancel;
		}
		return vars.backgroundColor.primary;
	};
	return (
		<button
			className={`${themeClass} ${ButtonWrapper}`}
			type={type}
			style={assignInlineVars({
				[buttonColor]: conditionStyle(),
			})}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
