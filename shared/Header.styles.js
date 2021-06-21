import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const HeaderStyles = styled(motion.header)((props) => ({
  position: "relative",
  display: "grid",
  gridTemplateColumns: "30% 1fr",
  color: props.theme.font.color,
  alignItems: "center",
  justifyContent: "center",
  fontSize: 12,

  "&:after": {
    position: "absolute",
    bottom: 0,
    left: 0,
    content: "' '",
    border: "1px solid silver",
    width: "100%",
  },
  "& .toggle span": {
    display: "block",
    background: "none",
    color: "#fff",
  },
  "& .header-container": {
    "@media (max-width: 720px)": {
      padding: "1rem",
    },
  },
  "& .button-container": {
    fontSize: "3vw",
    padding: "4.65px",
    margin: 0,
    background: "none",
    border: "1px solid #CBD2D9",
    borderRadius: 5,
    cursor: "pointer",
    "@media (max-width: 720px)": {
      display: "block",
    },
  },
  "& .title-container": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "& .list ul": {
    padding: 0,
    listStyle: "none",
  },
  "& .social-container": {
    display: "flex",
    flexWrap: "wrap",
  },
  [props.theme.media.md]: {
    gridGap: "1em",
    fontSize: 16,
    "& .social-container": {
      display: "flex",
    },
    "& .button-container": {
      border: "0.5px solid #CBD2D9",
      fontSize: 16,
      marginRight: "1em",
      display: "flex",
      alignItems: "center",
      padding: "4.65px",
    },
    "& .social-image": {
      marginTop: "1rem",
      paddingTop: "1rem",
    },
    "& .fab": {
      width: "25",
      height: "25",
    },
  },
}));

export const HeaderVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};
