import { style } from "@vanilla-extract/css";

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
