import { globalStyle, style } from "@vanilla-extract/css";

export const post = style({
  display: "flex",
  flexDirection: "column",
  padding: "12px 16px",
  borderColor: "rgb(239, 243, 244)",
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  transitionProperty: "background-color, box-shadow",
  transitionDuration: "0.2s",
  cursor: "pointer",

  ":hover": {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
});

export const postWrapper = style({
  display: "flex",
  flexDirection: "row",
});

export const postReposted = style({
  display: "flex",
  alignItems: "center",
  color: "rbg(83, 100, 113)",
  marginLeft: 24,
  fontSize: 13,
  lineHeight: "20px",
});

globalStyle(`${postReposted} svg`, {
  fill: "rgb(83, 100, 113)",
});

export const postUserSection = style({
  marginRight: 12,
  width: 40,
});

export const postUserImageWrapper = style({
  position: "relative",
  display: "inline-block",
  width: 40,
  height: 40,
  borderRadius: 20,
});

export const postUserImg = style({
  borderRadius: 20,
  objectFit: "cover",
});

export const postShade = style({
  display: "inline-block",
  width: 40,
  height: 40,
  borderRadius: 20,
  position: "absolute",
  top: 0,
  left: 0,

  ":hover": {
    backgroundColor: "rgba(26, 26, 26, 0.15)",
  },
});

export const postUserName = style({
  fontWeight: "bold",

  ":hover": {
    textDecoration: "underline",
  },
});

export const postUserDate = style({
  color: "rgb(83, 100, 113)",
});

export const postUserText = style({
  color: "rgb(83, 100, 113)",

  ":hover": {
    textDecoration: "underline",
  },
});

export const postImageSection = style({
  display: "inline-block",
  marginTop: 12,
  width: "100%",
  borderRadius: 16,
});

export const postBody = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const postMeta = style({
  display: "flex",
  flexDirection: "row",
});

export const postImageSectionImg = style({
  marginTop: 12,
  width: "100%",
  borderRadius: 16,
});
