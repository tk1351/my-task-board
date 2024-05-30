import { style } from "@vanilla-extract/css";
import { themeClass, vars } from "../../theme.css.ts";

export const statusWrapper = style({
	width: "40px",
	height: "40px",
	borderRadius: "5px",
	display: "grid",
	placeContent: "center",
});

export const completedWrapper = style([
	themeClass,
	statusWrapper,
	{ backgroundColor: vars.backgroundColor.completedStatus },
]);
export const inProgressWrapper = style([
	themeClass,
	statusWrapper,
	{ backgroundColor: vars.backgroundColor.progressStatus },
]);
export const wontDoWrapper = style([
	themeClass,
	statusWrapper,
	{ backgroundColor: vars.backgroundColor.wontDoStatus },
]);
