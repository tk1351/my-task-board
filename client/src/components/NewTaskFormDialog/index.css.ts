import { style } from "@vanilla-extract/css";
import { themeClass, vars } from "../../theme.css.ts";

export const dialogContainer = style({
	height: "100%",
	width: "800px",
	padding: "40px 30px",
	border: "none",
	borderRadius: "5px",
	"::backdrop": {
		backgroundColor: "#00000033",
	},
});

export const addDialogFormWrapper = style({
	display: "flex",
	flexDirection: "column",
	gap: "20px",
});

export const label = style([
	themeClass,
	{
		display: "flex",
		flexDirection: "column",
		gap: "10px",
		color: vars.color.darkGray,
		fontSize: vars.fontSize.light,
		fontWeight: vars.fontWeight.regular,
	},
]);

export const input = style({
	height: "40px",
	padding: "0 10px",
});

export const textarea = style({
	padding: "10px",
});

export const dialogHeader = style({
	marginBlockEnd: "30px",
	display: "flex",
	justifyContent: "space-between",
});

export const formList = style({
	listStyle: "none",
	margin: "0",
	padding: "0",
	display: "flex",
	gap: "20px",
});

export const dialogCloseButton = style({
	backgroundColor: "transparent",
	outline: "none",
	border: "none",
	cursor: "pointer",
	color: "black",
});

export const dialogFooter = style({
	display: "flex",
	justifyContent: "flex-end",
	gap: "20px",
});
