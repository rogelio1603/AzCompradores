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
  "& .button-container": {
    fontSize: "3vw",
    margin: 0,
    background: "none",
    border: "1px solid grey",
    borderRadius: 5,
    cursor: "pointer",
  },
  "& .title-container": {
    display: "flex",
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
      fontSize: 16,
      marginLeft: "1em",
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
