import styled from "styled-components";

const getBorderColor = ({ error, success, theme }) => {
  if (error) {
    return ({ theme }) => theme.colors.red["500"];
  }

  if (success) {
    return theme.colors.green["300"];
  }

  return theme.colors.black["300"];
};

const getHeight = ({ size }) =>
  ({
    tiny: "1.5rem",
    small: "2rem",
    medium: "2.5rem",
    large: "3rem",
    xlarge: "4rem",
  }[size]);

const StyledInput = styled.input`
  border-color: ${getBorderColor};
  border-style: solid;
  box-sizing: border-box;
  border-radius: 4px;
  height: ${getHeight};
  outline: none;
  padding: 0 0.7rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black[600]};
  background-color: ${({ theme }) => theme.colors.white.full};
  &:disabled {
    background-color: ${({ theme }) => theme.colors.black[50]};
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary[300]};
  }
  &:focus:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.black[400]};
  }
  &[type="date"] {
    font-family: inherit;
  }
`;

StyledInput.defaultProps = {
  size: "medium",
};

export default StyledInput;
