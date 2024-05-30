import { createTheme, style } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
	fontSize: {
		regular: "40px",
		light: "16px",
		semibold: "20px",
		"semibold-button": "16px",
		medium: "14px",
		"medium-label": "12px",
	},
	lineHeight: {
		regular: "2.5",
		light: "1",
		semibold: "1.25",
		"semibold-button": "1",
		medium: "0.875",
		"medium-label": "0.75",
	},
	fontWeight: {
		regular: "400",
		light: "300",
	},
	backgroundColor: {
		progress: "#f5d565",
		progressStatus: "#e9a23b",
		completed: "#a0ecb1",
		completedStatus: "#32d657",
		wontDo: "#f7d4d3",
		wontDoStatus: "#dd524c",
		primary: "#3662e3",
		cancel: "#97A3B6",
		iconDefault: "#e3e8ef",
		iconSelected: "#f5d565",
	},
	color: {
		white: "#f8fafc",
		darkGray: "#97A3B6",
	},
});

export const regularTypography = style({
	fontSize: vars.fontSize.regular,
	lineHeight: vars.lineHeight.regular,
	fontWeight: vars.fontWeight.regular,
});

export const lightTypography = style({
	fontSize: vars.fontSize.light,
	lineHeight: vars.lineHeight.light,
	fontWeight: vars.fontWeight.light,
});

export const semiboldTypography = style({
	fontSize: vars.fontSize.semibold,
	lineHeight: vars.lineHeight.semibold,
	fontWeight: vars.fontWeight.regular,
});

export const mediumTypography = style({
	fontSize: vars.fontSize.medium,
	lineHeight: vars.lineHeight.medium,
	fontWeight: vars.fontWeight.regular,
});

export const semiboldButtonTypography = style({
	fontSize: vars.fontSize["semibold-button"],
	lineHeight: vars.lineHeight["semibold-button"],
});

export const mediumLabelTypography = style({
	fontSize: vars.fontSize["medium-label"],
	lineHeight: vars.lineHeight["medium-label"],
	fontWeight: vars.fontWeight.light,
});
