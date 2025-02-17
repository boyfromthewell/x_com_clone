import { style } from "@vanilla-extract/css";

export const formZone = style({
  borderTop: "1px solid rgba(239,243,244,1.00)",
  height: "56px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const form = style({
  background: "rgb(239, 243, 244)",
  margin: "4px 12px",
  borderRadius: "16px",
  padding: "4px",
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
});

export const textarea = style({
  width: "100%",
  border: "none",
  background: "transparent",
  fontSize: "15px",
  lineHeight: "20px",
  flex: "1",
  outline: "none",
  resize: "none",
});

export const submitButton = style({
  cursor: "pointer",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "34px",
  height: "34px",
  selectors: {
    "&:disabled": {
      opacity: 0.5,
      cursor: "default",
    },
  },
});

export const submitButtonIcon = style({
  fill: "rgb(29, 155, 240)",
});
