import styled from "@emotion/styled";

export const LayoutStyles = styled.div((props) => ({
  background: "white",
  maxWidth: "100%",
  margin: 0,
  "@media (min-width: 1024px)": {
    width: 1024,
    margin: "auto",
  },
}));
