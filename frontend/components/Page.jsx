import Head from "next/head";
import styled from "styled-components";
import Sidebar from "./Sidebar";

function Page({ children, ...props }) {
  return (
    <>
      <Head>
        <title>{props.title || "Civi | Create and manage resume offline"}</title>
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
  position: relative;
  overflow: hidden;
`;

const MainContent = styled.main`
  height: 100vh;
  width: 100%;
  overflow-x: auto;
  display: flex;
  justify-content: center;
`;

export const StyledPageContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin-top: 4rem;
  height: max-content;
  margin-bottom: 3rem;
  ${({ theme }) => theme.mediaQueries.tablet} {
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
