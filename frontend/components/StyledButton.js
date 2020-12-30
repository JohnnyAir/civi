import styled, { css } from "styled-components";

const getButtonSizes = ({ size }) => {
  let sizes = {
    large: {
      fontSize: "1.5rem",
      padding: "18px 40px",
      borderWidth: "2px",
    },
    medium: {
      fontSize: "0.9rem",
      fontWeight: 600,
      lineHeight: "1.2rem",
      padding: "10px 20px",
      borderWidth: "2px",
    },
    small: {
      fontSize: "0.8rem",
      padding: "8px 12px",
      lineHeight: "0.8rem",
      fontWeight: 500,
      height: "0.8rem",
    },
    tiny: {
      fontSize: "0.65rem",
      letterSpacing: 0,
      padding: "4px 9px;",
    },
  };
  return css(sizes[size]);
};

const getButtonColor = ({ color }) => {
  return css`
    background-color: ${({ theme }) => theme.colors[color][600]};
    color: #ffffff;
    fill: #ffffff;
    &:hover {
      background-color: ${({ theme }) => theme.colors[color][700]};
    }
    &:focus:not(:disabled) {
      border-color: ${({ theme }) => theme.colors[color][800]};
    }
  `;
};

const StyledButton = styled.button`
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  outline: none;
  border-style: solid;
  border-width: 1px;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  width: max-content;
  ${({ fluid }) =>
    fluid &&
    css`
      display: block;
      margin-left: 0;
      margin-right: 0;
      width: 100%;
    `};
  ${({ icon, iconPosition }) =>
    icon &&
    css`
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex-direction: ${iconPosition === "left" ? "row-reverse" : "row"};
    `};
  & .btn-icon {
  }
  ${getButtonSizes}
  ${getButtonColor}
`;

StyledButton.defaultProps = {
  size: "medium",
  color: "primary",
};

export default StyledButton;
