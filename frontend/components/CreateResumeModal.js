import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import FormInput from "./FormInput";
import Button from "./Button";
import Close from "../assets/Icons/cancel.svg";
import Resume from "../lib/resume";
import { useRouter } from "next/router";

Modal.setAppElement("#__next");

function CreateResumeModal(props) {
  const [resumetitle, setResumeTitle] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCreateResume = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let resumeID = await new Resume({
        resumetitle,
      }).save();
      router.push(`/resume/${resumeID}`);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <>
      <StyledCreateResumeModal {...props}>
        <Button link onClick={props.onRequestClose} style={{ float: "right" }}>
          <Close width="20px" />
        </Button>
        <h2>Create Resume</h2>
        <form onSubmit={handleCreateResume}>
          <FormInput
            onKeyUp={(e) => setResumeTitle(e.target.value)}
            size="large"
            label="Resume Title"
            required
          />
          <Button loading={loading}>Create</Button>
        </form>
      </StyledCreateResumeModal>
      <style jsx global>
        {`
          .ReactModal__Overlay {
            position: fixed;
            inset: 0px;
            background-color: rgba(255, 255, 255, 0.75);
            z-index: 9999;
          }
        `}
      </style>
    </>
  );
}

const StyledCreateResumeModal = styled(Modal)`
  position: absolute;
  inset: 40px;
  border: 1px solid rgb(204, 204, 204);
  background: rgb(255, 255, 255);
  overflow: auto;
  border-radius: 4px;
  outline: none;
  padding: 20px;
  width: 500px;
  height: max-content;
  margin: auto;
`;

export default CreateResumeModal;
