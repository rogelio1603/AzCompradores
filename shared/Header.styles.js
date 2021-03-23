import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const HeaderStyles = styled(motion.header)((props) => ({
  position: "relative",
  display: "grid",
  gridTemplateColumns: "30% 1fr",
  color: props.theme.font.color,
  alignItems: "center",
  justifyContent: "center",
  "&:after": {
    position: "absolute",
    bottom: 0,
    left: 0,
    content: "' '",
    border: "1px solid silver",
    width: "100%",
  },
  "& .title-container": {
    display: "flex",
    alignItems: "center",
  },
  "& .list ul": {
    listStyle: "none",
    "& button": {
      marginLeft: "1em",
      background: "none",
      border: "1px solid grey",
      borderRadius: 5,
    },
  },
  "& .social-container": {
    display: "flex",
  },
  [props.theme.media.xxl]: {
    gridGap: "1em",
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
