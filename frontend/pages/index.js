import { useState } from "react";
import Page, { StyledPageContent, PageContentHeader } from "@components/Page";
import ResumeCard, { StyledResumeCardGrid, CreateResumeCard } from "@components/ResumeCard";
import { useLiveQuery } from "@hooks/useLiveQuery";
import CreateResumeModal from "@components/CreateResumeModal";
import Resume from "@lib/resume";
import Svg from "../icons";

function SavedResumesList() {
  const savedResumes = useLiveQuery(Resume.all);
  if (!savedResumes || !savedResumes.length) return null;

  return savedResumes.map((resume) => (
    <ResumeCard key={resume.id} {...resume} />
  ));
}

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <Page>
      <StyledPageContent>
        <PageContentHeader>
          <Svg name="templates" width="2rem" />
          <h3>My Resumes</h3>
        </PageContentHeader>
        <StyledResumeCardGrid>
          <CreateResumeCard onClick={() => setOpenModal(true)} tabIndex={0}>
            <h6>CREATE NEW RESUME</h6>
          </CreateResumeCard>
          <SavedResumesList />
        </StyledResumeCardGrid>
      </StyledPageContent>
      <CreateResumeModal
        shouldCloseOnOverlayClick
        isOpen={openModal}
        onRequestClose={closeModal}
      />
    </Page>
  );
}
