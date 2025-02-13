import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "12px 0",
  height: 66,
  display: "flex",
});

export const userLogo = style({
  width: 40,
  marginRight: 12,
});

export const userLogoImg = style({
  borderRadius: 20,
  objectFit: "cover",
});

export const userInfo = style({
  flex: 1,
});

export const title = style({
  fontSize: 15,
  fontWeight: "bold",
  lineHeight: "20px",
});

export const count = style({
  color: "rgb(83, 100, 113)",
  fontSize: 13,
  lineHeight: "16px",
});

export const followButtonSection = style({
  width: 76,
});

export const followButton = style({
  border: "none",
  cursor: "pointer",
  width: "100%",
  color: "#fff",
  background: "#000",
  fontSize: 14,
  fontWeight: "bold",
  height: 32,
  borderRadius: 16,

  ":hover": {
    backgroundColor: "rgb(39, 44, 48)",
  },
});

export const followed = style({
  background: "white",
  color: "black",
  border: "1px solid grey",

  ":hover": {
    background: "lightgray",
  },
});
