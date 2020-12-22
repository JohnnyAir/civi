import styled from "styled-components";

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
  @media ${({ theme }) => theme.screenSize.laptop} {
    gap: 50px;
    gap: 35px;
  }
`;

export const StyledResumeCard = styled.div`
  height: 300px;
  width: 100%;
  cursor: pointer;
`;

export const CreateResumeCard = styled(StyledResumeCard)`
  border-style: dashed;
  border-width: 2px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
