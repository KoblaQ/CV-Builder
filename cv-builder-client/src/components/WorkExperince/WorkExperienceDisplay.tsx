import type { WorkExperienceEntry } from '../../types';

interface Props {
  workExperience: WorkExperienceEntry[];
}

const WorkExperienceDisplay = ({ workExperience }: Props) => {
  const visibleItems = workExperience?.filter((item) => item.isVisible); // Filter just for the Visible ones
  return (
    <div>
      <h2>RELEVANT WORK EXPERIENCE</h2>
      <hr />
      {visibleItems.map((exp) => (
        <div key={exp._id}>
          <p>{exp.companyName}</p>
          <p>
            <strong>{exp.position}</strong> | {exp.startDate} - {exp.endDate}
          </p>
          {exp.jobDescription.map((desc, index) => (
            <ul key={index}>
              <li>{desc}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WorkExperienceDisplay;
