import { style } from "@vanilla-extract/css";

export const postUserSection = style({
  marginRight: "12px",
  width: "40px",
});

export const postUserImage = style({
  width: "40px",
  height: "40px",
  borderRadius: "20px",
});

export const postForm = style({
  display: "flex",
  padding: "16px 16px 8px",
  borderColor: "rgb(239, 243, 244)",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
});

export const postInputSection = style({
  flex: 1,
});

export const postButtonSection = style({
  width: "100%",
});

export const postFormTextarea = style({
  width: "100%",
  border: "none",
  padding: "12px 0",
  fontSize: "20px",
  lineHeight: "24px",
  outline: "none",
  resize: "none",
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
  transitionDuration: "0.2s",
  transitionProperty: "background-color",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(29, 155, 240, 0.01)",

  ":hover": {
    backgroundColor: "rgba(29, 155, 240, 0.1)",
  },
});

export const uploadIcon = style({
  fill: "rgb(29, 155, 240)",
});

export const actionButton = style({
  width: "94px",
  height: "36px",
  border: "none",
  color: "rgb(255, 255, 255)",
  fontWeight: 700,
  fontSize: "15px",
  borderRadius: "18px",
  backgroundColor: "rgb(29, 155, 240)",
  cursor: "pointer",

  ":hover": {
    backgroundColor: "rgb(26, 140, 216)",
  },
  ":disabled": {
    opacity: 0.5,
  },
});
