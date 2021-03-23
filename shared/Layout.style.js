import styled from "@emotion/styled";

export const LayoutStyles = styled.div((props) => ({
  background: "white",
  minHeight: "100vh",
  maxWidth: "100%",
  padding: "1em",
  margin: 0,
  display: "flex",
  flexDirection: "column",
  "@media (min-width: 1024px)": {
    width: 1024,
    margin: "auto",
  },
}));
