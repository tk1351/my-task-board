import { style } from "@vanilla-extract/css";

export const list = style({
	listStyle: "none",
	margin: 0,
	padding: 0,
	display: "flex",
	flexDirection: "column",
	gap: "20px",
});

export const listItem = style({
	backgroundColor: "lightblue",
	borderRadius: "10px",
	minHeight: "70px",
	padding: "20px",
});

export const listItemHeader = style({
	display: "grid",
	gridTemplateColumns: "40px auto 40px",
	columnGap: "20px",
	alignItems: "center",
	height: "40px",
});

export const iconWrapper = style({
	width: "40px",
	height: "40px",
	backgroundColor: "white",
	borderRadius: "5px",
	display: "grid",
	placeContent: "center",
});

export const statusWrapper = style({
	width: "40px",
	height: "40px",
	backgroundColor: "lightgreen",
	borderRadius: "5px",
	display: "grid",
	placeContent: "center",
});

export const titleName = style({
	display: "-webkit-box",
	overflow: "hidden",
	textOverflow: "ellipsis",
	"-webkit-box-orient": "vertical",
	"-webkit-line-clamp": "1",
});

export const taskDescription = style({
	margin: "0 60px",
});
