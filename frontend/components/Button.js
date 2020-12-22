import styled, { css } from "styled-components";

const getButtonSizes = ({ size }) => {
  let sizes = {
    large: {
      fontSize: "1.5rem",
      lineHeight: "17px",
      padding: "18px 40px",
      borderWidth: "2px",
    },
    medium: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: "17px",
      padding: "14px 24px",
      borderWidth: "2px",
    },
    small: {
      fontSize: "13px",
      lineHeight: "21px",
      padding: "11px 20px",
    },
    tiny: {
      fontSize: "12px",
      lineHeight: "12px",
      letterSpacing: 0,
      padding: "5px 14px",
    },
  };
  return css(sizes[size]);
};

const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 4px;
  border: none;
  outline: none;
  text-transform: uppercase;
  border-style: solid;
  border-width: 1px;
  ${getButtonSizes}
`;

export const StyledPrimaryButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.primary[300]};
  color: #ffffff;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[400]};
  }
  &:focus:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

StyledButton.defaultProps = {
  size: "medium",
};

export default StyledButton;
