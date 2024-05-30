import { createVar, style } from "@vanilla-extract/css";
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
	border: '1px solid',
	borderRadius: '10px'
});

export const textarea = style({
	padding: "10px",
	borderRadius: '10px'
});

export const dialogHeader = style({
	marginBlockEnd: "30px",
	display: "flex",
	justifyContent: "space-between",
});

export const iconList = style({
	listStyle: "none",
	margin: "0",
	padding: "0",
	display: "flex",
	gap: "14px",
});

export const selectedColor = createVar();

export const iconWrapper = style([
	themeClass,
	{
		width: "40px",
		height: "40px",
		backgroundColor: selectedColor,
		borderRadius: "5px",
		display: "grid",
		placeContent: "center",
	},
]);

export const selectIconButton = style({
	border: "none",
	outline: "none",
	width: "inherit",
	height: "inherit",
	backgroundColor: "transparent",
	borderRadius: "5px",
	cursor: "pointer",
	':hover': {
		border: `1px solid ${vars.backgroundColor.primary}`
	}
});

export const statusList = style({
	listStyle: 'none',
	margin: '0',
	padding: '0',
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	columnGap: '14px',
	rowGap: '10px'
})

export const statusListItem = style([themeClass,{
	border: `1px solid ${vars.color.darkGray}`,
	borderRadius: '10px',
	padding: '2px',
	':hover': {
		border: `1px solid ${vars.backgroundColor.primary}`
	}
}])

export const selectStatusButton = style({
	width: '100%',
	height: 'inherit',
	cursor: 'pointer',
	display: 'inline-flex',
	border: '0',
	padding: '0',
	alignItems: 'center',
	gap: '10px',
	backgroundColor: 'transparent',
})

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
