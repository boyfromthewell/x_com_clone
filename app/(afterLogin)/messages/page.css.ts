import { style } from "@vanilla-extract/css";

export const main = style({
  width: "600px",
  minHeight: "100dvh",
  borderColor: "rgb(239, 243, 244)",
  borderRightWidth: "1px",
  borderLeftWidth: "1px",
  borderLeftStyle: "solid",
  borderRightStyle: "solid",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
});

export const header = style({
  height: "53px",
  display: "flex",
  alignItems: "center",
  padding: "0 16px",
});

export const headerTitle = style({
  fontWeight: "bold",
  fontSize: "20px",
});

export const room = style({
  padding: "16px",
  display: "flex",
  flexDirection: "row",
  transitionProperty: "background-color",
  transitionDuration: "0.2s",
  borderColor: "rgb(239, 243, 244)",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.03)",
    },
  },
});

export const roomUserImage = style({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  marginRight: "16px",
});

export const roomUserImageImg = style({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
});

export const roomChatInfo = style({
  display: "flex",
  flexDirection: "column",
  color: "#536471",
  fontSize: "15px",
});

export const roomChatInfoBold = style({
  color: "black",
});
