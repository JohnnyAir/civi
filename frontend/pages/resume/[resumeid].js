import Page, { StyledPageContent, PageContentHeader } from "@components/Page";
import ViewResume from "@components/ViewResume";
import { useLiveQuery } from "@hooks/useLiveQuery";
import { useRouter } from "next/router";
import Resume from "@lib/resume";
import Svg from "../../icons";

export default function Home() {
  const router = useRouter();
  const { resumeid } = router.query;

  const resume = useLiveQuery(
    () => resumeid && Resume.findById(resumeid, true),
    [resumeid]
  );

  return (
    <Page>
      <StyledPageContent>
        <PageContentHeader>
          <Svg name="templates" width="2rem" />
          {resume && (
            <>
              <h4>{resume.resumetitle}</h4>
            </>
          )}
        </PageContentHeader>
        {resume && <ViewResume {...resume} />}
      </StyledPageContent>
    </Page>
  );
}
