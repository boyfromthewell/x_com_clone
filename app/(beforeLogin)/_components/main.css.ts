import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#fff",
  width: "100dvw",
  height: "100dvh",
});

export const left = style({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const right = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const hTagBase = style({
  fontWeight: "bold",
});

export const rightH1 = style([
  hTagBase,
  {
    fontSize: 64,
    margin: "48px 0",
  },
]);

export const rightH2 = style([
  hTagBase,
  {
    fontSize: 31,
    marginBottom: 32,
  },
]);

export const rightH3 = style([
  hTagBase,
  {
    fontSize: 17,
    marginBottom: 20,
    marginTop: 40,
  },
]);

export const signup = style({
  width: 300,
  height: 40,
  borderRadius: 20,
  padding: "0 16px",
  fontSize: 15,
  backgroundColor: "rgb(29, 155, 240)",
  color: "#fff",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ":hover": {
    backgroundColor: "rgb(26, 140, 216)",
  },
});

export const login = style({
  width: 300,
  height: 40,
  borderRadius: 20,
  padding: "0 16px",
  fontSize: 15,
  color: "rgb(29, 155, 240)",
  border: "1px solid rgb(207, 217, 222)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ":hover": {
    backgroundColor: "rgba(29, 155, 240, 0.1)",
  },
});
