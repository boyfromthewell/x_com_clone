import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  alignItems: "stretch",
  backgroundColor: "#fff",
});

export const leftSectionWrapper = style({
  display: "flex",
  alignItems: "flex-end",
  flexDirection: "column",
  flexGrow: 1,
});

export const leftSection = style({
  width: 275,
  height: "100dvh",
});

export const leftSectionFixed = style({
  position: "fixed",
  width: "inherit",
  height: "100dvh",
  display: "flex",
  flexDirection: "column",
});

export const leftSectionNav = style({
  flex: 1,
});

export const leftSectionLi = globalStyle("li", {
  listStyleType: "none",
});

export const logo = style({
  display: "inline-block",
  height: 56,
  marginTop: 2,
});

export const logoFill = style({
  width: 50,
  height: 50,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  ":hover": {
    backgroundColor: "rgba(15, 20, 25, 0.1)",
  },
});

export const postButton = style({
  margin: "16px 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 52,
  boxShadow: "rgba(0, 0, 0, 0.08) 0px 8px 28px",
  backgroundColor: "rgb(29, 155, 240)",
  width: 234,
  border: "none",
  color: "rgb(255, 255, 255)",
  fontWeight: 700,
  fontSize: 17,
  borderRadius: 26,

  ":hover": {
    backgroundColor: "rgb(26, 140, 216)",
  },
});

export const rightSectionWrapper = style({
  display: "flex",
  alignItems: "flex-start",
  height: "100dvh",
  flexDirection: "column",
  flexGrow: 1,
});

export const rightSectionInner = style({
  height: "100%",
  width: 990,
  display: "flex",
  justifyContent: "space-between",
});

export const main = style({
  width: 600,
  height: "100dvh",
});

export const rightSection = style({
  width: 350,
  height: "100%",
});

export const search = style({
  position: "fixed",
  height: 42,
  width: "inherit",
  borderRadius: 21,
  backgroundColor: "rgb(239, 243, 244)",
  marginTop: 6,
  marginBottom: 12,
  display: "flex",
  alignItems: "center",
});

export const searchSvg = style({
  marginLeft: 20,
  fill: "rgb(83, 100, 113)",
});

export const searchInput = style({
  outline: "none",
  backgroundColor: "inherit",
  border: "none",
  padding: 12,
  marginLeft: 5,
  fontSize: 15,
});

export const followRecommend = style({
  fontSize: 20,
  fontWeight: "bold",
  backgroundColor: "rgb(247, 249, 249)",
  borderRadius: 16,
  margin: "12px 0",
  padding: "12px 16px",
});

export const followRecommendH3 = style({
  paddingBottom: 12,
});
