import { style } from "@vanilla-extract/css";

export const modalBackground = style({
  width: "100vw",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  zIndex: 10,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
});

export const modal = style({
  background: "#fff",
  position: "relative",
  top: "5%",
  maxWidth: "80vw",
  minWidth: 600,
  maxHeight: 400,
  borderRadius: 16,
  display: "flex",
  flexDirection: "column",
});

export const closeButton = style({
  width: 34,
  height: 34,
  borderRadius: 17,
  border: "none",
  cursor: "pointer",
  backgroundColor: "#fff",
  position: "absolute",
  left: 8,
  top: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  ":hover": {
    backgroundColor: "rgba(15,20,25, 0.1)",
  },
});

export const modalForm = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
});

export const modalBody = style({
  padding: "0 16px",
  flex: 1,
  marginTop: 54,
  display: "flex",
  flexDirection: "row",
});

export const postUserSection = style({
  marginRight: 12,
  width: 40,
});

export const postUserImage = style({
  width: 40,
  height: 40,
});

export const postUserImageImg = style({
  borderRadius: "50%",
  objectFit: "cover",
});

export const inputDiv = style({
  flex: 1,
});

export const input = style({
  width: "100%",
  border: "none",
  outline: "none",
  fontSize: 20,
  resize: "none",
});

export const modalFooter = style({
  padding: "0 16px",
});

export const modalDivider = style({
  width: "100%",
  borderBottom: "1px solid rgb(239, 243, 244)",
});

export const footerButtons = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const footerButtonLeft = style({
  flex: 1,
});

export const uploadButton = style({
  width: "34px",
  height: "34px",
  border: "none",
  cursor: "pointer",
  borderRadius: "17px",
  backgroundColor: "rgba(29, 155, 240, 0.01)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transitionProperty: "background-color",
  transitionDuration: "0.2s",

  ":hover": {
    backgroundColor: "rgba(29, 155, 240, 0.1)",
  },
});

export const uploadButtonSvg = style({
  fill: "rgb(29, 155, 240)",
});

export const actionButton = style({
  cursor: "pointer",
  width: "94px",
  height: "36px",
  borderRadius: "18px",
  border: "none",
  margin: "8px 0",
  backgroundColor: "rgb(29, 155, 240)",
  color: "white",
  fontSize: "17px",

  ":disabled": {
    opacity: 0.5,
  },
});
