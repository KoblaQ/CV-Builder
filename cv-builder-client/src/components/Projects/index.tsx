import type { CvData } from '../../types';
import ProjectDisplay from './ProjectDisplay';

interface Props {
  cvData: CvData | null;
}

const Projects = ({ cvData }: Props) => {
  const projects = cvData?.projects; // Extract the projects info

  return projects ? (
    <ProjectDisplay projects={projects} />
  ) : (
    <div>...loading Projects</div>
  );
};

export default Projects;
