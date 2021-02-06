import React from "react";
import { StyledResumePaper, StyledResumePage } from "./StyledResumePage";
import { Grid, Flex, Header, Paragraph, Hr, Text } from "./Layout";
import Icon from "../icons";
import RenderResumeView from "./Resume/RenderResumeView";
import json from "./Resume/templates/plain.view.json";

function ViewResume(props) {
  const {
    ProfessionalTitle,
    city,
    country,
    education,
    email,
    fullname,
    id,
    jobTitle,
    link,
    linkedInUrl,
    phoneNo,
    professionalSummary,
    projects,
    resumetitle,
    state,
    twitterHandle,
    voluntaryWorks,
    works,
  } = props;

  return (
    <StyledResumePage>
      <StyledResumePaper>
        <RenderResumeView json={json} />
      </StyledResumePaper>
    </StyledResumePage>
  );
}

export default ViewResume;
