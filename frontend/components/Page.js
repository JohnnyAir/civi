import Head from "next/head";
import styled from "styled-components";
import Sidebar from "./Sidebar";

function Page({ children }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledPageContainer>
        <Sidebar />
        <MainContent>{children}</MainContent>
      </StyledPageContainer>
    </>
  );
}

const StyledPageContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  font-family: ${({ theme }) => theme.font.main};
  position: relative;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.black[800]};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.font.main};
  }
  hr {
    height: 1px;
    background-color: ${({ theme }) => theme.colors.black[300]};
    border: none;
  }
`;

const MainContent = styled.main`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.grey[300]};
  width: 100%;
  overflow-x: auto;
  display: flex;
  justify-content: center;
`;

export const StyledPageContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin-top: 4rem;
  @media ${({ theme }) => theme.screenSize.tablet} {
    margin-top: 1rem;
  }
`;

export const PageContentHeader = styled.div`
  display: flex;
  svg {
    margin-right: 10px;
  }
`;

export default Page;
