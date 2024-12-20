import { style } from "@vanilla-extract/css";

export const main = style({
  width: "600px",
  borderColor: "rgb(239, 243, 244)",
  borderRightWidth: "1px",
  borderLeftWidth: "1px",
  borderLeftStyle: "solid",
  borderRightStyle: "solid",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
});

export const formZone = style({
  paddingLeft: "16px",
  width: "566px",
  marginBottom: "60px",
});

export const trendBg = style({
  marginTop: "60px",
  backgroundColor: "rgb(247, 249, 249)",
});

export const trend = style({
  borderTop: "1px solid rgb(239, 243, 244)",
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "12px",
});

export const trendTitle = style({
  padding: "12px 16px",
});
