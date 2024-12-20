import { style } from "@vanilla-extract/css";

export const search = style({
  position: "fixed",
  height: "42px",
  width: "inherit",
  borderRadius: "21px",
  backgroundColor: "rgb(239, 243, 244)",
  marginTop: "6px",
  marginBottom: "12px",
  display: "flex",
  alignItems: "center",
});

export const searchIcon = style({
  marginLeft: "20px",
  fill: "rgb(83, 100, 113)",
});

export const searchInput = style({
  outline: "none",
  backgroundColor: "inherit",
  border: "none",
  padding: "12px",
  marginLeft: "5px",
  fontSize: "15px",
});

export const filterTitle = style({
  background: "#ffffff",
  padding: "12px 16px",
  color: "rgba(15, 20, 25, 1.00)",
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "16px",
  borderRadius: "16px",
  border: "1px solid rgb(239, 243, 244)",
  marginTop: "12px",
});

export const filterSection = style({
  padding: "0 16px 12px",
  marginBottom: "16px",
  borderRadius: "16px",
  border: "1px solid rgb(239, 243, 244)",
});

export const filterSectionLabel = style({
  fontSize: "15px",
  fontWeight: "bold",
  height: "36px",
  display: "flex",
  alignItems: "center",
});

export const radio = style({
  display: "flex",
});

export const radioItem = style({
  flex: 1,
});
