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
  qualification: "",
  field: "",
  dateFrom: "",
  dateTo: "",
  location: "",
  school: "",
  gpa: "",
  editMode: false,
  editIndex: null,
};

function VolunteerExperienceForm() {
  const router = useRouter();
  const { resumeid } = router.query;
  const [formState, SetFormState] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  const resume = useLiveQuery(
    () => resumeid && Resume.findById(resumeid, true),
    [resumeid],
    { loading: true, voluntaryWorks: [] }
  );

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    SetFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const addVoluntaryWork = async (e) => {
    e.preventDefault();
    setLoading(true);
    let _resume = new Resume(resume);
    try {
      let { editMode, editIndex, ...formData } = formState;
      if (editMode) {
        _resume.voluntaryWorks[editIndex] = { ...formData };
      } else {
        if (!_resume.voluntaryWorks) _resume.voluntaryWorks = [];
        _resume.voluntaryWorks.push(formData);
      }
      await _resume.update();
      SetFormState(initialFormState);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (editIndex) => {
    SetFormState({
      ...resume.voluntaryWorks[editIndex],
      editMode: true,
      editIndex: editIndex,
    });
  };

  const handleDelete = (editIndex) => {
    let _resume = new Resume(resume);
    _resume.voluntaryWorks.splice(editIndex, 1);
    _resume.update();
  };

  return (
    <ItemFormLayout.Layout>
      <ItemFormLayout.ItemSection>
        <h6>Your Volunteer Experience </h6>
        <div>
          {resume && (
            <VolunteerExperienceList
              onItemEdit={handleEdit}
              onItemDelete={handleDelete}
              loading={resume.loading}
              voluntaryWorks={resume.voluntaryWorks}
            />
          )}
        </div>
      </ItemFormLayout.ItemSection>
      <ItemFormLayout.FormSection>
        <h6>Add Your Volunteer Experience </h6>
        <ItemFormLayout.Form onSubmit={addVoluntaryWork}>
          <FormInput
            label="Title/Position"
            size="large"
            placeholder="ex. Bsc"
            name="qualification"
            value={formState.qualification}
            onChange={handleInputChange}
          />
          <FormInput
            label="Organization"
            size="large"
            placeholder="ex. Computer Science"
            name="field"
            value={formState.field}
            onChange={handleInputChange}
          />
          <FormInput
            label="Location"
            size="large"
            placeholder="City, Country"
            name="school"
            value={formState.school}
            onChange={handleInputChange}
          />
          <FormInput
            label="Start Date"
            size="large"
            placeholder="ex. January 2020"
            name="dateFrom"
            value={formState.dateFrom}
            onChange={handleInputChange}
          />
          <FormInput
            label="End Date"
            size="large"
            placeholder="ex. December 2020"
            name="dateTo"
            value={formState.dateTo}
            onChange={handleInputChange}
          />
          <FormTextArea
            label="Organization Description (optional)"
            size="large"
            placeholder="ex. Lagos, Nigeria"
            name="location"
            value={formState.location}
            onChange={handleInputChange}
            height="6rem"
          />
          <FormTextArea
            label="Tasks/Achievements"
            size="large"
            placeholder="ex. 3.84"
            name="gpa"
            value={formState.gpa}
            onChange={handleInputChange}
            height="12rem"
          />
          <Button type="submit" fluid>
            {formState.editMode
              ? "Update Volunteer Experience"
              : "Add Volunteer Experience"}
          </Button>
          <Space y={2} />
          <Button
            link
            href={`/resume/${resumeid}/certification`}
            size="small"
            iconPosition="left"
            icon={<LeftArrow width="24px" height="24px" />}
          >
            Certifications
          </Button>
          <Button
            link
            href={`/resume/${resumeid}/skills`}
            size="small"
            icon={<RightArrow width="24px" height="24px" />}
            style={{ float: "right" }}
          >
            Skills
          </Button>
        </ItemFormLayout.Form>
      </ItemFormLayout.FormSection>
    </ItemFormLayout.Layout>
  );
}

function VolunteerExperienceList(props) {
  let { voluntaryWorks, loading, onItemEdit, onItemDelete } = props;

  if (loading) {
    return "Loading";
  }

  if (!voluntaryWorks || !voluntaryWorks.length) {
    return (
      <EmptySectionText>
        Fill form to add your Volunteer Experience
      </EmptySectionText>
    );
  }

  return voluntaryWorks.map((v, index) => (
    <ItemCard
      key={v.school + index}
      MainTitle={v.qualification}
      SubTitle={v.school}
      dateFrom={v.dateFrom}
      dateTo={v.dateTo}
      onEdit={() => onItemEdit(index)}
      onDelete={() => onItemDelete(index)}
    />
  ));
}

export default function VolunteerExperiencePage() {
  return (
    <CreateResumeLayout>
      <VolunteerExperienceForm />
    </CreateResumeLayout>
  );
}
