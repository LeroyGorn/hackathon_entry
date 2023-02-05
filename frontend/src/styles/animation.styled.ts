import { css, keyframes } from "styled-components";

export const spin = keyframes`
${css`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`}`;
