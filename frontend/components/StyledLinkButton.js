import styled, { css } from "styled-components";
import StyledButton from "./StyledButton";

const getButtonColor = ({ color }) => {
  return css`
    color: ${({ theme }) => theme.colors[color][500]};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.transparent[32]};
    }
  `;
};

const StyledLinkButton = styled(StyledButton)`
  && {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.black[500]};
    border-color: transparent;
    transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
    ${getButtonColor}
  }
`;

export default StyledLinkButton;
