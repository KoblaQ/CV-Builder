import { useMemo } from 'react';
import type { SkillEntry } from '../../types';

interface Props {
  skills: SkillEntry[];
}

const SkillDisplay = ({ skills }: Props) => {
  // Group skills by category for easier rendering
  const groupedSkills = useMemo(() => {
    const visibleItems = skills?.filter((skill) => skill.isVisible); // Filtering must be done inside the useMemo hook

    return visibleItems
      ?.sort((a, b) => a.name.localeCompare(b.name)) // compare and sort them alphabetically
      .reduce<Record<string, typeof visibleItems>>((category, skill) => {
        if (!category[skill.categoryId]) {
          category[skill.categoryId] = [];
        }
        category[skill.categoryId].push(skill);
        return category;
      }, {});
  }, [skills]);

  return (
    <div>
      <h2>TECHNICAL SKILLS</h2>
      <hr />
      {/* Group skills by category */}
      {Object.entries(groupedSkills ?? {}).map(([category, skills]) => (
        <div key={category} style={{ marginBottom: '1rem' }}>
          <strong>{category}:</strong>{' '}
          {skills.map((skill, index) => (
            <span key={skill._id}>
              {skill.name}
              {index < skills.length - 1 && ', '}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SkillDisplay;
