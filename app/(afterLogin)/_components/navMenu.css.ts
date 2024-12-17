import { style } from "@vanilla-extract/css";

export const navFill = style({
  display: "inline-flex",
  height: 50,
  padding: 12,
  alignItems: "center",

  ":hover": {
    backgroundColor: "rgba(15,20,25, 0.1)",
    borderRadius: 29,
  },
});

export const navFillDiv = style({
  marginLeft: 20,
  marginRight: 16,
  fontSize: 20,
});
