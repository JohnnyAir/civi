import styled from "styled-components";
import Resume from "../../../lib/resume";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import CreateResumeLayout from "../../../components/CreateResumeLayout";
import FormInput from "../../../components/FormInput";
import Button from "../../../components/Button";
import RightArrow from "../../../assets/Icons/right-arrow.svg";
import LeftArrow from "../../../assets/Icons/left-arrow.svg";
import Space from "../../../components/Space";

export default function SummaryForm() {
  const router = useRouter();
  const { resumeid } = router.query;
  const [resume, setResume] = useState();
  const [summary, setSummary] = useState("");

  useEffect(() => {
    Resume.ID(resumeid)
      .then((resume) => {
        setResume(resume);
        setSummary(resume.professionalSummary);
      })
      .catch(() => {
        //handle error
      });
  }, [resumeid]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setSummary(value);
  };

  const save = async (e) => {
    e.preventDefault();
    try {
      await new Resume({ ...resume, professionalSummary: summary }).Update();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateResumeLayout>
      <Form onSubmit={save}>
        <FormInput
          label="Professional Summary"
          as={TextArea}
          size="large"
          placeholder="WRITE YOUR PROFESSIONAL SUMMARY"
          value={summary}
          onChange={handleChange}
        />
        <Button fluid>SAVE PROFESSIONAL SUMMARY</Button>
        <Space y={2} />
        <Button
          link
          href={`/resume/${resumeid}`}
          size="small"
          iconPosition="left"
          icon={<LeftArrow width="24px" height="24px" />}
        >
          About Me
        </Button>
        <Button
          link
          href={`/resume/${resumeid}/work`}
          size="small"
          icon={<RightArrow width="24px" height="24px" />}
          style={{ float: "right" }}
        >
          Work Experience
        </Button>
      </Form>
    </CreateResumeLayout>
  );
}

const Form = styled.form`
  width: 100%;
  max-width: 650px;
`;

const TextArea = styled.textarea`
  && {
    margin: 5px 0px;
    height: 12rem;
    padding: 10px;
    width: 100%;
    border-width: 2px;
    line-height: 1.55rem;
    font-weight: 500;
  }
`;
