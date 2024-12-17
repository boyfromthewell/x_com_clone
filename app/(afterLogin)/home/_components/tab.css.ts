import { style } from "@vanilla-extract/css";

export const homeFixed = style({
  position: "fixed",
  zIndex: 1,
  width: 598,
  backgroundColor: "rgba(255, 255, 255, 0.85)",
  backdropFilter: "blur(12px)",
  borderColor: "rgb(239, 243, 244)",
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
});

export const homeText = style({
  fontSize: 20,
  lineHeight: "24px",
  fontWeight: "bold",
  padding: "12px 16px",
});

export const homeTab = style({
  height: 53,
  display: "flex",
});

export const homeTabDiv = style({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 15,
  cursor: "pointer",
  position: "relative",
});

export const homeTabA = style({
  ":hover": {
    backgroundColor: "rgba(15,20,25, 0.1)",
  },
});

export const tabIndicator = style({
  height: 4,
  alignSelf: "center",
  backgroundColor: "rgb(29, 155, 240)",
  minWidth: 56,
  width: 56,
  position: "absolute",
  bottom: 0,
  borderRadius: 9999,
});
