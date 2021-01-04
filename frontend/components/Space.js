import styled, { css } from "styled-components";

const Space = styled.div`
  display: block;
  ${({ x }) =>
    x &&
    css`
      margin-right: ${Number.isNaN(x) ? x : x + "rem"};
    `}
  ${({ y }) =>
    y &&
    css`
      margin-top: ${Number.isNaN(y) ? y : y + "rem"};
    `}
`;

export default Space;
