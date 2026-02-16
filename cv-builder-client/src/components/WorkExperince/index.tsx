import WorkExperienceDisplay from './WorkExperienceDisplay';

import type { CvData } from '../../types';

interface Props {
  cvData: CvData | null;
}

const WorkExperience = ({ cvData }: Props) => {
  const workExperience = cvData?.workExperience; // Extract the about me info

  return workExperience ? (
    <WorkExperienceDisplay workExperience={workExperience} />
  ) : (
    <div>...loading Relevant Work Experiences</div>
  );
};

export default WorkExperience;
