import React from "react";
import { StyledResumePaper, StyledResumePage } from "./StyledResumePage";
import { Grid, Flex, Header, Paragraph, Hr, Text } from "./Layout";
import Icon from "../Icons";

function ResumePreview(props) {
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
        <Grid gridTemplateColumns="1fr" fontSize="10pt" lineHeight="1.5">
          <Flex flexDirection="column" alignItems="center" pb={10}>
            <Header>{fullname}</Header>
            <Flex justifyContent="center" flexWrap="wrap">
              <Text>
                <Icon name="address_pin" />
                {city + "," + country}
              </Text>
              <Text>
                <Icon name="email" />
                {email}
              </Text>
              <Text>
                <Icon name="phone" />
                {phoneNo}
              </Text>
              <Text>
                <Icon name="linkedIn" />
                {linkedInUrl}
              </Text>
            </Flex>
          </Flex>
          <Hr />
          <Flex flexDirection="column" pt={15} pb={15}>
            <Header as="h3">SUMMARY</Header>
            <Hr marginTop={0} borderStyle="solid" />
            <Paragraph>{professionalSummary}</Paragraph>
          </Flex>
        </Grid>
      </StyledResumePaper>
    </StyledResumePage>
  );
}

export default ResumePreview;
