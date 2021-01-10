import React from "react";
import styled from "styled-components";
import EmbarrasedIcon from "../assets/Icons/embarrased.svg";
import { EmptySectionText } from "./Message";

const BoundaryContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 65vh;
  color: ${({ theme }) => theme.colors.black[500]};
`;

const EmbarrasedSvg = styled(EmbarrasedIcon)`
  width: 100px;
  fill: ${({ theme }) => theme.colors.black[500]};
`;

export default class ResumeNotFoundErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    // console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <BoundaryContainer>
          <EmbarrasedSvg />
          <EmptySectionText as="h4">
            Opps. The resume you asked for cannot be found!
          </EmptySectionText>
        </BoundaryContainer>
      );
    }

    return this.props.children;
  }
}
