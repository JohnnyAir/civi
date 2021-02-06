import styled from "styled-components";
import { grid, border, flexbox, color, space, typography } from "styled-system";
import Svg from "../../icons";

export const Icon = Svg;

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
  white-space: pre-wrap;
  margin: 0;
  ${typography}
  ${color}
  ${border}
  ${space}
`;

export const Hr = styled.hr`
  border-left-color: #00000000;
  border-right-color: #00000000;
  border-top-color: #00000000;
  border-style: solid;
  width: 100%;
  border-left: 0;
  border-width: 1px;
  margin-top: 0;
  ${border}
  ${space}
`;
