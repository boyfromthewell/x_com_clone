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

export const searchTop = style({
  backgroundColor: "rgba(255, 255, 255, 0.85)",
  backdropFilter: "blur(12px)",
  borderColor: "rgb(239, 243, 244)",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  width: "600px",
  position: "fixed",
});

export const searchZone = style({
  display: "flex",
  alignItems: "center",
});

export const buttonZone = style({
  width: "56px",
});

export const formZone = style({
  flex: 1,
  height: "53px",
  width: "526px",
});

export const homeFixed = style({
  position: "fixed",
  zIndex: 2,
  width: "598px",
  backgroundColor: "rgba(255, 255, 255, 0.85)",
  backdropFilter: "blur(12px)",
  borderColor: "rgb(239, 243, 244)",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
});

export const homeTab = style({
  height: "53px",
  display: "flex",
});

export const homeTabItem = style({
  cursor: "pointer",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "15px",
  position: "relative",
  ":hover": {
    backgroundColor: "rgba(15, 20, 25, 0.1)",
  },
});

export const tabIndicator = style({
  height: "4px",
  alignSelf: "center",
  backgroundColor: "rgb(29, 155, 240)",
  minWidth: "56px",
  width: "56px",
  position: "absolute",
  bottom: 0,
  borderRadius: "9999px",
});

export const list = style({
  marginTop: "110px",
});
