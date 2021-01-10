import styled, { css } from "styled-components";

const getButtonSizes = ({ size }) => {
  return {
    large: css`
      font-size: 1.5rem;
      padding: 18px 40px;
      border-width: 2px;
    `,
    medium: css`
      font-size: 0.9rem;
      font-weight: 600;
      line-height: 1.2rem;
      padding: 10px 20px;
      border-width: 2px;
    `,
    small: css`
      font-size: 0.8rem;
      padding: 8px 12px;
      line-height: 0.8rem;
      font-weight: 500;
      height: 0.8rem;
    `,
    tiny: css`
      font-size: 0.65rem;
      letter-spacing: 0;
      padding: 4px 9px;
    `,
  }[size];
};

const getButtonColor = ({ color }) => {
  return css`
    background-color: ${({ theme }) => theme.colors[color][600]};
    color: #ffffff;
    fill: #ffffff;
    & .loading-icon {
      stroke: ${({ theme }) => theme.colors[color][400]};
    }
    &:hover(:disabled) {
      background-color: ${({ theme }) => theme.colors[color][700]};
    }
    &:focus:not(:disabled) {
      border-color: ${({ theme }) => theme.colors[color][800]};
    }
    &:disabled {
      background-color: ${({ theme }) => theme.colors[color][400]};
      cursor: not-allowed;
    }
  `;
};

const getLoadingIconSize = ({ size }) => {
  return {
    large: css`
      width: 2.3rem;
    `,
    medium: css`
      width: 2rem;
    `,
    small: css`
      width: 1rem;
    `,
    tiny: css`
      width: 0.8rem;
    `,
  }[size];
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
  & .loading-icon {
    stroke-width: 8px;
    position: absolute;
    right: 10px;
    top: 4px;
    ${getLoadingIconSize}
  }
  ${getButtonSizes}
  ${getButtonColor}
`;

StyledButton.defaultProps = {
  size: "medium",
  color: "primary",
};

export default StyledButton;
