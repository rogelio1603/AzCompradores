import styled from "@emotion/styled";

export const IndexStyles = styled.div(() => ({
  minHeight: "calc(100vh - 77px)",
  "& .cards-container": {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gridGap: "3em",
  },
}));
