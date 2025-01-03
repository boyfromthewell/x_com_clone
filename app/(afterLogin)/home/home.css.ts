import { keyframes, style } from "@vanilla-extract/css";

export const main = style({
  width: 600,
  borderColor: "rgb(239, 243, 244)",
  borderRightWidth: 1,
  borderLeftWidth: 1,
  borderLeftStyle: "solid",
  borderRightStyle: "solid",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",

  "@media": {
    "all and (min-width: 687px)": {
      width: 600,
    },
  },
});

const rotate = keyframes({
  from: {
    rotate: "0deg",
  },
  "100%": {
    rotate: "360deg",
  },
});

export const loader = style({
  animation: `${rotate} 2s linear infinite`,
});
