import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "12px 16px",
  height: 82,
  display: "block",

  ":hover": {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
});

export const title = style({
  fontSize: 15,
  fontWeight: "bold",
  lineHeight: "20px",
  marginTop: 2,
  marginBottom: 4,
});

export const count = style({
  color: "rgb(83, 100, 113)",
  fontSize: 13,
  lineHeight: "16px",
  fontWeight: "lighter",
});
