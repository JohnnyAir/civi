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
import { toast } from "react-toast";

const initialFormState = {
  projectName: "",
  organization: "",
  dateFrom: "",
  dateTo: "",
  summary: "",
  editMode: false,
  editIndex: null,
};

function ProjectsForm() {
  const router = useRouter();
  const { resumeid } = router.query;
  const [formState, SetFormState] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  const resume = useLiveQuery(
    () => resumeid && Resume.findById(resumeid, true),
    [resumeid],
    { loading: true, projects: [] }
  );

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    SetFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const addProject = async (e) => {
    e.preventDefault();
    //create copy to avoid mutation
    setLoading(true);
    let _resume = new Resume(resume);
    try {
      let { editMode, editIndex, ...formData } = formState;
      if (editMode) {
        _resume.projects[editIndex] = { ...formData };
      } else {
        if (!_resume.projects) _resume.projects = [];
        _resume.projects.push(formData);
      }
      await _resume.update();
      SetFormState(initialFormState);
      toast.success(editMode ? "Changes Saved" : "Project Added");
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (editIndex) => {
    SetFormState({
      ...resume.projects[editIndex],
      editMode: true,
      editIndex: editIndex,
    });
  };

  const handleDelete = (editIndex) => {
    let _resume = new Resume(resume);
    _resume.projects.splice(editIndex, 1);
    _resume.Update();
  };

  return (
    <ItemFormLayout.Layout>
      <ItemFormLayout.ItemSection>
        <h6>Your Projects </h6>
        <div>
          {resume && (
            <ProjectsList
              onItemEdit={handleEdit}
              onItemDelete={handleDelete}
              loading={resume.loading}
              projects={resume.projects}
            />
          )}
        </div>
      </ItemFormLayout.ItemSection>
      <ItemFormLayout.FormSection>
        <h6>Add Your Projects </h6>
        <ItemFormLayout.Form onSubmit={addProject}>
          <FormInput
            label="Project Name"
            size="large"
            placeholder="Project Name"
            name="projectName"
            value={formState.projectName}
            onChange={handleInputChange}
          />
          <FormInput
            label="Organization"
            size="large"
            placeholder="Organization"
            name="organization"
            value={formState.organization}
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
            placeholder="ex. January 2020"
            name="dateTo"
            value={formState.dateTo}
            onChange={handleInputChange}
          />
          <FormTextArea
            label="What did you do?"
            size="large"
            height="15rem"
            name="summary"
            value={formState.summary}
            onChange={handleInputChange}
          />
          <Button loading={loading} type="submit" fluid>
            {formState.editMode ? "Update Project" : "Add Project"}
          </Button>
          <Space y={2} />
          <Button
            link
            href={`/resume/${resumeid}/education`}
            size="small"
            iconPosition="left"
            icon={<LeftArrow width="24px" height="24px" />}
          >
            Education
          </Button>
          <Button
            link
            href={`/resume/${resumeid}/certification`}
            size="small"
            icon={<RightArrow width="24px" height="24px" />}
            style={{ float: "right" }}
          >
            Certification
          </Button>
        </ItemFormLayout.Form>
      </ItemFormLayout.FormSection>
    </ItemFormLayout.Layout>
  );
}

function ProjectsList(props) {
  let { projects, loading, onItemEdit, onItemDelete } = props;

  if (loading) {
    return "Loading";
  }

  if (!projects || !projects.length) {
    return <EmptySectionText>Fill form to add your projects</EmptySectionText>;
  }

  return projects.map((project, index) => (
    <ItemCard
      key={project.projectName + index}
      MainTitle={project.projectName}
      SubTitle={project.organization}
      dateFrom={project.dateFrom}
      dateTo={project.dateTo}
      onEdit={() => onItemEdit(index)}
      onDelete={() => onItemDelete(index)}
    />
  ));
}

export default function ProjectsFormPage() {
  return (
    <CreateResumeLayout>
      <ProjectsForm />
    </CreateResumeLayout>
  );
}
