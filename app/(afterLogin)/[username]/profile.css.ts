import { style } from "@vanilla-extract/css";

export const main = style({
  width: "600px",
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
  display: "flex",
  height: "53px",
  alignItems: "center",
});

export const headerTitle = style({
  fontSize: "20px",
  fontWeight: "bold",
  marginLeft: "30px",
});

export const userZone = style({
  display: "flex",
  flexDirection: "column",
  borderBottom: "1px solid rgb(239, 243, 244)",
  padding: "12px 16px",
});

export const userRow = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const userFollower = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  paddingTop: 8,
});

export const userImage = style({
  display: "flex",
  alignItems: "center",
  marginRight: "12px",
  borderRadius: "50%",
  width: 134,
  height: 134,
  border: "1px solid lightgray",
});

export const userImageImg = style({
  borderRadius: "50%",
});

export const userName = style({
  margin: "0 12px",
  flex: 1,
});

export const userNameBold = style({
  fontWeight: "bold",
  fontSize: "20px",
});

export const userNameSub = style({
  fontSize: "15px",
});

export const followButton = style({
  border: "1px solid rgb(207, 217, 222)",
  padding: "0 16px",
  borderRadius: "17px",
  height: "34px",
  backgroundColor: "#000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "15px",
  color: "white",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "rgb(39, 44, 48)",
  },
});

export const backButton = style({
  width: "34px",
  height: "34px",
  backgroundColor: "#fff",
  border: "none",
  borderRadius: "17px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "rgba(15, 20, 25, 0.1)",
  },
});
