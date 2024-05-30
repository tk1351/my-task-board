import { createVar, style } from "@vanilla-extract/css";
import { vars } from "../../theme.css.ts";

export const buttonColor = createVar();

export const ButtonWrapper = style({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "6px",
	border: "none",
	outline: "none",
	backgroundColor: buttonColor,
	cursor: "pointer",
	color: vars.color.white,
	width: "120px",
	height: "36px",
	borderRadius: "14px",
	":hover": {
		opacity: "0.8",
	},
});
