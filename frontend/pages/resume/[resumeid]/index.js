import CreateResumeLayout from "../../../components/CreateResumeLayout";
import FormInput from "../../../components/FormInput";
import Space from "../../../components/Space";
import Button from "../../../components/Button";
import styled from "styled-components";
import RightArrow from "../../../assets/Icons/right-arrow.svg";
import Resume from "../../../lib/resume";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AboutForm() {
  const router = useRouter();
  const { resumeid } = router.query;
  const [resume, setResumeInfo] = useState({});

  useEffect(() => {
    Resume.ID(resumeid)
      .then((resume) => setResumeInfo(resume))
      .catch(() => {
        //handle error
      });
  }, [resumeid]);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setResumeInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const save = async (e) => {
    e.preventDefault();
    try {
      await new Resume(resume).Update();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateResumeLayout>
      <Form onSubmit={save}>
        <FormInput
          label="Full Name"
          size="large"
          placeholder="John Doe"
          autoComplete="name"
          value={resume.fullname || ""}
          name="fullname"
          onChange={handleInputChange}
        />
        <FormInput
          label="Job Title"
          size="large"
          placeholder="Project Manager"
          value={resume.jobTitle || ""}
          name="jobTitle"
          onChange={handleInputChange}
        />
        <FormInput
          label="Email Address"
          type="email"
          size="large"
          placeholder="example@mail.com"
          autoComplete="email"
          value={resume.email || ""}
          name="email"
          onChange={handleInputChange}
        />
        <FormInput
          label="Phone Number"
          size="large"
          placeholder="Phone Number"
          value={resume.phoneNo || ""}
          name="phoneNo"
          onChange={handleInputChange}
        />
        <FormInput
          label="Country"
          size="large"
          placeholder="Country"
          value={resume.country || ""}
          name="country"
          onChange={handleInputChange}
        />
        <FormInput
          label="State"
          size="large"
          placeholder="State"
          value={resume.state || ""}
          name="state"
          onChange={handleInputChange}
        />
        <FormInput
          label="City"
          size="large"
          placeholder="City"
          value={resume.city || ""}
          name="city"
          onChange={handleInputChange}
        />
        <FormInput
          label="Personal Website"
          size="large"
          placeholder="https://www.myportfolio.com"
          value={resume.link || ""}
          name="link"
          onChange={handleInputChange}
        />
        <FormInput
          label="Linkedin URL"
          size="large"
          placeholder="https://www.linkedin.com/in/user-14286b162/"
          value={resume.linkedInUrl || ""}
          name="linkedInUrl"
          onChange={handleInputChange}
        />
        <FormInput
          label="Twitter Handle"
          size="large"
          placeholder="@mytwitterhandle"
          value={resume.twitterHandle || ""}
          name="twitterHandle"
          onChange={handleInputChange}
        />
        <div>
          <Button fluid>Save About Me</Button>
          <Space y={2} />
          <Button
            link
            primary
            href={`/resume/${resumeid}/summary`}
            size="small"
            icon={<RightArrow width="24px" height="24px" />}
            style={{ float: "right" }}
          >
            Professional Summary
          </Button>
        </div>
      </Form>
    </CreateResumeLayout>
  );
}

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  padding: 0 0 20px 0;
  @media ${({ theme }) => theme.screenSize.laptop} {
    margin-left: 25px;
  }
`;
