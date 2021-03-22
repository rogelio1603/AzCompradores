import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        box-sizing: border-box;
        margin: 0;
        background: "white";
        min-height: 100vh;
        font-family: "Montserrat", Arial, sans-serif;
        font-size: 16px;
      }
    `}
  />
);
