import { style } from "@vanilla-extract/css";

export const logOutButton = style({
  width: 66,
  height: 66,
  padding: 12,
  display: "flex",
  margin: "12px 0",
  cursor: "pointer",
  border: "none",
  alignItems: "center",
  backgroundColor: "#fff",
  textAlign: "left",

  ":hover": {
    backgroundColor: "rgba(15,20,25, 0.1)",
    borderRadius: 33,
  },

  "@media": {
    "all and (min-width: 1300px)": {
      width: 258,
    },
  },
});

export const logOutUserImage = style({
  display: "flex",
  alignItems: "center",
});

export const buttonImg = style({
  borderRadius: "50%",
});

export const userNameBold = style({
  "@media": {
    "all and (min-width: 1300px)": {
      fontWeight: "bold",
    },
  },
});

export const logOutUserName = style({
  display: "none",
  "@media": {
    "all and (min-width: 1300px)": {
      margin: "0 12px",
      display: "inline-block",
    },
  },
});
