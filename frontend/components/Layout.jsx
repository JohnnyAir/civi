import styled from "styled-components";
import { grid, border, flexbox, color, space, typography } from "styled-system";

export const Grid = styled.div`
  display: grid;
  ${typography}
  ${grid}
  ${color}
  ${border}
  ${space}
`;

export const Header = styled.h1`
  margin: 0;
  ${typography}
  ${color}
  ${space}
`;

export const Flex = styled.div`
  display: flex;
  ${flexbox}
  ${typography}
  ${color}
  ${border}
  ${space}
`;

export const Text = styled.span`
  ${typography}
  ${color}
  ${space}
`;

export const Paragraph = styled.span`
  margin: 0;
  ${typography}
  ${color}
  ${border}
  ${space}
`;

export const Hr = styled.hr`
  height: 0;
  width: 100%;
  border-bottom: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  border-style: dashed;
  color: transparent;
  background-color: transparent;
  border-top-color: #cecece;
  ${border}
  ${space}
`;
