import Page, { StyledPageContent, PageContentHeader } from "./Page";
import styled from "styled-components";
import NavLink from "./NavLink";
import CreateResumeIcon from "../assets/Icons/create-resume.svg";
import { useRouter } from "next/router";
import useMounted from "../hooks/useMounted";
import ErrorBoundary from "./ResumeNotFoundErrorBoundary";

export default function CreateResumeLayout({ children }) {
  const router = useRouter();
  const { resumeid } = router.query;

  const isMounted = useMounted();

  const setHref = (relativePath) => {
    return {
      pathname: `/resume/[resumeid]${relativePath}`,
      query: { resumeid },
    };
  };

  return (
    <Page>
      <StyledPageContent>
        <PageContentHeader>
          <CreateResumeIcon width="2rem" />
          <h3>Create Resume</h3>
        </PageContentHeader>
        <TabSection>
          <nav>
            <TabList>
              <Tab>
                <NavLink href={setHref("")}>ABOUT</NavLink>
              </Tab>
              <Tab>
                <NavLink href={setHref("/summary")}>SUMMARY</NavLink>
              </Tab>
              <Tab>
                <NavLink href={setHref("/work")}>WORK</NavLink>
              </Tab>
              <Tab>
                <NavLink href={setHref("/education")}>EDUCATION</NavLink>
              </Tab>
              <Tab>
                <NavLink href={setHref("/project")}>PROJECT</NavLink>
              </Tab>
              <Tab>
                <NavLink href={setHref("/certification")}>CERTIFICATIONS</NavLink>
              </Tab>
              <Tab>
                <NavLink href={setHref("/volunteer")}>VOLUNTEER</NavLink>
              </Tab>
              <Tab>
                <NavLink href={setHref("/skills")}>SKILLS</NavLink>
              </Tab>
              <Tab>
                <NavLink href={setHref("/preview")}>PREVIEW</NavLink>
              </Tab>
            </TabList>
          </nav>
        </TabSection>
        {isMounted && <ErrorBoundary>{children}</ErrorBoundary>}
      </StyledPageContent>
    </Page>
  );
}

const TabList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  position: relative;
  padding-left: 5px;
  &:before {
    content: "";
    width: 3px;
    height: 110%;
    position: absolute;
    top: 0;
    left: 0;
    background: #1153d6;
  }
`;

const Tab = styled.li`
  font-size: 0.6rem;
  white-space: nowrap;
  font-weight: 600;
  a {
    margin: 0 0.2rem;
    padding: 0.4em 0.7em;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black[700]};
  }
  a.active {
    color: #fff;
    background: ${({ theme }) => theme.colors.primary[600]};
    border-radius: 3px;
  }
`;

const TabSection = styled.div`
  padding: 10px 0px;
  overflow: auto;
  margin-bottom: 30px;
`;
