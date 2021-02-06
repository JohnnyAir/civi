import styled from "styled-components";
import Svg from "../icons";
import { useRouter } from "next/router";

export default function ResumeCard(props) {
  const { resumetitle, id } = props;
  const router = useRouter();
  return (
    <StyledResumeCard onClick={() => router.push(`/resume/${id}`)} tabIndex={0}>
      <ResumePreview></ResumePreview>
      <CardDetails>
        <strong>{resumetitle}</strong>
        <Svg name="more" width="1rem" tabIndex={0} />
      </CardDetails>
    </StyledResumeCard>
  );
}

export const StyledResumeCardGrid = styled.div`
  box-sizing: border-box;
  display: grid;
  width: 100%;
  max-width: 1200px;
  margin: 32px auto;
  padding-left: 16px;
  padding-right: 16px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
  ${({ theme }) => theme.mediaQueries.laptop} {
    gap: 50px;
    gap: 35px;
  }
`;

export const StyledResumeCard = styled.div`
  height: 300px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(220, 222, 224);
  overflow: hidden;
  outline: none;
  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary[300]};
    box-shadow: 0px 0px 3px 1px
      ${({ theme }) => theme.colors.primary.transparent[26]};
  }
`;

export const CreateResumeCard = styled(StyledResumeCard)`
  border-style: dashed;
  border-width: 2px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResumePreview = styled.div`
  width: 100%;
  height: 100%;
`;

const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: calc(100% - 25px);
  padding: 5px 15px;
  bottom: 3px;
  svg:focus {
    outline-style: dotted;
    outline-width: 2px;
  }
  svg:hover {
    fill: ${({ theme }) => theme.colors.primary[300]};
  }
`;
