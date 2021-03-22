import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const HeaderStyles = styled(motion.header)((props) => ({
  display: "grid",
  gridTemplateColumns: "100%",
  color: props.theme.font.color,
  "& .title-container": {
    display: "flex",
    alignItems: "center",
    "& button": {
      marginLeft: "1em",
      background: "none",
      border: "1px solid grey",
    },
  },
  [props.theme.media.xxl]: {
    gridTemplateColumns: "30% 1fr",
    gridGap: "1em",
    alignItems: "center",
    justifyContent: "center",
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
