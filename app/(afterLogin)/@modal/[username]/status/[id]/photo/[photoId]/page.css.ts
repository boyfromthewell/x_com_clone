import { style } from "@vanilla-extract/css";

export const container = style({
  backgroundColor: "rgba(0, 0, 0, 0.95)",
  position: "fixed",
  zIndex: 10,
  left: 0,
  top: 0,
  width: "100dvw",
  height: "100dvh",
  display: "flex",
  flexDirection: "row",
});

export const imageZone = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
});

export const image = style({
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  flex: 1,
});

export const hiddenImage = style({
  display: "none",
});

export const buttonZone = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export const buttonInner = style({
  width: "600px",
  height: "60px",
});

export const commentZone = style({
  width: "350px",
  backgroundColor: "white",
  borderLeft: "1px solid rgb(239, 243, 244)",
  overflow: "auto",
});

export const closeButton = style({
  width: "34px",
  height: "34px",
  borderRadius: "17px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "rgba(0, 0, 0, 0.75)",
  position: "absolute",
  left: "16px",
  top: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  selectors: {
    "&:hover": {
      backgroundColor: "rgba(25, 25, 25, 0.75)",
    },
  },
});

export const closeButtonIcon = style({
  fill: "white",
});
