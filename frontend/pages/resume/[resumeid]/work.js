import { useState } from "react";
import styled from "styled-components";
import Resume from "../../../lib/resume";
import { useRouter } from "next/router";
import CreateResumeLayout from "../../../components/CreateResumeLayout";
import * as ItemFormLayout from "../../../components/StyledItemFormLayout";
import FormInput, { FormTextArea } from "../../../components/FormInput";
import Space from "../../../components/Space";
import ItemCard from "../../../components/ItemCard";
import Button from "../../../components/Button";
import RightArrow from "../../../assets/Icons/right-arrow.svg";
import LeftArrow from "../../../assets/Icons/left-arrow.svg";
import { useLiveQuery } from "../../../hooks/useLiveQuery";

const initialFormState = {
  company: "",
  position: "",
  dateFrom: "",
  dateTo: "",
  location: "",
  summary: "",
  editMode: false,
  editIndex: null,
};

export default function WorkExperienceForm() {
  const router = useRouter();
  const { resumeid } = router.query;
  const [formState, SetFormState] = useState(initialFormState);

  const resume = useLiveQuery(
    () => resumeid && Resume.ID(resumeid, true),
    [resumeid],
    { loading: true, works: [] }
  );

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    SetFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const addExperience = async (e) => {
    e.preventDefault();
    //create copy to avoid mutation
    let _resume = new Resume(resume);
    try {
      let { editMode, editIndex, ...work } = formState;
      if (editMode) {
        _resume.works[editIndex] = { ...work };
      } else {
        if (!_resume.works) _resume.works = [];
        _resume.works.push(work);
      }
      await _resume.Update();
      SetFormState(initialFormState);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (editIndex) => {
    SetFormState({
      ...resume.works[editIndex],
      editMode: true,
      editIndex: editIndex,
    });
  };

  const handleDelete = (editIndex) => {
    let _resume = new Resume(resume);
    _resume.works.splice(editIndex, 1);
    _resume.Update();
  };

  return (
    <CreateResumeLayout>
      <ItemFormLayout.Layout>
        <ItemFormLayout.ItemSection>
          <h6>Your Work Experiences </h6>
          <div>
            {resume && (
              <ExperienceList
                onItemEdit={handleEdit}
                onItemDelete={handleDelete}
                loading={resume.loading}
                works={resume.works}
              />
            )}
          </div>
        </ItemFormLayout.ItemSection>
        <ItemFormLayout.FormSection>
          <h6>Add Work Experience </h6>
          <ItemFormLayout.Form onSubmit={addExperience}>
            <FormInput
              label="Company Name"
              size="large"
              placeholder="Company Name"
              name="company"
              value={formState.company}
              onChange={handleInputChange}
            />
            <FormInput
              label="Location"
              size="large"
              placeholder="Lagos, Nigeria"
              name="location"
              value={formState.location}
              onChange={handleInputChange}
            />
            <FormInput
              label="Start Date"
              size="large"
              placeholder="January 2020"
              name="dateFrom"
              value={formState.dateFrom}
              onChange={handleInputChange}
            />
            <FormInput
              label="End Date"
              size="large"
              placeholder="December 2020"
              name="dateTo"
              value={formState.dateTo}
              onChange={handleInputChange}
            />
            <FormInput
              label="Position"
              size="large"
              placeholder="Project Manager"
              name="position"
              value={formState.position}
              onChange={handleInputChange}
            />
            <FormTextArea
              label="What did you do at the Company?"
              size="large"
              height="15rem"
              name="summary"
              value={formState.summary}
              onChange={handleInputChange}
            />
            <Button type="submit" fluid>
              {formState.editMode
                ? "Update Work Experience"
                : "Add Work Experience"}
            </Button>
            <Space y={2} />
            <Button
              link
              href={`/resume/${resumeid}/summary`}
              size="small"
              iconPosition="left"
              icon={<LeftArrow width="24px" height="24px" />}
            >
              Professional Summary
            </Button>
            <Button
              link
              href={`/resume/${resumeid}/education`}
              size="small"
              icon={<RightArrow width="24px" height="24px" />}
              style={{ float: "right" }}
            >
              Education
            </Button>
          </ItemFormLayout.Form>
        </ItemFormLayout.FormSection>
      </ItemFormLayout.Layout>
    </CreateResumeLayout>
  );
}

function ExperienceList(props) {
  let { works, loading, onItemEdit, onItemDelete } = props;

  if (loading) {
    return "Loading";
  }

  if (!works || !works.length) {
    return <InfoSpan>Fill form to add your work experiences</InfoSpan>;
  }

  return works.map((work, index) => (
    <ItemCard
      key={work.company + index}
      MainTitle={work.position}
      SubTitle={`@${work.company}`}
      dateFrom={work.dateFrom}
      dateTo={work.dateTo}
      onEdit={() => onItemEdit(index)}
      onDelete={() => onItemDelete(index)}
    />
  ));
}

const InfoSpan = styled.span`
  color: #c9cee1;
  font-weight: 600;
`;
