import type { EducationEntry } from '../../types';

interface Props {
  education: EducationEntry[];
}

const EducationDisplay = ({ education }: Props) => {
  const visibleItems = education?.filter((item) => item.isVisible); // Filter just for the Visible ones
  return (
    <div>
      <h2>EDUCATION</h2>
      <hr />
      {visibleItems.map((edu) => (
        <div key={edu._id}>
          <p>
            {edu.startYear} - {edu.endYear} | <strong>{edu.institution}</strong>{' '}
            {edu.gpa && ` | GPA: ${edu.gpa}`}
          </p>
          <p>
            {edu.degree} - <em>{edu.fieldOfStudy}</em>
          </p>
        </div>
      ))}
    </div>
  );
};

export default EducationDisplay;
