import WorkExperienceDisplay from './WorkExperienceDisplay';
import WorkExperienceEntryForm from './WorkExperienceForm';

import type { CvData } from '../../types';

interface Props {
  cvData: CvData | null;
}

// const updateSection = ({}) => {

// }

// Work Experience Component
const WorkExperience = ({ cvData }: Props) => {
  const workExperience = cvData?.workExperience; // Extract the about me info

  return workExperience ? (
    <div>
      <WorkExperienceEntryForm />
      <WorkExperienceDisplay workExperience={workExperience} />
    </div>
  ) : (
    <div>...loading Relevant Work Experiences</div>
  );
};

export default WorkExperience;
