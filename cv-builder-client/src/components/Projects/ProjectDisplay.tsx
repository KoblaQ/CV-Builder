import type { ProjectEntry } from '../../types';

interface Props {
  projects: ProjectEntry[];
}

const ProjectDisplay = ({ projects }: Props) => {
  const visibleItems = projects?.filter((item) => item.isVisible); // Filter just for the Visible ones
  return (
    <div>
      <h2>RELEVANT PROJECTS</h2>
      <hr />
      {visibleItems.map((project) => (
        <span key={project._id}>
          <p>
            <strong>{project.name}</strong>
          </p>
          <a href={project.url} target="_blank">
            {project.url}
          </a>
          <em>
            <p>{project.description}</p>
          </em>
        </span>
      ))}
    </div>
  );
};

export default ProjectDisplay;
