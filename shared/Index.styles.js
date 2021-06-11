import styled from "@emotion/styled";

export const IndexStyles = styled.div((props) => ({
  minHeight: "calc(100vh - 77px)",
  "& .cards-container": {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gridGap: "3em",
  },
  "& .category-container": {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0 10px 0",
    flexWrap: "wrap",
    margin: "0",
    "@media (max-width: 720px)": {
      justifyContent: "left",
    },
  },
  "& .category-container li": {
    cursor: "pointer",
    backgroundColor:
      props.theme.background.color === "#323F4B" ? "#52606D" : "#E4E7EB",
    display: "flex",
    padding: "2px 8px 2px 8px",
    borderRadius: "4px",
    margin: "4px 0 4px 0",
    fontSize: "1.5rem",
    color: props.theme.font.color,
    fontWeight: "bold",
    "@media (max-width: 720px)": {
      flex: "0 1 calc(25% - 1rem)",
      padding: "2px 4px 2px 4px",
      fontSize: "1.3rem",
      textAlign: "center",
    },
  },
}));
