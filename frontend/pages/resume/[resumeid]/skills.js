import { useState } from "react";
import { EmptySectionText } from "../../../components/Message";
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
  skill: "",
  editMode: false,
  editIndex: null,
};

function SkillsForm() {
  const router = useRouter();
  const { resumeid } = router.query;
  const [formState, SetFormState] = useState(initialFormState);

  const resume = useLiveQuery(
    () => resumeid && Resume.findById(resumeid, true),
    [resumeid],
    { loading: true, skills: [] }
  );

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    SetFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const addSkills = async (e) => {
    e.preventDefault();
    let _resume = new Resume(resume);
    try {
      let { editMode, editIndex, ...formData } = formState;
      if (editMode) {
        _resume.skills[editIndex] = { ...formData };
      } else {
        if (!_resume.skills) _resume.skills = [];
        _resume.skills.push(formData);
      }
      await _resume.update();
      SetFormState(initialFormState);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSkillEdit = (editIndex) => {
    SetFormState({
      ...resume.skills[editIndex],
      editMode: true,
      editIndex: editIndex,
    });
  };

  const handleSkillDelete = (editIndex) => {
    let _resume = new Resume(resume);
    _resume.skills.splice(editIndex, 1);
    _resume.update();
  };

  return (
    <ItemFormLayout.Layout>
      <ItemFormLayout.ItemSection>
        <h6>Your Skils </h6>
        <div>
          {resume && (
            <SkillsList
              onSkillEdit={handleSkillEdit}
              onSkillDelete={handleSkillDelete}
              loading={resume.loading}
              skills={resume.skills}
            />
          )}
        </div>
      </ItemFormLayout.ItemSection>
      <ItemFormLayout.FormSection>
        <h6>Add Your Skills </h6>
        <ItemFormLayout.Form onSubmit={addSkills}>
          <FormInput
            label="Enter Your Technical Skills"
            size="large"
            placeholder="ex. Frontend: HTML, CSS"
            name="skills"
            value={formState.skills}
            onChange={handleInputChange}
          />
          <Button type="submit" fluid>
            {formState.editMode ? "Update Skills" : "Add Skills"}
          </Button>
          <Space y={2} />
          <Button
            link
            href={`/resume/${resumeid}/volunteer`}
            size="small"
            iconPosition="left"
            icon={<LeftArrow width="24px" height="24px" />}
          >
            Volunteer
          </Button>
          <Button
            link
            href={`/resume/${resumeid}/preview`}
            size="small"
            icon={<RightArrow width="24px" height="24px" />}
            style={{ float: "right" }}
          >
            Preview
          </Button>
        </ItemFormLayout.Form>
      </ItemFormLayout.FormSection>
    </ItemFormLayout.Layout>
  );
}

function SkillsList(props) {
  let { skills, loading, onSkillEdit, onSkillDelete } = props;

  if (loading) {
    return "Loading";
  }

  if (!skills || !skills.length) {
    return <EmptySectionText>Fill form to add your Skills</EmptySectionText>;
  }

  return skills.map((s, index) => (
    <ItemCard
      key={s.skill + index}
      MainTitle={s.skill}
      onEdit={() => onSkillEdit(index)}
      onDelete={() => onSkillDelete(index)}
    />
  ));
}

export default function ResumeSkillsPage() {
  return (
    <CreateResumeLayout>
      <SkillsForm />
    </CreateResumeLayout>
  );
}
