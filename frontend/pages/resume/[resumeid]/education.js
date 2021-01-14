import { useState } from "react";
import { EmptySectionText } from "../../../components/Message";
import Resume from "../../../lib/resume";
import { useRouter } from "next/router";
import CreateResumeLayout from "../../../components/CreateResumeLayout";
import * as ItemFormLayout from "../../../components/StyledItemFormLayout";
import FormInput from "../../../components/FormInput";
import Space from "../../../components/Space";
import ItemCard from "../../../components/ItemCard";
import Button from "../../../components/Button";
import RightArrow from "../../../assets/Icons/right-arrow.svg";
import LeftArrow from "../../../assets/Icons/left-arrow.svg";
import { useLiveQuery } from "../../../hooks/useLiveQuery";
import { toast } from "react-toast";

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

function EducationForm() {
  const router = useRouter();
  const { resumeid } = router.query;
  const [formState, SetFormState] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  const resume = useLiveQuery(
    () => resumeid && Resume.findById(resumeid, true),
    [resumeid],
    { loading: true, education: [] }
  );

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    SetFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const addEducation = async (e) => {
    e.preventDefault();
    setLoading(true);
    //create copy to avoid mutation
    let _resume = new Resume(resume);
    try {
      let { editMode, editIndex, ...formData } = formState;
      if (editMode) {
        _resume.education[editIndex] = { ...formData };
      } else {
        if (!_resume.education) _resume.education = [];
        _resume.education.push(formData);
      }
      await _resume.update();
      SetFormState(initialFormState);
      toast.success(editMode? "Changes saved": "Education added")
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (editIndex) => {
    SetFormState({
      ...resume.education[editIndex],
      editMode: true,
      editIndex: editIndex,
    });
  };

  const handleDelete = (editIndex) => {
    let _resume = new Resume(resume);
    _resume.education.splice(editIndex, 1);
    _resume.update();
  };

  return (
    <ItemFormLayout.Layout>
      <ItemFormLayout.ItemSection>
        <h6>Your Education </h6>
        <div>
          {resume && (
            <EducationList
              onItemEdit={handleEdit}
              onItemDelete={handleDelete}
              loading={resume.loading}
              education={resume.education}
            />
          )}
        </div>
      </ItemFormLayout.ItemSection>
      <ItemFormLayout.FormSection>
        <h6>Add Education </h6>
        <ItemFormLayout.Form onSubmit={addEducation}>
          <FormInput
            label="Qualification"
            size="large"
            placeholder="Educational Qualification"
            name="qualification"
            value={formState.qualification}
            onChange={handleInputChange}
          />
          <FormInput
            label="Field of study"
            size="large"
            placeholder="Field of study"
            name="field"
            value={formState.field}
            onChange={handleInputChange}
          />
          <FormInput
            label="School"
            size="large"
            placeholder="School"
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
          <FormInput
            label="Location"
            size="large"
            placeholder="City, Country"
            name="location"
            value={formState.location}
            onChange={handleInputChange}
          />
          <FormInput
            label="GPA"
            size="large"
            placeholder="ex. 3.84"
            name="gpa"
            value={formState.gpa}
            onChange={handleInputChange}
          />
          <Button loading={loading} type="submit" fluid>
            {formState.editMode ? "Update Education" : "Add Education"}
          </Button>
          <Space y={2} />
          <Button
            link
            href={`/resume/${resumeid}/work`}
            size="small"
            iconPosition="left"
            icon={<LeftArrow width="24px" height="24px" />}
          >
            Work
          </Button>
          <Button
            link
            href={`/resume/${resumeid}/project`}
            size="small"
            icon={<RightArrow width="24px" height="24px" />}
            style={{ float: "right" }}
          >
            Project
          </Button>
        </ItemFormLayout.Form>
      </ItemFormLayout.FormSection>
    </ItemFormLayout.Layout>
  );
}

function EducationList(props) {
  let { education, loading, onItemEdit, onItemDelete } = props;

  if (loading) {
    return "Loading";
  }

  if (!education || !education.length) {
    return <EmptySectionText>Fill form to add your education</EmptySectionText>;
  }

  return education.map((education, index) => (
    <ItemCard
      key={education.school + index}
      MainTitle={education.qualification}
      SubTitle={education.school}
      dateFrom={education.dateFrom}
      dateTo={education.dateTo}
      onEdit={() => onItemEdit(index)}
      onDelete={() => onItemDelete(index)}
    />
  ));
}

export default function EducationPage() {
  return (
    <CreateResumeLayout>
      <EducationForm />
    </CreateResumeLayout>
  );
}
