import type { CvData } from '../../types';
import SkillDisplay from './SkillsDisplay';

interface Props {
  cvData: CvData | null;
}

const Skills = ({ cvData }: Props) => {
  const skills = cvData?.skills;
  return skills ? (
    <SkillDisplay skills={skills} />
  ) : (
    <div>...loading Skills</div>
  );
};

export default Skills;
