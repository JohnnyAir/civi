import Page, { StyledPageContent } from "../components/Page";
import {
  StyledResumeCardGrid,
  CreateResumeCard,
} from "../components/ResumeCard";
// import styled from "styled-components";

export default function Home() {
  return (
    <Page>
      <StyledPageContent>
        <h3>My Resumes</h3>
        <hr />
        <StyledResumeCardGrid>
          <CreateResumeCard tabIndex={0}>
            <h6>CREATE NEW RESUME</h6>
          </CreateResumeCard>
        </StyledResumeCardGrid>
      </StyledPageContent>
    </Page>
  );
}
