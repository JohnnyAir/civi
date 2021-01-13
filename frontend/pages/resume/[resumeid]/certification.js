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
  certificateName: "",
  issuedBy: "",
  dateIssued: "",
  description: "",
  editMode: false,
  editIndex: null,
};

export default function CertificationForm() {
  const router = useRouter();
  const { resumeid } = router.query;
  const [formState, SetFormState] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  const resume = useLiveQuery(
    () => resumeid && Resume.findById(resumeid, true),
    [resumeid],
    { loading: true, certificates: [] }
  );

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    SetFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const addCertificate = async (e) => {
    e.preventDefault();
    setLoading(true);
    //create copy to avoid mutation
    let _resume = new Resume(resume);
    try {
      let { editMode, editIndex, ...formData } = formState;
      if (editMode) {
        _resume.certificates[editIndex] = { ...formData };
      } else {
        if (!_resume.certificates) _resume.certificates = [];
        _resume.certificates.push(formData);
      }
      await _resume.Update();
      SetFormState(initialFormState);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (editIndex) => {
    SetFormState({
      ...resume.certificates[editIndex],
      editMode: true,
      editIndex: editIndex,
    });
  };

  const handleDelete = (editIndex) => {
    let _resume = new Resume(resume);
    _resume.certificates.splice(editIndex, 1);
    _resume.Update();
  };

  return (
    <CreateResumeLayout>
      <ItemFormLayout.Layout>
        <ItemFormLayout.ItemSection>
          <h6>Your Certification </h6>
          <div>
            {resume && (
              <CertificatesList
                onItemEdit={handleEdit}
                onItemDelete={handleDelete}
                loading={resume.loading}
                certificates={resume.certificates}
              />
            )}
          </div>
        </ItemFormLayout.ItemSection>
        <ItemFormLayout.FormSection>
          <h6>Add Your Certificates </h6>
          <ItemFormLayout.Form onSubmit={addCertificate}>
            <FormInput
              label="Certificate Name"
              size="large"
              placeholder="Certificate Name"
              name="certificateName"
              value={formState.certificateName}
              onChange={handleInputChange}
            />
            <FormInput
              label="Issuer"
              size="large"
              placeholder="Issuer"
              name="issuedBy"
              value={formState.issuedBy}
              onChange={handleInputChange}
            />
            <FormInput
              label="Date Issued"
              size="large"
              placeholder="January 2020"
              name="dateIssued"
              value={formState.dateIssued}
              onChange={handleInputChange}
            />
            <FormTextArea
              label="Description (Optional)"
              size="large"
              height="10rem"
              name="description"
              value={formState.description}
              onChange={handleInputChange}
            />
            <Button loading={loading} type="submit" fluid>
              {formState.editMode ? "Update Certificate" : "Add Certificate"}
            </Button>
            <Space y={2} />
            <Button
              link
              href={`/resume/${resumeid}/project`}
              size="small"
              iconPosition="left"
              icon={<LeftArrow width="24px" height="24px" />}
            >
              Project
            </Button>
            <Button
              link
              href={`/resume/${resumeid}/volunteer`}
              size="small"
              icon={<RightArrow width="24px" height="24px" />}
              style={{ float: "right" }}
            >
              Volunteer
            </Button>
          </ItemFormLayout.Form>
        </ItemFormLayout.FormSection>
      </ItemFormLayout.Layout>
    </CreateResumeLayout>
  );
}

function CertificatesList(props) {
  let { certificates, loading, onItemEdit, onItemDelete } = props;

  if (loading) {
    return "Loading";
  }

  if (!certificates || !certificates.length) {
    return <InfoSpan>Fill form to add your certificates</InfoSpan>;
  }

  return certificates.map((certificate, index) => (
    <ItemCard
      key={certificate.certificateName + index}
      MainTitle={certificate.certificateName}
      SubTitle={certificate.issuedBy}
      dateFrom={certificate.dateIssued}
      dateTo="Present"
      onEdit={() => onItemEdit(index)}
      onDelete={() => onItemDelete(index)}
    />
  ));
}

const InfoSpan = styled.span`
  color: #c9cee1;
  font-weight: 600;
`;
