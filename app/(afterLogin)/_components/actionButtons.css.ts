import { globalStyle, style, styleVariants } from "@vanilla-extract/css";

export const actionButtons = style({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  columnGap: 4,
  marginTop: 12,
});

export const buttonWrapper = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const button = style({
  background: "#fff",
  border: "none",
  outline: "none",
  display: "flex",
  width: 38,
  height: 38,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 19,
  cursor: "pointer",
  transition: "background-color 0.2s",
  marginRight: 4,
});

export const count = style({
  fontSize: "13px",
  color: "rgb(83, 100, 113)",
});

export const commentButton = styleVariants({
  default: { backgroundColor: "rgba(29, 155, 240, 0.01)" },
  hover: { ":hover": { backgroundColor: "rgba(29, 155, 240, 0.1)" } },
  commented: {},
});

globalStyle(`${commentButton.commented} svg`, {
  fill: "rgb(29, 155, 240)",
});

globalStyle(`${commentButton.commented} ${count}`, {
  color: "rgb(29, 155, 240)",
});

export const repostButton = styleVariants({
  default: { backgroundColor: "rgba(0, 186, 124, 0.01)" },
  hover: { ":hover": { backgroundColor: "rgba(0, 186, 124, 0.1)" } },
  reposted: {},
});

globalStyle(`${repostButton.reposted} svg`, {
  fill: "rgb(11, 175, 123)",
});

globalStyle(`${repostButton.reposted} ${count}`, {
  color: "rgb(11, 175, 123)",
});

export const heartButton = styleVariants({
  default: { backgroundColor: "rgba(249, 24, 128, 0.01)" },
  hover: { ":hover": { backgroundColor: "rgba(249, 24, 128, 0.1)" } },
  liked: {},
});

globalStyle(`${heartButton.liked} svg`, {
  fill: "rgb(228, 34, 126)",
});

globalStyle(`${heartButton.liked} ${count}`, {
  color: "rgb(228, 34, 126)",
});
