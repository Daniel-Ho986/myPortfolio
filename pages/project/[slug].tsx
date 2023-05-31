import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Footer, Loader, Navbar, SocialBar } from '@shared-components';
import { PersonalDetails, Project } from '@utils/types';
import { PersonalDetailsContext, ProjectDetailsContext } from '@utils/contexts';
import { ProjectDetailedPage } from '@components';
import NotFound from '@pages/404';
import { getPersonalDetails, getProjectDetails } from '@utils/apiService';
import { projectsDefault } from '@utils/constants';

type Props = {
  personalDetails: PersonalDetails;
  projectDetails: Project[];
};

const ProjectDetail = ({ personalDetails, projectDetails }: Props): JSX.Element => {
  const router = useRouter();
  const [project, setProject] = useState<Project | string>('loading');
  useEffect(() => {
    const { slug } = router.query;
    const found = projectsDefault.find((p) => p.slug === slug);
    setProject(found);
  }, [project]);
  if (project === 'loading') {
    return <Loader />;
  }
  return project ? (
    <>
      <PersonalDetailsContext.Provider value={personalDetails}>
        <ProjectDetailsContext.Provider value={projectsDefault}>
          <Navbar />
          <div className="bg-blue pt-28 overflow-x-hidden">
            <ProjectDetailedPage project={project as Project} />
          </div>
          <SocialBar />
          <Footer />
        </ProjectDetailsContext.Provider>
      </PersonalDetailsContext.Provider>
    </>
  ) : (
    <NotFound />
  );
};

export default ProjectDetail;

export async function getStaticProps(): Promise<{
  props: { personalDetails: PersonalDetails; projectDetails: Project[] };
}> {
  const personalDetails = (await getPersonalDetails()) as PersonalDetails;
  const projectDetails = (await getProjectDetails()) as Project[];
  return { props: { personalDetails, projectDetails } };
}

export async function getStaticPaths(): Promise<unknown> {
  const projectDetails = projectsDefault;
  const paths = projectDetails.map((p) => {
    return { params: { slug: p.slug } };
  });
  return {
    paths,
    fallback: false
  };
}
