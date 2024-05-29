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
});

export const regularTypography = style({
	fontSize: vars.fontSize.regular,
	lineHeight: vars.lineHeight.regular,
});

export const lightTypography = style({
	fontSize: vars.fontSize.light,
	lineHeight: vars.lineHeight.light,
});

export const semiboldTypography = style({
	fontSize: vars.fontSize.semibold,
	lineHeight: vars.lineHeight.semibold,
});

export const mediumTypography = style({
	fontSize: vars.fontSize.medium,
	lineHeight: vars.lineHeight.medium,
});

export const semiboldButtonTypography = style({
	fontSize: vars.fontSize["semibold-button"],
	lineHeight: vars.lineHeight["semibold-button"],
});

export const mediumLabelTypography = style({
	fontSize: vars.fontSize["medium-label"],
	lineHeight: vars.lineHeight["medium-label"],
});
