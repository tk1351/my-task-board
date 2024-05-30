import { style } from "@vanilla-extract/css";
import { themeClass, vars } from "./theme.css.ts";

export const container = style({
	display: "flex",
	justifyContent: "center",
	height: "100vh",
});

export const mainWrapper = style({
	width: "552px",
});

export const titleWrapper = style({
	display: "flex",
	alignItems: "center",
	gap: "20px",
});

export const titleDescription = style({
	marginLeft: "64px",
});

export const addTaskButton = style([
	themeClass,
	{
		transition: "all .5s ease",
		width: "100%",
		height: "70px",
		borderRadius: "10px",
		outline: "none",
		border: "none",
		backgroundColor: vars.backgroundColor.primary,
		color: vars.color.white,
		cursor: "pointer",
		":hover": {
			opacity: "0.8",
		},
	},
]);
